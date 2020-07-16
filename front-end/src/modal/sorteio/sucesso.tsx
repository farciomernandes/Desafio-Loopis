import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMinimize2 } from 'react-icons/fi';
import {
  Container, Mid, Button, Sorteados,
} from './styles.modal';

import api from '../../services/api';

interface UserData{
  name: string;
  id: string;
  email:string;
}

const Sucesso: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const emails: string[] = [];

  const history = useHistory();

  useEffect(() => {
    async function Search() {
      const { data } = await api.get('/user/sort');
      setUsers(data);
      console.log(users);
    }

    Search();
  }, []);

  return (
    <Container>
      <Mid>
        <section>
          <Link to="/home"><span><FiMinimize2 size={25} color="black" /></span></Link>
          <h2>AMIGO SECRETO DA LOOPIS</h2>
        </section>
        <section>
          <h4>Sorteio realizado com sucesso!</h4>
          {users.map((user) => {
            let position: number;
            let existe;
            do {
              position = Math.floor(Math.random() * users.length);
              existe = emails.indexOf(users[position].email);
              if (user.name === users[position].name) {
                existe = 0;
              }
            } while (existe !== -1);
            emails.push(users[position].email);
            return (
              <Sorteados>
                {`${user.name}  -   ${users[position].name}`}
              </Sorteados>
            );
          })}
        </section>
        <section>
          <Button onClick={() => history.goBack()}>OK</Button>
        </section>
      </Mid>
    </Container>
  );
};

export default Sucesso;
