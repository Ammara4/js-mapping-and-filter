let product = [
    {
        imageUrl: "../images/bags.jpg",
        gender: "Ladies",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "2"
    },
    {
        imageUrl: "../images/skir.jpg",
        gender: "Ladies",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/wears.jpg",
        gender: "Ladies",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/jeans.jpg",
        gender: "Ladies",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/ladies.jpg",
        gender: "Ladies",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/kid.jpg",
        gender: "Kids",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/cap.jpg",
        gender: "Kids",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/kids.jpg",
        gender: "Kids",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/shir.jpg",
        gender: "Gents",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/wears.jpg",
        gender: "Kids",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/foks.jpg",
        gender: "Kids",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/frok.jpg",
        gender: "Baby",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    },
    {
        imageUrl: "../images/manjean.jpg",
        gender: "Gents",
        garments: "Pants",
        price: "4$",
        review: "Good",
        Rating: "4"
    }
]
function myfunction() {
    let define = product.map((detail) => {
        return `
        <div class="products">
            <img src=${detail.imageUrl} >
                <h1>${detail.garments}</h1>
                <h4>${detail.gender}</h4>
                <div class="items">
                    <h4>${detail.price}</h4>
                    <p>${detail.review}</p>
                </div>
                <p>${detail.Rating}</p>
                <div> <button onclick="myfunctss()">Remove</button></div>

            </div>
        `

    })
    let container = document.querySelector(".container").innerHTML = define
    console.log("fetching");
}

function myfunctss() {
    let products = product.filter((filer) => filer.Rating !== "4").map((filer) => {
        return `
        <div class="products">
             <img src=${filer.imageUrl} >
                 <h1>${filer.garments}</h1>
                 <h4>${filer.gender}</h4>
                 <div class="items">
                     <h4>${filer.price}</h4>
                     <p>${filer.review}</p>
                 </div>
                 <p>${filer.Rating}</p>
                 <div>
                
                 </div>
             </div>
             `
    });
    let containers = document.querySelector(".container").innerHTML = products;
}

function myfunct() {
    let products = product.filter((filer) => filer.gender === "Ladies").map((filer) => {
        return `
        <div class="products">
             <img src=${filer.imageUrl} >
                 <h1>${filer.garments}</h1>
                 <h4>${filer.gender}</h4>
                 <div class="items">
                     <h4>${filer.price}</h4>
                     <p>${filer.review}</p>
                 </div>
                 <p>${filer.Rating}</p>
                 <div>
                
                 </div>
             </div>
             `
    });
    let containers = document.querySelector(".container").innerHTML = products;
}
function myfuncts() {
    let products = product.filter((filer) => filer.gender === "Gents").map((filer) => {
        return `
        <div class="products">
             <img src=${filer.imageUrl} >
                 <h1>${filer.garments}</h1>
                 <h4>${filer.gender}</h4>
                 <div class="items">
                     <h4>${filer.price}</h4>
                     <p>${filer.review}</p>
                 </div>
                 <p>${filer.Rating}</p>
                 <div>
                
                 </div>
             </div>
             `
    });
    let containers = document.querySelector(".container").innerHTML = products;
}
function myfunc() {
    let products = product.filter((filer) => filer.gender === "Kids").map((filer) => {
        return `
        <div class="products">
             <img src=${filer.imageUrl} >
                 <h1>${filer.garments}</h1>
                 <h4>${filer.gender}</h4>
                 <div class="items">
                     <h4>${filer.price}</h4>
                     <p>${filer.review}</p>
                 </div>
                 <p>${filer.Rating}</p>
                 <div>
                
                 </div>
             </div>
             `
    });
    let containers = document.querySelector(".container").innerHTML = products;
}
function myfun() {
    let products = product.filter((filer) => filer.gender === "Baby").map((filer) => {
        return `
        <div class="products">
             <img src=${filer.imageUrl} >
                 <h1>${filer.garments}</h1>
                 <h3>${filer.gender}</h3>
                 <div class="items">
                     <h4>${filer.price}</h4>
                     <p>${filer.review}</p>
                 </div>
                 <p>${filer.Rating}</p>
                 <div>
                
                 </div>
             </div>
             `
    });
    let containers = document.querySelector(".container").innerHTML = products;
}

/*let searchbox = document.getElementsByClassName('searchbox')[0];

window.addEventListener('load', () => {
    product.forEach(element => {
        const { garments, imageUrl, gender } = element;
        let card = document.createElement('a');

        card.innerHTML = `
        <div class="content">
        <img src=${imageUrl} >
                 <h1>${garments}</h1>
                 <h3>${gender}</h3>
        </div>`;
        searchbox.appendChild(card)


    });
})*/






