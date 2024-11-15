
## How it Works
**Frontend**:
- The `ContactForm` component handles creating new contacts, using Material UI components
- The `ContactsTable` component displays all contacts in a table, with edit/delete buttons
- The frontend communicates with the backend API to perform CRUD operations

**Backend**:
- The API uses Express.js and the `pg` library to interact with PostgreSQL
- `Backend.js` defines the API endpoints for creating, retrieving, updating, and deleting contacts
- It includes error handling for issues like missing fields or duplicate emails

## Challenges
1. **Duplicate Emails**: Added a unique constraint on the `email` column to prevent duplicates.
2. **Form Validation**: The frontend uses `required` on form fields. The backend also validates for missing fields.
3. **CRUD Operations**: The backend API fully implements CRUD for contacts using SQL queries.
4. **Error Handling**: Both frontend and backend have error handling - frontend shows general errors, backend returns appropriate status codes and messages.
