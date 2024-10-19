<?php

declare(strict_types=1);

namespace App\DataSource;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;

final class EditProfileDataSource
{
    /**
     * Retrieve the data for editing the profile.
     *
     * @param Request $request
     * @return array An associative array containing:
     * - 'mustVerifyEmail' (bool): Indicates if the user must verify their email.
     * - 'status' (mixed): The status from the session.
     */
    public static function data(Request $request): array
    {
        return [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ];
    }
}
