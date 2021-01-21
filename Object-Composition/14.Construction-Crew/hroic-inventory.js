function inventory(heroes) {
    const storedHeroes = [];

    heroes.forEach(h => {
        const [name, level, ...items] = h.split(' / ');
        if (items != undefined) {
            const obj = {
                name,
                level,
                items
            }
            storedHeroes.push(obj);
        }
    });

    return JSON.stringify(storedHeroes)
}
console.log(inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]))