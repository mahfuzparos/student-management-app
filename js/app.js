let students = getStudents();

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let id = document.getElementById("id").value.trim();

    if (name === "" || id === "") {
        alert("Fields cannot be empty");
        return;
    }

    if (students.some(s => s.id === id)) {
        alert("Duplicate ID not allowed");
        return;
    }

    students.push({ name, id });
    saveStudents(students);
    renderStudents(students);
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveStudents(students);
    renderStudents(students);
}

function editStudent(index) {
    let newName = prompt("Enter new name:");
    if (newName) {
        students[index].name = newName;
        saveStudents(students);
        renderStudents(students);
    }
}

function searchStudent() {
    let keyword = document.getElementById("search").value.toLowerCase();
    let filtered = students.filter(s => 
        s.name.toLowerCase().includes(keyword) ||
        s.id.toLowerCase().includes(keyword)
    );
    renderStudents(filtered);
}

renderStudents(students);