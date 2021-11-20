
(function(){

    class Form{
        constructor(){
            this.form = document.querySelector('form');
            this.trackEvent = this.submit();
        }

        submit(){
            this.form.addEventListener('submit', e => {
                e.preventDefault();
              //se senha os campos forem válidos, submeter form
              const validField;
              const validPassword;
            })
        }

        


    }

})();
