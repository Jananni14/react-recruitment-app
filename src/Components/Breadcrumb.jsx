import React from "react";
import {
  VscBriefcase as JobIcon,
  VscGlobe as GlobeIcon,
  VscArrowUp as ArrowIcon
} from "react-icons/vsc";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "./styles.scss";
function AddandPublish() {
  return (
    <div className="right-nav">
      <Dropdown className="add-dropdown" as={ButtonGroup}>
        <Button variant="default border">Add candidate</Button>
        <Dropdown.Toggle
          split
          variant="default border"
          id="dropdown-custom-2"
        />
        <Dropdown.Menu className="add-dropdown-menu bg-light">
          <Dropdown.Item eventKey="1" active>
            Open
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">Contacted</Dropdown.Item>
          <Dropdown.Item eventKey="3">Techical round</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button type="submit" className="btn-publish">
        <GlobeIcon size={15} />
        <ArrowIcon className="arrow-icon" size={10} />
        Published
      </Button>
    </div>
  );
}
function BreadCrumb() {
  return (
    <div className="row shadow-sm breadcrumb-bar">
      <div className="container-fluid breadcrumb-container">
        <nav className="custom-bc" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>
                <JobIcon className="mx-2" color={"black"} />
                Jobs
              </div>
            </li>
            <li className="breadcrumb-item"> L3 - UX Designer</li>
          </ol>
          <div className="mx-3">
            <button className="view-job-btn">View Job Details</button>
          </div>
        </nav>
        {AddandPublish()}
      </div>
    </div>
  );
}

export default BreadCrumb;
