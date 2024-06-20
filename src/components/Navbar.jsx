
import NavbarItem from './NavbarItem'

const Navbar = () => {
    return (
        <div className='flex gap-6 text-xl p-4 justify-center mb-4 bg-amber-100 dark:bg-gray-600'>

            <NavbarItem name='Trending' param='fetchTrending' />
            <NavbarItem name='Top Rated' param='fetchTopRated' />
        </div>
    )
}

export default Navbar
