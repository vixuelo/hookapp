import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";
const user={
  name:"vixuelo",
  id:1234,
  mail:"vixuelo@mail.com",}
describe('pruebbas en hompage', () => { 
  
  test('debe mostrar componente sin user', () => { 
    
    render(
    <UserContext.Provider value = {{user:null}}><HomePage/>
    </UserContext.Provider>
    );
    screen.debug();
    expect(screen.getByLabelText('pre').innerHTML).toBe('null');
   })
   test('debe mostrar componente con user', () => { 
    
    render(
    <UserContext.Provider value = {user}><HomePage/>
    </UserContext.Provider>
    );
    screen.debug();
    expect(screen.getByLabelText('pre').innerHTML).toBe( "{\"name\":\"vixuelo\",\"id\":1234,\"mail\":\"vixuelo@mail.com\"}");
    expect(screen.getByLabelText('pre').innerHTML).toContain(user.id.toString());
   })
 })