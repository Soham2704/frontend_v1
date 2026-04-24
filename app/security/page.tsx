import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-blue-100 flex flex-col">
      <Nav />
      <main className="flex-1">
        <section className="pt-24 pb-20 bg-[#F8FAFC] min-h-[60vh] flex flex-col justify-center">
          <div className="max-w-[1240px] mx-auto px-6 text-center">
            <h1 className="text-[48px] md:text-[64px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              Security
            </h1>
            <p className="text-[18px] text-[#475569] max-w-2xl mx-auto font-medium mb-12">
              Enterprise-grade security built into every layer of our platform.
            </p>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-left">
              <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
              <p className="text-[#64748b] mb-6">All data is encrypted at rest and in transit using industry standard AES-256 encryption. We utilize regular penetration testing and vulnerability scanning.</p>
              
              <h2 className="text-2xl font-bold mb-4">Compliance</h2>
              <p className="text-[#64748b] mb-6">TruckDispatch Pro is SOC 2 Type II compliant and adheres to strict data privacy regulations to ensure your operations data remains completely confidential.</p>
              
              <h2 className="text-2xl font-bold mb-4">Access Control</h2>
              <p className="text-[#64748b]">Role-based access control (RBAC), multi-factor authentication (MFA), and detailed audit logs are standard features for all enterprise accounts.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
