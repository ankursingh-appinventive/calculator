const express = require('express');

const {plus,minus,mul,div,mod,sqr} = require("./calc");

const home=(req,res)=>{
    res.send("home page");
}

const getSum = (req,res)=>{
    let result = plus(req.body.x,req.body.y);
    res.send(`${req.body.x} + ${req.body.y} = ${result}`)
    
};

const getSub = (req,res)=>{
    let result = minus(req.body.x,req.body.y);
    res.send(`${req.body.x} - ${req.body.y} = ${result}`)
    
};

const getMul = (req,res)=>{
    let result = mul(req.body.x,req.body.y);
    res.send(`${req.body.x} * ${req.body.y} = ${result}`)
    
};

const getDiv = (req,res)=>{
    let result = div(req.body.x,req.body.y);
    res.send(`${req.body.x} / ${req.body.y} = ${result}`)
    
};

const getMod = (req,res)=>{
    let result = mod(req.body.x,req.body.y);
    res.send(`${req.body.x} % ${req.body.y} = ${result}`)
    
};

const getSqr = (req,res)=>{
    let result = sqr(req.body.x);
    res.send(`Square of ${req.body.x} = ${result}`)
    
};

module.exports = {
    home,
    getSum,
    getSub,
    getMul,
    getDiv,
    getMod,
    getSqr,
}
