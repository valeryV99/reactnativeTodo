export interface AppState {
  todos: Todo[];
}

export interface Todo {
  text: string;
  id: number;
  audioUri?: string | null;
}
