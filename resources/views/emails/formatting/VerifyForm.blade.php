<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour,</p>
    <p>The Formatting Request N {{ $formatting->public_id }} requires verification.</p>
    <ul>
        <li>Request ID : {{ $formatting->public_id }}</li>
        <li>Product Name - country : {{ $formatting->product_name['value'] }} - {{ $formatting->country['value'] }}</li>
        <li>Request Object : {{ $formatting->object }}</li>
        <li>Dossier type : {{ $formatting->dossier_type['value'] }}</li>
        <li>Request Date : {{ $formatting->request_date }}</li>
        <li>Request Deadline : {{ $formatting->deadline }}</li>
        <li>Operational Deadline : {{ $formatting->adjusted_deadline->format('d-m-Y') }}</li>
        <li>Required Verification :
            <ul>
                @foreach($formatting->audit as $item)
                <li> {{ is_array($item) ? $item['user']['name'] . ' - ' . $item['message'] : $item->user->name . ' - ' . $item->message }}</li>
                @endforeach
            </ul>
        </li>
        <li>Current status : {{ $formatting->status }}</li>
    </ul>
</body>

</html>