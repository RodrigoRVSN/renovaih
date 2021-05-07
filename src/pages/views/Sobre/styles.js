import styled from 'styled-components';
import { colors } from '../../../db.json';

export const Background = styled.div`
    background-image: url(../../img/181.jpg);
`;

export const Title = styled.h1`
    margin-top: 6rem;
    text-align: center;
    color: var(--pink);
    font-weight: 200;
    font-family: 'Modak', cursive; 
`;

export const Profile = styled.img`
    align-items: center;
    height: 9rem;
    width: 9rem;
    border-radius: 50%;
    margin: 1rem 0 2rem 0;
    background-image: linear-gradient(to right,var(--blue),var(--dark-blue));
    padding: 0.2rem;
    `;

export const Card = styled.div`
    height: 60vh;
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
    padding: 1rem;
    border-radius: 20px;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(45px);
    color: ${colors.blue};
    border: 2px solid ${colors.pink};

:hover{
    transition: ease-in 0.2s;
    transform: scale(1.1);
    box-shadow: 15px 15px 30px ${colors.pink};
}

h2{
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    text-shadow: 4px 2px 2px #bdbdbd;
    color: ${colors['dark-blue']};
}

h3{
    font-family: 'Fredoka One', cursive;
    font-size: 1.25rem;
    color: rgb(68, 68, 68);
}

`;

export const Proposal = styled.div`
text-align: center;
    width: 95%;
    background: linear-gradient(to right,${colors.purple},${colors.blue});
    border-top: 3px solid ${colors.blue};
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    padding-bottom: 4rem;
    border-radius: 150px 150px 0 0;
    
p{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    text-align: center;
    color: ${colors.cyan};
    font-size: 1.5rem;
    font-family: 'Fredoka One', sans-serif;
}
`;
