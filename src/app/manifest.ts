import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TaskPulse - AI Task Management',
    short_name: 'TaskPulse',
    description: 'Paste text, a PDF, or a web page URL and get a Kanban board, a workload health score, and DOCX or PDF export.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060a0a',
    theme_color: '#0d9488',
    icons: [
      {
        src: '/icon-64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/apple-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
