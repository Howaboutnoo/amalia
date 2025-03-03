body {
    background: url('https://wallpaperaccess.com/full/1896492.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #ddd;
    font-family: 'Garamond', serif;
    text-align: center;
    animation: fadeIn 1.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

header {
    background: rgba(0, 0, 0, 0.85);
    padding: 20px;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: slideDown 1s ease-out;
    border-bottom: 3px solid #c69b6d;
}

@keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 20px;
}

nav ul li a {
    color: #c69b6d;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
    color: gold;
}

.banner {
    padding: 50px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    max-width: 600px;
    margin: 40px auto;
}

button {
    background: linear-gradient(45deg, #c69b6d, #a87e4e);
    border: none;
    padding: 12px 25px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    color: #fff;
}

button:hover {
    background: linear-gradient(45deg, #a87e4e, #7a5a3a);
    transform: scale(1.1);
}

form input {
    display: block;
    margin: 10px auto;
    padding: 12px;
    width: 280px;
    border: 2px solid #c69b6d;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
}

footer {
    margin-top: 50px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    border-top: 3px solid #c69b6d;
}
