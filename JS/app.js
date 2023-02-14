document.getElementById('case-plus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('case-quantity-input', true)
    const totalPrice = newQuantity * 59;
    document.getElementById('item-price').innerText = totalPrice;
})

document.getElementById('case-minus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('case-quantity-input', false)
    const totalPrice = newQuantity * 59;
    document.getElementById('item-price').innerText = totalPrice;
})

document.getElementById('phone-plus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('phone-quantity-input', true)
    const totalPrice = newQuantity * 1219;
    document.getElementById('phone-item-price').innerText = totalPrice;
})

document.getElementById('phone-minus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('phone-quantity-input', false)
    const totalPrice = newQuantity * 1219;
    document.getElementById('phone-item-price').innerText = totalPrice;
})