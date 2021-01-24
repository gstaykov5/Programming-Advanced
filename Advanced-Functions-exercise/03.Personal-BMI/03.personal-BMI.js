function personalBMI(name, age, weight, height) {
    const bmi = Math.round(weight / (height / 100) ** 2);

    const info = {
        name,
        personalInfo: {
            age,
            weight,
            height,
        },
        BMI: bmi,
        status: calcBMI(bmi)
    }

    if (info.status == 'obese') {
        info.recommendation = 'admission required';
    }

    function calcBMI(bmi) {
        if (bmi < 18.5) {
            return 'underweight'
        } else if (bmi < 25) {
            return 'normal'
        } else if (bmi < 30) {
            return 'overweight'
        } else if (bmi >= 30) {
            return 'obese'
        }
    }

    return info
}


console.log(personalBMI('Peter', 33, 175, 183))
