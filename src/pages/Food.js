import React from 'react'
import { useHistory } from 'react-router-dom';
import { fetchfoodcCategories } from '../functions/fetchfoodcCategories'
import { useEffect } from 'react';
import Card from '../Components/Card';
import YellowHeader from '../Components/Utils/YellowHeader';
import SearchBar from '../Components/SearchBar';

const Food = () => {

  const categories = fetchfoodcCategories();
  const history = useHistory();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const compressUrl = (url) => {
    return url.toLowerCase().split(' ').join('%20');
  }

  const fetchSearchedfood = (text) => {
    history.push(`/food/${compressUrl(text)}`)
  }

  return (
    <>
      <YellowHeader heading="Explore Food" className="my-14" />
      <SearchBar fetchSearch={fetchSearchedfood} message="Explore Foods" modalMessage="We provide details of various types of food. Search by food name, cuisine type, meal type and select food that is best for you " />
      <div className="container mx-auto flex flex-wrap  justify-around py-8">

        {categories
          .map((food, ind) => <Card key={ind} content={food.name} img={food.img} link={`/food/${food.name}`} />)}
      </div>
    </>

  )
}

export default Food