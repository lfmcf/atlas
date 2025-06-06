<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<body class="font-sans antialiased">
    <p>Bonjour,</p>
    <p>The Publishing Request N {{ $publishing->public_id }} requires verification.</p>
    <ul>
        <li>Request ID : {{ $publishing->public_id }}</li>
        <li>Product Name - country : {{ $publishing->product_name }} - {{ $publishing->country['value'] }}</li>
        <li>Request Object : {{ $publishing->object }}</li>
        <li>Dossier type : {{ $publishing->dossier_type['value'] }}</li>
        <li>Request Date : {{ $publishing->request_date }}</li>
        <li>Request Deadline : {{ $publishing->deadline }}</li>
        <li>Operational Deadline : {{ $publishing->adjusted_deadline->format('d-m-Y') }}</li>
        <li>Required Verification :
            <ul>
                @foreach($publishing->audit as $item)
                <li> {{ is_array($item) ? $item['user']['name'] . ' - ' . $item['message'] : $item->user->name . ' - ' . $item->message }}</li>
                @endforeach
            </ul>
        </li>
        <li>Current status : {{ $publishing->status }}</li>
    </ul>
</body>

</html>