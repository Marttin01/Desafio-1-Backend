class ProductManager {
    constructor () {
        this.products = [];
        this.productsId = 1;
    }

    addProduct(product) {
        if(!product.title || !product.description ||!product.price ||!product.thumbnail ||!product.code ||!product.stock ) {
            console.log("Complete todos los campos")
            return;
        }
        
        if (this.products.some((p) => p.code === product.code)) {
            console.log("El codigo se repite")
            return;
        }
            
        this.products.push(product);
        product.id = this.productsId++;
    }

    getProducts() {
        return this.products;
    }

    getProductById (id) { 
       if(!this.products.find((product) => product.id === id)) {
        console.log("Not found")
        return null;
       }else {
        return this.products.find((product) => product.id === id)
       }
    }
}

const storage = new ProductManager

storage.addProduct({title:"silla", description:"para sentarse", price:1000, thumbnail:"/img/silla.png", code:01, stock:20})
storage.addProduct({title:"mesa", description:"para comer", price:2000, thumbnail:"/img/mesa.png", code:02, stock:10})
storage.addProduct({title:"cama", description:"para dormir", price:3000, thumbnail:"/img/cama.png", code:03, stock:15})

// console.log(storage.getProducts());
console.log(storage.getProductById(3))
