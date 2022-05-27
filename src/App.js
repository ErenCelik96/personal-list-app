import './style/sass/App.scss';
import 'antd/dist/antd.less';
import React from 'react';
import { useDispatch } from 'react-redux'
import { getEmployees } from './shared/Reducers';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="App">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
