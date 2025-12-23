import {useEffect} from 'react';
import {Link, Navigate, useLocation, useSearchParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {FormTextField} from '@common/ui/forms/input-field/text-field/text-field';
import {Button} from '@common/ui/buttons/button';
import {Form} from '@common/ui/forms/form';
import {RegisterPayload, useRegister} from '@common/auth/requests/use-register';
import {Trans} from '@common/i18n/trans';
import {FormCheckbox} from '@common/ui/forms/toggle/checkbox';
import {useRecaptcha} from '@common/recaptcha/use-recaptcha';
import {StaticPageTitle} from '@common/seo/static-page-title';
import {useSettings} from '@common/core/settings/use-settings';
import {useContext} from 'react';
import {SiteConfigContext} from '@common/core/settings/site-config-context';
import {CustomMenuItem} from '@common/menus/custom-menu';
import {SharedNavbar} from './shared-layout';
import {SharedFooter} from './shared-layout';

export function CustomRegisterPage() {
  const {
    branding,
    registration: {disable, policies},
  } = useSettings();
  const {auth} = useContext(SiteConfigContext);
  const {verify, isVerifying} = useRecaptcha('register');

  const {pathname} = useLocation();
  const [searchParams] = useSearchParams();

  const isWorkspaceRegister = pathname.includes('workspace');
  const isBillingRegister = searchParams.get('redirectFrom') === 'pricing';
  const searchParamsEmail = searchParams.get('email') || undefined;
  const username = searchParams.get('username') || undefined;

  const form = useForm<RegisterPayload>({
    defaultValues: {email: searchParamsEmail},
  });
  const register = useRegister(form);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (disable) {
    return <Navigate to="/login" replace />;
  }

  let heading = 'Create a new account';
  if (isWorkspaceRegister) {
    heading = `To join your team on ${branding?.site_name}, create an account`;
  } else if (isBillingRegister) {
    heading = "First, let's create your account";
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticPageTitle>Sign up</StaticPageTitle>
      <SharedNavbar />
      <div className="flex-1 pt-100 pb-60">
        <div className="container mx-auto px-16 md:px-24 lg:px-32">
          <div className="max-w-500 mx-auto">
            <div className="text-center mb-40">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                {heading}
              </h1>
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-[#FF6B35] hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
            
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-32 md:p-48 shadow-lg">
              <Form
                form={form}
                onSubmit={async payload => {
                  const isValid = await verify();
                  if (isValid) {
                    register.mutate(payload);
                  }
                }}
              >
                {username && (
                  <div className="mb-24 p-16 bg-[#FFE5D9] rounded-lg border border-[#FF6B35]/20">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Claiming:</span>{' '}
                      <span className="text-[#FF6B35] font-semibold">linksforb.io/{username}</span>
                    </p>
                  </div>
                )}
                <FormTextField
                  className="mb-24"
                  name="email"
                  type="email"
                  disabled={!!searchParamsEmail}
                  label="Email"
                  required
                  background="bg-white"
                />
                <FormTextField
                  className="mb-24"
                  name="password"
                  type="password"
                  label="Password"
                  required
                  background="bg-white"
                />
                <FormTextField
                  className="mb-24"
                  name="password_confirmation"
                  type="password"
                  label="Confirm password"
                  required
                  background="bg-white"
                />
                {auth?.registerFields ? <auth.registerFields /> : null}
                {policies && (
                  <div className="mb-24">
                    {policies.map(policy => (
                      <FormCheckbox
                        key={policy.id}
                        name={policy.id}
                        className="mb-8 block"
                        required
                      >
                        <Trans
                          message="I accept the :name"
                          values={{
                            name: (
                              <CustomMenuItem
                                unstyled
                                className={() => 'text-[#FF6B35] hover:underline'}
                                item={policy}
                              />
                            ),
                          }}
                        />
                      </FormCheckbox>
                    ))}
                  </div>
                )}
                <Button
                  className="w-full bg-[#FF6B35] hover:bg-[#FF8555] text-white font-semibold"
                  type="submit"
                  variant="raised"
                  size="lg"
                  disabled={register.isPending || isVerifying}
                >
                  {register.isPending || isVerifying ? 'Creating account...' : 'Create account'}
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

