/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import DiscordButton from './DiscordButton';
import ContributeButton from './ContributeButton';
import CallToActionHero from './CallToActionHero';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Hero2() {
  return (
    <>
      <div className="relative overflow-hidden">
        <main>
          <div className="bg-transparent pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="text-center mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    {/* <a
                      href="#"
                      className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">
                        Visit our careers page
                      </span>
                      <ChevronRightIcon
                        className="ml-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a> */}
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
                      <span className="block">Build with us,</span>
                      <span className="block text-white">
                        the future of web.
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-white/70 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      We focus on building and talking about possible future
                      usage of web technologies.
                    </p>
                    <div className="mt-8 sm:mt-6">
                      <div className="sm:mx-auto sm:max-w-7xl">
                        {/* <CallToActionHero></CallToActionHero> */}

                        <div className="sm:flex">
                          <div className="mt-3 sm:mt-0 flex flex-col md:flex-row gap-x-4 w-full gap-y-4">
                            <DiscordButton></DiscordButton>
                            <ContributeButton></ContributeButton>
                            {/* <button
                              type="submit"
                              className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button> */}
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-white/70 sm:mt-4">
                          We are a opensource community working around the
                          future of the web. Learn blockchain technology
                          together. The community is powered by{' '}
                          <a href="#" className="font-medium text-white">
                            Dev Protocol
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/shapes/12.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
    </>
  );
}
