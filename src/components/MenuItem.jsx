import Link from 'next/link'
import React from 'react'

const MenuItem = ({ name, address, Icon }) => {
    return (
        <div>
            <Link href={address} className='hover:text-amber-500'>
                <Icon className='text-2xl inline sm:hidden ' />
                <p className='uppercase hidden sm:inline text-sm ' >{name}</p>
            </Link>

        </div>
    )
}

export default MenuItem
