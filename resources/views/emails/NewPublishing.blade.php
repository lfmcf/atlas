<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour,</p>
    <p>Une nouvelle demande de Publishing est disponible sur ATLASREG.</p>
    <ul>
        <li>Request ID : {{ $publishing->_id }}</li>
        <li>Reception Date : {{ \Carbon\Carbon::parse($publishing->request_date)->format('d/m/Y') }}</li>
        <li>Delivery Date : {{ \Carbon\Carbon::parse($publishing->deadline)->format('d/m/Y') }}</li>
        <li>Request Object : {{ $publishing->object }}</li>
        <li>Document Count : {{ $publishing->dossier_count }}</li>
        <li>Comments : {{ $publishing->remarks }}</li>
        <li>Status : {{ $publishing->status }}</li>
    </ul>
</body>

</html>