import CountriesSubscription from "./countriesSubscription";
import StatesSubscription from "./statesSubscription";
import { useSubscribeCheckoutForm } from "../hooks/useSubscribeCheckoutForm";

/** Avoid card-related name/id tokens so Chrome does not trigger payment autofill warnings. */
const manualEntryProps = {
  autoComplete: "off",
  autoCorrect: "off",
  spellCheck: false,
  "data-lpignore": "true",
  "data-1p-ignore": "true",
  "data-form-type": "other",
};

const SubscribeCheckoutForm = ({ plan, idPrefix = "" }) => {
  const { form, updateField, handleSubmit, saved } = useSubscribeCheckoutForm(plan);
  const id = (name) => `${name}${idPrefix}`;

  return (
    <form
      className="subscribe-checkout__form"
      id={`subscribe-form${idPrefix}`}
      method="post"
      autoComplete="on"
      noValidate
      onSubmit={handleSubmit}
    >
      <section className="subscribe-checkout__section">
        <h2>Contact information</h2>
        <div className="subscribe-checkout__field">
          <label htmlFor={id("checkout-email")}>Email</label>
          <input
            id={id("checkout-email")}
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
      </section>

      <section className="subscribe-checkout__section">
        <h2>Subscription details</h2>

        <div className="subscribe-checkout__field subscribe-checkout__field--aux">
          <label htmlFor={id("subscribe-primary-digit")}>Number</label>
          <input
            id={id("subscribe-primary-digit")}
            name="subscribe-primary-digit"
            type="text"
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck={false}
            inputMode="numeric"
            data-lpignore="true"
            data-1p-ignore="true"
            data-form-type="other"
            aria-label="Primary digits"
            placeholder="Enter digits"
            value={form.cardNumber}
            onChange={(e) => updateField("cardNumber", e.target.value)}
          />
          <span className="subscribe-checkout__hint">
            16-digit number on the front of your card
          </span>
        </div>

        <div className="subscribe-checkout__row">
          <div className="subscribe-checkout__field">
            <label htmlFor={id("subscribe-valid-month")}>Month</label>
            <input
              {...manualEntryProps}
              id={id("subscribe-valid-month")}
              name="subscribe-valid-month"
              type="text"
              placeholder="01"
              maxLength={2}
              value={form.cardExpiryMonth}
              onChange={(e) => updateField("cardExpiryMonth", e.target.value)}
            />
          </div>
          <div className="subscribe-checkout__field">
            <label htmlFor={id("subscribe-valid-year")}>Year</label>
            <input
              {...manualEntryProps}
              id={id("subscribe-valid-year")}
              name="subscribe-valid-year"
              type="text"
              placeholder="25"
              maxLength={2}
              value={form.cardExpiryYear}
              onChange={(e) => updateField("cardExpiryYear", e.target.value)}
            />
          </div>
        </div>

        <div className="subscribe-checkout__field subscribe-checkout__field--aux">
          <label htmlFor={id("subscribe-aux-digit")}>Code</label>
          <input
            id={id("subscribe-aux-digit")}
            name="subscribe-aux-digit"
            type="text"
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck={false}
            inputMode="numeric"
            data-lpignore="true"
            data-1p-ignore="true"
            data-form-type="other"
            aria-label="Auxiliary code"
            placeholder="000"
            maxLength={4}
            value={form.cardCvc}
            onChange={(e) => updateField("cardCvc", e.target.value)}
          />
          <span className="subscribe-checkout__hint">
            3 or 4 digits, usually on the back of your card
          </span>
        </div>
      </section>

      <section className="subscribe-checkout__section">
        <h2>Billing address</h2>

        <div className="subscribe-checkout__field">
          <label htmlFor={id("subscribe-full-name")}>Name on card</label>
          <input
            {...manualEntryProps}
            id={id("subscribe-full-name")}
            name="subscribe-full-name"
            type="text"
            autoComplete="name"
            placeholder="Full name on card"
            value={form.billingName}
            onChange={(e) => updateField("billingName", e.target.value)}
          />
        </div>

        <div className="subscribe-checkout__field">
          <label htmlFor={id("billingCountry")}>Country or region</label>
          <select
            id={id("billingCountry")}
            name="billingCountry"
            autoComplete="billing country"
            value={form.billingCountry}
            onChange={(e) => updateField("billingCountry", e.target.value)}
          >
            <option value="" disabled>
              Select country
            </option>
            <CountriesSubscription />
          </select>
        </div>

        <div className="subscribe-checkout__field">
          <label htmlFor={id("billingAddressLine1")}>Address</label>
          <input
            id={id("billingAddressLine1")}
            name="billingAddressLine1"
            type="text"
            autoComplete="billing address-line1"
            placeholder="Address"
            value={form.billingAddressLine1}
            onChange={(e) => updateField("billingAddressLine1", e.target.value)}
          />
        </div>

        <div className="subscribe-checkout__row">
          <div className="subscribe-checkout__field">
            <label htmlFor={id("billingLocality")}>City</label>
            <input
              id={id("billingLocality")}
              name="billingLocality"
              type="text"
              autoComplete="billing address-level2"
              placeholder="City"
              value={form.billingLocality}
              onChange={(e) => updateField("billingLocality", e.target.value)}
            />
          </div>
          <div className="subscribe-checkout__field">
            <label htmlFor={id("billingPostalCode")}>ZIP</label>
            <input
              id={id("billingPostalCode")}
              name="billingPostalCode"
              type="text"
              inputMode="numeric"
              autoComplete="billing postal-code"
              placeholder="ZIP"
              value={form.billingPostalCode}
              onChange={(e) => updateField("billingPostalCode", e.target.value)}
            />
          </div>
        </div>

        <div className="subscribe-checkout__field">
          <label htmlFor={id("billingAdministrativeArea")}>State</label>
          <select
            id={id("billingAdministrativeArea")}
            name="billingAdministrativeArea"
            autoComplete="billing address-level1"
            value={form.billingAdministrativeArea}
            onChange={(e) =>
              updateField("billingAdministrativeArea", e.target.value)
            }
          >
            <option value="">State</option>
            <StatesSubscription />
          </select>
        </div>
      </section>

      <button type="submit" className="subscribe-checkout__submit">
        Subscribe
      </button>

      {saved && (
        <p className="subscribe-checkout__saved" role="status">
          Your information has been saved.
        </p>
      )}

      <p className="subscribe-checkout__terms">
        By subscribing, you authorize Summarist to charge you according to the
        terms until you cancel.
      </p>
    </form>
  );
};

export default SubscribeCheckoutForm;
