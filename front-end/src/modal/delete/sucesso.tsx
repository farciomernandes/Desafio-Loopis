import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMinimize2 } from 'react-icons/fi';
import { Container, Mid, Button } from './styles';
import api from '../../services/api';

interface User {
  id: string;
  name: string;
  email:string;
}

const Sucesso: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Mid>
        <section>
          <Link to="/home"><FiMinimize2 size={25} color="black" /></Link>
          <h2>AMIGO SECRETO DA LOOPIS</h2>
        </section>
        <section>
          <strong>
            Excluído com sucesso!
          </strong>
        </section>
        <section>
          <Button onClick={() => history.push('/home')}>OK</Button>
        </section>
      </Mid>
    </Container>
  );
};

export default Sucesso;
