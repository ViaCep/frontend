import React, { useState } from 'react';
import Routes from './routes';
import { BrowserRouter as Router} from "react-router-dom";
import Header from './components/Header'
import {
  Container, 
  ContainerCep, 
  Details,
  Row, 
  Search
} from './pages/Home/styles';

const App: React.FC = () => {
    const [cep, setCep] = useState({
        cidade: 'Pradópolis',
        bairro: 'Maria Luiza 2',
        rua: 'Pedro Xavier da Silva',
        logradouro: 'Casa'
    });

    console.log(cep)

    const ResultCep = () => {
        return(
            <h1>Result</h1>
        );
    }

    return(
        <Router>
            <Container className="container-fluid">
                <Row className="row">
                    <Search className="col-6">
                        <Header />
                        <ContainerCep>
                            <Routes />
                        </ContainerCep>
                    </Search>
                    <Details className="col-6">
                        {cep ? <ResultCep /> : ''}
                    </Details>
                </Row>
            </Container>
        </Router>
    );
}
export default App;