import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Healthy Food, Delivered To You</h2>
      <p>
        Instead of buying greasy fast food, or spending hours cooking every week, get our ready-to-eat, healthy meals delivered to your door!
      </p>
      <p>
        All our meals are cooked with high-quality ingredients and can last in your fridge for one week. We even have some vegan options for you to choose from!
      </p>
    </section>
  );
};

export default MealsSummary;
