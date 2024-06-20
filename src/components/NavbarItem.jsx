"use client"
import Link from 'next/link'
import React from 'react';
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ name, param }) => {
    const searchParam = useSearchParams();
    const gene = searchParam.get('gene');

    return (
        <div className='hover:text-amber-500'>
            <Link href={`/?gene=${param}`}
                className={gene == param ? 'underline decoration-4 underline-offset-8 rounded-xl decoration-amber-500 decoration-xl' : ""}

            > {name}  </Link>
        </div>
    )
}

export default NavbarItem
