import React from 'react';

interface StatsPanelProps {
  weeksEnrolled: number;
  compliance: string;
}

const StatsPanel: React.FC<StatsPanelProps> = ({
  weeksEnrolled,
  compliance
}) => {
  // Mock streak data
  const weekDays = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Today'];
  const streakStatus = [false, false, false, true, false, false, false]; // Only Saturday completed

  // Helper function to determine line color for circles
  const getCircleLineColor = (currentIndex: number) => {
    // Saturday (index 3) is completed, so Wed, Thu, Fri are past days
    // Past days (before and including current completed day) should have light lines
    if (currentIndex <= 3) { // Wed(0), Thu(1), Fri(2), Sat(3) are past/current
      return '#F8F9FA'; // Neutral-100 for passed days
    } else {
      return '#E9ECEF'; // Neutral-200 for upcoming days
    }
  };

  return (
    <div className="flex flex-col gap-[22px] w-full max-w-[460px]">
      {/* Stats Card */}
      <div className="bg-white rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden">
        {/* Left Stats Content Section */}
        <div className="p-3 flex flex-col gap-3 flex-1">
          {/* Stats Header */}
          <div className="flex items-start justify-between">
            {/* Left side */}
            <div className="flex flex-col">
              <div className="text-black text-lg font-normal font-['Inter'] leading-7">Stats</div>
              <div className="text-[#6c757d] text-xs font-normal font-['Inter'] leading-6">for Period 3</div>
            </div>
            
            {/* Right side - Streaks */}
            <div className="flex flex-col items-center">
              <div className="text-black text-xs font-normal font-['Inter'] leading-[18px] mb-1 mt-1">Streaks</div>
              <div className="flex items-center gap-1">
                <div className="text-[#6c757d] text-xs font-normal font-['Inter'] leading-[18px]">1</div>
                {/* Fire Icon */}
                <svg width="14" height="16" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 10C0.5 8.80133 0.734 7.7045 1.202 6.7095C1.66983 5.71467 2.2275 4.8275 2.875 4.048C3.5225 3.2685 4.186 2.60408 4.8655 2.05475C5.545 1.50542 6.08983 1.08333 6.5 0.788498V2.3C6.5 3.22433 6.81092 3.95541 7.43275 4.49325C8.05458 5.03108 8.752 5.3 9.525 5.3C9.84683 5.3 10.1529 5.24808 10.4432 5.14425C10.7336 5.04042 11.0127 4.88717 11.2807 4.6845L11.7115 4.34625C12.5653 4.99491 13.2436 5.81183 13.7462 6.797C14.2487 7.78233 14.5 8.85 14.5 10C14.5 11.5308 14.0648 12.8876 13.1943 14.0702C12.3238 15.2529 11.209 16.0788 9.85 16.548C10.2103 16.2378 10.4921 15.8677 10.6953 15.4375C10.8984 15.0073 11 14.5448 11 14.05C11 13.6013 10.9135 13.1677 10.7405 12.749C10.5673 12.3305 10.3179 11.9584 9.99225 11.6327L7.5 9.19625L5.03275 11.6327C4.70325 11.9622 4.44875 12.3321 4.26925 12.7422C4.08975 13.1526 4 13.5885 4 14.05C4 14.5448 4.10158 15.0073 4.30475 15.4375C4.50792 15.8677 4.78967 16.2378 5.15 16.548C3.791 16.0788 2.67625 15.2529 1.80575 14.0702C0.93525 12.8876 0.5 11.5308 0.5 10ZM7.5 10.5922L9.27875 12.3405C9.51092 12.5725 9.68917 12.8314 9.8135 13.1172C9.93783 13.4032 10 13.7142 10 14.05C10 14.7257 9.75642 15.3029 9.26925 15.7817C8.78208 16.2606 8.19233 16.5 7.5 16.5C6.80767 16.5 6.21792 16.2606 5.73075 15.7817C5.24358 15.3029 5 14.7257 5 14.05C5 13.7308 5.059 13.4273 5.177 13.1395C5.29483 12.8517 5.47625 12.5853 5.72125 12.3405L7.5 10.5922Z" fill="#EEA63A"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Streaks and Stats Content */}
          <div className="flex flex-col gap-1.5">
            {/* Streak Dots with dynamic lines */}
            <div className="flex gap-3 items-center w-full">
              {weekDays.map((day, index) => (
                <div key={index} className="relative">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {streakStatus[index] ? (
                      // Completed state 
                      <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id={`mask0_active_${index}`} style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                          <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask={`url(#mask0_active_${index})`}>
                          <path d="M12.5017 21.5C11.1877 21.5 9.95267 21.2507 8.7965 20.752C7.64033 20.2533 6.63467 19.5766 5.7795 18.7218C4.92433 17.8669 4.24725 16.8617 3.74825 15.706C3.24942 14.5503 3 13.3156 3 12.0017C3 10.6877 3.24942 9.45267 3.74825 8.2965C4.24692 7.14033 4.92375 6.13467 5.77875 5.2795C6.63375 4.42433 7.63917 3.74725 8.795 3.24825C9.95083 2.74942 11.1858 2.5 12.5 2.5C13.5533 2.5 14.55 2.65833 15.49 2.975C16.43 3.29167 17.2923 3.73333 18.077 4.3L16.9923 5.40975C16.3461 4.96475 15.6462 4.61858 14.8925 4.37125C14.1388 4.12375 13.3413 4 12.5 4C10.2833 4 8.39583 4.77917 6.8375 6.3375C5.27917 7.89583 4.5 9.78333 4.5 12C4.5 14.2167 5.27917 16.1042 6.8375 17.6625C8.39583 19.2208 10.2833 20 12.5 20C14.7167 20 16.6042 19.2208 18.1625 17.6625C19.7208 16.1042 20.5 14.2167 20.5 12C20.5 11.6487 20.4769 11.3013 20.4307 10.9578C20.3846 10.6143 20.3153 10.2802 20.223 9.95575L21.4345 8.73475C21.6178 9.24875 21.7579 9.77758 21.8547 10.3212C21.9516 10.8647 22 11.4243 22 12C22 13.3142 21.7507 14.5492 21.252 15.705C20.7533 16.8608 20.0766 17.8663 19.2218 18.7213C18.3669 19.5763 17.3617 20.2531 16.206 20.7518C15.0503 21.2506 13.8156 21.5 12.5017 21.5ZM11.0808 16.2538L7.177 12.35L8.23075 11.2963L11.0808 14.1463L20.9462 4.2655L22 5.31925L11.0808 16.2538Z" fill="#2196F3"/>
                        </g>
                      </svg>
                    ) : (
                      // Inactive state 
                      <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id={`mask0_inactive_${index}`} style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                          <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask={`url(#mask0_inactive_${index})`}>
                          <path d="M12.5017 21.5C11.1877 21.5 9.95267 21.2512 8.7965 20.7535C7.64033 20.256 6.63467 19.5807 5.7795 18.7275C4.92433 17.8745 4.24725 16.8714 3.74825 15.7182C3.24942 14.5651 3 13.3321 3 12.0192C3 11.3594 3.06542 10.7112 3.19625 10.0745C3.32692 9.43767 3.51792 8.81667 3.76925 8.2115L4.9345 9.377C4.79483 9.81033 4.6875 10.2448 4.6125 10.6803C4.5375 11.1159 4.5 11.5558 4.5 12C4.5 14.2333 5.275 16.125 6.825 17.675C8.375 19.225 10.2667 20 12.5 20C14.7333 20 16.625 19.225 18.175 17.675C19.725 16.125 20.5 14.2333 20.5 12C20.5 9.76667 19.725 7.875 18.175 6.325C16.625 4.775 14.7333 4 12.5 4C12.05 4 11.6093 4.0375 11.178 4.1125C10.7465 4.1875 10.3193 4.29483 9.89625 4.4345L8.74625 3.28475C9.34242 3.02958 9.94333 2.835 10.549 2.701C11.1548 2.567 11.7859 2.5 12.4423 2.5C13.7629 2.5 15.004 2.74808 16.1655 3.24425C17.327 3.74042 18.3385 4.41767 19.2 5.276C20.0615 6.13433 20.7435 7.14108 21.246 8.29625C21.7487 9.45142 22 10.6857 22 11.999C22 13.3125 21.7507 14.5473 21.252 15.7035C20.7533 16.8597 20.0766 17.8653 19.2218 18.7205C18.3669 19.5757 17.3617 20.2528 16.206 20.7518C15.0503 21.2506 13.8156 21.5 12.5017 21.5ZM6.2115 6.90375C5.88467 6.90375 5.60425 6.78683 5.37025 6.553C5.13625 6.319 5.01925 6.0385 5.01925 5.7115C5.01925 5.38467 5.13625 5.10425 5.37025 4.87025C5.60425 4.63625 5.88467 4.51925 6.2115 4.51925C6.5385 4.51925 6.819 4.63625 7.053 4.87025C7.28683 5.10425 7.40375 5.38467 7.40375 5.7115C7.40375 6.0385 7.28683 6.319 7.053 6.553C6.819 6.78683 6.5385 6.90375 6.2115 6.90375Z" fill="#CED4DA"/>
                        </g>
                      </svg>
                    )}
                  </div>
                  {/* Dynamic line between circles */}
                  {index < weekDays.length - 1 && (
                    <div 
                      className="absolute top-1/2 -right-[4px] transform -translate-y-1/2 z-10"
                      style={{
                        width: '1px',
                        height: '24px',
                        backgroundColor: getCircleLineColor(index)
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Day Labels with their own lines */}
            <div className="flex gap-3 w-full">
              {weekDays.map((day, index) => (
                <div key={index} className="relative">
                  <div className="w-6 text-center text-[10px] text-[#6c757d] font-['Inter'] leading-[18px]">
                    {day}
                  </div>
                  {/* Line between day labels */}
                  {index < weekDays.length - 1 && (
                    <div 
                      className="absolute top-1/2 -right-[4px] transform -translate-y-1/2 z-10"
                      style={{
                        width: '1px',
                        height: '18px',
                        backgroundColor: '#E9ECEF'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Stats Numbers */}
            <div className="flex gap-3 items-center justify-center w-full mt-4">
              {/* Weeks Enrolled */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal text-center whitespace-nowrap">
                  Weeks Enrolled
                </div>
                <div className="text-black text-base font-normal font-['Inter'] leading-normal w-[74px] text-center">
                  {weeksEnrolled}
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-[66px] w-0 border-l border-[#DEE2E6]"></div>
              
              {/* Compliance */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-[#6c757d] text-sm font-normal font-['Inter'] leading-normal text-center w-[95px]">
                  Compliance
                </div>
                <div className="text-black text-base font-normal font-['Inter'] leading-normal w-[74px] text-center">
                  {compliance}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Orange Section */}
        <div className="bg-[#eea63a] flex items-center justify-center w-[150px] px-3 py-5 self-stretch">
          <div className="text-white text-base font-medium font-['Inter'] leading-[30px] text-center">
            View Stats
          </div>
        </div>
      </div>
      
       {/* Billing Button */}
      <div className="self-stretch h-16 p-3 bg-[#2196F3] rounded-[10px] inline-flex justify-center items-center gap-6 cursor-pointer transition-opacity hover:opacity-90 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Dollar Sign Icon */}
        <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_dollar" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="38">
            <rect width="44" height="38" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_dollar)">
            <path d="M20.2111 33.25V29.8458C18.5916 29.5292 17.1937 28.9222 16.0173 28.025C14.8409 27.1278 13.9777 25.8611 13.4277 24.225L16.8194 23.0375C17.2777 24.3042 17.9576 25.2674 18.859 25.9271C19.7604 26.5868 20.9444 26.9167 22.4111 26.9167C23.6638 26.9167 24.7257 26.6726 25.5965 26.1844C26.4673 25.6962 26.9027 24.9375 26.9027 23.9083C26.9027 22.9847 26.5666 22.2524 25.8944 21.7115C25.2222 21.1705 23.6638 20.5569 21.2194 19.8708C18.5916 19.1583 16.7888 18.3073 15.8111 17.3177C14.8333 16.3281 14.3444 15.1208 14.3444 13.6958C14.3444 11.9806 14.9861 10.6479 16.2694 9.69792C17.5527 8.74792 18.8666 8.20694 20.2111 8.075V4.75H23.8777V8.075C25.4055 8.28611 26.6659 8.76771 27.659 9.51979C28.652 10.2719 29.3777 11.1889 29.8361 12.2708L26.4444 13.5375C26.0777 12.6931 25.5583 12.0597 24.8861 11.6375C24.2138 11.2153 23.2972 11.0042 22.1361 11.0042C20.7916 11.0042 19.768 11.2615 19.0652 11.776C18.3625 12.2906 18.0111 12.9306 18.0111 13.6958C18.0111 14.5667 18.4694 15.2528 19.3861 15.7542C20.3027 16.2556 21.8916 16.7833 24.1527 17.3375C26.2611 17.8653 27.8576 18.7031 28.9423 19.851C30.027 20.999 30.5694 22.325 30.5694 23.8292C30.5694 25.7028 29.9277 27.1278 28.6444 28.1042C27.3611 29.0806 25.7722 29.6875 23.8777 29.925V33.25H20.2111Z" fill="white"/>
          </g>
        </svg>
        
        <div className="flex-1 justify-center text-white text-base font-medium font-['Inter'] leading-none">
          View Billing Details
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;