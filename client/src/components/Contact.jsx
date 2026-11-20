import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "sending", message: "Sending your message..." });

    try {
      const apiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Thanks! Your message was sent." });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <p className="section-kicker">Let's connect</p>
      <h2>Contact Me</h2>
      <p>I'm open to connecting with fellow developers, learning opportunities and frontend internship opportunities. Feel free to reach out.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className={`form-status form-status-${status.type}`} role="status" aria-live="polite">
            {status.message}
          </p>
        )}
      </form>
      <div className="contact-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}
