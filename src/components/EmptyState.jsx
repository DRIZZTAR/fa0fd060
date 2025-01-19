import React from 'react';

function EmptyState({ icon: Icon, message }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
      <Icon className="w-12 h-12 mb-4" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}

export default EmptyState;

