

export const getTokenFromURL = () => {
    return window.location.hash
        //retorna la parte ancla de un URL.
         //http://www.example.com/test.htm#part2:
        //window.location.hash retornará #part2   
        .substring(1)
        //substring(1) extrae el primer carácter, e imprime el resto de la cadena
        //hasta el final de
        //const hello = "Hello World",  hello.substring(1) retornaría "ello world"
        .split("&")
        //divide un String en un array de cadenas, mediante la separación "&"
        .reduce((initial, item) => {
        //#accessToken=asdfadsfsdf&name=javascriptdenoobapro
            //ejecuta una función reductora sobre cada elemento del array, y da como un solo valor.
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
            //    ["access_token=BQCl6XIyHEyDmm9JNGj-LWVmqncxzLVMQkHxejgZDEWSIc7QWezqn0WnLabkSai6kimTCvbC-utS_xGI8rrqgl0_d64_5IsY0Tu3r6UY0AJ2KPLiMsE8px7a4pIGEbPgIYsXLUBrPfWZ8cEa0XAG_wa0PIKG"
            //     "token_type=Bearer"
            //     "expires_in=3600"]

            //    parts = [["access_token", ""], ["token_type","Bearer" ], ["expires_in","3600"]]
            //    parts[0] = ["access_token", ""]
        }, {})
}





const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "1bdda459e75f4754863c0527eaa41b5b"
const redirectUri = "http://localhost:3001/"
const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"]

export const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`