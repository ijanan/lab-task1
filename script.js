
  

  let users = JSON.parse(localStorage.getItem('users')) || [];



  

  const userForm = document.getElementById('userForm');

  if (userForm) {

    userForm.addEventListener('submit', function (e) {

      e.preventDefault();



      

      // const name = document.getElementById('name').value;

      const email = document.getElementById('email').value;

      const userId = document.getElementById('userId').value;



      

      const user = {

        // name: name,

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



    

    users.forEach(user => {

      const row = document.createElement('tr');
      // <td>${user.name}</td>

      row.innerHTML = `
            
            
            
            <td>${user.email}</td>
            
            <td>${user.id}</td>
            
            `;

      userTableBody.appendChild(row);

    });

  }