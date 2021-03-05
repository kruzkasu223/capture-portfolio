import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <GlobalStyle />

            <Nav />

            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>

                <Route path="/work" exact>
                    <OurWork />
                </Route>

                <Route path="/contact" exact>
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}
