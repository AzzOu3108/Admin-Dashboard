import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

const OrderPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Ordres'/>

        <main className='min-w-7 mx-auto py-6 px-4 lg:px-8'>
            <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity: 0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1}}
            >
               <StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
			   <StatCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
			   <StatCard name='Completed Orders' icon={CheckCircle} value={orderStats.completedOrders} color='#10B981' />
			   <StatCard name='Completed Orders' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
            </motion.div>
            
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <DailyOrders />
                <OrderDistribution />
               </div>
               <OrdersTable />

        </main>
    </div>
  )
}

export default OrderPage