const express = require('express')
const app = express()
const db = require("./database.js")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('welcome to the backend')
    // ejs.r
});

// DISPLAY RESULTS OF SELECT ALL - I.e., all cars present in the CSV file, all the car owners contact information, showing results per class')
app.get("/api/cars/all", (req, res, next) => {
    var sql = "select * from cars"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

// DISPLAY ONE SPECIFIC RECORD
app.get("/api/cars/id/:car_id", (req, res, next) => {
    var sql = "select * from cars where car_id = ?"
    var params = [req.params.car_id]
    db.all(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
});

// DISPLAY LIST OF cars
app.get("/api/cars/make/:make", (req, res, next) => {
    var sql = "select * from cars where make = ?"
    var params = [req.params.make]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

// INSERT A SINGLE NEW DATA RECORD
app.post("/api/cars", (req, res, next) => {
    var errors = []
    if (!req.body.car_id) {
        errors.push("No car id specified");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }

    var data = {
        timestamp: req.body.timestamp,
        email: req.body.email,
        name: req.body.name,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        car_id: req.body.car_id,
        judge_id: req.body.judge_id,
        judge_name: req.body.judge_name,
        racer_turbo: req.body.racer_turbo,
        racer_supercharged: req.body.racer_supercharged,
        racer_performance: req.body.racer_performance,
        racer_horsepower: req.body.racer_horsepower,
        car_overall: req.body.car_overall,
        engine_modifications: req.body.engine_modifications,
        engine_performance: req.body.engine_performance,
        engine_chrome: req.body.engine_chrome,
        engine_detailing: req.body.engine_detailing,
        engine_cleanliness: req.body.engine_cleanliness,
        body_frame_undercarriage: req.body.body_frame_undercarriage,
        body_frame_suspension: req.body.body_frame_suspension,
        body_frame_chrome: req.body.body_frame_chrome,
        body_frame_detailing: req.body.body_frame_detailing,
        body_frame_cleanliness: req.body.body_frame_cleanliness,
        mods_paint: req.body.mods_paint,
        mods_body: req.body.mods_body,
        mods_wrap: req.body.mods_wrap,
        mods_rims: req.body.mods_rims,
        mods_interior: req.body.mods_interior,
        mods_other: req.body.mods_other,
        mods_ice: req.body.mods_ice,
        mods_aftermarket: req.body.mods_aftermarket,
        mods_wip: req.body.mods_wip,
        mods_overall: req.body.mods_overall
    }

    var sql = 'INSERT INTO cars (Timestamp,Email,Name,Year,Make,Model,Car_ID,Judge_ID,Judge_Name,Racer_Turbo,Racer_Supercharged,Racer_Performance,Racer_Horsepower,Car_Overall,Engine_Modifications,Engine_Performance,Engine_Chrome,Engine_Detailing,Engine_Cleanliness,Body_Frame_Undercarriage,Body_Frame_Suspension,Body_Frame_Chrome,Body_Frame_Detailing,Body_Frame_Cleanliness,Mods_Paint,Mods_Body,Mods_Wrap,Mods_Rims,Mods_Interior,Mods_Other,Mods_ICE,Mods_Aftermarket,Mods_WIP,Mods_Overall) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var params = [data.timestamp, data.email, data.name, data.year, data.make, data.model, data.car_id, data.judge_id, data.judge_name, data.racer_turbo, data.racer_supercharged, data.racer_performance, data.racer_horsepower, data.car_overall, data.engine_modifications, data.engine_performance, data.engine_chrome, data.engine_detailing, data.engine_cleanliness, data.body_frame_undercarriage, data.body_frame_suspension, data.body_frame_chrome, data.body_frame_detailing, data.body_frame_cleanliness, data.mods_paint, data.mods_body, data.mods_wrap, data.mods_rims, data.mods_interior, data.mods_other, data.mods_ice, data.mods_aftermarket, data.mods_wip, data.mods_overall]

    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data,
        })
    })
})

app.listen(3000)