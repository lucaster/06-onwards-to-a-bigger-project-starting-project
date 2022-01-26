import '../styles/globals.css'

/**
 * This will decorate all page components.
 * Add common layout here
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>WRAPPED</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
