import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Digital Presence</h1>
              <p className="text-xl mb-6">SyntaxxSerenade crafts beautiful, high-performance websites that resonate with your audience.</p>
              <Link href="/contact" className="bg-white text-indigo-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Web Development" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">Custom web applications tailored to your unique business needs.</p>
              <Link href="/services" className="text-indigo-600 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Palette className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Intuitive and visually appealing interfaces that engage users.</p>
              <Link href="/services" className="text-indigo-600 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">Boost your website's speed and efficiency for better user experience.</p>
              <Link href="/services" className="text-indigo-600 font-semibold flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/placeholder.svg" alt="About SyntaxxSerenade" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About SyntaxxSerenade</h2>
              <p className="text-gray-600 mb-6">
                At SyntaxxSerenade, we blend creativity with technical expertise to compose digital symphonies. Our mission is to elevate businesses through innovative web solutions that not only look stunning but also perform flawlessly.
              </p>
              <Link href="/about" className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}