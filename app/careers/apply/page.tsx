import type { Metadata } from 'next';
import ApplyForm from './ApplyForm';
import { roles, isValidRoleTitle } from '../../lib/careers';

export const metadata: Metadata = {
  title: 'Apply Now | Careers at HYNOX, Coimbatore',
  description:
    'Apply for open roles at HYNOX. Submit your details and resume online — no email required. Internships and full-time positions in software development, design, marketing, and AI.',
  // The parent careers layout points at /careers, so this page sets its own.
  alternates: { canonical: 'https://hynox.in/careers/apply' },
  robots: { index: false, follow: true },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string | string[] }>;
}) {
  const { role } = await searchParams;
  const requested = Array.isArray(role) ? role[0] : role;

  // Resolve the role on the server so the dropdown renders pre-selected in the
  // initial HTML; fall back to the first opening if the link is stale.
  const initialRole = isValidRoleTitle(requested) ? requested! : roles[0].title;

  return <ApplyForm initialRole={initialRole} />;
}
