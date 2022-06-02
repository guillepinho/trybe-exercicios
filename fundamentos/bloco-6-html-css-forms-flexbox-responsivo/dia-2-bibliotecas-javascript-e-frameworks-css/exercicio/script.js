const validation = new JustValidate(
    '#form',
    {
        errorFieldCssClass: 'is-invalid',
        errorFieldStyle: {
            border: '1px solid red',
        },
        errorLabelCssClass: 'is-label-invalid',
        errorLabelStyle: {
            color: 'red',
            textDecoration: 'underlined',
        },
        focusInvalidField: true,
        lockForm: true,
        tooltip: {
            position: 'top',
        },
        errorContainer: '.errors-container',
    }
);

validation.addField('#inputName', [
    {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Nome curto, use seu nome completo.'
    },
    {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'Nome bastante longo, você pode resumir?',
    },
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    }
])
.addField('#inputEmail', [
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    },
    {
        rule: 'email',
        errorMessage: 'E-mail inválido!'
    }
])
.addField('#inputPassword', [
    {
        rule: 'password',
        errorMessage: 'Sua senha deve ter, ao menos, 8 caracteres, sendo no mínimo uma letra e um número.'
    },
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    }
])
.addField('#inputDate', [
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    }
])
.addField('#inputState', [
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    }
])
.addField('#inputText', [
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    },
    {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Escreva alguma coisa, se não, suas chances de ganhar diminuem.'
    },
    {
        rule: 'maxLength',
        value: 500,
        errorMessage: 'Opa, sei que você se empolgou, mas que tal diminuir um pouquinho só? O limite é 500 caracteres.',
    },
])
.addField('#foto-perfil', [
    {
        rule: 'maxFilesCount',
        value: 1,
        errorMessage: 'Apenas um arquivo!',
    },
    {
        rule: 'files',
        value: {
            files: {
                extensions: ['jpeg', 'png', 'jpg', 'jfif'],
                maxSize: 5000000,
                types: ['image/jpeg', 'image/png', 'image/jpg', 'image/jfif'],
            }
        },
        errorMessage: 'O arquivo deve ser do tipo jpeg, png, jpg ou jfif e ter até 5MB de tamanho.',
    }
])
.addField('#inputConditions', [
    {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
    },
]);

const fileInput = document.querySelector('#photo input[type=file]');

function fileChange() {
    if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#photo .file-name');
        fileName.textContent = fileInput.files[0].name;
    }
}

fileInput.addEventListener('change', fileChange);

const inputDate = document.querySelector('#inputDate');
inputDate.DatePickerX.init({
    mondayFirst: false,
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    format: 'yyyy-mm-dd',
    clearButton: false,
    todayButton: false,
    minDate: function () {
        var date = new Date();
        return new Date().setDate(date.getDate() + 7);
    },
});