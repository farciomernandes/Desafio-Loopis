import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home1 from './pages/home/index';
import Home2 from './pages/home2/index';
import Register from './pages/register/index';
import Update from './pages/update/index';

// Modals
import Delete from './modal/delete/index';
import DeleteSucesso from './modal/delete/sucesso';
import CadastroSucesso from './modal/register/sucesso';
import SalvoSucesso from './modal/update/sucesso';
import Sorteio from './modal/sorteio/sucesso';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home1} />
      <Route path="/home" component={Home2} />
      <Route path="/register" component={Register} />
      <Route path="/update/:id" component={Update} />
      <Route path="/delete/:id" component={Delete} />
      <Route path="/deleteSucesso" component={DeleteSucesso} />
      <Route path="/cadastroSucesso" component={CadastroSucesso} />
      <Route path="/updateSucesso" component={SalvoSucesso} />
      <Route path="/sorteio" component={Sorteio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
