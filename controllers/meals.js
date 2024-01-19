import { Meal } from "../models/meal.js"


function newMeal(req, res){
  Meal.find({})
  .then(meals => {
    res.render("meals/new", {
      meals: meals,
      title: "Add Meal"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/meals')
  })
}

function create(req,res){
  Meal.create(req.body)
  .then(meal =>{
    res.redirect('meals/new')
  })
  .catch(error => {
    console.log(error)
    res.redirect('meals/new')
  })
}



export{
  newMeal as new,
  create,
}