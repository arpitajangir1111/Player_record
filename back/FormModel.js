import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    Serial: String,
    Player: String,
    Aadhar: Number,
    Game: String,
    Position: String,
    State: String,
    Tournament: String,
    Organised: String,
    Venue: String

});
const FormModel = mongoose.model("form",FormSchema);
export default FormModel