import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="relative w-full h-64 bg-pastel-lavender">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #E6D9FF, #ADD8E6)';
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-pastel-purple">₹{product.price}</span>
          {product.customizable && (
            <span className="text-xs bg-pastel-pink text-white px-3 py-1 rounded-full">Customizable</span>
          )}
        </div>
        
        <Link href={`/customize/${product.id}`}>
          <button className="btn-primary w-full">
            Customize & Preview
          </button>
        </Link>
      </div>
    </div>
  );
}
