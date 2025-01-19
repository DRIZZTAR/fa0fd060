import React from 'react';
import CallItem from './CallItem';

function CallGroup({ date, calls, onToggleArchive }) {
  return (
    <div>
      <div className="px-4 py-2 text-xs text-muted-foreground bg-muted/50 flex items-center justify-center">
        <span className="flex items-center space-x-1">
          <span className="text-gray-400">···</span>
          <span className="text-[10px]">{date}</span>
          <span className="text-gray-400">···</span>
        </span>
      </div>
      {calls.map(call => (
        <CallItem key={call.id} call={call} onToggleArchive={onToggleArchive} />
      ))}
    </div>
  );
}

export default CallGroup;

