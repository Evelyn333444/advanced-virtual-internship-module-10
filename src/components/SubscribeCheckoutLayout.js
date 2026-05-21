import { Link } from "react-router-dom";
import FooterSubscription from "./footerSubscription";
import SubscribeCheckoutForm from "./SubscribeCheckoutForm";

const SubscribeCheckoutLayout = ({ plan, price, interval, planTitle }) => {
  const idPrefix = `-${plan}`;

  return (
    <div className="subscribe-checkout">
      <header className="subscribe-checkout__header">
        <Link to="/choose-plan" className="subscribe-checkout__back">
          <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M3.417 7H15a1 1 0 0 1 0 2H3.417l4.591 4.591a1 1 0 0 1-1.415 1.416l-6.3-6.3a1 1 0 0 1 0-1.414l6.3-6.3A1 1 0 0 1 8.008 2.41z"
              fillRule="evenodd"
            />
          </svg>
          <span>Back</span>
        </Link>
        <div className="subscribe-checkout__brand">
          <span className="subscribe-checkout__brand-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9977 8.19089C15.6092 7.64898 16.0002 6.87952 16.0002 6V5.90012C16.0002 5.58415 15.9687 5.26896 15.9061 4.95925L15.2757 1.83964L15.2729 1.82792C15.1493 1.3036 14.9237 0.814761 14.4989 0.46826C14.0702 0.118638 13.5447 2.32458e-05 13 2.20537e-05L3 0C2.45536 0 1.92982 0.118541 1.50106 0.46812C1.0761 0.814602 0.850422 1.30347 0.726786 1.8279L0.72402 1.83963L0.0936206 4.95927C0.0310375 5.26897 -0.000488281 5.58414 -0.000488281 5.90011V6C-0.000488281 6.87964 0.390631 7.64918 1.00228 8.19109C1.00077 8.21053 1 8.23017 1 8.25V13.75C1 14.9926 2.00736 16 3.25 16H12.75C13.9926 16 15 14.9926 15 13.75V8.25C15 8.2301 14.9992 8.21039 14.9977 8.19089Z"
                fill="#1A1A1A"
                fillOpacity="0.5"
              />
            </svg>
          </span>
          <h1>Summarist</h1>
        </div>
        <span className="subscribe-checkout__sandbox">Sandbox</span>
      </header>

      <div className="subscribe-checkout__layout">
        <aside className="subscribe-checkout__summary">
          <p className="subscribe-checkout__plan-label">
            {planTitle || "Subscribe to Summarist Premium Plus"}
          </p>
          <div className="subscribe-checkout__price">
            <span className="subscribe-checkout__price-amount">{price}</span>
            <span className="subscribe-checkout__price-interval">{interval}</span>
          </div>
        </aside>

        <main className="subscribe-checkout__main">
          <SubscribeCheckoutForm plan={plan} idPrefix={idPrefix} />
        </main>
      </div>

      <footer className="subscribe-checkout__footer">
        <FooterSubscription />
      </footer>
    </div>
  );
};

export default SubscribeCheckoutLayout;
