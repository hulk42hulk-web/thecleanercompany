"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const { t } = useLanguage();
  const formText = t.contactSection.form;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Vul alstublieft minimaal uw naam, e-mail en telefoonnummer in.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        service: "",
        message: "",
      });
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl glass-panel-prominent border border-white/90 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#5ED6C0]/25 text-[#0d9488] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#102A43] mb-2">
          {formText.successTitle}
        </h3>
        <p className="text-sm sm:text-base text-[#526777] max-w-md mx-auto mb-6">
          {formText.successMsg}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="px-5 py-2.5 rounded-xl bg-[#1677FF] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1366db] transition-colors"
        >
          Nieuwe aanvraag sturen
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-panel-prominent border border-white/90 shadow-[0_20px_50px_rgba(16,42,67,0.08)]"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
            {formText.nameLabel} <span className="text-[#1677FF]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={formText.namePlaceholder}
            className="w-full min-h-[52px] px-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
            {formText.companyLabel}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={formText.companyPlaceholder}
            className="w-full min-h-[52px] px-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
            {formText.emailLabel} <span className="text-[#1677FF]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={formText.emailPlaceholder}
            className="w-full min-h-[52px] px-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
            {formText.phoneLabel} <span className="text-[#1677FF]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={formText.phonePlaceholder}
            className="w-full min-h-[52px] px-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
          />
        </div>

        {/* Location in Amsterdam */}
        <div>
          <label htmlFor="location" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
            {formText.locationLabel}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder={formText.locationPlaceholder}
            className="w-full min-h-[52px] px-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
          />
        </div>

        {/* Service selection */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
            {formText.serviceLabel}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full min-h-[52px] px-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
          >
            <option value="">{formText.serviceSelectDefault}</option>
            {formText.serviceOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
          {formText.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder={formText.messagePlaceholder}
          className="w-full p-4 rounded-xl bg-white/70 border border-white/90 focus:border-[#1677FF] focus:bg-white text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:ring-2 focus:ring-[#1677FF]/20 transition-all"
        />
      </div>

      {errorMessage && (
        <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-600 font-semibold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <p className="text-[11px] text-[#526777] max-w-sm">
          {formText.privacyNotice}
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#38BDF8] hover:from-[#1366db] hover:to-[#0284c7] shadow-[0_8px_25px_rgba(22,119,255,0.30)] hover:shadow-[0_12px_32px_rgba(22,119,255,0.40)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
        >
          <span>
            {status === "submitting" ? formText.sending : formText.submitBtn}
          </span>
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
