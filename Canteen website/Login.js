class FormValidation{
    formValues = {
        username: "",
        password: ""
    }
    errorValues = {
        usernameErr: "",
        passwordErr: ""
    }
    
    showErrorMsg(index,msg){
        const card = document.getElementsByClassName('card')[index]
        card.classList.add('error')
        if(msg==this.errorValues.usernameErr){
            card.getElementsByTagName('a')[0].textContent = msg
        }else if(msg==this.errorValues.passwordErr){
            card.getElementsByTagName('b')[0].textContent = msg
        }
    }
    getInputs(){
        this.formValues.username = document.getElementById('uid').value.trim()
        this.formValues.password = document.getElementById('pwd').value.trim()
    }
    validateusername(){
        const regExp = /^([0-9]+)$/
        if(this.formValues.username === ''){
            this.errorValues.usernameErr = "* Please Enter Your Mobile Number"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else if(this.formValues.username.length > 10){
            this.errorValues.usernameErr = "* Mobile Number should be in 10 digit"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else if(this.formValues.username.length < 10){
            this.errorValues.usernameErr = "* Mobile Number should be in 10 digit"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else if(!(regExp.test(this.formValues.username))){
            this.errorValues.usernameErr = "* Invalid Mobile Number"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else{
            this.errorValues.usernameErr = ""
        }
    }
    validatepassword(){
        if(this.formValues.password === ''){
            this.errorValues.passwordErr = "* Please Enter Your password"
            this.showErrorMsg(0,this.errorValues.passwordErr)
        }else if(this.formValues.password.length < 8){
            this.errorValues.passwordErr = "* Invalid Password"
            this.showErrorMsg(0,this.errorValues.passwordErr)
        }else{
            this.errorValues.passwordErr = ""
        }
    }
}

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('card')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateusername()
    ValidateUserInputs.validatepassword()
    redirect()
})

function redirect(){
    if(ValidateUserInputs.errorValues.usernameErr == "" &&
    ValidateUserInputs.errorValues.passwordErr == ""){
        window.location.href="FAGITO.html"
    }
}