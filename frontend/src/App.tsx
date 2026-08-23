import { BrowserRouter, Routes, Route } from "react-router";
import WorkSpace from "./components/workspace/WorkSpace";
import BoardList from "./components/workspace/board/BoardList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="workspace" element={<WorkSpace />}>
          <Route path="boards" element={<BoardList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
