import React from 'react';
import CallGroup from './CallGroup';
import EmptyState from './EmptyState';
import { Inbox, Archive } from 'lucide-react';

function CallList({ groupedCalls, onToggleArchive, activeTab }) {
  return (
    <div className="p-0 mb-2 overflow-y-auto h-[calc(min(90vh,800px)-210px)] bg-white rounded-lg shadow">
      {Object.keys(groupedCalls).length > 0 ? (
        Object.entries(groupedCalls).map(([date, calls]) => (
          <CallGroup 
            key={date} 
            date={date} 
            calls={calls} 
            onToggleArchive={onToggleArchive} 
          />
        ))
      ) : (
        <EmptyState 
          icon={activeTab === 'inbox' ? Inbox : Archive} 
          message={activeTab === 'inbox' ? "Your inbox is empty" : "No archived calls"} 
        />
      )}
    </div>
  );
}

export default CallList;

