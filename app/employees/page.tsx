import { DashboardHeader } from '@/components/layout/dashboard-header'
import { Card } from '@/components/ui/card'

export default function Employees() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Employee Management</h2>
        <p>Employee management interface will be implemented here.</p>
        <ul className="mt-4 space-y-2">
          <li>View all employees</li>
          <li>Add new employees</li>
          <li>Update employee information</li>
          <li>Track employee sales performance</li>
        </ul>
      </Card>
    </div>
  )
}

