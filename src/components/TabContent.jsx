import React from 'react';
import ArchiveAllButton from './ArchiveAllButton';
import CallList from './CallList';

function TabContent({ activeTab, groupedCalls, onToggleArchive, handleArchiveAll, handleUnarchiveAll }) {
  return (
    <div>
      <ArchiveAllButton 
        onClick={activeTab === 'inbox' ? handleArchiveAll : handleUnarchiveAll} 
        isArchive={activeTab === 'inbox'}
        isEmpty={Object.keys(groupedCalls).length === 0} 
      />
      <CallList 
        groupedCalls={groupedCalls} 
        onToggleArchive={onToggleArchive} 
        activeTab={activeTab}
      />
    </div>
  );
}

export default TabContent;

