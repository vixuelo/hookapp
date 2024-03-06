const { render, screen, fireEvent } = require("@testing-library/react")
const { MainApp } = require("../../src/09-useContext/MainApp")
const { MemoryRouter } = require("react-router-dom")

describe('testing mainapp', () => { 
  test('homepoage', () => { 
    
      render(
      
          <MemoryRouter>
            
            <MainApp/>
      
          </MemoryRouter>


)

      screen.debug();
      expect(screen.getByText("HomePage"));

   })

   test('loginpage6  ', () => { 
    
    render(
    
        <MemoryRouter initialEntries={['/login']}>
          
          <MainApp/>
    
        </MemoryRouter>


)

    screen.debug();
    expect(screen.getByText("LoginPage"));

 })
 })