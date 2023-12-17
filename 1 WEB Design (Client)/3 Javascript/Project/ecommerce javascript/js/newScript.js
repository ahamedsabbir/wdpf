//var gender = character.filter(element => { return element.gender == ("female") });
(async function () {
    let html = "";
    const urlCat = new URLSearchParams(window.location.search).get('cat');
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const jsonData = await res.json();
    const dataArray = jsonData.products.filter(element => { return element.category == (urlCat) });
    data.products.forEach(product => {
        html += `<!-- Product -->
            <div class="col-md-3 my-3">
                <div class="col-12 bg-white text-center h-100 product-item">
                    <div class="row h-100">
                        <div class="col-12 p-0 mb-3">
                            <a href="product.html">
                                <img src="${product.thumbnail}" class="img-fluid">
                            </a>
                        </div>
                        <div class="col-12 mb-3">
                            <a href="product.html?id=${product.id}" class="product-name">${product.title}</a>
                        </div>
                        <div class="col-12 mb-3">
                                <span class="product-price-old">
                                    ${product.price - 100}
                                </span>
                            <br>
                            <span class="product-price">
                                    ${product.price}
                                </span>
                        </div>
                        <div class="col-12 mb-3 align-self-end">
                            <button class="btn btn-outline-dark" type="button" onclick="add(${product.id})"><i class="fas fa-cart-plus me-2"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Product -->`;
    });
    document.getElementById("postLoop").innerHTML = html;
})();