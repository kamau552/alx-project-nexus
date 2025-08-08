import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-white mt-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-600">
        <div className="grid gap-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4 mr-6 text-white">
            <Image
              src="/assets/images/Logo2.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-xs leading-relaxed">
              NexusPlay , Your ultimate hub for discovering, buying, and managing games across all genres and platforms. Play more. Explore more.
            </p>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold uppercase text-xs mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-600  py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-end items-center gap-6">
            <div className="flex flex-wrap justify-end gap-4 text-xs">
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer