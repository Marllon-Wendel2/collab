CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cpf_cnpj VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    salPassword VARCHAR (255) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    role VARCHAR(50),
    date_deleted TIMESTAMP
);

CREATE TABLE grouups (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ProdutoItoky (
    id UUID PRIMARY KEY,
    produto VARCHAR(255) NOT NULL,
    description TEXT,
    price_buy NUMERIC(10, 2) NOT NULL,
    price_seller NUMERIC(10, 2) NOT NULL,
    dataDeValidade DATE,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_retired TIMESTAMP,
    localizacao VARCHAR(255)
);