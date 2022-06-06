function createVoteResultParagraph() {
    let selectedOption = localStorage.selectedOption;
    let paragraph = document.querySelector('.result p');
    paragraph.innerText = `You selected ${selectedOption} out of 5`;
}

createVoteResultParagraph()