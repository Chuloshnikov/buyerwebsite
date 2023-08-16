import React, { useEffect } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { Inter } from 'next/font/google';
import Banner from '../components/Banner';
import AboutInfoSection from '../components/aboutSections/AboutInfoSection';
import HeroAboutSection from '../components/HeroAboutSection';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Head>
        <title>Buyer Anastasia</title>
        <meta name="Баєр Анастасія" content="Tвій найкращий баєр" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/buyerfavicon.ico" />
      </Head>
      <main>
        <div className='max-w-contentContainer m-auto mb-5'>
            <Banner/>
            <AboutInfoSection/>
            <div>
              <HeroAboutSection/>
            </div>
        </div>
      </main>
    </>
  )
}




