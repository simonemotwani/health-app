import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import HEPSummary from './HEPSummary';
import StatsPanel from './StatPanel';
import PatientEducation from './PatientEducation';

const PatientProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock patient data
  const patientData = {
    id: id || '1',
    name: 'Wimtach Client',
    initials: 'WI',
    phone: '(555) 555-5555',
    email: 'wimtachclient@hotmail.com',
    injuryLocation: 'Right',
    diagnosis: 'Other specified malignant neoplasm of skin, unspecified - C4499',
    lastActive: 'Mar 20, 2019 23:14',
    weeksEnrolled: 9,
    compliance: '16/30',
    sessionsPerDay: 5,
    totalReps: 254,
    editedTime: '16 hours ago'
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <Header
        patientName={patientData.name}
        initials={patientData.initials}
        phone={patientData.phone}
        email={patientData.email}
        injuryLocation={patientData.injuryLocation}
        diagnosis={patientData.diagnosis}
        lastActive={patientData.lastActive}
      />
      
      {/* Main content area */}
      <div className="flex-1 p-6">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-none ml-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <HEPSummary
                patientName={patientData.name}
                sessionsPerDay={patientData.sessionsPerDay}
                totalReps={patientData.totalReps}
                editedTime={patientData.editedTime}
              />
              
              <PatientEducation />
            </div>
            
            {/* Right Column - Stats Panel */}
            <div className="lg:col-span-2">
              <StatsPanel
                weeksEnrolled={patientData.weeksEnrolled}
                compliance={patientData.compliance}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;