import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import CustomizationPanel from '@/components/CustomizationPanel';
import PreviewCanvas from '@/components/PreviewCanvas';
import { useStore } from '@/lib/store';

export default function CustomizePage({ id }) {
  const [customization, setCustomization] = useState(null);
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-gray-600">Product not found</p>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    if (!customization) {
      alert('Please customize the product first!');
      return;
    }
    addToCart({
      id: product.id,
      ...product,
      customization,
    });
    alert('Added to cart! Continue shopping or proceed to checkout.');
  };

  return (
    <>
      <Head>
        <title>Customize {product.name} - NextGift</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-pastel-pink to-pastel-blue py-12">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="text-pastel-purple font-semibold hover:underline mb-6 inline-block">
            ← Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customization Panel */}
            <CustomizationPanel
              product={product}
              onPreviewUpdate={setCustomization}
            />

            {/* Preview Canvas */}
            {customization && (
              <PreviewCanvas customization={customization} product={product} />
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="mt-12 flex gap-4 justify-center">
            <button
              onClick={handleAddToCart}
              className="btn-primary text-lg px-8 py-4"
            >
              Add to Cart
            </button>
            <Link href="/cart">
              <button className="btn-secondary text-lg px-8 py-4">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: false,
  };
}
