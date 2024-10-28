import React from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import FamilySection from './components/FamilySection';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src="/profile-image.jpg" 
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
          </div>
          <div className="space-y-6">
            <PersonalInfo />
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <FamilySection />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default App;