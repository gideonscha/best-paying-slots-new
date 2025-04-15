// src/app/slots/[slug]/page.tsx
import { notFound } from 'next/navigation';

// Mock database
const slotData = {
  'gates-of-olympus': {
    name: 'Gates of Olympus',
    provider: 'Pragmatic Play',
    rtp: '96.5%',
    volatility: 'High',
    maxWin: '5,000x',
    description:
      'Gates of Olympus is a mythological-themed high volatility slot offering cascading reels and multipliers up to 500x.',
    features: ['Cascading Wins', 'Free Spins', 'Multiplier Symbols'],
    image: '/gates-of-olympus.jpg'
  },
  // Add more slot entries here
};

export default function SlotPage({ params }: { params: { slug: string } }) {
  const slot = slotData[params.slug];
  if (!slot) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{slot.name}</h1>
      <p className="text-sm text-gray-500 mb-4">Provider: {slot.provider}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <img src={slot.image} alt={slot.name} className="rounded shadow" />
        <div>
          <p className="mb-2"><strong>RTP:</strong> {slot.rtp}</p>
          <p className="mb-2"><strong>Volatility:</strong> {slot.volatility}</p>
          <p className="mb-2"><strong>Max Win:</strong> {slot.maxWin}</p>
          <p className="mb-4 text-sm text-gray-700">{slot.description}</p>
          <ul className="list-disc list-inside text-sm">
            {slot.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <a href="/" className="text-indigo-600 hover:underline text-sm">← Back to homepage</a>
    </main>
  );
}
