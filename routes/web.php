<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\FormatingController;
use App\Http\Controllers\PublishingController;
use App\Http\Controllers\ProductMetaController;
use App\Models\Publishing;
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

    // Route::get('/', function () {

    //     return redirect('/dashboard');
    // });

    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');



    Route::get('/', [ReportController::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [ReportController::class, 'index'])->name('dashboard');

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
    Route::post('confirm-formatting-out', [FormatingController::class, 'QuickpostConfirm'])->name('confirm-formatting-out');
    Route::post('progress-formatting', [FormatingController::class, 'setProgress'])->name('progress-formatting');

    // ** show formatting and deliver  ** //
    Route::get('/show-formatting', [FormatingController::class, 'show'])->name('show-formatting');

    // ** post deliver  ** //
    Route::post('diliver-formatting', [FormatingController::class, 'deliver'])->name('diliver-formatting');

    // ** delivery and dossier correction  ** //
    Route::get('/formatting-verification', [FormatingController::class, 'verification'])->name('formatting-verification');
    Route::post('correct-formatting', [FormatingController::class, 'postCorrection'])->name('correct-formatting');

    // ** complete and close demande  ** //
    Route::post('complete-formatting', [FormatingController::class, 'complete'])->name('complete-formatting');
    Route::post('close-formatting', [FormatingController::class, 'close'])->name('close-formatting');

    // ** delete files from the server  ** //
    Route::post('delete-file', [FormatingController::class, 'deleteFile'])->name('delete-file');

    // ** store orm publishing ** //
    Route::post('/store-publishing', [PublishingController::class, 'store'])->name('store-publishing');
    Route::post('/store-publishing_', [PublishingController::class, 'store_'])->name('store-publishing_');

    // ** confirm deadline form publishing ** //
    Route::get('/publishing-confirm', [PublishingController::class, 'createConfirm'])->name('publishing-confirm');
    Route::post('confirm-publishing', [PublishingController::class, 'postConfirm'])->name('confirm-publishing');

    // ** audit and check form ** //
    Route::get('/publishing-audit', [PublishingController::class, 'createAudit'])->name('publishing-audit');
    Route::post('progress-publishing', [PublishingController::class, 'setProgress'])->name('progress-publishing');
    Route::post('audit-publishing', [PublishingController::class, 'postAudit'])->name('audit-publishing');
    Route::post('confirm-publishing-out', [PublishingController::class, 'QuickpostConfirm'])->name('confirm-publishing-out');

    // ** show formatting and deliver  ** //
    Route::get('/show-publishing', [PublishingController::class, 'show'])->name('show-publishing');

    // ** post deliver  ** //
    Route::post('deliver-publishing', [PublishingController::class, 'deliver'])->name('deliver-publishing');

    // ** delivery and dossier correction  ** //
    Route::get('/publishing-verification', [PublishingController::class, 'verification'])->name('publishing-verification');
    Route::post('correct-publishing', [PublishingController::class, 'postCorrection'])->name('correct-publishing');

    // ** complete and close demande  ** //
    Route::post('complete-publishing', [PublishingController::class, 'complete'])->name('complete-publishing');
    Route::post('close-publishing', [PublishingController::class, 'close'])->name('close-publishing');

    // ** iniatiate and submit form publishing nationale gcc ** //
    Route::post('store-publishing-nat-gcc', [PublishingController::class, 'storeNatGcc'])->name('store-publishing-nat-gcc');
    Route::post('store-publishing-nat-gcc_', [PublishingController::class, 'storeNatGcc_'])->name('store-publishing-nat-gcc_');

    // ** confirm form publishing nationale gcc ** //
    Route::post('confirm-publishing-nat-gcc', [PublishingController::class, 'confirmNatGcc'])->name('confirm-publishing-nat-gcc');

    // ** audit form publishing nationale gcc ** //
    Route::post('audit-publishing-nat-gcc', [PublishingController::class, 'auditNatGcc'])->name('audit-publishing-nat-gcc');

    // ** iniatiate and submit form publishing rmp ** //
    Route::get('/publishing-initiate', [PublishingController::class, 'create'])->name('publishing-initiate');
    Route::post('initiate-rmp-publishing', [PublishingController::class, 'storemrp'])->name('initiate-rmp-publishing');
    Route::post('initiate-rmp-publishing_', [PublishingController::class, 'storemrp_'])->name('initiate-rmp-publishing_');

    Route::get('/publishing-initiate_', [PublishingController::class, 'create_'])->name('publishing-initiate_');


    Route::post('confirm-rmp-publishing', [PublishingController::class, 'confirmmrp'])->name('confirm-rmp-publishing');

    Route::post('audit-rmp-publishing', [PublishingController::class, 'auditmrp'])->name('audit-rmp-publishing');

    Route::post('correct-rmp-publishing', [PublishingController::class, 'correctmrp'])->name('correct-rmp-publishing');

    Route::get('/show-publishing-rmp', [PublishingController::class, 'showmrp'])->name('show-publishing-rmp');

    // ** iniatiate and submit form publishing nationale ch ** //
    Route::post('store-publishing-nat-ch', [PublishingController::class, 'storeNatCh'])->name('store-publishing-nat-ch');
    Route::post('store-publishing-nat-ch_', [PublishingController::class, 'storeNatCh_'])->name('store-publishing-nat-ch_');

    // ** confirm form publishing nationale ch ** //
    Route::post('confirm-publishing-nat-ch', [PublishingController::class, 'confirmNatCH'])->name('confirm-publishing-nat-ch');

    // ** audit form publishing nationale ch ** //
    Route::post('audit-publishing-nat-ch', [PublishingController::class, 'auditNatCh'])->name('audit-publishing-nat-ch');

    // ** show form publishing nationale ch ** //
    Route::get('show-publishing-nat-ch', [PublishingController::class, 'showNatCh'])->name('show-publishing-nat-ch');


    // ** confirm deadline form publishing rmp ** //
    Route::get('/publishing-rmp-confirm', [PublishingController::class, 'createConfirmrmp'])->name('publishing-rmp-confirm');
    Route::post('confirm-rmp-formatting', [PublishingController::class, 'postConfirmrmp'])->name('confirm-rmp-ormatting');


    Route::get('/validate', [PublishingController::class, 'validation'])->name('validate');
    Route::post('/postvalidate', [PublishingController::class, 'validationStore'])->name('postvalidate');
    Route::get('/review', [PublishingController::class, 'audit'])->name('review');
    Route::post('progresspublishing', [PublishingController::class, 'setProgress'])->name('progresspublishing');
    Route::post('verify', [PublishingController::class, 'setVerify'])->name('verify');
    Route::post('deliverpublishing', [PublishingController::class, 'deliver'])->name('deliverpublishing');
    Route::get('/correctpublishing', [PublishingController::class, 'correctshow'])->name('correctpublishing');
    Route::post('tocorrectpublishing', [PublishingController::class, 'tocorrect'])->name('tocorrectpublishing');
    Route::post('closepublishing', [PublishingController::class, 'close'])->name('closepublishing');

    // ** delete files from the server  ** //
    Route::post('delete-file-pub', [PublishingController::class, 'deleteFilePub'])->name('delete-file-pub');

    Route::get('/show', [PublishingController::class, 'show'])->name('show');

    Route::get('getFormByYear', [ReportController::class, 'getFormByYear'])->name('getFormByYear');

    Route::get('allnotifications', [ReportController::class, 'allnotif']);
    Route::post('mark-all-as-read', [ReportController::class, 'markallnotifread']);
});

// ** route for getting country while select product punlishing ** //
Route::post('/getProductOrCountry', [ReportController::class, 'getProductOrCountry']);


Route::post('addproductmt', [ProductMetaController::class, 'store']);
Route::post('getProductname', [ProductMetaController::class, 'getProductname']);


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
