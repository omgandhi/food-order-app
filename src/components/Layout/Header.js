import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.png';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MealPrep Deliveries</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Healthy prepackaged meals' />
      </div>
    </>
  );
};

export default Header;
