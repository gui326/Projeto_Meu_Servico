import React from "react";

import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';


import Login from ".";

describe('Testando Login componente', () => {
    it('Mostrar o título', () => {
        render(<Login />);

        expect(screen.getByText('Acesso Prestador de Serviço')).toBeInTheDocument();
    })

    it('Mostrar a descrição', () => {
        render(<Login />);

        expect(screen.getByText('Digite os seus dados para poder entrar.')).toBeInTheDocument();
    })
})