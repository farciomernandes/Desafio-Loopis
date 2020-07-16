/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-script-url */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FiTrash2, FiPenTool } from 'react-icons/fi';
import api from '../../services/api';

import {
  Container, Title, Content, Lista, Card, Buttons, Button,
} from './styles';

interface User {
  id: string;
  name: string;
  email:string;
}
const Home2: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const history = useHistory();

  useEffect(() => {
    api.get('/user').then((response) => {
      setUsers(response.data);
      if (response.data.length < 1) {
        history.push('/');
      }
    });
  }, []);

  async function sortFriends() {
    if (users.length % 2 !== 0) {
      alert('O sorteio só pode acontecer com um número par de participantes!');
    } else {
      try {
        history.push('/sorteio');
      } catch (err) {
        alert('Erro ao sortear, reinicie a página e tente novamente.');
      }
    }
  }

  return (
    <Container>
      <Title>AMIGO SECRETO LOOPIS</Title>
      <p>OBS: o amigo secreto só pode ocorrer com no mínimo 3 pessoas.</p>
      <Content>
        <Lista>

          {users.map((user) => (
            <Card key={user.id}>
              <section>
                <h2>{user.name}</h2>
                <section>
                  <Link to={`/update/${user.id}`}>
                    <FiPenTool size={30} />
                  </Link>
                  <Link to="/home">
                    <Link to={`/delete/${user.id}`}>
                      <FiTrash2 size={30} />
                    </Link>
                  </Link>
                </section>
              </section>
              <p>{user.email}</p>
            </Card>
          ))}
        </Lista>
      </Content>
      <Buttons>
        <Button><Link to="/register">ADICIONAR</Link></Button>
        <Button onClick={sortFriends}>
          <Link to="/home">SORTEAR</Link>
        </Button>

      </Buttons>
    </Container>
  );
};

export default Home2;
