import UserList from "@/components/Dashboard/Usuarios/Desktop/UserList";

export default function TableDesktop({ users, handleDataUpdate }) {
  return (
    <table className="w-full table-auto text-center border-separate border-spacing-y-2 hidden sm:table">
      <thead>
        <tr>
          <th>
            <strong>Avatar</strong>
          </th>
          <th>
            <strong>Email</strong>
          </th>
          <th>
            <strong>Nickname</strong>
          </th>
          <th>
            <strong>Voluntario</strong>
          </th>
          <th>
            <strong>Admin</strong>
          </th>
          <th>
            <strong>Baneado</strong>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <UserList users={users} onDataUpdate={handleDataUpdate} />
      </tbody>
    </table>
  );
}
