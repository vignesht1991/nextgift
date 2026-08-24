# NextGift - Custom Laser Engraved Products

A modern, elegant e-commerce website for selling custom laser engraved wooden products with live preview and WhatsApp integration.

## Features

✨ **Elegant Design** - Modern pastel color scheme with smooth animations
🎨 **Live Preview** - Real-time canvas preview of your customization
🎁 **Multiple Products** - Keychains, name plates, frames, coasters, and more
📱 **WhatsApp Integration** - Orders sent directly to WhatsApp
🛒 **Shopping Cart** - Easy cart management
📱 **Mobile Responsive** - Works perfectly on all devices
⚡ **Fast & Modern** - Built with Next.js and Tailwind CSS

## Products

1. **Engraved Wooden Keychain** - ₹299
2. **Wooden Name Plate** - ₹599
3. **Wooden Frame with Engraving** - ₹799
4. **Name Engraved Coaster** (Set of 4) - ₹199

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/vignesht1991/nextgift.git
cd nextgift
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your WhatsApp number:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Project Structure

```
nextgift/
├── components/          # Reusable React components
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── CustomizationPanel.jsx
│   └── PreviewCanvas.jsx
├── pages/              # Next.js pages
│   ├── index.jsx       # Home page
│   ├── customize/[id].jsx  # Customize page
│   ├── cart.jsx        # Shopping cart
│   └── about.jsx       # About page
├── lib/                # Utility functions
│   ├── store.js        # Zustand state management
│   └── whatsapp.js     # WhatsApp integration
├── styles/             # CSS files
│   └── globals.css
└── public/             # Static files
```

## How It Works

1. **Browse Products** - View all available products on the home page
2. **Customize** - Click on a product to customize it:
   - Add your name
   - Add custom text/message
   - Choose design style
   - Select quantity
3. **Live Preview** - See real-time preview of your customization
4. **Add to Cart** - Add customized product to cart
5. **Checkout** - Fill in your details
6. **WhatsApp Order** - Order is sent directly to your WhatsApp

## Customization

### Changing Colors
Edit `tailwind.config.js` to modify pastel colors:
```javascript
colors: {
  pastel: {
    pink: '#FFB6D9',
    blue: '#ADD8E6',
    // ... more colors
  }
}
```

### Adding New Products
Edit `lib/store.js` and add to the `products` array:
```javascript
{
  id: 5,
  name: 'New Product',
  price: 999,
  description: 'Product description',
  image: '/images/product.jpg',
  customizable: true,
  designs: ['Design 1', 'Design 2']
}
```

### WhatsApp Configuration
Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` with your WhatsApp number.

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Zustand** - State management
- **HTML5 Canvas** - Preview rendering
- **WhatsApp Web API** - Order integration

## Deployment

Deploy to Vercel (recommended):

```bash
npm i -g vercel
vercel
```

Or deploy to other platforms:
- GitHub Pages
- Netlify
- AWS Amplify

## Future Features

- 📦 Payment gateway integration
- 🚚 Order tracking
- 📧 Email notifications
- 🖼️ Image uploads for custom designs
- ⭐ Customer reviews
- 📊 Admin dashboard

## License

MIT License - feel free to use this for your business!

## Support

For questions or support, contact us on WhatsApp:
📱 [Open WhatsApp](https://wa.me/919999999999)

---

Made with ❤️ by NextGift Team
