"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FaLongArrowAltRight } from "react-icons/fa";

type ContactFormProps = {
  labelFontClass?: string;
};

export default function ContactForm({
  labelFontClass = "",
}: ContactFormProps) {
  const [state, handleSubmit] = useForm("xeevropd");

  if (state.succeeded) {
    return (
      <div className="max-w-3xl rounded-[1.5rem] border border-white/12 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-6 text-white/80">
        <p className="text-lg font-medium text-white">Inquiry sent.</p>
        <p className="mt-2 text-sm leading-7 text-white/68">
          Thanks for reaching out. Anthony will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="Anthony Verdi Website Inquiry" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className={`${labelFontClass} mb-2 block text-[0.64rem] uppercase tracking-[0.28em] text-white/48`}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border-b border-white/14 bg-transparent px-0 py-2.5 text-[0.95rem] text-white outline-none placeholder:text-white/24 focus:border-white/32"
          />
        </div>

        <div>
          <label
            className={`${labelFontClass} mb-2 block text-[0.64rem] uppercase tracking-[0.28em] text-white/48`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full border-b border-white/14 bg-transparent px-0 py-2.5 text-[0.95rem] text-white outline-none placeholder:text-white/24 focus:border-white/32"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-300"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className={`${labelFontClass} mb-2 block text-[0.64rem] uppercase tracking-[0.28em] text-white/48`}
          >
            Artist / Publication
          </label>
          <input
            type="text"
            name="artistPublication"
            placeholder="Artist or publication name"
            className="w-full border-b border-white/14 bg-transparent px-0 py-2.5 text-[0.95rem] text-white outline-none placeholder:text-white/24 focus:border-white/32"
          />
        </div>

        <div>
          <label
            className={`${labelFontClass} mb-2 block text-[0.64rem] uppercase tracking-[0.28em] text-white/48`}
          >
            Date of Event
          </label>
          <input
            type="text"
            name="eventDate"
            placeholder="MM/DD/YYYY"
            className="w-full border-b border-white/14 bg-transparent px-0 py-2.5 text-[0.95rem] text-white outline-none placeholder:text-white/24 focus:border-white/32"
          />
        </div>
      </div>

      <div>
        <label
          className={`${labelFontClass} mb-2 block text-[0.64rem] uppercase tracking-[0.28em] text-white/48`}
        >
          Inquiry Details
        </label>
        <textarea
          rows={5}
          name="message"
          placeholder="Tell me about the show, event, or coverage you need."
          required
          className="w-full resize-none border-b border-white/14 bg-transparent px-0 py-2.5 text-[0.95rem] text-white outline-none placeholder:text-white/24 focus:border-white/32"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-300"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_100%)] px-5 py-2.5 text-[0.64rem] font-medium uppercase tracking-[0.26em] text-white transition hover:scale-[1.02] hover:border-white/24 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Send Inquiry"}
        <FaLongArrowAltRight />
      </button>
    </form>
  );
}