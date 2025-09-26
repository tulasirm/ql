

export const metadata = {
  title: 'Quantaleaps-Insights',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'
}

import { redirect } from 'next/navigation';

export default function BlogGridPage() {
  redirect('/insights/1');
  return null;
}