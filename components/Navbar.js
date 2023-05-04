import React from 'react';
import Link from 'next/link';
import Logo from '../public/images/GBLogo.png';
import Image from 'next/image';
import HamburgerButton from '../public/images/hamburger.png';

export default function Navbar() {
  return (
    <div className="flex justify-between shadow-xl bg-white h-14">
      <div className="ml-10 my-auto">
        <Image src={Logo} width={55} height={25} />
      </div>
      <div className="w-[60%] my-auto">
        <ul className="hidden md:flex justify-around ">
          <Link href="/" className="my-auto">
            Home
          </Link>
          <Link href="/our-story" className="my-auto">
            Our Story
          </Link>
          <Link href="/clinics" className="text-center">
            Neuro-infrah Clinics <br /> By Waleed
          </Link>
          <Link href="/contact-us" className="my-auto">
            Contact Us
          </Link>
        </ul>
      </div>
      <div className='md:hidden my-auto mr-10'>
        <Image src={HamburgerButton} width={50} height={0} />
      </div>
    </div>
  );
}
