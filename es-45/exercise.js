function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

const Smartphone1 = new Smartphone('Apple', 'Iphone11', 1200);
const Smartphone2 = new Smartphone('Samsung', 'Samsung Galaxy', 890);

console.log(Smartphone1);
console.log(Smartphone2);