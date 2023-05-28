const product = document.querySelectorAll('.product');

function productCount(product) {
    const productControlDec = product.querySelector('.product__quantity-control_dec');
    const productControlInc = product.querySelector('.product__quantity-control_inc');
    let productValue = product.querySelector('.product__quantity-value');

    productControlDec.onclick = function() {
        if(productValue.innerText <= 1) {
            return false;
        }
        productValue.innerText--;
    }

    productControlInc.onclick = function() {
        productValue.innerText++;
    }

    const add = product.querySelector('.product__add');
    const cartProduct = document.querySelector('.cart__products');
    
    add.addEventListener('click', () => {
        const cart = document.createElement('div');
        cart.classList.add('cart__product');
        cart.dataset.id = product.dataset.id;

        const img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.src = product.querySelector('.product__image').src;

        const count = document.createElement('div');
        count.classList.add('cart__product-count');
        count.textContent = productValue.innerText;

        cartProduct.appendChild(cart).append(img,count);
    })
}

product.forEach(productCount);
