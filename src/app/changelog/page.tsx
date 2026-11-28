import type { Metadata } from 'next'
import ChangelogPage from '@/components/ChangelogPage'
import { SITE_URL } from '@/app/sitemap'

export const metadata: Metadata = {
  title: 'Changelog - TaskPulse',
  description:
    'Every user visible change to TaskPulse, newest first, including fixes, security improvements, and removals.',
  alternates: { canonical: `${SITE_URL}/changelog` },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ChangelogPage />
}
