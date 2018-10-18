import mongoose, { Schema } from "mongoose"


const CountriesSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regionId: {
        type: String,
        required: true
    }
})

export default mongoose.model('Countries', CountriesSchema);