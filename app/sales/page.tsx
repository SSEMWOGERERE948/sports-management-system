import { DashboardHeader } from '@/components/layout/dashboard-header'
import { Card } from '@/components/ui/card'

export default function Sales() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <p>Sales overview and reporting interface will be implemented here.</p>
        <ul className="mt-4 space-y-2">
          <li>View total sales</li>
          <li>Track sales by product</li>
          <li>Monitor credit sales</li>
          <li>Generate sales reports</li>
        </ul>
      </Card>
    </div>
  )
}

