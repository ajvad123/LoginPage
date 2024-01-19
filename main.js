

login=()=>{
    let username=uname.value
    let password=pswd.value

    if (!username || !password) {

        alert("oppss!! please enter a valid Username and password")
        
    }else{
        localStorage.setItem("username",username)

        console.log(`username=${username} , passwoed=${password}`);

        window.location="dashboard.html"
    }

}


