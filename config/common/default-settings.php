<?php

return [
    // logos
    [
        'name' => 'branding.logo_dark',
        'value' => 'images/logo-dark.png',
    ],
    [
        'name' => 'branding.logo_light',
        'value' => 'images/logo-light.png',
    ],

    // LINKS
    ['name' => 'links.default_type', 'value' => 'direct'],
    ['name' => 'links.enable_type', 'value' => true],
    ['name' => 'links.redirect_time', 'value' => 10],
    ['name' => 'links.retargeting', 'value' => true],
    ['name' => 'links.pixels', 'value' => true],
    ['name' => 'links.homepage_creation', 'value' => true],
    ['name' => 'links.homepage_stats', 'value' => true],
    ['name' => 'links.home_expiration', 'value' => '1day'],
    ['name' => 'links.alias_min', 'value' => 5],
    ['name' => 'links.alias_max', 'value' => 10],
    ['name' => 'links.min_len', 'value' => 3],
    ['name' => 'links.max_len', 'value' => 1000],
    ['name' => 'links.alias_content', 'value' => 'alpha_dash'],
    ['name' => 'biolink.show_branding', 'value' => true],

    // HOMEPAGE APPEARANCE
    [
        'name' => 'homepage.appearance',
        'value' => json_encode([
            'headerTitle' => 'LinksForBio',
            'headerSubtitle' =>
                'Built by Jay Logan in my free time. Currently in private beta - free signups welcome.',
            'headerImage' => null,
            'headerImageOpacity' => 0,
            'headerOverlayColor1' => null,
            'headerOverlayColor2' => null,
            'footerTitle' => 'Join the Beta',
            'footerSubtitle' =>
                'A simple link shortener built as a personal project. Free to use, no credit card required.',
            'footerImage' => null,
            'actions' => [
                'inputText' => 'Paste a long url',
                'inputButton' => 'Shorten',
                'cta1' => [
                    'label' => 'Sign up for free',
                    'type' => 'route',
                    'action' => '/register',
                ],
                'cta2' => [
                    'label' => 'Try it now',
                    'type' => 'route',
                ],
                'cta3' => [
                    'label' => 'Sign up for free',
                    'type' => 'route',
                    'action' => '/register',
                ],
            ],
            'primaryFeatures' => [
                [
                    'title' => 'Shorten Links',
                    'subtitle' =>
                        'Create short, memorable links that are easy to share.',
                    'image' => null,
                ],
                [
                    'title' => 'Track Analytics',
                    'subtitle' =>
                        'See how many clicks your links get and where they come from.',
                    'image' => null,
                ],
                [
                    'title' => 'Custom Domains',
                    'subtitle' =>
                        'Use your own domain name for a more professional look.',
                    'image' => null,
                ],
            ],
            'secondaryFeatures' => [
                [
                    'title' => 'Link in Bio Pages',
                    'subtitle' => 'Bio Links',
                    'description' =>
                        'Create beautiful link-in-bio pages to share all your important links in one place.',
                    'image' => null,
                ],
                [
                    'title' => 'Simple Analytics',
                    'subtitle' => 'Track Performance',
                    'description' =>
                        'See where your clicks come from with basic analytics including location, device, and referrer information.',
                    'image' => null,
                ],
                [
                    'title' => 'Easy Management',
                    'subtitle' => 'Clean Dashboard',
                    'description' =>
                        'Manage all your links, groups, and settings from a simple, easy-to-use dashboard.',
                    'image' => null,
                ],
            ],
        ]),
    ],
    [
        'name' => 'homepage.type',
        'value' => '  landingPage',
    ],

    // menus
    [
        'name' => 'menus',
        'value' => json_encode([
            [
                'name' => 'User Dashboard',
                'id' => '5vpqoa',
                'positions' => ['dashboard-sidebar'],
                'items' => [
                    [
                        'type' => 'route',
                        'label' => 'Dashboard',
                        'action' => '/dashboard',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'm12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z',
                                ],
                            ],
                        ],
                        'id' => 318,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Links',
                        'action' => '/dashboard/links',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z',
                                ],
                            ],
                        ],
                        'id' => 723,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Biolinks',
                        'action' => '/dashboard/biolinks',
                        'id' => 239,
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type' => 'route',
                        'order' => 1,
                        'position' => 2,
                        'label' => 'Link Groups',
                        'action' => '/dashboard/link-groups',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z',
                                ],
                            ],
                        ],
                        'id' => 586,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Branded Domains',
                        'action' => '/dashboard/custom-domains',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
                                ],
                            ],
                        ],
                        'id' => 444,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'CTA Overlays',
                        'action' => '/dashboard/link-overlays',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z',
                                ],
                            ],
                        ],
                        'id' => 184,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Tracking Pixels',
                        'action' => '/dashboard/pixels',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62zM4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12c0 5.16 3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93zm15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89zm-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9z',
                                ],
                            ],
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9zm-4 .9c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07s1.07.48 1.07 1.07c0 .59-.48 1.07-1.07 1.07z',
                                ],
                            ],
                        ],
                        'id' => 303,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Link Pages',
                        'action' => '/dashboard/link-pages',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'm22 3-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z',
                                ],
                            ],
                        ],
                        'id' => 637,
                    ],
                ],
            ],
            [
                'name' => 'Footer',
                'id' => '4tbwog',
                'positions' => ['footer'],
                'items' => [
                    [
                        'type' => 'route',
                        'id' => 'c1sf2g',
                        'position' => 1,
                        'label' => 'Developers',
                        'action' => '/api-docs',
                        'condition' => 'auth',
                        'permissions' => ['api.access'],
                    ],
                    [
                        'type' => 'route',
                        'id' => 'rlz27v',
                        'position' => 2,
                        'label' => 'Privacy Policy',
                        'action' => '/pages/privacy-policy',
                    ],
                    [
                        'type' => 'route',
                        'id' => 'p80pvk',
                        'position' => 3,
                        'label' => 'Terms of Service',
                        'action' => '/pages/terms-of-service',
                    ],
                    [
                        'type' => 'route',
                        'id' => 'q8dtht',
                        'position' => 4,
                        'label' => 'Contact Us',
                        'action' => '/contact',
                    ],
                ],
            ],
            [
                'name' => 'Auth Dropdown',
                'id' => 'h8r6vg',
                'items' => [
                    [
                        'label' => 'Admin Area',
                        'id' => 'upm1rv',
                        'action' => '/admin',
                        'type' => 'route',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z',
                                ],
                            ],
                        ],
                        'permissions' => ['admin.access'],
                    ],
                    [
                        'label' => 'Dashboard',
                        'id' => 'ehj0uk',
                        'action' => '/dashboard',
                        'type' => 'route',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z',
                                ],
                            ],
                        ],
                    ],
                    [
                        'label' => 'Account Settings',
                        'id' => '6a89z5',
                        'action' => '/account-settings',
                        'type' => 'route',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
                                ],
                            ],
                        ],
                    ],
                ],
                'positions' => ['auth-dropdown'],
            ],
            [
                'name' => 'Admin Sidebar',
                'id' => '2d43u1',
                'items' => [
                    [
                        'label' => 'Analytics',
                        'id' => '886nz4',
                        'action' => '/admin',
                        'type' => 'route',
                        'condition' => 'admin',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z',
                                ],
                            ],

                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z',
                                ],
                            ],
                        ],
                        'role' => 1,
                        'permissions' => ['admin.access'],
                        'roles' => [],
                    ],
                    [
                        'label' => 'Appearance',
                        'id' => 'slcqm0',
                        'action' => '/admin/appearance',
                        'type' => 'route',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'm2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z',
                                ],
                            ],
                            [
                                'tag' => 'circle',
                                'attr' => [
                                    'cx' => '11',
                                    'cy' => '9',
                                    'r' => '1',
                                ],
                            ],
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z',
                                ],
                            ],
                        ],
                        'permissions' => ['appearance.update'],
                    ],
                    [
                        'label' => 'Settings',
                        'id' => 'x5k484',
                        'action' => '/admin/settings',
                        'type' => 'route',

                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
                                ],
                            ],
                        ],
                        'permissions' => ['settings.update'],
                    ],
                    [
                        'label' => 'Plans',
                        'id' => '7o42rt',
                        'action' => '/admin/plans',
                        'type' => 'route',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z',
                                ],
                            ],
                        ],
                        'permissions' => ['plans.update'],
                    ],
                    [
                        'label' => 'Subscriptions',
                        'action' => '/admin/subscriptions',
                        'type' => 'route',
                        'id' => 'sdcb5a',
                        'condition' => 'admin',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z',
                                ],
                            ],
                        ],
                        'permissions' => ['subscriptions.update'],
                    ],
                    [
                        'label' => 'Users',
                        'action' => '/admin/users',
                        'type' => 'route',
                        'id' => 'fzfb45',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
                                ],
                            ],
                        ],
                        'permissions' => ['users.update'],
                    ],
                    [
                        'label' => 'Roles',
                        'action' => '/admin/roles',
                        'type' => 'route',
                        'id' => 'mwdkf0',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z',
                                ],
                            ],
                        ],
                        'permissions' => ['roles.update'],
                    ],

                    [
                        'type' => 'route',
                        'label' => 'Links',
                        'action' => '/admin/links',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z',
                                ],
                            ],
                        ],
                        'id' => 7234,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Biolinks',
                        'action' => '/admin/biolinks',
                        'id' => 2394,
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Link Groups',
                        'action' => '/admin/link-groups',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z',
                                ],
                            ],
                        ],
                        'id' => 5864,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Branded Domains',
                        'action' => '/admin/custom-domains',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
                                ],
                            ],
                        ],
                        'id' => 4441,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'CTA Overlays',
                        'action' => '/admin/link-overlays',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z',
                                ],
                            ],
                        ],
                        'id' => 18411,
                    ],
                    [
                        'type' => 'route',
                        'label' => 'Tracking Pixels',
                        'action' => '/admin/pixels',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62zM4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12c0 5.16 3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93zm15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89zm-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9z',
                                ],
                            ],
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9zm-4 .9c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07s1.07.48 1.07 1.07c0 .59-.48 1.07-1.07 1.07z',
                                ],
                            ],
                        ],
                        'id' => 303113,
                    ],
                    [
                        'label' => 'Pages',
                        'action' => '/admin/custom-pages',
                        'type' => 'route',
                        'id' => '63bwv9',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
                                ],
                            ],

                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
                                ],
                            ],
                        ],
                        'permissions' => ['custom_pages.update'],
                    ],
                    [
                        'label' => 'Tags',
                        'action' => '/admin/tags',
                        'type' => 'route',
                        'id' => '2x0pzq',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z',
                                ],
                            ],
                        ],
                        'permissions' => ['tags.update'],
                    ],
                    [
                        'label' => 'Files',
                        'action' => '/admin/files',
                        'type' => 'route',
                        'id' => 'vguvti',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z',
                                ],
                            ],
                        ],
                        'permissions' => ['files.update'],
                    ],

                    [
                        'label' => 'Translations',
                        'action' => '/admin/localizations',
                        'type' => 'route',
                        'id' => 'w91yql',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'm12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z',
                                ],
                            ],
                        ],
                        'permissions' => ['localizations.update'],
                    ],

                    [
                        'label' => 'Ads',
                        'action' => '/admin/ads',
                        'type' => 'route',
                        'id' => 'ohj4qk',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7zm0 3v-1h10v1H7z',
                                ],
                            ],
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' => 'M16 7H8v2h8V7z',
                                ],
                            ],
                        ],
                        'permissions' => ['settings.update'],
                    ],

                    [
                        'label' => 'Logs',
                        'action' => '/admin/logs',
                        'type' => 'route',
                        'id' => '8j435f',
                        'icon' => [
                            [
                                'tag' => 'path',
                                'attr' => [
                                    'd' =>
                                        'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6v-2h12v2zm0-4H6v-2h12v2zm-3-4H6V7h9v2z',
                                ],
                            ],
                        ],
                    ],
                ],
                'positions' => ['admin-sidebar'],
            ],
            [
                'name' => 'Homepage navbar',
                'id' => '5vgq1a',
                'positions' => ['homepage-navbar'],
                'items' => [
                    [
                        'type' => 'link',
                        'label' => 'Features',
                        'action' => '#features',
                        'id' => 19041,
                    ],
                ],
            ],
        ]),
    ],

    // custom domains
    ['name' => 'custom_domains.allow_select', 'value' => true],
];
