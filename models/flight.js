import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema

let currentYear = function(){
  return new Date().getFullYear()
}


const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number, 
    min: 0,
  },
}, {
  timestamps: true
})


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
    // default: 'n/a',
    min: 10,
    max: 9999,
  }, 
  departs: {
    type: Date,
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: "Meal"}]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}