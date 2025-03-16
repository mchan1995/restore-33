
import React from "react";

export function ChatHeader() {
  return (
    <div className="flex items-center mb-6">
      <div className="h-12 w-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-neutral-900">Dr. ReStore</h3>
        <p className="text-neutral-600 text-sm">Pelvic Health Specialist</p>
      </div>
    </div>
  );
}
