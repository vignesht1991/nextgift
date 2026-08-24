export const sendToWhatsApp = async (orderData) => {
  const message = formatOrderMessage(orderData);
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  
  // Using wa.me for direct messaging
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
};

export const formatOrderMessage = (orderData) => {
  const { customer, items, total, customizations } = orderData;
  
  let message = `*New Order from NextGift*\n\n`;
  message += `*Customer Details:*\n`;
  message += `Name: ${customer.name}\n`;
  message += `Email: ${customer.email}\n`;
  message += `Phone: ${customer.phone}\n\n`;
  message += `*Order Items:*\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: ₹${item.price}\n`;
    if (customizations[item.id]) {
      message += `   Custom Text: ${customizations[item.id].text}\n`;
      message += `   Design: ${customizations[item.id].design}\n`;
    }
  });
  
  message += `\n*Total: ₹${total}*\n`;
  message += `\nPlease confirm this order. Thank you!`;
  
  return message;
};
