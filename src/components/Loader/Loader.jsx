import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.Loader}>
    <Puff 
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
    </div>
  );
};
export default Loader;
