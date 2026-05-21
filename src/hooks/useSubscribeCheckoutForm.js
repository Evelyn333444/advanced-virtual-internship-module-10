import { useState, useEffect, useCallback } from "react";
import { auth } from "../firebase";

const STORAGE_KEY = "summarist-subscribe-checkout";

export const defaultCheckoutForm = {
  plan: "",
  email: "",
  cardNumber: "",
  cardExpiryMonth: "",
  cardExpiryYear: "",
  cardCvc: "",
  billingName: "",
  billingCountry: "US",
  billingAddressLine1: "",
  billingLocality: "",
  billingPostalCode: "",
  billingAdministrativeArea: "",
};

export function loadCheckoutForm() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : null;
  } catch {
    return null;
  }
}

export function saveCheckoutForm(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota / private mode errors
  }
}

function parseLegacyExpiry(cardExpiry) {
  if (!cardExpiry || typeof cardExpiry !== "string") {
    return { cardExpiryMonth: "", cardExpiryYear: "" };
  }
  const parts = cardExpiry.replace(/\s/g, "").split("/");
  if (parts.length !== 2) {
    return { cardExpiryMonth: "", cardExpiryYear: "" };
  }
  return {
    cardExpiryMonth: parts[0].slice(0, 2),
    cardExpiryYear: parts[1].slice(-2),
  };
}

function getInitialForm() {
  const saved = loadCheckoutForm();
  const email = saved?.email || auth.currentUser?.email || "";
  const { cardExpiry, ...rest } = saved || {};
  const expiry = parseLegacyExpiry(cardExpiry);
  return {
    ...defaultCheckoutForm,
    ...rest,
    ...expiry,
    email,
  };
}

export function useSubscribeCheckoutForm(plan) {
  const [form, setForm] = useState(getInitialForm);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!plan) return;
    setForm((prev) => (prev.plan === plan ? prev : { ...prev, plan }));
  }, [plan]);

  useEffect(() => {
    saveCheckoutForm(form);
  }, [form]);

  const updateField = useCallback((name, value) => {
    setSaved(false);
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    saveCheckoutForm(form);
    setSaved(true);
  }, [form]);

  return { form, updateField, handleSubmit, saved };
}
