<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour, ,</p>
    <p>Une nouvelle demande de formatage est disponible sur ATLASREG.</p>
    <ul>
        <li>Request ID : {{ $formatting->_id }}</li>
        <li>Reception Date : {{ $formatting->request_date }}</li>
        <li>Delivery Date : {{ $formatting->deadline }}</li>
        <li>Request Object : {{ $formatting->object }}</li>
        <li>Document Count : {{ $formatting->document_count }}</li>
        <li>Comments : {{ $formatting->remarks }}</li>
        <li>Status : {{ $formatting->status }}</li>
    </ul>
</body>

</html>