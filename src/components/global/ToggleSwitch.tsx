import React from 'react';

const ToggleSwitch = ({ label, onChange }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-4">
      <span>{label}</span>
      <label className="relative inline-block w-16 h-8">
        <input
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span className="block w-full h-full bg-gray-300 rounded-full"></span>
        <span className="dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition transform"></span>
        <span
          className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center text-xs font-semibold text-white transition-opacity opacity-0"
          style={{ visibility: 'hidden' }}
        >
          YES
        </span>
        <span
          className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center text-xs font-semibold text-white transition-opacity opacity-0"
          style={{ visibility: 'hidden' }}
        >
          NO
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
