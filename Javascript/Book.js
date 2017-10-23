function Book() {
    this.givenName = null,
    this.familyName = null,
    this.price = 0,
    this.taxRate = 20
}

Book.prototype.getName = function() { 
    return this.givenName + " " + this.familyName; 
}

Book.prototype.getPriceWithTax = function() { 
    var tax = (this.price * (this.taxRate / 100.0));
    return this.price + tax;
}


