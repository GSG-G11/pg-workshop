BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(55) NOT NULL,
    location VARCHAR(55) NOT NULL
);

INSERT INTO users (name, location) VALUES
(
    'Ann',
    'Gaza City'
),
(
    'Adham',
    'Khan Younis'
);

COMMIT;