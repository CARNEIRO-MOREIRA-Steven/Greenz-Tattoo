// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Greenz Ink Tattoo',
  description: "Découvrez l'univers du tattouage avec Greenz Ink Tattoo" ,
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
