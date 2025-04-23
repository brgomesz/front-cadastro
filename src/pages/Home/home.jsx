import "./home.css";

function Home() {
  const users = [
    {
      id: "12333",
      name: "Bruno",
      age: 28,
      email: "bruno@email.com",
    },
    {
      id: "2312312",
      name: "Ana Julia",
      age: 26,
      email: "ana@email.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>E-mail: <span>{user.email}</span> </p>
          </div>
          <div>
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
