import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">Sports Business Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage your inventory, sales, and employees efficiently
        </p>
      </div>
      <Button size="lg">
        <ShoppingBag className="mr-2 h-5 w-5" />
        Add New Product
      </Button>
    </header>
  );
}