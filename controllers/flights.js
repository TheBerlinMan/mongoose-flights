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
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function show(req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Detail',
      flight: flight,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}



export {
  index,
  newFlight as new,
  create,
  show,
}