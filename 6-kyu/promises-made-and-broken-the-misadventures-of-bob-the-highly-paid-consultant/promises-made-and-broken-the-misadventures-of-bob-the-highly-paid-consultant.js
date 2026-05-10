async function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  // Get the current user's shopping cart
  const cart = await OrderAPI.getShoppingCartAsync(user)
  shoppingCart = cart;
  
  // Also look up the ZIP code from their profile
  const profile = await CustomerAPI.getProfileAsync(user)
  zipCode = profile.zipCode;
  
  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);
  
  // Submit the order
  const success = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
  orderSuccessful = success;
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}