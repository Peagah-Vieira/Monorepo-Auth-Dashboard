<?php

declare(strict_types=1);

namespace App\DataSource;

final class ForgotPasswordDataSource
{
    /**
     * Retrieve the data for the forgot password process.
     *
     * @return array An associative array containing:
     * - 'status' (mixed): The status from the session.
     */
    public static function data(): array
    {
        return [
            'status' => session('status'),
        ];
    }
}
