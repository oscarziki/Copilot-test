function quote(labour, materials, quantity = 1) {
  if (quantity < 0) {
    throw new Error('Quantity cannot be negative');
  }

  const subtotal = (labour + materials) * quantity;
  const vatRate = 0.15;
  return subtotal * (1 + vatRate);
}

module.exports = { quote };
