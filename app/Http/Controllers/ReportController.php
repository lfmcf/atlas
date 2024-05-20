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
            $requetNumberFor = Formating::where('status', 'draft')->where('created_by', $user->id)->count();
            $requetNumberPup = Publishing::where('status', 'draft')->where('created_by', $user->id)->count();
            $requetNumberPubMrp = PublishingMrp::where('status', 'draft')->where('created_by', $user->id)->count();

            $compFor =  Formating::where('status', 'completed')->count();
            $compPub =  Publishing::where('status', 'completed')->count();
            $compPubMrp = PublishingMrp::where('status', 'completed')->count();

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

        $totalFormattings = Formating::where('status', '!=', 'draft')->count();
        $totalPublishingNat = Publishing::where('status', '!=', 'draft')->count();
        $totalPublishingMrp = PublishingMrp::where('status', '!=', 'draft')->count();

        $totalPublishings = $totalPublishingNat + $totalPublishingMrp;

        $acceformatting = Formating::where('status', 'closed')->whereNull('correction')->count();
        $accepublishing = Publishing::where('status', 'closed')->whereNull('correction')->count();
        $accepublishingmrp = PublishingMrp::where('status', 'closed')->whereNull('correction')->count();

        $corrFormatting = Formating::where('status', 'closed')->where('correction.source', 'ekemia')
            ->count('source');

        $corrPublishing = Publishing::where('status', 'closed')->where('correction.source', 'ekemia')
            ->count('source');

        $corrPublishingMrp = PublishingMrp::where('status', 'closed')->where('correction.source', 'ekemia')
            ->count('source');


        $upFormatting = Formating::where('status', 'closed')->where('correction.source', 'stg')
            ->count('source');

        $upPublishing =   Publishing::where('status', 'closed')->where('correction.source', 'stg')
            ->count('source');

        $upPublishingMrp = PublishingMrp::where('status', 'closed')->where('correction.source', 'stg')
            ->count('source');

        $acceptance = $acceformatting + $accepublishing + $accepublishingmrp;
        $correction = $corrFormatting +  $corrPublishing + $corrPublishingMrp;
        $update = $upFormatting + $upPublishing + $upPublishingMrp;

        $totalFclosed = Formating::where('status', 'completed')->orWhere('status', 'closed')
            ->count();
        $totalPclosed = Publishing::where('status', 'completed')->orWhere('status', 'closed')
            ->count();
        $totalPMclosed = PublishingMrp::where('status', 'completed')->orWhere('status', 'closed')
            ->count();

        $totalclosed = $totalFclosed + $totalPclosed + $totalPMclosed;

        $f = Formating::raw(function ($collection) {
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
        $p = Publishing::raw(function ($collection) {
            return $collection->aggregate([
                [
                    '$match' => [
                        'status' => ['$nin' => ['draft', 'initiated']]
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

        // dd($p);
        $pm = PublishingMrp::raw(function ($collection) {
            return $collection->aggregate([
                [
                    '$match' => [
                        'status' => ['$nin' => ['draft', 'initiated']]
                    ]
                ],
                ['$unwind' => '$mt'],
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
            $myfarr[$key]['country'] = $value->_id['country'];
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
            'totalclosed' => $totalclosed,
            'productCountry' => $myarr,
            'inprogress' => $inprogress,
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
            $formattings = Formating::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'completed')
                ->orderBy('created_at', 'desc')
                ->get();
            // $formattings = Formating::where('status', 'draft')
            //     ->where('created_by', $user->id)
            //     ->orWhere('status', 'completed')
            //     ->orderBy('created_at', 'desc')
            //     ->get();

            $publishing = Publishing::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'completed')
                ->get();
            // $publishing = Publishing::where('status', 'draft')
            //     ->where('created_by', $user->id)
            //     ->orWhere('status', 'completed')
            //     ->get();
            $publishingmrp = PublishingMrp::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'completed')
                ->get();
            // $publishingmrp = PublishingMrp::where('status', 'draft')
            //     ->where('created_by', $user->id)
            //     ->orWhere('status', 'completed')
            //     ->get();
        } else if ($user->current_team_id == 2) {
            $formattings = Formating::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            // $formattings = Formating::where('status', 'initiated')
            //     ->orWhere('status', 'draft')
            //     ->where('created_by', $user->id)
            //     ->orWhere('status', 'to verify')
            //     ->orWhere('status', 'delivered')
            //     ->orderBy('created_at', 'desc')
            //     ->get();
            $publishing = Publishing::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            // $publishing = Publishing::where('status', 'initiated')
            //     ->orWhere('status', 'draft')
            //     ->where('created_by', $user->id)
            //     ->orWhere('status', 'to verify')
            //     ->orWhere('status', 'delivered')
            //     ->orderBy('created_at', 'desc')
            //     ->get();
            $publishingmrp = PublishingMrp::where(function ($query) use ($user) {
                $query->where('status', 'draft')->where('created_by', $user->id);
            })
                ->orWhere('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            // $publishingmrp = PublishingMrp::where('status', 'initiated')
            //     ->where('created_by', $user->id)
            //     ->orWhere('status', 'draft')
            //     ->orWhere('status', 'to verify')
            //     ->orWhere('status', 'delivered')
            //     ->orderBy('created_at', 'desc')
            //     ->get();
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

    // public function getFormByYear(Request $request)
    // {
    //     $year = $request->year;
    //     $datey = date('Y', strtotime($year));
    //     $stdate = new DateTime($datey . "-1-1");
    //     $endate = new DateTime($datey . "-12-31");

    //     $requestperMonthFor = Formating::raw(function ($collection) use ($stdate, $endate) {;

    //         return $collection->aggregate([
    //             [
    //                 '$match' => [
    //                     'created_at' =>
    //                     [
    //                         '$gt' =>  new MongoDate($stdate),
    //                         '$lt' => new MongoDate($endate),
    //                     ]
    //                 ]
    //             ],
    //             [
    //                 '$group' => [
    //                     "_id" => ['$month' => '$created_at'],
    //                     'Count' => ['$sum' => 1]
    //                 ]
    //             ],

    //         ]);
    //     });

    //     $requestperMonthPub = Publishing::raw(function ($collection) use ($stdate, $endate) {;
    //         return $collection->aggregate([
    //             [
    //                 '$match' => [
    //                     'created_at' =>
    //                     [
    //                         '$gt' =>  new MongoDate($stdate),
    //                         '$lt' => new MongoDate($endate),
    //                     ]
    //                 ]
    //             ],
    //             [
    //                 '$group' => [
    //                     "_id" => ['$month' => '$created_at'],
    //                     'Count' => ['$sum' => 1]
    //                 ]
    //             ],

    //         ]);
    //     });

    //     $requestperMonthPubMrp = PublishingMrp::raw(function ($collection) use ($stdate, $endate) {;
    //         return $collection->aggregate([
    //             [
    //                 '$match' => [
    //                     'created_at' =>
    //                     [
    //                         '$gt' =>  new MongoDate($stdate),
    //                         '$lt' => new MongoDate($endate),
    //                     ]
    //                 ]
    //             ],
    //             [
    //                 '$group' => [
    //                     "_id" => ['$month' => '$created_at'],
    //                     'Count' => ['$sum' => 1]
    //                 ]
    //             ],

    //         ]);
    //     });

    //     $my_arr = [];
    //     $my_sec_arr = [];

    //     for ($i = 1; $i <= 12; $i++) {
    //         foreach ($requestperMonthFor as $x) {
    //             if ($x->_id == $i) {
    //                 $my_arr[$i] = $x->Count;
    //                 break;
    //             } else {
    //                 $my_arr[$i] = 0;
    //             }
    //         }
    //         foreach ($requestperMonthPub as $y) {
    //             if ($y->_id == $i) {
    //                 $my_sec_arr[$i] = $y->Count;
    //                 break;
    //             } else {
    //                 $my_sec_arr[$i] = 0;
    //             }
    //         }
    //         foreach ($requestperMonthPubMrp as $z) {
    //             if ($z->_id == $i) {

    //                 $my_sec_arr[$i] = $my_sec_arr[$i] + $z->Count;
    //                 break;
    //             } else {
    //                 $my_sec_arr[$i] = 0;
    //             }
    //         }
    //     }

    //     return response()->json(['perMonthFor' => array_values($my_arr), 'perMonthPub' => array_values($my_sec_arr)]);
    // }

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

        $tpt = Formating::raw(function ($collection) use ($selectedYear) {

            return $collection->aggregate(
                [
                    [
                        '$match' => [
                            'status' => 'closed',
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

        $tptp = Publishing::raw(function ($collection) use ($selectedYear) {


            return $collection->aggregate(
                [
                    [
                        '$match' => [
                            'status' => 'closed',
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

        $tptpm = PublishingMrp::raw(function ($collection) use ($selectedYear) {
            return $collection->aggregate(
                [
                    [
                        '$match' => [
                            'status' => 'closed',
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
                        'status' => ['$not' => ['$eq' => 'draft']]
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
                        'status' => ['$not' => ['$eq' => 'draft']]
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
}
