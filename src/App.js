import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LeftPane from './Components/LeftPane';
import RightPane from './Components/RightPane';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LeftPane></LeftPane>
      <RightPane></RightPane>
      <Content></Content>
      {/* <Footer></Footer> */}
      </div>
  );
}

export default App;
