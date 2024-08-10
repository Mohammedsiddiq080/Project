document.getElementById('polynomialForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the coefficients and x, y, z values from the input fields
    const coefficients = document.getElementById('coefficients').value.split(',').map(Number);
    const xValue = Number(document.getElementById('xValue').value);
    const yValue = Number(document.getElementById('yValue').value);
    const zValue = Number(document.getElementById('zValue').value);

    // Initialize the result variable
    let result = 0;

    // Check if coefficients array is empty or contains NaN
    if (coefficients.length === 0 || coefficients.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid coefficients.';
        return;
    }

    // Check if xValue, yValue, zValue are numbers
    if (isNaN(xValue) || isNaN(yValue) || isNaN(zValue)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for x, y, and z.';
        return;
    }

    // Calculate the polynomial value with respect to x, y, z
    coefficients.forEach((coef, index) => {
        result += coef * Math.pow(xValue, coefficients.length - 1 - index) +
            coef * Math.pow(yValue, coefficients.length - 1 - index) +
            coef * Math.pow(zValue, coefficients.length - 1 - index);
    });

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
});

// Modal functionality
const aboutIcon = document.getElementById('aboutIcon');
const aboutModal = document.getElementById('aboutModal');
const closeModal = document.getElementById('closeModal');

// Show modal
aboutIcon.onclick = function () {
    aboutModal.style.display = 'flex';
};

// Hide modal when clicking on close button
closeModal.onclick = function () {
    aboutModal.style.display = 'none';
};

// Hide modal when clicking outside of the modal
window.onclick = function (event) {
    if (event.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
};
