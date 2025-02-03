
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