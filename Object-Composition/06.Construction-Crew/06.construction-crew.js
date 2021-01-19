function modified(input) {
    const requiredWater = (0.1 * input.weight) * input.experience;

    if (input.dizziness === true) {
        input.levelOfHydrated += requiredWater;
        input.dizziness = false;
    }

    return input;
}

console.log(modified({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}))