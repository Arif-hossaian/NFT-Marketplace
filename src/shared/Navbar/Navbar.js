/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Dialog, Transition } from '@headlessui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
//import { navItems } from "../../constant/data";

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Marketplace',
    path: '/marketplace',
  },
  {
    title: 'Resource',
    path: '/resource',
  },
  {
    title: 'About',
    path: '/about',
  },
];

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isSticky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isSticky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isSticky]);

  return (
    <div
      id="navbar"
      className={clsx(
        'fixed inset-x-0 top-0 z-40  transition-colors duration-300',
        isSticky
          ? 'border-b border-slate-200 h-16 bg-[#fafafa]'
          : 'bg-transparent'
      )}
    >
      <nav className=" nav-container">
        <div className="flex justify-between items-center">
          <h1 className='text-[#3D00B7] font-bold text-3xl'>NFTERS</h1>
          <div className='font-semibold'>Marketplace</div>
          <div className='font-semibold'>Resource</div>
          <div className='font-semibold'>About</div>
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white border border-gray800 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>

          <button className="border border-gray-900 p-2 bg-[#3D00B7] rounded-full px-8 text-white py-3">Upload</button>
          <button className="border border-[#3D00B7] p-2 text-[#3D00B7] rounded-full px-8 py-3">Connect Wallet</button>
        </div>
      </nav>
      <MenuPopOver display="flex md:hidden" />
    </div>
  );
};

const MenuPopOver = ({ display }) => {
  let [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={display}>
      <button aria-label="Navigation Menu" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6 hover:stroke-indigo-600 "
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx('fixed inset-0 z-50 ', display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm " />
          </Transition.Child>
          *{' '}
          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-2xl bg-white p-6 shadow-lg  ">
            <ul className="mt-16 space-y-6">
              {navLinks.map((item) => (
                <li className="relative" key={item.title}>
                  <Link to={item.path}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'peer block text-lg font-semibold transition-all duration-150 hover:text-[#48AB76]',
                        location.asPath === item.path ? 'text-[#48AB76]' : ''
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <button
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 10 10" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
