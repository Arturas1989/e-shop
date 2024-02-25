import { PrimaryButton } from '../../components';
import NotFoundImg from './Page not found.png';

export const PageNotFound = () => {
  return (
    <main className="page-not-found">
      <h1>404</h1>
      <img src={NotFoundImg} alt="page not found" />
      <h2>Page not found</h2>
      <p>We're sorry, the page you requested could not be found</p>
      <PrimaryButton>
        <a href="/">Go to home page</a>
      </PrimaryButton>
    </main>
  )
};
