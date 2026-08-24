import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - NextGift</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-pastel-peach to-pastel-lavender">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">About NextGift ✨</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pastel-purple">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                NextGift was born from a simple idea: to make personalized gifts that are truly special and memorable. 
                We believe that every gift should tell a story, and every engraving should carry meaning.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pastel-purple">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We aim to provide high-quality, customizable wooden products with precise laser engraving. 
                Our mission is to help you create gifts that your loved ones will cherish forever.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pastel-purple">Why Choose Us?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <span>Elegant, modern design with beautiful pastel colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <span>Real-time preview of your customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span>Wide range of products for different occasions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span>Fast and easy ordering through WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❤️</span>
                  <span>Attention to detail in every product</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pastel-purple">Products We Offer</h2>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Engraved Wooden Keychains</li>
                <li>✓ Wooden Name Plates</li>
                <li>✓ Wooden Frames with Custom Engraving</li>
                <li>✓ Name Engraved Coasters</li>
                <li>✓ More products coming soon!</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pastel-purple">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Have questions? We'd love to hear from you! Contact us through WhatsApp for instant support.
              </p>
              <div className="flex gap-4">
                <Link href="/">
                  <button className="btn-primary">
                    Start Shopping
                  </button>
                </Link>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  <button className="btn-secondary">
                    Chat on WhatsApp
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
