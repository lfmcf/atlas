<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000" />

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <link rel="shortcut icon" href="storage/media/logos/favicon.ico" />
    <link rel="stylesheet" id="layout-styles-anchor" href="storage/splash-screen.css" />

    <!-- Scripts -->

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body id="kt_body" class="page-loading">

    <!--begin::Theme mode setup on page load-->
    <script>
        let themeMode = 'system'

        if (localStorage.getItem('kt_theme_mode_value')) {
            themeMode = localStorage.getItem('kt_theme_mode_value')
        }

        if (themeMode === 'system') {
            themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }

        document.documentElement.setAttribute('data-bs-theme', themeMode)
    </script>
    <!--end::Theme mode setup on page load-->

    <div id="root">
        @inertia
    </div>

    <!--begin::Loading markup-->
    <div id="splash-screen" class="splash-screen">
        <img src="/storage/media/logos/default-dark.svg" class="dark-logo" alt="Metronic dark logo" />
        <img src="/storage/media/logos/default.svg" class="light-logo" alt="Metronic light logo" />
        <span>Loading ...</span>
    </div>
    <!--end::Loading markup-->

    <div id="root-modals"></div>



</body>

</html>