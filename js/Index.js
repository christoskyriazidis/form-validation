const Formm = new Form();
Formm.initializeForm();


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    Formm.FormSubmit();
});