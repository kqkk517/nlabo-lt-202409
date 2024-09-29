function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Tetsuya', 'Akihiro', 'Tatsuo', 'Masamune']);
    }, 2000);
  });
}

async function displayUsers() {
  console.log('loading...');
  const users = await fetchUsers();
  console.log(users);
}

displayUsers();
