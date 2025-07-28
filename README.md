# Work Profile Application

A full-stack web application for creating and managing professional work profiles with user authentication.

## Features

- **User Authentication**: Register and login with secure password hashing
- **Profile Management**: Create and edit professional work profiles
- **File Upload**: Upload and manage profile pictures
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Editing**: Edit profile sections with live preview
- **User-specific Data**: Each user has their own profile data

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Axios** for API communication
- **Local Storage** for session management

### Backend
- **Spring Boot 3.2** with Java 21
- **Spring Data JPA** for database operations
- **Spring Security** for authentication
- **H2 Database** (in-memory/file-based)
- **Gradle** for build management
- **Swagger/OpenAPI** for API documentation

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Java 21
- Gradle (optional, wrapper included)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   ./gradlew build
   ```

3. Start the backend server:
   ```bash
   ./gradlew bootRun
   ```

The backend API will be available at `http://localhost:8080`

### Default User Account

A default user account is automatically created:
- **Username**: `demo`
- **Password**: `password123`
- **Email**: `demo@example.com`

## API Documentation

Once the backend is running, you can access:
- **Swagger UI**: `http://localhost:8080/swagger-ui.html` - Interactive API documentation
- **OpenAPI JSON**: `http://localhost:8080/api-docs` - Raw API specification
- **H2 Database Console**: `http://localhost:8080/h2-console`
- **Health Check**: `http://localhost:8080/api/health`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Dashboard
- `GET /api/dashboard/profiles` - Get all public profiles
- `GET /api/dashboard/profile/{username}` - Get public profile by username
- `GET /api/dashboard/profile/{username}/complete` - Get complete profile (requires authentication)

### Profile Management
- `GET /api/profile` - Get complete profile data (requires authentication)
- `PUT /api/profile` - Update complete profile data (requires authentication)

### Individual Sections
- `GET /api/profile/personal-info` - Get personal information
- `PUT /api/profile/personal-info/{id}` - Update personal information
- `GET /api/profile/experience` - Get work experience
- `PUT /api/profile/experience/{id}` - Update work experience
- `GET /api/profile/education` - Get education history
- `PUT /api/profile/education/{id}` - Update education history
- `GET /api/profile/skills` - Get skills
- `PUT /api/profile/skills/{id}` - Update skills
- `GET /api/profile/projects` - Get projects
- `PUT /api/profile/projects/{id}` - Update projects

### File Management
- `POST /api/images/upload` - Upload profile picture
- `GET /api/images/{filename}` - Get profile picture
- `DELETE /api/images/{filename}` - Delete profile picture

## Usage

### Authentication
1. **Register**: Create a new account with username, email, and password
2. **Login**: Sign in with your credentials
3. **Session Management**: Your session is automatically maintained using localStorage
4. **Logout**: Click the logout button to sign out

### Dashboard
1. **Browse Profiles**: View all public profiles on the dashboard
2. **Profile Cards**: Each profile shows name, title, location, and summary
3. **View Profile**: Click "View Profile" to see detailed profile information
4. **Public Access**: Anyone can view profiles without authentication

### Profile Management
1. **View Profile**: After login, your professional profile is displayed
2. **Edit Profile**: Click the "Edit Profile" button to modify any section
3. **Save Changes**: Changes are automatically saved to the backend
4. **Profile Picture**: Upload a profile picture using the file upload feature
5. **User-specific Data**: Each user sees only their own profile data
6. **Edit Access**: Only profile owners can edit their own profiles

## Security Features

- **Password Hashing**: Passwords are encrypted using BCrypt
- **Token-based Authentication**: Simple token system for session management
- **CORS Configuration**: Proper CORS setup for frontend-backend communication
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: File type and size validation

## Database Schema

### Users Table
- `id` - Primary key
- `username` - Unique username
- `email` - Unique email address
- `password` - Hashed password
- `full_name` - User's full name
- `active` - Account status
- `role` - User role

### Profile Tables
- `personal_info` - Personal information with user relationship
- `experience` - Work experience entries
- `education` - Education history
- `skills` - Skills and competencies
- `projects` - Project portfolio

## Customization

### Adding New Sections
1. Update the TypeScript interfaces in `frontend/src/types/ProfileData.ts`
2. Create a new component in `frontend/src/components/`
3. Add the corresponding backend entity, repository, service, and controller
4. Update the profile controller to include the new section

### Styling
- The application uses Tailwind CSS for styling
- Custom colors are defined in `tailwind.config.js`
- Components can be styled by modifying the className attributes

## Development

### Project Structure
```
my-work-profile/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── types/          # TypeScript interfaces
│   │   └── App.tsx         # Main application
│   └── package.json
├── backend/                 # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/workprofile/
│   │       ├── controller/ # REST controllers
│   │       ├── entity/     # JPA entities
│   │       ├── repository/ # Data repositories
│   │       ├── service/    # Business logic
│   │       └── config/     # Configuration
│   └── build.gradle
└── README.md
```

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure the backend is running on port 8080
2. **Authentication Errors**: Check that the token is being sent in Authorization header
3. **File Upload Issues**: Verify file size and type restrictions
4. **Database Issues**: Check H2 console for data integrity

### Logs
- Backend logs are available in the console where you started the application
- Frontend errors are shown in the browser console
- Network requests can be monitored in browser developer tools

## Future Enhancements

- JWT token implementation for better security
- Email verification for new accounts
- Password reset functionality
- Social media login integration
- Profile sharing and public URLs
- Advanced search and filtering
- Export profile to PDF
- Multiple profile templates 