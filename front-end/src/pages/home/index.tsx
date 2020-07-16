import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Title, Button } from './styles';
import rocketImg from '../../assets/rocket.png';
import api from '../../services/api';

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    api.get('/user').then((response) => {
      if (response.data.length > 0) {
        history.push('/home');
      }
    });
  }, []);

  return (
    <Container>
      <Title>AMIGO SECRETO LOOPIS</Title>
      <section>
        <img src={rocketImg} height="300px" alt="Rocket" />
        <p>Nenhum participante adicionado</p>
      </section>

      <Button><Link to="/register">ADICIONAR</Link></Button>
    </Container>
  );
};

export default Home;
