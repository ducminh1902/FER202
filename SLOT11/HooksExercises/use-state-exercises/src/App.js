import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import FormComponent from './components/FormComponent';
import LoginForm2 from './components/LoginForm2';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchItem from './components/SearchItem';
import AccountSearch from './components/AccountSearch';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div>
    <CounterComponent />
    <LightSwitch />
    <FormComponent />
    <LoginForm2 />
    <SearchItem />
    <AccountSearch />
    <RegisterForm />
    </div>
   
  );
}

export default App;
