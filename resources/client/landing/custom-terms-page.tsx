import {useEffect} from 'react';
import {StaticPageTitle} from '@common/seo/static-page-title';
import {SharedNavbar} from './shared-layout';
import {SharedFooter} from './shared-layout';

export function CustomTermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticPageTitle>Terms of Service</StaticPageTitle>
      <SharedNavbar />
      <div className="flex-1 pt-100 pb-60">
        <div className="container mx-auto px-16 md:px-24 lg:px-32">
          <div className="max-w-900 mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-500 mb-40">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-32 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Agreement to Terms</h2>
                  <p>
                    By accessing or using LinksForBio ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Use License</h2>
                  <p className="mb-12">
                    Permission is granted to temporarily use LinksForBio for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained in the Service</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">User Accounts</h2>
                  <p className="mb-12">When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:</p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Maintaining the security of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Acceptable Use</h2>
                  <p className="mb-12">You agree not to use the Service to:</p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit any malicious code or viruses</li>
                    <li>Spam, phish, or engage in any fraudulent activity</li>
                    <li>Interfere with or disrupt the Service</li>
                    <li>Impersonate any person or entity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Content</h2>
                  <p>
                    You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content solely for the purpose of providing the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Prohibited Content</h2>
                  <p className="mb-12">You may not use the Service to link to or promote:</p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Illegal content or activities</li>
                    <li>Hate speech, harassment, or abusive content</li>
                    <li>Malware, viruses, or harmful software</li>
                    <li>Copyrighted material without permission</li>
                    <li>Adult content or explicit material</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Service Availability</h2>
                  <p>
                    We strive to provide reliable service but do not guarantee that the Service will be available at all times. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Termination</h2>
                  <p>
                    We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Disclaimer</h2>
                  <p>
                    The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Limitation of Liability</h2>
                  <p>
                    In no event shall LinksForBio or its operators be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or relating to your use of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us through our <a href="/contact" className="text-[#FF6B35] hover:underline">contact page</a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}

