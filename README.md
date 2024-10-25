# Snippet Stack

**Snippet Stack** is a full-stack note-taking app for organizing notes by category. You can store notes for various topics like Python, React, JavaScript, etc., each with a title, description, category, and image. Notes are saved in a PostgreSQL database and managed with an Express.js server.

## Features

- **Create Notes**: Add notes with a title, description, category, and image upload.
- **View Notes**: Each note is displayed as a card in homepage with a title, an image and timestamp.
- **Category Filtering**: Use the category navbar to filter notes by category.
- **View Note Details**: Click on a note card to view its details in a modal which includes description.
- **Delete Notes**: Remove notes easily, with changes reflected immediately in front end and the sql backend.

## Technology Stack & Dependencies

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Image Storage**: Cloudinary
- **NPM Packages**:
  - `express`: 4.21.1 - For building the server.
  - `pg`: 8.13.0 - For PostgreSQL database connection.
  - `body-parser`: 1.20.3 - To handle form data.
  - `cors`: 2.8.5 - To enable Cross-Origin Resource Sharing.
  - `dotenv`: 16.4.5 - To manage environment variables.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RealSkCodes/snippet-stack.git
   cd snippet-stack
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Environment Variables**:

   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Replace the placeholder values in .env with your PostgreSQL database configuration details (see Database Setup below).

4. **Database Setup**:

   Ensure you have PostgreSQL installed and configured on your system.

   - Create a new PostgreSQL database (e.g., `notes_db`).
   - Update `.env` with your PostgreSQL credentials:

     ```plaintext
     DB_USER=your_database_user
     DB_HOST=localhost
     DB_NAME=notes_db
     DB_PASSWORD=your_database_password
     DB_PORT=5432
     ```

5. **Run the application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:<your_port>` (e.g., `http://localhost:3000` if `PORT=3000` in your .env file).

## Future Enhancements

**Search Notes Feature**: We plan to implement a search functionality to allow users to quickly find specific notes based on keywords or tags. Stay tuned for this upcoming feature!
