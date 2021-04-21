import { type } from "node:os";

interface Todo {
    text : string;
    complete :boolean;
}

type ToggleTodo = (selectedTodo : Todo) => void;
type AddTodo = (text :string) => void ;