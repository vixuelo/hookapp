import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { act } from "react-dom/test-utils";

describe('testing en loginpage', () => { 
  


  test('debe mostrar componente sin user', () => { 
    
    render(
    <UserContext.Provider value = {{user:null}}><LoginPage/>

    </UserContext.Provider>
    );
    expect(screen.getByLabelText('pre').innerHTML).toBe('null');
   })
 test('debe mostrar comp scon uysertras pulsar button', () => { 
  
  const setUser = jest.fn();
  render(
    <UserContext.Provider value = {{user:null , setUser:setUser}}><LoginPage/>

    </UserContext.Provider>
    );
    const button=screen.getByLabelText('submit')
    fireEvent.click(button)
    expect(setUser).toHaveBeenCalledWith({id:1234,name:'benancio', email:'beni@email.com'} );
  })
})
