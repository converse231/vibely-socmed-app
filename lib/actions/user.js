import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export async function createorUpdateUser(
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) {
  try {
    await connectToDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          username: username,
        },
      },
      { upsert: true, new: true } //if user doesnt exist
    );

    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    await connectToDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
}
