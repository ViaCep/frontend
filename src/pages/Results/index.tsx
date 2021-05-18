import React from 'react'
import {
    Container,
} from './styles'
import Button from '../../components/Button'
import ListResult from '../../components/ListResult'
import { useCep } from '../../context/CepContext'

const Result: React.FC = () => {

    const { cep } = useCep();

    return(
        <>
            {
                cep.localidade 
                &&  <Container>
                        <ListResult nameCamp="Cidade" resultCamp={`${cep.localidade ? cep.localidade : '----'}`} />
                        <ListResult nameCamp="Bairro" resultCamp={`${cep.bairro ? cep.bairro : '----'}`} />
                        <ListResult nameCamp="Rua" resultCamp={`${cep.logradouro ? cep.logradouro : '----'}`} />
                        <ListResult nameCamp="Logradouro" resultCamp={`${cep.uf ? cep.uf : '----'}`} />
                        <Button url={`${cep.localidade}+${cep.logradouro}`} text="Como chegar?" />
                    </Container>
            }
        </>
    );
}

export default Result;