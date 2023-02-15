// Case
document.getElementById('case-plus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('case-quantity-input', true)
    totalCaseCost(newQuantity)
    setSubTotal();
    setTotal()

})

document.getElementById('case-minus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('case-quantity-input', false)
    totalCaseCost(newQuantity)
    setSubTotal()
    setTotal()
})

// Phone

document.getElementById('phone-plus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('phone-quantity-input', true)
    totalPhoneCost(newQuantity)
    setSubTotal()
    setTotal()
})

document.getElementById('phone-minus').addEventListener('click', function() {
    const newQuantity = getQuantityInput('phone-quantity-input', false)
    totalPhoneCost(newQuantity)
    setSubTotal()
    setTotal()
})

document.getElementById('check-out-btn').addEventListener('click', function() {
    document.getElementById('sub-total').innerText = '00';
    document.getElementById('all-cost').innerText = '00';
    document.getElementById('tax').innerText = '00';
})