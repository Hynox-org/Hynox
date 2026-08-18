/**
 * Shared between the contact form UI and the submission API so the stored
 * label always matches what the user picked.
 */
export const SERVICES = [
  { value: 'web-application', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'shopify-store', label: 'Shopify Store' },
  { value: 'erp-software', label: 'ERP Software' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'others', label: 'Others' },
] as const;

export function serviceLabel(value: string | undefined): string {
  if (!value) return 'Not specified';
  return SERVICES.find((s) => s.value === value)?.label ?? value;
}
