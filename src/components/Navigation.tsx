// Navigation.tsx
import UserMenu from './UserMenu';

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <UserMenu />
    </nav>
  );
}

