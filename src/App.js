// 應用的根組件
import React from 'react';
import 'antd/dist/antd.less';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </>
  );
}

export default App;
