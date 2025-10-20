import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import QuestionBank from './components/QuestionBank'; 
import LoginFormReducer from './components/LoginForm';
import SignUpForm from './components/SignUp';
function App() {
  return (
    <div>
      <CounterComponent />
      <LightSwitch />
      <QuestionBank />
      <LoginFormReducer />
      <SignUpForm />
    </div>
  );
}

export default App;
