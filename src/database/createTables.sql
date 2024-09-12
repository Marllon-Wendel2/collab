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

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ,
    group_id INTEGER REFERENCES groups(id),
    description VARCHAR(255) NOT NULL,
    price_buy DECIMAL(10, 2) NOT NULL,
    price_seller DECIMAL(10, 2) NOT NULL
);

INSERT INTO users (id, name, cpf_cnpj, email, password, salPassword, date_created, last_login, role) VALUES
(1, 'Alice Silva', '123.456.789-00', 'alice@example.com', 'password123','salteste', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'admin'),
(2, 'Bruno Souza', '987.654.321-00', 'bruno@example.com', 'password456', 'salteste', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'user'),
(3, 'Carla Pereira', '111.222.333-44', 'carla@example.com', 'password789', 'salteste', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'user');


INSERT INTO grouups (id, description, date_created) VALUES
(1, 'Eletrônicos', CURRENT_TIMESTAMP),
(2, 'Roupas', CURRENT_TIMESTAMP),
(3, 'Alimentos', CURRENT_TIMESTAMP);

INSERT INTO produtos (user_id, group_id, description, price_buy, price_seller) VALUES
(1, 1, 'Smartphone', 500.00, 700.00),
(2, 2, 'Camiseta', 20.00, 35.00),
(3, 3, 'Chocolate', 2.00, 5.00),
(1, 2, 'Calça Jeans', 50.00, 80.00),
(2, 1, 'Laptop', 1000.00, 1500.00);