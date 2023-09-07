/* Our Task is to use :
   oepration of Array, 
   Operators, 
   Looping Statments .
   In our mini project. */

   

// Array to store student data ::
const students = [];

// Function to calculate grades ::
function calculateGrade(score) {
    // Determine the grade based on the score
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Function to add a student and display student information ::
function addStudent() {
    // Get references to HTML elements
    const studentNameInput = document.getElementById('studentName');
    const studentScoreInput = document.getElementById('studentScore');
    const studentList = document.getElementById('students');
    const averageScore = document.getElementById('average');

    // Retrieve the student's name and score from the input fields
    const studentName = studentNameInput.value;
    const studentScore = parseFloat(studentScoreInput.value);

    // Check if both name and score are valid
    if (studentName && !isNaN(studentScore)) {
        // Calculate the grade using the calculateGrade function
        const grade = calculateGrade(studentScore);

        // Store the student's information in the students array
        students.push({ name: studentName, score: studentScore });

        // Display student information on the web page
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName} - Score: ${studentScore}, Grade: ${grade}`;
        studentList.appendChild(listItem);

        // Calculate and display the average score
        let totalScore = 0;
        for (const student of students) {
            totalScore += student.score;
        }
        const average = totalScore / students.length;
        averageScore.textContent = `Average Score: ${average.toFixed(2)}`;

        // Clear input fields for the next input
        studentNameInput.value = '';
        studentScoreInput.value = '';
    }
}

// Add a click event listener to the "Add Student" button ::
const addStudentButton = document.getElementById('addStudent');
addStudentButton.addEventListener('click', addStudent);
