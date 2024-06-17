function StartScreen({ numQuestion }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <p>{numQuestion} question to test your React mastery</p>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
