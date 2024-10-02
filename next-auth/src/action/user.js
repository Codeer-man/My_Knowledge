"use server"

const register = async (formData) =>{

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    
    if(!firstname || !lastname || !email || !password){
        throw new Error("Please fill all the fields")
    }

    await connectDB();

    const existinguser = await User.findOne({email});
    if(existinguser){
        throw new Error("Email already exists")
    }
}
export {register};