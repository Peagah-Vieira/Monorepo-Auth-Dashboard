<?php

declare(strict_types=1);

namespace App\DataSource;

use Illuminate\Http\Request;

final class ResetPasswordDataSource
{
    /**
     * Returns the necessary data to reset the user's password.
     *
     * @param Request $request
     * @return array An associative array containing:
     * - 'email' (string): The user's email.
     * - 'token' (string): The password reset token.
     */
    public static function data(Request $request): array
    {
        return [
            'email' => $request->email,
            'token' => $request->route('token'),
        ];
    }
}
