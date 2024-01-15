import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema

let currentYear = function(){
  return new Date().getFullYear()
}


const flightSchema = new Schema({
  airline: {
    type: String,
    default: 'n/a',
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']    
  }, 
  flightNo: {
    type: Number,
    default: 'n/a',
    min: 10,
    max: 9999,
  }, 
  departs: {
    type: Date,
  },
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}