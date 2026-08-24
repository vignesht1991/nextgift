import { create } from 'zustand';

export const useStore = create((set) => ({
  // Cart state
  cart: [],
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product]
  })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  })),
  clearCart: () => set({ cart: [] }),

  // Product customization state
  currentCustomization: {
    productId: null,
    name: '',
    customText: '',
    selectedDesign: '',
    quantity: 1,
  },
  setCustomization: (customization) => set({ currentCustomization: customization }),

  // Product data
  products: [
    {
      id: 1,
      name: 'Engraved Wooden Keychain',
      price: 299,
      description: 'Beautiful wooden keychain with custom name engraving',
      image: '/images/keychain.jpg',
      customizable: true,
      designs: ['Modern', 'Classic', 'Minimalist', 'Floral']
    },
    {
      id: 2,
      name: 'Wooden Name Plate',
      price: 599,
      description: 'Elegant wooden nameplate for desk or wall',
      image: '/images/nameplate.jpg',
      customizable: true,
      designs: ['Executive', 'Home', 'Vintage', 'Modern']
    },
    {
      id: 3,
      name: 'Wooden Frame with Engraving',
      price: 799,
      description: 'Premium wooden frame with detailed custom engraving',
      image: '/images/frame.jpg',
      customizable: true,
      designs: ['Family', 'Photo', 'Quote', 'Anniversary']
    },
    {
      id: 4,
      name: 'Name Engraved Coaster',
      price: 199,
      description: 'Set of 4 wooden coasters with personalized engraving',
      image: '/images/coaster.jpg',
      customizable: true,
      designs: ['Initials', 'Full Name', 'Message', 'Logo']
    },
  ]
}));
