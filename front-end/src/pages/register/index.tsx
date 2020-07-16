import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container, Input, Title, Button, Content,
} from './styles';

import api from '../../services/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handleCreateUser() {
    const data = {
      name,
      email,
    };
    try {
      const response = await api.post('/user', data);
      history.push('/cadastroSucesso');
    } catch (err) {
      alert('Erro ao adicionar usuário, tente novamente!');
    }
  }

  return (
    <Container>
      <Title>AMIGO SECRETO LOOPIS</Title>
      <form>
        <p>Nome</p>
        <Input type="text" onChange={(e) => setName(e.target.value)} />
        <p>Email</p>
        <Input type="text" onChange={(e) => setEmail(e.target.value)} />

        <Content>
          <Button>
            <Link onClick={handleCreateUser} to="/home">CADASTRAR</Link>
          </Button>
          <Button>
            <Link onClick={handleCreateUser} to="/register">CADASTRAR E ADICIONAR OUTRO</Link>
          </Button>
        </Content>

      </form>

    </Container>
  );
};

export default Register;
