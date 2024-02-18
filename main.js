const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi >= 0 && bmi <= 18.50){
            results.innerHTML = `<span>${bmi} you are underweight</span>`;
        }
        else if(bmi >= 18.60 && bmi <= 24.90){
            results.innerHTML = `<span>${bmi} you are Healthy</span>`;
        }
        else if(bmi >= 25.00 && bmi <= 29.90){
            results.innerHTML = `<span>${bmi} you are overweight</span>`;
        }
        else{
            results.innerHTML = `<span>${bmi} you are Obese</span>`;
        }
    }
});