import {useState} from 'react';
import {TwoFactorChallengePage} from '@common/auth/ui/two-factor/two-factor-challenge-page';
import {CustomLoginPage} from './custom-login-page';

export function CustomLoginPageWrapper() {
  const [isTwoFactor, setIsTwoFactor] = useState(false);
  if (isTwoFactor) {
    return <TwoFactorChallengePage />;
  } else {
    return <CustomLoginPage onTwoFactorChallenge={() => setIsTwoFactor(true)} />;
  }
}

