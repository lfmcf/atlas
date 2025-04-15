<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour, ,</p>
    <p>A New Publishing request is {{ $publishing->status }}</p>
    <ul>
        <li>Request ID : {{ $publishing->public_id }}</li>
        <li>Product Name - country : {{ $publishing->product_name }} - {{ $publishing->country['value'] }}</li>
        <li>Request Object : {{ $publishing->object }}</li>
        <li>Dossier type : {{ $publishing->dossier_type['value'] }}</li>
        <li>Request Date : {{ $publishing->request_date->format('d-m-Y') }}</li>
        <li>Request Deadline : {{ $publishing->deadline->format('d-m-Y') }}</li>
        <li>Comments : {{ $publishing->remarks }}</li>
        <li>Current Status : {{ $publishing->status }}</li>
    </ul>
    <br />
    <p>regards.</p>
</body>

</html>