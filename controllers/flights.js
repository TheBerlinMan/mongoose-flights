import { Flight } from "../models/flight.js"


function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: "All Flights"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
    })
}

function newFlight(req, res){
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req,res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights/new')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights/new')
  })
}



export {
  index,
  newFlight as new,
  create,
}