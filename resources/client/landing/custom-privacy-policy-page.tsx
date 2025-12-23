import {useEffect} from 'react';
import {StaticPageTitle} from '@common/seo/static-page-title';
import {SharedNavbar} from './shared-layout';
import {SharedFooter} from './shared-layout';

export function CustomPrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticPageTitle>Privacy Policy</StaticPageTitle>
      <SharedNavbar />
      <div className="flex-1 pt-100 pb-60">
        <div className="container mx-auto px-16 md:px-24 lg:px-32">
          <div className="max-w-900 mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-40">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-32 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Introduction</h2>
                  <p>
                    LinksForBio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Information We Collect</h2>
                  <p className="mb-12">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Account information (name, email address, password)</li>
                    <li>Content you create (links, link groups, customizations)</li>
                    <li>Communications with us (support requests, feedback)</li>
                  </ul>
                  <p className="mt-16">
                    We also automatically collect certain information when you use our service, such as IP address, browser type, device information, and usage data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">How We Use Your Information</h2>
                  <p className="mb-12">We use the information we collect to:</p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze usage patterns</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-24 space-y-8 mt-12">
                    <li>With your consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With service providers who assist in operating our service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Your Rights</h2>
                  <p className="mb-12">You have the right to:</p>
                  <ul className="list-disc pl-24 space-y-8">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Cookies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-16">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-[#FF6B35] hover:underline">contact page</a>.
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

