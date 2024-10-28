import React from 'react';

export default function PersonalInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600"><span className="font-semibold">Name:</span> N. Sonika</p>
          <p className="text-gray-600"><span className="font-semibold">DOB:</span> 20-4-1996</p>
          <p className="text-gray-600"><span className="font-semibold">Place of Birth:</span> Banaganapalle</p>
          <p className="text-gray-600"><span className="font-semibold">Height:</span> 5.5"</p>
          <p className="text-gray-600"><span className="font-semibold">Color:</span> White</p>
        </div>
        <div>
          <p className="text-gray-600"><span className="font-semibold">Education:</span> MBBS (FRCR-Radiology)</p>
          <p className="text-gray-600"><span className="font-semibold">Brothers:</span> 2 (Married)</p>
          <p className="text-gray-600"><span className="font-semibold">Sister:</span> No</p>
          <p className="text-gray-600"><span className="font-semibold">Rashi:</span> Rohini - I Padam</p>
          <p className="text-gray-600"><span className="font-semibold">Gothram:</span> Chinisetla</p>
        </div>
      </div>
    </div>
  );
}