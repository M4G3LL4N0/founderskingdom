export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Founders Kingdom</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Empowering founders to build impactful businesses
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Startup Consulting</li>
              <li>Fundraising Support</li>
              <li>Growth Strategy</li>
            </ul>
          </div>
        </div>

        {/* This was likely the problematic section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
          <p className="text-gray-600 mb-4">
            Connect with other founders and grow together
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>
    </main>
  );
}
