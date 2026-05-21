export const SUBSCRIPTION_PLANS = {
  yearly: {
    id: "year",
    selectionKey: "yearly",
    title: "Premium Plus Yearly",
    displayPrice: "$99.99/year",
    checkoutPrice: "$99.00",
    checkoutInterval: "per year",
    route: "/subscribe-year",
    trialNote: "7-day free trial included",
    ctaLabel: "Start your free 7-day trial",
    disclaimer:
      "Cancel your trial at any time before it ends, and you won't be charged.",
  },
  monthly: {
    id: "month",
    selectionKey: "monthly",
    title: "Premium Monthly",
    displayPrice: "$9.99/month",
    checkoutPrice: "$9.99",
    checkoutInterval: "per month",
    route: "/subscribe-month",
    trialNote: "No trial included",
    ctaLabel: "Subscribe monthly",
    disclaimer: "Billed monthly. Cancel anytime from your account settings.",
  },
};

export const SELECTED_PLAN_STORAGE_KEY = "summarist-selected-plan";

export function saveSelectedPlan(selectionKey) {
  try {
    localStorage.setItem(SELECTED_PLAN_STORAGE_KEY, selectionKey);
  } catch {
    // ignore
  }
}

export function loadSelectedPlan() {
  try {
    const saved = localStorage.getItem(SELECTED_PLAN_STORAGE_KEY);
    if (saved === "yearly" || saved === "monthly") return saved;
  } catch {
    // ignore
  }
  return "yearly";
}
