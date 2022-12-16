const validator = require('validator')

export default class Login {

    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return
        let form = this.form
        
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')

        let error = false
        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail Inválido!')
            error = true
        }

        if(passwordInput.length < 3 || passwordInput.length > 50) {
            alert('A senha precisa ter de 3 a 50 caracteres')
            error = true
        }

        if(!error) el.submit();

    }
}