import Link from "next/link";

export default async function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center"> Home Page</h1>
      <p className="desc text-center">
        This is the implementation for a small app using data from
      </p>
      <p>
        JSON Placeholder Users{" "}
        <a
          className="text-blue-500 underline"
          target="_blank"
          rel="noreferrer noopener"
          href="https://jsonplaceholder.typicode.com/users"
        >
          link
        </a>
      </p>
    </section>
  );
}
