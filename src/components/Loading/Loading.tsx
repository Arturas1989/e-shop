import Spinner from './spinner.gif';

export const Loading = () => {
  return (
    <div data-testid='loading'><img src={Spinner} alt="spinner" /></div>
  )
};

