import SubscribeCheckoutLayout from "../components/SubscribeCheckoutLayout";
import { SUBSCRIPTION_PLANS } from "../constants/subscriptionPlans";

const plan = SUBSCRIPTION_PLANS.monthly;

const SubscribeMonth = () => (
  <SubscribeCheckoutLayout
    plan={plan.id}
    price={plan.checkoutPrice}
    interval={plan.checkoutInterval}
    planTitle={plan.title}
  />
);

export default SubscribeMonth;
