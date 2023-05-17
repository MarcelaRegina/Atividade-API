const usersContainer = document.getElementById('users');

fetch('/api/usuarios')
  .then(response => response.json())
  .then(users => {
    const usersList = users.map(user => `<li><strong>Name:</strong> ${user.name}, <strong>Email:</strong> ${user.email}</li>`);
    usersContainer.innerHTML = `<ul>${usersList.join('')}</ul>`;
  })
  .catch(error => console.error(error));
