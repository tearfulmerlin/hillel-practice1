document.querySelector('#button').onclick = function getForm(event) {

    event.preventDefault();

    const nameUser = document.querySelector('#name').value;
    const dateUser = document.querySelector('#date').value;
    const sexUser = document.querySelector('input[name="gender"]:checked').value;
    const cityUser = document.querySelector('#city').value;
    const emailUser = document.querySelector('#email').value;
    const passwordUser = document.querySelector('#password').value;
    const langInputs = document.querySelectorAll('input[name="language"]:checked');

    let langUser = '';
    if (langInputs.length > 0) {
        langInputs.forEach(input => {
            langUser += input.value + ', ';
        });

    } 

    langUser = langUser.slice(0, -2);

    document.querySelector('#block-name').innerHTML = `Name: ${nameUser}`;
    document.querySelector('#block-date').innerHTML = `Date: ${dateUser}`;
    document.querySelector('#block-sex').innerHTML = `Sex: ${sexUser}`;
    document.querySelector('#block-city').innerHTML = `City: ${cityUser}`;
    document.querySelector('#block-email').innerHTML = `Email: ${emailUser}`;
    document.querySelector('#block-password').innerHTML = `Password: ${passwordUser}`;
    document.querySelector('#block-language').innerHTML = `Language: ${langUser}`;
}
