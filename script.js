function add() {
    let a = +document.getElementById('a1').value;
    let b = +document.getElementById('a2').value;
    document.getElementById('aRes').textContent = a + b;
}
function multiply() {
    let a = +document.getElementById('m1').value;
    let b = +document.getElementById('m2').value;
    document.getElementById('mRes').textContent = a * b;
}
function checkEvenOdd() {
    let n = +document.getElementById('eo').value;
    let result = n % 2 === 0 ? 'Even' : 'Odd';
    document.getElementById('eoRes').textContent = result;
    document.getElementById('eoRes').style.color = n % 2 === 0 ? '#2b6cb0' : '#6b46c1';
}
function checkAge() {
    let age = +document.getElementById('age').value;
    let eligible = age >= 18;
    document.getElementById('ageRes').textContent = eligible ? 'Eligible to vote' : 'Not eligible to vote';
    document.getElementById('ageRes').style.color = eligible ? 'green' : 'red';
}
function printPrimes() {
    let limit = +document.getElementById('primeLimit').value;
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    document.getElementById('primeRes').textContent = primes.length > 0 ? 
        `Primes up to ${limit}: ${primes.join(', ')}` : 
        'No primes found in this range';
}
let clickCount = 0, dblCount = 0, hoverCount = 0;
const area = document.getElementById('clickArea');
if (area) {
    area.addEventListener('click', () => {
        clickCount++;
        document.getElementById('clicks').textContent = `Clicks: ${clickCount}`;
    });
    area.addEventListener('dblclick', () => {
        dblCount++;
        document.getElementById('clicks').textContent = `Double Clicks: ${dblCount}`;
    });
    area.addEventListener('mouseover', () => {
        hoverCount++;
        document.getElementById('clicks').textContent = `Hovers: ${hoverCount}`;
    });
}
let colorIndex = 0;
function changeColor() {
    const colors = ['#ff5252', '#4caf50', '#2196f3', '#ff9800', '#9c27b0'];
    const circle = document.getElementById('circle');
    circle.style.background = colors[colorIndex % colors.length];
    colorIndex++;
}
function calcGrade() {
    const marks = parseInt(document.getElementById("marksInput").value);
    let grade = "";

    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";
    else if (marks >= 50) grade = "D";
    else grade = "F";

    document.getElementById("gradeOutput").textContent = `You scored ${marks}. Grade: ${grade}`;

    // Optional: Add to table
    const tableBody = document.getElementById("gradeTableBody");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${marks}</td><td>${grade}</td>`;
    tableBody.appendChild(row);
}
function mix() {
    let r = +document.getElementById('r').value;
    let g = +document.getElementById('g').value;
    let b = +document.getElementById('b').value;
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementById('rgbValue').textContent = `RGB(${r}, ${g}, ${b})`;
}
function calc() {
    let a = +document.getElementById('n1').value;
    let b = +document.getElementById('n2').value;
    let op = document.getElementById('op').value;
    let res;
    switch(op) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = b !== 0 ? a / b : '∞'; break;
        default: res = 'Error';
    }
    document.getElementById('calcRes').textContent = res;
}
function showCustomAlert() {
    alert('Operation completed successfully!');
}
function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    
    if (!name || !email || !contact || !rollNo) {
        document.getElementById('formResponse').textContent = 'Please fill in all fields';
        document.getElementById('formResponse').style.color = 'red';
        return;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('formResponse').textContent = 'Please enter a valid email';
        document.getElementById('formResponse').style.color = 'red';
        return;
    }
    
    document.getElementById('formResponse').textContent = 
        `Form submitted successfully! We'll contact ${name} at ${email}`;
    document.getElementById('formResponse').style.color = 'green';
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('rollNo').value = '';
}