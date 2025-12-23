import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Form} from '@common/ui/forms/form';
import {FormTextField} from '@common/ui/forms/input-field/text-field/text-field';
import {Button} from '@common/ui/buttons/button';
import {useRecaptcha} from '@common/recaptcha/use-recaptcha';
import {useSubmitContactForm, ContactPagePayload} from '@common/contact/use-submit-contact-form';
import {StaticPageTitle} from '@common/seo/static-page-title';
import {SharedNavbar} from './shared-layout';
import {SharedFooter} from './shared-layout';

export function CustomContactPage() {
  const form = useForm<ContactPagePayload>();
  const submitForm = useSubmitContactForm(form);
  const {verify, isVerifying} = useRecaptcha('contact');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticPageTitle>Contact Us</StaticPageTitle>
      <SharedNavbar />
      <div className="flex-1 pt-100 pb-60">
        <div className="container mx-auto px-16 md:px-24 lg:px-32">
          <div className="max-w-800 mx-auto">
            <div className="text-center mb-60">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-32 md:p-48 shadow-lg">
              <Form
                form={form}
                onSubmit={async value => {
                  const isValid = await verify();
                  if (isValid) {
                    submitForm.mutate(value);
                  }
                }}
              >
                <FormTextField
                  label="Name"
                  name="name"
                  required
                  className="mb-24"
                  background="bg-white"
                />
                <FormTextField
                  label="Email"
                  name="email"
                  required
                  type="email"
                  className="mb-24"
                  background="bg-white"
                />
                <FormTextField
                  label="Message"
                  name="message"
                  required
                  inputElementType="textarea"
                  className="mb-32"
                  rows={8}
                  background="bg-white"
                />
                <Button
                  type="submit"
                  variant="raised"
                  size="lg"
                  className="w-full md:w-auto bg-[#FF6B35] hover:bg-[#FF8555] text-white font-semibold"
                  disabled={submitForm.isPending || isVerifying}
                >
                  {submitForm.isPending || isVerifying ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}

