import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Medic History 🩺',
  description: 'Medical Database and Record keeping system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="../path/to/flowbite/dist/flowbite.min.js" />
        <Script src="../path/to/flowbite/dist/datepicker.js" />
      </body>
    </html>
  );
}
