

// Header.tsx
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1>My App</h1>
      <Navigation />
    </header>
  );
}

