describe('nx-test-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-test-test').should('exist');
  });
});
