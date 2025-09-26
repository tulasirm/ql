'use client';
import { useEffect } from 'react';
import loadingPace from "@/common/loadingPace";

function LoadingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.Pace) {
        loadingPace();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hideX">
      <div className="loading">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
      <div id="preloader"></div>
    </div>
  );
};

export default LoadingScreen;
