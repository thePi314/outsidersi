<!DOCTYPE html>
<html lang="en">
<head>
    {{-- Include MetaData --}}
    {!! $page->metadata !!}

    <title>Brm Brm Sistem</title>

    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    {{-- Include Styles --}}
    @foreach ($page->stylesheets as $item)
        <link rel="stylesheet" href="{{$item}}">
    @endforeach

    {{-- Include Scripts --}}
    @foreach ($page->scripts as $item)
        <script type="application/javascript" src="{{$item}}"></script>
    @endforeach

</head>
<body>
    <div class="background-image"></div>
    {{-- Header --}}
    @if ($page->hasHeader)
        @include('header')
    @endif

    {{-- Include Page Content --}}
    {!! $page->content !!}

    @include('footer')
</body>
</html>