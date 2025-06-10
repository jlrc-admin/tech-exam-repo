# Instructions for the Technical Exam

📦 Submission Instructions
  - Create a folder named using the format:
    - [your-full-name]_[exam-type]
    - e.g. juan-dela-cruz_frontend / maria-gonzales_backend
  
  - Push your solution to https://github.com/horheJLRC/tech-exam-submission.git.

  - Include a README with setup instructions (install, run, seed if applicable).

  - Highlight any completed bonus tasks in your README.

  - Optional: Include screenshots of working UI or Postman requests if time allows.

---

## 🧩 Front-end Exam - 1h 20mins
  - Framework to use: ReactJS or NextJS. (Modern style)
  - Own choice of tech for HTTP Requests. (Axios, Fetch API)
  - TypeScript. (Optional, but a plus)
 
---

### 🌐 Available End Points:
  ⚠️ *PLEASE TAKE NOTE OF THE DYNAMIC PARAMETERS AND DETAILS*  
  ⚠️ *THE IP ADDRESS WILL BE PROVIDED DURING THE EXAM*

  #### Users
  - http://\<IP_ADDRESS\>:7878/users -> Fetch all Users.
  - http://\<IP_ADDRESS\>:7878/users/:userId -> Fetch User by userId.

  #### Tutors
  - http://\<IP_ADDRESS\>:7878/tutors -> Returns all Tutors with its User details.
  - http://\<IP_ADDRESS\>:7878/tutors/:userId -> Returns a Tutor by using userId.
  - http://\<IP_ADDRESS\>:7878/tutors/:tutorId/students -> Returns the Students of a Tutor by using tutorId.

  #### Students
  - http://\<IP_ADDRESS\>:7878/students -> Returns all Students with its User details.
  - http://\<IP_ADDRESS\>:7878/students/:userId -> Returns a Student by using userId.
  - http://\<IP_ADDRESS\>:7878/students/:studentId/tutor -> Returns the Tutor of a Student by using studentId.

---

### 📌 Requirements

#### 🎯 ---- Main ----
  1.) Fetch data from the provided endpoints (your choice of HTTP request library/tech).
  
  2.) Component rendering:
  - List Display:
    
    - Display separate lists for Users, Tutors, and Students.
      
    - For each list item, only display First Name and Last Name.

    - When a list item is clicked, display the rest of the details (either in a modal or by routing to another page).

  - Navigation Bar:

    - Include a navigation bar with your full name aligned to the left.

    - Add a Search Bar to filter Users, Tutors, and Students.

    - The list should dynamically update as the user types in the search bar.

  - Buttons or Links:

    - Provide buttons or links to switch between lists (Users, Tutors, Students).

  3.) Error Handling

  - Handle 404 and 500 errors gracefully.

  - Display appropriate error messages to the user (e.g., "Failed to fetch data. Please try again").

  4.) Simple Styling:

  - Apply simple styling to organize the layout (centering, grouping, etc.).

#### 🎁 ---- Bonus / Extras ----
  1.) Tailwind CSS:
  
  - Use Tailwind CSS for styling.

  2.) Pagination / Infinite Scroll:
  
  - Implement either Pagination (10 items per page) or Infinite Scroll.
    
  3.) Semantic HTML Tags:
    
  - Use semantic HTML tags as part of SEO best practices.

---

### 📋 Criteria
  - Modularity: Code is organized into clear, reusable components.

  - Clarity: Code is easy to read, with descriptive variable and function names.

  - Maintainability: The structure allows for easy updates and extensions in the future.

  - Comments: Key sections of the code are well-documented with comments to explain logic.

  - Error Handling: Proper error handling is implemented, with informative messages provided to the user.

  - Data Display: All data fetched from the API is correctly rendered and corresponds to the expected output.

  - Bonus Completion: Optional stretch goals are attempted or completed, showing deeper understanding and initiative.

---

## 🔌 Back-end Exam - 2h 20mins
  - Framework to use: ExpressJS or NestJS with Prisma.

---

### 🔗 Database Access
  - Provider: postgresql
  - User: postgres
  - Password: *⚠️ Will be provided during the exam*
  - Host: 192.168.1.10
  - Port: 5432
  - Database: jlrc-exam-db

---

### 🧱 Provided Models

```text
model Role {
  id             Int      @unique
  name           String   @unique

  users          User[]
}

model User {
  id             Int      @id @default(autoincrement())
  firstName      String
  lastName       String
  email          String   @unique
  password       String
  country        String
  age            Int
  sex            String
  nativeLanguage String

  roleId         Int
  role           Role     @relation(fields: [roleId], references: [id])

  tutor          Tutor?   @relation("UserToTutor")
  student        Student? @relation("UserToStudent")
}

model Tutor {
  id             Int      @id @default(autoincrement())
  yearsOfExp     Int

  userId         Int      @unique
  user           User     @relation("UserToTutor", fields: [userId], references: [id])

  students       Student[]
}

model Student {
  id             Int      @id @default(autoincrement())
  currentLevel   Int

  userId         Int      @unique
  user           User     @relation("UserToStudent", fields: [userId], references: [id])

  tutorId        Int?
  tutor          Tutor?   @relation(fields: [tutorId], references: [id])
}
```

---

### 📌 Requirements

#### 🎯 ---- Main ----
1.) Seed Data
Insert the following rows into the Role table:
```ts
admin with id = 1

tutor with id = 2

student with id = 3
```

2.) Add a Lesson model
- Define a new Lesson model with the following:

  - title (String)

  - description (String)

  - A relation to the User who created the lesson — Only users with the admin role (id: 1) should be allowed to create lessons — assume this is enforced at the application level.
  
  - A many-to-many relation with Students to allow enrollments.

  - A many-to-many relation with Tutors to allow assigning tutors to lessons.

3.) Update existing models as needed
- Make any required changes to the existing models to support these relationships.

4.) CRUD Operations (Functionalities)
  - Users
    - Create Admin, Tutor, and Student users (with appropriate role IDs)

  - Lessons:
    - ADMIN (⚠️ *Accessible by Admins only*)
      - **Create**, **Update**, or **Delete** Lessons (⚠️ Prevent creation of duplicate lessons — e.g., by title).
        
      - **Assign** or **Remove** Tutors from Lessons
        
    - Students (⚠️ *Accessible by Students only*)
      - Enroll into a Lesson (⚠️ A student cannot enroll in the same lesson more than once)

      - Opt out of a Lesson

5.) Schema Expectations

  - Use Prisma schema syntax

  - Use @relation, onDelete, and foreign keys properly

  - Explicit join models allowed and encouraged when needed

---

#### 🎁 ---- Bonus / Extras ----

1.) Lesson Status Enum
- Add a status field to Lesson with enum values:

  - DRAFT, PUBLISHED, ARCHIVED

- Enforce that only lessons with status PUBLISHED can be enrolled into.


2.) Prevent Over-Assignment
- Limit the number of tutors that can be assigned to a single lesson (e.g., max 3).

-  Enforce this in your API logic.

3.) Logging / Auditing
- Create a LessonLog model to store changes to lessons:
  - lessonId, action, performedByUserId, timestamp. (Admins only)
    - e.g. Updated the title / description of a lesson. 

4.) Advanced Querying
- Add an endpoint:
  - "Get all lessons a student is enrolled in, including assigned tutors and lesson status."

5.) Soft Deletes
  - Implement soft deletes for Lesson:
    - Add an isActive: Boolean field
    - Add a deletedAt: DateTime? field (optional timestamp for soft deletion)

  - Filter out soft-deleted lessons from queries.
    - e.g. Allow querying of both active and deleted lessons based on flags.

---

### 📋 Criteria
  - Schema Design: Prisma models are well-structured, with correct use of relations, field types, and constraints.

  - Business Logic: Role-based rules (admin, tutor, student) are respected and enforced at the application level.

  - CRUD Functionality: Required create, read, update, and delete operations work as expected, with proper validation.

  - Code Quality: Code is clean, readable, and logically organized, following good backend architecture practices.

  - Error Handling: Errors are handled gracefully, with clear and informative responses.

  - Bonus Completion: Optional stretch goals are attempted or completed, showing deeper understanding and initiative.
