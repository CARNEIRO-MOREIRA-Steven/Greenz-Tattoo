// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Mon Application',
  description: 'Description de mon app',
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
