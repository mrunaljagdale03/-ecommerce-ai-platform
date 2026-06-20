import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Commerce AI Hub - Smart Shopping</title>
        <meta name="description" content="AI-powered e-commerce platform" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">🛍️ E-Commerce AI Hub</h1>
            <div className="space-x-4">
              <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
            </div>
          </div>
        </nav>

        <section className="text-center py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AI-Powered Shopping</h2>
          <p className="text-xl text-gray-600 mb-8">Discover personalized products powered by AI</p>
          <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Start Shopping
          </Link>
        </section>
      </main>
    </>
  );
}
