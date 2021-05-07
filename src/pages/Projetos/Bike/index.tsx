import '../../../components/responsividade/styles.css';
import { Parent, SidebarPos, Sidebar, Content, Descricao, NextIcon, ImgP1 } from './styles';
import BackToHome from '../../../components/BackToHome';
import { GifCard } from '../../../components/Gif';


export default function GeradorBike() {
    return (
        <>
            <Parent>
                <SidebarPos>
                    <Sidebar>
                
                        <BackToHome />
                        <GifCard gifSrc = '../../../img/Bike.gif'/>

                    </Sidebar>
                </SidebarPos>

                <Content>
                    <Descricao>

                        <section className="descricao">


                            <div className="container">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-bs-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <h2>Gerador <span>na bicicleta</span></h2>
                                            <h3>Gere energia e <span>se exercite</span> ao mesmo tempo</h3>
                                            <p>Nível de Dificuldade: Alto</p>
                                            <p>Para iniciar a sua missão, assista o video abaixoe e clique na seta azul para a direita
                            </p>
                                            <div className="container text-center">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/bhxokrQ_CAg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                            </div>

                                        </div>
                                        <div className="carousel-item">
                                            <h2>Materiais <span>Utilizados</span></h2>
                                            <h3>Lista de materiais a serem utilizados <span>para o desenvolvimento do projeto</span> </h3>
                                            <p>
                                                <ul>
                                                    <li>Dínamo </li>
                                                    <li>Bicicleta</li>
                                                    <li>Estilete</li>
                                                    <li>Fixadores (abraçadeiras, porcas e parafusos)</li>
                                                    <li>Adaptador USB (carregador de carro)</li>
                                                    <li>Fita isolante</li>
                                                    <li>Fios de Cobre</li>
                                                    <li>Capacitor (Opcional)</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="carousel-item">
                                            <h2>Passo <span>1</span></h2>
                                            <h3>Vamos começar a <span>aventura</span> </h3>
                                            <p>
                                                Fixar o Dínamo na estrutura da bicicleta próxima a roda traseira
                            </p>
                                            <ImgP1 className="img-fluid" src="../../../img/GBp1.png" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <h2>Passo <span>2</span></h2>
                                            <h3>Vamos começar a <span>aventura</span> </h3>
                                            <p>
                                                Fixar, usando a fita isolante, os fios do dínamo aos polos positivos e negativos do adaptador
                                <div className="img-p-1">
                                                    <ImgP1 className="img-fluid" src="../../../img/GBp2.png" alt="" />
                                                </div>
                                            </p>
                                        </div>
                                        <div className="carousel-item">
                                            <h2>Passo <span>3</span></h2>
                                            <h3><span>Opcional</span></h3>
                                            <p>
                                                Ligar o capacitor entre o dínamo e o adaptador
                                <div className="img-p-1">
                                                    <ImgP1 className="img-fluid" src="../../../img/GBp3.png" alt="" />
                                                </div>
                                            </p>
                                        </div>
                                        <div className="carousel-item ">
                                            <h2>Passo <span>4</span></h2>
                                            <h3>Hora de fixar <span>tudo</span> na bike</h3>
                                            <p>
                                                Fixar, usando a fita isolante, o adaptador à bicicleta
                            </p>
                                        </div>

                                        <div className="carousel-item">
                                            <h2>Passo <span>5</span></h2>
                                            <h3>Prontinho, <span>feito!</span> </h3>
                                            <p>
                                                Agora que está tudo pronto, é hora de dar aquela pedalada. </p>
                                            <p>Espero que você tenha conseguido! </p>
                                            <h3>Temos muitos outros projetos esperando por você, <span>nos vemos em breve!</span> </h3>

                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                        <NextIcon>
                                            <i className="fas fa-arrow-circle-left fa-5x"></i>
                                        </NextIcon>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                        <NextIcon>
                                            <i className="fas fa-arrow-circle-right fa-5x "></i>
                                        </NextIcon>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </Descricao>
                </Content>
            </Parent>
        </>
    );
}

