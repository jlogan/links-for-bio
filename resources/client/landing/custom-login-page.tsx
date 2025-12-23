import {useEffect} from 'react';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {FormTextField} from '@common/ui/forms/input-field/text-field/text-field';
import {Button} from '@common/ui/buttons/button';
import {Form} from '@common/ui/forms/form';
import {LoginPayload, useLogin} from '@common/auth/requests/use-login';
import {FormCheckbox} from '@common/ui/forms/toggle/checkbox';
import {StaticPageTitle} from '@common/seo/static-page-title';
import {useContext} from 'react';
import {
  SiteConfigContext,
  SiteConfigContextValue,
} from '@common/core/settings/site-config-context';
import {useSettings} from '@common/core/settings/use-settings';
import {SharedNavbar} from './shared-layout';
import {SharedFooter} from './shared-layout';

interface Props {
  onTwoFactorChallenge: () => void;
}

export function CustomLoginPage({onTwoFactorChallenge}: Props) {
  const [searchParams] = useSearchParams();
  const {pathname} = useLocation();

  const isWorkspaceLogin = pathname.includes('workspace');
  const searchParamsEmail = searchParams.get('email') || undefined;

  const {branding, registration, site} = useSettings();
  const siteConfig = useContext(SiteConfigContext);

  const demoDefaults =
    site.demo && !searchParamsEmail ? getDemoFormDefaults(siteConfig) : {};
  const form = useForm<LoginPayload>({
    defaultValues: {remember: true, email: searchParamsEmail, ...demoDefaults},
  });
  const login = useLogin(form);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading = isWorkspaceLogin
    ? `To join your team on ${branding?.site_name}, login to your account`
    : 'Sign in to your account';

  const isInvalid = !!Object.keys(form.formState.errors).length;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StaticPageTitle>Sign in</StaticPageTitle>
      <SharedNavbar />
      <div className="flex-1 pt-100 pb-60">
        <div className="container mx-auto px-16 md:px-24 lg:px-32">
          <div className="max-w-500 mx-auto">
            <div className="text-center mb-40">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                {heading}
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
                  login.mutate(payload, {
                    onSuccess: response => {
                      if (response.two_factor) {
                        onTwoFactorChallenge();
                      }
                    },
                  });
                }}
              >
                <FormTextField
                  className="mb-24"
                  name="email"
                  type="email"
                  label="Email"
                  disabled={!!searchParamsEmail}
                  invalid={isInvalid}
                  required
                  background="bg-white"
                />
                <FormTextField
                  className="mb-12"
                  name="password"
                  type="password"
                  label="Password"
                  invalid={isInvalid}
                  labelSuffix={
                    <Link to="/forgot-password" className="text-[#FF6B35] hover:underline text-sm" tabIndex={-1}>
                      Forgot your password?
                    </Link>
                  }
                  required
                  background="bg-white"
                />
                <FormCheckbox name="remember" className="mb-24 block">
                  Stay signed in for a month
                </FormCheckbox>
                <Button
                  className="w-full bg-[#FF6B35] hover:bg-[#FF8555] text-white font-semibold"
                  type="submit"
                  variant="raised"
                  size="lg"
                  disabled={login.isPending}
                >
                  {login.isPending ? 'Signing in...' : 'Continue'}
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

function getDemoFormDefaults(siteConfig: SiteConfigContextValue) {
  if (siteConfig.demo.loginPageDefaults === 'randomAccount') {
    const number = Math.floor(Math.random() * 100) + 1;
    const paddedNumber = String(number).padStart(3, '0');
    return {
      email: `admin@demo${paddedNumber}.com`,
      password: 'admin',
    };
  } else {
    return {
      email: siteConfig.demo.email ?? 'admin@admin.com',
      password: siteConfig.demo.password ?? 'admin',
    };
  }
}

