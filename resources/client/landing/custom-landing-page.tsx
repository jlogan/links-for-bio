import {Fragment, useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@common/ui/buttons/button';
import {TextField} from '@common/ui/forms/input-field/text-field/text-field';
import {apiClient} from '@common/http/query-client';
import {useDebounce} from 'use-debounce';
import {CheckCircleIcon} from '@common/icons/material/CheckCircle';
import {ErrorIcon} from '@common/icons/material/Error';
import {FavoriteIcon} from '@common/icons/material/Favorite';
import {InsertLinkIcon} from '@common/icons/material/InsertLink';
import {BarChartIcon} from '@common/icons/material/BarChart';
import {LanguageIcon} from '@common/icons/material/Language';
import {LinkIcon} from '@common/icons/material/Link';
import {DashboardIcon} from '@common/icons/material/Dashboard';
import {SpeedIcon} from '@common/icons/material/Speed';

interface UsernameCheckResponse {
  available: boolean;
  message?: string;
}

export function CustomLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SecondaryFeaturesSection />
      <BottomCtaSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        <div className="flex h-64 items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#00D4AA]">
              <InsertLinkIcon className="text-white" size="lg" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-[#FF6B35]">LinksFor</span>
              <span className="text-[#00D4AA]">Bio</span>
            </span>
          </div>
          <div className="flex items-center gap-12">
            <Link 
              to="/login" 
              className="px-16 py-8 text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
            >
              Login
            </Link>
            <Button
              elementType={Link}
              to="/register"
              variant="raised"
              color="primary"
              size="sm"
              className="bg-[#FF6B35] hover:bg-[#FF8555] text-white"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [username, setUsername] = useState('');
  const [debouncedUsername] = useDebounce(username, 300);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!debouncedUsername.trim()) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    apiClient
      .get<UsernameCheckResponse>(`v1/username/check?username=${encodeURIComponent(debouncedUsername)}`)
      .then(response => {
        setIsAvailable(response.data.available);
      })
      .catch(() => {
        setIsAvailable(false);
      })
      .finally(() => {
        setIsChecking(false);
      });
  }, [debouncedUsername]);

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAvailable && username.trim()) {
      navigate(`/register?username=${encodeURIComponent(username.trim())}`);
    }
  };

  return (
    <section className="relative pt-120 pb-80 md:pt-140 md:pb-100 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5D9] via-white to-[#E0F7FA] opacity-50" />
      
      <div className="container mx-auto px-16 md:px-24 lg:px-32 relative z-10">
        <div className="grid gap-40 md:grid-cols-2 md:items-center md:gap-60 lg:gap-80 max-w-1200 mx-auto">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <h1 className="mb-20 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="text-gray-900">Centralize your</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#00D4AA] bg-clip-text text-transparent">
                online presence
              </span>
            </h1>
            <p className="mb-40 text-lg leading-relaxed text-gray-600 md:text-xl">
              Gather your socials, music, videos, and more on a beautiful link-in-bio page. 
              Claim your name today!
            </p>
            
            {/* Username Checker Form */}
            <form onSubmit={handleClaim} className="mb-32">
              <div className="flex flex-col gap-12 sm:flex-row">
                <div className="flex-1 relative">
                  <span className="absolute left-16 top-1/2 z-10 -translate-y-1/2 text-sm font-medium text-gray-500">
                    linksforb.io/
                  </span>
                  <TextField
                    background="bg-white"
                    inputRadius="rounded-l-lg"
                    size="lg"
                    placeholder="yourname"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    style={{paddingLeft: '140px'}}
                    className="border-2 focus:border-[#FF6B35]"
                  />
                  {username && (
                    <div className="absolute right-12 top-1/2 -translate-y-1/2">
                      {isChecking ? (
                        <div className="h-20 w-20 animate-spin rounded-full border-2 border-[#FF6B35] border-t-transparent" />
                      ) : isAvailable === true ? (
                        <CheckCircleIcon className="text-[#00D4AA]" size="md" />
                      ) : isAvailable === false ? (
                        <ErrorIcon className="text-[#FF6B35]" size="md" />
                      ) : null}
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="raised"
                  size="lg"
                  radius="rounded-r-lg"
                  className="min-w-140 bg-[#FF6B35] hover:bg-[#FF8555] text-white disabled:opacity-50"
                  disabled={!isAvailable || isChecking || !username.trim()}
                >
                  Claim
                </Button>
              </div>
              {username && !isChecking && (
                <p className={`mt-12 text-sm ${isAvailable ? 'text-[#00D4AA]' : isAvailable === false ? 'text-[#FF6B35]' : 'text-gray-500'}`}>
                  {isAvailable === true 
                    ? '✓ Username is available!' 
                    : isAvailable === false 
                    ? '✗ Username is taken' 
                    : 'Checking availability...'}
                </p>
              )}
            </form>

            <div className="flex items-center gap-16 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span>loved by 10,000+ users</span>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-500">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#FFE5D9] to-[#E0F7FA] p-40 md:p-60 shadow-2xl">
                <div className="flex flex-col gap-24 rounded-2xl bg-white p-32 shadow-lg">
                  <div className="flex items-center gap-16">
                    <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8555]">
                      <InsertLinkIcon className="text-white" size="lg" />
                    </div>
                    <div>
                      <div className="h-12 w-120 rounded bg-gray-200"></div>
                      <div className="mt-8 h-8 w-80 rounded bg-gray-200"></div>
                    </div>
                  </div>
                  <div className="space-y-12">
                    <div className="h-8 w-full rounded bg-gradient-to-r from-[#FF6B35] to-[#FF8555] opacity-20"></div>
                    <div className="h-8 w-3/4 rounded bg-gradient-to-r from-[#00D4AA] to-[#4DD4C4] opacity-20"></div>
                  </div>
                  <div className="flex gap-12">
                    <div className="h-32 flex-1 rounded bg-gradient-to-br from-[#FF6B35] to-[#FF8555] opacity-30"></div>
                    <div className="h-32 flex-1 rounded bg-gradient-to-br from-[#00D4AA] to-[#4DD4C4] opacity-30"></div>
                    <div className="h-32 flex-1 rounded bg-gradient-to-br from-[#FFE5D9] to-[#FF8555] opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: InsertLinkIcon,
      title: 'Shorten Links',
      description: 'Create short, memorable links that are easy to share and track.',
      color: 'from-[#FF6B35] to-[#FF8555]',
    },
    {
      icon: BarChartIcon,
      title: 'Track Analytics',
      description: 'See how many clicks your links get and where they come from.',
      color: 'from-[#00D4AA] to-[#4DD4C4]',
    },
    {
      icon: LanguageIcon,
      title: 'Custom Domains',
      description: 'Use your own domain name for a more professional look.',
      color: 'from-[#FFE5D9] to-[#FF8555]',
    },
  ];

  return (
    <section className="py-60 md:py-80 bg-gradient-to-b from-white to-[#FFE5D9]/20">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        <div className="grid gap-24 md:grid-cols-3 md:gap-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-32 text-center transition-all hover:shadow-xl hover:-translate-y-4"
              >
                <div className="mb-20 flex justify-center">
                  <div className={`flex h-64 w-64 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size="xl" />
                  </div>
                </div>
                <h2 className="mb-12 text-xl font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SecondaryFeaturesSection() {
  const features = [
    {
      icon: LinkIcon,
      title: 'Link in Bio Pages',
      subtitle: 'Bio Links',
      description: 'Create beautiful link-in-bio pages to share all your important links in one place.',
      color: 'from-[#FF6B35] to-[#FF8555]',
    },
    {
      icon: BarChartIcon,
      title: 'Simple Analytics',
      subtitle: 'Track Performance',
      description: 'See where your clicks come from with basic analytics including location, device, and referrer information.',
      color: 'from-[#00D4AA] to-[#4DD4C4]',
    },
    {
      icon: DashboardIcon,
      title: 'Easy Management',
      subtitle: 'Clean Dashboard',
      description: 'Manage all your links, groups, and settings from a simple, easy-to-use dashboard.',
      color: 'from-[#FFE5D9] to-[#FF8555]',
    },
  ];

  return (
    <section className="py-60 md:py-100 bg-white">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={index}
              className={`mb-60 flex flex-col gap-32 md:mb-100 md:flex-row md:items-center md:gap-60 ${
                isEven ? 'md:flex-row-reverse' : ''
              } ${index < features.length - 1 ? 'border-b border-gray-100 pb-60 md:pb-100' : ''}`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#00D4AA] px-16 py-8 mb-16">
                  <Icon className="text-white" size="sm" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {feature.subtitle}
                  </span>
                </div>
                <h3 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <div className={`flex h-200 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.color} shadow-2xl md:h-300`}>
                  <div className="flex h-120 w-120 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon className="text-white" size="xl" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BottomCtaSection() {
  return (
    <section className="relative py-60 text-white md:py-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FF8555] to-[#00D4AA]" />
      <div className="container mx-auto px-16 text-center md:px-24 lg:px-32 relative z-10">
        <div className="mx-auto max-w-600">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl lg:text-5xl">
            Join the Beta
          </h2>
          <p className="mb-32 text-lg leading-relaxed text-white/90 md:text-xl">
            A simple link shortener built as a personal project. Free to use, no credit card required.
          </p>
          <Button
            elementType={Link}
            to="/register"
            size="lg"
            radius="rounded"
            variant="raised"
            className="min-w-200 bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold"
          >
            Sign up for free
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-40 text-white md:py-60">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        <div className="mb-32 flex flex-wrap justify-center gap-24 border-b border-white/10 pb-32">
          <Link to="/api-docs" className="text-sm text-white/70 hover:text-white transition-colors">
            Developers
          </Link>
          <Link to="/pages/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/pages/terms-of-service" className="text-sm text-white/70 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center gap-16 text-center text-sm text-white/70 md:flex-row md:justify-between">
          <div>
            Copyright © {year} LinksForBio
          </div>
          <div className="flex items-center gap-8">
            <FavoriteIcon className="text-red-500" size="sm" />
            <span>Built With Love By Jay Logan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

