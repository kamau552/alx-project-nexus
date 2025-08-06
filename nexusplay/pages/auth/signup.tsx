import { NextPage } from 'next';
import Image from 'next/image';
import { FaGoogle, FaXbox } from "react-icons/fa";
import Link from 'next/link';



export default function signup() {
  const handleEdit = () => {
    alert('google signin clicked!');
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src="/assets/images/Logo2.png"
            width={120}
            height={20}
            alt="Nexusplay logo"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
          <p className="mt-0 text-center text-sm font-light tracking-tight text-gray-700"> Get started</p>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-cyan-600 hover:text-cyan-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Create Account 
                </button>
              </div>

              {/* OR Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-gray-500">OR</span>
                </div>
              </div>

              {/* Social Sign In Buttons */}
              <div className="flex space-x-4 mb-6">
                <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  <FaXbox size={16} />
                  <span>Xbox</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  <FaGoogle size={16} />
                  <span>Google</span>
                </button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
