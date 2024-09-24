import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react';
import React from 'react';

// Will use actual data from db later on
const tempData = [
  {
    name: 'Revenue',
    value: 100.0,
    image: DollarSign,
    color: 'text-green-500',
    info: 'Based on 100 Charges',
  },
  {
    name: 'Sales',
    value: 50,
    image: ShoppingBag,
    color: 'text-blue-500',
    info: 'Total sales on EcomShop',
  },
  {
    name: 'Products',
    value: 37,
    image: PartyPopper,
    color: 'text-indigo-500',
    info: 'Total Products created',
  },
  {
    name: 'Users',
    value: 120,
    image: User2,
    color: 'text-orange-500',
    info: 'Total Users signed up',
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {tempData.map((data) => (
          <Card key={data.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>{data.name}</CardTitle>
              <data.image className={`h-4 w-4 ${data.color}`} />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{data.value}</p>
              <p>{data.info}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>Recent Transaction from your store</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Jan Marshal</p>
                <p className="text-sm text-muted-foreground">JMarshal@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$29.99</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

// <Card>
//   <CardHeader className="flex flex-row items-center justify-between pb-2">
//     <CardTitle>Total Revenue</CardTitle>
//     <DollarSign className="h-4 w-4 text-green-500" />
//   </CardHeader>
//   <CardContent>
//     <p className="text-2xl font-bold">$100.00</p>
//     <p>Based on 100 Charges</p>
//   </CardContent>
// </Card>
// <Card>
//   <CardHeader className="flex flex-row items-center justify-between pb-2">
//     <CardTitle>Total Sales</CardTitle>
//     <ShoppingBag className="h-4 w-4 text-blue-500" />
//   </CardHeader>
//   <CardContent>
//     <p className="text-2xl font-bold">+50</p>
//     <p>Total sales on EcomShop</p>
//   </CardContent>
// </Card>
// <Card>
//   <CardHeader className="flex flex-row items-center justify-between pb-2">
//     <CardTitle>Total Products</CardTitle>
//     <PartyPopper className="h-4 w-4 text-indigo-500" />
//   </CardHeader>
//   <CardContent>
//     <p className="text-2xl font-bold">37</p>
//     <p>Total Products created</p>
//   </CardContent>
// </Card>
// <Card>
//   <CardHeader className="flex flex-row items-center justify-between pb-2">
//     <CardTitle>Total Users</CardTitle>
//     <User2 className="h-4 w-4 text-orange-500" />
//   </CardHeader>
//   <CardContent>
//     <p className="text-2xl font-bold">120</p>
//     <p>Total Users signed up</p>
//   </CardContent>
// </Card>
