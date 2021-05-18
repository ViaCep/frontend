import React from 'react'
import {
    ContainerTitle,
    Description,
    TitleResult
} from './styles'

interface IParams {
    nameCamp: String;
    resultCamp: String;
}

const ListResult: React.FC <IParams> = ({ nameCamp, resultCamp }) => {
    return(
        <ContainerTitle>
            <TitleResult>{nameCamp}</TitleResult>
            <Description>{resultCamp}</Description>
        </ContainerTitle>
    );
}

export default ListResult