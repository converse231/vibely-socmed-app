import Dog from "@lib/models/Dog";
import { connectToDB } from "@lib/mongodb/mongoose";

export async function addDog({ name, breed }) {
  try {
    await connectToDB();
    const dog = await Dog.create({ dog_name: name, dog_breed: breed });

    await dog.save();
    return dog;
  } catch (error) {
    console.log(error);
  }
}
