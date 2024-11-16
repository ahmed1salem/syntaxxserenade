import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SyntaxxSerenade</h3>
            <p className="text-sm text-gray-300">Elevating your online presence with cutting-edge web solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} SyntaxxSerenade. All rights reserved.
        </div>
      </div>
    </footer>
  )
}