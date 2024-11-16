import Link from 'next/link'
import { FileMusicIcon as MusicNote } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
          <MusicNote className="h-8 w-8 text-indigo-600" />
          <span>SyntaxxSerenade</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
          <li><Link href="/services" className="text-gray-600 hover:text-indigo-600">Services</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
          <li><Link href="/blog" className="text-gray-600 hover:text-indigo-600">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}