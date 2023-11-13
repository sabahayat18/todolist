import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LogInPage from "./LogInPage";
import ToDoListPage from "./todolistpage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<LogInPage />} />
          <Route path="/todolistpage" element={<ToDoListPage />} />`  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
