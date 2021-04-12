import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../styles/globalStyles.module.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

//Styles
import {
    Container,
    Search,
    Details,
    Row,
    Nav,
    Imagem,
    Links,
    ContainerCep,
    Titulo,
    ContainerTitulo,
    Lengend,
    ContainerInputSearch,
    InputSearch,
    ButtonSubmit
} from './styles'

const Home: React.FC = () => {
    return(
        <Container className="container-fluid">
            <Row className="row">
                <Search className="col-6">
                    <Nav className="d-flex justify-content-between align-items-center">
                        <Imagem src={Logo} />
                        <Links>
                            <Link to="/">Pesquisar</Link>
                            <Link to="/sobre">Sobre</Link>
                        </Links>
                    </Nav>
                    <ContainerCep>
                        <ContainerTitulo>
                            <Titulo>Pesquise um <span style={{ color: '#FF3D00' }}>Cep</span> <br /> e deixe o resto com a gente</Titulo>
                            <Lengend>São mais de 1 milhão de CEPs que podem ser consultados</Lengend>
                        </ContainerTitulo>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <ContainerInputSearch>
                                <InputSearch maxLength={8} placeholder="Digite seu CEP aqui" />
                                <ButtonSubmit><i className="fas fa-search"></i></ButtonSubmit>
                            </ContainerInputSearch>
                        </div>
                    </ContainerCep>
                </Search>
                <Details className="col-6"></Details>
            </Row>
        </Container>
    );
}

export default Home;