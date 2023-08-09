import * as React from "react";
import { UserProvider } from "./UserContext";
import { Home, About, Contact } from "./Pages";
import PropTypes from "prop-types";

ChoosePage.propTypes = {
  page: PropTypes.node.isRequired,
};

function ChoosePage({ page }) {
  const Page = [Home, About, Contact][page];
  return <Page />;
}

function App() {
  const [page, setPage] = React.useState(0);

  return (
    <UserProvider>
      <div className="flex space-x-3">
        <button
          onClick={() => setPage(0)}
          disabled={page === 0}
          className="border px-3 py-1.5 rounded shadow"
        >
          Page 1
        </button>
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="border px-3 py-1.5 rounded shadow"
        >
          Page 2
        </button>
        <button
          onClick={() => setPage(2)}
          disabled={page === 2}
          className="border px-3 py-1.5 rounded shadow"
        >
          Page 3
        </button>
      </div>
      <ChoosePage page={page} />
    </UserProvider>
  );
}
export default App;
