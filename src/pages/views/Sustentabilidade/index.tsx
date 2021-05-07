import React from "react";
import '../../../components/responsividade/styles.css';

import styled from 'styled-components';

export const Background = styled.div`
    background-image: url(../../img/181.jpg);
`;

export const Planeta = styled.img`
    margin-top: 8rem;
`;

export default function Energias() {
  return (
    <>
      <Background>
        <div className="container mt-2">

          <div className="cardSust mb-3 text-center">
            <div className="row g-0">
              <div className="col-md-4">
                <Planeta id="planeta" src="http://galldigital.com/digital/institucional/institucional/sustentabilidade/planeta_sustentavel.gif" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">O que é sustentabilidade?</h5>
                  <p className="card-text">Sustentabilidade é o conjunto de ações e práticas que visam promover o uso de recursos do planeta de modo que não ocasione um desequilíbrio entre o meio ambiente, sociedade e que ao mesmo tempo não interfira no desenvolvimento econômico.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cardSust mb-3">
            <div className="col-md-16">
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento sustentável</h5>
                <p className="card-text">A definição de desenvolvimento sustentável foi disseminada principalmente pelo relatório Brundtland –
                documento intitulado “Nosso futuro comum” – desenvolvido em 1987, definia que a ideia por traz do termo era: “Responder
                às necessidades do presente sem comprometer o desenvolvimento das gerações futuras”. O relatório propunha uma série de
                medidas para promover o desenvolvimento sustentável. O tema já era discutido nas décadas anteriores, principalmente diante
                das diversas crises sociais vividas no século XX e a preocupação com problemas como: mudanças climáticas, falta de recursos
              e poluição causada por fontes de energia não renováveis.</p>
                <div className="text-center">
                  <img id="desenvol" src="https://static.wixstatic.com/media/e3c335_8cb375f0f58f436c9d9a1fc8707a8bcc~mv2.gif" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="cardSust mb-3">
            <div className="col-md-16">
              <div className="card-body">
                <h5 className="card-title">Os 5 R’s da sustentabilidade</h5>
                <p className="card-text">Os 5 R’s são uma política que visa reduzir a geração de resíduos no nosso planeta.
            Consistem em cinco palavras:</p>

                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">1. Repensar</h4>
                  <p>Repensar cada um de nossos hábitos, analisando o que consumimos e como descartamos.</p>

                </div>

                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">2. Recusar</h4>
                  <p>Recusar a adquirir produtos que podem agredir ao meio ambiente.</p>

                </div>

                <div className="alert alert-info" role="alert">
                  <h4 className="alert-heading">3. Reciclar</h4>
                  <p>Dar novos propósitos a produtos descartados.</p>

                </div>

                <div className="alert alert-warning" role="alert">
                  <h4 className="alert-heading">4. Reduzir</h4>
                  <p>Diminuir a utilização de certos produtos.</p>

                </div>

                <div className="alert alert-primary" role="alert">
                  <h4 className="alert-heading">5. Reutilizar</h4>
                  <p>Algumas coisas podem ser consertadas ao invés de descartadas.</p>

                </div>
              </div>
            </div>
          </div>

          <div className="cardSust mb-3">
            <div className="col-md-16">
              <div className="card-body">
                <h5 className="card-title text-center">A agenda 2030 para o desenvolvimento sustentável</h5>
                <p className="card-text">“A agenda 2030 um plano de ação para as pessoas, o planeta e a prosperidade, que busca fortalecer a paz universal”.
                Desenvolvido em 2015, contou com a participação de representantes de 193 estados-membros da ONU (inclusive o Brasil), que, ao adotarem
                o documento “Transformando o Nosso Mundo: A Agenda 2030 para o Desenvolvimento Sustentável”, se comprometeram em atingir os objetivos
        da agenda.</p>
                <p className="card-text">
                  O plano indica 17 objetivos de desenvolvimento sustentável (ODS) e 169 metas com o principal objetivo de erradicar a pobreza e promover
        vida digna a todos.</p>
                <div className="text-center">
                  <div className="linha1">
                    <div className="container-fluid">
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=1" className="ods" target="blank"><img className="imglin" src="/img/ods.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=2" className="ods" target="blank"><img className="imglin" src="/img/2.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=3" className="ods" target="blank"><img className="imglin" src="/img/3.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=4" className="ods" target="blank"><img className="imglin" src="/img/4.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=5" className="ods" target="blank"><img className="imglin" src="/img/5.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=6" className="ods" target="blank"><img className="imglin" src="/img/4.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=7" className="ods" target="blank"><img className="imglin" src="/img/7.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=8" className="ods" target="blank"><img className="imglin" src="/img/8.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=9" className="ods" target="blank"><img className="imglin" src="/img/9.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=10" className="ods" target="blank"><img className="imglin" src="/img/10.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=11" className="ods" target="blank"><img className="imglin" src="/img/11.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=12" className="ods" target="blank"><img className="imglin" src="/img/12.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=13" className="ods" target="blank"><img className="imglin" src="/img/13.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=14" className="ods" target="blank"><img className="imglin" src="/img/14.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=15" className="ods" target="blank"><img className="imglin" src="/img/15.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=16" className="ods" target="blank"><img className="imglin" src="/img/16.png" alt="" /></a>
                      <a href="https://odsbrasil.gov.br/objetivo/objetivo?n=17" className="ods" target="blank"><img className="imglin" src="/img/17.png" alt="" /></a>
                    </div>
                  </div>
                </div>
                <p className="card-text mt-4">Pode-se dizer que a ideia de desenvolvimento sustentável e energias renováveis andam lado a lado. Uma vez que o desenvolvimento sustentável visa
                não comprometer as gerações futuras, é muito importante focar em um ponto que pode muito bem fazer o contrário e acarretar diversos outros problemas para a geração
        futura, já que o uso e exploração de certos recursos pode causar vários danos ao meio ambiente.</p>

                <p className="card-text">A educação é outra questão que é importante ser lembrada, já que é a maior responsável para a definição social de gerações futuras. Por isso a importância
                do site é enfatizada, ainda mais quando o enfoque é em crianças. Segundo Sue Elliot (Professora da Universidade da Nova Inglaterra): “A educação infantil para a sustentabilidade
                é um processo transformador e empoderador, engajado ativamente por crianças, famílias e educadores que compartilham uma visão de mundo ecocêntrica”. Ou seja, o ensino infantil
        da sustentabilidade contribui para transformar a sociedade a fim de que se haja uma maior preocupação com as questões ambientais.</p>

                <p className="card-text"><i><sup>1</sup>Ecocêntrico: Ter preocupação com questões ambientais.</i></p>
              </div>
            </div>
          </div>

        </div>
      </Background>
    </>
  );
}