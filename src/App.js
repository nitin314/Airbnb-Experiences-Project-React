
import './App.css';
import NavBar from './UIComponents/NavBar/NavBar.jsx';
import Hero from './UIComponents/Hero/Hero.jsx'
import MainSection from './UIComponents/MainSection/MainSection.jsx';
import Item from './UIComponents/MainSection/Items/Item.jsx';
import img1 from './Airbnb_Experiences_Project_Images/itemImage1.png'
import img2 from './Airbnb_Experiences_Project_Images/itemImage2.png'

let itemData = [
  {
    imageUrl : img1,
    itemRating : 5,
    itemTotalVotes : 50,
    itemCountry : 'USA',
    itemTitle : 'We will Teach you the best',
    itemPrice : 126
  },
  {
    imageUrl : img2,
    itemRating : 4.3,
    itemTotalVotes : 120,
    itemCountry : 'India',
    itemTitle : 'The best in the world',
    itemPrice : 220
  },
  {
    imageUrl : img1,
    itemRating : 3.9,
    itemTotalVotes : 44,
    itemCountry : 'Japan',
    itemTitle : 'Best dish at your service',
    itemPrice : 450
  }
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MainSection>
        <Item data ={itemData[0]}/>
        <Item data ={itemData[1]}/>
        <Item data ={itemData[2]}/>
        <Item data ={itemData[0]}/>
        <Item data ={itemData[1]}/>
        <Item data ={itemData[2]}/>
      </MainSection>
    </div>
  );
}

export default App;
