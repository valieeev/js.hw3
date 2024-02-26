

function saveData() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!passwordPattern.test(password)) {
        alert("Пароль должен содержать сочетание букв и цифр");
        return;
    }
    alert("Ваши данные записаны");
}
