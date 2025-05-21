import SideNav from '@/app/ui/dashboard/sidenav';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
