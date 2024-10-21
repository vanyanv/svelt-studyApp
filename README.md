# Svelte To-Do List App

A simple and intuitive To-Do List application built with Svelte. This project allows users to manage their tasks efficiently by adding new tasks, marking them as completed, and deleting them. It also features persistent storage to retain tasks across sessions.

## Features

- [x] **Add new to-do items**: Create and add tasks to your to-do list.
- [x] **Mark items as completed**: Check off tasks as you complete them.
- [x] **Delete items**: Remove tasks that are no longer needed.
- [x] **Persistent Storage**: Tasks are saved and remain available even after refreshing the page.

## Additional Features

## Features to Understand Core Concepts of Svelte

Below are feature ideas that will help you dive deeper into Svelte’s core concepts and improve your understanding:

### 1. Two-Way Binding with Input Fields

- [x] **Feature**: Implement an edit feature for to-do items where users can click on a task and edit it directly in an input field.
- **Concept**: Use Svelte’s `bind:value` to achieve two-way binding and update data reactively.
- **Learning Outcome**: Understand how to bind data to inputs and reflect changes in real time.

### 2. Reactive Variables

- [ ] **Feature**: Display dynamic statistics such as the total number of tasks, number of completed tasks, or tasks remaining.
- **Concept**: Svelte’s reactivity automatically updates the DOM when reactive variables change.
- **Learning Outcome**: Learn how Svelte’s reactive variables work to update the UI as data changes.

### 3. Stores for Global State Management

- [ ] **Feature**: Use Svelte stores to manage the state of the entire to-do list across multiple components.
- **Concept**: Svelte stores are used for global state management, allowing data to be shared across components.
- **Learning Outcome**: Learn how to use writable, readable, and derived stores for managing global state.

### 4. Transitions and Animations

- [ ] **Feature**: Add smooth animations when tasks are added, removed, or marked as completed.
- **Concept**: Svelte provides transition functions like `transition:fade` for easy animation handling.
- **Learning Outcome**: Learn how to animate elements entering and leaving the DOM.

### 5. Custom Components

- [ ] **Feature**: Break the app into smaller reusable components (e.g., `TodoItem`, `TodoList`).
- **Concept**: Svelte encourages modular component design for better code structure and reusability.
- **Learning Outcome**: Practice passing props, handling component reactivity, and organizing code for scalability.

### 6. Context API

- [ ] **Feature**: Implement a settings panel that allows users to toggle features like dark mode or change the task order.
- **Concept**: Use Svelte’s `Context API` to pass data across components without prop drilling.
- **Learning Outcome**: Understand how to use the context API for global data sharing across components.

### 7. Reactive Statements and Logic

- [ ] **Feature**: Add conditional rendering, such as showing a message when there are no tasks or displaying a progress bar for completed tasks.
- **Concept**: Svelte’s `$:` reactive statements update variables and trigger changes based on state.
- **Learning Outcome**: Understand how to leverage Svelte’s reactivity to simplify logic in your app.

### 8. Event Handling and Custom Events

- [ ] **Feature**: Create custom events for task completion or deletion and handle them in parent components.
- **Concept**: Dispatch custom events from child components and listen for them in parent components.
- **Learning Outcome**: Learn how to communicate between components using events.

### 9. Slots for Component Composition

- [ ] **Feature**: Implement a task list where you can pass different components or templates as slots.
- **Concept**: Svelte’s slots allow for flexible component composition.
- **Learning Outcome**: Use slots to create more flexible and reusable components.

### 10. Derived Stores

- [ ] **Feature**: Use a derived store to automatically calculate the number of completed tasks or remaining tasks.
- **Concept**: Svelte’s derived stores allow you to compute values based on other reactive data.
- **Learning Outcome**: Learn how to create and use derived stores for computed values.

### 11. Asynchronous Operations

- [ ] **Feature**: Fetch initial task data from an external API or simulate saving/loading tasks from a database.
- **Concept**: Use `await` blocks to manage asynchronous data fetching in Svelte templates.
- **Learning Outcome**: Understand how to handle asynchronous data in Svelte.

### 12. Action Directive for DOM Manipulation

- [ ] **Feature**: Create custom directives, such as automatically focusing on the input field or adding drag-and-drop functionality.
- **Concept**: Use Svelte’s `use:` directive to directly manipulate DOM elements.
- **Learning Outcome**: Learn how to write and use custom actions to enhance DOM interaction.

### 13. Reactive Styling

- [ ] **Feature**: Add dynamic styles to tasks based on their status (e.g., changing the color or styling of completed tasks).
- **Concept**: Use reactive styling to apply conditional classes or styles based on task data.
- **Learning Outcome**: Understand how to apply conditional and reactive styles in Svelte.

### 14. Error Handling

- [ ] **Feature**: Implement error handling for task input validation (e.g., preventing empty or duplicate tasks).
- **Concept**: Add form validation and display appropriate error messages based on user input.
- **Learning Outcome**: Learn how to manage user input and display error messages reactively.

### 15. Svelte Stores with LocalStorage

- [ ] **Feature**: Implement persistent task storage using `localStorage` to retain tasks after page reloads.
- **Concept**: Sync Svelte stores with browser APIs like `localStorage` for persistence.
- **Learning Outcome**: Understand how to combine Svelte stores with browser storage to persist data.

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
`