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

async function getPatients(){
    try{
        //console.log(1);
        let pool = await sql.connect(config);
        //console.log(2);
        let PationtsList = await pool.request().query('select Srl_Person, C_Person, N_Person, F_Person from T_Person_List');
        //console.log(PationtsList.recordsets);
        return PationtsList.recordsets;
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



async function AddPationt(C_Person, N_Person, F_Person){
    console.log("AddPationt(KServicesID, KServicesName, KServicesSession, KServicesPrice)");
    console.log("skhdgfjsfk");
    try{
        let pool = await sql.connect(config);
        let AddToPationt = await pool.request()
        .input('C_Person', sql.Int, C_Person)
        .input('N_Person', sql.VarChar, N_Person)
        .input('F_Person', sql.VarChar, F_Person)      
        .query('INSERT INTO T_Person_List(C_Person, N_Person, F_Person) values(@C_Person, @N_Person, @F_Person)');
        
    }catch(error){
        console.log(error);
    }
}


async function DelPatient(PationtsID){
    console.log('bbbbbbbbbbbbbbbbbb');
    console.log(PationtsID);
    try{
        let pool = await sql.connect(config);
        let PatientList = await pool.request()
        .input('PationtsID', sql.Int, PationtsID)
        .query('DELETE FROM T_Person_List where  Srl_Person = @PationtsID');
        return 1;
    }catch(error){
        console.log(error);
    }
}
async function UpdateService(SrlServices, KServicesID, KServicesName, KServicesSession, KServicesPrice){
    console.log("UpdateService(KServicesID, KServicesName, KServicesSession, KServicesPrice)");
    console.log("skhdgfjsfk");
    try{
        let pool = await sql.connect(config);
        let ServisList = await pool.request()
        .input('SrlServices', sql.Int, SrlServices)
        .input('KServicesID', sql.Int, KServicesID)
        .input('KServicesName', sql.VarChar, KServicesName)
        .input('KServicesSession', sql.Int, KServicesSession)
        .input('KServicesPrice', sql.Int, KServicesPrice)
        .query('UPDATE T_KService SET C_KService=@KServicesID , N_KService = @KServicesName , Required_Session = @KServicesSession, Price = @KServicesPrice WHERE Srl_KService=@SrlServices');
        return 1;
    }catch(error){
        console.log(error);
    }
}



async function UpdatePatient(Srl_Person, C_Person, N_Person, F_Person){
    console.log("UpdatePatient(KServicesID, KServicesName, KServicesSession, KServicesPrice)");
    console.log("skhdgfjsfk");
    try{
        let pool = await sql.connect(config);
        let PatientList = await pool.request()
        .input('Srl_Person', sql.Int, Srl_Person)
        .input('C_Person', sql.Int, C_Person)
        .input('N_Person', sql.VarChar, N_Person)
        .input('F_Person', sql.Int, F_Person)
       .query('UPDATE T_Person_List SET C_Person = @C_Person, N_Person = @N_Person, F_Person = @F_Person,  where  Srl_Person = @PationtsID');
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
 
async function getService(KServicesID){
    try{
        console.log('ZZZZZZZZgetServiceZZZZZZZZZ');
        let pool = await sql.connect(config);
        let Servis = await pool.request()
        .input('KServicesID', sql.Int, KServicesID)
        .query('select  * from T_KService where Srl_KService = @KServicesID');
        //console.log(Servis);
        return Servis.recordsets; 
    }catch(error){
        console.log(Servis);
    }}


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
  
    getPationt : getPationt,
    getPatients : getPatients,
    DelPatient : DelPatient,
    AddPationt : AddPationt,
    UpdatePatient : UpdatePatient,

    getService : getService,
    getServices : getServices,
    DelService : DelService,
    AddService : AddService,
    UpdateService : UpdateService,

    getDocs : getDocs,
    DelDocs : DelDocs,
    AddDocs : AddDocs,
    getDocPayments : getDocPayments,
    getDocVisits : getDocVisits,
    
}