import logo from './logo.svg';
import './App.css';
import WorldHexagonMap from './components/WorldHexagonMap/WorldHexagonMap';
import { BubbleChart } from './components/BubbleChart';
import { WORLDHEXAGONMAP } from './components/WORLDHEXAGONMAP';
import Overlay from './components/overlay/Overlay';

function App() {
  return (
    <div className="App">
    <WorldHexagonMap/>
    <Overlay><WorldHexagonMap/></Overlay>
    <BubbleChart/>
      
    </div>
  );
}

export default App;
