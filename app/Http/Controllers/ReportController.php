<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Formating;
use App\Models\Publishing;
use App\Models\PublishingMrp;
use App\Models\MetaData;
use DateTime;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Date;
use MongoDB\BSON\UTCDateTime as MongoDate;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        if ($user->current_team_id == 1) {
            $requetNumberFor = Formating::where('status', 'draft')->count();
            $requetNumberPup = Publishing::where('status', 'draft')->count();
            $requetNumberPubMrp = PublishingMrp::where('status', 'draft')->count();

            $compFor =  Formating::where('status', 'completed')->count();
            $compPub =  Publishing::where('status', 'completed')->count();
            $compPubMrp =  PublishingMrp::where('status', 'completed')->count();

            $total = $requetNumberPup + $requetNumberFor + $requetNumberPubMrp;
            $totalComp = $compFor + $compPub + $compPubMrp;

            $arr = [['status' => 'Draft', "total" => $total], ['status' => 'Completed', 'total' => $totalComp]];
        } else if ($user->current_team_id == 2) {
            $initiatedFor = Formating::where('status', 'initiated')->count();
            $verifyFor = Formating::where('status', 'to verify')->count();
            $deliveredFor = Formating::where('status', 'delivered')->count();
            $reviewFor = Formating::where('status', ' in review')->count();

            $initiatedPub = Publishing::where('status', 'initiated')->count();
            $verifyPub = Publishing::where('status', 'to verify')->count();
            $deliveredPub = Publishing::where('status', 'delivered')->count();
            $reviewPub = Publishing::where('status', ' in review')->count();

            $initiatedPubMrp = PublishingMrp::where('status', 'initiated')->count();
            $verifyPubMrp = PublishingMrp::where('status', 'to verify')->count();
            $deliveredPubMrp = PublishingMrp::where('status', 'delivered')->count();
            $reviewPubMrp = PublishingMrp::where('status', ' in review')->count();

            $totalIni = $initiatedFor + $initiatedPub + $initiatedPubMrp;
            $totalVery = $verifyFor + $verifyPub + $verifyPubMrp;
            $totalDeli = $deliveredFor + $deliveredPub + $deliveredPubMrp;
            $totalRev = $reviewFor + $reviewPub + $reviewPubMrp;

            $arr = [
                ["status" => "Initaited", "total" => $totalIni],
                ["status" => "To verify", "total" => $totalVery],
                ["status" => "Delivered", "total" => $totalDeli],
                ["status" => "In review", "total" => $totalRev]
            ];
        } else if ($user->current_team_id == 3) {
            $submittedFor = Formating::where('status', 'submitted')->count();
            $submittedPub = Publishing::where('status', 'submitted')->count();
            $submittedPubMrp = PublishingMrp::where('status', 'submitted')->count();

            $correctFor = Formating::where('status', 'to correct')->count();
            $correctPub = Publishing::where('status', 'to correct')->count();
            $correctPubMrp = PublishingMrp::where('status', 'to correct')->count();

            $progressFor = Formating::where('status', 'in progress')->count();
            $progressPub = Publishing::where('status', 'in progress')->count();
            $progressPubMrp = PublishingMrp::where('status', 'in progress')->count();

            $totalSubmi = $submittedFor + $submittedPub + $submittedPubMrp;
            $totalCorre = $correctFor + $correctPub + $correctPubMrp;
            $totalpro = $progressFor + $progressPub + $progressPubMrp;

            $arr = [
                ["status" => "Submitted", "total" => $totalSubmi],
                ["status" => "To correct", "total" => $totalCorre],
                ["status" => "In pregress", "total" => $totalpro]
            ];
        }

        $totalFormattings = Formating::count();
        $totalPublishingNat = Publishing::count();
        $totalPublishingMrp = PublishingMrp::count();
        $totalPublishings = $totalPublishingNat + $totalPublishingMrp;

        $acceformatting = Formating::where('status', 'closed')->whereNull('correction')->count();
        $accepublishing = Publishing::where('status', 'closed')->whereNull('correction')->count();
        $accepublishingmrp = PublishingMrp::where('status', 'closed')->whereNull('correction')->count();

        // $corrFormatting = Formating::where('status', 'closed')->where('correction.source', 'stg')
        //     ->groupBy('source')
        //     ->get();

        $corrFormatting = Formating::raw(function ($collection) {
            return $collection->aggregate(
                [
                    ['$unwind' => '$correction'],
                    ['$project' => ['_id' => 0,  'correction' => 1, 'Count' => 1]],
                    ['$match' => ['correction.source' => 'ekemia']],
                    ['$group' => ['_id' => '$_id', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $corrPublishing = Publishing::raw(function ($collection) {
            return $collection->aggregate(
                [
                    ['$unwind' => '$correction'],
                    ['$project' => ['_id' => 0,  'correction' => 1, 'Count' => 1]],
                    ['$match' => ['correction.source' => 'ekemia']],
                    ['$group' => ['_id' => '$_id', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $corrPublishingMrp = PublishingMrp::raw(function ($collection) {
            return $collection->aggregate(
                [
                    ['$unwind' => '$correction'],
                    ['$project' => ['_id' => 0,  'correction' => 1, 'Count' => 1]],
                    ['$match' => ['correction.source' => 'ekemia']],
                    ['$group' => ['_id' => '$_id', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $corrFormatting->isNotEmpty() ? $corrFormatting =  $corrFormatting[0]->Count :  $corrFormatting = 0;
        $corrPublishing->isNotEmpty() ? $corrPublishing =  $corrPublishing[0]->Count :  $corrPublishing = 0;
        $corrPublishingMrp->isNotEmpty() ? $corrPublishingMrp =  $corrPublishingMrp[0]->Count :  $corrPublishingMrp = 0;

        $upFormatting = Formating::raw(function ($collection) {
            return $collection->aggregate(
                [
                    ['$unwind' => '$correction'],
                    ['$project' => ['_id' => 0,  'correction' => 1, 'Count' => 1]],
                    ['$match' => ['correction.source' => 'stg']],
                    ['$group' => ['_id' => '$_id', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $upPublishing = Publishing::raw(function ($collection) {
            return $collection->aggregate(
                [
                    ['$unwind' => '$correction'],
                    ['$project' => ['_id' => 0,  'correction' => 1, 'Count' => 1]],
                    ['$match' => ['correction.source' => 'stg']],
                    ['$group' => ['_id' => '$_id', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $upPublishingMrp = PublishingMrp::raw(function ($collection) {
            return $collection->aggregate(
                [
                    ['$unwind' => '$correction'],
                    ['$project' => ['_id' => 0,  'correction' => 1, 'Count' => 1]],
                    ['$match' => ['correction.source' => 'stg']],
                    ['$group' => ['_id' => '$_id', 'Count' => ['$sum' => 1]]],
                ]
            );
        });


        $upFormatting->isNotEmpty() ? $upFormatting =  $upFormatting[0]->Count :  $upFormatting = 0;
        $upPublishing->isNotEmpty() ? $upPublishing =  $upPublishing[0]->Count :  $upPublishing = 0;
        $upPublishingMrp->isNotEmpty() ? $upPublishingMrp =  $upPublishingMrp[0]->Count :  $upPublishingMrp = 0;

        $acceptance = $acceformatting + $accepublishing + $accepublishingmrp;
        $correction = $corrFormatting +  $corrPublishing + $corrPublishingMrp;
        $update = $upFormatting + $upPublishing + $upPublishingMrp;


        $requestperMonthFor = Formating::raw(function ($collection) {;

            return $collection->aggregate([
                [
                    '$match' => [
                        'created_at' =>
                        [
                            '$gt' =>  new MongoDate(new DateTime("2023-1-1")),
                            '$lt' => new MongoDate(new DateTime("2023-12-31")),
                        ]
                    ]
                ],
                [
                    '$group' => [
                        "_id" => ['$month' => '$created_at'],
                        'Count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });

        $requestperMonthPub = Publishing::raw(function ($collection) {;
            return $collection->aggregate([
                [
                    '$match' => [
                        'created_at' =>
                        [
                            '$gt' =>  new MongoDate(new DateTime("2023-1-1")),
                            '$lt' => new MongoDate(new DateTime("2023-12-31")),
                        ]
                    ]
                ],
                [
                    '$group' => [
                        "_id" => ['$month' => '$created_at'],
                        'Count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });

        $requestperMonthPubMrp = PublishingMrp::raw(function ($collection) {;
            return $collection->aggregate([
                [
                    '$match' => [
                        'created_at' =>
                        [
                            '$gt' =>  new MongoDate(new DateTime("2023-1-1")),
                            '$lt' => new MongoDate(new DateTime("2023-12-31")),
                        ]
                    ]
                ],
                [
                    '$group' => [
                        "_id" => ['$month' => '$created_at'],
                        'Count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });

        // dd($requestperMonthPub);

        $my_arr = [];
        $my_sec_arr = [];

        for ($i = 1; $i <= 12; $i++) {
            foreach ($requestperMonthFor as $x) {
                if ($x->_id == $i) {
                    $my_arr[$i] = $x->Count;
                    break;
                } else {
                    $my_arr[$i] = 0;
                }
            }
            foreach ($requestperMonthPub as $y) {
                if ($y->_id == $i) {
                    $my_sec_arr[$i] = $y->Count;
                    break;
                } else {
                    $my_sec_arr[$i] = 0;
                }
            }
            foreach ($requestperMonthPubMrp as $z) {
                if ($z->_id == $i) {
                    $my_sec_arr[$i] = $my_sec_arr[$i] + $z->Count;
                    break;
                } else {
                    $my_sec_arr[$i] = 0;
                }
            }
        }

        $totalFclosed = Formating::where('status', 'completed')->orWhere('status', 'closed')
            ->count();
        $totalPclosed = Publishing::where('status', 'completed')->orWhere('status', 'closed')
            ->count();
        $totalPMclosed = PublishingMrp::where('status', 'completed')->orWhere('status', 'closed')
            ->count();

        $totalclosed = $totalFclosed + $totalPclosed + $totalPMclosed;

        $f = Formating::raw(function ($collection) {;
            return $collection->aggregate([
                [
                    '$match' => [
                        'status' => ['$nin' => ['draft', 'initiated']]
                    ]
                ],
                [
                    '$group' => [
                        "_id" => ['product' => '$product_name.label', 'country' => '$country.value'],
                        'count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });
        $p = Publishing::raw(function ($collection) {;
            return $collection->aggregate([
                [
                    '$match' => [
                        'status' => ['$nin' => ['draft', 'initiated']]
                    ]
                ],
                [
                    '$group' => [
                        "_id" => ['product' => '$product_name', 'country' => '$country'],
                        'count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });
        // dd($p);

        return Inertia::render('Dashboard', [
            "RequestNumber" => $arr,
            'formattingCount' => $totalFormattings,
            'publishingCount' => $totalPublishings,
            'acceptance' => $acceptance,
            'correction' => $correction,
            'update' => $update,
            'perMonthFor' => array_values($my_arr),
            'perMonthPub' => array_values($my_sec_arr),
            'totalclosed' => $totalclosed
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        //
    }

    public function list(Request $request)
    {
        $user = auth()->user();

        if ($request->notId) {
            $user->unreadNotifications->where('id', $request->notId)->markAsRead();
        }

        if ($user->current_team_id == 1) {
            $formattings = Formating::where('status', 'initiated')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'initiated')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'closed')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'initiated')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'closed')
                ->get();
        } else if ($user->current_team_id == 2) {
            $formattings = Formating::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
        } else if ($user->current_team_id == 3) {
            $formattings = Formating::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
        }


        $allItems = $formattings->merge($publishing)->merge($publishingmrp);
        $sorted = $allItems->sortByDesc('updated_at');
        $sorted = $sorted->values()->all();

        return Inertia::render('Lab/List', [
            'allDemands' => $sorted
        ]);
    }

    public function task(Request $request)
    {
        $user = auth()->user();

        if ($request->notId) {
            $user->unreadNotifications->where('id', $request->notId)->markAsRead();
        }

        if ($user->current_team_id == 1) {
            $formattings = Formating::where('status', 'draft')
                ->orWhere('status', 'completed')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishing = Publishing::where('status', 'draft')
                ->orWhere('status', 'completed')
                ->get();

            $publishingmrp = PublishingMrp::where('status', 'draft')
                ->orWhere('status', 'completed')
                ->get();
        } else if ($user->current_team_id == 2) {

            $formattings = Formating::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishing = Publishing::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
        } else if ($user->current_team_id == 3) {
            $formattings = Formating::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->orderBy('created_at', 'desc')
                ->get();

            $publishing = Publishing::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->orderBy('created_at', 'desc')
                ->get();
        }

        $all = $publishing->merge($publishingmrp);
        $publishing = $all->sortByDesc('updated_at');
        $publishing = $publishing->values()->all();

        return Inertia::render('Lab/Task', [
            'formatting' => $formattings,
            'publishing' => $publishing
        ]);
    }


    public function getProductOrCountry(Request $request)
    {

        if ($request->product) {

            $country = MetaData::where('product', $request->product)->where('procedure', $request->procedure)
                ->get('country');
            return $country;
        } else {

            $product = MetaData::where('country', $request->country)->where('procedure', $request->procedure)
                ->get('Product');
            return $product;
        }
    }
}
