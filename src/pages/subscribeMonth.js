import { Link } from "react-router-dom";
import { auth } from "../firebase";
import CountriesSubscription from "../components/countriesSubscription";
import StatesSubscription from "../components/statesSubscription";
import FooterSubscription from "../components/footerSubscription";

const SubscribeMonth = () => {
  const userEmail = auth.currentUser?.email ?? "";

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
            Subscribe to Summarist Premium Plus
          </p>
          <div className="subscribe-checkout__price">
            <span className="subscribe-checkout__price-amount">$9.99</span>
            <span className="subscribe-checkout__price-interval">per month</span>
          </div>
        </aside>

        <main className="subscribe-checkout__main">
          <form className="subscribe-checkout__form" id="payment-form" noValidate>
            <section className="subscribe-checkout__section">
              <h2>Contact information</h2>
              <div className="subscribe-checkout__field">
                <label htmlFor="checkout-email">Email</label>
                <input
                  id="checkout-email"
                  type="email"
                  readOnly
                  value={userEmail}
                  placeholder="your@email.com"
                />
              </div>
            </section>

            <section className="subscribe-checkout__section">
              <h2>Payment method</h2>
              <p className="subscribe-checkout__method-label">
                <span className="subscribe-checkout__method-icon" aria-hidden="true">
                  💳
                </span>
                Card
              </p>

              <div className="subscribe-checkout__field">
                <label htmlFor="cardNumber">Card information</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="1234 1234 1234 1234"
                />
              </div>

              <div className="subscribe-checkout__row">
                <div className="subscribe-checkout__field">
                  <label htmlFor="cardExpiry">Expiration</label>
                  <input
                    id="cardExpiry"
                    name="cardExpiry"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM / YY"
                  />
                </div>
                <div className="subscribe-checkout__field">
                  <label htmlFor="cardCvc">CVC</label>
                  <input
                    id="cardCvc"
                    name="cardCvc"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <div className="subscribe-checkout__field">
                <label htmlFor="billingName">Cardholder name</label>
                <input
                  id="billingName"
                  name="billingName"
                  type="text"
                  autoComplete="cc-name"
                  placeholder="Full name on card"
                />
              </div>
            </section>

            <section className="subscribe-checkout__section">
              <h2>Billing address</h2>

              <div className="subscribe-checkout__field">
                <label htmlFor="billingCountry">Country or region</label>
                <select
                  id="billingCountry"
                  name="billingCountry"
                  autoComplete="billing country"
                  defaultValue="US"
                >
                  <option value="" disabled hidden>
                    Select country
                  </option>
                  <CountriesSubscription />
                </select>
              </div>

              <div className="subscribe-checkout__field">
                <label htmlFor="billingAddressLine1">Address</label>
                <input
                  id="billingAddressLine1"
                  name="billingAddressLine1"
                  type="text"
                  autoComplete="billing address-line1"
                  placeholder="Address"
                />
              </div>

              <div className="subscribe-checkout__row">
                <div className="subscribe-checkout__field">
                  <label htmlFor="billingLocality">City</label>
                  <input
                    id="billingLocality"
                    name="billingLocality"
                    type="text"
                    autoComplete="billing address-level2"
                    placeholder="City"
                  />
                </div>
                <div className="subscribe-checkout__field">
                  <label htmlFor="billingPostalCode">ZIP</label>
                  <input
                    id="billingPostalCode"
                    name="billingPostalCode"
                    type="text"
                    inputMode="numeric"
                    autoComplete="billing postal-code"
                    placeholder="ZIP"
                  />
                </div>
              </div>

              <div className="subscribe-checkout__field">
                <label htmlFor="billingAdministrativeArea">State</label>
                <select
                  id="billingAdministrativeArea"
                  name="billingAdministrativeArea"
                  autoComplete="billing address-level1"
                  defaultValue=""
                >
                  <option value="" disabled>
                    State
                  </option>
                  <StatesSubscription />
                </select>
              </div>
            </section>

            <button type="submit" className="subscribe-checkout__submit">
              Subscribe
            </button>

            <p className="subscribe-checkout__terms">
              By subscribing, you authorize Summarist to charge you according to
              the terms until you cancel.
            </p>
          </form>
        </main>
      </div>

      <footer className="subscribe-checkout__footer">
        <FooterSubscription />
      </footer>
    </div>
  );
};

export default SubscribeMonth;
