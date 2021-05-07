import React from "react";
import './style.css';
import '../../../components/responsividade/styles.css';

import styled from 'styled-components';

export const Background = styled.div`
    background-image: url(../../../img/181.jpg);
`;

export default function Energias() {
    return (
        <>
            <Background>
                <div className="container">
                    <div className="teste mb-3" >

                        <div className="teste mb-3" >
                            <div className="col-md-16">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Fontes de energia não renovável</h5>
                                    <p className="card-text">Afinal, o que são as fontes de energia não renováveis?</p>

                                    <p className="card-text">São meios de gerar energia que podem acabar fazendo mal ao meio ambiente. Seja poluindo o ar, as águas,
                  ou até mesmo machucando a nós seres humanos. </p>

                                    <p className="card-text">Temos alguns tipos dessas fontes, sendo a mais conhecida o petróleo. O petróleo foi feito a milhões de
                                    anos com a morte dos dinossauros, quando eles morreram, ao invés de virar cinzas, eles ficaram muito tempo sob condições que
                                    fizeram seus corpos se tornarem esse líquido preto que é usado para fazer um monte de coisas, nessa transformação encontramos
                                    também o gás natural. O problema é que para fazer energia elétrica usando o petróleo, soltamos fumaça na atmosfera da terra,
                essa fumaça contém gases do efeito estufa, principais responsáveis por aquecer nosso planeta.</p>

                                    <p className="card-text">Também temos o carvão mineral, que parecido com o petróleo ele é feito de restos de plantas que tiveram seus restos
                cobertos por terra e em determinadas condições durante milhões de anos se transformou no carvão. </p>

                                    <p className="card-text">Por fim, temos um outro tipo de energia que usa compostos radioativos para gerar energia elétrica, as usinas que são
                                    lugares onde se produzem energia, usam o urânio enriquecido dentro de um reator para liberar muito calor e por fim, esse calor nos ajuda
                  a transformar água em vapor. Esse vapor passa por uma turbina, equipamento utilizado para gerar a nossa energia elétrica. </p>

                                    <p className="card-text">O problema da energia nuclear é que ela infelizmente deixa para trás o urânio que se entrar em contato com o ser humano,
                  pode causar doenças.  </p>

                                    <p className="card-text">Mas então, por quê afinal continuamos a utilizar essas fontes? Simples, pelo motivo que são as fontes de energia que produzem uma maior
                                    quantidade de energia. O problema é que como foi falado, elas fazem mal para nosso planeta e em algum momento elas irão acabar, ou seja, é super
                                    interessante encontrarmos outras maneiras de conseguir produzir energia elétrica sem causar problemas para o nosso planeta e assim conseguir viver
                num mundo menos poluído.</p>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="teste mb-3" >
                        <div className="teste mb-3" >
                            <div className="col-md-16">
                                <div className="card-body">








                                    <h5 className="card-title text-center">Fontes de Energia Renovável</h5>


                                    <div className="alert alert-primary" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg">
                                                    <img src="img/Itaipu_geral.jpg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">Usina hidrelétrica Itaipu</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Energia hidráulica: </h4>

                                                    <p>esse tipo de energia vem a partir do uso de correntezas para girar uma turbina, que gera energia
                                                    elétrica,
                                                    esse processo ocorre nas chamadas usinas hidrelétricas, onde geralmente se têm um reservatório
                                                    para controlar a água que passará pelos canais, ajudando
          assim na geração de energia.</p>
                                                    <p>Serve como exemplo a usina de Itaipu no Brasil, ela é considerada a usina hidrelétrica que mais
          produz energia elétrica do mundo.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="alert alert-warning" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Energia solar: </h4>

                                                    <p>esse tipo de energia vem a partir dos raios do sol, temos painéis solares que conseguem
                                                    transformar o calor absorvido por eles em energia elétrica. Esses
                                                    painéis devem ser colocados em lugares onde há muito sol durante o dia para serem melhor
                                                    aproveitados. Uma outra maneira de aproveitar a energia solar é usando
                                                    o calor diretamente para aquecer água, que é usada para tomar banhos, utilizada em banheiros e
                      outras coisas, <a href="fogao-solar.html">ou até para cozinhar.</a></p>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg">

                                                    <img src="img/photovoltaic-491702.jpg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">Painéis solares</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>






                                    <div className="alert alert-info" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg" >
                                                    <img src="img/windrader-4832684.jpg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">Cataventos que geram energia</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Energia eólica: </h4>

                                                    <p>A energia eólica é a energia elétrica que conseguimos a partir da força dos ventos, com a ajuda
                                                    de aerogeradores, conseguimos fazer com que torres com hélices
                      enormes, em lugares onde há muito vento gerem energia elétrica.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="alert alert-light" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Biomassa: </h4>

                                                    <p>são restos vegetais que sobram quando há a produção de alimentos, como por exemplo, bagaço de
                                                    cana de açúcar, ou cascas de frutas, esses materiais conseguem ser
                                                    transformados em combustíveis para automóveis, como o etanol, óleos vegetais, gorduras. A ideia
                                                    dessa fonte renovável é utilizar tudo o que não é utilizado no
                      momento de produzir as comidas que chegam para nós no supermercado.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg" >

                                                    <img src="img/biomassa.jpg" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">Bagaço de cana</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="alert alert-info" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg" >
                                                    <img src="img/oceano.jpg" className="card-img-top" alt="Praia e ondas" />
                                                    <div className="card-body">
                                                        <p className="card-text">Ondas na prias</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Energia oceânica: </h4>

                                                    <p>essa fonte consegue transformar a energia que vem das ondas e das marés em energia elétrica com a
                                                    ajuda de uma turbina, essa fonte de energia ainda não é tão
                      explorada no mundo.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="alert alert-danger" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Energia geotérmica:</h4>

                                                    <p>é a energia que utiliza calor natural do planeta, essas usinas ficam em lugares próximos a
                                                    vulcões onde há a presença de gêiseres, torres de água quente que saem do chão,
                                                    nós utilizamos essas águas quentes para transformar esse calor em energia elétrica com a ajuda de
                      uma turbina.</p>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg" >

                                                    <img src="img/usina geotermica.jpg" className="card-img-top" alt="usina geotermica" />
                                                    <div className="card-body">
                                                        <p className="card-text">Usina geotermica</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                    <div className="alert alert-success" role="alert">
                                        <div className="row g-0">
                                            <div className="col-md-4 mt-4">
                                                <div className="teste cardimg" >
                                                    <img src="img/turbine-590354_1920.jpg" className="card-img-top" alt="turbina" />
                                                    <div className="card-body">
                                                        <p className="card-text">Turbina</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="alert-heading">Turbinas:</h4>

                                                    <p>parecem um ventilador, a diferença é que suas asas estão em uma posição diferente, na vertical e
                                                    é com esse instrumento que as usinas conseguem transformar a força que a natureza nos
                      dá para gerar energia elétrica</p>
                                                    <h4 className="alert-heading">Geradores:</h4>

                                                    <p>é o equipamento que conseguimos guardar toda a energia produzida pela turbina.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="alert alert-warning mt-3" role="alert">
                                            <h4 className="alert-heading">Transformador: </h4>
                                            <p>é o equipamento que ajuda a mandar a energia elétrica guardada pelo gerador à casa e ao
                                            estabelecimentos para ser utilizada quando você está assistindo aula on-line
                  ou assistindo TV.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    );
}