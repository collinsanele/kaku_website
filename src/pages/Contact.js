import React, { useState }  from "react";
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Contact = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "POST",
        url: "https://getform.io/f/a4dd575d-f065-4e4b-870c-063daf7ed820",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (
        <Layout>
          <SEO title="Contact" />
          <div  className="h-12"></div>
          
          <div className="bg-gray-400 py-12 h-screen">
            <div className="bg-white max-w-md h-auto m-auto rounded object-none object-center" style={{boxShadow: "0 2px 30px 0 rgba(0,0,0,.63)"}}>
              <h2 className="text-3xl font-bold">Let's write amazing stuff together.</h2>
              <form onSubmit={handleOnSubmit} className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                      <span className="text-black font-bold">Full Name</span>
                      <input className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black 	focus:ring-opacity-100" type="text" name="name" placeholder="ex. John Smith" aria-describedby="nameHelp"/>
                  </label>
                  <label className="block" required="required">
                      <span className="text-black font-bold">Email</span>
                      <input className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black 					  focus:ring-opacity-100" type="email" name="email" placeholder="ex. johnsmith@example.com" aria-describedby="emailHelp"/>
                  </label>
                  <label className="block" required="required">
                      <span className="text-black font-bold">Phone number</span>
                      <input className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black 					  focus:ring-opacity-100" type="text" name="tel" placeholder="ex. 123-456-7890" aria-describedby="telHelp"/>
                  </label>
                  <label className="block" required="required">
                      <span className="text-black font-bold">Message</span>
                      <input className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black 					  focus:ring-opacity-100" type="text" name="tel" placeholder="ex. Hello! I have a large Blog project and need agency help. My 					          preferred date of completion is in 12 weeks time." rows="3"/>
                  </label>
                </div>
                <button type="submit" disabled={serverState.submitting} className="text-center items-center justify-center flex-shrink-0 text-white bg-black border-0 p-2 focus:outline-none bg-gradient-to-r hover:from-blue-500 hover:to-green-500 rounded font-bold m-10">
                  Send message
                </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                    </p>
                )}
              </form>
            </div>                 
          </div>  
        </Layout>
    )};
  
  export default Contact;
