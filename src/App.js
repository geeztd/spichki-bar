import React from "react";
import RouterUI from "./componets/UI/Router";
import Layout from "./componets/layout/layout";

export const App = () => (
  <div className="App">
    <Layout>
      <RouterUI />
    </Layout>
  </div>
);

export default App;
