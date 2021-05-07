import React from "react";
import '../../../components/responsividade/styles.css';
import { Title, Profile, Card, Proposal, Background } from "./styles";

export default function Sobre() {
  return (
    <>
      <Background>
        <Title>A equipe</Title>
        <div className="container-sm mt-5 first1">
          <div className="row row-cols-1 row-cols-md-3 g-1 ">
            <div className="col ">
              <Card className="h-40 ">
                <Profile src="img/fotos/rodrigo.PNG" className="card-img-top" alt="..." />
                <h2>Rodrigo Victor</h2>
                <h3>Engenharia de computação</h3>
              </Card>
            </div>
            <div className="col">
              <Card className="h-40">
                <Profile src="img/fotos/natanael.PNG" className="card-img-top" alt="..." />
                <h2>Natanael Vitorino</h2>
                <h3>Engenharia de computação </h3>
              </Card>
            </div>
            <div className="col">
              <Card className="h-40">
                <Profile src="img/fotos/tarcisio.PNG" className="card-img-top" alt="..." />
                <h2>Tarcisio Filho</h2>
                <h3>Engenharia de produção </h3>
              </Card>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <Card className="h-40">
                <Profile src="img/fotos/mateus.PNG" className="card-img-top" alt="..." />
                <h2>Mateus Rolim</h2>
                <h3>Engenharia química</h3>
              </Card>
            </div>
            <div className="col">
              <Card className="h-40">
                <Profile src="img/fotos/gabriel.PNG" className="card-img-top" alt="..." />
                <h2>Gabriel Moreira</h2>
                <h3>Engenharia de computação</h3>
              </Card>
            </div>

          </div>
        </div>
        <Proposal>
          <Title>Proposta do projeto</Title>
          <p>Este projeto foi realizado com o objetivo de educar as pessoas com o uso de energias renováveis com
        a execução de projetos e artigos que possam coloborar com a motivação e entusiasmo. </p>
        </Proposal>
      </Background>
    </>
  );
}