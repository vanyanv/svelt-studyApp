# Svelte To-Do List App

A simple and intuitive To-Do List application built with Svelte. This project allows users to manage their tasks efficiently by adding new tasks, marking them as completed, and deleting them. It also features persistent storage to retain tasks across sessions.

## Features

- [x] **Add new to-do items**: Create and add tasks to your to-do list.
- [x] **Mark items as completed**: Check off tasks as you complete them.
- [x] **Delete items**: Remove tasks that are no longer needed.
- [x] **Persistent Storage**: Tasks are saved and remain available even after refreshing the page.

## Additional Features

Here are some ideas for additional features that can be added to this Svelte To-Do List app, organized by increasing difficulty:

### Beginner Features

- [x] **Task Editing**: Allow users to edit existing tasks in the list.
- [x] **Task Prioritization**: Add priority levels (e.g., High, Medium, Low) to each task.
- [ ] **Task Filtering**: Implement filtering by "All," "Completed," or "Pending" tasks.
- [ ] **Task Due Dates**: Allow users to set due dates for tasks and sort by date.
- [ ] **Task Count**: Show the total number of tasks and the number of completed tasks.

### Intermediate Features

- [x] **Persistent Storage**: Store tasks in `localStorage` so they persist after page reloads.
- [ ] **Task Categories**: Add support for task categories or tags (e.g., Work, Personal).
- [ ] **Task Search**: Implement a search bar to filter tasks by name or description.
- [ ] **Undo Task Deletion**: Add an option to undo the deletion of a task.
- [ ] **Dark Mode**: Implement a theme toggle between light and dark modes.

### Advanced Features

- [ ] **Drag-and-Drop Reordering**: Allow users to reorder tasks using drag-and-drop.
- [ ] **Task Subtasks**: Enable users to create subtasks for each to-do item.
- [ ] **Notifications**: Add browser notifications for overdue tasks or tasks due soon.
- [ ] **Authentication**: Implement user authentication (e.g., using Firebase or a custom API) to allow multiple users to have their own to-do lists.
- [ ] **Real-Time Collaboration**: Allow multiple users to collaborate on a shared to-do list using a real-time backend (e.g., WebSockets or Firebase).

### Expert Features

- [ ] **Progress Tracking**: Add a progress bar or visual indicator of task completion.
- [ ] **Recurring Tasks**: Allow tasks to recur daily, weekly, or monthly.
- [ ] **Task History/Archiving**: Create a system to archive completed tasks and view past tasks.
- [ ] **Task Import/Export**: Allow users to export their task list to a file (e.g., JSON or CSV) and import tasks from a file.
- [ ] **Task API**: Build a backend API to sync tasks with a database, allowing access across multiple devices.

## Getting Started

Follow the steps below to set up and run the project locally.

### Step 1: Set Up the Svelte Project

1. Clone the Svelte project template:

   ```bash
   npx degit sveltejs/template svelte-todo-app
   ```

2. Navigate to the project directory:

   ```bash
   cd svelte-todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Once the server is running, you can view the application by navigating to `http://localhost:5000` in your browser.
