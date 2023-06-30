import { API_BASE_URL } from "../app-config";

export function call(api, method, request){
    let options={
        headers: new Headers({
            "Content-Type":"application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };
    if(request){
        //GET METHOD
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options).then((response)=>
        response.json().then((json)=>{
            if(!response.ok){
                return Promise.reject(json);
            }
            // response.ok가 true면 정상적인 응답
            return json;
        })
    );
}
