import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBacon, faAngleLeft, faAngleRight, faDragon, faDiceD20, faGavel,faGrimace, faHamsa, faHatWizard} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faBacon, faAngleLeft, faAngleRight, faDragon, faDiceD20, faGavel, faGrimace, faHamsa, faHatWizard)

ReactDOM.render(<App />, document.getElementById("pics"));

