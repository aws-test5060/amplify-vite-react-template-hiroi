import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';　// 追加

const client = generateClient<Schema>();

function App() {
 const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
 const { user, signOut } = useAuthenticator();　// 追加

 useEffect(() => {
   client.models.Todo.observeQuery().subscribe({
     next: (data) => setTodos([...data.items]),
   });
 }, []);

 function createTodo() {
   client.models.Todo.create({ content: window.prompt("Todo content") });
 }

 return (
   <main>
     <h1>{user?.signInDetails?.loginId}'s todos</h1> // 変更
     <button onClick={createTodo}>+ new</button>
     <ul>
       {todos.map((todo) => (
         <li key={todo.id}>{todo.content}</li>
       ))}
     </ul>
     <div>
       🥳 App successfully hosted. Try creating a new todo.
       <br />
       <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
         Review next step of this tutorial.
       </a>
     </div>
     <button onClick={signOut}>Sign out</button>　// 追加
   </main>
 );
} export default App;
