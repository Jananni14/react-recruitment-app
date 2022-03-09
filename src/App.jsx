import React from "react";
import Header from "./Components/Header";
import Breadcrumb from "./Components/Breadcrumb";
import Table from "./Components/Table";
import TableFilters from "./Components/TableFilters";
import { Container, Row, Col } from "react-bootstrap";
import SideNavBar from "./Components/SideNavBar";
import "./styles.scss";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="col-l" id="sidebar-wrapper">
            <SideNavBar />
          </Col>
          <Col xs={10} className="col-r" id="page-content-wrapper">
            <header className="header w-100">
              <Header />
              <Breadcrumb />
            </header>
            <TableFilters />
            <Table />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
