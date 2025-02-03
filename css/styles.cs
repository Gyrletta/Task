
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: 'Lato', sans-serif;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
}


.container {
    width: 100%;
    max-width: 600px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
}


h1 {
    text-align: center;
    color: #333;
    font-size: 2rem;
    margin-bottom: 20px;
}


form {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

form input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
}

form input[type="text"]:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}


form button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #218838;
}


ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
}

li .task-content {
    flex-grow: 1;
    margin-right: 10px;
}

li .js-done,
li .js-remove {
    width: 30px;
    height: 30px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

li .js-done {
    background-color: #28a745;
}

li .js-done:hover {
    background-color: #218838;
}

li .js-remove {
    background-color: red;
}

li .js-remove:hover {
    background-color: darkred;
}

li .js-remove img,
li .js-done img {
    width: 20px;
    height: 20px;
}