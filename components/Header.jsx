import Link from 'next/link';
import { useStore } from '@/lib/store';

export default function Header() {
  const cart = useStore((state) => state.cart);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-pastel-purple">
          NextGift ✨
        </Link>
        
        <nav className="flex gap-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-pastel-purple transition">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-pastel-purple transition">
            About
          </Link>
          <Link href="/cart" className="relative">
            <button className="btn-secondary relative">
              🛒 Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
