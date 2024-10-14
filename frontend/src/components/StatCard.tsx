import React from 'react';

const StatCard = ({ title, value, subtext, change }) => {
   return (
      <div className="bg-white shadow-md p-4 rounded-md">
         <h3 className="text-sm font-semibold">{title}</h3>
         <p className="text-2xl font-bold">{value}</p>
         <p className="text-xs text-gray-500">{subtext}</p>
         <p className={`text-sm font-medium ${change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
            {change}
         </p>
      </div>
   );
};

export default StatCard;
