async function fetchGreeting(){
    const response = await fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: 'query {greeting}',
        }),
    });

    const body = await response.json();
    // same with --- const {data} = await response.json();
    console.log("body:", body);//just print
    return body.data.greeting;
    
}

fetchGreeting().then((greeting) => {
    document.getElementById('greeting').textContent = greeting;
});