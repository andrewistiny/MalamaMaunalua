function test() {
    console.log('LINKED');
}

const email = document.getElementById("email");
const password = document.getElementById("password");
const namePlaceholder = document.getElementById("account-name-placeholder");

let auth = {};
auth.email;
auth.password;
auth.loggedIn;
let pressed = function () {
    event.preventDefault();
     auth.email = email.value;
     auth.password = password.value;
     auth.loggedIn = false;
    console.log(auth);

    axios.get(`https://hu37ucyu34.execute-api.us-west-2.amazonaws.com/dev/get`)
        .then(function (response) {
            response.data.map((val) => {
                //console.log('email', val.email);
                //console.log('password', val.pass);
                let tempEmail = val.email;
                let tempPassword = val.pass;
                let authObj = {}
                let i = 0;
                let loggedIn = false;

                for (i; i < response.data.length; i++) {
                    //console.log("for loop i: ", i);
                    authObj.i = {
                        tempEmail,
                        tempPassword
                    };
                    if (auth.email === tempEmail && auth.password === tempPassword) {
                        console.log('Signing In...');
                        auth.loggedIn = true;
                        break;
                    }
                }
                function changeHTML(){
                    console.log(auth)
                    if(auth.loggedIn === true){
                        console.log("LOGGED IN SUCCESSFULLY")
                    }
                    namePlaceholder.innerHTML = tempEmail;
                }


                console.log('authObj', auth);
            })
        
        })
        .then(function (response) {
            //window.location.href = '/index.html'
        })
}




