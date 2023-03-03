import "./App.css";
import Footer from "./components/footer/Footer";
import Router from "./router/Router";
import { axiosInterceptor } from "./interceptors/axios.interceptor";

function App() {
   axiosInterceptor;
   return (
      <>
         <div className="App">
            <Router />
         </div>
         <Footer />
      </>
   );
}

export default App;
