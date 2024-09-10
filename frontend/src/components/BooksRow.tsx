import React from "react";
import dayjs from "dayjs";

function BooksRow({ book }) {
  return (
    <tr>
      <td className="max-w-xs break-words py-4 pl-4 pr-3 text-sm font-medium">
        {book.title}
      </td>
      <td className="max-w-xs break-words px-3 py-4 text-sm text-gray-500">
        {book.author}
      </td>
      <td className="max-w-xs break-words px-3 py-4 text-sm text-gray-500">
        {book.borrowedBy?.name ?? "-"}
      </td>
      <td className="max-w-xs break-words px-3 py-4 text-sm text-gray-500">
        {book.isbn}
      </td>
      <td className="max-w-xs break-words px-3 py-4 text-sm text-gray-500">
        {book?.borrowedAt ? dayjs(book.borrowedAt).format('DD MMMM YYYY') : '-'}
      </td>
      <td className="whitespace- wrap px-3 py-4 text-sm text-gray-500">
        {book?.returnedAt ? dayjs(book.returnedAt).format('DD MMMM YYYY') : '-'}
      </td>
      <td className="whitespace- wrap px-3 py-4 text-sm text-gray-500">
        <button type="button"></button>
      </td>
      <td className="max-w-xs break-words px-3 py-4 text-sm text-gray-500">
        <a href="/comment/{book.id}">See comments</a>
      </td>
    </tr>
  );
}

export default BooksRow;
