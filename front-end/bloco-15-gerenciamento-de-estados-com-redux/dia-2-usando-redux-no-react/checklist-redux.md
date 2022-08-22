# Checklist do react-redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [ ] npm i redux react-redux;
- [ ] npm i redux-devtools-extension;

*Criar dentro do diretório src:*
- [ ] diretório `redux`

**Criar dentro do diretório `redux`**
- [x] diretório `store`
- [x] diretório `actions`
- [x] diretório `reducers`

*Criar dentro do diretório `actions`:*
- [x] arquivo `index.js`.

*Criar dentro do diretório `reducers`:*
- [x] arquivo `index.js`.

*Criar dentro do diretório `store`:*
- [x] arquivo `index.js`.

*Criar dentro do diretório `reducers`:*
- [x] criar os reducers necessários
- [x] criar `rootReducer` usando o `combineReducers` no arquivo index.js


exemplo:

*Seu reducer pode seguir esse modelo.*

```js
const INITIAL_STATE = {};

const nomeReducer1 = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

export default nomeReducer1;

```

```js
import { combineReducers } from 'redux';
import nomeReducer1 from './nomeReducer1';
import nomeReducer2 from './nomeReducer2';

const rootReducer = combineReducers({
  nomeReducer1,
  nomeReducer2,
});

export default rootReducer;
```

*No arquivo store/index.js:*
- [x] importar `rootReducer` e usá-lo na criação da `store`
- [x] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [x] exportar a `store`

```js
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
```

*No arquivo App.js:*
- [x] importar a `store`
- [x] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

*Na pasta actions:*
- [x] criar e exportar os actionTypes;`
- [x] criar e exportar os actions creators necessários

*Exemplo de action types (arquivo actionTypes.js)*

```js
export const USER_LOGIN = 'USER_LOGIN';
```
*Exemplo action creator*

```js
import { USER_LOGIN } from '../actions/actionTypes';
export const minhaAction = (value) => ({ type: USER_LOGIN, value });
```

*Nos reducers:*
- [x] criar os casos para cada action criada, retornando o devido estado atualizado

*Nos componentes que irão ler o estado:*
- [x] criar a função `mapStateToProps`
- [x] exportar usando o `connect`

*Nos componentes que irão modificar o estado:*
- [ ] criar a função `mapDispatchToProps`
- [x] exportar usando o `connect`

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component)
```