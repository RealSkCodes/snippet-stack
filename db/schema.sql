CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  image_url TEXT,
  category VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
