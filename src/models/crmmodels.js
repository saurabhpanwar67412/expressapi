import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SignalSchema = new Schema({
    Price : {
        type : Number,
        required : "Sell order"
    },
    Quantity: {
        type : Number,
        required : "Quantity"
    },
    OrderTag : {
        type : String,
        required : "orderTag"
    },
    Transtype : { 
        type : String,
        required : "Buy"
    },
    exch : {
        type : String,
        required : "NSE"
    }
})
