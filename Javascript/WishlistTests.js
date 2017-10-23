QUnit.module("Wishlist tests", {
    beforeEach: function() { 
        this.wishlist = new Wishlist(); 
    }   
});


QUnit.test("check add one book to wishlist", function(assert) { 
    this.wishlist.addBook(new Book());
    assert.equal(this.wishlist.items.length, 1);
}); 



