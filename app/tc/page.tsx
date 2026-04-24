import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-12">
            <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              Terms of Service
            </h1>
            <p className="text-[18px] text-[#475569] font-medium">
              Last updated: April 2026
            </p>
          </div>
          
          <div className="prose prose-slate max-w-none text-[#475569]">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the services. These Terms constitute a legally binding agreement between you and TruckDispatch Pro.
            </p>

            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">2. Use License</h2>
            <p className="mb-6 leading-relaxed">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the services for your internal business purposes.
            </p>

            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">3. User Responsibilities</h2>
            <p className="mb-6 leading-relaxed">
              You are responsible for your use of the services and for any content you provide, including compliance with applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
