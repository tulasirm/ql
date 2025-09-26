import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';

export const metadata = {
  title: 'Quantaleaps - Showcase',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'
}

export default function ShowcasePage() {
  return (
    <>
      <NavbarFullMenu />
      <ShowcasesFullScreen />
    </>
  )
}
