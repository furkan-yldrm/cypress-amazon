describe("Amazon sayfasina giris", ()=>{

    it("Tarayiciyi başlat ve Amazon sayfasina git",()=>{
    
        //Amazon adresine git
        cy.visit("https://www.amazon.com.tr/");
        
        cy.wait(2000);
    })
    
    it('Çerezleri kabul et', () => {
        
        //Çerezleri kabul et
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });
    
    it('Arama kutusuna bir ürün yaz', () => {
        
        //Arama kutusuna iPhone 16 yaz
        cy.get('.ac-input-container').type('iPhone 16{enter}');

        //Çerezleri kabul et
        cy.xpath("//input[@id='sp-cc-accept']").click();
        
    });

    it('', () => {
        
    });
    
    });