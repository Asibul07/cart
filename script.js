const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const totalDiscountElement = document.getElementById('total-discount');
const totalPriceAfterDiscountElement = document.getElementById('total-price-after-discount');

let cartItems = [];
let totalBeforeDiscount = 0;
let totalDiscount = 0;
let totalAfterDiscount = 0;
let promoCode = '';

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  updateBuySection();
}

function updateBuySection() {
  cartList.innerHTML = '';
  totalBeforeDiscount = 0;
  
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price}`;
    cartList.appendChild(li);
    totalBeforeDiscount += item.price;
  });

  totalPriceElement.textContent = `$${totalBeforeDiscount.toFixed(2)}`;
  
  // Recalculate and update the discount and total after discount
  totalDiscount = promoCode === 'DISCOUNT' ? totalBeforeDiscount * 0.2 : 0; // 20% discount if promoCode is 'DISCOUNT'
  totalDiscountElement.textContent = `$${totalDiscount.toFixed(2)}`;
  totalAfterDiscount = totalBeforeDiscount - totalDiscount;
  totalPriceAfterDiscountElement.textContent = `$${totalAfterDiscount.toFixed(2)}`;
}

function applyPromoCode() {
  const enteredPromoCode = document.getElementById('promo-code').value;
  
  if (enteredPromoCode === 'DISCOUNT') {
    promoCode = enteredPromoCode;
    updateBuySection();
  } else {
    alert('Invalid promo code');
  }
}

function buyProducts() {
  if (cartItems.length > 0) {
    // Here you can implement your actual purchase logic
    showPopup();
    clearCart();
  } else {
    alert('Your cart is empty.');
  }
}

function showPopup() {
  const popup = document.getElementById('success-popup');
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('success-popup');
  popup.style.display = 'none';
}

function clearCart() {
  cartItems = [];
  totalBeforeDiscount = 0;
  totalDiscount = 0;
  totalAfterDiscount = 0;
  promoCode = '';
  updateBuySection();
}
