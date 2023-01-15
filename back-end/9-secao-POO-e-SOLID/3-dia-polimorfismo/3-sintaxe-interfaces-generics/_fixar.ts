interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

// Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character.
interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  readAll: () => Promise<DbCharacter[]>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
}

// Crie uma classe LocalDbModel que implemente a interface IModel.
class LocalDbModel implements IModel {
  async create (character: Character) {
    const newId = db.length;
    const newCharacter = { id: newId, ...character };
    db.push(newCharacter);
    return newCharacter;
  }

  async readAll () {
    return db;
  }

  async update (id: number, character: Character) {
    db[id] = { id, ... character };
    return db[id];
  }

  async delete (id: number) {
    db[id] = { id, name: '', specialMove: '' };
    return true;
  }
}

// Crie uma classe CharacterService que recebe como dependência em seu construtor uma instância do tipo LocalDbModel e a utilize em sua lógica de negócio.
// Refatore CharacterService para que possa receber uma instância de qualquer classe que implemente a interface IModel.
class CharacterService {
  constructor(readonly model: IModel) { }

  create = async (character: Character) => {
    const newCharacter = await this.model.create(character);
    return { status: 201, message: newCharacter};
  }

  getAll = async () => {
    const characters = await this.model.readAll();
    return { status: 200, message: characters};
  }

  update = async (id: number, character: Character) => {
    const updatedCharacter = await this.model.update(id, character);
    return { status: 200, message: updatedCharacter};
  }

  delete = async (id: number) => {
    const didItDelete = await this.model.delete(id);
    return { status: 204, message: didItDelete};
  }
}

// Crie uma classe MockedDbModel que implemente IModel com uma versão mock.
class MockedDbModel implements IModel {
  async create (character: Character) {
    console.log('Creating character...');  
    return { id: 1, name: 'Peach', specialMove: 'flowers'};
  }

  async readAll () {
    console.log('Reading db...');  
    return [{ id: 1, name: 'Peach', specialMove: 'flowers'}];
  }

  async update (id: number, character: Character) {
    console.log('Updating character...');  
    return { id: 1, name: 'Peach', specialMove: 'rain of flowers'};
  }

  async delete (_id: number) {
    console.log('Deleting character...');  
    return true;
  }
}

// Verifique que a classe CharacterService pode receber uma instância tanto de LocalDbModel como de MockedDbModel.
const firstService = new CharacterService(new MockedDbModel());
const secondService = new CharacterService(new LocalDbModel());

async function teste() {
  console.log(await firstService.getAll());
  console.log(await secondService.getAll());
}

teste();

