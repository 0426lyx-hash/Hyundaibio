"use client";

import { useState } from "react";

type InquiryCopy = {
  company: string;
  country: string;
  phone: string;
  type: string;
  email: string;
  message: string;
  select: string;
  options: string[];
  submit: string;
  sending: string;
  success: string;
  error: string;
};

export function InquiryForm({ copy }: { copy: InquiryCopy }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      company: formData.get("company"),
      country: formData.get("country"),
      phone: formData.get("phone"),
      businessType: formData.get("businessType"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label className="inquiry-field">
        <span>{copy.company} *</span>
        <input autoComplete="organization" name="company" required />
      </label>
      <label className="inquiry-field">
        <span>{copy.country} *</span>
        <input autoComplete="country-name" name="country" required />
      </label>
      <label className="inquiry-field">
        <span>{copy.phone} *</span>
        <input autoComplete="tel" name="phone" required type="tel" />
      </label>
      <label className="inquiry-field">
        <span>{copy.type} *</span>
        <select defaultValue="" name="businessType" required>
          <option disabled value="">{copy.select}</option>
          {copy.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      <label className="inquiry-field inquiry-field-wide">
        <span>{copy.email} *</span>
        <input autoComplete="email" name="email" required type="email" />
      </label>
      <label className="inquiry-field inquiry-field-wide">
        <span>{copy.message} *</span>
        <textarea name="message" required rows={8} />
      </label>
      <div className="inquiry-submit inquiry-field-wide">
        {status === "sending" && <small>{copy.sending}</small>}
        {status === "success" && <small className="inquiry-success">{copy.success}</small>}
        {status === "error" && <small className="inquiry-error">{copy.error}</small>}
        <button disabled={status === "sending"} type="submit">{copy.submit}</button>
      </div>
    </form>
  );
}
