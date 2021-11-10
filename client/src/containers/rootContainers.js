import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 1170px;
    @media and (max-width: 992px){
        width: 750px;
    }
    @media and (max-width: 1200px){
        width: 970px;
    }
    @media and (max-width: 768px){
        width: auto;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Col1 = styled.div`
    width: 100%;
`;

export const Col2 = styled.div`
    width: 50%;
`;

export const Col3 = styled.div`
    width: 33.33%;
`;

export const Col4 = styled.div`
    width: 25%;
`;

export const Col5 = styled.div`
    width: 20%;
`;


export const FormShower = styled.p`
    display: inline-block;
    text-transform: capitalize;
    padding: 10px;
    margin: 5px auto;
    color: #57068c;
    cursor: pointer;
    border: 1px solid #57068c;
    &:hover{
        background-color: #57068c;
        color: white;
    }
`;