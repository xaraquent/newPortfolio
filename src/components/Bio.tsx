import React from 'react'


export default function Bio() {
    return (
        <div className="mx-auto flex justify-center items-center min-h-screen max-w-5xl">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4'>
                <img src="bio_picture.jpg" alt="" className='rounded-3xl' />
                <div className='md:col-span-2 flex flex-col justify-center bg-purple-900/40 rounded-3xl p-4'>
                    <h1 className='text-xl text-center sm:text-3xl md:text-4xl font-semibold sm:text-left'>
                        Hi, I'm Simon, a Fullstack Developer
                    </h1>
                    <p className='text-sm text-center sm:text-left mt-2 text-slate-300'> I love to create solutions for others and to see my ideas come to life. I solve new challenges best through collaboration and good communication, and I live by the saying "teamwork makes the dream work".</p>
                </div>
            </div>
        </div>
    )
}
