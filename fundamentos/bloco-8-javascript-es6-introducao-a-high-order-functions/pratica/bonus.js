// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const random = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const dragonDMG = () => {
    return random(dragon.strength, 15);
}

const warriorDMG = () => {
    return random((warrior.strength * warrior.weaponDmg), warrior.strength)
}

const mageOBJ = () => {
    if (mage.mana < 15) {
        console.log('Not enough mana...');
        return {
            damage: 0,
            mana: 0,
        }
    }
    return {
        damage: random((mage.intelligence * 2), mage.intelligence),
        mana: 15,
    }
}

const gameActions = {
    turnoWarrior: (func) => {
        const warriorDamage = func;
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },
    turnoMage: (func) => {
        const mageDamageNMana = func;
        mage.damage = mageDamageNMana.damage;
        mage.mana -= mageDamageNMana.mana;
        dragon.healthPoints -= mageDamageNMana.damage;
    },
    turnoDragon: (func) => {
        const dragonDamage = func;
        dragon.damage = dragonDamage;
        warrior.healthPoints -= dragonDamage;
        mage.healthPoints -= dragonDamage;
    },
    endTurn: () => {
        return battleMembers;
    }
}

const generateTurn = () => {
    gameActions.turnoWarrior(warriorDMG());
    gameActions.turnoMage(mageOBJ());
    gameActions.turnoDragon(dragonDMG());
    console.log(gameActions.endTurn());
}

generateTurn();
generateTurn();
generateTurn();