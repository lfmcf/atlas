<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour,</p>
    <p>The Formatting Request N {{ $formatting->public_id }} is {{ $formatting->status }}.</p>
    <ul>
        <li>Request ID : {{ $formatting->public_id }}</li>
        <li>Product Name - country : {{ $formatting->product_name['value'] }} - {{ $formatting->country['value'] }}</li>
        <li>Request Object : {{ $formatting->object }}</li>
        <li>Dossier type : {{ $formatting->dossier_type['value'] }}</li>
        <li>Request Date : {{ $formatting->request_date }}</li>
        <li>Request Deadline : {{ $formatting->deadline }}</li>
        <li>Operational Deadline : {{ $formatting->adjusted_deadline->format('d-m-Y') }}</li>
        <li>Current status : {{ $formatting->status }}</li>
    </ul>
</body>

</html>