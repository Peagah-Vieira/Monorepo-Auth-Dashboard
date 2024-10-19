<?php

use App\DataSource\EditProfileDataSource;
use App\DataSource\WelcomeDataSource;
use App\Http\Controllers\DeleteProfileController;
use App\Http\Controllers\UpdateProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get(
    '/',
    fn () => Inertia::render('Welcome', WelcomeDataSource::data())
)
    ->name('welcome');

Route::get(
    '/dashboard',
    fn () => Inertia::render('Dashboard')
)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get(
        '/profile',
        fn (Request $request) => Inertia::render('Profile/Edit', EditProfileDataSource::data($request))
    )
        ->name('profile.edit');
    Route::patch('/profile', UpdateProfileController::class)
        ->name('profile.update');
    Route::delete('/profile', DeleteProfileController::class)
        ->name('profile.destroy');
});

require __DIR__ . '/auth.php';
