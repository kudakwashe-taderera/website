'use client'

interface PlaceholderDiagramProps {
  title: string
  width?: number
  height?: number
}

export default function PlaceholderDiagram({ title, width = 800, height = 400 }: PlaceholderDiagramProps) {
  return (
    <div 
      className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
      style={{ height: `${height}px`, maxWidth: `${width}px` }}
    >
      <div className="text-center p-8">
        <svg
          className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Our team is working on creating this diagram. Check back soon!
        </p>
      </div>
    </div>
  )
} 