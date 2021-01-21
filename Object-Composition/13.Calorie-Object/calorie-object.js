function calorie(products) {
    const foodCalories = {}

    for (let i = 0; i < products.length; i+= 2) {
        const product = products[i];
        const quantity = Number(products[i + 1]);
        foodCalories[product] = quantity;
    }

    console.log(foodCalories);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])