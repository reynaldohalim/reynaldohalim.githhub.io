<DOCTYPE html>
<html>

<!-- Test 1 Mobile Web -->
<!-- Reynaldo Halim -->
<!-- C14200130 -->

<head>
    <title>Test 1 C14200130</title>
</head>
<body>
    <style>
        body {
            background-color: darkslategrey;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .card {
            background-color: white;
            margin: 10px;
            text-align: center;
        }

        .card img {
            object-fit: cover;
        }

        .card h1 {
            margin: 15px;
        }

        .card p {
            margin: 5px;
        }
    </style>
    <h1>Test 1 Mobile Web</h1>
    <h1>Reynaldo Halim C14200130</h1>
    
    <div class="container"></div>
    
    <script>
        const container = document.querySelector('.container');

        fetch('https://randomuser.me/api?results=10')
        .then(response => response.json())
        .then(data => {
            let users = data.results;
            users.forEach(user => {
                let card = document.createElement('div');
                card.classList.add('card');

                let img = document.createElement('img');
                img.srcset = `${user.picture.medium} 320w, ${user.picture.large} 800w`;

                let name = document.createElement('h1');
                name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

                let email = document.createElement('p');
                email.textContent = user.email;

                let cell = document.createElement('p');
                cell.textContent = user.cell;

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(email);
                card.appendChild(cell);

                container.appendChild(card);
            });
        })
        .catch(error => console.log(error));
    </script>
</body>
</html>
