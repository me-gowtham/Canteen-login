class FormValidation{
    formValues = {
        username: "",
        password: "",
        name: "",
        email: ""
    }
    errorValues = {
        usernameErr: "",
        passwordErr: "",
        nameErr: "",
        emailErr: ""
    }
    showErrorMsg(index,msg){
        const card = document.getElementsByClassName('card')[index]
        card.classList.add('error')
        if(msg==this.errorValues.usernameErr){
            card.getElementsByTagName('e')[0].textContent = msg
        }else if(msg==this.errorValues.nameErr){
            card.getElementsByTagName('e')[1].textContent = msg
        }else if(msg==this.errorValues.emailErr){
            card.getElementsByTagName('e')[2].textContent = msg
        }else if(msg==this.errorValues.passwordErr){
            card.getElementsByTagName('e')[3].textContent = msg
        }
    }
    getInputs(){
        this.formValues.username = document.getElementById('uid').value.trim()
        this.formValues.name = document.getElementById('name').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
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
    validatename(){
        const nameExp = /^([a-z A-Z]+)$/
        if(this.formValues.name === ''){
            this.errorValues.nameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.nameErr)
        }else if(this.formValues.name.length <= 4){
            this.errorValues.nameErr = "* Name must be above 5 letters"
            this.showErrorMsg(0,this.errorValues.nameErr)
        }else if(!(nameExp.test(this.formValues.name))){
            this.errorValues.nameErr = "* Only Alphabets are allowed"
            this.showErrorMsg(0,this.errorValues.nameErr)
        }else{
            this.errorValues.nameErr = ""
        }
    }
    validateemail(){
        const mailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if(this.formValues.email === ''){
            this.errorValues.emailErr = "* Please Enter Your Email id"
            this.showErrorMsg(0,this.errorValues.emailErr)
        }else if(!(mailExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* Invalid email address"
            this.showErrorMsg(0,this.errorValues.emailErr)
        }else{
            this.errorValues.emailErr = ""
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
    ValidateUserInputs.validatename()
    ValidateUserInputs.validateemail()
    ValidateUserInputs.validatepassword()
    redirect()
})

function redirect(){
    if(ValidateUserInputs.errorValues.usernameErr == "" &&
    ValidateUserInputs.errorValues.nameErr == "" &&
    ValidateUserInputs.errorValues.emailErr == "" &&
    ValidateUserInputs.errorValues.passwordErr == ""){
        window.location.href="FAGITO.html"
    }
}