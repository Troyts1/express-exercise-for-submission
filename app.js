const express = require("express");
const errors = require("./expressErrors"); 
const app = express();
const { findMean, findMedian, findMode, validateNums } = require('./functions');
const ExpressError = require("./expressErrors");

app.get("/mean", function(req, res, next) {
    if (!req.query.nums) {
        throw ExpressError.missingNumsError(); 
    }
    let numsAsStrings = req.query.nums.split(",");
    let nums = validateNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message); 
    }
    let result = {
        operation: "mean",
        result: findMean(nums)
    };
    return res.send(result);
});

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw ExpressError.missingNumsError(); 
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = validateNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message); 
    }
    let result = {
        operation: "median",
        result: findMedian(nums)
    };
    return res.send(result);
});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw ExpressError.missingNumsError(); 
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = validateNums(numsAsStrings); 
    if (nums instanceof Error) {
        throw new ExpressError(nums.message); 
    }
    let result = {
        operation: "mode",
        result: findMode(nums)
    };
    return res.send(result);
});

app.use(function(req, res, next) {
    const err = ExpressError.notFoundError(); 
    return next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
});
