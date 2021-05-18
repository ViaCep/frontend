import React, { createContext, useState, useContext } from 'react'

interface ICep {
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
    ibge: String,
    gia: String,
    ddd: String,
    siafi: String
}

interface ContextValue {
    cep: ICep,
    setCep: Function;
}

const CepContext = createContext<ContextValue>({} as ContextValue);

const CepProvider: React.FC = ({ children }) => {
    const [cep, setCep] = useState<ICep>({} as ICep);

    return(
        <CepContext.Provider value={{ cep, setCep }}>
            {children}
        </CepContext.Provider>
    );
}

export const useCep = () => {
    const context = useContext(CepContext);
    return context;
}

export default CepProvider;