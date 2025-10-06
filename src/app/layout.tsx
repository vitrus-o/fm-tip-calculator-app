import './globals.css';

export const metadata = {
  title: 'fm-tip-calculator-app',
  description: 'A tip calculator app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}