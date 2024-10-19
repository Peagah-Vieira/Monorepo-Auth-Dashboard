<?php

declare(strict_types=1);

namespace App\DataSource;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

final class WelcomeDataSource
{
    /**
     * Returns an array with information about the application.
     *
     * @return array An associative array containing:
     * - 'canLogin' (bool): Indicates if the login route is available.
     * - 'canRegister' (bool): Indicates if the registration route is available.
     * - 'laravelVersion' (string): The current version of Laravel.
     * - 'phpVersion' (string): The current version of PHP.
     */
    public static function data(): array
    {
        return [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ];
    }
}
