import Header from './Header';
// import Card from './card';
import Footer from './Footer';
// import pic from './assets/react.svg';
// import Test from './test';
import Meme from './meme';
import './App.css'

function App() {
  return(
    <>
      <Header img="meme.jpeg" address="meme generator" />
      <div className='container'>
        <Meme />
        <Footer></Footer>
      </div>
      
      

    </>
  );
}

export default App
