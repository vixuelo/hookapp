import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe('Testing en Form', () => { 
    const initialForm ={
        username:"pepe",
        email:"pep@mail.com",
        password:"1234"
    }

    test('debe regresar default', () => { 
            const {result} = renderHook(()=>useForm(initialForm));
           const{formState,onReset,onInputChange}=result.current;
            expect(formState).toBe(initialForm);
            expect(onInputChange).toEqual(expect.any(Function));
            expect(onReset).toEqual(expect.any(Function));
    
     })
     test('debe cambiar nombre del forulario', () => { 
        const {result} = renderHook(()=>useForm(initialForm));
        const{formState,onReset,onInputChange}=result.current;
        const newName="juan";
        const target ={name:"username", value:newName}
        act(()=>{
            onInputChange({target});
        })
        console.log(result.current);
        expect(result.current.username).toBe(newName)
        expect(result.current.formState.username).toBe(newName)

 })
 test('debe reset del forulario', () => { 
    const {result} = renderHook(()=>useForm(initialForm));
    const{formState,onReset,onInputChange}=result.current;
    const newName="juan";
    const target ={name:"username", value:newName}
    act(()=>{
        
        onInputChange({target});
        onReset();
    })
    console.log(result.current);
    expect(result.current.username).toBe(initialForm.username)
    expect(result.current.formState.username).toBe(initialForm.username)

})
 })