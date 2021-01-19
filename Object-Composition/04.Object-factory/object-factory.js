function objFactory(jsonInput) {
    const parsedObj = JSON.parse(jsonInput);

    const newObj = parsedObj.reduce((acc, curr) => {
        return {...acc, ...curr};
    },{})

    console.log(newObj);
}

objFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)