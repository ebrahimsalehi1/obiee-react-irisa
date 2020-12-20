
import {login,isSessionValid} from './Login';
import {getUserInfo,hasAdminRole} from './User';

export async function getLogedInUserInfo(userName){

    let userInfoData;
    let hasAdminRoleData;
    let result =  await getUserInfo(userName);

    if(result.error){     
      return {userInfo:null,hasAdminRole:null,
          error:"Login Data Failed"
      };
    }
    else{
      userInfoData = result.data;

      result =  await hasAdminRole(userName);
      
      if(result.error){
          return {userInfo:null,hasAdminRole:null,
              error:"Login Data Failed"
          };
      }
      else{
        hasAdminRoleData = result.data;            
      }

      return {userInfo:userInfoData,hasAdminRole:hasAdminRoleData,error:null};
    }

}

export async function loginAndGetData(data){ 

    const {userName} = data;

    let result = await login(data);

    if(result.error){
        return {userInfo:null,hasAdminRole:null,isAuthenticated:false,
            error:"Login Failed"
        };
    }
    else{       
      localStorage.setItem('sessionId',result.data) ;
      localStorage.setItem('user',userName);

      result = await getLogedInUserInfo(userName);

      if(result.error){
        return {userInfo:null,hasAdminRole:null,isAuthenticated:false,
            error:result.error
        };
      }
      else{
        return {userInfo:result.userInfo,hasAdminRole:result.hasAdminRole,isAuthenticated:true,
            error:null
            };
      }
    }

}

export async function isSessionValidAndGetData(data,userName){

    let result = await isSessionValid(data);
    if(result.error)
        return {userInfo:null,hasAdminRole:null,isAuthenticated:false,
            error:"Is Session Valid Failed"
        };
    else{

        result = await getLogedInUserInfo(userName);
        if(result.error){
          return {userInfo:null,hasAdminRole:null,isAuthenticated:false,
              error:result.error
          };
        }
        else
          return {userInfo:result.userInfo,hasAdminRole:result.hasAdminRole,isAuthenticated:true,
              error:null
              };
  
    }
        

}
