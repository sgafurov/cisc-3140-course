const express = require('express')
const app = express()
const db = require("./database.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('welcome to the backend')
    ejs.r
})

// Display results of select all - I.e., all cars present in the CSV file, all the car owners contact information, showing results per class')
app.get("/api/cars/all", (req, res, next) => {
    var sql = "select * from records"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Display one specific record
app.get("/api/cars/id/:car_id", (req, res, next) => {
    var sql = "select * from records where car_id = ?"
    var params = [req.params.car_id]
    db.all(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

// Display a list of records
app.get("/api/cars/make/:make", (req, res, next) => {
    var sql = "select * from records where make = ?"
    var params = [req.params.make]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});


//////////////////////////////////////////////////////////////////////////////////////////

//http://localhost:3000/owners?name=hector
app.get('/owners', (req, res) => {
    const name = req.query.name
    res.send(`Display a single record. ownerName = ${name}`)
})
// //http://localhost:3000/owners/:name/:year
// app.get('/owners/:name/:year', (req, res) => {
//     const name = req.params.name
//     const year = req.params.year
//     res.send(`Display a single record. ownerName = ${name}. carYear = ${year}`)
// })


app.post('/input-form', (req, res) => {
    res.send('Insert new record')
})

//POST : insert one record, multiple records at same time, and PUT : updating current one

app.post('/api/cars', (req, res) => {
    const email = req.query.email
    const owner_name = req.query.owner_name
    const year = req.query.year
    const make = req.query.make
    const model = req.query.model
    const car_id = req.query.car_id
    const judge_id = req.query.judge_id
    const judge_name = req.query.judge_name
    const racer_turbo = req.query.racer_turbo
    const racer_supercharged = req.query.racer_supercharged
    const racer_performance = req - query.racer_performance
    const racer_horsepower = req.query.racer_horsepower
    const car_overall = req.query.car_overall
    const engine_modifications = req.query.engine_modifications
    const engine_performance = req.query.engine_performance
    const engine_chrome = req.query.engine_chrome
    const engine_detailing = req.query.engine_detailing
    const engine_cleanliness = req.query.engine_cleanliness
    const body_frame_undercarriage = req.query.body_frame_undercarriage
    const body_frame_suspension = req.query.body_frame_suspension
    const body_frame_chrome = req.query.body_frame_chrome
    const body_frame_detailing = req.query.body_frame_detailing
    const body_frame_cleanliness = req.query.body_frame_cleanliness
    const mods_paint = req.query.mods_paint
    const mods_body = req.query.mods_body
    const mods_wrap = req.query.mods_wrap
    const mods_rims = req.query.mods_rims
    const mods_interior = req.query.mods_interior
    const mods_other = req.query.mods_other
    const mods_ice = req.query.mods_ice
    const mods_aftermarket = req.query.mods_aftermarket
    const mods_wip = req.query.mods_wip
    const mods_overall = req.query.mods_overall

    res.send({
        'email': email,
        'owner_name': owner_name,
        'year': year,
        'make': make,
        'model': model,
        'car_id': car_id,
        'judge_id': judge_id,
        'judge_name': judge_name,
        'racer turbo': racer_turbo,
        'racer_supercharged': racer_supercharged,
        'racer_performance': racer_performance,
        'racer_horsepower': racer_horsepower,
        'car_overall': car_overall,
        'engine_modifications': engine_modifications,
        'engine_performance': engine_performance,
        'engine_chrome': engine_chrome,
        'engine_ detailing': engine_detailing,
        'engine_cleanliness': engine_cleanliness,
        'body_frame_undercarriage': body_frame_undercarriage,
        'body_frame_suspension': body_frame_suspension,
        'body_frame_chrome': body_frame_chrome,
        'body_frame_detailing': body_frame_detailing,
        'body_frame_cleanliness': body_frame_cleanliness,
        'mods_paint': mods_paint,
        'mods_body': mods_body,
        'mods_wrap': mods_wrap,
        'mods_rims': mods_rims,
        'mods_interior': mods_interior,
        'mods_other': mods_other,
        'mods_ice': mods_ice,
        'mods_aftermarket': mods_aftermarket,
        'mods_wip': mods_wip,
        'mods_overall': mods_overall
    })
})

app.listen(3000)