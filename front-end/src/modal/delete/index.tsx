import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { FiMinimize2 } from 'react-icons/fi';
import { Container, Mid, Button } from './styles';
import api from '../../services/api';

interface User {
  id: string;
  name: string;
  email:string;
}

const ModalDelete: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [usuario, setUsuario] = useState<User>();

  const history = useHistory();

  const { id } = useParams();
  console.log('ID: ', id);

  useEffect(() => {
    async function Search() {
      try {
        const { data } = await api.get<User[]>('/user');
        const encontrado = [...data.filter((user) => user.id === id)];
        setUsuario(encontrado[0]);
      } catch (err) {
        alert('Erro ao buscar usuário. Tente novamente!');
      }
    }
    Search();
  }, [id]);

  async function handleDelete() {
    try {
      const data = { id };
      const response = await api.delete('/user', {
        data,
      });
      history.push('/deleteSucesso');
    } catch (err) {
      alert('Erro ao excluir usuário. Tente novamente!');
    }
  }

  return (
    <Container>
      <Mid>
        <section>
          <Link to="/home"><FiMinimize2 size={25} color="black" /></Link>
          <h2>AMIGO SECRETO DA LOOPIS</h2>
        </section>
        <section>
          <strong>
            Deseja realmente excluir
            {' '}
            <span>
              {usuario?.name || 'Usuário não encontrado'}
              {' '}
            </span>
            ?
          </strong>
        </section>
        <section>
          <Button onClick={handleDelete}>SIM</Button>
          <Button onClick={() => history.push('/home')}>CANCELAR</Button>
        </section>
      </Mid>
    </Container>
  );
};

export default ModalDelete;
