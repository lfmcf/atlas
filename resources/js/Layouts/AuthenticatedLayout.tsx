import { Suspense, useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { MasterInit } from '../_metronic/layout/MasterInit'
import { ThemeModeProvider } from '../_metronic/partials'
import { MasterLayout } from '../_metronic/layout/MasterLayout'
import { QueryClientProvider } from 'react-query';
import { MetronicI18nProvider } from '../_metronic/i18n/Metronici18n';
import { I18nProvider } from '../_metronic/i18n/i18nProvider';
import { LayoutSplashScreen, LayoutProvider } from '../_metronic/layout/core';

export default function Authenticated({ auth, children }) {

    return (
        <MasterLayout auth={auth}>
            {/* <QueryClientProvider client={queryClient}> */}
            {/* <MetronicI18nProvider> */}
            <Suspense fallback={<LayoutSplashScreen />}>
                <I18nProvider>
                    <LayoutProvider>
                        <ThemeModeProvider>
                            {/* <AuthInit> */}
                            {/* <Outlet /> */}
                            {children}
                            <MasterInit />
                            {/*  <App {...props} /> */}
                            {/* </AuthInit> */}
                        </ThemeModeProvider>
                    </LayoutProvider>

                </I18nProvider>
            </Suspense>

            {/* </MetronicI18nProvider> */}

            {/* </QueryClientProvider> */}
        </MasterLayout>

    );
}
