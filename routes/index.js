const express = require('express');
const router = express.Router();

// adding new routes
// we can enter path extensions and what to respond with when those paths are accessed
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/calculate', (req, res) => {
    const requestData = req.query;
    const height = requestData.height;
    const weight = requestData.weight;
    console.log(height, weight);
    // todo: do math to calculate the bmi and pass it to the options argument in the render method
    const bmi = (weight / (height * height)).toFixed(2);
    res.render('calculate', {calculatedBmi: bmi});
})

module.exports = router;