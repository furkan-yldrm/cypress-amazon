describe("Etsy Test",()=>{



it('Siteye git', () => {
    
    cy.visit('https://www.trendyol.com//');
});
    
    


it('Pop up Kapatma', () => {
    
    cy.get(':nth-child(2) > .gender-button > .homepage-popup-img > img').click();
});

it('Ürün ara, Fiyata göre listele, Sepete Ekle', () => {
    
    const searchText = 'Acer Nitro';

    cy.get('[data-testid="suggestion"]').click();
    cy.get('[data-testid="suggestion"]').type(searchText);
    cy.wait(1500);

    cy.get(':nth-child(6) > [data-testid="suggestion-item"]').click();

    
});






})