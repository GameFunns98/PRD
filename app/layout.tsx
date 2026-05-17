import './globals.css';
import { ReactNode } from 'react';
export default function RootLayout({children}:{children:ReactNode}){return <html lang='cs'><body className='max-w-5xl mx-auto p-4 space-y-4'>{children}</body></html>}
