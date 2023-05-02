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
    <div className='bg-orange-100 p-10'>
        <p
            className='text-3xl text-center font-bold mt-5'>This pie chart is showing best recipes
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

            <div className='my-10 sm:mx-36'>
                <p className='text-2xl font-bold'>6 Best Recipes</p>
                <ol className='space-y-2 mx-4'>
                    <li>Irish Stew</li>
                    <li>Boxty</li>
                    <li>Colcannon</li>
                    <li>Bangers and Mash</li>
                    <li>Shepherd's Pie</li>
                </ol>
            </div>
        </div>
    </div>
    );
};

export default Chart;