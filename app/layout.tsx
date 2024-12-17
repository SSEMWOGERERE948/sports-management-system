import type { Metadata } from "next"
import "./globals.css"
import { CustomSidebar } from "@/components/ui/custom-sidebar"

export const metadata: Metadata = {
  title: "Sports Business Management",
  description: "Manage your sports business efficiently",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <div className="flex min-h-screen">
          <CustomSidebar />
          <main className="flex-1 md:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

