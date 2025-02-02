let students = new Object(); 

function addStudent() {
    const studentName = document.getElementById("studentName").value.toUpperCase();
    if (!studentName) {
        alert("Invalid student name.");
        return;
    }

    if (students[studentName]) {
        alert(`Student ${studentName} already exists.`);
        return;
    }

    const studentList = document.getElementById("studentList");
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "radio";
    checkbox.name = "students";
    checkbox.value = studentName;
    checkbox.onclick = () => updateCourseCheckboxes(studentName);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Drop Student";
    deleteButton.onclick = () => dropStudent(studentName, newLi);

    newLi.appendChild(checkbox);
    newLi.appendChild(document.createTextNode(studentName));
    newLi.appendChild(deleteButton);
    studentList.appendChild(newLi);

    students[studentName] = new Set();
    document.getElementById("studentName").value = "";
}

function addCourse() {
    const courseName = document.getElementById("courseName").value.toUpperCase();
    if (!courseName) {
        alert("Invalid course name.");
        return;
    }

    const courseList = document.getElementById("courseList");
    if (Array.from(courseList.children).some(li => li.textContent.includes(courseName))) {
        alert(`Course ${courseName} already exists.`);
        return;
    }

    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = courseName;
    checkbox.id = courseName;
    checkbox.onclick = () => updateStudentCourses(courseName);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Drop Course";
    deleteButton.onclick = () => dropCourse(courseName, newLi);

    newLi.appendChild(checkbox);
    newLi.appendChild(document.createTextNode(courseName));
    newLi.appendChild(deleteButton);
    courseList.appendChild(newLi);
    document.getElementById("courseName").value = "";
}

function updateCourseCheckboxes(studentName) {
    const courseList = document.getElementById("courseList");
    for (const li of courseList.children) {
        const courseName = li.textContent.replace("Drop Course", "").trim();
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.checked = studentName && students[studentName] && students[studentName].has(courseName);
    }
}

function updateStudentCourses(courseName) {
    let selectedStudent = getSelectedStudent();
    if (!selectedStudent) return;

    const isChecked = document.getElementById(courseName).checked;
    if (isChecked) {
        students[selectedStudent].add(courseName);
    } else {
        students[selectedStudent].delete(courseName);
    }
}

function getSelectedStudent() {
    const studentList = document.getElementById("studentList");
    for (const li of studentList.children) {
        const radio = li.querySelector('input[type="radio"]');
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function dropStudent(studentName, studentElement) {
    if (!confirm(`Are you sure you want to drop ${studentName} and their enrollment?`)) return;


    for (const courseName of students[studentName]) {
        const courseElement = document.getElementById(courseName);
        if (courseElement) {
            courseElement.checked = false;
        }
    }

    delete students[studentName];
    studentElement.remove();
    updateCourseCheckboxes(null);
}

function dropCourse(courseName, courseElement) {
    if (!confirm(`Are you sure you want to drop the course ${courseName}?`)) return;

    courseElement.remove();
    for (const student in students) {
        students[student].delete(courseName);
    }
}
