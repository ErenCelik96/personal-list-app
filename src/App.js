import './style/sass/App.scss';
import 'antd/dist/antd.less';
import React from 'react';
import { useDispatch } from 'react-redux'
import { getEmployees } from './shared/Reducers';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import { EmployeesServiceInstance } from './shared/services/EmployeesService';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getEmployees())
    // EmployeesServiceInstance.getEmployeeDetail('ODU3NjEwNDc0MQ==').then(res=>console.log(res))
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
