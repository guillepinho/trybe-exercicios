import React from 'react';
import EstadoFavorito from './EstadoFavorito';
import Email from './Email';

class Forms extends React.Component {
    constructor() {
        super();

        this.state = {
            estadoFavorito: '',
            nome: '',
            email: '',
            idade: 0,
            vaiComparecer: false,
            palavraChaveFavorita: '',
            foto: '',
            error: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        }, () => { this.handleError(); });
    }

    handleError() {
        const { estadoFavorito, email } = this.state;

        const error = [
            !estadoFavorito.length > 120,
            !email.match(/^\S+@\S+$/i),
        ];

        const throwError = !error.every((check) => check !== true);

        this.setState(() => ({
            error: throwError,
        }))
    }

    render() {
        return (
            <div>
                <h1>Estados e React: Ferramenta Incrível ou Reagiando a Regionalismos?</h1>
                <form className="form">

                    <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />

                    <Email value={this.state.email} handleChange={this.handleChange} />

                    <fieldset>
                        <label htmlFor="">
                            Nome
                            <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="">
                            Idade
                            <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange} />
                        </label>
                    </fieldset>


                    <label htmlFor="">
                        Adicione sua foto <span> </span>
                        <input name="foto" type="file" value={this.state.foto} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="">
                        Vai comparecer à conferência?
                        <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="">
                        Escolha sua palavra chave favorita:
                        <select name="palavraChaveFavorita" id="" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
                            <option name="estado">Estado</option>
                            <option name="evento">Evento</option>
                            <option name="props">Props</option>
                            <option name="hooks">Hooks</option>
                        </select>
                    </label>


                    <span>
                        { this.state.error ? 'Formulário com erros' : ''}
                    </span>
                </form>
            </div>
        );
    }
}

export default Forms;