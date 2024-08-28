import React, { Suspense } from "react";
import BooksRow from "./BooksRow";
import { useGetAllBooksQuery } from "../generated/graphql";

const BooksTable = () => {
  const { data } = useGetAllBooksQuery({
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibol sm:pl-0"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              Reader
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              Number
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              Started reading date
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              Finished reading date
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              Read
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibol"
            >
              comments
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data?.books.map((b) => (
            <BooksRow key={b.isbn} book={b} />
          ))}
        </tbody>
      </table>
    </Suspense>
  );
};

export default BooksTable;
