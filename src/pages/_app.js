import WebXLayout from '../layouts/WebXLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WebXLayout>
        <Component {...pageProps} />
      </WebXLayout>
    </>
  );
}

export default MyApp;
