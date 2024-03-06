import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"

const fs = require('fs');
const path = require('path');

function readJSONFile(filename) {
  const filePath = path.resolve(__dirname, filename);
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

jest.mock("../../src/hooks/useFetch");
describe('Testing de multiplecustom', () => { 
    
    test('return default', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading:true,
            hasError: null
        })
        const componente = render(<MultipleCustomHooks/>);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText("informacion de pokemon"));


     })
     test('debe de mostrar las imagenes', () => { 
        const dataJson = readJSONFile("C:/Users/jcuberom/OneDrive - NTT DATA EMEAL/Escritorio/udemy/react/hook-app/test/examples/files/dataMch.json");
        useFetch.mockReturnValue({
           data:dataJson,
            isLoading:false,
            hasError: null
        })
        const componente = render(<MultipleCustomHooks/>);
        screen.debug();
        expect(screen.getAllByRole("img")[0].src).toContain("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")


      })
 })