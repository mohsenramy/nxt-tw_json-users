"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="w-[50%] p-4 rounded-md bg-white">
      <div className="flex-col p-10">
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <div className="flex justify-end mt-10">
          <button className="button_main text-2xl" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </section>
  );
}
