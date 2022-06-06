let selectedOption = 0;

const vote =  {
    validate(event) {
        if(selectedOption===0){
            event.preventDefault();
            alert('Please, select an option');
            return;
        }

        localStorage.setItem('selectedOption', selectedOption);
    },

    changeSelectedOption(optionNumber) {

    }
}

const app = {
    start() {
        const options = document.querySelectorAll('.options button');
        const button = document.querySelector('#submit-button');
        button.addEventListener('click', validate);
    
    
        options.forEach(option => {
            option.addEventListener('click', () => {
                selectedOption = parseInt(option.textContent);
                    vote.changeSelectedOption(parserInt(option.textContent));
            });
        });
    }
}

app.start()