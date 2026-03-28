# Comments App 💬
This is a simple comments app built with React and TypeScript. It allows users to add, edit, and delete comments. The app uses JSONBIN API to persist comments across page reloads.
## Features
- Add new comments
- Like/unlike comments
- Comments are saved using JSONBIN API
## Technologies Used
- React
- TypeScript
- Tailwind CSS
- JSONBIN API
- React Query
- Zod

## JSONBIN API Setup
Before running the app, you need to set up your own JSONBIN API credentials:

1. **Create a JSONBIN account**: Go to [jsonbin.io](https://jsonbin.io) and sign up for a free account.

2. **Get your API Key**:
   - After logging in, go to your dashboard
   - Click on "API Keys" in the left sidebar
   - Copy your Master Key (it should start with `$2a$10$`)

3. **Create a new Bin**:
   - Click "Create Bin" in your dashboard
   - Add some initial data (you can use an empty JSON object `{}`)
   - Copy the Bin ID from the URL (it should be a string like `69bdaba6aa77b81da90316b9`)

4. **Create environment file**:
   - Copy the `.env.example` file to `.env`
   - Replace the placeholder values with your actual credentials:
     ```
     VITE_JSONBIN_API_KEY=your_actual_api_key_here
     VITE_JSONBIN_BIN_ID=your_actual_bin_id_here
     ```

**⚠️ Important Security Note**: Never commit your `.env` file to version control. It contains sensitive API credentials. The `.env` file is already included in `.gitignore`.

## Getting Started
To run the app locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/bryanquille/comments-app.git
```

2. Navigate to the project directory:
```bash
cd comments-app
```

3. Install the dependencies:
```bash
npm install
```

4. Set up your JSONBIN API credentials (see JSONBIN API Setup section above)

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and go to `http://localhost:5173` to see the app in action.

## Acknowledgements
- This app was inspired by the need for a simple comment management system for personal projects.
- Thanks to the open-source community for providing resources and libraries that made this project possible.
- Special thanks to anyone who has contributed to this project or provided feedback.
- Happy coding!