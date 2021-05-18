import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../styles/globalStyles.module.css'
import { useCep } from '../../context/CepContext'
import api from '../../services/api'

//Styles
import {
    Titulo,
    ContainerTitulo,
    Lengend,
    ContainerInputSearch,
    InputSearch,
    ButtonSubmit
} from './styles'

const Home: React.FC = () => {
    const { setCep } = useCep();
    const [submit, setSubmit] = useState<String>('');

    const updateResult = async () => {
        const {data} = await api.get(`/cep?cep=${submit}`)
        setCep(data);
    }
        
    return(
        <>
            <ContainerTitulo>
                <Titulo>Pesquise um <span style={{ color: '#FF3D00' }}>Cep</span> <br /> e deixe o resto com a gente</Titulo>
                <Lengend>São mais de 1 milhão de CEPs que podem ser consultados</Lengend>
            </ContainerTitulo>
            <div className="d-flex justify-content-center align-items-center w-100">
                <ContainerInputSearch>
                    <InputSearch 
                        maxLength={8} 
                        placeholder="Digite seu CEP aqui"
                        onChange={({target}) => setSubmit(target.value)}
                    />
                    <ButtonSubmit 
                        onClick={updateResult}
                    >
                        <i className="fas fa-search"></i>
                    </ButtonSubmit>
                </ContainerInputSearch>
            </div>
        </>
    );
}

export default Home;