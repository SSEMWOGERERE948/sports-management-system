import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const lowStockItems = [
  { id: 1, product: "Football Jersey", stock: 5 },
  { id: 2, product: "Rugby Ball", stock: 3 },
  { id: 3, product: "Tennis Racket", stock: 2 },
  { id: 4, product: "Basketball", stock: 4 },
  { id: 5, product: "Soccer Cleats", stock: 1 },
]

export function LowStockAlert() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lowStockItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.product}</TableCell>
            <TableCell>{item.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

