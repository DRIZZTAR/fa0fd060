import React from 'react';
import { Phone, Inbox, Archive } from 'lucide-react';
import Button from './Button';

function Header({ inboxCount, archivedCount, activeTab, setActiveTab }) {
  return (
    <div className="bg-white">
      <div className="flex px-4 py-2 items-center border-[#C1C1C1] border-b w-full bg-gray-100 shadow-[inset_0_-4px_4px_rgba(0,0,0,0.1)]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[inset_0_-4px_4px_rgba(0,0,0,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_-4px_4px_rgba(0,0,0,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[inset_0_-4px_4px_rgba(0,0,0,0.5)]"></div>
        </div>
        <div className="flex-1 text-center text-sm font-medium text-[#4A4A4A] font-light">
          ({inboxCount}) Speer Mobile
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center mr-2">
            <Phone className="h-4 w-4 text-green-500" />
          </div>
          <span className="text-lg font-medium">Speer</span>
        </div>
        <div className="flex mt-2 font-normal pb-2 relative">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center relative pb-2"
            onClick={() => setActiveTab('inbox')}
          >
            <Inbox className="h-4 w-4 mr-2" />
            Inbox ({inboxCount})
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center relative pb-2"
            onClick={() => setActiveTab('archived')}
          >
            <Archive className="h-4 w-4 mr-2"/>
            Archive ({archivedCount})
          </Button>
          <div 
            className="absolute bottom-0 h-0.5 bg-green-500 transition-all duration-300 ease-in-out"
            style={{
              left: activeTab === 'inbox' ? '12%' : '62%',
              width: '25%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

