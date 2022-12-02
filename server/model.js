const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: String,
    url: String
}, {timestamps: true})

const CompanyModel = mongoose.model("Company", CompanySchema);

const AdSchema = new mongoose.Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    primaryText: "String",
    headline: "String",
    description: "String",
    CTA: "String",
    imageUrl: "String"
}, {timestamps: true})

const AdModel = mongoose.model("Ad", AdSchema);

module.exports = {
    CompanyModel,
    AdModel
}