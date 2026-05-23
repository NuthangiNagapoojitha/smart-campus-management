CREATE DATABASE IF NOT EXISTS smart_campus;

USE smart_campus;

-- Users table (bcrypt hashes require 60 chars; 255 gives headroom)
CREATE TABLE IF NOT EXISTS users (
  id       INT          PRIMARY KEY AUTO_INCREMENT,
  name     VARCHAR(100) NOT NULL,
  email    VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role     VARCHAR(50)  NOT NULL
);