import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import type { User } from "../types/auth.types";
import { getUsers } from "../utils/api";

const PublicPage = () => {
  const { user, token, isLoading, setIsLoading } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function handleClickme() {
    if (user?.role === "ADMIN") {
      console.log(`Eres admin ${token}`);
      try {
        const response = await getUsers(token);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        setUsers(response.data);
      } catch (error) {
        setError(`Error ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
  }

  function handleDelete() {
    console.log("borrando");
  }

  return (
    <div>
      <div>
        <button onClick={handleClickme} className="btn btn-primary">
          Click me
        </button>
      </div>
      <div>
        {error && <p>{error}</p>}
        {/* {users.length > 0 && users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))} */}

        {users.length > 0 && (
          <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
            <table className="w-full bg-white rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Nombre</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Rol</th>
                  <th className="p-3 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-t">
                    <td className="p-3">{u.id}</td>
                    <td className="p-3">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">{u.role}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(u.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicPage;
