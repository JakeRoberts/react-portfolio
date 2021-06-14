import React from 'react';
import ProfileImg from '../IMG_0704 (1).jpg';

export default function AboutMe() {
    return (
        <section className="bg-blue-200 rounded-lg shadow-2xl lg:flex p-20 opacity-90">
        <img src={ProfileImg} className="h-64 w-64" />
        <div className="text-lg flex flex-col justify-center">
            <h1 className='text-6xl mb-4 mt-4'>Rob Jacobs</h1>
            <div className="prose lg:prose-xl">
                <h3 className='text-gray-100'>
                    
                    BIO GOES HERE
                    
                    </h3>
            </div>
        </div>
        </section>
    )
}