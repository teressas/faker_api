// INSTALLING EXPRESS
const express = require("express")
// console.log(express);
const app = express();
const port = 8000;

// INSTALLING FAKER
const faker = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(faker);
// console.log(randomName);
// console.log(randomEmail);
// console.log(randomCard);

// CREATE USER CLASS
class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
// console.log(new User());

console.log(faker.name.firstName);

// CREATE COMPANY CLASS
class Company {
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
// console.log(new Company());


// MIDDELWARE   
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// Routing
// req = requestObj ; res = responseObj
// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/users/company", (req, res) => {
    res.json({ user: new User() , company: new Company()});
});


// will always be at the bottom
app.listen(port, () => console.log(`>>>Server started on port ${port} and is listening for REQuests to RESpond to <<<`));
