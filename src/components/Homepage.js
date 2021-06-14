import React from 'react';
import Background from '../coding-at-dim-office-ET4HU7Z.JPG'

export default function Homepage() {
    return (
        <div className="bg-gray-900">
            <img src={Background} className='absolute object-cover h-full opacity-80' />
            <div className="relative flex justify-center min-h-screen pt-12">
            <h1 className="text-8xl text-gray-100">Rob's Portfolio</h1>
            </div>
        </div>
    )
}