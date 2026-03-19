import { useState, useEffect, useRef } from 'react';

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.shiftKey) {
        e.preventDefault();
        setOpen(true);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const close = () => {
    setOpen(false);
  };

  const handleAction = (action: string) => {
    if (action === 'Create startup') {
      alert('Create startup clicked');
    } else if (action === 'Go to dashboard') {
      alert('Go to dashboard clicked');
    }
    close();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md">
        <input
          ref={inputRef}
          type="text"
          className="w-full px-8 py-3 rounded-md border border-gray-300 text-white bg-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          placeholder="Search or type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const trimmed = e.target.value.trim();
              if (trimmed === 'Create startup' || trimmed === 'Go to dashboard') {
                handleAction(trimmed);
              }
            }
            if (e.key === 'Escape') {
              close();
            }
          }}
        />
        <ul className="absolute -top-4 left-4 right-4 max-h-60 overflow-y-auto rounded-md bg-gray-800 border border-gray-700 text-white">
          <li className="py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleAction('Create startup')}>
            Create startup
          </li>
          <li className="py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleAction('Go to dashboard')}>
            Go to dashboard
          </li>
        </ul>
      </div>
    </div>
  );
}
