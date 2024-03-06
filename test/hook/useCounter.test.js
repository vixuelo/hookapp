import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils";

describe("Testing de UseCounter", () => { 
    test('sebe retornar defaul', () => { 
        const {result} = renderHook(()=>useCounter());
        const{Counter,increment,decrement,reset}=result.current;
        expect(Counter).toBe(10)
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))

     })
     test('sebe retornar 100', () => { 
        const {result} = renderHook(()=>useCounter(100));
        const{Counter,increment,decrement,reset}=result.current;
        expect(Counter).toBe(100)

     })
     test('sebe retornar 101 con inc', () => { 
        const {result} = renderHook(()=>useCounter(100));
        const{Counter,increment,decrement,reset}=result.current;
        act(()=>{
            increment();
            increment(3);
        })
        expect(result.current.Counter).toBe(104)

     })
     test('sebe retornar 99 con dec', () => { 
        const {result} = renderHook(()=>useCounter(100));
        const{Counter,increment,decrement,reset}=result.current;
        act(()=>{
            decrement();
            decrement(4);
        })
        expect(result.current.Counter).toBe(95)

     })
     test('sebe retornar 100 con RST', () => { 
        const {result} = renderHook(()=>useCounter(100));
        const{Counter,increment,decrement,reset}=result.current;
        act(()=>{
            reset();
        })
        expect(result.current.Counter).toBe(100)

     })
 })