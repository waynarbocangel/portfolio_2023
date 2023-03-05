import * as ReactDOM from "react-dom/client";
import { theme } from "./views/themes/themes";
import App from "./views/Main";

// Loads theme properties
theme();

// Renders Application
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
