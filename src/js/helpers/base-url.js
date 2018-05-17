/**
 * Verifica se o host é localhost, caso seja retorna a baseUrl 
 * com o acrescimo do nome da pasta no servidor local
 * Se for host online, apenas retora o seu domínio.
 * 
 * @returns {String} Retorna a base url do site.
*/

function getBaseUrl(){
    let hostName = location.hostname
    let pathName = window.location.pathname
    let splitPath = pathName.split('/')
    let path = splitPath[1]

    if(hostName === "localhost"){
        var basePath = "http://" + hostName + "/" + path + "/public"
    }else{
        var basePath = "http://" + hostName
    }
    return basePath
}

module.exports = {  
   init: getBaseUrl()
}