import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="my-4">
      <ol className="flex space-x-2 pl-4 pt-4">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-1 text-gray-500">/</span>
              {!isLast ? (
                <Link to={to} className="text-blue-500 hover:underline">
                  {value}
                </Link>
              ) : (
                <span className="text-gray-700">{value}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
