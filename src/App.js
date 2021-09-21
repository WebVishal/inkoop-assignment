import { Cards_UI } from './Componets/CardsUI/Cards_UI';
import Header from './Componets/Header/Header';
import MenuBar from './Componets/MenuBar/MenuBar';
import './App.css';
import Mobile_Icons from './Componets/Icons/Mobile_Icons';

function App() {
  return (
    <>
     
      <div className="mobile_icons">
          <Mobile_Icons />
        </div>
      <div className="App">
      <div className="Menubar">
          <MenuBar />
          <button className="btn" type="button">Card</button>
        </div>

        <div className="Header_card">

          <div className="Header">
            <Header />
          </div>

          <div className="cards">
            <Cards_UI Title="Mexican Taco" img="./1.jpg" />
            <Cards_UI Title="Farmhouse Pizza" img="./2.jpg" />
            <Cards_UI Title="Chicken Burger" img="./3.jpg" />
            <Cards_UI Title="Loaded Nachos" img="./4.jpg" />
            <div className="card_hide">
              <Cards_UI Title="Hakka Noodles" img="./5.jpg" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App;
