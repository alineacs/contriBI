import type { AppProps } from 'next/app';
import { UserContextProvider } from '../context/userContext';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
