import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index.js'
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi/index'
import logo from '../assets/logo.png'

const navigation = [


  { name: 'Homepage', href: '/', current: true },
  { name: 'My story', href: '/mystory', current: false },
  //{ name: 'My setup', href: '/mysetup', current: false },
  { name: 'Buy my products', href: '/buyproducts', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="top-0 mx-auto max-w-7xl px-122 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center sm:justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:mt-1.5 sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 pb-2 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="p-1 text-white text-sm font-medium"
                >
                  Buy my products
                  
                </button> */}
                {/* Socials */}
                {/* <a href=""><FiTwitter className='text-white ml-7 text-2xl'/></a> */}
                <a href="https://www.instagram.com/techwithalberto/"><FiInstagram className='text-white ml-4 text-2xl mr-2'/></a>
                <a href="https://github.com/albertoslavicadev"><FiGithub className='text-white ml-2 text-2xl mr-2'/></a>               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}