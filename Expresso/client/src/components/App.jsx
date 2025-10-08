import { lazy, Suspense, useState } from "react";
import List from "./List.jsx";
const Detail = lazy(() => import("./Detail.jsx"));
const Form = lazy(() => import("./Form.jsx"));
const Admin = lazy(() => import("./Admin.jsx"));
const FourOhFour = lazy(() => import("./404.jsx"));


export default function App() {
  const [view, setView] = useState({ name: "All Recipes", viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log("Changing view to: " + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const renderView = () => {
    switch (view.name) {
      case "All Recipes":
        return <List showRecipeOnClick={changeView("Recipe")} />;
      case "Recipe":
        return <Detail id={view.viewProps.id} />;
      case "New Recipe":
        return <Form onSubmit={changeView("All Recipes")} />;
      case "Admin":
        return <Admin />;
      default:
        return <FourOhFour />;
    }
  };

  return (
    <>
      <header>
        <nav>
          <h1 onClick={changeView("All Recipes")}>☕ Expresso</h1>
          <ul>
            <li onClick={changeView("All Recipes")}>📚 All Recipes</li>
            <li onClick={changeView("New Recipe")}>✏️ New Recipe</li>
            <li onClick={changeView("Admin")}>⚙️ Admin</li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </>
  );
}
