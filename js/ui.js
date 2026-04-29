function renderStudents(students) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((s, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${s.name} (${s.id})
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}