


let users = JSON.parse(localStorage.getItem('users')) || [];




const userForm = document.getElementById('userForm');

if (userForm) {

  userForm.addEventListener('submit', function (e) {

    e.preventDefault();





    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const userId = document.getElementById('userId').value;





    const user = {

      name: name,

      email: email,

      id: userId

    };





    users.push(user);





    localStorage.setItem('users', JSON.stringify(users));





    userForm.reset();
=======
>>>>>>> 4386adbe797e0106485e3911704b8ef20302b232





const userForm = document.getElementById('userForm');

<<<<<<< HEAD
  });

}
=======
if (userForm) {

  userForm.addEventListener('submit', function (e) {

    e.preventDefault();
>>>>>>> 4386adbe797e0106485e3911704b8ef20302b232





<<<<<<< HEAD
const userTableBody = document.getElementById('userTableBody');

if (userTableBody) {



  userTableBody.innerHTML = '';




=======
    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const userId = document.getElementById('userId').value;





    const user = {

      name: name,

      email: email,

      id: userId

    };





    users.push(user);





    localStorage.setItem('users', JSON.stringify(users));





    userForm.reset();





    window.location.href = 'users.html';

  });

}



const userTableBody = document.getElementById('userTableBody');

if (userTableBody) {



  userTableBody.innerHTML = '';
>>>>>>> 4386adbe797e0106485e3911704b8ef20302b232

  users.forEach(user => {

    const row = document.createElement('tr');

    row.innerHTML = `
            
            <td>${user.name}</td>
            
            <td>${user.email}</td>
            
            <td>${user.id}</td>
            
            `;

    userTableBody.appendChild(row);

  });

}