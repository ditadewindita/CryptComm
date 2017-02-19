/**
 * Created by dita on 2/18/17.
 */

function accountCreate(button) {

    if (button == 'register') {
        document.getElementById("login").className = "register-form";
        document.getElementById('register').className = "login-form";
    }
    else if (button == 'login') {
        document.getElementById("register").className = "register-form";
        document.getElementById("forgot").className="register-form";
        document.getElementById('login').className = "login-form";
    }
    else if (button == 'forgot'){
        document.getElementById('login').className="register-form";
        document.getElementById('forgot').className="login-form";
    }

}
