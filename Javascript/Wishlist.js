function Wishlist() {
    this.items = [] 
}

Wishlist.prototype.addBook = function(book) { 
    this.items.push(book); 
}

