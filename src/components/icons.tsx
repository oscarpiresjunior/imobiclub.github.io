import React from 'react';

interface IconProps {
  className?: string;
}

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const DollarSlashIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M15 12c-1.657 0-3 .895-3 2s1.343 2 3 2m0-8c1.11 0 2.08.402 2.599 1M15 12V7m0 1v.01M9 12c-1.657 0-3 .895-3 2s1.343 2 3 2m0-8c1.11 0 2.08.402 2.599 1M9 12V7m0 1v.01M5 19L19 5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 11.083C10.337 10.418 9.49 10 8.5 10c-1.933 0-3.5 1.567-3.5 3.5S6.567 17 8.5 17c.99 0 1.837-.418 2.5-1.083m6-2.834c.663.665 1.51 1.083 2.5 1.083 1.933 0 3.5-1.567 3.5-3.5S18.433 8 16.5 8c-.99 0-1.837.418-2.5 1.083" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.293 5.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1 1 0 010-1.414z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const UploadIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428A10.02 10.02 0 0022 12.015a10.02 10.02 0 00-2.572-3.413m-14.856 0A10.02 10.02 0 012 12.015a10.02 10.02 0 012.572 3.413M5.428 15.428L5.428 15.428A7.962 7.962 0 016 12.015a7.962 7.962 0 01.572-3.413m12.856 0L18.572 8.6A7.962 7.962 0 0018 12.015a7.962 7.962 0 00.572 3.413M12 18.015v-6m0 0V6.015m0 6l3.428-3.428M12 12.015L8.572 8.6M12 12.015l3.428 3.428m0 0l-3.428 3.428m-3.428-3.428l-3.428 3.428" />
  </svg>
);

export const MegaphoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.148-6.346a1.76 1.76 0 011.642-2.583h1.554a1.76 1.76 0 011.642 2.583l-1.836 5.421M16.536 6.464a1.76 1.76 0 010 2.492l-1.836 1.836a1.76 1.76 0 01-2.492 0l-1.836-1.836a1.76 1.76 0 010-2.492l1.836-1.836a1.76 1.76 0 012.492 0l1.836 1.836z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
