import React from 'react';

interface HEPSummaryProps {
  patientName: string;
  sessionsPerDay: number;
  totalReps: number;
  editedTime: string;
}

const HEPSummary: React.FC<HEPSummaryProps> = ({
  patientName,
  sessionsPerDay,
  totalReps,
  editedTime
}) => {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden w-full relative">
      {/* Main Content Section */}
      <div className="flex-1 px-[30px] py-4">
        {/* Header with Title and Edit Info */}
        <div className="flex justify-between items-center mb-[15px]">
          <div className="text-black text-lg font-normal font-['Inter'] leading-7">
            New HEP for {patientName}
          </div>
          <div className="text-center">
            <span className="text-[#8c8c8c] text-xs font-normal font-['Inter'] leading-normal">Edited</span>
            <span className="text-black text-xs font-normal font-['Inter'] leading-normal"> {editedTime}</span>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="flex items-center justify-between w-[529px]">
          {/* Sessions per Day */}
          <div className="flex-1 flex flex-col items-center gap-1.5">
            <div className="text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal text-center">
              Sessions per Day
            </div>
            <div className="text-black text-base font-normal font-['Inter'] leading-normal text-center">
              {sessionsPerDay}
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="h-[62px] w-0 border-l border-[#DEE2E6] mx-4"></div>
          
          {/* Total Reps */}
          <div className="flex-1 flex flex-col items-center gap-1.5">
            <div className="text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal text-center">
              Total Reps
            </div>
            <div className="text-black text-base font-normal font-['Inter'] leading-normal text-center">
              {totalReps}
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit HEP Section - Right Side */}
      <div className="w-[150px] bg-[#E791D9] flex items-center justify-center px-[15px] py-[51px] self-stretch">
        <div className="text-white text-base font-medium font-['Inter'] leading-[30px] text-center">
          Edit HEP
        </div>
      </div>
    </div>
  );
};

export default HEPSummary;