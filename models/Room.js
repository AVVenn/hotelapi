import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
  facilities: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  freePlaces: {
    type: Number,
    required: true,
  },
  booked: {
    type: [Object],
  },
});

export default mongoose.model("Room", RoomSchema);
