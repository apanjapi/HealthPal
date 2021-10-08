import { useState } from 'react';
import styles from '../styles/Home.module.css'
import CaloriesInput from '../comp/CaloriesInput/input';
import TopBar from '../comp/Topbar/topbar';
import Navbar from '../comp/Navbar/navbar';
import Label from '../comp/Label/label';
import { useState } from 'react';
import Calculate from '../comp/Calculate/calculate';
import Label from '../comp/Label/label';


export default function Home() {

  const [foodsBreakfast, setFoodsBreakfast] = useState([])

  const createFoodBreakfast = () => {
    // make sure the food title is unique
    setFoodsBreakfast(oldFoods => [...oldFoods, {
      title: "Food",
      placeHolder: "enter calories"
    }])
  }

  const [foodsLunch, setFoodsLunch] = useState([])

  const createFoodLunch = () => {
    // make sure the food title is unique
    setFoodsLunch(oldFoods => [...oldFoods, {
      title: "Food",
      placeHolder: "enter calories"
    }])
  }

  const [foodsDinner, setFoodsDinner] = useState([])

  const createFoodDinner = () => {
    // make sure the food title is unique
    setFoodsDinner(oldFoods => [...oldFoods, {
      title: "Food",
      placeHolder: "enter calories"
    }])

  }

  const [waterBreakfast, setwaterBreakfast] = useState([])

  const createwaterBreakfast = () => {
    // make sure the food title is unique
    setwaterBreakfast(oldFoods => [...oldFoods, {
      title: "Liquid",
      placeHolder: "enter calories"
    }])
    
  }

  const [waterLunch, setwaterLunch] = useState([])

  const createwaterLunch = () => {
    // make sure the food title is unique
    setwaterLunch(oldFoods => [...oldFoods, {
      title: "Liquid",
      placeHolder: "enter calories"
    }])
    
  }

  const [waterDinner, setwaterDinner] = useState([])

  const createwaterDinner = () => {
    // make sure the food title is unique
    setwaterDinner(oldFoods => [...oldFoods, {
      title: "Liquid",
      placeHolder: "enter calories"
    }])
  }

  return (
    <div className={styles.container2}>
      <TopBar />
      <h3 className={styles.heading}>Summary</h3>
      <Calculate />
      <h3 className={styles.heading}>Breakfast</h3>
      <div className={styles.container3}>
<<<<<<< HEAD
        <CaloriesInput onClick={()=>{
          setAppendEl(true);
          console.log(appendEl);
        }}></CaloriesInput>
        <CaloriesInput title="Liquid +" onClick={()=>{
          console.log("I'm working");
        }}></CaloriesInput>
=======
        <CaloriesInput clickHandler={createFoodBreakfast}></CaloriesInput>
        <CaloriesInput title="Liquid +" clickHandler={createwaterBreakfast}></CaloriesInput>
      </div>
      <div>
        {foodsBreakfast.map(foodsBreakfast => <Label key={foodsBreakfast.title} value={foodsBreakfast.title} placeholder={foodsBreakfast.placeHolder} />)}
      </div>
      <div>
        {waterBreakfast.map(waterBreakfast => <Label key={waterBreakfast.title} value={waterBreakfast.title} placeholder={waterBreakfast.placeHolder} />)}
>>>>>>> origin/Amelie
      </div>

      <h3 className={styles.heading}>Lunch</h3>
      <div className={styles.container3}>
        <CaloriesInput clickHandler={createFoodLunch}></CaloriesInput>
        <CaloriesInput title="Liquid +" clickHandler={createwaterLunch}></CaloriesInput>
      </div>
      <div>
        {foodsLunch.map(foodsLunch => <Label key={foodsLunch.title} value={foodsLunch.title} placeholder={foodsLunch.placeHolder} />)}
      </div>
      <div>
        {waterLunch.map(waterLunch => <Label key={waterLunch.title} value={waterLunch.title} placeholder={waterLunch.placeHolder} />)}
      </div>
      
      <h3 className={styles.heading}>Dinner</h3>
      <div className={styles.container3}>
        <CaloriesInput clickHandler={createFoodDinner}></CaloriesInput>
        <CaloriesInput title="Liquid +" clickHandler={createwaterDinner}></CaloriesInput>
      </div>
      <div>
        {foodsDinner.map(foodsDinner => <Label key={foodsDinner.title} value={foodsDinner.title} placeholder={foodsDinner.placeHolder} />)}
      </div>
      <div>
        {waterDinner.map(waterDinner => <Label key={waterDinner.title} value={waterDinner.title} placeholder={waterDinner.placeHolder} />)}
      </div>
      <Navbar />
    </div >

  )
}