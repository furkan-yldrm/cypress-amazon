describe("Hepsiburada Test",()=>{
    
beforeEach(()=>{

    cy.visit('https://www.cimri.com/');

})

/*afterEach(()=>{

    cy.reload();

})*/

it('Anasayfa assertion', () => {
    
    cy.url().should('eq',"https://www.cimri.com/");

    cy.title().should('include','Cimri');

});

it('Arama fonksiyonu ve assertion', () => {
    
    const expectedText = 'Acer nitro 5';

    cy.get('SearchBox_searchBarPlaceholder__2yBF3').click();
    cy.get('SearchBox_searchBarPlaceholder__2yBF3').type(expectedText);
    cy.wait(2000);
    cy.contains('Acer nitro 5').click();


    
    
});







})