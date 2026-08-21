'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Turnstile, { type TurnstileHandle } from '../../components/Turnstile';
import { roles } from '../../lib/careers';
import { countries } from '../../lib/countries';
import { Check, ArrowLeft, ChevronDown, Upload } from 'lucide-react';

const MAX_RESUME_BYTES = 4 * 1024 * 1024;

/** `initialRole` is resolved and validated on the server by the page. */
export default function ApplyForm({ initialRole }: { initialRole: string }) {
  const [jobTitle, setJobTitle] = useState(initialRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [additionalLinks, setAdditionalLinks] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const turnstileRef = useRef<TurnstileHandle>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedCountryObj =
    countries.find((c) => c.code === country) || countries[0];

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (file && file.size > MAX_RESUME_BYTES) {
      setSubmitError('Resume must be smaller than 4MB.');
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setSubmitError('');
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      setSubmitError('Please attach your resume before submitting.');
      return;
    }
    if (!turnstileToken) {
      setSubmitError('Please complete the verification below before submitting.');
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('jobTitle', jobTitle);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', `${country} ${phoneNumber}`);
      formData.append('coverLetter', coverLetter);
      formData.append('additionalLinks', additionalLinks);
      formData.append('turnstileToken', turnstileToken);
      formData.append('resume', resume);

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setCoverLetter('');
        setAdditionalLinks('');
        setResume(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitError(
          data.error || 'Failed to submit your application. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError('An error occurred. Please try again.');
    } finally {
      // Turnstile tokens are single-use, so clear it for any retry.
      setTurnstileToken('');
      turnstileRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-light-wrapper">
      <Header />

      <main className="contact-page-container">
        <div className="apply-page-grid">
          <div className="form-container-clean">
            <Link href="/careers" className="apply-back-link">
              <ArrowLeft size={16} />
              Back to all openings
            </Link>

            <div className="form-card-header">
              <h2>Apply to HYNOX</h2>
              <p>Fill in your details and attach your resume. We review every application.</p>
            </div>

            {submitSuccess ? (
              <div className="form-success-alert animate-fade-in">
                <div className="success-icon">
                  <Check size={24} strokeWidth={2.5} />
                </div>
                <h3>Application Submitted!</h3>
                <p>
                  Thank you for applying to HYNOX. We have emailed you a confirmation and
                  our hiring team will get back to you shortly.
                </p>
                <Link href="/careers" className="apply-back-link" style={{ marginTop: '1rem' }}>
                  <ArrowLeft size={16} />
                  Browse other openings
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="campus-contact-form">
                {/* Role Selection */}
                <div className="form-group">
                  <label htmlFor="jobTitle">Role You&apos;re Applying For *</label>
                  <div className="select-input-wrapper">
                    <select
                      id="jobTitle"
                      required
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="service-select-element"
                    >
                      {roles.map((role) => (
                        <option key={role.title} value={role.title}>
                          {role.title} ({role.type})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="phone-input-wrapper">
                    <div className="country-selector">
                      <span className="country-flag">{selectedCountryObj.flag}</span>
                      <span className="country-code-display">{country}</span>
                      <ChevronDown className="dropdown-arrow" size={10} strokeWidth={2.5} />
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="country-select"
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.name} ({c.code})
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="form-group">
                  <label htmlFor="resume">Resume / CV *</label>
                  <label
                    htmlFor="resume"
                    className={`resume-upload-box ${resume ? 'has-file' : ''}`}
                  >
                    <Upload size={18} />
                    <span className="resume-upload-text">
                      {resume ? resume.name : 'Click to upload your resume'}
                    </span>
                    <span className="resume-upload-hint">PDF, DOC or DOCX &middot; max 4MB</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeChange}
                    className="resume-file-input"
                  />
                </div>

                {/* Portfolio / Links */}
                <div className="form-group">
                  <label htmlFor="additionalLinks">Portfolio / LinkedIn (Optional)</label>
                  <input
                    type="text"
                    id="additionalLinks"
                    placeholder="https://linkedin.com/in/yourname"
                    value={additionalLinks}
                    onChange={(e) => setAdditionalLinks(e.target.value)}
                  />
                </div>

                {/* Cover Letter */}
                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                  <textarea
                    id="coverLetter"
                    rows={4}
                    placeholder="Tell us why you are a great fit for this role..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  ></textarea>
                </div>

                {/* Cloudflare Turnstile verification */}
                <div className="form-group turnstile-group">
                  <Turnstile
                    ref={turnstileRef}
                    onVerify={setTurnstileToken}
                    onExpire={() => setTurnstileToken('')}
                  />
                </div>

                {submitError && (
                  <p className="form-error-message" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn-send-message ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting || !turnstileToken}
                >
                  {isSubmitting && <span className="spinner" />}
                  {isSubmitting ? 'Submitting…' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
