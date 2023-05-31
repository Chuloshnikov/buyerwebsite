
import React from 'react';
import Head from 'next/head';
import AboutHelloSection from '../components/AboutHelloSection';
import AboutInfoSection from '../components/AboutInfoSection';

const About = () => {
  return (
    <>
        <Head>
            <title>Про послуги</title>
            <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/buyerfavicon.ico" />
        </Head>
        <main>
            <AboutHelloSection/>
            <AboutInfoSection/>
        </main>
    </>
    
  )
}

export default About;