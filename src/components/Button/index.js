import styled from 'styled-components';
import { colors } from '../../db.json';

export const Button = styled.button`
  margin-top: 1rem;
    background-color: ${colors.cyan};
    color: blue;
    border: 2px solid ${colors.purple};
    height: 45px;
    width: 100%;
    border-radius: 15px;
    font-family: 'Fredoka One', cursive;
&:hover{
    opacity: 0.9;
    background-color: ${colors['dark-blue']};
    border: 3px solid ${colors.pink};
    color: ${colors.cyan};
  }
`;