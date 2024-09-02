// ...............QUESTION 1...................
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>`;
});


// ..................QUESTION 2...........................//
document.addEventListener('Content', function() {
    let readMoreBtn = document.querySelector('.read-more-btn');
    let itemDetails = document.querySelector('.item-details');

    readMoreBtn.addEventListener('click', function() {
        if (itemDetails.style.display === 'none') {
            itemDetails.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            itemDetails.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
})

//...............QUESTION 3..................................//
const students = [
    { id: 0, name: 'John Doe', age: 20, grade: 'A' },
    { id: 1, name: 'Jane Smith', age: 22, grade: 'B' },
    { id: 2, name: 'Mike Johnson', age: 21, grade: 'A' },
    { id: 3, name: 'Emily Davis', age: 23, grade: 'C' },
    { id: 4, name: 'Sarah Brown', age: 20, grade: 'B' },
];

function studentTable() {
    let tableBody = document.getElementById('student-table-body');
    tableBody.innerHTML = ''; 
    students.forEach(student => {
        let row = document.createElement('tr');
        row.setAttribute('data-id', student.id);
        row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>
            <button class="edit-btn" onclick="editRow(${student.id})">Edit</button>
            <button class="delete-btn" onclick="deleteRow(${student.id})">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
});
}
function deleteRow(id) {
    let rowIndex = students.findIndex(student => student.id === id);
    if (rowIndex > -1) {
        students.splice(rowIndex, 1);
        studentTable();
    }
}

function editRow(id) {
    let student = students.find(student => student.id === id);
    if (student) {
        document.getElementById('edit-id').value = student.id;
        document.getElementById('edit-name').value = student.name;
        document.getElementById('edit-age').value = student.age;
        document.getElementById('edit-grade').value = student.grade;
        document.getElementById('edit-form').style.display = 'block';
    }
}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let id = parseInt(document.getElementById('edit-id').value, 10);
    let name = document.getElementById('edit-name').value;
    let age = parseInt(document.getElementById('edit-age').value, 10);
    let grade = document.getElementById('edit-grade').value;

    let student = students.find(student => student.id === id);
    if (student) {
        student.name = name;
        student.age = age;
        student.grade = grade;
        studentTable();
        document.getElementById('edit-form').style.display = 'none';
    }
});
document.getElementById('cancel-edit').addEventListener('click', function() {
    document.getElementById('edit-form').style.display = 'none';
});

studentTable();
