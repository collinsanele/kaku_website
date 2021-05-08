import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'
import blogging from '../images/blogging.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'POST',
      url: 'https://getform.io/f/a4dd575d-f065-4e4b-870c-063daf7ed820',
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <Layout>
      <SEO title='Home' />
      <main className='bgcolor'>
      
        <section className='w-full text-purple-874 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 mt-20  ml-6 md:ml-40 md:flex md:flex-col md:items-center'>
            <h1 className='text-4xl md:text-6xl md:text-center font-medium '>
              A One-Stop Solution To All Your Brands' Contents Needs
            </h1>
            <p className='mt-12 '>
              Brands need to stand out in today's digital space and we create
              content that helps your brand connect with your ideal audience.
              Its the perfect match!
            </p>
            <Link
              to='/pricing/'
              className='flex w-40 my-12 bg-white text-green-900 rounded-3xl px-2 py-4 transition-colors duration-200 transform '
            >
              <p className='mx-auto'>Check our prices</p>
            </Link>
          </div>

          <div className='flex items-center justify-center w-full md:w-1/2 mt-20 md:mt-0 md:ml-60'>
            <img src={blogging} alt='blogging' className='' />
          </div>
        </section>

        {/* form section */}
        <section className='bg-gradient-to-r from-blue-900 to-green-900 py-12 h-full'>
          <div
            className='bg-white max-w-lg m-auto rounded object-none object-center'
            style={{ boxShadow: '0 2px 30px 0 rgba(0,0,0,.63)' }}
          >
            <h2 className='text-5xl font-black text-center pt-12'>
              Let's write amazing stuff together.
            </h2>
            <form onSubmit={handleOnSubmit} className='p-8 max-w-lg'>
              <div className='grid grid-cols-1 gap-6'>
                <label className='block'>
                  <span className='text-black text-sm font-bold'>
                    Full Name
                  </span>
                  <input
                    className='mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black 	focus:ring-opacity-100'
                    type='text'
                    name='name'
                    placeholder='ex. John Smith'
                    aria-describedby='nameHelp'
                  />
                </label>
                <label className='block' required='required'>
                  <span className='text-black text-sm font-bold'>Email</span>
                  <input
                    className='mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black focus:ring-opacity-100'
                    type='email'
                    name='email'
                    placeholder='ex. johnsmith@example.com'
                    aria-describedby='emailHelp'
                  />
                </label>
                <label className='block' required='required'>
                  <span className='text-black text-sm font-bold'>
                    Phone number
                  </span>
                  <input
                    className='mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black  focus:ring-opacity-100'
                    type='text'
                    name='tel'
                    placeholder='ex. 123-456-7890'
                    aria-describedby='telHelp'
                  />
                </label>
                <label className='block' required='required'>
                  <span className='text-black text-sm font-bold'>Message</span>
                  <textarea
                    className='mt-1 p-3 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring focus:ring-black focus:ring-opacity-100'
                    type='text'
                    name='message'
                    placeholder='ex. Hello! I have a large Blog project and need agency help. My preferred date of completion is in 12 weeks time.'
                    rows='3'
                  ></textarea>
                </label>
              </div>
              <button
                type='submit'
                disabled={serverState.submitting}
                className='transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 border border-green-500 text-center text-sm flex-shrink-0 text-white bg-black border-0 p-2 mt-8 focus:outline-none rounded font-bold '
                style={{
                  boxShadow: '7px 7px 16px #a8abab, -7px 7px 16px #ffffff'
                }}
              >
                Send message
              </button>
              {serverState.status && (
                <p className={!serverState.status.ok ? 'errorMsg' : ''}>
                  {serverState.status.msg}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
