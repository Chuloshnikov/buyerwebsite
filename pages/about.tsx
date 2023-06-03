
import React from 'react';
import Head from 'next/head';
import AboutHelloSection from '../components/aboutSections/AboutHelloSection';
import AboutInfoSection from '../components/aboutSections/AboutInfoSection';
import AboutOrderingSection from '../components/aboutSections/AboutOrderingSection';
import AboutAvailableSection from '../components/aboutSections/AboutAvailableSection';
import AboutPaymentSection from '../components/aboutSections/AboutPaymentSection';
import AboutClosedChannelSection from '../components/aboutSections/AboutClosedChannelSection';

const About = () => {
  return (
    <>
        <Head>
            <title>Про послуги</title>
            <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/buyerfavicon.ico" />
        </Head>
        <main className='flex flex-col gap-16 mt-8 mb-8'>
            <AboutHelloSection/>
            <AboutInfoSection/>
            <AboutOrderingSection/>
            <AboutAvailableSection/>
            <AboutPaymentSection/>
            <AboutClosedChannelSection/>
        </main>
    </>
    
  )
}

export default About;