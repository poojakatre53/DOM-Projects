const form = document.querySelector('form');
// form submit hota hai ya toh post me ya get me par jab bhi submit hota hai uski values ko url convert or server par send karna hota hai par abhi nhi karna hai toh uske liye we use event method (basically we control default action of form)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>Your BMI is: ${bmi}</span><br>`;

    const bmiValue = parseFloat(bmi);

    // Compare BMI and display messages
    if (bmiValue < 18.6) {
      results.innerHTML += 'Your weight is underweight.';
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
      results.innerHTML += 'Your weight is in the normal range.';
    } else {
      results.innerHTML += 'Your weight is overweight.';
    }
  }
});
