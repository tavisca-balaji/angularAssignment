var Product = /** @class */ (function () {
    function Product(ProductId, ProductName, Category, Manufacturer, Description, Price) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Category = Category;
        this.Manufacturer = Manufacturer;
        this.Description = Description;
        this.Price = Price;
    }
    return Product;
}());
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.products = new Array();
    }
    ProductLogic.prototype.SetProduct = function () {
        this.products.push(new Product(1, "Samsung", "Mobile", "Samsung Ltd", "Samsung mobile ltd", 10000));
        this.products.push(new Product(2, "ThinkPad", "Laptop", "Lenovo Ltd", "Lenovo ltd", 100000));
    };
    ProductLogic.prototype.DisplayProduct = function () {
        console.log();
        console.log("List of Products:");
        this.products.forEach(function (product, index) { return console.log(JSON.stringify(product)); });
    };
    ProductLogic.prototype.DisplayProductByCategory = function (category) {
        console.log();
        console.log("List of Products with " + category + " category:");
        this.products.filter(function (p) { return p.Category == category; }).forEach(function (product, index) { return console.log(JSON.stringify(product)); });
    };
    ProductLogic.prototype.ProductValidator = function (product, operation) {
        var count = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.ProductId == product.ProductId)
                count += 1;
        }
        if (count > 0) {
            if (operation == "Update") {
                if (count > 1) {
                    return "ProductId should be unique";
                }
            }
            else {
                return "ProductId should be unique";
            }
        }
        if (product.Price < 0) {
            return "Price should not be -ve";
        }
        if (product.Description.length > 100) {
            return "Maximum 100 character allowed for Description";
        }
        if (typeof (product.ProductName) != "string") {
            return "ProductName should be string";
        }
        if (typeof (product.Category) != "string") {
            return "Category should be string";
        }
        if (typeof (product.Manufacturer) != "string") {
            return "Manufacturer should be string";
        }
        return "";
    };
    ProductLogic.prototype.AddProduct = function (prod) {
        var validation = this.ProductValidator(prod, "Add");
        if (validation != "") {
            console.log(validation);
            return;
        }
        this.products.push(prod);
        console.log("Product added successfully");
    };
    ProductLogic.prototype.UpdateProduct = function (prod) {
        var validation = this.ProductValidator(prod, "Update");
        if (validation != "") {
            console.log(validation);
            return;
        }
        var count = 0;
        var index = 0;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].ProductId === prod.ProductId) {
                count += 1;
                index = i;
            }
        }
        if (count == 0) {
            console.log("Product not exists for update");
            return;
        }
        this.products[index].Category = prod.Category;
        this.products[index].Description = prod.Description;
        this.products[index].Manufacturer = prod.Manufacturer;
        this.products[index].Price = prod.Price;
        this.products[index].ProductName = prod.ProductName;
        console.log("Product updated successfully");
    };
    return ProductLogic;
}());
var objProductLogic = new ProductLogic();
objProductLogic.SetProduct();
objProductLogic.DisplayProduct();
objProductLogic.DisplayProductByCategory("Laptop");
console.log();
console.log("Add with validation:");
objProductLogic.AddProduct(new Product(1, "Test", "Test", "Test", "Description", 1000));
console.log();
console.log("Add product with valid input:");
objProductLogic.AddProduct(new Product(3, "Name", "Category", "Mgf", "Description", 1000));
console.log();
console.log("Update with invlid input:");
objProductLogic.UpdateProduct(new Product(5, "Name", "Category", "Mgf", "Description", 1000));
console.log();
console.log("Update with vlid input:");
objProductLogic.UpdateProduct(new Product(3, "Name", "Category", "Manufacturer", "Description", 1000));
console.log();
console.log("Saved Products:");
console.log(JSON.stringify(objProductLogic.DisplayProduct()));
