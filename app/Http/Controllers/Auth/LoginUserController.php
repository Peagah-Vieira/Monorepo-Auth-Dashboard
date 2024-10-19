<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;

final class LoginUserController extends Controller
{
    /**
     * Handle the login request.
     *
     * @param LoginRequest $request The login request containing user credentials.
     * @return RedirectResponse The response after successful authentication.
     */
    public function __invoke(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }
}
