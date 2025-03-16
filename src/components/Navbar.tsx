import React from 'react'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import Image from 'next/image'
export const Navbar = () => {
    return (
        <div className='h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className=''>
                <Link href='/' className='text-xl font-bold text-blue-800 '>Bloom</Link>
            </div>
            {/* CENTER */}
            <div className='hidden md:flex w-[50%]'>
                {/*LINKS*/}
                <div className='flex gap-6 text-gray-600'>
                    <Link href="/" className="flex items-center gap-2" >
                        <Image src='/home.png' alt="Homepage" width={16} height={16} className='w-4 h-4' />
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-3" >
                        <Image src='/friends.png' alt="Friends" width={16} height={16} className='w-4 h-4' />
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2" >
                        <Image src='/stories.png' alt="Stories" width={16} height={16} className='w-4 h-4' />
                        <span>Stories</span>
                    </Link>
                </div>
                {/* RIGHT */}
                <div className='w-[30%] flex items-center justify-end gap-4 xl:gap-8 '>
                    
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}
