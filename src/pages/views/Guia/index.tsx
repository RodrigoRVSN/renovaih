import React, { Component } from "react"
import './styles.js';
import { Post, Img, CardBody, Col, Card } from './styles';
import '../../../components/responsividade/styles.css';

import styled from 'styled-components';

export const Background = styled.div`
    background-image: url(../../../img/181.jpg);
`;

type Project = {
  id: number;
  title: string;
  description: string;
  nivel: number;
  thumbnail: string;
}

type HomeProps = {
  projects: Project[];
}

export default function Projetos({ projects }: HomeProps) {
  return (
    <>
      <Background>
        <Post className="container-fluid">
          <div className="row">
            <div className="col-sm-6">




              <Card className="mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <Img src="../../../img/206.jpg" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <CardBody>
                      {/* {projects.map((project, index) => {
                        return (
                          <li key={project.id}>
                            <Img src={project.thumbnail}/>

                            {/* <div className={styles.episodeDetails}>
                              <Link href={`/episodes/${episode.id}`}>
                                <a>{episode.title}</a>
                              </Link>
                              <p>{episode.members}</p>
                              <span>{episode.publishedAt}</span>
                              <span>{episode.durationAsString}</span>
                            </div}
                          </li>
                        )
                      }
                  )} }

                  
                      {/* {latestEpisodes.map((episode, index) => {
                            return (
                                <li key={episode.id}>
                                    <Image
                                        width={192}
                                        height={192}
                                        src={episode.thumbnail}
                                        alt={episode.title}
                                        objectFit="cover"
                                    />

                                    <div className={styles.episodeDetails}>
                                        <Link href={`/episodes/${episode.id}`}>
                                            <a>{episode.title}</a>
                                        </Link>
                                        <p>{episode.members}</p>
                                        <span>{episode.publishedAt}</span>
                                        <span>{episode.durationAsString}</span>
                                    </div>

                                    <button type="button" onClick={() => playList(episodeList, index)}>
                                        <img src="/play-green.svg" alt="Reproduzir episódio" />
                                    </button>
                                </li>
                            ) }
                        })}*/}
                      <h5>Fogão Solar</h5>
                      <p>Explore a física com este projeto sobre a termodinâmica, que nada mais é do que o estudo da física sobre temperaturas. Venha conosco nessa aventura, é muito fácil e divertido. Vem comigo?</p>
                      <p>
                        <small className="text-muted">Nivel 1</small>
                        <a href="/fogaoSolar"><button type="button" className="btn btn-success textolink mx-3">Vamos nessa!</button></a>
                      </p>
                    </CardBody>
                  </div>
                </div>
              </Card>
            </div>


            <div className="col-sm-6">
              <Card className="mb-3">
                <Col>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <Img src="../../../img/geradorEolico.png" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <CardBody>
                        <h5>Mini Gerador Eólico</h5>
                        <p>Você já viu aqueles cata-ventos gigantes? Sabia que eles geram energia para nossas casas? Vamos entender como eles funcionam e fazer um pequininho. Topa vir comigo nessa aventura?</p>
                        <p><small className="text-muted">Nivel 1</small><a href="/geradorEolico"><button type="button" className="btn btn-success textolink mx-3">Vamos nessa!</button></a></p>
                      </CardBody>
                    </div>
                  </div>
                </Col>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Card className="mb-3">
                <Col>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <Img src="../../../img/solar.png" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <CardBody>
                        <h5>Carregador de Celular Solar</h5>
                        <p>Você sabia que é possível transformar a luz que vem do sol em energia elétrica? Se você ficou curioso em saber como isso acontece venha aprender a desenvolver um projeto muito legal que usa a energia solar para carregar o seu celular!</p>
                        <p><small className="text-muted">Nivel 2</small><a href="/carregadorSolar"><button type="button" className="btn btn-success textolink mx-3">Vamos nessa!</button></a></p>
                      </CardBody>
                    </div>
                  </div>
                </Col>
              </Card>
            </div>

            <div className="col-sm-6">
              <Card className="mb-3">
                <Col>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <Img src="../../../img/bike.png" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <CardBody>
                        <h5>Bicicleta Geradora de Energia</h5>
                        <p>Já pensou como seria legal se você pedalar e gerar energia ao mesmo tempo? Muito massa, né? Venha conosco nessa aventura, é muito fácil e divertido. Vamos aprender sobre a eletrecidade e um pouquinho de eletrônica.</p>
                        <p><small className="text-muted">Nivel 3</small><a href="/geradorBike"><button type="button" className="btn btn-success textolink mx-3">Vamos nessa!</button></a></p>
                      </CardBody>
                    </div>
                  </div>
                </Col>
              </Card>
            </div>
          </div>
        </Post>
      </Background>
    </>
  );
}
/* 
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
      params: {
          _limit: 12,
          _sort: 'published_at',
          _order: 'desc'
      }
  });

  const episodes = data.map(episode => {
      return {
          id: episode.id,
          title: episode.title,
          thumbnail: episode.thumbnail,
          members: episode.members,
          publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
          duration: Number(episode.file.duration),
          durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
          description: episode.description,
          url: episode.file.url,
      };
  }) */