import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"
export const metadata = {
  title: 'johnson muchiri',
  description: 'Frontend Web Developer (Reactjs, Nextjs, Typescript, Python, Tailwindcss, Saas) || A Content Creator.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
