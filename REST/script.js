const toggleSwitch = document.getElementById('themeToggle');

toggleSwitch.addEventListener('change', toggleTheme);

function toggleTheme() {
    if (toggleSwitch.checked) {
        document.documentElement.style.setProperty('--color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--color-second', 'rgb(40, 40, 40)');
        document.documentElement.style.setProperty('--color-opposite', 'rgb(255, 255, 255)');
    } else {
        document.documentElement.style.setProperty('--color', 'rgb(215, 215, 215)');
        document.documentElement.style.setProperty('--color-second', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--color-opposite', 'rgb(40, 40, 40)');
    }
}

function students() {
    document.getElementById("choice").classList.add("hide");
    document.getElementById("students").classList.remove("hide");
    
    const studentDropdown = document.getElementById("studentDropdown");
    studentDropdown.innerHTML = ""; // Clear existing options

    fetch('https://vvri.pythonanywhere.com/api/students')
        .then(response => response.json())
        .then(json => {
            json.forEach(student => {
                const option = document.createElement("option");
                option.value = student.id;
                option.textContent = student.name;
                studentDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching students:", error));
}

function courses() {
    document.getElementById("choice").classList.add("hide");
    document.getElementById("courses").classList.remove("hide");
    
    const courseDropdown = document.getElementById("courseDropdown");
    courseDropdown.innerHTML = "";

    fetch('https://vvri.pythonanywhere.com/api/courses')
        .then(response => response.json())
        .then(json => {
            json.forEach(course => {
                const option = document.createElement("option");
                option.value = course.id;
                option.textContent = course.name;
                courseDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching courses:", error));
}
