import '../../../components/responsividade/styles.css';
import BackToHome from '../../../components/BackToHome';
import { Parent, SidebarPos, Sidebar, Content, Descricao, NextIcon, ImgP1 } from './styles';
import p1 from '../../../img/passo1.png';
import p2 from '../../../img/p2.jpg';
import p3 from '../../../img/p3.jpg';
import p4 from '../../../img/p4.jpg';
import p5 from '../../../img/p5.jpg';
import { GifCard } from '../../../components/Gif';

export default function FogaoSolar() {
    return (
        <>
            <Parent>
                <SidebarPos>
                    <Sidebar>

                        <BackToHome />
                        <GifCard gifSrc = '../../../img/sun.gif'/>

                    </Sidebar>
                </SidebarPos>

                <Content>

                    <Descricao>

                        <div className="container">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h2>Fogão <span>Solar</span></h2>
                                        <h3>Como aproveitar a energia solar <span>de uma forma diferente</span> </h3>
                                        <p>Nível de Dificuldade: Baixo </p>
                                        <p>Para iniciar a sua missão, assista o video abaixoe e clique na seta azul para a direita</p>
                                        <div className="container text-center">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/F4EsMsCc0ic" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                        </div>

                                    </div>
                                    <div className="carousel-item">
                                        <h2>Materiais <span>Utilizados</span></h2>
                                        <h3>Lista de materiais a serem utilizados <span>para o desenvolvimento do projeto</span> </h3>
                                        <p>
                                            <ul>
                                                <li>Duas chapas de papelão (65 x 90 cm)</li>
                                                <li>Papel Alumínio</li>
                                                <li>Estilete</li>
                                                <li>Fita dupla face</li>
                                                <li>Barbante</li>
                                                <li>Lápis</li>
                                                <li>Barbante</li>
                                                <li>Chave de fenda (ou outro instrumento perfurante)</li>
                                                <li>Régua</li>
                                                <li>Panela preta (20 litros)</li>
                                                <li>Cola</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>1</span></h2>
                                        <h3>Vamos começar a <span>aventura</span> </h3>
                                        <p>
                                            Marque um quadrado de 25x25cm na lateral de uma das chapas de papelão
                            </p>
                                        <ImgP1>
                                            <a href="../../img/passo1.png"><img className="img-fluid" src={p1} alt="" /></a>
                                        </ImgP1>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>2</span></h2>
                                        <h3>Vamos começar a <span>aventura</span> </h3>
                                        <p>Faça um retângulo de 25x65 na lateral da outra chapa (de um canto ao outro) </p>
                                        <p>Após terminar os triângulos, marque 32cm nas 2 laterais opostas da chapa </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>3</span></h2>
                                        <h3>Peça ajuda para um adulto <span>e mão na massa</span> </h3>
                                        <p>
                                            Corte uma das laterais do quadrado e faça a marcação de 3 linhas ligando as marcações anteriores a quina do quadrado
                            </p>
                                    </div>
                                    <div className="carousel-item ">
                                        <h2>Passo <span>4</span></h2>
                                        <h3>Hora de colar <span>tudo</span> </h3>
                                        <p>
                                            Cole a fita dupla face seguindo as 3 linhas anteriores, cole também a fita dupla face nas laterais da chapa (não passe a fita por cima da parte cortada).
                            </p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>5</span></h2>
                                        <h3>Está quase <span>pronto</span> </h3>
                                        <p>
                                            Dobre todas as linhas até formar 90° e remova a cobertura da fita dupla face. Assim que estiver tudo pronto, cole o papel alumínio sobre as chapas de papelão. Faça o mesmo procedimento na outra chapa
                            </p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>6</span></h2>
                                        <h3>Vamos conferir <span>o trabalho</span> </h3>
                                        <p>
                                            Deverá ficar assim:
                                </p>

                                        <div className="img-p-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-5 col-md-6">
                                                        <img className="img-fluid" src={p2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>7</span></h2>
                                        <h3>Partiu montar <span>o fogão</span> </h3>
                                        <p>
                                            Faça 3 furos em ambas as chapas de acordo com a imagem e posicione as chapas dessa maneira:
                                </p>

                                        <div className="img-p-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-5 col-md-6">
                                                        <img className="img-fluid" src={p3} alt="" ></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>8</span></h2>
                                        <h3>Partiu montar <span>o fogão</span> </h3>
                                        <p>
                                            Posicione as chapas dessa maneira agora e faça 3 furos em ambas as chapas como na imagem:
                                </p>

                                        <div className="img-p-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-5 col-md-6">
                                                        <a href="../../img/p4.jpg"><img className="img-fluid" src={p4} alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>9</span></h2>
                                        <h3>Ultimos <span>passos</span> </h3>
                                        <p>
                                            Una as chapas nos furos feitos anteriormente usando barbante, no final deve ficar dessa maneira:
                                </p>

                                        <div className="img-p-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-5 col-md-6">
                                                        <a href="../../img/p5.jpg"><img className="img-fluid" src={p5} alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>10</span></h2>
                                        <h3>Prontinho, <span>feito!</span> </h3>
                                        <p>
                                            Agora é só colocar a panela para esquentar. </p>
                                        <p> Espero que você tenha conseguido, a diversão apenas começou! </p>
                                        <h3>Temos muitos outros projetos esperando por você, <span>nos vemos em breve!</span> </h3>

                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <NextIcon>
                                        <i className="fas fa-arrow-circle-left fa-5x"></i>
                                    </NextIcon>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <NextIcon>
                                        <i className="fas fa-arrow-circle-right fa-5x "></i>
                                    </NextIcon>
                                </button>
                            </div>
                        </div>
                    </Descricao>
                </Content>


            </Parent>
        </>
    );
}

