import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import FormComponent from './components/FormComponent';
import LoginForm2 from './components/LoginForm2';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchItem from './components/SearchItem';


function App() {
  return (
    <div>
    <CounterComponent />
    <LightSwitch />
    <FormComponent />
    <LoginForm2 />
    <SearchItem />
    </div>
   
  );
}

export default App;
