# API Cacau Trybe
---
## Contratos

### GET `/chocolates`

- **Objetivo**: Retornar uma lista com todos os chocolates cadastrados.

- **Código HTTP**: 200 - ok.

- **Body**:

```
 chocolates: [
  {
    id: 1,
    name: Mint,
    brandId: 1
  },
  {
    id: 2,
    name: Cav,
    brandId: 2
  }
 ]
```

### GET `/chocolates/:id`

- **Objetivo**: Buscar um chocolate pelo ID.

- **Código HTTP**: 200 - ok.

- **Body**:

```
chocolate: {
  id: 1,
  name: Mint,
  brandId: 1
}
```

### GET `/chocolates/brand/:brandId`

- **Objetivo**: Buscar um chocolate pelo ID da marca.

- **Código HTTP**: 200 - ok.

- **Body**:

```
chocolates: [
  {
  id: 1,
  name: Cav,
  brandId: 2
  },
  {
  id: 4,
  name: Cavalier,
  brandId: 2
  }
]
```