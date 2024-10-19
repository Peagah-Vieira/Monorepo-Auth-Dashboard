<?php

declare(strict_types=1);

namespace App\DataSource;

use Illuminate\Support\Facades\Route;

final class LoginUserDataSource
{
    /**
     * Retrieve the data for the login user process.
     *
     * @return array An associative array containing:
     * - 'canResetPassword' (bool): Indicates if the password reset route is available.
     * - 'status' (mixed): The status from the session.
     */
    public static function data(): array
    {
        return [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ];
    }
}
