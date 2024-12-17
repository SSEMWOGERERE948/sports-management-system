'use client';

import { Card } from '@/components/ui/card'
import { Package, Users, CreditCard, TrendingUp, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/products'); // Navigate to /products
  };
  
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Sports Business Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage your inventory, sales, and employees efficiently
          </p>
        </div>
        <button className="flex items-center gap-2" onClick={navigateToProducts}>
      <PlusCircle className="h-5 w-5" />
      Add New Product
    </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Products</p>
              <h3 className="text-2xl font-bold">245</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Employees</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Sales</p>
              <h3 className="text-2xl font-bold">$24,500</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Monthly Profit</p>
              <h3 className="text-2xl font-bold">$8,250</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="py-3">Product</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Football Jersey</td>
                  <td className="py-2">2</td>
                  <td className="py-2">$120</td>
                </tr>
                <tr>
                  <td className="py-2">Rugby Ball</td>
                  <td className="py-2">1</td>
                  <td className="py-2">$45</td>
                </tr>
                <tr>
                  <td className="py-2">Tennis Racket</td>
                  <td className="py-2">1</td>
                  <td className="py-2">$80</td>
                </tr>
                <tr>
                  <td className="py-2">Basketball</td>
                  <td className="py-2">3</td>
                  <td className="py-2">$75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Low Stock Alert</h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="py-3">Product</th>
                  <th className="py-3">Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Football Jersey</td>
                  <td className="py-2">5</td>
                </tr>
                <tr>
                  <td className="py-2">Rugby Ball</td>
                  <td className="py-2">3</td>
                </tr>
                <tr>
                  <td className="py-2">Tennis Racket</td>
                  <td className="py-2">2</td>
                </tr>
                <tr>
                  <td className="py-2">Basketball</td>
                  <td className="py-2">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
