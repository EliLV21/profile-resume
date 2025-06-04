'use client';

import React, { Suspense } from 'react';
import HomePage from './components/pages/home/home';
import ParticlesView from './components/shared/particles/particles';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ParticlesView />
      <HomePage />
    </Suspense>
  );
}
