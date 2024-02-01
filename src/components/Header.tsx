// const user = {
//   name: "Alex Caetano dos",
//   lastName: "Santos",
// };

// function Header() {
//   return (
//     <h1>
//       Olá, {user.name} {user.lastName}
//     </h1>
//   );
// }

function Header() {
  const firstName = "Alex Caetano dos";
  const lastName = "Santos";

  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <>
      <h2>
        Olá, {firstName} {lastName}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h2>

      <h3>Seus números da sorte da Mega-Sena são:</h3>
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </>
  );
}

export default Header;
