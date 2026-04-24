import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-blue-100 flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="pt-24 pb-20 bg-[#F8FAFC] min-h-[60vh] flex flex-col justify-center">
          <div className="max-w-[1240px] mx-auto px-6 text-center">
            <h1 className="text-[48px] md:text-[64px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              Careers
            </h1>
            <p className="text-[18px] text-[#475569] max-w-2xl mx-auto font-medium mb-12">
              Join us in building the operating system for modern dispatch operations.
            </p>
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              {/* Position 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Senior AI Engineer</h3>
                  <p className="text-[#64748b] text-sm mt-1">San Francisco, CA (Hybrid) • Engineering</p>
                </div>
                <button className="px-5 py-2 bg-[#0ea5e9] text-white rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors">Apply</button>
              </div>
              {/* Position 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Product Manager - Automation</h3>
                  <p className="text-[#64748b] text-sm mt-1">Remote (US) • Product</p>
                </div>
                <button className="px-5 py-2 bg-[#0ea5e9] text-white rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors">Apply</button>
              </div>
              {/* Position 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Enterprise Account Executive</h3>
                  <p className="text-[#64748b] text-sm mt-1">Austin, TX (Hybrid) • Sales</p>
                </div>
                <button className="px-5 py-2 bg-[#0ea5e9] text-white rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors">Apply</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
