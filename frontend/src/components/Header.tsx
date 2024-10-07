import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between min-h-14 items-center">
      <div className="flex items-center gap-2">
        <img
          className="h-8 w-auto rounded"
          src="https://avatars.githubusercontent.com/u/58805602?s=280&v=4"
          alt="onja-logo"
        />
        <h2 className="text-white uppercase font-bold">Onja library</h2>
      </div>

      <nav>
        <ul className="flex justify-between gap-4">
          <li className="list-none">
            <a href="/about">About</a>
          </li>
          <li className="list-none">
            <a href="/contacts">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
