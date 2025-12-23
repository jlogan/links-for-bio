import {useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {FormTextField} from '@common/ui/forms/input-field/text-field/text-field';
import {Button} from '@common/ui/buttons/button';
import {Form} from '@common/ui/forms/form';
import {
  SendPasswordResetEmailPayload,
  useSendPasswordResetEmail,
} from '@common/auth/requests/send-reset-password-email';
import {StaticPageTitle} from '@common/seo/static-page-title';
import {useSettings} from '@common/core/settings/use-settings';
import {SharedNavbar} from './shared-layout';
import {SharedFooter} from './shared-layout';

export function CustomForgotPasswordPage() {
  const {registration} = useSettings();

  const [searchParams] = useSearchParams();
  const searchParamsEmail = searchParams.get('email') || undefined;

  const form = useForm<SendPasswordResetEmailPayload>({
    defaultValues: {email: searchParamsEmail},
  });
  const sendEmail = useSendPasswordResetEmail(form);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticPageTitle>Forgot Password</StaticPageTitle>
      <SharedNavbar />
      <div className="flex-1 pt-100 pb-60">
        <div className="container mx-auto px-16 md:px-24 lg:px-32">
          <div className="max-w-500 mx-auto">
            <div className="text-center mb-40">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Forgot Password
              </h1>
              {!registration.disable && (
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-[#FF6B35] hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              )}
            </div>
            
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-32 md:p-48 shadow-lg">
              <Form
                form={form}
                onSubmit={payload => {
                  sendEmail.mutate(payload);
                }}
              >
                <div className="mb-24 text-sm text-gray-600">
                  Enter your email address below and we will send you a link to reset or create your password.
                </div>
                <FormTextField
                  disabled={!!searchParamsEmail}
                  className="mb-32"
                  name="email"
                  type="email"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  label="Email"
                  required
                  background="bg-white"
                />
                <Button
                  className="w-full bg-[#FF6B35] hover:bg-[#FF8555] text-white font-semibold"
                  type="submit"
                  variant="raised"
                  size="lg"
                  disabled={sendEmail.isPending}
                >
                  {sendEmail.isPending ? 'Sending...' : 'Continue'}
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

