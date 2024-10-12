import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';
import { NavbarLinks } from './NavbarLinks';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl">
            Ecom<span className="text-blue-500">Shop</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>

      <div className="flex items-center">
        {user ? (
          <>
            <Link href="/bag" className="group p-2 flex items-center mr-2">
              <ShoppingBagIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-800" />
              <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-800">5</span>
            </Link>
          </>
        ) : (
          <LoginLink>Log in</LoginLink>
        )}
      </div>
    </nav>
  );
}
