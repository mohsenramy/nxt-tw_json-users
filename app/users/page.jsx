import Link from "next/link";
import { getUsers } from "@services/users";

export const metadata = {
  title: "Users List",
  description: "Users List from JSON PlaceHolder",
};
export default async function UsersListPage() {
  const users = await getUsers();
  return (
    <section className="container">
      <h1 className="head_text text-center mp-6"> Users List</h1>

      <div className="mt-10 flex justify-evenly text-left font-bold bg-black text-white border border-gray-300 m-2 p-4 items-center rounded-md shadow">
        <div className="sm:basis-4/12 flex-1">Name</div>
        <div className="sm:flex hidden basis-4/12">Email</div>
        <div className="sm:flex hidden basis-3/12">Company</div>
        <div className="sm:basis-1/12"></div>
      </div>
      <ul>
        {users?.length > 0 ? (
          users.map((user) => (
            <li key={user?.id}>
              <div className="flex text-left border border-gray-300 m-2 p-4 items-center rounded-md shadow">
                <div className="sm:basis-4/12 flex-1 font-semibold">
                  {user?.name}
                </div>
                <div className="sm:flex hidden sm:basis-4/12">
                  {user?.email}
                </div>
                <div className="sm:flex hidden sm:basis-3/12 ">
                  {user?.company.name}
                </div>
                <Link
                  className="sm:basis-1/12 button_main flex justify-end bg-yellow-300"
                  href={`/users/${user?.id}`}
                >
                  Details
                </Link>
              </div>
            </li>
          ))
        ) : (
          <div className=" text-center text-lg text-red-500 font-semibold p-10">
            No Data available
          </div>
        )}
      </ul>
      <div className="flex items-end justify-end mt-6">
        <Link className="button_outline" href="/">
          Go Back to Home
        </Link>
      </div>
    </section>
  );
}
