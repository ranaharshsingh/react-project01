import { useParams } from "react-router-dom";

const users = [
  { id: "101", name: "Harsh", role: "Frontend Developer" },
  { id: "102", name: "Rahul", role: "Backend Developer" },
  { id: "103", name: "Aman", role: "Full Stack Developer" },
];

function Profile() {
  const { id } = useParams();

  const user = users.find((item) => item.id === id);

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.role}</p>
      <p>User ID: {id}</p>
    </div>
  );
}

export default Profile;