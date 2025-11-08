import React, { useEffect, useState } from 'react';

const variants = ['Pro Max 256GB', 'Pro Max 512GB', 'Pro Max 1TB'];
const colors = ['Titanium Black', 'Natural Titanium', 'Deep Blue', 'Silver'];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  variant: variants[0],
  color: colors[0],
  date: '',
  slot: '10:00',
};

const isEmail = (v) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(v);
const isPhone = (v) => /^[0-9+\-()\s]{7,}$/.test(v);

const Booking = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Prefill date to tomorrow
    const d = new Date();
    d.setDate(d.getDate() + 1);
    setForm((f) => ({ ...f, date: d.toISOString().slice(0, 10) }));
  }, []);

  const validate = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!isEmail(form.email)) return 'Enter a valid email';
    if (!isPhone(form.phone)) return 'Enter a valid phone';
    if (!form.date) return 'Select a preferred date';
    if (!form.slot) return 'Select a time slot';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const err = validate();
    if (err) {
      setMessage({ type: 'error', text: err });
      return;
    }
    setSubmitting(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Something went wrong');
      setMessage({ type: 'success', text: 'Booking confirmed! A confirmation email has been sent.' });
      setForm(initialForm);
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Book a Demo</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Secure your hands-on session. Choose your preferred date and time.
        </p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Full name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
                placeholder="+1 555 0100"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Variant</label>
              <select
                value={form.variant}
                onChange={(e) => setForm({ ...form, variant: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
              >
                {variants.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm text-white/70">Color</label>
              <select
                value={form.color}
                onChange={(e) => setForm({ ...form, color: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
              >
                {colors.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70">Preferred date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Time slot</label>
              <select
                value={form.slot}
                onChange={(e) => setForm({ ...form, slot: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-indigo-500"
              >
                {['10:00', '12:00', '14:00', '16:00', '18:00'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600 transition disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Confirm Booking'}
          </button>

          {message && (
            <p className={`${message.type === 'error' ? 'text-red-400' : 'text-emerald-400'} text-sm`}>
              {message.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;
