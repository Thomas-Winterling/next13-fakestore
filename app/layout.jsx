import "./globals.css"
import NavBar from "../components/NavBar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <div className="container mx-auto mt-20 mb-20">
          {children}
        </div>
      </body>
    </html>
  )
}
