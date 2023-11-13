import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LogInPage from "./LogInPage";
import ToDoListPage from "./todolistpage";
// import Layout from "./Layout";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<LogInPage />} />
          <Route path="/todolistpage" element={<ToDoListPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
