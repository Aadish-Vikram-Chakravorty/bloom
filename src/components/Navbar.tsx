import React from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
export const Navbar = () => {
    return (
        <div className='h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className=''>
                <Link href='/' className='text-xl font-bold text-blue-800 '>Bloom</Link>
            </div>
            {/* CENTER */}
            <div className='hidden'></div>
            {/* RIGHT */}
            <div className=''>
                <MobileMenu />
            </div>
        </div>
    )
}
