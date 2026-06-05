import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";

function App() {
  return (
    <div className="App, noSelect">
      <main className="content-layout">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
