# PulseConnect Fullstack

## Overview
PulseConnect is a fullstack application designed to facilitate blood donation requests and donor activation through push notifications. The project consists of a backend service that manages donor data and an orchestration system for activating donors, as well as a frontend application that provides a user interface for hospitals and donors.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`. 

### Backend
The backend is responsible for handling the business logic, data storage, and communication with the frontend. It is built using Python and utilizes Firebase for data storage and push notifications.

- **agents/**: Contains the logic for activating donors.
  - `donor_activation.py`: Implements the DonorActivationAgent class.
  - `orchestrator.py`: Implements the PulseOrchestrator class for coordinating agent activations.
  
- **core/**: Contains core functionalities for interacting with Firestore.
  - `firestore.py`: Functions for querying and updating Firestore data.
  
- **services/**: Contains services for sending notifications.
  - `fcm_service.py`: Handles sending push notifications to donors.
  
- **scripts/**: Utility scripts for testing and managing data.
  - `set_fcm_token.py`: Manually set FCM tokens for testing.
  - `test_phase3_flow.py`: Tests the entire backend flow.
  - `view_agent_events.py`: Displays logged agent events.
  - `view_emergencies.py`: Displays emergency records.
  - `view_users.py`: Displays user profiles with FCM status.
  
- `main.py`: Entry point for the backend application, setting up the web server and API endpoints.
- `requirements.txt`: Lists dependencies required for the backend.
- `PHASE_3_API_REFERENCE.md`: API documentation for the backend.
- `PHASE_3_COMPLETION.md`: Completion guide for the backend phase.
- `README.md`: Documentation for the backend project.

### Frontend
The frontend is built using React and TypeScript, providing a user-friendly interface for hospitals and donors.

- **src/**: Contains the source code for the frontend application.
  - `App.tsx`: Main application component.
  - `index.tsx`: Entry point for the frontend application.
  - **components/**: Reusable components used throughout the application.
    - `index.ts`: Exports various components.
  - **pages/**: Main pages of the application.
    - `index.ts`: Exports the main pages.
  - **services/**: Contains functions for making API calls to the backend.
    - `api.ts`: API call functions for emergencies and donor responses.
  - **firebase/**: Firebase configuration settings.
    - `config.ts`: Firebase API keys and project details.
  
- **public/**: Contains static assets for the frontend application.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

### Prerequisites
- Node.js and npm installed for the frontend.
- Python and pip installed for the backend.
- Firebase project set up with Cloud Messaging enabled.

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd pulseconnect-fullstack
   ```

2. **Set up the backend**
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```

3. **Set up the frontend**
   - Navigate to the frontend directory:
     ```
     cd frontend/pulse-connect-ui-main
     ```
   - Install the required npm packages:
     ```
     npm install
     ```

### Running the Application

1. **Start the backend**
   - In the backend directory, run:
     ```
     python main.py
     ```

2. **Start the frontend**
   - In the frontend directory, run:
     ```
     npm start
     ```

### Docker Setup
To run the entire application stack using Docker, use the provided `docker-compose.yml` file. Run the following command in the root directory:
```
docker-compose up
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.