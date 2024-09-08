
# ISTOKY

API para controle de estoque de uma empresa de pequeno ou médio porte.


## Autores

- [@Marllon-Wendel2](https://github.com/Marllon-Wendel2)


## Documentação da API

#### END POINTS:
``
(LILINK)
``




## Funcionalidades

- Controle de usuarios
- Controle do estoque
- Authenticação
- Conexão a postgres(recomendado) ou a um banco de dado SQL


## Stack utilizada

**Banco de dados:** Postgress

**Back-end:** Node, Express


## Instalação


Instale Istoky com npm

```bash
  npm install
  npm run dev
```
### Configure seu banco de dados
````
Link para modelagem do dados:

https://lucid.app/lucidchart/b116981e-9a7b-4165-93ec-48393cd4a5c6/edit?viewport_loc=-11%2C-11%2C1296%2C1560%2C0_0&invitationId=inv_80b15e95-32ba-4aec-8b71-405591e03eb3

````


    
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`STRING_DB`
String de acesso para conectar a um banco local de dados.

`SEGREDO`
Uma secretKey para geração de token ao relizar a autenticação.

