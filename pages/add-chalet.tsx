// pages/add-chalet.tsx
import { useState } from 'react';

export default function AddChalet() {
  const [chalets, setChalets] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', price: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.price) return;
    setChalets([...chalets, form]);
    setForm({ name: '', location: '', price: '' });
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Add a Chalet</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Chalet Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="price"
          placeholder="Price (e.g. $200/night)"
          value={form.price}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add Chalet</button>
      </form>

      {chalets.length > 0 && (
        <section>
          <h2>Chalets Added:</h2>
          <ul>
            {chalets.map((chalet, idx) => (
              <li key={idx} style={{ marginBottom: '1rem' }}>
                <strong>{chalet.name}</strong><br />
                Location: {chalet.location}<br />
                Price: {chalet.price}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
