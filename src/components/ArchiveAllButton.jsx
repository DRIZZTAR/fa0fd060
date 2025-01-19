import React from 'react';
import Button from './Button';
import { Archive } from 'lucide-react';

function ArchiveAllButton({ onClick, isArchive, isEmpty }) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`flex items-center justify-start py-6 rounded-t-lg ${isEmpty ? 'opacity-0' : ''} bg-gray-100 hover:bg-white transition-all duration-300`}
    >
      <Archive className="h-4 w-4 mr-2" />
      {isArchive ? 'Archive all' : 'Unarchive all'}
    </Button>
  );
}

export default ArchiveAllButton;

