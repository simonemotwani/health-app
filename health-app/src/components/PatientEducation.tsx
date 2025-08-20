import React from 'react';

const PatientEducation: React.FC = () => {
  return (
    <div className="bg-white h-[245px] rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-full">
      <div className="flex flex-col items-center justify-center h-full px-[19px] py-[14px] gap-[10px]">
        {/* Header Section */}
        <div className="w-full flex flex-col gap-[3px] items-start">
          <h3 className="text-black text-lg font-normal font-['Inter'] leading-7 m-0">
            Patient Education
          </h3>
          <div className="w-full h-[1px] bg-[#DEE2E6]"></div>
        </div>
        
        {/* Coming Soon Text */}
        <div className="w-full">
          <p className="text-black text-base font-normal font-['Inter'] leading-normal m-0">
            Coming soon
          </p>
        </div>
        
        {/* Range of Motion Restoration Image */}
        <div className="w-[318px] h-[153px] flex-1 rounded-lg overflow-hidden">
          <img 
            src="/images/Range of Motion Restoration 1.png" 
            alt="Range of Motion Restoration"
            className="w-full h-full object-cover"
            style={{
              width: '300px',
              height: '135px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientEducation;