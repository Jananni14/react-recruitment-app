import React from "react";
import { TiGift as GiftIcon } from "react-icons/ti";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { Button } from "react-bootstrap";
import "./styles.scss";
function SearchMenu() {
  return (
    <div className="d-flex right-header">
      {" "}
      <form className="form-inline search-box">
        <SearchIcon />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <Button className="addnew-btn mx-1 btn btn-primary">+ Add New</Button>
      <div className="positiona-relative">
        <GiftIcon size={30} color="#808080c2" />
        <span className="gift-badge badge rounded-circle translate-middle">
          5
        </span>
      </div>
      <div className="login-logo">
        <div className="inner-circle">S</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="row shadow-sm">
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <div className="navbar-brand brand-name">
            <img
              src="https://website-assets-fw.freshworks.com/attachments/cks4gvmk304f37vfz7zkpij0b-freshteam.full.png"
              width="30"
              height="30"
              className="d-inline-block align-bottom mx-2"
              alt="icon"
            />
            <h6 className="m-0">iamneo.ai Talent Center</h6>
          </div>
          {SearchMenu()}
        </div>
      </nav>
    </div>
  );
}

export default Header;
