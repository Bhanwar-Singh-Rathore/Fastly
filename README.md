# **Fastly: Role-Based Access Control (RBAC) Dashboard**

**Fastly** is an intuitive and secure **Role-Based Access Control (RBAC)** user interface designed to manage users, roles, and permissions efficiently. The project is built to showcase creativity, technical expertise, and problem-solving skills, offering a robust platform for user and permission management.

---

## **🎯 Objective**

The primary objective of **Fastly** is to provide a user-friendly admin dashboard where administrators can:

- Manage users, including creating, editing, and deleting accounts.
- Assign roles and define permissions for each user.
- Perform secure operations ensuring that users only access functionalities they are authorized for.

This project is a submission for evaluating creativity, understanding, and technical skills in building an RBAC system.

---

## **✨ Key Features**

### **Authentication and Authorization**
- Secure user login and session management using **Clerk** for authentication.
- Role-based permission checks to restrict unauthorized access.

### **User Management**
- Create, view, edit, and delete users.
- View detailed user information, including roles and permissions.

### **Role Management**
- Define custom roles with specific permissions.
- Assign roles to users dynamically.


### **Responsive Design**
- Fully responsive UI that adapts to both mobile and desktop views.
- Sidebar toggles automatically based on screen size for an optimal user experience.

### **Interactive UI**
- Dynamic and interactive dashboard with seamless navigation.
- Components include modals, table views, and inline editing.

---

## **💻 Technologies Used**

### **Frontend**
- **Framework**: React.js with Next.js for SSR (Server-Side Rendering).
- **Styling**: Tailwind CSS for efficient and customizable UI design.
- **Icons**: Lucide-react for modern and intuitive icons.

### **Authentication**
- **Library**: Clerk for secure and user-friendly authentication.

### **Backend**
- **Database**: 
  - **ORM**: Prisma for schema and database management.
  - - **UplaodThing**:  for photos.
  - **Database**: NeonDB, a modern, cloud-native PostgreSQL database.
- **API**: Next.js API routes for CRUD operations.

### **Other Tools**
- **Version Control**: Git and GitHub for collaboration and source code management.
- **Deployment**: Deployed using **Vercel** for global reach and scalability.

---

## **📂 Project Structure**

```plaintext
fastly/
├── prisma/                 # Prisma schema and database migrations
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── (main)/         # Main app features (authentication, dashboard, etc.)
│   │   │   ├── auth/       # Authentication pages (sign-in, sign-up)
│   │   │   ├── contact/    # Contact management pages
│   │   │   ├── dashboard/  # Dashboard components and pages
│   │   │   ├── user/       # User management pages
│   │   │   ├── layout.tsx  # Global layout components
│   │   │   ├── loading.tsx # Loading states
│   ├── components/         # Reusable components
│   ├── lib/                # Library files (middleware, helpers, etc.)
├── .env                    # Environment variables
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation


# Clone the repository
git clone https://github.com/Bhanwar-Singh-Rathore/fastly
cd fastly

# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the root directory and add the following:
DATABASE_URL=your_neondb_connection_string
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev

