
(function(){

    class Form{
        constructor(){
            this.form = document.querySelector('form');
        }

        submit(){
            this.form.addEventListener('submit', e => {
                e.preventDefault();
              //se senha os campos forem válidos, submeter form
               const validField = this.checkFields();
                //const validPassword;
            })
        }

        checkFields(){
            let flag = true;

            const fields = document.querySelectorAll('.fields');
            console.log(fields);

            const errors =  document.querySelectorAll('.error-text');
            for(let error of errors){
                if(error.value !== ''){
                    error.remove();
                }
            }
            
            for(let field of fields){
                if(field.value === ''){
                    flag = false;
                    const label = field.previousElementSibling.textContent;
                    const msg = `Preencha o campo ${label}`;
                    console.log(label)
                    this.displayError(field, msg);
                }

                if(field.classList.contains('name')){
                   if(!field.value.match(/^[a-zA-Z]+$/g)) flag = false
                }
                if(field.classList.contains('user')){
                    if(!this.validUser(field)) flag = false
                }

                if(field.classList.contains('id')){
                    if(!this.validId(field)) flag = false;

                }
            }
            return flag;
        }

        validUser(field) {
            let valid = true;//flag
            const user = field.value;
            
        
            if(user.length < 3 || user.length > 12) {
              this.displayError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
              valid = false;
            }
        
        
            if(!user.match(/^[a-zA-Z0-9]+$/g)) {
              this.displayError(field, 'Nome de usuário precisar conter apenas letras e/ou números.');
              valid = false;
            }
        
            return valid;
          }
        
        validId(field){
              const id = new ValidaCPF(field.value);
              return id.valida()
          }
        displayError(field,msg){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            
            //insere o erro logo abaixo do campo
            field.insertAdjacentElement('afterend', div);

        }
        validPassword(pass, confirmPass){
            if(pass.value.length < 3 || pass.value.length.length > 12) {
                this.displayError(pass, 'Usuário precisa ter entre 3 e 12 caracteres.');
                return false;
              }

            if(!pass.value.match(/^[a-zA-Z0-9]+$/g)){
                let msg = `'O campo precisar conter apenas letras e/ou números.'`
                this.displayError(pass, msg);
                return false

            }
            if(pass !== confirmPass) return false

            return true
           
        }

    }
    const form = new Form();
    form.submit();

})();
