import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function CustomizationPanel({ product, onPreviewUpdate }) {
  const setCustomization = useStore((state) => state.setCustomization);
  const [name, setName] = useState('');
  const [customText, setCustomText] = useState('');
  const [selectedDesign, setSelectedDesign] = useState(product.designs[0]);
  const [quantity, setQuantity] = useState(1);

  const handleUpdate = () => {
    const customization = {
      productId: product.id,
      name,
      customText,
      selectedDesign,
      quantity,
    };
    setCustomization(customization);
    onPreviewUpdate(customization);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Customize Your {product.name}</h2>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleUpdate}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border-2 border-pastel-lavender rounded-lg focus:outline-none focus:border-pastel-purple"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Text/Message</label>
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          onBlur={handleUpdate}
          placeholder="Add any custom text or message"
          rows="4"
          className="w-full px-4 py-2 border-2 border-pastel-lavender rounded-lg focus:outline-none focus:border-pastel-purple"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Design Style</label>
        <div className="grid grid-cols-2 gap-3">
          {product.designs.map((design) => (
            <button
              key={design}
              onClick={() => {
                setSelectedDesign(design);
                handleUpdate();
              }}
              className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                selectedDesign === design
                  ? 'bg-pastel-purple text-white'
                  : 'bg-pastel-lavender text-gray-800 hover:bg-pastel-mint'
              }`}
            >
              {design}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
                handleUpdate();
              }
            }}
            className="px-4 py-2 bg-pastel-pink text-white rounded-lg font-bold"
          >
            -
          </button>
          <span className="text-2xl font-bold text-gray-800 w-16 text-center">{quantity}</span>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
              handleUpdate();
            }}
            className="px-4 py-2 bg-pastel-green text-white rounded-lg font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
