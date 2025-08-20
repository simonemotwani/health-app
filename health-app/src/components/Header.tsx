import React from 'react';

interface HeaderProps {
  patientName: string;
  initials: string;
  phone: string;
  email: string;
  injuryLocation: string;
  diagnosis: string;
  lastActive: string;
}

const Header: React.FC<HeaderProps> = ({
  patientName,
  initials,
  phone,
  email,
  injuryLocation,
  diagnosis,
  lastActive
}) => {
  return (
    <div className="bg-white px-8 py-6 border-b border-[#E4E4E4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-full">

      {/* Breadcrumb */}
      <div className="text-[#4d4482] text-xs font-normal font-['Inter'] mb-6 leading-normal">
        <span className="font-semibold">Dashboard</span>
        <span className="mx-1 font-medium">/</span>
        <span className="font-medium">Wimtach Client</span>
      </div>
      
      {/* Patient Info Section */}
      <div className="flex items-center justify-between gap-8">
        {/* Left Section - Avatar + Patient Details */}
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="w-[39.923px] h-[39.923px] bg-[#adb5bd] rounded-full flex items-center justify-center text-white text-[15px] font-medium font-['Inter'] flex-shrink-0">
            {initials}
          </div>
          
          {/* Patient Details */}
          <div className="flex flex-col">
            <h2 className="text-black text-lg font-medium font-['Inter'] leading-7 tracking-[0.4px] mb-1">
              {patientName}
            </h2>
            <div className="text-[#6c757d] text-xs font-medium font-['Inter'] leading-6 mb-3">
              Last Active: {lastActive}
            </div>
            <button className="flex px-3 py-1.5 rounded-[10px] bg-[#845EC0] cursor-pointer transition-colors hover:bg-[#7C3AED] self-start">
              <div className="text-center justify-start text-white text-sm font-medium font-['Inter'] leading-normal">
                Discharge Patient
              </div>
            </button>
          </div>
        </div>
        
        {/* Right Section - Contact Card + Edit Button */}
        <div className="flex items-center gap-3">
          {/* Contact Info Card */}
          <div className="px-6 py-2.5 rounded-[10px] border border-[#dee2e6] inline-flex flex-col justify-start items-start gap-3">
            <div className="inline-flex justify-start items-center gap-14">
              {/* Left Column */}
              <div className="inline-flex flex-col justify-center items-start gap-3">
                {/* Phone */}
                <div className="flex flex-col justify-center items-start">
                  <div className="w-12 justify-center text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal">Phone:</div>
                  <div className="justify-center text-black text-sm font-medium font-['Inter']">{phone}</div>
                </div>
                {/* Injury Location */}
                <div className="flex flex-col justify-center items-start">
                  <div className="w-28 justify-center text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal">Injury Location:</div>
                  <div className="justify-center text-black text-sm font-medium font-['Inter']">{injuryLocation}</div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="inline-flex flex-col justify-center items-start gap-3">
                {/* Email */}
                <div className="flex flex-col justify-center items-start">
                  <div className="w-12 justify-center text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal">Email:</div>
                  <div className="justify-center text-black text-sm font-medium font-['Inter']">{email}</div>
                </div>
                {/* Diagnosis */}
                <div className="flex flex-col justify-center items-start">
                  <div className="w-28 justify-center text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal">Diagnosis:</div>
                  <div className="justify-center text-black text-sm font-medium font-['Inter'] leading-normal">{diagnosis}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Edit Button */}
          <button className="relative w-[45.006px] h-[43px] cursor-pointer transition-opacity hover:opacity-90">
            
            {/* Background circle with drop shadow */}
            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-1 -top-1">
              <g filter="url(#filter0_d_edit)">
                <path d="M49.0001 22.0002C49.0001 43.5002 48.3013 43.5003 26.5001 43.5003C4.00006 43.5003 4.00006 43.5002 4.00006 22.0002C4.00006 1.50025 2.9992 0.500249 26.5001 0.500249C49.0001 0.496515 49.0001 0.211283 49.0001 22.0002Z" fill="#ADB5BD"/>
                <path d="M26.4998 1.00073C32.138 0.999797 36.3257 0.981635 39.4587 1.29175C42.5981 1.6025 44.5644 2.23514 45.8445 3.44214C47.119 4.64397 47.8044 6.50196 48.1521 9.50562C48.4995 12.5073 48.4998 16.5407 48.4998 22.0007C48.4998 27.3844 48.4552 31.3794 48.0544 34.363C47.6537 37.3463 46.9079 39.2207 45.5857 40.446C44.2576 41.6769 42.2622 42.3339 39.1599 42.6667C36.0616 42.9991 31.9616 43.0007 26.4998 43.0007C20.8632 43.0007 16.676 42.9992 13.5447 42.6667C10.4079 42.3337 8.43988 41.6759 7.15796 40.4509C5.88076 39.2304 5.19595 37.3608 4.84839 34.3718C4.50103 31.3843 4.49976 27.3881 4.49976 22.0007C4.49976 16.857 4.43811 12.9846 4.70874 10.0378C4.97953 7.08974 5.57611 5.18734 6.79858 3.90796C8.02101 2.62865 9.95557 1.88226 13.1335 1.47241C16.3068 1.06322 20.6176 1.00073 26.4998 1.00073Z" stroke="#ADB5BD"/>
              </g>
              <defs>
                <filter id="filter0_d_edit" x="-0.00610352" y="0.499756" width="53.0062" height="51.0005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_edit"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_edit" result="shape"/>
                </filter>
              </defs>
            </svg>
            
            {/* Edit icon */}
            <svg width="25" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[10px] top-[9px]">
              <path d="M21.8188 3.54785C20.363 2.15033 18.0028 2.15039 16.5472 3.548L4.09918 15.4995C3.67592 15.9059 3.37841 16.417 3.23977 16.976L2.09853 21.5775C2.0357 21.8309 2.11427 22.0974 2.3061 22.2815C2.49795 22.4657 2.77557 22.5411 3.03949 22.4808L7.83246 21.3853C8.41496 21.2521 8.94754 20.9664 9.37093 20.5599L21.8189 8.60836C23.2745 7.21087 23.2745 4.94525 21.8188 3.54785ZM17.6521 4.60859C18.4975 3.79684 19.8684 3.7968 20.7139 4.60851C21.5594 5.42015 21.5595 6.73607 20.714 7.54776L19.7856 8.43921L16.7237 5.49987L17.6521 4.60859ZM15.6189 6.56059L18.6808 9.49993L8.26601 19.4993C8.0471 19.7095 7.77173 19.8572 7.47055 19.9261L3.91259 20.7393L4.75978 17.3235C4.83146 17.0344 4.98527 16.7702 5.20409 16.5601L15.6189 6.56059Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;