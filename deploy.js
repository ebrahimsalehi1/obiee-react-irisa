
var fs = require('fs');
const { exec } = require("child_process");

const DEPLOY_PATH = "./dist/";
const FILE_TEMP_CONFIG = "config-temp.json";
const FILE_MAIN_CONFIG = "config.json";
const FILE_DEV_OFFICE_CONFIG = "config-dev-office.json"; 
const FILE_DEV_CONFIG = "config-dev.json"; 
const FILE_PROD_CONFIG = "config-prod.json"; 

const urlBIAnalytics = "/analytics/saw.dll?Portal&PortalPath=";
const urlBIPublisher = "/analytics/saw.dll?bipublisherEntry&Action=open&itemType=.xdo&bipPath=";
const urlBIVisualAnalyser = "/va/project.jsp?pageid=visualAnalyzer&reportpath=";
const urlBIVisualAnalyserCreate = "/va/dv/ui/project.jsp?pageid=visualAnalyzer&reportmode=full";

const SERVER_BI_DEV_OFFICE = "http://172.25.40.135:9502";
const SERVER_BI_DEV = "http://bidev.hosco.net";
const SERVER_BI_PROD = "http://bi.hosco.net";

const SERVER_TOMCAT_DEV_OFFICE = "http://172.25.40.135:8080/backforfront";
const SERVER_TOMCAT_DEV = "http://bidev.hosco.net/backforfront";
const SERVER_TOMCAT_PROD = "http://bi.hosco.net/backforfront";

const WAR_OUT = "front.war";

//------------------------------------------------------------------------------

async function readFiles(){
    return await new Promise((resolve,reject)=>{
        fs.readFile(DEPLOY_PATH+FILE_MAIN_CONFIG,'utf8',(err,data)=>{
            if(err)
                reject(err);

            resolve(JSON.parse(data));
        });
    });
}


readFiles()
.then(async data=>{

    //------------------------------------------------------------------------------ DEV-OFFICE

    async function setDevOffice(){
        data.host = SERVER_TOMCAT_DEV_OFFICE;
        data.urlBIAnalytics = SERVER_BI_DEV_OFFICE+urlBIAnalytics;
        data.urlBIPublisher = SERVER_BI_DEV_OFFICE+urlBIPublisher;
        data.urlBIVisualAnalyser = SERVER_BI_DEV_OFFICE+urlBIVisualAnalyser;
        data.urlBIVisualAnalyserCreate = SERVER_BI_DEV_OFFICE+urlBIVisualAnalyserCreate;
    }

    await setDevOffice();

    fs.writeFile(DEPLOY_PATH+FILE_DEV_OFFICE_CONFIG,JSON.stringify(data),'utf8',err=>{
        if(err)
            console.log(err);
        
        console.log("write to file",DEPLOY_PATH+FILE_DEV_OFFICE_CONFIG);

        fs.copyFile(DEPLOY_PATH+FILE_DEV_OFFICE_CONFIG,DEPLOY_PATH+FILE_MAIN_CONFIG,err=>{
            if(err)
                throw err;
            console.log('copy file ',DEPLOY_PATH+FILE_DEV_OFFICE_CONFIG);

            exec(`mkdir DEV-OFFICE`)
            exec(`jar cvf ./DEV-OFFICE/${WAR_OUT} ./dist`);
        });


    });


    //------------------------------------------------------------------------------ DEV

    async function setDev(){
        data.host = SERVER_TOMCAT_DEV;
        data.urlBIAnalytics = SERVER_BI_DEV+urlBIAnalytics;
        data.urlBIPublisher = SERVER_BI_DEV+urlBIPublisher;
        data.urlBIVisualAnalyser = SERVER_BI_DEV+urlBIVisualAnalyser;
        data.urlBIVisualAnalyserCreate = SERVER_BI_DEV+urlBIVisualAnalyserCreate;
    }

    await setDev();

    fs.writeFile(DEPLOY_PATH+FILE_DEV_CONFIG,JSON.stringify(data),'utf8',err=>{
        if(err)
            console.log(err);
        
            console.log("write to file",DEPLOY_PATH+FILE_DEV_CONFIG);

            fs.copyFile(DEPLOY_PATH+FILE_DEV_CONFIG,DEPLOY_PATH+FILE_MAIN_CONFIG,err=>{
                if(err)
                    throw err;
                console.log('copy file ',DEPLOY_PATH+FILE_DEV_CONFIG);

                exec(`mkdir DEV`)
                exec(`jar cvf ./DEV/${WAR_OUT} ./dist`);
            });


    });



    //------------------------------------------------------------------------------ PROD

    async function setProd(){
        data.host = SERVER_TOMCAT_PROD;
        data.urlBIAnalytics = SERVER_BI_PROD+urlBIAnalytics;
        data.urlBIPublisher = SERVER_BI_PROD+urlBIPublisher;
        data.urlBIVisualAnalyser = SERVER_BI_PROD+urlBIVisualAnalyser;
        data.urlBIVisualAnalyserCreate = SERVER_BI_PROD+urlBIVisualAnalyserCreate;
    }

    await setProd();

    fs.writeFile(DEPLOY_PATH+FILE_PROD_CONFIG,JSON.stringify(data),'utf8',err=>{
        if(err)
            console.log(err);
        
            console.log("write to file",DEPLOY_PATH+FILE_PROD_CONFIG);

            fs.copyFile(DEPLOY_PATH+FILE_PROD_CONFIG,DEPLOY_PATH+FILE_MAIN_CONFIG,err=>{
                if(err)
                    throw err;
                console.log('copy file ',DEPLOY_PATH+FILE_PROD_CONFIG);

                exec(`mkdir PROD`)
                exec(`jar cvf ./PROD/${WAR_OUT} ./dist`);
            });



    });

    //------------------------------------------------------------------------------ 

})
.catch(err=>{
    console.log(err);
});

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
