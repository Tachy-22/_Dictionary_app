import React, { useState } from "react";

import Menu from "./img/menu_vpnpy0k6arb0.svg";
import Logo from "./img/ChessSet.jpg";
import Modal from "react-modal";

// import { Tooltip as ReactTooltip } from "react-tooltip";

Modal.setAppElement("#root");

function Header(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className="header flex  justify-between md:items-center items-start fixed top-0 w-full p-3 px-5">
        <div className="w-1/3">
          <div className=" md:w-20  w-16 rounded-xl">
            <img className="rounded-xl" id="logo" src={Logo} alt="logo" />
          </div>

          <h1 className="md:text-3xl text-xl font-bold ">The Dictionary</h1>
        </div>
        <div className="md:flex md:flex-row md:justify-center md:items-center  w-1/2 hidden  ">
          <nav className=" flex justify-center   flex-row space-x-3 items-center w-full">
            <button title="home" id="home" data-tooltip-content="go to home">
              Home
            </button>

            <button
              title="about"
              id="about"
              data-tooltip-content="learn about us"
            >
              About
            </button>
            <button
              title="features"
              id="features"
              data-tooltip-content="explore our features"
            >
              Features
            </button>
            {/* <ReactTooltip anchorId="home" place="bottom" />

            <ReactTooltip anchorId="about" place="bottom" />
            <ReactTooltip anchorId="features" place="bottom" /> */}
          </nav>
        </div>
        <div className=" md:flex w-1/3 hidden justify-end">
          <button>Log out</button>
        </div>
        <div
          onClick={() => {
            setModalIsOpen(true);
          }}
          className="md:w-10 w-6   flex md:hidden hover:outline-double outline-blue-6002"
        >
          <img src={Menu} alt="menue" />
        </div>
      </div>
      <Modal
        className=" flex bg-white md:w-96 w-3/4 p-6 mx-5 rounded-xl justify-center outline-none items-center"
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={{
          overlay: {
            position: "fixed",
          },
          content: {
            color: "black",
            border: "1px solid #ccc",
            position: "absolute",
            top: "40%",
            left: "6%",

            bottom: "30%",
          },
        }}
      >
        <div className=" text-center">
          <h1 className="text-xl">Sorry but the navigations don't work.</h1>
          <p>This was just for testing purpose</p>
        </div>
      </Modal>
    </>
  );
}

export default Header;
