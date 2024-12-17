import { ShoppingBag, Users, CreditCard, TrendingUp } from 'lucide-react';
import { StatsCard } from './stats-card';

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        icon={ShoppingBag}
        label="Total Products"
        value={245}
      />
      <StatsCard
        icon={Users}
        label="Active Employees"
        value={12}
      />
      <StatsCard
        icon={CreditCard}
        label="Total Sales"
        value="$24,500"
      />
      <StatsCard
        icon={TrendingUp}
        label="Monthly Profit"
        value="$8,250"
      />
    </div>
  );
}