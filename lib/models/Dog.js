import mongoose from "mongoose";

const DogSchema = new mongoose.Schema({
  dog_name: {
    type: String,
    required: true,
  },
  dog_breed: {
    type: String,
    required: true,
  },
});

const Dog = mongoose.models.Dog || mongoose.model("Dog", DogSchema);

export default Dog;
