// Sample Employee data
const employees = [
   { name: "Ayush", city: "Mumbai", designation: "Software Developer" },
   { name: "Satyam", city: "Delhi", designation: "UI/UX" },
   { name: "Arpita", city: "Bangalore", designation: "Designer" },
   { name: "Pradeep", city: "Mumbai", designation: "HR" },
   { name: "Abhi", city: "Delhi", designation: "Developer" },
];

// Function to filter and display employees
function displayEmployees(city) {
   const employeeList = document.getElementById("employeeList");
   employeeList.innerHTML = "";

   employees.forEach(employee => {
       if (city === "all" || employee.city.toLowerCase() === city.toLowerCase()) {
           const li = document.createElement("li");
           li.textContent = `Name: ${employee.name}, City: ${employee.city}, Designation: ${employee.designation}`;
           employeeList.appendChild(li);
       }
   });
}

// Event listener for the city select dropdown
const citySelect = document.getElementById("city");
citySelect.addEventListener("change", () => {
   const selectedCity = citySelect.value;
   displayEmployees(selectedCity);
});

// Initial display of all employees
displayEmployees("all");
