import React, { useState } from "react";
import Facebook from "./img/icons8-facebook.svg";
import Twitter from "./img/icons8-twitter.svg";
import Instagram from "./img/icons8-instagram.svg";
import Linkedin from "./img/icons8-linkedin-circled.svg";
import Modal from "react-modal";
function Footer(props) {
  const [inputEmail, setInputEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
    setInputEmail("");
  };

  const handleChange = (event) => {
    setInputEmail(event.target.value);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="footer  relative flex flex-col ">
      <div className=" hidden md:flex md:flex-row  w-full px-7 justify-between py-6 mb-6  ">
        <div className=" w-1/4  mx-2 items-center justify-center">
          <h1 className="text-xl mb-4 font-bold ">About us</h1>
          <p className=" p-footer">
            Welcome to our dictionary web app! We are a team of language
            enthusiasts dedicated to providing a comprehensive and user-friendly
            online dictionary resource.
          </p>
        </div>
        <div className=" w-1/4  mx-2 items-center justify-center">
          <h1 className="text-xl mb-4 font-bold ">Contact Info</h1>
          <p className=" p-footer">
            If you have any questions or feedback, please don't hesitate to
            contact us at info@dictionaryapp.com or call us at 555-555-5555.
          </p>
        </div>
        <div className=" w-1/4  mx-2 items-center justify-center">
          <h1 className="text-xl mb-4 font-bold ">Important links</h1>
          <p className=" p-footer">Search for words and definitions</p>
          <p className=" p-footer">Add a word to the dictionary</p>
          <p className=" p-footer">FAQs</p>
          <p className=" p-footer">Privacy policy</p>
        </div>
        <div className=" w-1/4  mx-2 items-center justify-center">
          <h1 className="text-xl mb-4 font-bold ">News letter</h1>
          <p className="p-footer">
            Sign up for our monthly news letter to stay up-to-date on the latest
            additions and updates to our dictionary app. Simply enter your email
            address in the form below to subscribe.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex mt-5 space-x-2 h-10 justify-around"
          >
            <input
              type="email"
              value={inputEmail}
              onChange={handleChange}
              className="rounded-lg w-full outline-blue-400 text-sm text-black px-1 "
            ></input>
            <button
              // onClick={() => {
              //   ;
              // }}
              className="md:w-1/3  border-4 border-black  bg-gray-700 w-1/2 text-white text-sm p-3"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="flex min-h-fit space-y-3 py-3 md:flex-row flex-col  md:border-t-2 justify-between px-7 md:h-1/5  absolute w-full bottom-0 items-center">
        <p className="p-footer text-red-300 text-sm md:text-left text-center">
          Copyright &copy; 2021 Dictionary App. All rights reserved. The content
          and images on this website may not be reproduced or distributed
          without written permission. By accessing and using this website, you
          agree to our terms and conditions.
        </p>
        <div className="flex  w-52 justify-around">
          <img className="w-6 md:w-9 " src={Facebook} alt="facebook"></img>
          <img className="w-6 md:w-9 " src={Twitter} alt="twitter"></img>
          <img className="w-6 md:w-9 " src={Linkedin} alt="linkedin"></img>
          <img className="w-6 md:w-9 " src={Instagram} alt="instagram"></img>
        </div>
      </div>
      <div className="flex justify-center relative mx-6 w-full items-center ">
        <Modal
          className=" flex bg-white w-96 p-6 outline-none rounded-xl justify-center items-center"
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
              position: "absolute ",
              display: "flex",

              top: "50%",

              right: "5%",
              bottom: "5%",
            },
          }}
        >
          <div className=" text-center">
            <h1 className="text-3xl">Great to have you on our newsletter!</h1>
            <p>
              "Thank you for subscribing to our newsletter! You will now receive
              updates on the latest additions and updates to our dictionary app.
              If you have any questions or feedback, please don't hesitate to
              contact us at info@dictionaryapp.com. We appreciate your support
              and look forward to staying connected with you."
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Footer;
