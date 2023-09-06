import './bootstrap';
import '../css/app.css';



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Chart, registerables } from 'chart.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { MetronicI18nProvider } from './_metronic/i18n/Metronici18n'
import { I18nProvider } from './_metronic/i18n/i18nProvider'
import { Suspense } from 'react'
import { LayoutProvider, LayoutSplashScreen } from './_metronic/layout/core'
import { MasterInit } from './_metronic/layout/MasterInit'
import { ThemeModeProvider } from './_metronic/partials'
import { MasterLayout } from './_metronic/layout/MasterLayout'
const appName = 'Atlas';
const queryClient = new QueryClient()

Chart.register(...registerables)

const container = document.getElementById('root')

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        if (container) {
            const root = createRoot(el);

            root.render(

                <QueryClientProvider client={queryClient}>
                    <MetronicI18nProvider>
                        <I18nProvider>

                            <App {...props} />

                        </I18nProvider>
                    </MetronicI18nProvider>
                </QueryClientProvider>
                // <MasterLayout>
                //     <QueryClientProvider client={queryClient}>

                //         <MetronicI18nProvider>

                //             <Suspense fallback={<LayoutSplashScreen />}>
                //                 <I18nProvider>

                //                     <LayoutProvider>
                //                         <ThemeModeProvider>
                //                             {/* <AuthInit> */}
                //                             {/* <Outlet /> */}
                //                             <MasterInit />
                //                             <App {...props} />
                //                             {/* </AuthInit> */}
                //                         </ThemeModeProvider>
                //                     </LayoutProvider>

                //                 </I18nProvider>
                //             </Suspense>

                //         </MetronicI18nProvider>

                //     </QueryClientProvider>
                // </MasterLayout>


            );
        }
    },
    progress: {
        color: '#4B5563',
    },
});
