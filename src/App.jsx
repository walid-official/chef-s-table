import './App.css'
import Banner from './components/banner/Banner'
import Cook from './components/cook/Cook'
import Navbar from './components/navbar/Navbar'
import RecipeTitle from './components/recipe/RecipeTitle'
import Table from './components/table/Table'

function App() {
  return (
    <>
    <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <RecipeTitle></RecipeTitle>
        <div className="md:flex justify-between">
          <div className="md:w-[65%] border ">
            <Cook></Cook>
          </div>
          <div className="md:w-[35%] border">
            <Table></Table>
          </div>
          
          
        </div>
    </div>
    </>
  )
}

export default App
