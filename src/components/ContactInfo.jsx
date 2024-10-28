import React from 'react';

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">Contact Information</h2>
      <div className="space-y-2">
        <p className="text-gray-600"><span className="font-semibold">Address:</span></p>
        <p className="text-gray-600">New Sri Vasavi Jewellers</p>
        <p className="text-gray-600">Main Bazar, Banaganapalle</p>
        <p className="text-gray-600">Nandyal (DT), A.P.</p>
        <p className="text-gray-600"><span className="font-semibold">Phone:</span> 9440546306</p>
      </div>
    </div>
  );
}