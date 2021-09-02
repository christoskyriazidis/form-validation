function Form() {
    this.initializeForm();
    this.inputs = [];
    this.HTML_ELEMENT = document.querySelector('.edw');
    this.FORM = document.getElementById('login-form');
    this.ERRORS = {};
}

Form.prototype.initializeForm = async function () {
    this.inputs = FormInputs

    this.BuildHTML();
}

Form.prototype.FormSubmit = function () {
    const DATA = this.inputs;
    for (let i in DATA) {
        if (DATA[i].required && DATA[i].visibility) {
            let input = document.getElementById(`${i}`);
            this.ValidateInputs(i, input)
        }
    }

    console.log(this.ERRORS);
    if (this.ERRORS) {
        for (let i in this.ERRORS) {
            let inputErrorMessage = document.querySelector(`.input-error-${i}`);
            inputErrorMessage.innerHTML = this.ERRORS[i];
        }
    } else {
        //ajax request here wow
    }
}

Form.prototype.ValidateInputs = function (name, element) {
    switch (name) {
        case "Gender":
            // if (!element.value) {
            //     this.ERRORS[name] = `${name} Cannot be null`
            //     console.log(filterInput(1, element, false, ''));
            // }
            break;
        case "Username":
            if (!element.value) {
                console.log('edw');
                console.log(filterInput(1, element, false, ''));
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Surename":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Town":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Region":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Address":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Post-Code":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
        case "Country":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Address":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "E-mail":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Password":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Personal-Question":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        case "Affiliate-Code":
            if (!element.value) {
                this.ERRORS[name] = `${name} Cannot be null`
            }
            break;
        default:
            break;
    }
}


Form.prototype.BuildHTML = function () {
    const form = this.HTML_ELEMENT;
    const inputs = this.inputs;
    let box = ""
    for (let i in inputs) {
        const { visibility, label, type, placeholder, required } = inputs[i]
        if (visibility) {
            //IF input is required add asterix 
            let requiredAsterix = required ? '*' : '';
            //Placeholder OR Label
            box += `
        <div class="input-item">
        ${label ? `<label for="${i}">${label} ${requiredAsterix}</label>` : ''}
        <input onKeyPress="test(this)" name="${i}" id="${i}" type="${type}" placeholder="${placeholder}">
        <div class="input-error-${i} input-error"></div>
        </div>
        `
        }
        document.querySelector('.edw').innerHTML = box;
        document.querySelector('.edw').innerHTML += `<button class="submit-register" type="submit">Register</button>`;
    }
}

function test(element) {
    const key = filterInput(1, element, false, '');
    let valuee = element.value
    if (key) {
        element.value = valuee
        return
    }
}