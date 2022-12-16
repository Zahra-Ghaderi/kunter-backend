var config = require('./DBConfig');
const sql = require('mssql') ;


async function getServices(){
    console.log('getServices()');
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .query('SELECT * FROM T_KService');
        return ServisList.recordsets;
    }catch(error){
        console.log(error);
    }
}


async function AddService(KServicesID, KServicesName, KServicesSession, KServicesPrice){
    console.log("AddService(KServicesID, KServicesName, KServicesSession, KServicesPrice)");
    console.log("skhdgfjsfk");
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('KServicesID', sql.Int, KServicesID)
        .input('KServicesName', sql.VarChar, KServicesName)
        .input('KServicesSession', sql.Int, KServicesSession)
        .input('KServicesPrice', sql.Int, KServicesPrice)
        .query('INSERT INTO T_KService(C_KService, N_KService, Required_Session, Price) values(@KServicesID,@KServicesName,@KServicesSession,@KServicesPrice)');
        return 1;
    }catch(error){
        console.log(error);
    }
}

async function DelService(KServicesID){
    console.log("DelService(KServicesID)");
    console.log(KServicesID);
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('KServicesID', sql.Int, KServicesID)
        .query('DELETE FROM T_KService where Srl_KService = @KServicesID');
        return ServisList.recordsets;
    }catch(error){
        console.log(error);
    }
}
 
async function getService(SrvID){
    try{
        console.log('ZZZZZZZZgetServiceZZZZZZZZZ');
        let pool = await sql.connect(config);
        let Pationt = await pool.request()
        .input('SrvID', sql.Int, SrvID)
        .query('select  * from T_KService where Servis_Id = @SrvID');
        console.log(3);
        return Pationt.recordsets; 
    }catch(error){
        console.log(error);
    }}

async function getPationts(){
    try{
        console.log(1);
        let pool = await sql.connect(config);
        console.log(2);
        let PationtsList = await pool.request().query('select * from T_Person_List');
        console.log(PationtsList.recordsets);
        return PationtsList.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function DelPationts(PationtsID){
    console.log('bbbbbbbbbbbbbbbbbb');
    console.log(PationtsID);
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('PationtsID', sql.Int, PationtsID)
        .query('DELETE FROM T_Person_List where  id = @PationtsID; Select * From T_Person_List');
        return ServisList.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function AddPationts(PationtsID){
    console.log('bbbbbbbbbbbbbbbbbb');
    console.log(PationtsID);
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('PationtsID', sql.Int, PationtsID)
        .query('INSERT INTO T_KService(Servis_Id) values(@PationtsID); Select * From T_KService');
        return ServisList.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getDocs(){
    try{
        console.log(1);
        let pool = await sql.connect(config);
        console.log(2);
        let DocsList = await pool.request().query('select * from TDocsList');
        console.log(3);
        return DocsList.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function DelDocs(DocsID){
    console.log('bbbbbbbbbbbbbbbbbb');
    console.log(DocsID);
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('DocsID', sql.Int, DocsID)
        .query('DELETE FROM TDocsList where  id = @DocsID; Select * From TDocsList');
        return ServisList.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function AddDocs(DocsID){
    console.log('bbbbbbbbbbbbbbbbbb');
    console.log(DocsID);
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('DocsID', sql.Int, DocsID)
        .query('INSERT INTO TDocsList(Servis_Id) values(@DocsID); Select * From TDocsList');
        return ServisList.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getDocPayments(){
    try{
        console.log(1);
        let pool = await sql.connect(config);
        console.log(2);
        let DocPaymentsList = await pool.request().query('select * from T_KService');
        console.log(3);
        return DocPaymentsList.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getDocVisits(){
    try{
        console.log(1);
        let pool = await sql.connect(config);
        console.log(2);
        let DocVisitsList = await pool.request().query('select * from T_KService');
        console.log(3);
        return DocVisitsList.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getCities(){
try{
    console.log(1);
    let pool = await sql.connect(config);
    console.log(2);
    let cities = await pool.request().query('select TOP 4 FCODE, fname from T_City');
    console.log(3);
    return cities.recordsets;
}catch(error){
    console.log(error);
}}

async function getPationt(PationtID){
    try{
        let pool = await sql.connect(config);
        let Pationt = await pool.request()
        .input('PationtID', sql.Int, PationtID)
        .query('select Srl_Person, N_Person from T_Person_List where Srl_Person = 2179');
        console.log(3);
        return Pationt.recordsets;
    }catch(error){
        console.log(error);
    }}

async function getPationt(PationtID){
    try{
        let pool = await sql.connect(config);
        let Pationt = await pool.request()
        .input('PationtID', sql.Int, PationtID)
        .query('select Srl_Person, N_Person from T_Person_List where Srl_Person = 2179');
        console.log(3);
        return Pationt.recordsets;
    }catch(error){
        console.log(error);
    }}
    
async function getPationt(PationtID){
    try{
        let pool = await sql.connect(config);
        let Pationt = await pool.request()
        .input('PationtID', sql.Int, PationtID)
        .query('select Srl_Person, N_Person from T_Person_List where Srl_Person = 2179');
        console.log(3);
        return Pationt.recordsets;
    }catch(error){
        console.log(error);
    }}
        
                        
        
module.exports= {
    getCities : getCities,

    getPationt : getPationt,
    getPationts : getPationts,
    DelPationts : DelPationts,
    AddPationts : AddPationts,

    getService : getService,
    getServices : getServices,
    DelService : DelService,
    AddService : AddService,

    getDocs : getDocs,
    DelDocs : DelDocs,
    AddDocs : AddDocs,
    getDocPayments : getDocPayments,
    getDocVisits : getDocVisits,
    
}