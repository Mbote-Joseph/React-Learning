
import './App.css';
import Test from  './components/Test'
import Navbar from './components/Navbar'
import Fact from './components/Facts'

function App() {
  const yearCurrent= Date()
  return (
    <div className="App">
    <Navbar name="Mbote Joseph"/>
    <div className="card">
    <Test name="Joseph Mbote" year={yearCurrent}/>
    </div>

    <Fact  />
    </div>

  ); 
}

export default App;
