
import NavbarItem from './NavbarItem'
import {Suspense} from "react";

const Navbar = () => {
    return (
        <div className='flex gap-6 text-xl p-4 justify-center mb-4 bg-amber-100 dark:bg-gray-600'>
<Suspense>
            <NavbarItem name='Trending' param='fetchTrending' />
            <NavbarItem name='Top Rated' param='fetchTopRated' />
    </Suspense>
        </div>
    )
}

export default Navbar
