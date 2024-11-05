document.getElementById('getUsersBtn').addEventListener('click', getUsers);

function getUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const users = data.results;

            let usersHTML = '';

            users.forEach(user => {
                const picture = user.picture.large;
                const cell = user.cell;
                const country = user.location.country;
                const email = user.email;
                const coordinates = `Latitude: ${user.location.coordinates.latitude}, Longitude: ${user.location.coordinates.longitude}`;

                usersHTML += `
                    <div class="user-box">
                        <img src="${picture}" alt="User Picture" class="user-picture">
                        <div class="user-data">
                            <p><strong>Cell:</strong> ${cell}</p>
                            <p><strong>Country:</strong> ${country}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Coordinates:</strong> ${coordinates}</p>
                        </div>
                    </div>
                `;
            });

            document.getElementById('usersContainer').innerHTML = usersHTML;
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}
