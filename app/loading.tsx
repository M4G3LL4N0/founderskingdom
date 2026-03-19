export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer ring with subtle animation */}
        <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"></div>
        
        {/* Main loading circle */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          {/* Inner circle with premium glass effect */}
          <div className="w-12 h-12 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
            {/* Animated dots */}
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
