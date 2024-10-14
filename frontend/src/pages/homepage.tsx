import React from 'react';
import StatCard from '../components/StatCard';
import BarChart from '../components/BarChart';

const Dashboard = () => {
   return (
      <div className="container mx-auto p-4">
         {/* Stat Cards */}
         <div className="grid grid-cols-3 gap-4">
            <StatCard title="User Registrations" value="450 users" subtext="400 users (last month)" change="12.5%" />
            <StatCard title="Active Users" value="50 users/this month" subtext="12 users (last month)" change="316.6%" />
            <StatCard title="Retention Rate" value="10%/last month" subtext="12% (last month)" change="-16.6%" />
            <StatCard title="Average Visits" value="4 visits/month" subtext="2 visits (2 last month)" change="100%" />
            <StatCard title="Lottery Usage" value="125 times/month" subtext="85 times (85 last month)" change="47%" />
            <StatCard title="Account Deletions" value="10 users/this month" subtext="8 users (8 last month)" change="25%" />
         </div>

         {/* Bar Chart */}
         <div className="mt-6">
            <BarChart />
         </div>
      </div>
   );
};

export default Dashboard;
