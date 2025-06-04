'use client';

import React, { Suspense } from 'react';
import PortfolioPage from '../components/pages/portfolio/page';
import ParticlesView from '../components/shared/particles/particles';

export default function Portfolio() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ParticlesView />
      <PortfolioPage />
    </Suspense>
  );
}
