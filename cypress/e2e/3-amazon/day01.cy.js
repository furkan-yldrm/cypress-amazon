describe("Amazon sayfasina giris", ()=>{

    it("Tarayiciyi başlat ve Amazon sayfasina git",()=>{
    
        cy.visit("https://www.amazon.com.tr/")
        
        cy.wait(2000);
    })
    
    it('Çerezleri kabul et', () => {
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });
    
    it('Arama kutusuna bir ürün yaz', () => {
        
        cy.get('.ac-input-container').type('iPhone 16');
        
        
    });
    
    });