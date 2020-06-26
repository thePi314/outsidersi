<div class="box-frame">
    <form id="login-form" class="box visible" method="post" action="/login">
        <div class="title">Log In</div>
        <div class="body">
            @if ($message !== '')
                <div class="message">
                    {{$message}}
                </div>    
            @endif
            <div class="message"></div>
            <div class="labeled-input">
                <div class="label">
                    Username or Email
                </div>
                <input placeholder="username or email" id="username" name="username" type="text"/>
            </div>
            <div class="labeled-input">
                <div class="label">
                    Password
                </div>
                <input placeholder="password" id="password" name="password" type="password"/>
            </div>
        </div>
        <div class="footer">
            <button id="login-button" h="submit">
                Sing In
            </button>
        </div>
    </form>
</div>