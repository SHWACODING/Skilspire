'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import skilspire_logo from '@/assets/skillspire-logo.jpg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <>
      <header className="bg-[#0357a1] fixed w-full z-40">
        <nav aria-label="Global" className="flex max-w-7xl mr-0 items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center justify-between space-x-2 -m-1.5 p-1.5">
              <Image  src={skilspire_logo} className='rounded-full' alt="skilspire logo" width={62} height={62} />
              <h1 className='font-bold'><span className='text-2xl md:text-3xl font-extrabold'>SKIL</span><span className='text-xl md:text-3xl'>SPIRE</span></h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-400"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
            <Link href="/courses" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/courses' ? 'active' : ''}`}>
              Courses
            </Link>
            <Link href="/programs" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/programs' ? 'active' : ''}`}>
              Programs
            </Link>
            <Link href="/scholarships" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/scholarships' ? 'active' : ''}`}>
              Scholarships
            </Link>
            <Link href="/teamwork" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/teamwork' ? 'active' : ''}`}>
              Teamwork
            </Link>
            <Link href="/contact" className={`text-sm/6 font-semibold text-white hover:text-gray-400 [&.active]:bg-gray-300 [&.active]:text-[#0357a1] [&.active]:px-1.5 [&.active]:rounded-md ${pathname === '/contact' ? 'active' : ''}`}>
              Contact Us
            </Link>
          </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0357a1] px-6 py-6 md:max-w sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center justify-between space-x-2 -m-1.5 p-1.5">
                <Image  src={skilspire_logo} className='rounded-full' alt="skilspire logo" width={62} height={62} />
                <h1 className='font-bold'><span className='text-3xl sm:text-2xl font-extrabold'>SKIL</span><span className='text-3xl sm:text-xl'>SPIRE</span></h1>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white hover:text-gray-400"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[#0357a1]">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/courses"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    Courses
                  </Link>
                  <Link
                    href="/programs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    Programs
                  </Link>
                  <Link
                    href="/scholarships"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    Scholarships
                  </Link>
                  <Link
                    href="/teamwork"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    Teamwork
                  </Link>
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-center text-white hover:bg-[#80808080]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <br /><br /><br />
    </>
  )
}

export default Header;