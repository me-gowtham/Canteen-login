class FormValidation{
    formValues = {
        username: "",
        O1: "",
        O2: "",
        O3: "",
        O4: ""
    }
    errorValues = {
        usernameErr: ""
    }
    
    showErrorMsg(index,msg){
        const card = document.getElementsByClassName('card')[index]
        card.classList.add('error')
        card.getElementsByTagName('e')[0].textContent = msg
    }
    getInputs(){
        this.formValues.username = document.getElementById('uid').value.trim()
        this.formValues.O1 = document.getElementById('O1').value.trim()
        this.formValues.O2 = document.getElementById('O2').value.trim()
        this.formValues.O3 = document.getElementById('O3').value.trim()
        this.formValues.O4 = document.getElementById('O4').value.trim()
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
        }else if(this.formValues.O1 === '' || this.formValues.O2 === '' || this.formValues.O3 === '' || this.formValues.O4 === ''){
            this.errorValues.usernameErr = "* Please Enter OTP"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else{
            this.errorValues.usernameErr = ""
        }
    }
}

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('card')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateusername()
    redirect()
})

function redirect(){
    if(ValidateUserInputs.errorValues.usernameErr == ""){
        window.location.href="FAGITO(4).html"
    }
}

function fn(froo,too,oo){
    var len=froo.value.length;
    var mx=froo.getAttribute("maxlength");
    if(len==mx){
        document.getElementById(too).focus()
    }
    if(len!=mx){
        document.getElementById(oo).focus()
    }
}