import { Meal } from "../models/meal.js"


function newMeal(req, res){
  res.render("meals/new", {
    title: "Add Meal"
  })
}





export{
  newMeal as new,
}