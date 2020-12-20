
export function inspectErrors(err){

    console.log("ebrahim-inspectErrors",err);
    let result;
    if(err && err.response && err.response.data){
        result = {
            errorPersian : err.response.data.length>0 && err.response.data[0].persianMessage ? err.response.data[0].persianMessage : " ",
            errorLatin : err.response.data.length>0 && err.response.data[0].latinMessage ? err.response.data[0].latinMessage : "Service has error, Please call administrator",
            errorMessage : err.response.data.length>0 && err.response.data[0].errorMessage ? err.response.data[0].errorMessage : "Service has error, Please call administrator"
        };  
    }
    else
        result = {
            errorPersian : '',
            errorLatin : 'An unhandled message occurred !!!',
            errorMessage : 'An unhandled message occurred !!!'
        };

    return result;
}
