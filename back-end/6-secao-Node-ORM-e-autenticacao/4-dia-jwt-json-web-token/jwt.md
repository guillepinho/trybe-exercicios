# JWT

### O que é JWT?

**JSON Web Token** é um padrão de mercado que define um token em formato JSON, no qual as informações são trocadas de forma leve, segura e autocontida.

---

### Características

- <u>LEVEZA</u>: Por adotar o JSON como base, para troca de informações. Human-friendly.
- <u>AUTOCONTIDO</u>: Traz consigo, todas as informações necessárias para decriptar o mesmo.
- <u>SEGURO</u>: Valida a integridade do token utilizando algoritmos de hashing.

---

### Quando utilizar?

- Troca de informações entre aplicações; e
- Mecanismos de autenticação e autorização.

---

### Como possibilitam mais segurança?

É criptografado através de algoritmos, no qual os principais são:

- HMAC - usa chave secreta que criptografa e descriptografa.
- RSA - Par de chaves pública/privada.

---

### Quais elementos compõe um JWT?

O resultado final é uma hash dividida em 3 partes:

- <u>Header</u>: eyeyeasaBQASDascasEWQe14214
- <u>Payload</u>: eyeCEAEASOIDASDAUOOI1ON0DSdasdasgQ
- <u>Signature</u>: 2Y35_wa9is90jsahoiasue812jnASDewa

<u>**Resultado Final**</u>: eyeyeasaBQASDascasEWQe14214.eyeCEAEASOIDASDAUOOI1ON0DSdasdasgQ.2Y35_wa9is90jsahoiasue812jnASDewa

---

