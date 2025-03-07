function openTool(toolId) {
    document.getElementById("tool-section").style.display = "block";
    let toolContents = document.querySelectorAll(".tool-content");
    toolContents.forEach(content => content.style.display = "none");
    
    let selectedTool = document.getElementById(toolId);
    if (!selectedTool) {
        selectedTool = document.createElement("div");
        selectedTool.id = toolId;
        selectedTool.className = "tool-content";
        selectedTool.innerHTML = getToolHTML(toolId);
        document.getElementById("tool-section").appendChild(selectedTool);
    }
    selectedTool.style.display = "block";
}

function getToolHTML(toolId) {
    switch(toolId) {
        case 'calculator':
            return `<h2>Calculator</h2><input type="text" id="calc-input" placeholder="Enter expression"><button onclick="calculate()">Calculate</button><p>Result: <span id="calc-result"></span></p>`;
        case 'armstrong':
            return `<h2>Armstrong Number</h2><input type="number" id="armstrong-input" placeholder="Enter a number"><button onclick="checkArmstrong()">Check</button><p>Result: <span id="armstrong-result"></span></p>`;
        case 'conversion':
            return `<h2>Number Conversion</h2><input type="number" id="conv-input" placeholder="Enter a number"><button onclick="toBinary()">To Binary</button><button onclick="toDecimal()">To Decimal</button><p>Result: <span id="conv-result"></span></p>`;
        case 'palindrome':
            return `<h2>Palindrome Checker</h2><input type="text" id="palindrome-input" placeholder="Enter text or number"><button onclick="checkPalindrome()">Check</button><p>Result: <span id="palindrome-result"></span></p>`;
        case 'fibonacci':
            return `<h2>Fibonacci Series</h2><input type="number" id="fibonacci-input" placeholder="Enter count"><button onclick="generateFibonacci()">Generate</button><p>Result: <span id="fibonacci-result"></span></p>`;
        case 'prime':
            return `<h2>Prime Number Checker</h2><input type="number" id="prime-input" placeholder="Enter a number"><button onclick="checkPrime()">Check</button><p>Result: <span id="prime-result"></span></p>`;
        case 'quadratic':
            return `<h2>Quadratic Solver</h2><input type="text" id="quad-a" placeholder="Enter a"><input type="text" id="quad-b" placeholder="Enter b"><input type="text" id="quad-c" placeholder="Enter c"><button onclick="solveQuadratic()">Solve</button><p>Result: <span id="quad-result"></span></p>`;
        case 'oddeven':
            return `<h2>Odd/Even Checker</h2><input type="number" id="oddeven-input" placeholder="Enter a number"><button onclick="checkOddEven()">Check</button><p>Result: <span id="oddeven-result"></span></p>`;
        case 'factorial':
            return `<h2>Factorial Calculator</h2><input type="number" id="factorial-input" placeholder="Enter a number"><button onclick="calculateFactorial()">Calculate</button><p>Result: <span id="factorial-result"></span></p>`;
            case 'matrix':
                return `<h2>Matrix Operations</h2><textarea id="matrix-input" placeholder="Enter matrix rows separated by new lines"></textarea><button onclick="processMatrix()">Process</button><p>Result: <span id="matrix-result"></span></p>`;
            case 'statistics':
                return `<h2>Statistics</h2><input type="text" id="stats-input" placeholder="Enter numbers separated by commas"><button onclick="calculateStatistics()">Calculate</button><p>Result: <span id="stats-result"></span></p>`;
            case 'trivia':
            return `<h2>Math Trivia</h2><button onclick="generateTrivia()">Get Trivia</button><p>Trivia: <span id="trivia-result"></span></p>`;
            case 'inverse':
                return `<h2>Inverse Calculator</h2><input type="number" id="inverse-input" placeholder="Enter a number"><button onclick="calculateInverse()">Calculate</button><p>Result: <span id="inverse-result"></span></p>`;
            case 'complex':
                return `<h2>Complex Number Operations</h2><input type="number" id="complex-real" placeholder="Enter real part"><input type="number" id="complex-imag" placeholder="Enter imaginary part"><button onclick="processComplex()">Process</button><p>Result: <span id="complex-result"></span></p>`;
            default:
            return `<h2>${toolId.replace(/-/g, ' ')}</h2><p>Functionality not available!</p>`;
    }
}
function calculate() {
    let input = document.getElementById("calc-input").value;
    document.getElementById("calc-result").textContent = eval(input);
}

function checkArmstrong() {
    let num = Number(document.getElementById("armstrong-input").value);
    let sum = 0, temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** String(num).length;
        temp = Math.floor(temp / 10);
    }
    document.getElementById("armstrong-result").textContent = (sum === num) ? "Yes, Armstrong" : "No, Not Armstrong";
}
function toBinary() {
    let num = Number(document.getElementById("conv-input").value);
    document.getElementById("conv-result").textContent = num.toString(2);
}

function toDecimal() {
    let num = document.getElementById("conv-input").value;
    document.getElementById("conv-result").textContent = parseInt(num, 2);
}

function checkPalindrome() {
    let str = document.getElementById("palindrome-input").value;
    let rev = str.split('').reverse().join('');
    document.getElementById("palindrome-result").textContent = (str === rev) ? "Yes, Palindrome Number" : "No, Not Palindrome NumberS";
}

function generateFibonacci() {
    let count = Number(document.getElementById("fibonacci-input").value);
    let fib = [0, 1];
    for (let i = 2; i < count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("fibonacci-result").textContent = fib.slice(0, count).join(', ');
}

function checkPrime() {
    let num = Number(document.getElementById("prime-input").value);
    let isPrime = num > 1 && [...Array(num).keys()].slice(2).every(i => num % i !== 0);
    document.getElementById("prime-result").textContent = isPrime ? "Prime" : "Not Prime";
}


function solveQuadratic() {
    let a = Number(document.getElementById("quad-a").value);
    let b = Number(document.getElementById("quad-b").value);
    let c = Number(document.getElementById("quad-c").value);
    let discriminant = b * b - 4 * a * c;
    let result;
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Roots: ${root1}, ${root2}`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        result = `One Root: ${root}`;
    } else {
        result = "No real roots";
    }
    document.getElementById("quad-result").textContent = result;
}

function checkOddEven() {
    let num = Number(document.getElementById("oddeven-input").value);
    document.getElementById("oddeven-result").textContent = (num % 2 === 0) ? "Even" : "Odd";
}

function calculateFactorial() {
    let num = Number(document.getElementById("factorial-input").value);
    let fact = num === 0 ? 1 : Array.from({length: num}, (_, i) => i + 1).reduce((a, b) => a * b);
    document.getElementById("factorial-result").textContent = fact;
}
function processMatrix() {
    let input = document.getElementById("matrix-input").value.trim();
    
    // Split the input by newlines to get rows and ensure no empty rows
    let rows = input.split("\n").map(row => row.trim()).filter(row => row !== "");
    
    // Log rows to check the input after splitting and trimming
    console.log("Rows after split and trim:", rows);
    
    // Convert rows into arrays of numbers
    let matrix = rows.map(row => row.split(/\s+/).map(Number));
    
    // Log the matrix array for debugging
    console.log("Matrix array:", matrix);
    
    // Check for invalid input (non-numeric values or inconsistent row lengths)
    if (matrix.some(row => row.some(isNaN))) {
        document.getElementById("matrix-result").textContent = "Invalid Matrix Input (non-numeric values detected)";
        return;
    }
    
    // Check for consistent row lengths
    if (matrix.some(row => row.length !== matrix[0].length)) {
        document.getElementById("matrix-result").textContent = "Invalid Matrix Input (inconsistent row lengths)";
        return;
    }

    try {
        // Use math.js to calculate the determinant
        let matrixObj = math.matrix(matrix);
        let det = math.det(matrixObj).toFixed(2);
        document.getElementById("matrix-result").textContent = `Determinant: ${det}`;
    } catch (error) {
        console.error("Error calculating determinant:", error);
        document.getElementById("matrix-result").textContent = "Invalid Matrix Input";
    }
}

function calculateStatistics() {
    let nums = document.getElementById("stats-input").value.split(",").map(Number);
    if (nums.some(isNaN) || nums.length === 0) {
        document.getElementById("stats-result").textContent = "Invalid Input";
        return;
    }
    
    let mean = (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2);
    let variance = (nums.reduce((a, b) => a + (b - mean) ** 2, 0) / nums.length).toFixed(2);
    let stddev = Math.sqrt(variance).toFixed(2);
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    document.getElementById("stats-result").textContent = `Mean: ${mean}, Variance: ${variance}, Std Dev: ${stddev}, Min: ${min}, Max: ${max}`;
}
function generateTrivia() {
    const trivia = [
        "A 'jiffy' is an actual unit of time for 1/100th of a second.",
        "Zero is the only number that can't be represented in Roman numerals.",
        "The number 2 is the only even prime number.",
        "A perfect number is a number that is equal to the sum of its divisors, excluding itself.",
        "Pi has been calculated to over 31 trillion digits but is still an irrational number."
    ];
    document.getElementById("trivia-result").textContent = trivia[Math.floor(Math.random() * trivia.length)];
}
function calculateInverse() {
    let num = Number(document.getElementById("inverse-input").value);
    document.getElementById("inverse-result").textContent = num !== 0 ? (1 / num).toFixed(6) : "Infinity";
}

function processComplex() {
    let real = Number(document.getElementById("complex-real").value);
    let imag = Number(document.getElementById("complex-imag").value);
    let magnitude = Math.sqrt(real ** 2 + imag ** 2).toFixed(2);
    let angle = Math.atan2(imag, real).toFixed(2);
    document.getElementById("complex-result").textContent = `Magnitude: ${magnitude}, Angle: ${angle} radians`;
}