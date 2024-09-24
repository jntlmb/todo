import { Todo } from "../models/Todo";

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

export function saveTodos(todos) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

export function loadTodos() {
  const dummyTodos = [
    new Todo({
      title: "Complete project proposal",
      description: "Write and submit the project proposal for the new client",
      dueDate: "2023-07-15",
      importance: "1"
    }),
    new Todo({
      title: "Buy groceries",
      description: "Get milk, eggs, bread, and vegetables",
      dueDate: "2023-07-10",
      importance: "2"
    }),
    new Todo({
      title: "Schedule dentist appointment",
      description: "Call the dentist office to schedule a check-up",
      dueDate: null,
      importance: "3"
    }),
    new Todo({
      title: "Prepare for team meeting",
      description: "Review last week's progress and prepare agenda for the upcoming meeting",
      dueDate: "2023-07-12",
      importance: "1"
    }),
    new Todo({
      title: "Start learning a new language",
      description: "Begin with basic phrases and vocabulary",
      dueDate: null,
      importance: "2"
    })
  ];

  if (storageAvailable("localStorage")) {
    const todos = localStorage.getItem("todos");
    if (todos) {
      return JSON.parse(todos).map(todo => new Todo(todo));
    } else {
      saveTodos(dummyTodos);
      return dummyTodos;
    }
  }
  return dummyTodos;
}
