<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\FormatingController;
use App\Http\Controllers\PublishingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/', function () {
        return Inertia::render('Dashboard');
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/list', [ReportController::class, 'list'])->name('list');
    Route::get('/tasks', [ReportController::class, 'task'])->name('tasks');

    // ** iniatiate and submit form ** //
    Route::get('/formatting-initiate', [FormatingController::class, 'create'])->name('formatting-initiate');
    Route::post('initiate-formatting', [FormatingController::class, 'store'])->name('initiate-formatting');

    // ** confirm deadline form ** //
    Route::get('/formatting-confirm', [FormatingController::class, 'createConfirm'])->name('formatting-confirm');
    Route::post('confirm-formatting', [FormatingController::class, 'postConfirm'])->name('confirm-formatting');

    // ** audit and check form ** //
    Route::get('/formatting-audit', [FormatingController::class, 'createAudit'])->name('formatting-audit');
    Route::post('message-audit', [FormatingController::class, 'postMessageAudit'])->name('message-audit');
    Route::post('/audit-formatting', [FormatingController::class, 'postAudit'])->name('audit-formatting');

    // ** show formatting and deliver  ** //
    Route::get('/show-formatting', [FormatingController::class, 'show'])->name('show-formatting');

    // ** post deliver  ** //
    Route::post('diliver-formatting', [FormatingController::class, 'deliver'])->name('diliver-formatting');

    // ** delivery and dossier correction  ** //
    Route::get('/formatting-verification', [FormatingController::class, 'verification'])->name('formatting-verification');
    Route::post('correct-formatting', [FormatingController::class, 'postCorrection'])->name('correct-formatting');

    // ** close demande  ** //
    Route::post('close-formatting', [FormatingController::class, 'close'])->name('close-formatting');

    Route::post('progress', [FormatingController::class, 'setProgress'])->name('progress');
    Route::post('verify', [FormatingController::class, 'setVerify'])->name('verify');


    Route::get('/correction', [FormatingController::class, 'correctshow'])->name('correct');
    Route::post('tocorrect', [FormatingController::class, 'tocorrect'])->name('tocorrect');

    Route::get('/publishing', [PublishingController::class, 'create'])->name('pub-create');
    Route::post('/publishingStore', [PublishingController::class, 'store'])->name('publishingStore');
    Route::get('/validate', [PublishingController::class, 'validation'])->name('validate');
    Route::post('/postvalidate', [PublishingController::class, 'validationStore'])->name('postvalidate');
    Route::get('/review', [PublishingController::class, 'audit'])->name('review');
    Route::post('progresspublishing', [PublishingController::class, 'setProgress'])->name('progresspublishing');
    Route::post('verify', [PublishingController::class, 'setVerify'])->name('verify');
    Route::post('deliverpublishing', [PublishingController::class, 'deliver'])->name('deliverpublishing');
    Route::get('/correctpublishing', [PublishingController::class, 'correctshow'])->name('correctpublishing');
    Route::post('tocorrectpublishing', [PublishingController::class, 'tocorrect'])->name('tocorrectpublishing');
    Route::post('closepublishing', [PublishingController::class, 'close'])->name('closepublishing');

    Route::get('/show', [PublishingController::class, 'show'])->name('show');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


/**
 * Teamwork routes
 */
Route::group(['prefix' => 'teams', 'namespace' => 'Teamwork'], function () {
    Route::get('/', [App\Http\Controllers\Teamwork\TeamController::class, 'index'])->name('teams.index');
    Route::get('create', [App\Http\Controllers\Teamwork\TeamController::class, 'create'])->name('teams.create');
    Route::post('teams', [App\Http\Controllers\Teamwork\TeamController::class, 'store'])->name('teams.store');
    Route::get('edit/{id}', [App\Http\Controllers\Teamwork\TeamController::class, 'edit'])->name('teams.edit');
    Route::put('edit/{id}', [App\Http\Controllers\Teamwork\TeamController::class, 'update'])->name('teams.update');
    Route::delete('destroy/{id}', [App\Http\Controllers\Teamwork\TeamController::class, 'destroy'])->name('teams.destroy');
    Route::get('switch/{id}', [App\Http\Controllers\Teamwork\TeamController::class, 'switchTeam'])->name('teams.switch');

    Route::get('members/{id}', [App\Http\Controllers\Teamwork\TeamMemberController::class, 'show'])->name('teams.members.show');
    Route::get('members/resend/{invite_id}', [App\Http\Controllers\Teamwork\TeamMemberController::class, 'resendInvite'])->name('teams.members.resend_invite');
    Route::post('members/{id}', [App\Http\Controllers\Teamwork\TeamMemberController::class, 'invite'])->name('teams.members.invite');
    Route::delete('members/{id}/{user_id}', [App\Http\Controllers\Teamwork\TeamMemberController::class, 'destroy'])->name('teams.members.destroy');

    Route::get('accept/{token}', [App\Http\Controllers\Teamwork\AuthController::class, 'acceptInvite'])->name('teams.accept_invite');
});
