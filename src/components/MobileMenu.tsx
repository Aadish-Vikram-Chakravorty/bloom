"use client"
import Link from 'next/link';
import React from 'react'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className=''>
            <div className='flex flex-col gap-[4.5px] cursor-pointer'
                onClick={() => setIsOpen((prev) => !prev)}>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm  ${isOpen && 'rotate-45'} origin-left ease-in-out duration-500`} />
                <div className={`w-6 h-1 bg-blue-500 rounded-sm  ${isOpen && 'opacity-0'} ease-in-out duration-500`} />
                <div className={`w-6 h-1 bg-blue-500 rounded-sm  ${isOpen && '-rotate-45'} origin-left ease-in-out duration-500`} />
            </div>
            {isOpen && (
                <div className='absolute top-24 left-0 w-full h-[(calc(100vh-96px))] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Friends</Link>
                    <Link href='/'>Groups</Link>
                    <Link href='/'>Stories</Link>
                    <Link href='/'>Login</Link>
                </div>
            )}
        </div>
    )
}
