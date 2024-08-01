/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import "./App.css";
// https://jsonplaceholder.typicode.com/todos

import { useQuery, useMutation } from "@tanstack/react-query";
function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
  });

  if (error || isError) return <div>"An Error Has Occured!</div>;

  if (isLoading) return <div>The QUery Is Just Loading!</div>;

  console.log(data);

  return (
    <div className="App">
      {isSuccess && <p>Data is Being Added SucessFully!</p>}
      <button
        onClick={() =>
          mutate({
            userId: 5000,
            id: 1,
            title: "Hey My Name is Bruce Wayne",
            body: "this is A New Posts",
            Headers: { "Content-type": "application/json; charset=UTF-8" },
          })
        }
      >
        Add Posts
      </button>
      {data.map((todo) => (
        <div>
          <h4>{todo.id}</h4>
          <h4>{todo.title}</h4>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
