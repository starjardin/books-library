import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-center">
      <div>
        <span>Logo goes here</span>
        <h1>My App</h1>
      </div>

      <nav>
        <u>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </u>
      </nav>
    </header>
  );
};
