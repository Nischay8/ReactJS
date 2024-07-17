/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Button({ children, disabled, type }) {
  const className =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-offset-2 disabled:cursor-notallowed";

  const styles = {
    base: "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-offset-2 disabled:cursor-notallowed",
  };
  return (
    <button disabled={disabled} className="">
      {children}
    </button>
  );
}

export default Button;
