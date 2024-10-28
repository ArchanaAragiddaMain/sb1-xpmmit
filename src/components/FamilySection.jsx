import React from 'react';

export default function FamilySection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">Family Details</h2>
      <div className="space-y-2">
        <p className="text-gray-600"><span className="font-semibold">Father:</span> Nukala Venkata Subbaiah</p>
        <p className="text-gray-600"><span className="font-semibold">Business:</span> New Sri Vasavi Jewellers</p>
        <p className="text-gray-600"><span className="font-semibold">Location:</span> Main Bazar, Banaganapalle</p>
        <p className="text-gray-600"><span className="font-semibold">District:</span> Nandyal (DT), A.P.</p>
        <p className="text-gray-600"><span className="font-semibold">Contact:</span> 9440546306</p>
      </div>
    </div>
  );
}