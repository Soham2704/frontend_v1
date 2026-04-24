import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-12">
            <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-tight text-[#0f172a] mb-6">
              Privacy Policy
            </h1>
            <p className="text-[18px] text-[#475569] font-medium">
              Last updated: April 2026
            </p>
          </div>
          
          <div className="prose prose-slate max-w-none text-[#475569]">
            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">
              We collect information that you provide directly to us, including when you create an account, update your profile, use the interactive features of our services, participate in contests, promotions or surveys, request customer support, or otherwise communicate with us.
            </p>

            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">2. How We Use Information</h2>
            <p className="mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, such as to administer your account and provide you with insights into your fleet operations. We may also use the information to monitor and analyze trends, usage, and activities in connection with our services.
            </p>

            <h2 className="text-2xl font-bold text-[#0f172a] mt-8 mb-4">3. Data Security</h2>
            <p className="mb-6 leading-relaxed">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet or email transmission is ever fully secure or error-free.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
