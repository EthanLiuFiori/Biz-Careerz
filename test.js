
function generateID() {
    let form = document.getElementById('quizForm');
    let form2 = document.getElementById('quizForm2');
    let formData = new FormData(form);
    let formData2 = new FormData(form2);
    let currentLocation = window.location.pathname.split('/').pop();
    let answers = [];
    console.log(sessionStorage.getItem('temp'));
    // Collecting answers from form data
    for (const [name, value] of formData.entries()) {
        answers.push(value);
    }
    for (const [name, value] of formData2.entries()) {
        answers.push(value);
    }
    
    // Check if all questions are answered
    if (answers.length < 4) {  // Adjust this number if needed
        let existingErrorMessage = document.getElementById('error-message');

        if (!existingErrorMessage) {
            let errorMessage = document.createElement('p');
            errorMessage.id = 'error-message';
            errorMessage.textContent = 'Please answer all the questions';
            document.getElementById('errormessage').appendChild(errorMessage);
        }
    } else {
        // Clear error message if present
        let existingErrorMessage = document.getElementById('error-message');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }

        // Join answers and store in sessionStorage
        let temp = answers.join('');
        if (!sessionStorage.getItem('temp')) {
            sessionStorage.setItem('temp', temp);
        } else {
            temp = sessionStorage.getItem('temp') + temp;
            sessionStorage.setItem('temp', temp);
        }
        if (temp.length == 20) {
             // Store final uniqueID
            window.location.href = 'ResultPage.html';  // Redirect to results page
        } else {
            let number = currentLocation.match(/(\d+)/);
            if (!number) {
                window.location.href = 'test2.html';
            } else {
                if (parseInt(number[0]) === 5){
                    window.location.href = 'ResultPage.html';
                } else {
                    number = parseInt(number[0]) + 1;
                    window.location.href = `test${number}.html`;
                }
                
                
            }
        }
    }
}
