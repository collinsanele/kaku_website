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
          <section className="text-gray-600 body-font relative">
              <div className="absolute inset-0 bg-gray-300">
                <iframe style={{filter: grayscale(1) contrast(1.2) opacity(0.4);}} marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/place/3rd+Ave,+Gwarinpa,+Abuja/@9.0968695,7.4075129,17z/data=!3m1!4b1!4m5!3m4!1s0x104e756c1f179b5b:0x45e76b2cd4962f33!8m2!3d9.0968695!4d7.4097016" width="100%" height="100%" frameborder="0"></iframe>
              </div>
              <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10" style={{boxShadow: "0 2px 30px 0 rgba(0,0,0,.63)"}} >
                  <h2 className="text-5xl font-black text-center pt-12">Let's write amazing stuff together.</h2>
                          <form onSubmit={handleOnSubmit} className="p-8">
                            <div className="grid grid-cols-1 gap-6">
                              <label className="block">
                                  <span className="text-black text-sm font-bold">Full Name</span>
                                  <input className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black 	focus:ring-opacity-100" type="text" name="name" placeholder="ex. John Smith" aria-describedby="nameHelp"/>
                              </label>
                              <label className="block" required="required">
                                  <span className="text-black text-sm font-bold">Email</span>
                                  <input className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black focus:ring-opacity-100" type="email" name="email" placeholder="ex. johnsmith@example.com" aria-describedby="emailHelp"/>
                              </label>
                              <label className="block" required="required">
                                  <span className="text-black text-sm font-bold">Phone number</span>
                                  <input className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black  focus:ring-opacity-100" type="text" name="tel" placeholder="ex. 123-456-7890" aria-describedby="telHelp"/>
                              </label>
                              <label className="block" required="required">
                                  <span className="text-black text-sm font-bold">Message</span>
                                  <textarea className="mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black focus:ring-opacity-100" type="text" name="message" placeholder="ex. Hello! I have a large Blog project and need agency help. My preferred date of completion is in 12 weeks time." rows="3"></textarea>
                              </label>
                            </div>
                            <button type="submit" disabled={serverState.submitting} className="text-center text-sm flex-shrink-0 text-white bg-black border-0 p-2 mt-8 focus:outline-none bg-gradient-to-r hover:from-blue-500 hover:to-green-500 rounded font-bold">
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
            </section> 
        </Layout>
    )};
  
  export default Contact;
