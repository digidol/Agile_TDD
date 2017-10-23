QUnit.module("Book tests", {
    beforeEach: function() { 
        this.book = new Book(); 
    }     
});


QUnit.test("check getName", function(assert) { 
    this.book.familyName = "Taylor"; 
    this.book.givenName = "Neil"; 
    assert.equal(this.book.getName(), "Neil Taylor");
}); 

QUnit.test("check price with tax", function(assert) { 
    this.book.price = 20.0; 
    assert.equal(this.book.getPriceWithTax(), 24.0);
}); 


