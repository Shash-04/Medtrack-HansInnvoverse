"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import data from '../../data/data.json';

interface Medicine {
  medicine_id: string;
  name: string;
  manufacturer: string;
  dosage: string;
  price: number;
  expiration_date: string;
  stock: number;
}

const MedicineCards: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const medicines: Medicine[] = data.medicines;
  
  // Display only first 6 items (2 rows of 3) when collapsed
  const displayedMedicines = isExpanded ? medicines : medicines.slice(0, 6);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedMedicines.map((med) => (
          <div
            key={med.medicine_id}
            className="bg-black text-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200"
          >
            <h2 className="text-3xl font-bold mb-2">{med.name}</h2>
            <div className="space-y-2 text-md text-gray-100">
              <p className="flex justify-between">
                <span>Manufacturer:</span>
                <span className="font-medium">{med.manufacturer}</span>
              </p>
              <p className="flex justify-between">
                <span>Dosage:</span>
                <span className="font-medium">{med.dosage}</span>
              </p>
              <p className="flex justify-between">
                <span>Price:</span>
                <span className="font-medium">${med.price.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Expires:</span>
                <span className="font-medium">{med.expiration_date}</span>
              </p>
              <p className="flex justify-between">
                <span>Stock:</span>
                <span className={`font-medium ${
                  med.stock < 10 ? 'text-red-300' : 
                  med.stock < 30 ? 'text-yellow-300' : 
                  'text-green-300'
                }`}>
                  {med.stock} units
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {medicines.length > 6 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 mx-auto flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={20} />
            </>
          ) : (
            <>
              Show More <ChevronDown size={20} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default MedicineCards;