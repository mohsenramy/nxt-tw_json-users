export async function getUsers() {
  const res = await fetch(`${process.env.API_URL}/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  try {
    return await res.json();
  } catch (error) {
    throw new Error("Invalid data");
  }
}
export async function getUserDetails(userId) {
  const res = await fetch(`${process.env.API_URL}/users/${userId}`);

  if (!res.ok) {
    return null;
  }

  try {
    return await res.json();
  } catch (error) {
    return null;
  }
}
