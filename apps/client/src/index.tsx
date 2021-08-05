import { AbilityContext } from "@monorepo/casl-react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { BaseAbility } from "./constants";
import { Store } from "./state";

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <AbilityContext.Provider value={BaseAbility}>
                <App />
            </AbilityContext.Provider>
        </Router>
    </Provider>,
    document.getElementById("root")
);
