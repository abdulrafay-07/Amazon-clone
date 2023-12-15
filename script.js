function removeFirstOption() {
    let firstOption = document.querySelector('#mySelect option:first-child');
    firstOption.style.display = 'none';
    document.getElementById('mySelect').removeEventListener('click', removeFirstOption);
}
