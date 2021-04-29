let email = 'arthurteixeira.guts@gmail.com';


function emailMask(email) {
    var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
    var previous = "";
    for (i = 0; i < maskedEmail.length; i++) {
        if (i <= 1 || previous == "." || previous == "@") {
            maskedEmail[i] = email[i];
        }
        previous = email[i];
    }
    return maskedEmail.join('');
}

console.log(emailMask(email))

//Console = ar************.g***@g****.c**