CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cpf_cnpj VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
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

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ,
    group_id INTEGER REFERENCES groups(id),
    description VARCHAR(255) NOT NULL,
    price_buy DECIMAL(10, 2) NOT NULL,
    price_seller DECIMAL(10, 2) NOT NULL
);