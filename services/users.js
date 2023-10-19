export async function getUsers() {
  const res = await fetch(`${process.env.API_URL}/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getUserDetails(userId) {
  const res = await fetch(`${process.env.API_URL}/users/${userId}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
