import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-12">
            <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              Compliance Center
            </h1>
            <p className="text-[18px] text-[#475569] font-medium">
              Our commitment to regulatory standards and security.
            </p>
          </div>
          
          <div className="prose prose-slate max-w-none text-[#475569]">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">SOC 2 Type II</h2>
            <p className="mb-6 leading-relaxed">
              TruckDispatch Pro maintains SOC 2 Type II compliance, ensuring that our security, availability, and processing integrity controls have been independently verified to meet industry standards.
            </p>

            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">GDPR & CCPA</h2>
            <p className="mb-6 leading-relaxed">
              We are fully compliant with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). We respect your data rights and provide mechanisms for data deletion, export, and consent management.
            </p>

            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">FMCSA Compliance</h2>
            <p className="mb-6 leading-relaxed">
              Our platforms are designed to align with Federal Motor Carrier Safety Administration (FMCSA) regulations, helping you maintain accurate records and adhere to Hours of Service (HOS) tracking requirements.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
