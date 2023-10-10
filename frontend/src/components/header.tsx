import { UserLoginResponse } from '@/pages/login';
import useUserStore from '@/store/user-store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const userInfo = useUserStore((state) => state.loginDetail);
  const setLoginDetail = useUserStore((state) => state.setLoginDetail);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const logoutHandler = () => {
    setLoginDetail({} as UserLoginResponse);
    router.push('/login');
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center pt-4">
        <div>
          <img src="images/kheti-city-logo.png" alt="Kheti City Logo" />
        </div>
        <div className="flex items-center justify-between text-primary-dark">
          <div className="mx-5 transition duration-300 ease-in-out hover:underline">
            <a href="xyz.com">Products</a>
          </div>
          <div className="mx-5 transition duration-300 ease-in-out hover:underline">
            <a href="xyz.com">Kheti Shikshya</a>
          </div>
          {!userInfo.jwt ? (
            <>
              <div className="mx-5 transition duration-300 ease-in-out hover:underline">
                <a href="/login">Login</a>
              </div>
              <div className="mx-5 transition duration-300 ease-in-out hover:underline">
                <a href="/register">Register</a>
              </div>
            </>
          ) : (
            <div className="relative">
              <div
                onClick={() => setShowDropdown(true)}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${userInfo.image}`}
                  alt="profile image"
                />
                <span className="text-slate-500">{userInfo.name}</span>
              </div>

              {showDropdown && (
                <div className="absolute space-y-1 z-10 rounded-md w-[200px] top-8 bg-white border border-offwhite-light p-3 left-1/2 text-sm -translate-x-1/2">
                  <Link
                    href="/become-farmer"
                    className="block text-center text-slate-500 hover:bg-primary hover:text-white p-2 rounded-md cursor-pointer"
                  >
                    Become a Farmer
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="w-full p-2 rounded-md text-red-700 hover:bg-red-600 hover:text-white "
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
