import {Link} from 'react-router-dom';
import {Button} from '@common/ui/buttons/button';

export function SharedNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-16 md:px-24 lg:px-32">
        <div className="flex h-64 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/">
              <img 
                src="/images/logo.png" 
                alt="LinksForBio" 
                className="h-40 w-auto"
              />
            </Link>
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
              variant="outline"
              size="sm"
              className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-colors duration-200"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function SharedFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-40 md:py-60" style={{backgroundColor: '#111827', color: '#ffffff'}}>
      <div className="container mx-auto px-16 md:px-24 lg:px-32" style={{color: '#ffffff'}}>
        <div className="mb-32 flex flex-wrap justify-center gap-24 border-b border-white/10 pb-32">
          <Link 
            to="/privacy-policy" 
            className="text-sm transition-colors hover:opacity-80"
            style={{color: '#ffffff'}}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-of-service" 
            className="text-sm transition-colors hover:opacity-80"
            style={{color: '#ffffff'}}
          >
            Terms of Service
          </Link>
          <Link 
            to="/contact" 
            className="text-sm transition-colors hover:opacity-80"
            style={{color: '#ffffff'}}
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col items-center gap-16 text-center text-sm md:flex-row md:justify-between" style={{color: '#ffffff'}}>
          <div style={{color: '#ffffff'}}>
            Copyright © {year} LinksForBio
          </div>
          <div style={{color: '#ffffff'}}>
            Built By{' '}
            <a 
              href="https://jaylogan.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{color: '#ffffff', textDecoration: 'none'}}
            >
              Jay Logan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

