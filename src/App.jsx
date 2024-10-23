import { useState } from 'react'
import Banner from './components/banner/Banner'
import Cook from './components/cook/Cook'
import Navbar from './components/navbar/Navbar'
import RecipeTitle from './components/recipe/RecipeTitle'
import Table from './components/table/Table'
import './App.css'



function App() {
const [cookTables,setCookTables] = useState([]);
const [prepareRecipe, setPrepareRecipe] = useState([]);
const [times,setTimes] = useState(0);
const [calorie,setCalories] = useState(0);

const handleCookPreparing = (cooking,id) => {
  const newFindItem = cookTables.find(cookClicked => cookClicked.recipe_id === id);
  if(!newFindItem){
    const newCookTable = [...cookTables, cooking];
    setCookTables(newCookTable);
  }else{
      alert('This Item Is Added In Table')
  }
}


const handleRemoveItem = (id,prepareTime,calories) => {
  const deleteRecipe = cookTables.find(recipe => recipe.recipe_id === id);
  const updatedItem = cookTables.filter(recipe => recipe.recipe_id !== id)
  setCookTables(updatedItem);
  setPrepareRecipe([...prepareRecipe, deleteRecipe]);
  setTimes(prepareTime + times);
  setCalories(calories + calorie);
}


  return (
    <>
      <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
          <Banner></Banner>
          <RecipeTitle></RecipeTitle>
          <div className="md:flex justify-between">
            <div className="md:w-[65%]">
              <Cook handleCookPreparing={handleCookPreparing}></Cook>
            </div>
            <div className="md:w-[35%] border rounded-2xl">
              <Table totalTime={times} totalCalory={calorie} handleRemoveItem={handleRemoveItem} cookTable={cookTables} prepareRecipe={prepareRecipe}></Table>
            </div>
          </div>
      </div>
    </>
  )
}


export default App
