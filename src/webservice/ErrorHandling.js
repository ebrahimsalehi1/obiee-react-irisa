
export function inspectErrors(err){

    let result;
    if(err && err.response && err.response.data)
        result = {
            errorPersian : err.response.data[0].persianMessage,
            errorLatin : err.response.data[0].latinMessage,
            errorMessage : err.response.data[0].errorMessage
        };  
    else
        result = {
            errorPersian : '',
            errorLatin : '',
            errorMessage : 'An unhandled message occurred !!!'
        };

    console.log('inspectErrors',result);

    return result;
}
