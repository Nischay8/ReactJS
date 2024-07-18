import { useSelector } from 'react-redux';

function Username() {
  const username1 = useSelector((state) => state.user.username);

  if (!username1) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{username1}</div>
  );
}

export default Username;
