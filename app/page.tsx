// // app/page.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    // Om användaren är inloggad, skicka till feeden direkt
    router.push('/feed');
  }, [router]);

  return <div style={{ background: '#000', height: '100vh' }} />;
}
