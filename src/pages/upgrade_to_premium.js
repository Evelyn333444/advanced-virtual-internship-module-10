import Footer from "../components/footer";
import { useState } from "react";
import pricingTop from "../assets/pricing-top.png";
import UpgradeCancel from "../components/upgradeCancel";
import UpgradeIncluded from "../components/upgradeIncluded";
import UpgradeSevenDay from "../components/upgradeSevenDay";
import UpgradeSwitch from "../components/upgradeSwitch";
import { useNavigate } from "react-router-dom";
import {
  SUBSCRIPTION_PLANS,
  loadSelectedPlan,
  saveSelectedPlan,
} from "../constants/subscriptionPlans";

const UpgradeToPremium = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(loadSelectedPlan);
  const navigate = useNavigate();

  const activePlan = SUBSCRIPTION_PLANS[selectedPlan];

  const selectPlan = (planKey) => {
    setSelectedPlan(planKey);
    saveSelectedPlan(planKey);
  };

  const toggleAccordion = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const handleTrialClick = () => {
    saveSelectedPlan(selectedPlan);
    navigate(activePlan.route);
  };

  return (
    <>
      <div id="__next">
        <div className="wrapper wrapper__full">
          <div className="sidebar__overlay sidebar__overlay--hidden"></div>
          <div className="plan">
            <div className="plan__header--wrapper">
              <div className="plan__header">
                <div className="plan__title">
                  Get unlimited access to many amazing books to read
                </div>
                <div className="plan__sub--title">
                  Turn ordinary moments into amazing learning opportunities
                </div>
                <figure className="plan__img--mask">
                  <img alt="pricing" src={pricingTop} />
                </figure>
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="plan__features--wrapper">
                  <div className="plan__features">
                    <figure className="plan__features--icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z"></path>
                      </svg>
                    </figure>
                    <div className="plan__features--text">
                      <b>Key ideas in few min</b> with many books to read
                    </div>
                  </div>
                  <div className="plan__features">
                    <figure className="plan__features--icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0H24V24H0z"></path>
                          <path d="M21 3v2c0 3.866-3.134 7-7 7h-1v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-3c0-3.866 3.134-7 7-7h3zM5.5 2c2.529 0 4.765 1.251 6.124 3.169C10.604 6.51 10 8.185 10 10v1h-.5C5.358 11 2 7.642 2 3.5V2h3.5z"></path>
                        </g>
                      </svg>
                    </figure>
                    <div className="plan__features--text">
                      <b>3 million</b> people growing with Summarist everyday
                    </div>
                  </div>
                  <div className="plan__features">
                    <figure className="plan__features--icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                      </svg>
                    </figure>
                    <div className="plan__features--text">
                      <b>Precise recommendations</b> collections curated by
                      experts
                    </div>
                  </div>
                </div>

                <div className="section__title">Choose the plan that fits you</div>

                <div
                  className="plan__cards--wrapper"
                  role="radiogroup"
                  aria-label="Choose a subscription plan"
                >
                  {Object.values(SUBSCRIPTION_PLANS).map((plan) => {
                    const isActive = selectedPlan === plan.selectionKey;
                    return (
                      <button
                        key={plan.selectionKey}
                        type="button"
                        className={`plan__card ${
                          isActive ? "plan__card--active" : ""
                        }`}
                        onClick={() => selectPlan(plan.selectionKey)}
                        aria-pressed={isActive}
                      >
                        <div className="plan__card--circle">
                          {isActive && <div className="plan__card--dot"></div>}
                        </div>
                        <div className="plan__card--content">
                          <div className="plan__card--title">{plan.title}</div>
                          <div className="plan__card--price">
                            {plan.displayPrice}
                          </div>
                          <div className="plan__card--text">{plan.trialNote}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="plan__card--cta">
                  <span className="btn--wrapper">
                    <button
                      type="button"
                      className="btn"
                      style={{ width: "300px" }}
                      onClick={handleTrialClick}
                    >
                      {activePlan.ctaLabel}
                    </button>
                  </span>
                  <div className="plan__disclaimer">{activePlan.disclaimer}</div>
                </div>

                <div className="faq__wrapper">
                  <div>
                    <UpgradeSevenDay
                      open={openIndex === 0}
                      onToggle={() => toggleAccordion(0)}
                    />
                    <UpgradeSwitch
                      open={openIndex === 1}
                      onToggle={() => toggleAccordion(1)}
                    />
                    <UpgradeIncluded
                      open={openIndex === 2}
                      onToggle={() => toggleAccordion(2)}
                    />
                    <UpgradeCancel
                      open={openIndex === 3}
                      onToggle={() => toggleAccordion(3)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradeToPremium;
