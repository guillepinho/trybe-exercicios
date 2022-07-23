import React, { Component } from 'react'
import Nome from './formComponentes/Nome';
import Email from './formComponentes/Email';
import Cpf from './formComponentes/Cpf';
import Endereco from './formComponentes/Endereco';
import Cidade from './formComponentes/Cidade';
import Estado from './formComponentes/Estado';
import CasaApt from './formComponentes/CasaApt';
import Curriculo from './formComponentes/Curriculo';
import Cargo from './formComponentes/Cargo';
import CargoDescricao from './formComponentes/CargoDescricao';

export class Form extends Component {

  state = {
    nome: '',
    email: '',
    CPF: '',
    endereco: '',
    cidade: '',
    estado: '',
    casaApt: '',
    curriculo: '',
    cargo: '',
    cargoDescricao: '',
    result: ' ',
  }

  handleInput = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleCity = ({ target }) => {
    const { name } = target;
    const value = target.value;
    if (value[0].match(/^\d+/)) {
      this.setState({
        [name]: '',
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  check = (array) => {
    const values = Object.values(array).slice(0, -1);
    if (values.some((states) => states.length === 0)) {
      return false;
    }
    if (values[0].length < 5) { return false }
    if (values[1].length < 8) { return false }
    if (values[3].length < 10) { return false }
    return true;
  }

  submitFunc = () => {
    const { nome, email, CPF, endereco, cidade, estado, curriculo, cargo, cargoDescricao, casaApt } = this.state;
    const checker = this.check(this.state);
    if (checker) {
      this.setState({
        result: (<div><h3>Nome: <strong>{nome}</strong></h3><p>Sou registrado no CPF/MF sob o nº <strong>{CPF}</strong>, e meu e-mail é <strong>{email}</strong>.<br />Moro em um(a) <strong>{casaApt}</strong>, no <strong>{endereco}</strong>, na cidade de <strong>{cidade}</strong>, Estado do <strong>{estado}</strong>.<br />Meu último cargo exercido foi de <strong>{cargo}</strong>, em que exercia as seguintes atividades: <strong>{cargoDescricao}</strong> <br />Segue um resumo de meu currículo: <br />{curriculo}.</p></div>)
      })
    }
    else {
      alert('Ainda há dados a serem preenchidos ou algum deles está incompleto (verifique seu nome, e-mail, endereço etc.)!');
    }
  }

  clearForm = () => {
    this.setState({
      nome: '',
      email: '',
      CPF: '',
      endereco: '',
      cidade: '',
      estado: '',
      casaApt: '',
      curriculo: '',
      cargo: '',
      cargoDescricao: '',
      result: ' ',
    });
  }

  render() {
    const { nome, email, CPF, endereco, cidade, estado, curriculo, cargo, cargoDescricao, result } = this.state;
    return (
      <section>
        <div className="form">
          <fieldset id="personalData">
            <h2>Dados Pessoais</h2>
            <Nome value={nome.toUpperCase()} func={this.handleInput} />
            <Email value={email} func={this.handleInput} />
            <Cpf value={CPF} func={this.handleInput} />
            <Endereco value={endereco} func={this.handleInput} />
            <Cidade value={cidade} func={this.handleInput} func2={this.handleCity} />
            <Estado value={estado} func={this.handleInput} />
            <CasaApt func={this.handleInput} />
            <br />
          </fieldset>
          <fieldset id="lastJob">
            <h2>Dados Profissionais</h2>
            <Curriculo value={curriculo} func={this.handleInput} />
            <Cargo value={cargo} func={this.handleInput} />
            <CargoDescricao value={cargoDescricao} func={this.handleInput} />
            <br />
          </fieldset>
          <div className="buttonDiv">
            <button type="submit" className="button is-link" onClick={this.submitFunc}>Enviar Dados</button>
            <button type="" className="button is-link is-light" onClick={this.clearForm}>Limpar</button>
          </div>
        </div>
        {result}
      </section>

    )
  }
}

export default Form;