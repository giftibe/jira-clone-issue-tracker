'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames'

const NavBar = () => {
    const link = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]
    const currentPath = usePathname()

    return (
        <nav className='flex space-x-6 border-b h-14 mb-5 px-5 items-center'>
            <Link href="/">
                <AiFillBug />
            </Link>
            <ul className='flex space-x-6 '>
                {link.map(link =>
                    <Link
                        key={link.href}
                        className={
                            classnames(
                                {
                                    'text-zinc-900': link.href === currentPath,
                                    'text-zinc-500': link.href !== currentPath,
                                    'hover:text-zinc-900 transition-colors': true
                                }
                            )
                        }
                        href={link.href}
                    >
                        {link.label}
                    </Link>)}

            </ul>
        </nav >
    )
}

export default NavBar