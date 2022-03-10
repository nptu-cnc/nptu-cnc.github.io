import { Bar, Footer } from './Components'
import './App.css';
const Navbar = () => {
  return <div>
    <Bar />
    <div className='container'></div>
    <Footer />
  </div>
}

function App() {
  return (
    <Navbar/>
  );
}


export default App;
