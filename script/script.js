let cart = {
    'ship': 0,
    'car': 0,
};


document.onclick = event => {
    // console.log(event.target.classList)
    if (event.target.classList.contains('plus')) {
        // console.log(event.target.dataset.id);
        plusFunction(event.target.dataset.id);
    }
    else if (event.target.classList.contains('minus')) {
        // console.log(event.target.dataset.id);
        minusFunction(event.target.dataset.id);
    }

}

const plusFunction = id => {
    cart[id]++;
    renderCart();
}
const minusFunction = id => {
    if (cart[id] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]--;
    renderCart();
}
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}


const renderCart = () => {
    console.log(cart);
    // innerhtml(cart);
}

renderCart();