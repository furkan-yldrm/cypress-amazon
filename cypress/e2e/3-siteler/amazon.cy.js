describe("Amazon sayfasina giris", ()=>{

    it("Tarayiciyi başlat ve Amazon sayfasina git",()=>{
    
        //Amazon adresine git
        cy.visit("/");
        
        cy.wait(1000);
    })
    
    it('Çerezleri kabul et', () => {
        
        //Çerezleri kabul et
        cy.xpath("//input[@id='sp-cc-accept']").click();
    });

    it('Url kontrol et', () => {
        
        cy.url().should('include','amazon');
    });
    
    it('Arama kutusuna bir ürün yaz', () => {
        
        //Arama kutusuna iPhone 16 yaz
        cy.get('.ac-input-container').type('iPhone 16{enter}');

        //Çerezleri kabul et
        cy.xpath("//input[@id='sp-cc-accept']").click();
        
    });

    it('Anasayfaya gerş dön', () => {
        
        //Tarayıcıda geri gitme
        cy.go('back');

        //Tarayıcıda ileri gitmek için cy.go('forward')
    });
    
    it('Kategorilerden Elektronik seç', () => {

        cy.get('#searchDropdownBox').select('Elektronik');    
    });

    it('Profilim sayfasina git', () => {
        
        cy.get('#nav-link-accountList').click();
    });

    it('Bir hesap olusturun', () => {
        
        cy.xpath("//input[@id='sp-cc-accept']").click();

        //Assertion
        cy.get('.a-size-medium-plus').should("contain","Giriş yapın veya hesap oluşturun");

    });

    });