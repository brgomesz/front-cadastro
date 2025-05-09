import "./home.css";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";
import DataTable from "../../components/Grid";
import React from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const inputCity = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");
    setUsers(usersFromApi.data);
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value,
      city: inputCity.current.value,
    });
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          ref={inputEmail}
        />
        <input placeholder="Cidade" name="Cidade" type="text" ref={inputCity} />
        <button onClick={createUsers} type="button">
          Cadastrar
        </button>
      </form>
      {/* <div className="lista">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>{" "}
              </p>
              <p>
                Idade: <span>{user.age}</span>{" "}
              </p>
              <p>
                E-mail: <span>{user.email}</span>{" "}
              </p>
            </div>
            <div>
              <button onClick={() => deleteUsers(user.id)}>X</button>
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid">
        <DataTable
          rows={users.map((user) => ({
            id: user.id,
            name: user.name,
            age: user.age,
            email: user.email,
            city: user.city,
          }))}
          deleteUsers={deleteUsers}
        />
      </div>
    </div>
  );
}

export default Home;
