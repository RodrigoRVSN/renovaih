import React from "react";
import '../responsividade/styles.css';
import styled from "styled-components";
import { colors } from '../../db.json';

const Gif = styled.img`
    margin: 70% 0 0 10%;
    text-align: center;
    width: 80%;
    border: 8px solid #ffffff;
    border-radius: 50%;
    background-color: ${colors.cyan};
    
    @media screen and (max-width:800px){
       display: none;
    }
`;

export const GifCard = ({ gifSrc }) => {
    return (
        <>
            <Gif src={gifSrc} alt={gifSrc} />
        </>
    )
}
