CREATE DATABASE quizgame;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS questions (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  description VARCHAR NOT NULL
);

DROP TABLE questions;

CREATE TABLE IF NOT EXISTS answers (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  description VARCHAR NOT NULL,
  correct BOOLEAN NOT NULL,
  question_id UUID NOT NULL,
  FOREIGN KEY(question_id) REFERENCES questions(id)
);
