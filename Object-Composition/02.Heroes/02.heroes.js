function solve() {

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
            fight: function(command) {
                this.stamina--;
                console.log(`${this.name} cast ${command}!`);
            }
        }

        return state;
    }

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
            cast: function(command) {
                this.mana--;
                console.log(`${this.name} cast ${command}!`);
            }
        }

        return state;
    }

    return {
        mage,
        fighter
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);