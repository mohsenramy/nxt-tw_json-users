import { getUserDetails } from "@/services/users";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
export async function generateMetadata({ params }) {
  const user = await getUserDetails(params?.userId);

  if (!user?.name) {
    return {
      title: "User Not Found",
      description: "",
    };
  }

  return {
    title: user.name,
    description: `Details page of ${user.name}`,
  };
}
export default async function UserDetailsPage({ params }) {
  const user = await getUserDetails(params.userId);
  return (
    <section className="container">
      <h1 className="head_text text-center mp-6">User Details</h1>
      {user ? (
        <div className="user-card">
          <div className="flex md:flex-row flex-col justify-between py-5">
            <h1 className="text-4xl font-semibold">{user?.name}</h1>
            {user?.address?.geo?.lat && user?.address?.geo?.lng && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="button_main"
                href={`https://www.google.com/maps/place/${user?.address?.geo?.lat},${user?.address?.geo?.lng}`}
              >
                Show on Map
              </a>
            )}
          </div>
          <div className="flex md:flex-row flex-col justify-between mt-2 p-4 gap-2 border-t-2">
            <div className="flex items-center gap-1">
              <AiOutlineUser />
              {user?.username}
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmail />
              {user?.email}
            </div>
            <div className="flex items-center gap-1">
              <AiOutlinePhone />
              {user?.phone}
            </div>
          </div>
          <div className="flex md:flex-row flex-col mt-5">
            <div className="basis-1/2 flex-col ">
              <div className="user-card-column">Company:</div>
              <h2 className="pl-6 text-2xl mt-2">{user?.company?.name}</h2>
              <div className="pl-6 italic">{user?.company?.catchPhrase}</div>
            </div>
            <div className="flex-1 flex-col">
              <div className="user-card-column">Address:</div>
              <div className="pl-6 mt-2">
                <div>{user?.address?.street}</div>
                <div>{user?.address?.suite}</div>
                <div>{user?.address?.city}</div>
                <div>{user?.address?.zipcode}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" text-center text-lg text-red-500 font-semibold p-10">
          User was not found
        </div>
      )}
      <div className="flex items-end justify-end mt-6">
        <Link className="button_outline" href="/users">
          Go Back to Users List
        </Link>
      </div>
    </section>
  );
}
