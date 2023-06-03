
import React from 'react';
import Head from 'next/head';
import AboutHelloSection from '../components/AboutHelloSection';
import AboutInfoSection from '../components/AboutInfoSection';
import AboutOrderingSection from '../components/AboutOrderingSection';
import AboutAvailableSection from '../components/AboutAvailableSection';
import AboutPaymentSection from '../components/AboutPaymentSection';

const About = () => {
  return (
    <>
        <Head>
            <title>Про послуги</title>
            <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/buyerfavicon.ico" />
        </Head>
        <main className='flex flex-col gap-16 mt-8'>
            <AboutHelloSection/>
            <AboutInfoSection/>
            <AboutOrderingSection/>
            <AboutAvailableSection/>
            <AboutPaymentSection/>
        </main>
    </>
    
  )
}

export default About;