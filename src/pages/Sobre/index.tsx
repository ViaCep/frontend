import React from 'react'
import {
    ContainerTitulo,
    Titulo,
    ContainerDescription,
    Description
} from './styles'

const Sobre: React.FC = () => {
    return(
        <>
            <ContainerTitulo>
                <Titulo>Vamos falar um <br />pouquinho sobre <span>nós</span></Titulo>
            </ContainerTitulo>
            <ContainerDescription>
                <Description>
                    Somos um webservice voltado para consultas de CEP por meio de API, retornando
                    em JSON para fácil acesso e manipulação de dados.<br />
                    São mais de 1 milhão de CEPs para você consultar.
                </Description>
            </ContainerDescription>
        </>
    );
}

export default Sobre;