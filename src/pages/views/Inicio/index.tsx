/* import video from '../../../img/video/education.mp4'; */
import '../../../components/responsividade/styles.css';
import { Button } from '../../../components/Button/index';
import { CardBody, Cardes, Video, Background, Card } from './styles';

export default function Inicio() {
    return (
        <>

            <Background>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <Video autoPlay loop muted>
                                <source src='../../../img/video/education.mp4' type='video/mp4' />
                            </Video>
                            <div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-font">Renovaíh</h5>
                                    <p className="text-font-p">- Por um mundo sustentável -</p>
                                    <a href="/projetos"><Button>Brinque com nossos projetos! Clique aqui.</Button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Cardes className="container-lg mt-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <a className="link" href="/projetos">
                                    <Card className="border h-100">
                                        <img width="40%" height="40%" src="img/handson.jpg" className="card-img-top" alt="..." />
                                        <CardBody>
                                            <h2>Mão na massa</h2>
                                            <h3>Vamos realizar projetos que envolvam a sustentabilidade!</h3>
                                            <Button>Bora trabalhar!</Button>
                                        </CardBody>
                                        <div className="card-footer">
                                        </div>
                                    </Card>
                                </a>
                            </div>
                            <div className="col">
                                <a className="link" href="/sustentabilidade">
                                    <Card className="card h-100">
                                        <img width="40%" height="40%" src="img/sustentabilidade.jpg" className="card-img-top" alt="..." />
                                        <CardBody>
                                            <h2>Sustentabilidade</h2>
                                            <h3>Você sabe o que sustentabilidade? Embarque nessa viagem com a gente e aprenda brincando!</h3>
                                            <Button>Bora começar!</Button>
                                        </CardBody>
                                        <div className="card-footer">
                                        </div>
                                    </Card>
                                </a>
                            </div>

                            <div className="col">
                                <a className="link" href="/energias">
                                    <Card className="card border h-100">
                                        <img width="40%" height="40%" src="img/energia.jpg" className="card-img-top" alt="..." />
                                        <CardBody>
                                            <h2>Energias renováveis</h2>
                                            <h3>Se eu perguntar se você sabe o nome de 3 energias renováveis você conhece? Entre aqui para conhecer os tipos!</h3>
                                            <Button>Bora começar!</Button>
                                        </CardBody>
                                        <div className="card-footer">
                                        </div>
                                    </Card>
                                </a>
                            </div>
                        </div>
                    </Cardes>
                </div>
            </Background>
        </>
    );
}