import Head from 'next/head';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { useStore } from '@/lib/store';

export default function Home() {
  const products = useStore((state) => state.products);

  return (
    <>
      <Head>
        <title>NextGift - Custom Laser Engraved Products</title>
        <meta name="description" content="Beautiful custom laser engraved wooden products" />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue py-16">
          <div className="max-w-6xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to NextGift ✨</h1>
            <p className="text-xl opacity-90">Personalized laser engraved products for your special moments</p>
            <p className="text-lg mt-2 opacity-80">Create, Customize, and Celebrate with Beautiful Engraved Wooden Products</p>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Products</h2>
          <p className="text-center text-gray-600 mb-12">Handcrafted with love, personalized just for you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-pastel-lavender to-pastel-mint py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose NextGift?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2">Live Preview</h3>
                <p className="text-gray-600">See exactly how your product will look before ordering</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast & Easy</h3>
                <p className="text-gray-600">Quick customization process with instant WhatsApp confirmation</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-2">Personal Touch</h3>
                <p className="text-gray-600">Each product is carefully crafted with attention to detail</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; 2024 NextGift. All rights reserved. ✨</p>
      </footer>
    </>
  );
}
