import React, { useState, useEffect } from 'react';

var base64 = require("base-64"); // install it before use from npm i base-64

function App() {

    let [resources, setResources] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.133:8181/fcrepo/rest', {
            headers: {
                "Accept": "application/ld+json; profile=\"http://www.w3.org/ns/json-ld#expanded\"",
                "Authorization": "Basic " + base64.encode("fedoraAdmin:fedoraAdmin")
            },
            mode: "cors",
            credentials: "include"

        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setResources(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div class="container-fluid p-5 bg-primary text-white text-center">
          <h1>Fedora Repository</h1>
        </div>
      </header>
      <>
      {resources.map((r) => (
        <div>
              <h1>ID: {"r.@id"}</h1>
        </div>
      ))}
      </>
    </div>
  );
}

export default App;
