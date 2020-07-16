import React, { useState, useEffect, MouseEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Container, Input, Title, Button, Content,
} from './styles';

import api from '../../services/api';

interface User{
  id:string;
  email:string;
  name:string;
}

const Register: React.FC = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    async function Search() {
      const response = await api.get('/user');
      const users = response.data;
      const editar = users.filter((user: User) => user.id === id);
      setName(editar[0].name);
      setEmail(editar[0].email);
    }

    Search();
  }, []);

  async function handleEditUser(event: MouseEvent) {
    event.preventDefault();
    const data = {
      name,
      email,
    };
    try {
      await api.put('/user', data);
      history.push('/updateSucesso');
    } catch (err) {
      alert('Erro ao atualizar, tente novamente!');
    }
  }
  return (
    <Container>
      <Title>AMIGO SECRETO LOOPIS</Title>
      <form>
        <p>Nome</p>
        <Input value={name} type="text" onChange={(e) => setName(e.target.value)} />
        <p>Email</p>
        <Input disabled value={email} type="text" onChange={(e) => setEmail(e.target.value)} />

        <Content>
          <Button onClick={handleEditUser}>SALVAR</Button>
        </Content>

      </form>

    </Container>
  );
};

export default Register;
