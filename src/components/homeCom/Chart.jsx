import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';

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


const Chart = () => {
    return (
    <div className='hover:bg-orange-50 md:p-10 p-3 bg-slate-100'>
        <p
            className='text-3xl text-center font-serif font-bold mt-5'>   Best Irish Recipes  
        </p>

        <div style={{ width: '100%', height: '100%' }} className='my-10 grid md:grid-cols-2 gap-5'>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="ratings" data={recipes} outerRadius={120} fill="#8884d8" isAnimationActive={false} label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='my-10 sm:mx-36 sm:ps-10'>
                <p className='text-2xl font-serif font-bold mt-2 mb-3'>Best Recipes:</p>
                <ol className='space-y-2  '>
                    <li className='hover:text-blue-700 font-mono'>Irish Stew</li> <hr className='bg-black'/>
                    <li className='hover:text-blue-700 font-mono'>Boxty</li> <hr />
                    <li className='hover:text-blue-700 font-mono'>Colcannon</li><hr />
                    <li className='hover:text-blue-700 font-mono'>Bangers and Mash</li> <hr />
                    <li className='hover:text-blue-700 font-mono'>Shepherd's Pie</li> <hr />
                </ol>
                <button className='py-2 px-4 bg-green-600 mt-4 rounded-sm text-yellow-50 font-semibold hover:bg-green-800'>More Popular Recipes</button>
            </div>
        </div>
    </div>
    );
};

export default Chart;