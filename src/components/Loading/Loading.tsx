import Spinner from './spinner.gif';

export const Loading = () => {
  return (
    <div data-testid='loading' style={{marginTop: '0'}}>
      <img src={Spinner} alt="spinner" />
    </div>
  )
};

