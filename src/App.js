import './App.css';
import CounterComponent from './redux/slices/CounterComponent';
import UserComponent from './redux/slices/UserComponent'

function App() {
  return (
    <div className="App">
      <CounterComponent/>
      <UserComponent/>
    </div>
  );
}

export default App;
