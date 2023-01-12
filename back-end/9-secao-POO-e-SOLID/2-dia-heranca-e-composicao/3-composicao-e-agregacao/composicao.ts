class Profile {
  private name: string;
  private email: string;

  public setName(name: string) {
    this.name = name;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public toString(): string {
    return `name - [${this.name}] - email - [${this.email}]`;
  }
}

class SocialMediaAccount {
  // Cria nossa composição com o perfil
  private profile = new Profile();

  public editProfile(name: string, email: string) {
    this.profile.setName(name);
    this.profile.setEmail(email);
  }

  public printProfile() {
    console.log(this.profile.toString());
  }
}

const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();

// A herança tem por característica obter todas as propriedades da classe principal. Com isso, você obtém todos os atributos e métodos, deixando a classe secundária mais especializada e específica. Isso quer dizer que se você precisar alterar algo na classe principal você vai refletir isso na sua classe secundária.

// Por outro lado, a composição permite que você realize alterações na classe principal sem afetar as demais envolvidas ou correr o risco de comprometer algum comportamento.