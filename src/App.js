import logo from './logo.svg';
import './App.css';
import Users from "./components/Users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import Users1 from "./components/Users1";

function App() {
    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              {/* Rooms */}
              <Route path="/users" element={<Users />} />
              <Route path="/users1" element={<Users1 />} />
            </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
