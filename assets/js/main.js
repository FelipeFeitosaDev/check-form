(function () {
  class Form {
    constructor() {
      this.form = document.querySelector("form");
    }

    submitListener() {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        //se senha os campos forem válidos, submeter form
        const validField = this.checkFields();
        const validPassword = this.checkPass();

        if (validField && validPassword) {
          alert("Formulário enviado.");

          //controla quando usuário será enviado
          this.form.submit();
        }
      });
    }

    checkFields() {
      let flag = true;

      const fields = document.querySelectorAll(".fields");
      console.log(fields);

      const errors = document.querySelectorAll(".error-text");
      for (let error of errors) {
        if (error.value !== "") {
          error.remove();
        }
      }

      for (let field of fields) {
        if (field.value === "") {
          flag = false;
          const label = field.previousElementSibling.textContent;
          const msg = `Preencha o campo ${label}`;
          console.log(label);
          this.displayError(field, msg);
        } else if (field.classList.contains("name")) {
          if (!this.checkName(field)) flag = false;
        } else if (field.classList.contains("user")) {
          if (!this.checkUser(field)) flag = false;
        } else if (field.classList.contains("id")) {
          if (!this.checkId(field)) flag = false;
          this.displayError(field, "CPF inválido");
        }
      }
      return flag;
    }

    checkName(field) {
      let flag = true;
      if (!field.value.match(/^[\sa-zA-Z]+$/g)) {
        this.displayError(field, "Não pode haver caracteres especiais");
        flag = false;
      }
      if (!field.value.includes(" ")) {
        this.displayError(field, "Precisa ter um sobrenome");
        flag = false;
      }

      return flag;
    }
    checkUser(field) {
      let valid = true; //flag
      const user = field.value;

      if (user.length < 3 || user.length > 12) {
        this.displayError(
          field,
          "Usuário precisa ter entre 3 e 12 caracteres."
        );
        valid = false;
      } else if (!user.match(/^[a-zA-Z0-9]+$/g)) {
        this.displayError(
          field,
          "Nome de usuário precisar conter apenas letras e/ou números."
        );
        valid = false;
      }

      return valid;
    }

    checkId(field) {
      const id = new ValidaCPF(field.value);
      return id.valida();
    }
    displayError(field, msg) {
      const div = document.createElement("div");
      div.innerHTML = msg;
      div.classList.add("error-text");

      //insere o erro logo abaixo do campo
      field.insertAdjacentElement("afterend", div);
    }
    checkPass() {
      const pass = this.form.querySelector(".password");
      const confirmPass = this.form.querySelector(".confirm-password");
      let flag = true;

      if (pass.value !== confirmPass.value) {
        flag = false;
        this.displayError(
          pass,
          "Campos senha e repetir senha precisar ser iguais."
        );
        this.displayError(
          confirmPass,
          "Campos senha e repetir senha precisar ser iguais."
        );
      }

      if (pass.value.length < 3 || pass.value.length.length > 12) {
        this.displayError(
          pass,
          "O campo senha precisa ter entre 3 e 12 caracteres."
        );
        flag = false;
      }

      if (!pass.value.match(/^[a-zA-Z0-9]+$/g)) {
        let msg = `'O campo senha precisar conter apenas letras e/ou números.'`;
        this.displayError(pass, msg);
        flag = false;
      }
      return flag;
    }
  }
  const form = new Form();
  form.submitListener();
})();
