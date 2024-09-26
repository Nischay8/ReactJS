import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <h1>Hello Today we Will Learn React Hook Form</h1>
        <div className="container">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("username", {
                required: true,
                minLength: 3,
                maxLength: 8,
              })}
              type="text"
              name="username"
              id=""
            />
            {errors.username && <div>There is Some Error in Username</div>}
            <br />
            <input
              {...register("password")}
              type="text"
              name="password"
              id=""
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
