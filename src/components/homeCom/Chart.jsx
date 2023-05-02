import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const recipes = [
    {
        "name": "Irish Stew",
        "points": 4.5,
        "ratings": 245,
        "likes": 678
    },
    {
        "name": "Boxty",
        "points": 4.3,
        "ratings": 189,
        "likes": 521
    },
    {
        "name": "Colcannon",
        "points": 4.2,
        "ratings": 164,
        "likes": 485
    },
    {
        "name": "Dublin Coddle",
        "points": 4.1,
        "ratings": 137,
        "likes": 410
    },
    {
        "name": "Bangers and Mash",
        "points": 4.0,
        "ratings": 118,
        "likes": 366
    },
    {
        "name": "Shepherd's Pie",
        "points": 3.9,
        "ratings": 102,
        "likes": 312
    }
]
const gradientOffset = () => {
    const dataMax = Math.max(recipes.map((i) => i.ratings));
    const dataMin = Math.min(recipes.map((i) => i.ratings));
  
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
  
    return dataMax / (dataMax - dataMin);
  };
  
  const off = gradientOffset();
  
const Chart = () => {
    return (
        <div className='md:mx-32 sm:mx-4 my-10'>
        <p className='text-2xl font-bold text-center'>This char shows bests recipes and its popularity</p>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={recipes}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                 <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
                <Area type="monotone" dataKey="ratings" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Chart;