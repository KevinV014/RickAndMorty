import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import background1 from "./assets/backgroundImg1.jpg"
import title from "./assets/title.svg"
import LocationInfo from './components/LocationInfo';
import getRandomNumber from './utils/getRandomNumber';
import Pagination from './components/Pagination';
import ResidentList from './components/ResidentList';


const RESIDENTS_PERPAGE = 12;

function App() {

  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = (e) => {
    e.prevetDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () => {
    if(!location) return [];
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
  }


  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL =`https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
    
  }, [nameLocation])
  

  return (
    <div className="App">
      <div className='header__container'>
        <div className='header__container__img'>
          <img className='title' src={title} alt="" />
          <img className='background' src={background1} alt="img" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='header__container__input'>
            <input className='input' type="text" id='idLocation' placeholder='type a location id'/>
            <button className='btn'>Search</button>
          </div>
        </form>
      </div>
      <LocationInfo location={location} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
    </div>
  )
}


export default App