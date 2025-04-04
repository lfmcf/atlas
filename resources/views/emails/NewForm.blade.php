<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour,</p>
    <p>Une nouvelle demande de formatage est disponible sur ATLASREG.</p>
    <ul>
        <li>Request ID : {{ $formatting->_id }}</li>
        <li>Reception Date : {{ \Carbon\Carbon::parse($formatting->request_date)->format('d/m/Y') }}</li>
        <li>Delivery Date : {{ \Carbon\Carbon::parse($formatting->deadline)->format('d/m/Y') }}</li>
        <li>Request Object : {{ $formatting->object }}</li>
        <li>Document Count : {{ $formatting->document_count }}</li>
        <li>Comments : {{ $formatting->remarks }}</li>
        <li>Status : {{ $formatting->status }}</li>
    </ul>
</body>

</html>