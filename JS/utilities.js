function getQuantityInput(inputId, isIncrease) {

    const inputField = document.getElementById(inputId).value;
    const quantity = parseInt(inputField);

    // const itemPrice = document.getElementById('item-price').innerText;
    // const priceInt = parseInt(itemPrice);

    let newQuantity;
    if (isIncrease === true) {
        newQuantity = quantity + 1;

    } else {
        newQuantity = quantity - 1;


    }
    document.getElementById(inputId).value = newQuantity;
    return newQuantity;


}