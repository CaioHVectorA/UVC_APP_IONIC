import { IonImg } from '@ionic/react';
import './ExploreContainer.css';
import { ColumnContainer } from './styled/Containers';
import { Division } from './styled/Divisions';
import { Subtitle, Title } from './styled/Titles';
import { Text } from './styled/Texts';
import { Button } from './styled/Button';
import { useEffect, useState } from 'react';
import { Hists } from '../types';
import data from '../data.json'
import Sessions from './Sessions';

interface ContainerProps { }
const Image = () => (<div style={{borderRadius: '25px',margin: '0 auto',height: '200px',width: '80%',backgroundImage: 'url(https://live.staticflickr.com/65535/52739030543_751119292d_n.jpg)',backgroundPosition: 'center',backgroundSize: '80%'}}/>) 
const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
    <ColumnContainer gap={2} backgroundColor='rgba(0,0,0,.5)' full margin='0 auto' padding='25px 10%'>
      <Title bold centered>Bem vindo ao UVC</Title>
      <Division opacity='0.7'/>
      <Subtitle fs={20} centered opacity={'0.65'}>Veja os Contos mais requisitos</Subtitle>
    </ColumnContainer>
    <ColumnContainer gap={6} padding='20px 0px' backgroundColor='rgba(0,0,0,.25)'>
      <Title centered fs={32} opacity='0.7'>Conto do mês</Title>
      <Image />
      <Text centered margin='12px auto 0px'>Conheça a rotina de uma família,que após grandes dificuldades,conseguiram superpoderes incríveis;Apesar disso,eles não perderam seu lado humano,e terão grandiosas dificuldades em seu caminho.</Text>
      <Button>Acesse Agora</Button>
    </ColumnContainer>
    <ColumnContainer>
      <Sessions data={[{title: 'Teste',subtitle: 'Pq tá lendo?', hists: data}]}/>
    </ColumnContainer>
    </>
  );
};

export default ExploreContainer;
