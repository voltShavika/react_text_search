const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const connectDB = require("./config");
const dummyData = require("./dummy_data");

const {CompanyModel, AdModel} = require("./model")

connectDB()

const app = express();
app.use(cors())

const jsonparser = bodyParser.json();
app.use(jsonparser);

app.get("/load_test", async (req, res) => {
    for(let i=0;i<dummyData.length;i++){
        let data = dummyData[i];
        let company = new CompanyModel({
            name: data.company,
            url: data.url
        })
        await company.save();
        for(let j=0;j<data.ads.length;j++){
            let ad = new AdModel({
                companyId: company._id,
                primaryText: data.ads[j].primaryText,
                headline: data.ads[j].headline,
                description: data.ads[j].description,
                CTA: data.ads[j].CTA,
                imageUrl: data.ads[j].imageUrl,
            })
            await ad.save();
        }
    }
})

app.get("/ads", async (req, res) => {
    setTimeout(async ()=> {
        const query = req.query.search
        const exp = new RegExp('.*' + query + '.*', 'i');

        const ads = AdModel.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "companyId",
                    foreignField: "_id",
                    as: "companyDetails"
                }
            },
            {
                $unwind: "$companyDetails"
            },
            {
                $match: {
                    $or: [
                        {
                            "companyDetails.name": {
                                $regex: exp
                            }
                        },
                        {
                            "primaryText": {
                                $regex: exp
                            }
                        },
                        {
                            "headline": {
                                $regex: exp
                            }
                        },
                        {
                            "description": {
                                $regex: exp
                            }
                        }
                    ]
                }
            }
        ]).exec((err, ads)=>{
            res.json(ads);
        })
        
    }, 0)

})

const port = process.env.PORT || 8000;
app.listen(port,()=>{
  console.log("i am listening");
});
