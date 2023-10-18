import './App.css';
import Axios from './components/Axios';
import Navbar from './components/Navbar';
import SubMenu from './components/SubMenu';


function App() {
   
  return (

    <div>
      <Navbar></Navbar>
      <SubMenu/>
      <Axios location = "bhavnagar"/>
    </div>
  );
}

export default App;
