import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../styles/globalStyles.module.css'

//Styles
import {
    Container,
    Search,
    Details
} from './styles'

const Home: React.FC = () => {
    return(
        <Container className="container-fluid">
            <div className="row">
                <Search className="col-6">Search</Search>
                <Details className="col-6">Datails</Details>
            </div>
        </Container>
    );
}

export default Home;