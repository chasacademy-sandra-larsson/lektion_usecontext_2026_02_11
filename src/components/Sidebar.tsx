// Sidebar.tsx
import ProfileWidget from './ProfileWidget';

function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4">
      <h3 className="text-lg font-bold mb-2">Quick Links</h3>
      <ProfileWidget />
    </aside>
  );
}

export default Sidebar;