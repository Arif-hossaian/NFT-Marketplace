import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="mt-4 max-w-xs text-gray-500">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6 text-[#3B5998]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6 text-[#55ACEE]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="YOUR_LINKEDIN_PROFILE_URL"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6 text-[#0077B5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 2H2a2 2 0 00-2 2v18a2 2 0 002 2h20a2 2 0 002-2V4a2 2 0 00-2-2zM8.806 19.163H5.356V10.76h3.45v8.404zM7.078 9.554a1.88 1.88 0 110-3.76 1.88 1.88 0 010 3.76zm11.087 9.61h-3.45V14.49c0-1.39-.025-3.175-1.93-3.175-1.932 0-2.23 1.51-2.23 2.434v4.474H8.605V10.76h3.248v1.29h.045c.45-.854 1.54-1.75 3.18-1.75 3.39 0 4.01 2.23 4.01 5.13v5.88z"
                      fill="#0077B5"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1  lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Marketplace</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    All NFT
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    New
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Arts
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Sports
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Utility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Music
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Domain Name
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">My Account</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Profile
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Favorite
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    My Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Setting
                  </a>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-2">
              <p class="text-lg font-medium text-gray-900">Stay in Touch</p>

              <div class=" mt-8 ">
                <p class=" leading-relaxed text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum id, iure consectetur et error hic!
                </p>

                <form class="mt-4 flex w-full flex-col sm:flex-row lg:flex-col lg:items-start">
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <div class="relative flex-grow">
                    <input
                      class="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                      type="email"
                      placeholder="Enter your email"
                    />

                    <button
                      class="absolute right-0 top-0 bottom-0 bg-indigo-500 px-8 py-3 font-medium text-white rounded-full transition hover:bg-indigo-600"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-xs mt-0 text-center text-gray-500">
          Copyright © 2022 Avi Yansah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
