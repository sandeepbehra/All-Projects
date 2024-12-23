
import './App.css'
import styled from 'styled-components'
import { Header } from './Header'
import { useEffect } from 'react';
import { useState } from 'react';
import { Mainsection } from './Mainsection';
export const BASE_URL = 'http://localhost:9000';

function App() {


  const [data, setData] = useState(null)
  const [filterData, setfilterData] = useState(null)
  const [filterbtn, setfilterbtn] = useState("all")
  useEffect(() => {
    const FoodList = async () => {
      const response = await fetch(BASE_URL)
      const list = await response.json();
      setData(list);
      setfilterData(list)
    }

    FoodList();
  }, [])

  const Searchfiltering = (e) => {
    const name = e.target.value.toLowerCase();
    const flt = data?.filter((item) => item.name.toLowerCase().includes(name))
    setfilterData(flt);

  }

  const BtnClickfiltering = (type) => {

    if (type === "all") {
      setfilterData(data)
      setfilterbtn(type)
      return;
    }


    const flt = data?.filter((item) => item.type.toLowerCase().includes(type))
    setfilterbtn(type)
    setfilterData(flt);

  }

  return (
    <>
      <Header Searchfiltering={Searchfiltering} BtnClickfiltering={BtnClickfiltering} filterbtn={filterbtn} ></Header>
      <Mainsection data={filterData}></Mainsection>
    </>
  )
}

export default App
