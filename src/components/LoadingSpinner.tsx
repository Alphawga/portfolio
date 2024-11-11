export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse">
      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
} 