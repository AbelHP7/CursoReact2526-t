import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import type { User } from "../types/auth.types";
import { createUser, deleteUser, getUsers } from "../utils/api";

const AdminDashboard = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // estados para el formulario.

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"USER" | "ADMIN">("USER");

  useEffect(() => {
    async function fetchUsers() {
      if (!token) return;
      try {
        const res = await getUsers(token);
        if (res.ok) setUsers(res.data);
      } catch {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [token]);

  async function handleDelete(id: number) {
    if (!token) return;
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;

    try {
      await deleteUser(token, id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch {
      setError("Error al eliminar el usuario");
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if(!token) return;
    // limpiamos los errores
    setError(null);
    try {
      const resp = await createUser(token, nombre, email, password, role);
      if(!resp.ok) {
        return "Error"
      }
      setUsers((prev) => [...prev, resp.data]);

    } catch (error) {
      setError(` Error al crear el usuario ${error}`);
    }
    
  }

  if (loading) return <p className="p-8 text-center">Cargando usuarios...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  return (
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

      {/* Formulario para dar de Alta a un usuario nuevo */}
      <form
        onSubmit={handleCreate}
        className="bg-white rounded shadow-teal-900 p-6 mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Dar de Alta usuario</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            required
            onChange={(e) => setNombre(e.target.value)}
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "USER" | "ADMIN")}
            className="border rounded p-2"
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
