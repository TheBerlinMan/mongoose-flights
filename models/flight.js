import mongoose from "mongoose"

const Schema = mongoose.Schema

let currentYear = function(){
  return new Date().getFullYear()
}


const flightSchema = new Schema({
  airline: {
    type: String,
    default: 'n/a'
  },
  airport: {
    type: String,
    default: 'DEN'    
  }, 
  flightNo: {
    type: Number,
    default: 'n/a'
  }, 
  departs: {
    type: Date,
  },
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}