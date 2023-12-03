import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Client } from "./generated/iop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let client = new Client();
// client
//   .napraviKorisnika(
//     new Korisnik({
//       id: 0,
//       jmbg: "555",
//       ime: "onaj",
//       prezime: "sto sam te jebo",
//       korisnickoIme: "onaj",
//       lozinka: "onajstosamtejebo",
//     })
//   )
//   .then((x) => console.log(x));
let korisnici = client.dajSveKorisnike().then((x) => console.log(x));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
