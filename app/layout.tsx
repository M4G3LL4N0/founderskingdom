import './globals.css'

export const metadata = {
  title: 'FoundersKingdom - The Startup Operating System',
  description: 'The operating system for ambitious founders building multiple ventures. Organize ideas, manage startups, track momentum, and build a connected company ecosystem from one platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
