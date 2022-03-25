const mongoose = require('mongoose');
const Service = require("./Models/Service");
mongoose.connect("mongodb+srv://zain_db_user:zaindb123@cluster0.kgeal.mongodb.net/jobSearching?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {

}).catch((err) => {

});

const data = [
    {
        // _id: "623de587ffbfb12834d86819",
        serviceName: "Resume Writing",
        serviceDescription: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
        slug: "/services/resume-writing",
        tierData: [
            {
                tierName: "Basic",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$5"
            },
            {
                tierName: "Professional ",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                "price": "$15"
            },
            {
                tierName: "Executive",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$29"
            }
        ]
    },
    {
        // _id: "623de599ffbfb12834d8681e",
        serviceName: "Career Coaching",
        serviceDescription: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
        slug: "/services/career-coaching",
        tierData: [
            {
                tierName: "Basic",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$5"
            },
            {
                tierName: "Professional ",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$15"
            },
            {
                tierName: "Executive",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$29"
            }
        ]
    },
    {
        // _id: "623de5bcffbfb12834d86823",
        serviceName: "Linkedin Profile Update",
        serviceDescription: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
        slug: "/services/linkedin-profile-update",
        tierData: [
            {
                tierName: "Basic",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$5"
            },
            {
                tierName: "Professional ",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$15"
            },
            {
                tierName: "Executive",
                tierDescription: "30 users included \n 15 GB of storage \n Phone and email support \n Help center access",
                price: "$29"
            }
        ]
    }
]

const seedDb = async () => {
    await Service.deleteMany({});
    await Service.insertMany(data);
};

seedDb().then(() => {
    mongoose.connection.close()
})