import '../../../components/responsividade/styles.css';
import BackToHome from '../../../components/BackToHome';
import { Parent, SidebarPos, Sidebar, Content, Descricao, NextIcon } from './styles';
import { GifCard } from '../../../components/Gif';

export default function MiniGeradorEolico() {
    return (
        <>
            <Parent>
                <SidebarPos>
                    <Sidebar>

                        <BackToHome />
                        <GifCard gifSrc = '../../../img/giphy.gif'/>

                    </Sidebar>
                </SidebarPos>

                <Content>

                    <Descricao>

                        <div className="container">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h2>Mini <span>Gerador Eólico</span></h2>
                                        <h3>Como aproveitar o vento <span>de uma forma diferente</span> </h3>
                                        <p>Nível de Dificuldade: Baixo </p>
                                        <p>Para iniciar a sua missão, assista o video abaixo e clique na seta azul para a direita</p>
                                        <div className="container text-center">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L0A6svnxNyI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                        </div>

                                    </div>
                                    <div className="carousel-item">
                                        <h2>Materiais <span>Utilizados</span></h2>
                                        <h3>Lista de materiais a serem utilizados <span>para o desenvolvimento do projeto</span> </h3>
                                        <p>
                                            <ul>
                                                <li>Uma caixa de papelão (50 x 50 x 50 cm)</li>
                                                <li>Cola comum</li>
                                                <li>Cola quente</li>
                                                <li>Caneta</li>
                                                <li>DC Motor 12v 6w 4400 rpm</li>
                                                <li>Fios de Cobre</li>
                                                <li>Led ou Bateria</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Passo <span>1</span></h2>
                                        <h3>Vamos começar a <span>aventura</span> </h3>
                                        <p>Corte o papelão em 6 círculos de 1cm de diâmetro e corte o papelão em 3 trapézios de 1 e 2 cm de base e 7 de altura</p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>2</span></h2>
                                        <h3>Vamos começar a <span>aventura</span> </h3>
                                        <p>Cole os círculos um em cima do outro e marque no Círculo 3 linhas de 120° </p>
                                        <p>Após isso curve os trapézios e cole os trapézios na lateral do Círculo com distância de 120° cada. Passe cola nos trapézios.</p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>3</span></h2>
                                        <p>Corte uma das laterais do quadrado e faça a marcação de 3 linhas ligando as marcações anteriores a quina do quadrado</p>
                                    </div>

                                    <div className="carousel-item ">
                                        <h2>Passo <span>4</span></h2>
                                        <p>Encaixar o motor no centro do círculo</p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>5</span></h2>
                                        <p>Enrole um pedaço de papelão para que fique cilíndrico e sirva de base.</p>
                                        <p>Passe os fios de cobre do motor pelo centro do cilindro e cole o motor na base com cola quente <span>(Auxílio de um Adulto)</span></p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>6</span></h2>
                                        <h3>Ultimos <span>passos</span> </h3>
                                        <p>Corte um pedaço de papelão em 2 “rosquinhas” (O cilindro deve encaixar no centro das rosquinhas)</p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>7</span></h2>
                                        <h3>Partiu montar <span>o gerador</span> </h3>
                                        <p>Cole uma rosquinha na outra</p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>8</span></h2>
                                        <h3>Partiu montar <span>o fogão</span> </h3>
                                        <p>Encaixe o cilindro nas rosquinhas e fixe tudo com cola quente (Auxílio de um Adulto)</p>
                                    </div>

                                    <div className="carousel-item">
                                        <h2>Passo <span>10</span></h2>
                                        <p>Agora é só ligar os fios a uma led ou bateria </p>
                                        <h3>Prontinho, <span>feito!</span> </h3>
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

