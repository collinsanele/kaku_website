import React, { useState }  from "react";
import axios from "axios";
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/image"
import SEO from "../components/seo"
import Fixedbutton from "../components/Fixedbutton";



const IndexPage = () => {
  
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
  <Layout >
    <SEO title="Home" />
    <Fixedbutton/>
    <div  className="bgcolor">
    <div className="h-14"></div>

      {/* hero section */}
      <div className="w-full bg-cover relative" style={{ height: `70vh`}}>
        <HeroImage />
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
        <div className="w-full mx-auto h-full absolute top-0 left-0 align-center justify-center flex items-center text-gray-100">
          <div  className="w-1/2">
            <p className="text-right text-gray-200 font-black my-auto tracking-tighter text-7xl md:text-8xl lg:text-9xl">Kaku</p>
          </div>
          <div className="w-1/2">
            <p className="mb-0 text-left pl-4 max-w-sm text-gray-200 text-md">Developing ever-green <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">content</span> strategies for your business</p>
          </div>
        </div>
      </div>
      {/* cta section */}
      <section className="w-11/12 lg:w-8/12 mx-auto">
              <div className="py-24">
                  <div className="flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                      <h3 className="flex-grow sm:pr-16 text-2xl font-medium text-black mb-0">
                          A one-stop solution to all your brands’ content needs.
                      </h3>
                      <button className="transition transform duration-1000 ease-in-out hover:-translate-y-1 hover:scale-150 border border-green-500 flex-shrink-0 text-gray-200 border-0 py-2 px-8 focus:outline-none bg-black rounded text-lg mt-10 sm:mt-0" style={{boxShadow: "0 2px 10px 0 rgba(0,0,0,.63)"}}>
                              <Link to="/Contact/">
                                    Talk to us
                              </Link>
                      </button>
                  </div>
              </div>
      </section>
      {/* About us */}
      <section className="w-full bg-black text-gray-200">
        <div className="w-11/12 lg:w-8/12 mx-auto align-center justify-center">
          <div className="flex flex-col lg:flex-row py-16">
            <div className="flex lg:w-1/4">
              <div className="bg-blue-500 w-8 h-8 flex justify-center items-center transform rotate-45 bg-gradient-to-r from-blue-500 to-green-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="transform -rotate-45"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.8c-4.853 0-8.8 3.947-8.8 8.8s3.947 8.8 8.8 8.8 8.8-3.947 8.8-8.8-3.947-8.8-8.8-8.8zm0 15.05c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.432-3.468.572-.544 1.024-.975.962-1.821-.058-.805-.73-1.226-1.364-1.226-.709 0-1.538.527-1.538 2.013h-2.011c0-2.4 1.41-3.95 3.59-3.95 1.036 0 1.942.339 2.551.955.57.578.865 1.372.854 2.298-.018 1.383-.859 2.291-1.536 3.021z"/></svg>
              </div>
              <h3 className="noto pl-6 text-3xl">About us</h3>
            </div>
            <div className="lg:w-3/4 pt-10 lg:pt-0 leading-loose text-xl">
              <p className="mb-0">Kaku is a Nigerian-based content creation company that specializes in helping small businesses grow their brand through precision-based written content. We produce both long and short write-ups for just about everyone. Whether you are a SaaS start-up or a manufacturing entity, we have got you covered.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Who we are */}
      <section className="w-full bg-gray-200 text-black">
        <div className="w-11/12 lg:w-8/12 mx-auto align-center justify-center">
          <div className="flex flex-col lg:flex-row py-16">
            <div className="flex lg:w-1/4">
              <div className="bg-blue-500 w-8 h-8 flex justify-center items-center transform rotate-45 bg-gradient-to-r from-blue-500 to-green-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="transform -rotate-45"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
              </div>
              <h3 className="noto pl-6 text-3xl">Who We Are</h3>
            </div>
            <div className="lg:w-3/4 pt-10 lg:pt-0 leading-loose font-medium text-xl">
              <p className="mb-0">Kaku is an in-house team of content writers. We like to think of ourselves as creative geniuses who have mastered the art of fusing words that have a lasting effect on the reader. Our primary motivation stems from the fact that every brand deserves a voice, and the verdict out there today is that quality content is the best way to raise awareness and engage with your audience.</p>
            </div>
          </div>
        </div>
      </section>
      {/* our values */}
      <section className="w-full bg-black text-gray-200">
        <div className="w-11/12 lg:w-8/12 mx-auto align-center justify-center">
          <div className="flex flex-col lg:flex-row py-16">
            <div className="flex lg:w-1/4">
              <div className="bg-blue-500 w-8 h-8 flex justify-center items-center transform rotate-45 bg-gradient-to-r from-blue-500 to-green-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="transform -rotate-45"><path d="M19 1c0 9.803-5.094 13.053-5.592 17h-2.805c-.498-3.947-5.603-7.197-5.603-17h14zm-7.305 13.053c-1.886-3.26-2.635-7.432-2.646-11.053h-1.699c.205 4.648 1.99 8.333 4.345 11.053zm1.743 4.947h-2.866c-.202 1.187-.63 2.619-2.571 2.619v1.381h8v-1.381c-1.999 0-2.371-1.432-2.563-2.619zm7.08-1.596c-1.402-.634-2.609-.19-3.354.293.745-.484 1.603-1.464 1.595-3.003-2.591 1.038-2.295 2.496-2.765 3.345-.315.571-1.007.274-1.007.274l-.213.352c.365.193.989.319 1.716.319 1.307 0 2.949-.409 4.028-1.58zm2.444-4.022c-1.382.097-2.118 1.061-2.501 1.763.383-.702.614-1.942-.05-3.158-1.61 1.929-.752 2.958-.762 3.831-.004.427-.49.417-.49.417l.007.404c.314-.041 3.154-.717 3.796-3.257zm1.036-3.87c-1.171.426-1.56 1.473-1.718 2.175.158-.702.041-1.863-.835-2.75-.915 2.068.082 2.745.29 3.503.102.371-.325.606-.325.606l.29.179c.061-.029 2.385-1.332 2.298-3.713zm-.2-3.792c-.903.666-1.017 1.688-.974 2.335-.042-.646-.395-1.639-1.376-2.182-.264 2.018.769 2.349 1.142 2.95.182.294.023.658.023.658l.284-.019s.026-.127.169-.442c.291-.644 1.255-1.334.732-3.3zm-1.901-2.72s-.273.984-.045 1.732c.244.798.873 1.361.873 1.361s.34-.873.099-1.733c-.222-.792-.927-1.36-.927-1.36zm-12.67 15.665l-.213-.352s-.691.297-1.007-.274c-.47-.849-.174-2.307-2.765-3.345-.008 1.539.85 2.52 1.595 3.003-.745-.484-1.952-.927-3.354-.293 1.078 1.171 2.721 1.581 4.028 1.581.727-.001 1.35-.127 1.716-.32zm-4.393-2.027l.007-.404s-.486.01-.49-.417c-.009-.873.848-1.901-.762-3.831-.664 1.216-.433 2.457-.05 3.158-.383-.702-1.12-1.666-2.501-1.763.642 2.541 3.482 3.217 3.796 3.257zm-2.533-3.413l.29-.179s-.427-.236-.325-.606c.208-.758 1.205-1.435.29-3.503-.876.887-.994 2.048-.835 2.75-.158-.702-.546-1.749-1.718-2.175-.088 2.381 2.236 3.684 2.298 3.713zm-1.366-4.204c.143.315.169.442.169.442l.284.019s-.159-.364.023-.658c.373-.601 1.405-.933 1.142-2.95-.983.542-1.335 1.534-1.377 2.181.042-.647-.072-1.67-.974-2.335-.523 1.966.441 2.656.733 3.301zm.241-4.661c-.24.86.099 1.733.099 1.733s.629-.563.873-1.361c.228-.748-.045-1.732-.045-1.732s-.705.568-.927 1.36z"/></svg>
              </div>
              <h3 className="noto pl-6 text-3xl">Our Values</h3>
            </div>
            <div className="lg:w-3/4 pt-10 lg:pt-0 leading-loose text-xl">
              <p>At Kaku we believe that every business needs to be heard. But in the process of creating content for your brand, we would NEVER cut corners. We guarantee that every piece that comes from us is 100 percent original and plagiarism free.</p>
              <p className="mb-0">In a bid to sustain quality delivery, we are always looking for competent hands to join our small team, so if this feels like you, send us a message today. We would love to hear from you.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-r from-blue-900 to-green-900 py-12 h-full">
            <div className="bg-white max-w-lg m-auto rounded object-none object-center" style={{boxShadow: "0 2px 30px 0 rgba(0,0,0,.63)"}}>
              <h2 className="text-5xl font-black text-center pt-12">Let's write amazing stuff together.</h2>
              <form onSubmit={handleOnSubmit} className="p-8 max-w-lg">
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
                <button type="submit" disabled={serverState.submitting} className="transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 border border-green-500 text-center text-sm flex-shrink-0 text-white bg-black border-0 p-2 mt-8 focus:outline-none rounded font-bold " style={{boxShadow: "0 2px 10px 0 rgba(0,0,0,.63)"}}>
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
    </div>
  </Layout>
)};

export default IndexPage
