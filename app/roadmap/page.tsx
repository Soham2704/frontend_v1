import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-blue-100 flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="pt-24 pb-20 bg-[#F8FAFC] min-h-[60vh] flex flex-col justify-center">
          <div className="max-w-[1240px] mx-auto px-6 text-center">
            <h1 className="text-[48px] md:text-[64px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              Product Roadmap
            </h1>
            <p className="text-[18px] text-[#475569] max-w-2xl mx-auto font-medium mb-12">
              See what we are building next to revolutionize dispatch operations.
            </p>
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-xs font-bold text-[#0ea5e9] mb-2 uppercase tracking-wider">Q3 2026 (Upcoming)</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Advanced Predictive ETA Models</h3>
                <p className="text-[#64748b]">Incorporating deeper weather and traffic historical data into our AI routing engine for 99.9% accurate ETAs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-xs font-bold text-[#0ea5e9] mb-2 uppercase tracking-wider">Q4 2026 (Planned)</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Automated Dispute Resolution</h3>
                <p className="text-[#64748b]">AI-driven mediation system for carrier payment disputes using historical contract and communication data.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 opacity-70">
                <div className="text-xs font-bold text-[#64748b] mb-2 uppercase tracking-wider">Q1 2027 (Exploring)</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Blockchain Document Verification</h3>
                <p className="text-[#64748b]">Immutable BOL and POD tracking across the supply chain.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
