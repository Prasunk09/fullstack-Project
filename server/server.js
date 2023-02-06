const express = require('express');
const app = express();

const movies =[
    {
        id:1,
        name:" RRR",
        Rating: 9.3,
        release_date: "30-08-2021"
    },
    {
        id:2,
        name:" Avathar",
        Rating: 9.5,
        release_date: "30-08-2002"
    },
    {
        id:3,
        name:" Avathar-2",
        Rating: 9.1,
        release_date: "30-08-2022"
    },
    {
        id:4,
        name:" Chatrapati",
        Rating: 9.9,
        release_date:" 30-08-2005"
    },
    {
        id:5,
        name:" Mirchi",
        Rating: 9.0,
        release_date: "30-08-2015"
    },
    {
        id:6,
        name:" Adhi",
        Rating: 9.3,
        release_date: "30-08-2001"
    },
    {
        id:7,
        name:" Andravala",
        Rating: 5.3,
        release_date: "30-08-2004"
    },
    {
        id:8,
        name:" Kashmir Files",
        Rating: 9.3,
        release_date: "30-08-2021"
    },
    {
        id:9,
        name:" RRR-3",
        Rating: 9.3,
        release_date: "30-08-2026"
    },
    {
        id:10,
        name:" Yamudu",
        Rating: 9.3,
        release_date: "30-08-20212"
    },
    {
        id:11,
        name:" Athadu",
        Rating: 9.3,
        release_date:" 30-08-2008"
    },
    {
        id:12,
        name:" Pokiri",
        Rating: 10,
        release_date: "20-08-2001"
    },
    {
        id:13,
        name:" Hello",
        Rating: 9.0,
        release_date: "30-08-2019"
    },
    {
        id:14,
        name:"GodFather",
        Rating: 9.3,
        release_date: "30-08-2022"
    },
    {
        id:15,
        name:" Dhoom-3",
        Rating: 9.3,
        release_date: "30-08-2021"
    },
    {
        id:16,
        name:" Dhoom-2",
        Rating: 9.3,
        release_date: "30-08-2017"
    },
    {
        id:17,
        name:" Dhoom",
        Rating: 8.1,
        release_date:" 3-08-2014"
    },
    {
        id:18,
        name:" Bahubali-2",
        Rating: 9.8,
        release_date:" 30-08-2020"
    },
    {
        id:19,
        name:" Bahubali",
        Rating: 9.9,
        release_date: "28-05-2017"
    },
    {
        id:20,
        name:" Kanthar",
        Rating: 9.8,
        release_date: "3-04-2022"
    },
]

app.get('/movies',(req,res)=>{
     res.json(movies)
})

app.listen(8080,()=>console.log("server running......"))