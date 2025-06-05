import React from 'react';

interface PlaceholderDiagramProps {
  title: string;
}

export default function PlaceholderDiagram({ title }: PlaceholderDiagramProps) {
  return (
    <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4">
      {/* Placeholder SVG */}
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 9l-6 6m0-6l6 6"
        />
      </svg>
      
      {/* Title */}
      <p className="text-gray-600 text-center font-medium">
        {title}
      </p>
      
      {/* Placeholder text */}
      <p className="text-gray-500 text-sm text-center mt-2">
        Diagram coming soon
      </p>
    </div>
  );
} 