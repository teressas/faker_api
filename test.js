const express = require("express")
// console.log(express);
const app = express();
const port = 8000;

// MIDDELWARE   
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// Routing
// req = requestObj ; res = responseObj
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/meow", (req, res) => {
    // res.send("hello from server.js! ")
    // res.json({status:200})
    const myResp = {
        status: "cool",
        number: [1,2,3]
    }
    res.json(myResp)
})

const myCallBackFunc = (req, res) => {
    res.json({message: "hello from callback!"})
}

app.get("/api/hello", myCallBackFunc)

// Basic Routing Syntax
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    // returns an array of user from above
    // res.json( users );
    // returns an object key "users" that has array of all users
    res.json( {users : users} );
});

// --- access URL variables
app.get("/api/users/:id", (req, res) => {
    // look at what's in req
    // console.log(req);
    // look at what's in req.params
    // console.log(req.params);
    // look at what's passed in from request parameters
    // console.log(req.params.id);
    
    // variable in {} has to be same as path variable
    const {id} = req.params
    res.json({
        your_id: req.params.id,
        status: 200,
        // user: users[id].firstName 
        // add if check if the id doesn't exist
        user: users[id]
    })
})

// --------- POST
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or React
    console.log(req.body);
    users.push(req.body);
    res.json({status: "ok"})
    console.log(users)
})


// will always be at the bottom
app.listen(port, () => console.log(`>>>Server started on port ${port} and is listening for REQuests to RESpond to <<<`));