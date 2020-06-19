import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"

import Card from "../components/Card"
import Statement from "../components/Statement";




const Home = () => (
  <Layout>
    <Statement />
    <Card />
  </Layout>
)

export default Home;
