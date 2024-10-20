  export function getProduct(productId){
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
       
 
     });
     return matchingProduct;
 }
 
 
 export const products = [{
    id: "a845b1-16ed-4eac-bdf9-5b591882113d",
    image: 'athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks-6pairs',
    rating: {
        stars: 4.5,
        count: 87,
    },
    price: 500
}, {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: 'intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        stars: 4.5,
        count: 85,
    },
    price: 500

}, {
    id: "77a845b1-16ed-4eac-bdf9-u3591882113d",
    image: 'adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt-2 pack',
    rating: {
        stars: 4.5,
        count: 78,
    },
    price: 500
}, {
    id: "77a845b1-16ed-4edf-bdf9-5b591882113d",
    image: 'knit-athletic-sneakers-pink.webp',
    name: 'knit-athletic Sneakers for women',
    rating: {
        stars: 4.5,
        count: 87,
    },
    price: 800
}, {
    id: "77a8rt51-16ed-4eac-bdf9-5b591882113d",
    image: 'men-navigator-sunglasses-brown.jpg',
    name: 'Men-navigator-sunglasses brown',
    rating: {
        stars: 4.5,
        count: 87,
    },
    price: 1000
}, {
    id: "87a845b1-16ed-4eac-bdf9-5b591882113d",
    image: 'women-chiffon-beachwear-coverup-black.jpg',
    name: 'Women-chiffon-beachwear coverup',
    rating: {
        stars: 4.5,
        count: 87,
    },
    price: 1200
}, {
    id: "77a845b1-16ed-4eac-ghf9-5b591882113d",
    image: 'sky-flower-stud-earrings.webp',
    name: 'Sky flower earring for women',
    rating: {
        stars: 4.5,
        count: 87,
    },
    price: 100
}, {
    id: "77a845b1-16ed-4eac-bdf9-5r491882113d",
    image: 'plain-hooded-fleece-sweatshirt-yellow.jpg',
    name: 'Sweat Shirt-yellow',
    rating: {
        stars: 4.5,
        count: 87,
    },
    price: 1090
}, {
    id: "77a845b1-16ed-4eac-bdf9-5b591123113d",
    image: 'https://supersimple.dev/projects/amazon/images/products/black-2-slot-toaster.jpg',
    name: '2 Slot Toaster - Black',
    rating: {
        stars: 4.5,
        count: 97,
    },
    price: 2000
}, {
    id: "77a845b1-23ed-4eac-bdf9-5b591882113d",
    image: 'https://supersimple.dev/projects/amazon/images/products/women-beach-sandals.jpg',
    name: 'Women Two Strap Buckle Sandals - Tan',
    rating: {
        stars: 4.5,
        count: 97,
    },
    price: 867
}, {
    id: "77a095b1-16ed-4eac-bdf9-5b591882113d",
    image: 'https://supersimple.dev/projects/amazon/images/products/blackout-curtain-set-beige.webp',
    name: 'Blackout Curtains Set 4-Pack - Beige',
    rating: {
        stars: 4.5,
        count: 129,
    },
    price: 543
},
{
    id: "77a845b1-16ed-4eac-bdf9-5b651882113d",
    image: '	https://supersimple.dev/projects/amazon/images/products/floral-mixing-bowl-set.jpg',
    name: '10-Piece Mixing Bowl Set with Lids - Floral',
    rating: {
        stars: 4.5,
        count: 119,
    },
    price: 680
}];