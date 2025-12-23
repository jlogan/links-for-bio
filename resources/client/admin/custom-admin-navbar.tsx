import {Navbar, NavbarProps} from '@common/ui/navigation/navbar/navbar';
import {IconButton} from '@common/ui/buttons/icon-button';
import React, {useContext} from 'react';
import clsx from 'clsx';
import {DashboardLayoutContext} from '@common/ui/layout/dashboard-layout-context';
import {setInLocalStorage} from '@common/utils/hooks/local-storage';
import {MenuOpenIcon} from '@common/icons/material/MenuOpen';
import {CustomLogo} from '@app/dashboard/layout/custom-logo';

export interface CustomAdminNavbarProps
  extends Omit<NavbarProps, 'toggleButton' | 'hideLogo'> {
  hideToggleButton?: boolean;
}

export function CustomAdminNavbar({
  children,
  className,
  hideToggleButton,
  ...props
}: CustomAdminNavbarProps) {
  const {
    isMobileMode,
    leftSidenavStatus,
    setLeftSidenavStatus,
    name,
    leftSidenavCanBeCompact,
  } = useContext(DashboardLayoutContext);

  const shouldToggleCompactMode = leftSidenavCanBeCompact && !isMobileMode;
  const shouldShowToggle =
    !hideToggleButton && (isMobileMode || leftSidenavCanBeCompact);

  const handleToggle = () => {
    setLeftSidenavStatus(leftSidenavStatus === 'open' ? 'closed' : 'open');
  };

  const handleCompactModeToggle = () => {
    const newStatus = leftSidenavStatus === 'compact' ? 'open' : 'compact';
    setInLocalStorage(`${name}.sidenav.compact`, newStatus === 'compact');
    setLeftSidenavStatus(newStatus);
  };

  return (
    <Navbar
      className={clsx('dashboard-grid-navbar', className)}
      border="border-b"
      size="sm"
      color="primary"
      hideLogo={true}
      toggleButton={
        shouldShowToggle ? (
          <IconButton
            size="md"
            onClick={() => {
              if (shouldToggleCompactMode) {
                handleCompactModeToggle();
              } else {
                handleToggle();
              }
            }}
          >
            <MenuOpenIcon />
          </IconButton>
        ) : undefined
      }
      {...props}
    >
      <CustomLogo className="mr-4 md:mr-24" />
      {children}
    </Navbar>
  );
}

