import * as readlineSync from "readline-sync";

// Define the Weapon interface
interface Weapon {
  name: string;
  damage: number;
}

// Define the Character class
class Character {
  constructor(
    public name: string,
    public health: number,
    private weapon: Weapon
  ) {}

  attack(): number {
    console.log(`${this.name} attacks with ${this.weapon.name}!`);
    return this.weapon.damage;
  }

  takeDamage(damage: number): void {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage. Health: ${this.health}`);
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}

// Define the Enemy class
class Enemy extends Character {
  constructor(name: string, health: number, weapon: Weapon) {
    super(name, health, weapon);
  }
}

// Define the Player class
class Player extends Character {
  constructor(name: string, health: number, weapon: Weapon) {
    super(name, health, weapon);
  }

  chooseAction(): string {
    const actions = ["Attack", "Defend", "Run"];
    const index = readlineSync.keyInSelect(actions, "Choose an action:");
    return actions[index];
  }
}

// Define the Game class
class Game {
  private player: Player;
  private enemy: Enemy;

  constructor(player: Player, enemy: Enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  start(): void {
    console.log(`A wild ${this.enemy.name} appears!`);
    while (this.player.isAlive() && this.enemy.isAlive()) {
      const action = this.player.chooseAction();
      switch (action) {
        case "Attack":
          this.enemy.takeDamage(this.player.attack());
          if (this.enemy.isAlive()) {
            this.player.takeDamage(this.enemy.attack());
          }
          break;
        case "Defend":
          console.log(`${this.player.name} defends.`);
          break;
        case "Run":
          console.log(`${this.player.name} runs away.`);
          return;
        default:
          console.log("Invalid action.");
          break;
      }
    }

    if (this.player.isAlive()) {
      console.log(`${this.player.name} wins!`);
    } else {
      console.log(`${this.enemy.name} wins!`);
    }
  }
}

// Initialize weapons
const sword: Weapon = { name: "Sword", damage: 10 };
const axe: Weapon = { name: "Axe", damage: 12 };

// Initialize characters
const player = new Player("Hero", 100, sword);
const enemy = new Enemy("Goblin", 50, axe);

// Start the game
const game = new Game(player, enemy);
game.start();
