import { useState } from 'react';

export default function AddChalet() {
  const [chalets, setChalets] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', price: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setChalets([...chalets, form]);
    setForm({ name: '', location: '', price: '' });
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Add Chalet</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required /><br />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required /><br />
        <button type="submit">Add</button>
      </form>
      <ul>{chalets.map((c, i) => (<li key={i}>{c.name} - {c.location} - {c.price}</li>))}</ul>
    </main>
  );
}