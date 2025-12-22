import clsx from 'clsx';
import {LandingPageContent} from './landing-page-content';
import {Navbar} from '@common/ui/navigation/navbar/navbar';
import {Button, ButtonProps} from '@common/ui/buttons/button';
import {Footer} from '@common/ui/footer/footer';
import {Trans} from '@common/i18n/trans';
import {Link} from 'react-router-dom';
import {createSvgIconFromTree} from '@common/icons/create-svg-icon';
import {InsertLinkIcon} from '@common/icons/material/InsertLink';
import {BarChartIcon} from '@common/icons/material/BarChart';
import {LanguageIcon} from '@common/icons/material/Language';
import {LinkIcon} from '@common/icons/material/Link';
import {DashboardIcon} from '@common/icons/material/Dashboard';
import {FavoriteIcon} from '@common/icons/material/Favorite';
import {MenuItemConfig} from '@common/core/settings/settings';
import {Fragment} from 'react';
import {DefaultMetaTags} from '@common/seo/default-meta-tags';
import {useSettings} from '@common/core/settings/use-settings';
import {UsernameCheckerForm} from '@app/landing/username-checker-form';

interface ContentProps {
  content: LandingPageContent;
}
export function LandingPage() {
  const settings = useSettings();
  const homepage = settings.homepage as {appearance: LandingPageContent};

  return (
    <Fragment>
      <DefaultMetaTags />
      <div className="min-h-screen bg-paper">
        <HeroSection content={homepage.appearance} />
        <FeaturesSection content={homepage.appearance} />
        <SecondaryFeaturesSection content={homepage.appearance} />
        <BottomCtaSection content={homepage.appearance} />
        <CustomFooter />
      </div>
    </Fragment>
  );
}

function HeroSection({content}: ContentProps) {
  const {headerTitle, headerSubtitle, actions} = content;

  return (
    <section className="relative overflow-hidden bg-paper">
      <Navbar
        color="transparent"
        className="absolute top-0 left-0 right-0 z-50"
        menuPosition="homepage-navbar"
        primaryButtonColor="primary"
      />
      <div className="container mx-auto px-16 pt-100 pb-60 md:px-24 md:pt-120 md:pb-80 lg:px-32">
        <div className="grid gap-40 md:grid-cols-2 md:items-center md:gap-60 lg:gap-80">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            {headerTitle && (
              <h1
                className="mb-16 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
                data-testid="headerTitle"
              >
                <Trans message={headerTitle} />
              </h1>
            )}
            {headerSubtitle && (
              <p
                className="mb-32 text-lg leading-relaxed text-muted md:text-xl"
                data-testid="headerSubtitle"
              >
                <Trans message={headerSubtitle} />
              </p>
            )}
            <UsernameCheckerForm />
            <div className="mt-24 flex flex-col gap-12 sm:flex-row sm:justify-center md:justify-start">
              <CtaButton
                item={actions.cta1}
                variant="raised"
                color="primary"
                size="lg"
                radius="rounded"
                data-testid="cta1"
                className="min-w-180"
              />
              <CtaButton
                item={actions.cta2}
                variant="outline"
                color="primary"
                size="lg"
                radius="rounded"
                data-testid="cta2"
              />
            </div>
          </div>
          {/* Right side - Visual element */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-500">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-40 md:p-60">
                <div className="flex flex-col gap-24 rounded-xl bg-paper p-32 shadow-lg">
                  <div className="flex items-center gap-16">
                    <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/10">
                      <InsertLinkIcon className="text-primary" size="lg" />
                    </div>
                    <div>
                      <div className="h-12 w-120 rounded bg-divider"></div>
                      <div className="mt-8 h-8 w-80 rounded bg-divider"></div>
                    </div>
                  </div>
                  <div className="space-y-12">
                    <div className="h-8 w-full rounded bg-divider"></div>
                    <div className="h-8 w-3/4 rounded bg-divider"></div>
                  </div>
                  <div className="flex gap-12">
                    <div className="h-32 flex-1 rounded bg-primary/10"></div>
                    <div className="h-32 flex-1 rounded bg-primary/10"></div>
                    <div className="h-32 flex-1 rounded bg-primary/10"></div>
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

interface CtaButtonProps extends ButtonProps {
  item?: MenuItemConfig;
}
function CtaButton({item, ...buttonProps}: CtaButtonProps) {
  if (!item?.label || !item?.action) return null;
  const Icon = item.icon ? createSvgIconFromTree(item.icon) : undefined;
  return (
    <Button
      elementType={item.type === 'route' ? Link : 'a'}
      href={item.action}
      to={item.action}
      startIcon={Icon ? <Icon /> : undefined}
      {...buttonProps}
    >
      <Trans message={item.label} />
    </Button>
  );
}

function FeaturesSection({content}: ContentProps) {
  const iconMap = [InsertLinkIcon, BarChartIcon, LanguageIcon];
  
  return (
    <section className="bg-alt py-60 md:py-80">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        <div className="grid gap-24 md:grid-cols-3 md:gap-32">
          {content.primaryFeatures.map((feature, index) => {
            const Icon = iconMap[index] || InsertLinkIcon;
            return (
              <div
                key={index}
                className="rounded-xl bg-paper p-32 text-center transition-all hover:shadow-lg"
                data-testid={`primary-root-${index}`}
              >
                <div className="mb-20 flex justify-center">
                  <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="text-primary" size="xl" />
                  </div>
                </div>
                <h2
                  className="mb-12 text-xl font-semibold"
                  data-testid={`primary-title-${index}`}
                >
                  <Trans message={feature.title} />
                </h2>
                <p
                  className="text-base leading-relaxed text-muted"
                  data-testid={`primary-subtitle-${index}`}
                >
                  <Trans message={feature.subtitle} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SecondaryFeaturesSection({content}: ContentProps) {
  const iconMap = [LinkIcon, BarChartIcon, DashboardIcon];
  
  return (
    <section className="bg-paper py-60 md:py-100">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        {content.secondaryFeatures.map((feature, index) => {
          const Icon = iconMap[index] || LinkIcon;
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={index}
              data-testid={`secondary-root-${index}`}
              className={clsx(
                'mb-60 flex flex-col gap-32 md:mb-100 md:flex-row md:items-center md:gap-60',
                isEven ? 'md:flex-row-reverse' : '',
                index < content.secondaryFeatures.length - 1 && 'border-b border-divider pb-60 md:pb-100'
              )}
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-12 rounded-full bg-primary/10 px-16 py-8">
                  <Icon className="text-primary" size="sm" />
                  <span
                    className="text-xs font-medium uppercase tracking-wider text-primary"
                    data-testid={`secondary-subtitle-${index}`}
                  >
                    <Trans message={feature.subtitle} />
                  </span>
                </div>
                <h3
                  className="mt-16 mb-12 text-3xl font-bold md:text-4xl"
                  data-testid={`secondary-title-${index}`}
                >
                  <Trans message={feature.title} />
                </h3>
                <p
                  className="text-lg leading-relaxed text-muted"
                  data-testid={`secondary-description-${index}`}
                >
                  <Trans message={feature.description} />
                </p>
              </div>
              <div className="flex-1">
                <div className="flex h-200 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 md:h-300">
                  <div className="flex h-120 w-120 items-center justify-center rounded-full bg-primary/20">
                    <Icon className="text-primary" size="xl" />
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

function BottomCtaSection({content}: ContentProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-60 text-white md:py-80">
      <div className="container mx-auto px-16 text-center md:px-24 lg:px-32">
        <div className="mx-auto max-w-600">
          <h2
            className="mb-16 text-3xl font-bold md:text-4xl lg:text-5xl"
            data-testid="footerTitle"
          >
            <Trans message={content.footerTitle} />
          </h2>
          {content.footerSubtitle && (
            <p
              className="mb-32 text-lg leading-relaxed text-white/90 md:text-xl"
              data-testid="footerSubtitle"
            >
              <Trans message={content.footerSubtitle} />
            </p>
          )}
          <CtaButton
            item={content.actions.cta3}
            size="lg"
            radius="rounded"
            variant="raised"
            color="paper"
            className="min-w-200"
            data-testid="cta3"
          />
        </div>
      </div>
    </section>
  );
}

function CustomFooter() {
  const year = new Date().getFullYear();
  const {branding, menus} = useSettings();
  const primaryMenu = menus.find(m => m.positions?.includes('footer'));

  return (
    <footer className="bg-gray-900 py-40 text-white md:py-60">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        {primaryMenu && (
          <div className="mb-32 flex flex-wrap justify-center gap-24 border-b border-white/10 pb-32">
            {primaryMenu.items?.map((item, index) => (
              <Link
                key={index}
                to={item.action || '#'}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                <Trans message={item.label} />
              </Link>
            ))}
          </div>
        )}
        <div className="flex flex-col items-center gap-16 text-center text-sm text-white/70 md:flex-row md:justify-between">
          <div>
            <Trans
              message="Copyright © :year :name"
              values={{year, name: branding.site_name}}
            />
          </div>
          <div className="flex items-center gap-8">
            <FavoriteIcon className="text-red-500" size="sm" />
            <span>
              <Trans message="Built With Love By Jay Logan" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
