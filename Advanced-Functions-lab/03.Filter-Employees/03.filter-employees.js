function filterEmployees(employeesJSON, criteria) {
    const employees = JSON.parse(employeesJSON);
    const criteriaKey = criteria.split('-')[0];
    const criteriaVal = criteria.split('-')[1];
    let counter = 0;

    for (const [key, value] of Object.entries(employees)) {

        const searchingVal = value[criteriaKey]
        if (searchingVal === criteriaVal) {
            const firstName = value.first_name;
            const lastName = value.last_name;
            const email = value.email;
            console.log(`${counter}. ${firstName} ${lastName} - ${email}`);
            counter++
        }
    }
}

console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
))