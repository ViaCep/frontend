import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router} from "react-router-dom";
import Header from './components/Header'

import {
  Container, 
  ContainerCep,
  Row, 
  Search
} from './pages/Home/styles';

import {
    Details
} from './styles/styles'

import Results from './pages/Results'
import CepProvider from './context/CepContext';


const App: React.FC = () => {

    return(
        <CepProvider>
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
                            <Results />
                        </Details>
                    </Row>
                </Container>
            </Router>
        </CepProvider>
    );
}
export default App;