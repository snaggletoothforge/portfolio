'use client';

import { useEffect } from 'react';

export default function BrandWrapper({ 
  children, 
  accentColor, 
  bgColor, 
  textColor,
  navTextColor 
}) {
  useEffect(() => {
    // Set CSS variables on body so Nav can access them
    document.body.style.setProperty('--accent-color', accentColor);
    document.body.style.setProperty('--bg-color', bgColor);
    document.body.style.setProperty('--text-color', textColor);
    document.body.style.setProperty('--nav-text-color', navTextColor || '#ffffff');
    
    // Cleanup on unmount - reset to defaults
    return () => {
      document.body.style.removeProperty('--accent-color');
      document.body.style.removeProperty('--bg-color');
      document.body.style.removeProperty('--text-color');
      document.body.style.removeProperty('--nav-text-color');
    };
  }, [accentColor, bgColor, textColor, navTextColor]);

  return <>{children}</>;
}