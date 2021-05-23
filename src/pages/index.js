import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/Form'

// svgs
import blogging from '../images/blogging.svg'
import content_f from '../images/content-f.svg'
import content_m from '../images/content-m.svg'
import groupchat from '../images/group-chat.svg'
import podcast_f from '../images/podcast-f.svg'
import typewriter from '../images/typewriter.svg'

// animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

const IndexPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])


  return (
    <Layout>
      <SEO title='Home' />
      <main className=''>
        {/* hero section */}
        <section className='container px-6 py-16 mx-auto'>
          <div className='items-center md:flex'>
            <div className='w-full md:w-1/2'>
              <div className='max-w-lg mt-10 md:mt-0'>
                <h1 className='noto text-2xl font-semibold text-purple-874 md:text-3xl' data-aos={"fade-up"} data-aos-delay={"300"}>
                  A One-Stop Solution To All Your Brands' Contents Needs
                </h1>
                <p className='mt-4 text-gray-600 dark:text-gray-400' data-aos={"fade-up"} data-aos-delay={"400"}>
                  Brands need to stand out in today's digital space and we
                  create content that helps your brand connect with your ideal
                  audience. Its the perfect match!
                </p>
                <Link to='/Pricing/'>
                  <button className='px-3 py-2 mt-8 text-sm font-medium text-white uppercase bg-gradient-to-r from-purple-874 via-purple-874 to-blue-600 rounded-md hover:from-black focus:outline-none focus:bg-black' data-aos={"fade-up"} data-aos-delay={"500"}>
                    Check our prices
                  </button>{' '}
                </Link>
              </div>
            </div>

            <div className='flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2'>
              <img
                className='w-full h-full max-w-2xl'
                src={blogging}
                alt='blogging'
              />
            </div>
          </div>
        </section>

        {/* services section */}
        <section>
          <h2 className='text-center text-3xl md:text-4xl font-bold text-purple-874 mb-6'>
            Our Services
          </h2>
          <div className='container px-6 py-8 mx-auto'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col'>
                <img src={content_m} alt='' className='w-32 self-center' />

                <h2 className='mt-4 text-xl font-semibold text-purple-874' data-aos={"fade-up"}>
                  Content Writing
                </h2>

                <p className='mt-2 text-gray-500 dark:text-gray-400'  data-aos={"fade-up"}>
                  What are your brand’s goals? More conversion, engagement,
                  exposure? You name it! We create highly-captivating content
                  that prompts action from your readers. Bringing you a step
                  closer to landing your next big client.
                </p>
              </div>

              <div className='flex flex-col'>
                <img src={content_f} alt='' className='w-60 self-center' />

                <h2 className='mt-4 text-xl font-semibold text-purple-874' data-aos={"fade-up"}>
                  Articles and Blog posts
                </h2>

                <p className='mt-2 text-gray-500 dark:text-gray-400' data-aos={"fade-up"}>
                  From your industry’s trending topics to informative how-to’s,
                  add value and connect with your target audience with articles
                  that have been optimized for search engines.
                </p>
              </div>

              <div className='flex flex-col'>
                <img src={groupchat} alt='' className='w-56 self-center' />

                <h2 className='mt-4 text-xl font-semibold text-purple-874' data-aos={"fade-up"}>
                  Technical Writing
                </h2>

                <p className='mt-2 text-gray-500 dark:text-gray-400' data-aos={"fade-up"}>
                  In need of who can creatively express all the boring technical
                  jargon? Our diverse industry specialists are at hand to create
                  content tailored to your niche.
                </p>
              </div>
            </div>
          </div>

          <div className='container px-6 pb-8 mx-auto'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col'>
                <img src={typewriter} alt='' className='w-56 self-center' />

                <h2 className='mt-5 text-xl font-semibold text-purple-874' data-aos={"fade-up"}>
                  UI & UX Writing
                </h2>

                <p className='mt-2 text-gray-500 dark:text-gray-400' data-aos={"fade-up"}>
                  Provide a memorable digital experience for your everyone that
                  visits your platform by ensuring your message is clear and
                  concise. Let our team of creatives infuse your brand’s persona
                  into every aspect of your platform.
                </p>
              </div>

              <div className='flex flex-col'>
                <img src={podcast_f} alt='' className='w-60 self-center' />

                <h2 className='mt-4 text-xl font-semibold text-purple-874' data-aos={"fade-up"}>
                  Script Writing
                </h2>

                <p className='mt-2 text-gray-500 dark:text-gray-400' data-aos={"fade-up"}>
                  Getting started on your podcast or YouTube channel? or Running
                  a short ad campaign for your brand? Let us develop scripts
                  that engage and keep your listeners or viewers while at the
                  same time, expressing your brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* form section */}
        <Form />

      </main>
    </Layout>
  )
}

export default IndexPage
