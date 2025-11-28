// app/legal/[page]/page.tsx

import PrivacyPolicy from '@/components/Pages/legal/PrivacyPolicy';
import TermsOfUse from '@/components/Pages/legal/TermsofUse';

interface LegalPageProps {
  params: {
    page: 'terms' | 'privacy';
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { page } = await params;

  if (page === 'terms') return <TermsOfUse />;
  if (page === 'privacy') return <PrivacyPolicy />;

  return <h1 className="py-20 text-center">404 - Page Not Found</h1>;
}
