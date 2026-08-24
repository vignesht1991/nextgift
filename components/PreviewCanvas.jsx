import { useEffect, useRef } from 'react';

export default function PreviewCanvas({ customization, product }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !customization) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = 400;
    const height = 300;

    canvas.width = width;
    canvas.height = height;

    // Draw gradient background based on design
    const gradients = {
      Modern: ['#FFB6D9', '#ADD8E6'],
      Classic: ['#E6D9FF', '#E0F5F0'],
      Minimalist: ['#FFFACD', '#FFDAB9'],
      Floral: ['#C1FFC1', '#E6E6FA'],
      Executive: ['#E6D9FF', '#FFDAB9'],
      Home: ['#E0F5F0', '#FFB6D9'],
      Vintage: ['#FFDAB9', '#E6D9FF'],
      Family: ['#ADD8E6', '#FFB6D9'],
      Photo: ['#E0F5F0', '#FFFACD'],
      Quote: ['#E6E6FA', '#FFB6D9'],
      Anniversary: ['#FFB6D9', '#E6D9FF'],
      Initials: ['#C1FFC1', '#ADD8E6'],
      Message: ['#E6D9FF', '#FFFACD'],
      Logo: ['#FFDAB9', '#E0F5F0'],
    };

    const colors = gradients[customization.selectedDesign] || gradients.Modern;
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw border
    ctx.strokeStyle = '#D8BFD8';
    ctx.lineWidth = 3;
    ctx.strokeRect(5, 5, width - 10, height - 10);

    // Draw product name
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(product.name.substring(0, 15), width / 2, 40);

    // Draw custom name
    if (customization.name) {
      ctx.fillStyle = '#555555';
      ctx.font = 'bold 28px Arial';
      ctx.fillText(customization.name, width / 2, 100);
    }

    // Draw custom text (wrapped)
    if (customization.customText) {
      ctx.fillStyle = '#666666';
      ctx.font = '14px Arial';
      const words = customization.customText.split(' ');
      let line = '';
      let y = 150;
      const maxWidth = width - 40;

      words.forEach((word) => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line !== '') {
          ctx.fillText(line, width / 2, y);
          line = word + ' ';
          y += 20;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, width / 2, y);
    }

    // Draw design style
    ctx.fillStyle = '#999999';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`Design: ${customization.selectedDesign}`, width - 10, height - 10);
  }, [customization, product]);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-800">Live Preview</h3>
      <div className="flex justify-center bg-white rounded-xl shadow-lg p-6">
        <canvas
          ref={canvasRef}
          className="preview-canvas border-4 border-pastel-purple"
        />
      </div>
      <p className="text-center text-sm text-gray-600">This is how your customized product will look</p>
    </div>
  );
}
