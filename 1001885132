export default function ChaletsPage() {
  const chalets = [
    { id: 1, name: "The Bungalow", location: "Faraya", price: "$200/night" },
    { id: 2, name: "Cozy Cabin", location: "Laklouk", price: "$150/night" },
  ];
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Available Chalets</h1>
      <ul>{chalets.map((c) => (
        <li key={c.id}><strong>{c.name}</strong> - {c.location} - {c.price}</li>
      ))}</ul>
    </main>
  );
}