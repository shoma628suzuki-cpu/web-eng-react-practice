import type { Todo } from"../types";

type TodoItemProps = {
    todo:Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const isOverdue =
    todo.dueDate && new Date(todo.dueDate) < new Date(new Date().toDateString());

  return (
    <li>
      <strong>{todo.title}</strong>
      <span> {todo.completed ? "(完了)" : "(未完了)"}</span>

      {todo.dueDate && (
        <span style={{ color: isOverdue ? "red" : "inherit", marginLeft: "8px" }}>
          期限: {todo.dueDate} {isOverdue && "(期限切れ)"}
        </span>
      )}
    </li>
  );
}