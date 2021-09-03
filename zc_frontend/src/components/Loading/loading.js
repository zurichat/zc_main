// import logo from './logo.svg';
import zurilogo from '../images/zurilogo.png';
import chattingguys from '../images/chattingguys.png';
import flowerpot1 from '../images/flowerpot1.png';
import flowerpot2 from '../images/flowerpot2.png';
import Spinner from '../spinner/Spinner';
import './loading.css';

function loading () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={zurilogo} className="App-logo" alt="logo" />
        <Spinner/>
        <p className="zuri-launch">
          <strong>Launching Zuri Chat...</strong>
        </p>
        <img src={flowerpot1} className="flower-pot1" alt="First flower" />
        <img src={flowerpot2} className="flower-pot2" alt="Second flower" />
        <img src={chattingguys} className="chatting-guys" alt="Guys chatting" />
      </header>
    </div>
  );
}

export default loading;
