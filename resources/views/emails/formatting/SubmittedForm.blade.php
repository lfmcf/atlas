<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour, ,</p>
    <p>A New Formatting request is {{ $formatting->status }}</p>
    <ul>
        <li>Request ID : {{ $formatting->public_id }}</li>
        <li>Product Name - country : {{ $formatting->product_name['value'] }} - {{ $formatting->country['value'] }}</li>
        <li>Request Object : {{ $formatting->object }}</li>
        <li>Dossier type : {{ $formatting->dossier_type['value'] }}</li>
        <li>Request Date : {{ $formatting->request_date->format('d-m-Y') }}</li>
        <li>Request Deadline : {{ $formatting->deadline->format('d-m-Y') }}</li>
        <li>Operational Deadline : {{ $formatting->adjusted_deadline->format('d-m-Y') }}</li>
        <li>Comments : {{ $formatting->remarks }}</li>
        <li>Current Status : {{ $formatting->status }}</li>
    </ul>
    <br />
    <p>regards.</p>
</body>

</html>