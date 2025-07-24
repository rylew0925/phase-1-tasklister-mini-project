document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("new-task-description");
    const taskText = input.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.append(li);
    input.value = ""; // Clear input after submission
  });
});
