import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, Send, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setStatus('sending');
    setFeedback(null);

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        contact.emailjs.serviceId,
        contact.emailjs.templateId,
        templateParams,
        contact.emailjs.publicKey
      );

      setStatus('success');
      setFeedback({
        type: 'success',
        text: 'Thank you for reaching out! Your message was sent successfully and I will get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFeedback(null);
        setStatus('idle');
      }, 7000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setFeedback({
        type: 'error',
        text: 'Failed to deliver message via form. Please email directly at adityarajdwivedi468@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="border-t border-sage-border bg-sage-surface/40">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement & Direct Channels */}
          <div className="lg:col-span-5">
            <p className="section-eyebrow">
              // {contact.sectionNum} — {contact.sectionLabel}
            </p>
            <h2 className="section-heading mb-4">
              {contact.heading}
            </h2>
            <p className="section-lead mb-8">
              {contact.lead}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="card-editorial p-4 bg-white flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sage-surface flex items-center justify-center text-sage-primary group-hover:bg-sage-primary group-hover:text-white transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-sage-muted uppercase tracking-wider block">
                      Email
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] font-semibold text-sage-text group-hover:text-sage-primary transition-colors">
                      {contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sage-muted group-hover:text-sage-primary transition-colors" />
              </a>

              <a
                href={contact.whatsappUrl || `https://wa.me/917318124388`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial p-4 bg-white flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.06 8.02 12.23C8.14 12.4 9.74 14.87 12.19 15.93C12.78 16.18 13.23 16.33 13.59 16.45C14.17 16.63 14.7 16.61 15.12 16.55C15.59 16.47 16.57 15.95 16.77 15.37C16.97 14.79 16.97 14.3 16.91 14.2C16.85 14.1 16.7 14.04 16.47 13.92C16.25 13.81 15.14 13.26 14.93 13.19C14.73 13.11 14.58 13.08 14.43 13.31C14.28 13.54 13.86 14.04 13.73 14.19C13.6 14.33 13.47 14.35 13.25 14.24C13.02 14.12 12.3 13.89 11.45 13.13C10.79 12.54 10.34 11.81 10.21 11.59C10.09 11.36 10.2 11.24 10.31 11.13C10.42 11.02 10.55 10.85 10.67 10.71C10.79 10.57 10.83 10.47 10.91 10.31C10.99 10.14 10.95 10 10.89 9.89C10.83 9.77 10.38 8.67 10.2 8.22C10.02 7.78 9.84 7.84 9.71 7.83C9.58 7.83 9.43 7.82 9.28 7.82C9.13 7.82 8.89 7.88 8.69 8.1C8.48 8.32 7.89 8.9 7.89 10.1C7.89 11.3 8.77 12.45 8.9 12.63L8.53 7.33Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-sage-muted uppercase tracking-wider block">
                      WhatsApp
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] font-semibold text-sage-text group-hover:text-emerald-700 transition-colors">
                      {contact.whatsapp || "+91 7318124388"}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sage-muted group-hover:text-emerald-700 transition-colors" />
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial p-4 bg-white flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sage-surface flex items-center justify-center text-sage-primary group-hover:bg-sage-primary group-hover:text-white transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-sage-muted uppercase tracking-wider block">
                      LinkedIn
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] font-semibold text-sage-text group-hover:text-sage-primary transition-colors">
                      {contact.linkedinHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sage-muted group-hover:text-sage-primary transition-colors" />
              </a>

              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-editorial p-4 bg-white flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sage-surface flex items-center justify-center text-sage-primary group-hover:bg-sage-primary group-hover:text-white transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-sage-muted uppercase tracking-wider block">
                      GitHub
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] font-semibold text-sage-text group-hover:text-sage-primary transition-colors">
                      {contact.githubHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-sage-muted group-hover:text-sage-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="card-editorial p-6 sm:p-8 lg:p-10 bg-white">
              <h3 className="font-display font-bold text-xl text-sage-text mb-2">
                Send a Message
              </h3>
              <p className="font-sans text-xs sm:text-sm text-sage-muted mb-6">
                Have a question or proposal? Drop your details and message below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-sage-muted font-medium mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full px-3.5 py-2.5 bg-sage-surface/50 border border-sage-border rounded-lg text-sage-text text-sm focus:outline-none focus:ring-2 focus:ring-sage-primary/40 focus:bg-white transition-all placeholder:text-sage-muted/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-sage-muted font-medium mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-3.5 py-2.5 bg-sage-surface/50 border border-sage-border rounded-lg text-sage-text text-sm focus:outline-none focus:ring-2 focus:ring-sage-primary/40 focus:bg-white transition-all placeholder:text-sage-muted/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-sage-muted font-medium mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    required
                    className="w-full px-3.5 py-2.5 bg-sage-surface/50 border border-sage-border rounded-lg text-sage-text text-sm focus:outline-none focus:ring-2 focus:ring-sage-primary/40 focus:bg-white transition-all placeholder:text-sage-muted/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-sage-muted font-medium mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you're working on or how I can help..."
                    required
                    className="w-full px-3.5 py-2.5 bg-sage-surface/50 border border-sage-border rounded-lg text-sage-text text-sm focus:outline-none focus:ring-2 focus:ring-sage-primary/40 focus:bg-white transition-all placeholder:text-sage-muted/50 resize-none"
                  />
                </div>

                {/* Inline Real Feedback */}
                {feedback && (
                  <div
                    className={`p-3.5 rounded-lg border flex items-start gap-3 text-xs font-mono leading-relaxed ${
                      feedback.type === 'success'
                        ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                        : 'bg-rose-50/80 border-rose-200 text-rose-800'
                    }`}
                    role="alert"
                  >
                    {feedback.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <span>{feedback.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary min-w-[150px]"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
