import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentSales = [
  { id: 1, product: "Football Jersey", quantity: 2, total: "$120" },
  { id: 2, product: "Rugby Ball", quantity: 1, total: "$45" },
  { id: 3, product: "Tennis Racket", quantity: 1, total: "$80" },
  { id: 4, product: "Basketball", quantity: 3, total: "$75" },
  { id: 5, product: "Soccer Cleats", quantity: 1, total: "$100" },
]

export function RecentSales() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentSales.map((sale) => (
          <TableRow key={sale.id}>
            <TableCell>{sale.product}</TableCell>
            <TableCell>{sale.quantity}</TableCell>
            <TableCell>{sale.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

