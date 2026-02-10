// MainContent.tsx
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';

export default function MainContent() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <ContentArea />
    </main>
  );
}

