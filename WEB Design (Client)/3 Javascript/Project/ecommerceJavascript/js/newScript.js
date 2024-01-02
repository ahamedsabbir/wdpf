//var gender = character.filter(element => { return element.gender == ("female") });
(async function () {
    let html = "";
    const urlCat = new URLSearchParams(window.location.search).get('cat');
    console.log(urlCat);
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const jsonData = await res.json();
    const dataArray = jsonData.products.filter(element => { return element.category == (urlCat) });
    dataArray.forEach(product => {
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
    document.getElementById("catTitle").innerHTML = urlCat;
})();

(async function getCatArray() {
    let cat = new Set();
    var catResult = "";
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const jsonData = await res.json();
    jsonData.products.forEach(product => {
        cat.add(product.category);
    });
    cat.forEach(e => {
        catResult += `<a class="dropdown-item" href="category.html?cat=${e}">${e}</a>`;
    });
    document.getElementById("setCat").innerHTML = catResult;
})();


async function searchFunc() {
    const keyword = document.getElementById("searchInput").value;
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const jsonData = await res.json();
    const dataArray = jsonData.products.find(element => { return element.description == "book" });
    console.log(dataArray);
}


async function newItemFunc(keyword) {
    let htmlData = "";
    const res = await fetch('https://dummyjson.com/products?limit=4');
    const jsonData = await res.json();
    const dataArray = jsonData.products.filter(element => { return element.category == `${keyword}`; });
    console.log(dataArray);
    dataArray.forEach(product => {
        htmlData += `<!-- Product -->
        <div class="col-lg-3 col-sm-6 my-3">
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
    document.getElementById(keyword+"List").innerHTML =  htmlData;
    document.getElementById(keyword+"Title").innerHTML =  keyword;
}
newItemFunc("smartphones");
newItemFunc("tops");