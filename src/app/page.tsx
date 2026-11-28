import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'TaskPulse, AI task boards for freelancers',
  description: 'Paste notes, emails, or PDFs. TaskPulse extracts tasks onto a Kanban board with workload health and autopilot planning.',
  openGraph: {
    title: 'TaskPulse, AI task boards for freelancers',
    description: 'Paste notes, emails, or PDFs. TaskPulse extracts tasks onto a Kanban board with workload health and autopilot planning.',
    url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://taskpulse.app',
    type: 'website',
  },
};

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Already logged in <Icons.ArrowRight size={13}/> skip landing page, go straight to dashboard
  if (user) redirect('/dashboard');

  return <LandingPage />;
}
