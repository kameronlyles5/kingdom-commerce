import AccountSidebar from '@/components/dashboard/AccountSidebar'

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-royal-black text-pure-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <AccountSidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

