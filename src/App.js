import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";

export default function App() {
    return (
        <div className="App">
            <GlobalStyle />

            <Nav />
            <AboutUs />
        </div>
    );
}
