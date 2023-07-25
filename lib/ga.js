import ReactGA from 'react-ga';

const GA_ID = process.env.YOUR_TRACKING_ID;

export const initGA = () => {
  ReactGA.initialize(GA_ID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};