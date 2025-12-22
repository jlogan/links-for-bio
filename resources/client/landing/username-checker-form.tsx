import {TextField} from '@common/ui/forms/input-field/text-field/text-field';
import {Button} from '@common/ui/buttons/button';
import {useTrans} from '@common/i18n/use-trans';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Trans} from '@common/i18n/trans';
import {message} from '@common/i18n/message';
import {useSettings} from '@common/core/settings/use-settings';

export function UsernameCheckerForm() {
  const {trans} = useTrans();
  const navigate = useNavigate();
  const {branding} = useSettings();
  const [username, setUsername] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsChecking(true);
    // Check if username is available (you can add API call here later)
    // For now, just navigate to register with the username
    setTimeout(() => {
      setIsChecking(false);
      navigate(`/register?username=${encodeURIComponent(username.trim())}`);
    }, 300);
  };

  const domain = 'linksforb.io';

  const prefix = `${domain}/`;
  const prefixWidth = prefix.length * 8 + 32; // Approximate width calculation

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-500">
      <div className="flex flex-col gap-12 sm:flex-row">
        <div className="flex-1">
          <div className="relative">
            <span className="absolute left-16 top-1/2 z-10 -translate-y-1/2 text-sm font-medium text-muted">
              {prefix}
            </span>
            <TextField
              background="bg-white"
              inputRadius="rounded-l-lg sm:rounded-l-lg"
              size="lg"
              placeholder="yourname"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{paddingLeft: `${prefixWidth}px`}}
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="raised"
          color="primary"
          size="lg"
          radius="rounded-r-lg sm:rounded-r-lg"
          className="min-w-120 sm:min-w-140"
          disabled={isChecking || !username.trim()}
        >
          {isChecking ? (
            <Trans message="Checking..." />
          ) : (
            <Trans message="Claim" />
          )}
        </Button>
      </div>
      <p className="mt-12 text-sm text-muted">
        <Trans message="Claim your username and get started in seconds" />
      </p>
    </form>
  );
}

