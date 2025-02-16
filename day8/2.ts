class Player {
    name: string;
    health: number;
    power: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    damage(power: number): void {
        this.health -= power;
    }

    useItem(item: { health: number, power: number }): void {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus(): void {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem(): { health: number, power: number } {
        const health = Math.random() > 0.5 ? 10 : 0;
        const power = health === 0 ? 10 : 0;
        return { health, power };
    }

    start(): void {
        let turn = 0;
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(`Turn ${turn + 1}:`);
            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log(`After using items:`);
            this.player1.showStatus();
            this.player2.showStatus();

            if (turn % 2 === 0) {
                this.player2.damage(this.player1.power);
                console.log(`${this.player1.name} shoots ${this.player2.name}`);
            } else {
                this.player1.damage(this.player2.power);
                console.log(`${this.player2.name} shoots ${this.player1.name}`);
            }

            turn++;
        }

        const winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
        console.log(`The winner is ${winner}!`);
    }
}

// Example usage:
const player1 = new Player('Player A');
const player2 = new Player('Player B');
const game = new ShootingGame(player1, player2);
game.start();