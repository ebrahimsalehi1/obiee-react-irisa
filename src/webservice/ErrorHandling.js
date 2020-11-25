
export function inspectErrors(err){

    let result;
    if(err && err.response && err.response.data){
        if(!err.response.data[0].persianMessage &&
           !err.response.data[0].latinMessage &&
           !err.response.data[0].errorMessage
            )
            result = {
                errorPersian : null,
                errorLatin : null,
                errorMessage : 'Service has error, Please call administrator'
            };  
        else    
            result = {
                errorPersian : err.response.data[0].persianMessage,
                errorLatin : err.response.data[0].latinMessage,
                errorMessage : err.response.data[0].errorMessage
            };  
    }
    else
        result = {
            errorPersian : '',
            errorLatin : '',
            errorMessage : 'An unhandled message occurred !!!'
        };

    return result;
}
