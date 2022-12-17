var DBOperations = require('./DBOperations');
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
const { json } = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next)=> {
    next();
    console.log('AMiddleware');
});

router.route('/Kservices').get((request,response)=>{
    DBOperations.getServices().then(result => {
        console.log('Kservices Works!!!!!!!!!!!!!!!!!!!!');          
        //response = {a:1};
        response.send(result[0]);
        //console.log((result[0])); 
     
    } )    
})   


router.route('/Kservice/:KServicesID').get((request,response)=>{
    DBOperations.getService(request.params.KServicesID).then(result => {
        console.log('Kservice Works!!!!!!!!!!!!!!!!!!!!');          
        //response = {a:1};
        response.send(result[0]);
        //console.log((result[0])); 
     
    } )    
})   

router.route('/Kservices/del/:KServicesID').get((request,response)=>{
    //console.log(request.params.KServicesID);
    DBOperations.DelService(request.params.KServicesID).then(result => {
        //response = {a:1};
        response.send(result[0]);
        //console.log((result[0]));        
    } )    
}) 
 
{/*router.route('/Kservices/add/:KServicesID/:KServicesName/:KServicesSession/:KServicesPrice').get((request,response)=>{//
    console.log("request")
    console.log(request)
    DBOperations.AddService(
        request.params.KServicesID,
        request.params.KServicesName,
        request.params.KServicesSession,
        request.params.KServicesPrice
        ).then(result => {
        //response = {a:1};
        response.send(result[0]);
        //console.log((result[0]));        
    } )    
})*/}

router.route('/Kservices').post((request,response)=>{
    console.log("requestrequestrequest")
    console.log(request.body)
    DBOperations.AddService(
        request.body.C_KService,
        request.body.N_KService,
        request.body.Required_Session,
        request.body.Price
        ).then(result => {
        //response = {a:1};
        response.send({msg : "ok"});
        //console.log((result[0]));        
    } )    
})

router.route('/Kservices/:KServicesID').put((request,response)=>{
    console.log("TTTTTTTTTTTTTTTTTTTTTT")
    console.log(request.body)
    DBOperations.UpdateService(
        request.body.Srl_KService,
        request.body.C_KService,
        request.body.N_KService,
        request.body.Required_Session,
        request.body.Price
        ).then(result => {
        //response = {a:1};
        response.send({msg : "ok"});
        //console.log((result[0]));        
    } )    
})

router.route('/Pationts').get((request,response)=>{
    console.log("Pationts?");
    
    DBOperations.getPationts().then(result => {
        response.send(result[0]);     
    } )    
})
router.route('/Pationts/del/:PationtsID').get((request,response)=>{
    console.log('bbbbbbbbbbbbbbbbbb');
    DBOperations.DelPationts(request.params.PationtsID).then(result => {
        //response = {a:1};
        response.send(result[0]);
        //console.log((result[0]));        
    } )    
})

router.route('/Docs').get((request,response)=>{
    DBOperations.getDocs().then(result => {
        response.send(result[0]);     
    } )    
})
router.route('/DocPayments').get((request,response)=>{
    DBOperations.getDocPayments().then(result => {
        response.send(result[0]);     
    } )    
}) 
router.route('/DocVisits').get((request,response)=>{
    DBOperations.getDocVisits().then(result => {
        response.send(result[0]);     
    } )    
}) 
 


router.route('/srv/:SrvID').get((request,response)=>{
    DBOperations.getService(request.params.SrvID).then(result => {
        //response = {a:1};
        response.send(result);
       // console.log((result[0]));        
    } )    
})


router.route('/Pationts').get((request,response)=>{
    DBOperations.getPationts().then(result => {response.send(result);})}) 

router.route('/Pationt/:PationtID').get((request,response)=>{
    DBOperations.getPationt(request.params.PationtID).then(result => {response.send(result);})}) 
    

router.route('/a').get((request,response)=>{response.send('aaa');}) 
 
var port = process.env.PORT || 8090;
app.listen(port);
console.log('API at port : '+ port)





