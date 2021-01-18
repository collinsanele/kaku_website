import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fixedbutton from "../components/Fixedbutton";


const Pricing = () => (
  <Layout>
    <SEO title="Pricing" />
      <section className="text-black body-font overflow-hidden bgcolor">
      <Fixedbutton/>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-2 text-gray-900 noto">Pricing and Plans</h1>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-black flex flex-col relative overflow-hidden">
              <p style={{width: 'fit-content'}} className="text-sm tracking-widest mb-1 font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">STARTER</p>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$150</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Robust, short format content
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span> Up to 3000 words in total
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>(four) 600-word pieces/month
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>1 round of revisions
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Keyword research
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Competitor analysis
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Content editing
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Topic Ideation
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Internal and External Links
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cited stats
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Plagiarism checks
              </p>
              <Link to="/Contact/" className="flex items-center mt-auto text-gray-200 z-5 bg-black bg-gradient-to-r hover:from-blue-500 hover:to-green-500 border-0 py-2 px-4 w-full focus:outline-none rounded">Select
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-black flex flex-col relative overflow-hidden">
            <p style={{width: 'fit-content'}} className="text-sm tracking-widest mb-1 font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">STANDARD</p>
             <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$300</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Robust, short format and a long format content
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Up to 6000 words in total
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>(eight) 600-word pieces/month. Plus (one) 1.5k word feature
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>2 rounds of revisions
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Keyword research
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Competitor analysis
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Content editing and proof reading
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Topic Ideation
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Internal and External Links
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cited stats
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Headline alternatives
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Plagiarism checks
              </p>
              <Link to="/Contact/" className="flex items-center mt-auto text-gray-200 bg-black z-5 bg-gradient-to-r hover:from-blue-500 hover:to-green-500 border-0 py-2 px-4 w-full focus:outline-none  rounded">Select
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-black flex flex-col relative overflow-hidden">
            <p style={{width: 'fit-content'}} className="text-sm tracking-widest mb-1 font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">PREMIUM</p>              
            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$500</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
              </h1>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Robust, long format content
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Up to 10000 words in total
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>(six) 1,500-word pieces/month. Plus (one) 2k word feature
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Detailed outlines
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>3 rounds of revisions
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Keyword research
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Competitor analysis
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Headline alternatives
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Custom illustrations
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Content editing and proof reading
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Topic Ideation
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Internal and External Links
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Cited stats
              </p>
              <p className="flex items-center text-black mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Plagiarism checks
              </p>
              <Link to="/Contact/" className="flex items-center mt-auto text-gray-200 bg-black z-5 bg-gradient-to-r hover:from-blue-500 hover:to-green-500 border-0 py-2 px-4 w-full focus:outline-none rounded">Select
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
);

export default Pricing;
