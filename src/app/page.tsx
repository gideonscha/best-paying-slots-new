export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Find the Best Paying Online Slots</h1>
        <p className="text-xl mb-6">Ranked by Real Data: RTP, Payout Speed & Player Reviews</p>
        <div className="space-x-4">
          <a href="#top-slots" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Explore Top Slots
          </a>
          <a href="#compare-casinos" className="bg-indigo-500 px-6 py-2 rounded-full font-semibold hover:bg-indigo-700">
            Compare Casinos
          </a>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="py-6 bg-white shadow">
        <div className="max-w-5xl mx-auto flex justify-around text-sm">
          <a href="#top-casinos" className="font-medium hover:text-indigo-600">Top Casinos</a>
          <a href="#best-rtp" className="font-medium hover:text-indigo-600">Highest RTP</a>
          <a href="#fastest-payouts" className="font-medium hover:text-indigo-600">Fastest Payouts</a>
          <a href="#bonus-reviews" className="font-medium hover:text-indigo-600">Bonus Reviews</a>
        </div>
      </section>

      {/* Featured Slots Section */}
      <section id="top-slots" className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">🔥 This Week's Best Payouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">Sugar Rush</h3>
            <p className="text-sm text-gray-600">RTP: 97.5% | Avg Bonus: 36 spins</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">Mega Joker</h3>
            <p className="text-sm text-gray-600">RTP: 99% | Classic Jackpot Game</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">Gates of Olympus</h3>
            <p className="text-sm text-gray-600">RTP: 96.5% | High Volatility</p>
          </div>
        </div>
      </section>

      {/* Reddit Roundup Preview */}
      <section id="reddit" className="bg-indigo-50 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-4">🎯 Reddit Roundup</h2>
          <p className="mb-4">Reddit’s Hottest Slot: <strong>Gates of Olympus</strong> - $5K win in 20 spins!</p>
          <a href="#reddit-stories" className="text-indigo-600 font-semibold hover:underline">Read More Reddit Stories →</a>
        </div>
      </section>

      {/* Casino Reviews */}
      <section id="compare-casinos" className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">🏆 Top Rated Casinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">LuckySpin.io</h3>
            <p className="text-sm text-gray-600">MGA Licensed | Avg Payout: 2 hrs | Rating: ⭐⭐⭐⭐☆</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">Stake.com</h3>
            <p className="text-sm text-gray-600">Curacao Licensed | Crypto Friendly | Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">PlayFortune</h3>
            <p className="text-sm text-gray-600">UKGC Licensed | Fast Withdrawals | Rating: ⭐⭐⭐⭐☆</p>
          </div>
        </div>
      </section>

      {/* Bonus Tracker */}
      <section id="bonus-reviews" className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">🎁 Compare Casino Bonuses</h2>
        <table className="w-full table-auto text-left text-sm">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-2">Casino</th>
              <th className="p-2">Bonus Offer</th>
              <th className="p-2">Wagering Terms</th>
              <th className="p-2">User Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Stake.com</td>
              <td className="p-2">$1000 Match Bonus</td>
              <td className="p-2">10x Wagering</td>
              <td className="p-2">4.6/5</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">LuckySpin.io</td>
              <td className="p-2">$500 + 50 FS</td>
              <td className="p-2">20x Wagering</td>
              <td className="p-2">4.3/5</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-sm text-gray-500">© 2025 Best Paying Slots. All rights reserved.</p>
      </footer>

    </main>
  );
}
