import styled from 'styled-components';
import { colors } from '../../../db.json';

export const Post = styled.div`
    padding-top: 10rem;
    padding-bottom: 5%;
    width: 90%;
`;

export const Img = styled.img`
    width: 100%;
    margin-top: 3rem;
    height: auto;
`;

export const Col = styled.div`
    img{
        padding-top: 4rem;
    }
`;

export const CardBody = styled.div`
    background-color: #f5eeee;
    padding: 1.5rem;
    h5{
        font-family: 'Fredoka One', cursive;
        font-size: 1.2rem;
        padding-bottom: 1rem;
        font-weight: bold;
    }
    p{
    font-family: 'Fredoka One', cursive;
    color: #414141;
    font-size: 17px;}
`;

export const Card = styled.div`
    margin: 1rem;
    background-color: #ffe;
    box-shadow: 2px 2px 6px ${colors.pink};
    
    &:hover{
        transition: ease-in 0.2s;
        transform: scale(1.05);
        box-shadow: 15px 15px 30px ${colors.pink};
        cursor: pointer;
    }
    &:not(:hover){
    transition: ease-in 0.1s;
    transform: scale(1.0);
}
`;
