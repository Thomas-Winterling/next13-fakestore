import { ShoppingBagIcon, ShoppingCartIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function NavBar() {
  return (
    <nav className='flex w-full items-center justify-between bg-slate-600 py-4'>
      <div className='flex items-center p-1 ml-10 bg-orange-600 hover:bg-orange-700 rounded-lg transition-all cursor-pointer'>
        <ShoppingBagIcon
          width={25}
          height={25}
        />
        <Link href="/">
          <span>Fakestore</span>
        </Link>
      </div>
      <div className='mr-10'>
        <ul className='flex items-center'>
          <li className='flex pr-3'>
            <HomeIcon 
              width={25}
              height={25}
            />
            <Link href="/">Home</Link>
          </li>
          <li className='flex pr-3'>
            <div>
              <ShoppingCartIcon 
                width={25}
                height={25}
              />
            </div>
            <Link href="/">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar