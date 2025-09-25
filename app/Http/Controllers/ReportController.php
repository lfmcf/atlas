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
// use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use MongoDB\BSON\UTCDateTime;
use Carbon\Carbon;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        if ($user->current_team_id == 1) {
            $requetNumberFor = Formating::where('status', 'draft')->where('created_by', $user->id)->count();
            $requetNumberPup = Publishing::where('status', 'draft')->where('created_by', $user->id)->count();
            $requetNumberPubMrp = PublishingMrp::where('status', 'draft')->where('created_by', $user->id)->count();

            $compFor =  Formating::where('status', 'completed')->where('created_by', $user->id)->count();
            $compPub =  Publishing::where('status', 'completed')->where('created_by', $user->id)->count();
            $compPubMrp = PublishingMrp::where('status', 'completed')->where('created_by', $user->id)->count();

            $total = $requetNumberPup + $requetNumberFor + $requetNumberPubMrp;
            $totalComp = $compFor + $compPub + $compPubMrp;

            $arr = [['status' => 'Draft', "total" => $total], ['status' => 'Completed', 'total' => $totalComp]];
        } else if ($user->current_team_id == 2) {
            $initiatedFor = Formating::where('status', 'initiated')->count();
            $verifyFor = Formating::where('status', 'to verify')->count();
            $deliveredFor = Formating::where('status', 'delivered')->count();
            // $reviewFor = Formating::where('status', ' in review')->count();
            $reviewFor = Formating::where('status', 'draft')->where('created_by', $user->id)->count();

            $initiatedPub = Publishing::where('status', 'initiated')->count();
            $verifyPub = Publishing::where('status', 'to verify')->count();
            $deliveredPub = Publishing::where('status', 'delivered')->count();
            // $reviewPub = Publishing::where('status', ' in review')->count();
            $reviewPub = Publishing::where('status', 'draft')->where('created_by', $user->id)->count();

            $initiatedPubMrp = PublishingMrp::where('status', 'initiated')->count();
            $verifyPubMrp = PublishingMrp::where('status', 'to verify')->count();
            $deliveredPubMrp = PublishingMrp::where('status', 'delivered')->count();
            // $reviewPubMrp = PublishingMrp::where('status', ' in review')->count();
            $reviewPubMrp = PublishingMrp::where('status', 'draft')->where('created_by', $user->id)->count();

            $totalIni = $initiatedFor + $initiatedPub + $initiatedPubMrp;
            $totalVery = $verifyFor + $verifyPub + $verifyPubMrp;
            $totalDeli = $deliveredFor + $deliveredPub + $deliveredPubMrp;
            $totalRev = $reviewFor + $reviewPub + $reviewPubMrp;

            $arr = [
                ["status" => "Draft", "total" => $totalRev],
                ["status" => "Delivered", "total" => $totalDeli],
                ["status" => "Initiated", "total" => $totalIni],
                ["status" => "To verify", "total" => $totalVery],
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
                ["status" => "In progress", "total" => $totalpro]
            ];
        }


        // Define the statuses we want to count
        $statuses = ['initiated', 'submitted', 'in progress', 'completed', 'to verify', 'delivered', 'to correct'];

        // Initialize an array to hold our counts
        $counts = array_fill_keys($statuses, 0);
        $countsformating = array_fill_keys($statuses, 0);

        // Get counts from Formating model
        foreach ($statuses as $status) {
            $countsformating[$status] += Formating::where('status', $status)->count();
        }

        // Get counts from Publishing model
        foreach ($statuses as $status) {
            $counts[$status] += Publishing::where('status', $status)->count();
        }

        // Get counts from PublishingMrp model
        foreach ($statuses as $status) {
            $counts[$status] += PublishingMrp::where('status', $status)->count();
        }



        if ($user->current_team_id == 1) {
            $totalFormattings = Formating::where('status', '!=', 'draft')
                ->where('created_by', $user->id)
                ->count();
            $totalPublishingNat = Publishing::where('status', '!=', 'draft')
                ->where('created_by', $user->id)
                ->count();
            $totalPublishingMrp = PublishingMrp::where('status', '!=', 'draft')
                ->where('created_by', $user->id)
                ->count();
        } else {
            $totalFormattings = Formating::where('status', '!=', 'draft')->count();
            $totalPublishingNat = Publishing::where('status', '!=', 'draft')->count();
            $totalPublishingMrp = PublishingMrp::where('status', '!=', 'draft')->count();
        }






        $totalPublishings = $totalPublishingNat + $totalPublishingMrp;

        $acceformatting = Formating::where('status', 'closed')->whereNull('correction')->count();
        $accepublishing = Publishing::where('status', 'closed')->whereNull('correction')->count();
        $accepublishingmrp = PublishingMrp::where('status', 'closed')->whereNull('correction')->count();

        $corrFormatting = Formating::where('status', 'closed')->where('correction.source', 'ekemia')
            ->where('correction.source', '!=', 'stg')
            ->count('source');

        $corrPublishing = Publishing::where('status', 'closed')->where('correction.source', 'ekemia')
            ->where('correction.source', '!=', 'stg')
            ->count('source');

        $corrPublishingMrp = PublishingMrp::where('status', 'closed')->where('correction.source', 'ekemia')
            ->where('correction.source', '!=', 'stg')
            ->count('source');


        $upFormatting = Formating::where('status', 'closed')->where('correction.source', 'stg')
            ->where('correction.source', '!=', 'ekemia')
            ->count('source');

        $upPublishing =   Publishing::where('status', 'closed')->where('correction.source', 'stg')
            ->where('correction.source', '!=', 'ekemia')
            ->count('source');

        $upPublishingMrp = PublishingMrp::where('status', 'closed')->where('correction.source', 'stg')
            ->where('correction.source', '!=', 'ekemia')
            ->count('source');

        $upandcorrFormatting = Formating::where('status', 'closed')->where('correction.source', 'stg')
            ->where('correction.source', 'ekemia')
            ->count('source');

        $upandcorrPublishing =   Publishing::where('status', 'closed')->where('correction.source', 'stg')
            ->where('correction.source', 'ekemia')
            ->count('source');

        $upandcorrPublishingMrp = PublishingMrp::where('status', 'closed')->where('correction.source', 'stg')
            ->where('correction.source', 'ekemia')
            ->count('source');

        $acceptance = $acceformatting + $accepublishing + $accepublishingmrp;
        $correction = $corrFormatting +  $corrPublishing + $corrPublishingMrp;
        $update = $upFormatting + $upPublishing + $upPublishingMrp;
        $updateandcorrection = $upandcorrFormatting + $upandcorrPublishing + $upandcorrPublishingMrp;


        $totalFclosed = Formating::where('status', 'closed')
            ->count();
        $totalPclosed = Publishing::where('status', 'closed')
            ->count();
        $totalPMclosed = PublishingMrp::where('status', 'closed')
            ->count();

        $totalclosed = $totalFclosed + $totalPclosed + $totalPMclosed;



        // get all requests with status in progress
        $inprogressFormatting = Formating::where('status', 'in progress')->get();
        $inprogressPublishing = Publishing::where('status', 'in progress')->get();
        $inprogressPublishingMrp = PublishingMrp::where('status', 'in progress')->get();
        $inprogress = $inprogressPublishing->merge($inprogressPublishingMrp)->merge($inprogressFormatting);

        return Inertia::render('Dashboard', [
            "RequestNumber" => $arr,
            'formattingCount' => $totalFormattings,
            'publishingCount' => $totalPublishings,
            'acceptance' => $acceptance,
            'correction' => $correction,
            'update' => $update,
            'updateandcorrection' => $updateandcorrection,
            'totalclosed' => $totalclosed,

            'inprogress' => $inprogress,
            'countsformating' => $countsformating,
            'countspublishing' => $counts,

        ]);
    }

    public function list(Request $request)
    {
        $user = auth()->user();

        if ($request->notId) {
            $user->unreadNotifications->where('id', $request->notId)->markAsRead();
        }

        if ($user->current_team_id == 1) {
            $formattings = Formating::where(function ($query) {
                $query->where('status', 'initiated')
                    ->orWhere('status', 'in progress')
                    ->orWhere('status', 'submitted')
                    ->orWhere('status', 'delivered')
                    ->orWhere('status', 'to verify')
                    ->orWhere('status', 'to correct')
                    ->orWhere('status', 'accepted')
                    ->orWhere('status', 'Correction Required')
                    ->orWhere('status', 'closed');
            })
                ->where('created_by', $user->id)
                ->get();
            $publishing = Publishing::where(function ($query) {
                $query->where('status', 'initiated')
                    ->orWhere('status', 'in progress')
                    ->orWhere('status', 'submitted')
                    ->orWhere('status', 'delivered')
                    ->orWhere('status', 'to verify')
                    ->orWhere('status', 'to correct')
                    ->orWhere('status', 'accepted')
                    ->orWhere('status', 'Correction Required')
                    ->orWhere('status', 'closed');
            })
                ->where('created_by', $user->id)
                ->get();
            $publishingmrp = PublishingMrp::where(function ($query) {
                $query->where('status', 'initiated')
                    ->orWhere('status', 'in progress')
                    ->orWhere('status', 'submitted')
                    ->orWhere('status', 'delivered')
                    ->orWhere('status', 'to verify')
                    ->orWhere('status', 'to correct')
                    ->orWhere('status', 'accepted')
                    ->orWhere('status', 'Correction Required')
                    ->orWhere('status', 'closed');
            })
                ->where('created_by', $user->id)
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

            $formattings = Formating::where(function ($query) {
                $query->where('status', 'draft')
                    ->orWhere('status', 'completed');
            })
                ->where('created_by', $user->id)
                ->get();

            $publishing = Publishing::where(function ($query) use ($user) {
                $query->where('status', 'draft')
                    ->orWhere('status', 'completed');
            })
                ->where('created_by', $user->id)
                ->get();

            $publishingmrp = PublishingMrp::where(function ($query) use ($user) {
                $query->where('status', 'draft')
                    ->orWhere('status', 'completed');
            })
                ->where('created_by', $user->id)
                ->get();
        } else if ($user->current_team_id == 2) {
            $formattings = Formating::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'accepted')
                ->orWhere('status', 'Correction Required')
                ->orderBy('created_at', 'desc')
                ->get();

            $publishing = Publishing::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'accepted')
                ->orWhere('status', 'Correction Required')
                ->orderBy('created_at', 'desc')
                ->get();

            $publishingmrp = PublishingMrp::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'accepted')
                ->orWhere('status', 'Correction Required')
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

            $country = MetaData::where('invented_name', $request->product)->where('procedure', $request->procedure)
                ->get('country');


            return $country;
        } else {

            $product = MetaData::where('country', $request->country)->where('procedure', $request->procedure)
                ->get('invented_name');

            return $product;
        }
    }

    public function allnotif()
    {
        return Inertia::render('Lab/AllNotif');
    }

    public function markallnotifread()
    {
        $user = auth()->user();
        // $user = User::find(1);
        $user->unreadNotifications()->update(['read_at' => now()]);
        return response('done', 200);
    }

    public function getRequestPerType(Request $request)
    {
        $selectedYear = $request->selecedYear;
        $status = $request->status;

        $tpt = Formating::raw(function ($collection) use ($selectedYear, $status) {

            return $collection->aggregate(
                [
                    [
                        '$match' => [
                            'status' => $status,
                            '$expr' => [
                                '$eq' => [
                                    ['$year' => '$created_at'],
                                    (int)$selectedYear
                                ],
                            ],
                        ]
                    ],
                    ['$group' => ['_id' => '$dossier_type.value', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $tptp = Publishing::raw(function ($collection) use ($selectedYear, $status) {


            return $collection->aggregate(
                [
                    [
                        '$match' => [
                            'status' => $status,
                            '$expr' => [
                                '$eq' => [
                                    ['$year' => '$created_at'],
                                    (int)$selectedYear
                                ],
                            ],
                        ]
                    ],
                    ['$group' => ['_id' => '$dossier_type.value', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $tptpm = PublishingMrp::raw(function ($collection) use ($selectedYear, $status) {
            return $collection->aggregate(
                [
                    [
                        '$match' => [
                            'status' => $status,
                            '$expr' => [
                                '$eq' => [
                                    ['$year' => '$created_at'],
                                    (int)$selectedYear
                                ],
                            ],
                        ]
                    ],
                    ['$group' => ['_id' => '$dossier_type.value', 'Count' => ['$sum' => 1]]],
                ]
            );
        });

        $merge = $tptp->mergeRecursive($tptpm);

        $total_per_type_p = [];
        $new = [];

        foreach ($merge as $m) {
            if (!isset($new[$m['_id']])) {
                $t = 0;
            } else {
                $t = $m['Count'];
            }
            $new[$m['_id']]['id'] = $m['_id'];
            $new[$m['_id']]['qnt'] = $t + $m['Count'];
        }

        foreach ($new as $n) {
            $total_per_type_p['cat'][] = $n['id'];
            $total_per_type_p['data'][] = $n['qnt'];
        }

        $total_per_type = [];
        if ($tpt) {
            foreach ($tpt as $t) {
                $total_per_type['cat'][] = $t->_id;
                $total_per_type['data'][] = $t->Count;
            }
        }

        return response()->json(['formattingRT' => $total_per_type, 'publishingRT' => $total_per_type_p]);
    }

    public function getRequestsPerMonth(Request $request)
    {
        $selectedYear = $request->selecedYear;

        $requestperMonthFor = Formating::raw(function ($collection) use ($selectedYear) {

            return $collection->aggregate([
                [
                    '$match' => [

                        '$expr' => [
                            '$eq' => [
                                ['$year' => '$created_at'],
                                (int)$selectedYear
                            ],
                        ],
                        'status' => 'submitted'
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

        $requestperMonthPub = Publishing::raw(function ($collection) use ($selectedYear) {
            return $collection->aggregate([
                [
                    '$match' => [

                        '$expr' => [
                            '$eq' => [
                                ['$year' => '$created_at'],
                                (int)$selectedYear
                            ],
                        ],
                        // 'status' => ['$not' => ['$eq' => 'draft']]
                        'status' => 'submitted'
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

        $requestperMonthPubMrp = PublishingMrp::raw(function ($collection) use ($selectedYear) {
            return $collection->aggregate([
                [
                    '$match' => [

                        '$expr' => [
                            '$eq' => [
                                ['$year' => '$created_at'],
                                (int)$selectedYear
                            ],
                        ],
                        // 'status' => ['$not' => ['$eq' => 'draft']]
                        'status' => 'submitted'
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

        $my_arr = [];
        $my_sec_arr = [];

        // Iterate over the results and organize counts into an array of months
        foreach ($requestperMonthFor as $record) {
            $month = Carbon::createFromDate(null, $record['_id'], null)->format('m');
            $my_arr[$month] = $record['Count'];
        }

        foreach ($requestperMonthPub as $record) {
            $month = Carbon::createFromDate(null, $record['_id'], null)->format('m');
            $my_sec_arr[$month] = $record['Count'];
        }

        foreach ($requestperMonthPubMrp as $record) {
            $month = Carbon::createFromDate(null, $record['_id'], null)->format('m');
            $my_sec_arr[$month] = $record['Count'] + $my_sec_arr[$month];
        }

        // Fill in missing months with zero counts
        for ($i = 1; $i <= 12; $i++) {
            $monthName = Carbon::createFromDate(null, $i, null)->format('m');
            if (!isset($my_arr[$monthName])) {
                $my_arr[$monthName] = 0;
            }

            if (!isset($my_sec_arr[$monthName])) {
                $my_sec_arr[$monthName] = 0;
            }
        }

        ksort($my_arr);
        ksort($my_sec_arr);

        return response()->json(['formattingReq' => array_values($my_arr), 'publishingReq' => array_values($my_sec_arr)]);
    }

    public function requestPerCountry(Request $request)
    {

        $startIso = new UTCDateTime(Carbon::parse($request->from)->startOfDay()->getTimestampMs());
        $endIso = new UTCDateTime(Carbon::parse($request->to)->endOfDay()->getTimestampMs());
        $f = Formating::raw(function ($collection) use ($startIso, $endIso) {
            return $collection->aggregate([
                [
                    '$match' => [
                        'status' => 'submitted',
                        'created_at' => [
                            '$gte' => $startIso,
                            '$lte' => $endIso
                        ]
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
        $p = Publishing::raw(function ($collection) use ($startIso, $endIso) {
            return $collection->aggregate([
                [
                    '$match' => [
                        // 'status' => ['$nin' => ['draft', 'initiated']]
                        'status' => 'submitted',
                        'created_at' => [
                            '$gte' => $startIso,
                            '$lte' => $endIso
                        ]
                    ]
                ],
                [
                    '$group' => [
                        "_id" => ['product' => '$product_name', 'country' => '$country.value'],
                        'count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });

        $pm = PublishingMrp::raw(function ($collection) use ($startIso, $endIso) {
            return $collection->aggregate([
                [
                    '$match' => [
                        // 'status' => ['$nin' => ['draft', 'initiated']]
                        'status' => 'submitted',
                        'created_at' => [
                            '$gte' => $startIso,
                            '$lte' => $endIso
                        ]
                    ]
                ],
                // ['$unwind' => '$mt'],
                [
                    '$group' => [
                        "_id" => ['product' => '$product_name'],
                        'count' => ['$sum' => 1]
                    ]
                ],

            ]);
        });

        $myfarr = [];
        foreach ($f as $key => $value) {
            $myfarr[$key]['count'] = $value->count;
            $myfarr[$key]['product'] = $value->_id['product'];
            $myfarr[$key]['country'] = $value->_id['country'] ?? '';
        }

        $myparr = [];
        foreach ($p as $key => $value) {
            $myparr[$key]['count'] = $value->count;
            $myparr[$key]['product'] = $value->_id['product'];
            $myparr[$key]['country'] = $value->_id['country'];
        }

        $mypmarr = [];

        foreach ($pm as $key => $value) {
            $mypmarr[$key]['count'] = $value->count;
            $mypmarr[$key]['product'] = $value->_id['product'];
            $mypmarr[$key]['country'] = "EU";
        }

        $myparr = array_merge($myparr, $mypmarr);

        $myarr = [];

        foreach ($myfarr as $ke => $value) {
            foreach ($myparr as $k => $v) {
                $name = strtok($value['product'], " ");
                $name = rtrim($name, ',');
                $fname = strtok($v['product'], " ");
                if ($name == $fname && $value['country'] === $v['country']) {
                    array_push($myarr, ['pr' => $name, 'cnt' => $value['country'], 'formatting' => $value['count'], 'publishing' => $v['count']]);
                    unset($myfarr[$ke]);
                    unset($myparr[$k]);
                }
            }
        }

        foreach ($myfarr as $key => $value) {
            $name = strtok($value['product'], " ");
            $name = rtrim($name, ',');
            array_push($myarr, ['pr' => $name, 'cnt' => $value['country'], 'formatting' => $value['count'], 'publishing' => 0]);
        }

        foreach ($myparr as $k => $v) {
            $name = strtok($v['product'], " ");
            $name = rtrim($name, ',');
            array_push($myarr, ['pr' => $name, 'cnt' => $v['country'], 'formatting' => 0, 'publishing' => $v['count']]);
        }

        return response()->json(['productCountry' => $myarr, 'start' => $startIso, 'end' => $endIso]);
    }
}
