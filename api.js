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

router.route('/srv/:SrvID').get((request,response)=>{
    DBOperations.getService(request.params.SrvID).then(result => {
        //response = {a:1};
        response.send(result);
       // console.log((result[0]));        
    } )    
})

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

router.route('/Patient/:PatientID').get((request,response)=>{
    DBOperations.getPatient(request.params.PatientID).then(result => {
        response.send(result);
    })
}) 

router.route('/Patients').get((request,response)=>{
    DBOperations.getPatients().then(result => {
        console.log('getPatients Works!!!!!!!!!!!!!!!!!!!!');          
        response.send(result[0]);
        //console.log((result[0])); 
    } )    
})   

router.route('/Patients/:PatientID').delete((request,response)=>{
    console.log(request.params);
    DBOperations.DelPatient(request.params.PatientID).then(result => {
        //response = {a:1};
        response.send(result[0]);
        //console.log((result[0]));        
    } )    
}) 

router.route('/Patients').post((request,response)=>{
    console.log("requestrequestrequest")
    console.log(request.body)
    DBOperations.AddPatient(
        request.body.C_Person,
        request.body.Mobile,
        request.body.N_Person,
        request.body.F_Person,
        request.body.City,
        request.body.Home_Adress,
        request.body.K_Person
        ).then(result => {
        //response = {a:1};
        response.send({msg : "ok"});
        //console.log((result[0]));        
    } )    
})

router.route('/Patients/:PatientID').put((request,response)=>{
    console.log(request.body)
    DBOperations.UpdatePatient(
        request.body.Srl_Person,
        request.body.C_Person,
        request.body.Mobile,
        request.body.N_Person,
        request.body.F_Person,
        request.body.City,
        request.body.Home_Adress,
        request.body.K_Person
        ).then(result => {
        //response = {a:1};
        response.send({msg : "ok"});
        //console.log((result[0]));        
    } )    
})

router.route('/a').get((request,response)=>{response.send('aaa');}) 

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


 
var port = process.env.PORT || 8090;
app.listen(port);
console.log('API at port : '+ port)
