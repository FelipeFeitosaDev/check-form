
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

        checkPasswords(){

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
                    const label = field.previousElementSibling.textContent;
                    const msg = `Preencha o campo ${label}`;
                    console.log(label)
                    this.displayError(field, msg);
                }
            }
        }

        displayError(field,msg){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            
            //insere o erro logo abaixo do campo
            field.insertAdjacentElement('afterend', div);

        }


    }
    const form = new Form();
    form.submit();

})();
