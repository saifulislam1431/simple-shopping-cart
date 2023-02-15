function getQuantityInput(inputId, isIncrease) {

    const inputField = document.getElementById(inputId).value;
    const quantity = parseInt(inputField);
    let newQuantity;
    if (isIncrease === true) {
        newQuantity = quantity + 1;

    } else {
        newQuantity = quantity - 1;
    }
    document.getElementById(inputId).value = newQuantity;
    return newQuantity;

}

function totalCaseCost(newQuantity) {
    const totalPrice = newQuantity * 59;
    document.getElementById('item-price').innerText = totalPrice;
    return totalPrice;
}

function totalPhoneCost(newQuantity) {
    const totalPrice = newQuantity * 1219;
    document.getElementById('phone-item-price').innerText = totalPrice;
    return totalPrice;
}

function getCurrentPrice(inputId) {
    const previousPrice = document.getElementById(inputId);
    const currentPriceString = previousPrice.innerText;
    const currentPrice = parseInt(currentPriceString);
    return currentPrice;

}

function setSubTotal() {
    const caseTotal = getCurrentPrice('item-price');
    const phoneTotal = getCurrentPrice('phone-item-price');
    const subTotal = caseTotal + phoneTotal;
    document.getElementById('sub-total').innerText = subTotal;
}

function setTotal() {
    const subTotalCost = document.getElementById('sub-total');
    const subTotalString = subTotalCost.innerText;
    const newSubTotal = parseInt(subTotalString);
    const tax = (newSubTotal * .034);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('all-cost').innerText = newSubTotal + tax;

}