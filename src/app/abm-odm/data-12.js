var data11 = `
10000
00 | 0,2,0,1,0,1,3,2,0,1,3,2,0,2,3,1,0,1,0,2,0,3,0,2,0,2,0,2,3,0,1 | 0,382,657,963,1124,1672,1846,2260,2718,3111,3241,3688,4190,4303,4673,4999,5056,5679,6343,6605,6682,6999,7266,7466,7696,7850,7941,8055,8313,8995,9647
01 | 0,2,0,2,3,2,3,0,1,3,2,1,0,2,0,1,0,1,0,1,0,2,0,2,0,2,3 | 0,493,795,924,1077,1697,1951,2167,2786,2973,4173,4668,4745,5153,5430,5675,5955,6580,6651,6729,7239,7309,7440,7515,8653,8721,9456
02 | 0,1,3,1,3,2,0,1,3,2,3,2,0,1,0,1,3,2,0,1,0,2,0,1,0,1 | 0,931,1218,1779,2140,2290,2536,2758,3033,4370,4683,5357,5635,5774,6139,6404,6686,7321,7967,8684,8801,9163,9472,9729,9852,9949
03 | 0,1,3,2,0,2,3,2,0,2,3,2,3,2,0,2,0,1,0,1,2,3,1 | 0,713,1303,1637,2084,2656,2740,3061,3465,3562,4041,5370,5471,6231,6499,6569,7024,7699,7924,8145,8588,8852,9415
04 | 0,2,0,1,0,2,3,2,3,2,0,2,0,1,0,1,0,2,0,2,0,2,0,2,3,2,0,2,0,2,0,2,3 | 0,72,141,765,1000,1589,1916,2126,2188,3342,3592,3718,4529,4783,5292,5414,5822,6186,6325,6389,6477,7504,7665,7898,8028,8338,8827,8904,9010,9233,9458,9574,9977
05 | 0,1,0,2,0,2,0,2,0,2,3,1,0,1,3,2,3,2,3,2,3,2,0,2,0,1,0,1,3,2,0,3,2,3,2 | 0,282,617,757,1095,1152,1344,1436,1535,1660,2031,2271,2669,2738,2998,3531,3735,3974,4183,4454,4559,4962,5162,5267,5340,5687,6091,6158,6702,6908,7142,8332,8512,8786,9299
06 | 0,1,3,2,3,2,0,1,0,1,3,0,3,2,3,2,3,2,0,2,0,2,3,2,3,2,3,2,3,2,0 | 0,720,1729,2625,2701,2768,2914,3225,3331,3418,3562,4361,4877,5048,5204,5327,5730,5974,6179,6280,6407,6500,6697,7171,7328,7848,8181,8683,9055,9287,9674
07 | 0,2,1,0,1,0,2,3,1,3,2,3,1,0,1,0,2,0,2,3,2,3,0,1,0,2,0,1,3,2,0 | 0,147,728,957,1260,1511,1773,1997,2239,2521,2921,3515,3690,3763,3858,3979,4266,4847,5312,5993,6619,7089,7306,7469,7817,7938,8452,8640,8880,9801,9932
08 | 0,1,0,1,3,2,0,2,0,2,0,3,2,0,1,0,2,0,2,0,1,0,1,3,2,0,1,0,2,0 | 0,593,787,868,1001,1167,1270,1360,1424,1930,2174,2604,2682,2979,3400,3733,4250,4933,5014,5313,6180,6939,7719,7844,8510,8688,9250,9702,9859,9942
09 | 0,1,3,0,1,0,3,2,0,2,0,2,0,2,0,1,0,2,0,2 | 0,384,794,1699,1944,2851,3062,4081,4430,5288,5356,5431,5502,5974,6652,7873,8721,9070,9175,9740
10 | 0,2,0,1,0,1,0,1,0,3,2,0,1,0,1,3,2,3,2,0,2,3,2,3,2,3 | 0,93,337,700,812,1253,1325,2269,2340,2554,3515,3740,4200,4455,4633,4869,5245,5520,6376,6528,6877,7435,7924,8569,9421,9523
11 | 0,1,0,1,0,2,3,2,0,2,0,1,3,2,0,2,3,1,0,2,0,1,3,2,0,2,1,0 | 0,70,438,1301,1501,1633,1801,2500,3205,3313,3566,4312,4503,5763,6064,6131,6625,6846,7181,7314,7393,8104,8612,9004,9177,9374,9758,9832
12 | 0,2,0,1,0,1,0,1,0,1,0,3,0,2,0,2,0,2,3,2,0,1,0,2,0,1,3,2,0,2,3,2 | 0,98,175,525,591,1254,1315,1751,2031,2101,2429,2650,2909,3062,3201,3755,4369,4449,4906,5032,5233,5586,5802,6054,6899,7503,7700,8664,9200,9376,9549,9949
13 | 0,2,0,2,1,3,2,0,2,0,1,0,1,3,2,3,2,1,0,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,1,0,2,3 | 0,201,660,748,1302,1436,1717,1966,2303,2659,2882,3278,3377,3826,4044,4397,4538,4885,5086,5210,5340,5488,5587,5785,6144,6496,6562,6659,6732,7873,8004,8132,8201,8262,8364,8900,8994,9660,9982
14 | 0,3,0,2,3,2,0,1,3,0,1,0,1,0,2,0,2,0,2,0,1,0,1,2,1,3,2,3,2,3,2,0,2,3,2,3,2 | 0,275,1048,1169,1438,1660,1909,2311,2445,2746,3087,3158,4065,4139,4483,4545,4605,4879,4949,5053,5272,5356,5411,5946,6514,7259,7569,7899,8049,8608,8745,9016,9097,9274,9362,9671,9809
15 | 0,1,3,1,0,1,3,1,3,2,0,2,3,2,3,0,2,3,2,3,2,3,0,3,0,2,0 | 0,106,347,836,1146,1344,1644,2297,2558,2797,3145,3497,3763,3859,4464,5673,5823,6008,6446,6772,7381,7971,8243,8506,8727,8846,8931
16 | 0,2,0,2,0,2,0,2,0,2,0,2,0,1,3,2,0,2,3,1,3,1,3,2,0,2,3,0 | 0,519,988,1539,1593,2048,2201,2947,3038,4133,4262,4385,4889,5106,5598,6008,6613,6680,6981,7132,7249,7910,8178,8629,9063,9130,9233,9726
17 | 0,1,3,2,3,0,1,0,1,0,1,3,0,2,0,2,0,2,3,0,3,2,3,2,0,2,0,2,0,2,0,2,0,2,0,1,3,0 | 0,295,866,1018,1107,1371,1518,1637,1742,1970,2275,2582,3421,3750,3902,3985,4161,4559,4895,5170,5376,5475,5750,5863,6150,6524,6715,6790,7325,7422,7492,7624,7701,7839,8275,8717,8989,9708
18 | 0,1,3,2,0,2,1,0,2,0,2,0,1,0,1,0,2,3,2,0,1,0,1,0,2,0 | 0,450,637,1176,1941,2136,2565,2832,2892,2959,3815,3918,4162,4235,5117,5189,5564,5851,7306,8094,8473,8595,8942,8998,9588,9649
19 | 0,2,0,3,0,2,0,2,0,3,2,0,1,0,2,3,0,1,3,2,3,2,0,2,0,2,0,1 | 0,251,372,715,1003,1162,1351,1492,2094,2357,3605,3932,4616,4968,5256,5556,6097,6555,6659,7770,8158,8380,8581,9181,9274,9488,9743,9833
20 | 0,1,3,0,2,3,2,3,1,3,2,3,2,3,1,3,0,2,0,1,3,2,3,1,3,0,2,3,2,3,2,0 | 0,467,1052,1283,1351,2316,2701,2790,3021,3417,3626,3683,3820,3912,4426,4532,5225,5552,5862,6220,6338,6702,6817,7032,7224,7949,8334,9045,9318,9526,9769,9973
21 | 0,3,2,3,2,0,2,0,2,0,2,3,2,0,2,3,1,0,2,0,2,3,2,3,2,0,2,0,2,0 | 0,352,854,1150,1805,2314,2531,2610,2971,3513,3767,4197,4533,4875,5388,5643,6160,6462,6576,6983,7413,8045,8246,8957,9346,9544,9605,9716,9830,9919
22 | 0,2,0,2,0,1,3,2,0,1,3,2,3,0,1,0,1,0,2,0,2,0,2,0,2,0,1,0,2,1,3 | 0,214,332,565,657,821,1373,2331,2587,2955,3239,3442,3730,4271,4810,4978,5116,5209,6306,6641,6728,6804,8030,8100,8210,8308,8797,8892,9225,9451,9860
23 | 0,2,0,1,0,1,0,2,0,2,3,2,0,2,0,2,0,2,0,2,0,3,2,3,2,0,2,0,2,0,2,1 | 0,299,517,806,981,1651,1751,1925,2036,2137,2452,2766,2931,2987,3094,3163,3248,3354,3896,3993,4428,5220,6655,7124,7786,8362,8443,8595,9287,9527,9652,9980
24 | 0,2,0,2,0,1,0,2,0,1,0,1,0,2,0,1,0,1,0,1,3,2,0,2,0,2,3,2,3,2,0,2,0,2,3,2 | 0,207,579,862,1157,1285,1465,2295,2458,2670,2929,3416,3519,4605,4719,5065,5180,5308,5363,5505,5824,6016,6133,6612,6688,6774,7027,8491,8588,8648,8913,8991,9052,9190,9661,9945
25 | 0,3,2,0,1,3,2,3,2,0,1,0,1,0,2,0,1,0,2,3,2,3,2,0,2,0,2,0,1,3,2,0 | 0,690,782,991,1609,2057,2517,2667,2891,3373,3512,3658,3750,3920,4030,4918,5166,5248,6258,6417,6892,7267,8008,8258,8454,8519,8580,8968,9285,9455,9584,9803
26 | 0,2,0,2,0,1,3,1,3,0,1,0,1,0,1,3,2,0,2,0,1,0,1,3,2,3,2,3 | 0,241,364,663,720,1549,1792,2710,2815,3523,3779,3854,5884,5974,6124,6341,6539,6762,6981,7047,8032,8106,8326,8965,9220,9629,9863,9931
27 | 0,2,0,3,1,3,2,0,2,0,2,0,2,0,2,0,2,0,1,0,2,0,1,0,2,0,2,0,2,0,2,0 | 0,221,710,1070,1876,2528,2870,3012,3163,3307,3533,3731,3804,4229,4364,4574,4671,5059,5322,5426,5831,5945,6547,6910,7676,8167,8234,8324,8427,9093,9268,9492
28 | 0,2,0,2,0,2,0,2,3,2,3,2,3,2,1,0,2,1,0,3,0,1,0,1,0,2,0,2,0,2 | 0,99,259,547,873,969,1180,1262,1962,2207,3040,3731,4009,4138,4460,4809,5771,6209,6450,7260,7744,8016,8073,8233,8343,8653,9495,9645,9753,9824
29 | 0,1,3,2,3,0,2,0,1,0,2,0,2,0,1,3,2,3,0,2,3,0,1,0,2,3,1 | 0,259,767,1009,1377,2324,2961,3032,3847,4052,4407,4496,4619,4820,5155,5293,6737,6803,7064,7301,7634,8676,9033,9213,9408,9724,9971
30 | 0,1,0,1,3,2,0,2,0,1,3,0,1,3,2,0,2,0,2,3,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0 | 0,216,417,534,659,1111,1229,1313,1416,1941,2065,2906,3196,3816,4358,4852,5111,5529,5620,6014,6237,6385,6735,6808,7033,7779,7850,8149,8270,8363,8426,9344,9538,9703,9851
31 | 0,1,0,1,0,1,3,2,0,1,0,1,3,2,3,2,3,2,0,2,0,1,0,1,0,2,0,1,0,1,0,1,0,1,0,1,0,1 | 0,225,577,678,771,858,1095,1657,2033,2130,2277,2356,2654,3156,4059,4234,4590,6261,6392,6884,7031,7176,7458,7792,7883,8038,8115,8259,8477,8616,8711,8864,9050,9286,9362,9429,9495,9667
32 | 1,0,1,0,2,0,2,0,2,3,0,1,0,1,3,2,3,0,2,0,2,0,2,0,2,3,2,0,3,2,0 | 0,335,424,1140,1275,1499,1599,2424,2710,2817,3065,3298,3384,3483,3741,4418,4692,4949,5077,5360,5426,5541,5722,5849,5922,6222,6479,7069,7951,8609,9099
33 | 1,0,1,3,2,3,2,3,1,0,1,0,1,0,2,0,2,0,1,3,2,3,0,2,3,2,3,2,3,1,3,2,0,2 | 0,81,168,371,1704,1990,2377,2673,2867,3359,3604,3681,3898,4193,4289,4610,4725,4807,5011,5167,5491,5620,6121,6186,6446,6641,7097,7484,7608,8094,8566,9046,9173,9335
34 | 1,3,2,3,2,0,2,3,2,3,2,0,2,0,2,0,1,0,1,3,2,0,3,2,3,2,0,1,3,2 | 0,349,783,878,1021,1633,1941,2393,2976,3037,3253,3841,3914,3992,4203,4518,4857,5100,5658,5799,6541,6885,7188,7477,7559,7931,8748,9020,9226,9387
35 | 1,0,1,3,2,0,3,2,3,1,3,2,0,2,3,0,3,2,3,0,1,0,1 | 0,170,244,1395,1635,1867,2084,2326,2615,3880,4025,4747,5032,5276,5774,6610,7427,7698,7849,8364,9276,9390,9682
36 | 1,0,1,0,1,3,2,0,2,0,1,2,1,3,2,0,1,0,2,0,2,0,2,0,2,3,2 | 0,359,417,900,1632,2093,2444,2693,2843,2924,3300,3919,4104,4568,6670,7177,7494,7552,8013,8076,8169,8275,8662,8781,8895,9518,9597
37 | 1,3,2,0,2,3,2,0,1,0,2,0,1,0,1,0,1,0,2,3,2,3,2,0,2,0,2,0,2,3,2,0 | 0,234,613,778,840,898,1395,1562,1908,2488,3252,3339,3948,4061,4109,4196,4372,5143,5268,5421,5667,5965,6653,6953,7080,7203,7308,7939,8271,8756,8817,9276
38 | 1,0,2,0,1,0,3,0,1,0,2,0,1,3,2,3,1,3,0,1,0,1,0,1,0,2,0,1,3,2 | 0,63,424,911,2076,2615,2871,3145,3430,3494,3999,4082,4688,5060,5633,6259,6655,6900,7168,7360,7758,7883,8104,8185,8422,9055,9157,9338,9468,9682
39 | 1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,0,2,3,1,3,2,0,2,0,1,0 | 0,73,366,623,978,1210,1286,1484,1541,1690,1807,1880,2037,2135,2265,2422,2664,2742,3179,3672,3907,3967,5058,5661,6691,6871,7336,7580,8107,8269,8690,9423,9572,9629
40 | 1,3,2,3,2,0,2,0,2,0,2,0,1,0,1,0,1,0,2,0,2,0,1,3,0,2,0,2,0,3,0,2,1,0,1,0 | 0,200,531,817,1297,1594,1726,2112,2278,2559,2674,2972,4092,4159,4222,4273,4386,4460,5208,5302,5701,5789,5901,6275,6572,6663,6960,7059,7232,7640,7890,7947,8548,8666,9364,9788
41 | 1,0,2,3,0,2,0,1,0,2,0,2,3,2,0,2,0,1,3,0,1,3,2,0,2,0,2,3,0,2,0,1 | 0,169,459,1260,1512,1585,1654,1980,2163,2319,2364,2462,2528,2600,2862,2941,3435,4161,4363,5477,6277,6575,6682,6888,7242,7523,8324,8680,9101,9183,9358,9643
42 | 1,3,2,0,2,0,1,0,1,0,2,3,2,3,1,0,1,0,3,2,0,2,0,2,3,2,3,2,3,1,3,2,0,2,3 | 0,90,631,969,1404,1645,2114,2216,2295,2536,2733,3013,3158,3291,3786,3936,4042,4779,4993,5381,5538,5656,6011,6136,6310,6770,6834,7209,7796,8001,8076,8466,9216,9732,9859
43 | 1,3,0,2,0,3,2,3,2,0,1,0,1,0,2,0,2,0,1,0,1,0,2,1,0,1,0,1,3 | 0,90,722,1950,2609,2883,3859,3976,4047,4305,4420,4711,4837,5075,5195,5278,5369,5436,5745,5811,6342,6635,7805,8110,8859,8987,9055,9254,9613
44 | 1,0,2,0,1,0,1,0,3,2,3,0,1,3,2,3,2,3,2,0,2,0,1,3,2,3 | 0,309,876,1029,1687,1776,1996,2069,2461,2923,3486,3701,4016,4214,4335,5015,5982,6336,6455,6981,7065,7116,8044,8658,8786,9082
45 | 1,3,0,1,3,2,0,2,0,2,0,2,0,2,0,1,3,2,3,0,1,3,2,0,1,0,2,0,2 | 0,240,829,2187,2251,2319,3025,3098,3913,4171,4472,4829,5020,5555,5657,6291,6497,6741,6897,7147,7339,7518,7911,8269,8402,8730,8954,9268,9793
46 | 1,0,1,3,2,0,2,3,0,2,0,1,0,2,3,2,1,3,2,3,2,1,0,1,0,1,0,1,0,2,0,2,0,2,0,1,0,2,0 | 0,100,260,840,1498,1717,1789,1907,2255,2370,2444,2593,3213,3413,3844,3964,4278,4525,4735,4804,4901,5213,5263,5402,6067,6208,6313,6431,6745,7005,7095,7189,7319,7456,7819,8571,8657,8757,9846
47 | 1,0,1,3,2,0,2,0,1,3,2,0,1,3,2,3,2,1,3,2,0,2,0,1,3,0 | 0,387,553,943,1876,2229,2539,2702,3114,3325,3716,4044,4473,4729,5725,6021,6525,7070,7571,7840,8044,8120,8835,9051,9161,9504
48 | 1,3,2,0,2,0,3,2,1,3,2,0,2,0,2,0,2,1,0,2,0,1,0,3,1 | 0,242,551,817,900,982,1345,1962,2631,2852,3915,4175,4257,4455,5283,5353,5402,5981,6162,7368,7433,8214,8935,9573,9968
49 | 1,0,1,3,2,0,1,3,0,3,2,3,2,3,0,2,0,2,0,1,3,2,3,0,2,0,1,0,2,0 | 0,119,1575,1849,2041,2294,2421,2987,4084,4299,4405,5002,5246,5630,5893,5998,6326,6449,6607,7043,7518,7954,8025,8503,8838,9048,9245,9370,9447,9657
50 | 1,0,1,3,2,0,2,3,2,0,2,3,2,0,2,0,1,0,2,1,3,2,0,2,0,2,0,2,0,2,0,2,3,2,3 | 0,135,194,961,2745,2934,3020,4066,4218,4338,4501,4887,4980,5592,5710,5805,6305,6417,6619,7056,7191,7397,7607,7759,7834,7993,8104,8228,8328,8454,8520,8611,9059,9196,9884
51 | 1,3,2,0,2,0,2,0,2,0,1,3,2,0,1,3,2,0,2,0,2,1,0,1,0,2,0,1,3,2,0,1,0 | 0,58,244,612,1096,1202,1293,1442,1523,1970,2176,2529,2953,3692,3882,4015,4388,4597,4737,5490,6126,6715,7068,7227,7648,8062,8151,8803,9124,9239,9459,9659,9719
52 | 2,0,2,0,2,3,2,1,0,2,3,0,2,0,2,0,1,0,2,0,1,0,1,0,3,0,2,0,1,3,1,3,0,2,0,2,0,2,3,2 | 0,68,141,391,968,1085,1667,1952,2046,2346,2866,3083,3153,3298,3401,3652,3769,4177,4337,4600,5098,5208,5715,6148,6373,6693,6766,6986,7378,7561,8119,8240,8606,8890,9118,9237,9316,9445,9827,9918
53 | 2,0,1,3,2,0,2,0,2,0,1,0,2,0,1,0,2,3,0,2,3,2,3,2,3,2,3,2 | 0,321,531,669,928,1167,1471,1570,1894,2077,2406,2484,3075,3519,3839,4390,4913,5018,5249,5544,5949,6163,6948,7140,7451,8425,9393,9787
54 | 2,3,0,2,1,0,1,0,1,0,1,0,3,0,1,0,2,3,2,3,1,0,1,0,1,3,2,1,0,1,3,1,0,2,0 | 0,823,1097,1401,1748,2131,2397,2487,2544,2638,2763,3174,3888,4098,4525,4860,5052,5281,5828,6023,6226,6461,6627,6867,6953,7145,7339,7620,7848,7966,8495,9026,9190,9747,9885
55 | 2,1,3,2,0,2,1,0,1,0,2,3,2,3,0,2,0,2,0,2,0,1,3,0,1,3,2 | 0,234,522,1249,1652,1710,2397,2527,2597,3315,3517,3697,4150,4249,4476,4587,4818,6536,6762,6858,7291,7807,8109,8560,8791,8937,9501
56 | 2,3,2,1,2,3,1,0,2,0,2,3,2,0,2,0,2,0,2,0,2,3,2,3,2,0,2,0,1,0,1,0,1,3,2,0,2 | 0,101,422,800,973,1273,1524,1605,2019,2142,2488,3038,3160,3378,3461,3549,3639,3785,3893,3994,4070,4314,4441,4800,5890,6318,6392,7003,7388,7891,8097,8393,9140,9350,9764,9916,9989
57 | 2,1,0,1,3,2,3,2,0,2,0,2,3,0,2,3,2,3,2,3,2,0,2,0,3,2,3,2,3 | 0,471,563,631,1157,1221,1479,1729,2225,2498,3007,4087,4353,4848,4951,5590,6742,6987,7126,7365,7439,7589,7774,8606,8918,9259,9538,9704,9971
58 | 2,3,0,2,0,2,0,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,3,2,1,3,2,3,2,1,3,2,3,2,3,2 | 0,562,1168,1498,1658,1731,1996,2209,2434,2528,2754,3070,3188,3378,3478,3585,3815,4380,4435,4878,5107,5222,5382,5520,5591,5666,5831,5930,6360,6806,7312,7456,7618,8323,8571,8720,9173,9316,9503,9903
59 | 2,0,2,0,2,0,1,3,2,1,3,2,3,2,3,0,1,0,1,3,2,0,1,0,1,3,2,3,0,2 | 0,240,349,491,566,2028,2308,2758,3121,3525,3730,4073,4340,4427,4758,5351,5524,5607,6243,6701,6796,7167,7604,8206,8438,8670,9098,9403,9770,9868
60 | 2,3,0,3,2,3,2,0,1,3,2,0,2,3,0,1,0,1,0,1,0,2,3,2,0,2,0,2 | 0,753,1424,2075,2128,2378,3282,3485,3812,4072,4635,4850,4937,5370,6460,6652,6798,6891,7033,7120,7187,7461,7797,8252,8502,9170,9262,9370
61 | 2,3,0,2,0,1,0,1,2,0,2,0,2,3,2,0,2,0,2,0,2,0,1,0,1,3,0,2,0,2,0,1 | 0,125,928,1027,1154,1390,1529,1614,1995,2302,2474,2673,2952,3719,3797,4050,4766,4938,5011,5409,5737,6339,6819,6963,7034,8231,8657,8729,8848,9008,9076,9678
62 | 2,3,2,0,2,3,0,2,3,2,3,2,3,2,0,2,0,1,0,1,3,2,3,2,3,0,3,2 | 0,143,257,474,761,868,2068,2182,2585,2911,3192,3354,3424,3576,3986,4073,4296,4625,4755,5038,5753,7013,7071,7187,7549,7755,8481,9955
63 | 2,0,2,0,2,3,2,0,2,3,2,3,0,1,3,2,0,2,1,3,2,0,1,0,2,3,1,3 | 0,450,625,869,1418,1715,1953,2470,2717,3337,3429,4373,4639,5194,5280,5540,5695,5816,6321,6446,7087,7324,7842,8019,8709,8842,9461,9524
64 | 2,0,2,0,2,3,2,3,2,3,2,3,2,0,1,3,1,0,2,1,0,2,0,1,0,2,0,2,0 | 0,64,117,367,500,1142,1256,1372,1484,1742,2044,2359,2799,3206,3594,3906,5117,5968,6082,6367,6452,7199,7367,7695,8115,8198,8284,8373,9578
65 | 2,3,2,0,2,3,2,0,2,0,3,1,3,1,0,1,0,1,0,2,3,2,0,1,0,2,3 | 0,626,1408,1988,2062,2354,3274,3673,3738,3985,5114,5523,5785,6073,6166,6342,7076,7243,7530,7679,7994,8546,8675,8866,9526,9623,9915
66 | 2,0,2,0,2,0,1,0,1,3,0,2,0,1,0,1,2,3,0,1,0,2,0,2,0,2,0,2,0,2,0,2,3,2,3,2,1,0,1 | 0,267,429,558,919,1057,1428,1620,1707,2664,3561,3643,3905,4009,4107,4579,4777,4844,5314,5457,5717,5897,6006,6249,6475,6545,6652,7066,7143,7234,7399,7518,7753,7924,8466,9472,9773,9865,9931
67 | 2,0,1,3,2,3,0,3,2,0,2,0,3,2,3,2,1,3,2,3,2,3,2,3,2,3 | 0,230,1308,1532,2250,2802,3026,3276,3570,3773,4459,4565,4832,5227,5565,5844,6446,6623,6906,7134,7573,8018,8334,8424,8622,9346
68 | 3,2,3,2,0,2,0,1,3,1,3,1,0,2,0,2,0,2,0,2,0,2,0,1,3,2,0,2,0,2,0,2 | 0,172,645,746,1135,1235,1489,1797,2011,3638,3715,4047,4148,4262,4549,4919,5870,5948,6017,6097,6393,6452,6930,7328,7676,7858,8205,8839,9506,9615,9879,9969
69 | 3,0,2,1,3,2,0,2,0,1,3,2,0,2,0,2,3,2,0,2,0,1,3,2 | 0,755,1549,1847,1999,3123,4126,4387,4909,5258,5379,5784,6081,6599,6854,7345,7780,8567,8753,8827,8970,9129,9565,9885
70 | 3,2,3,2,0,2,0,2,0,2,0,2,3,2,1,3,2,0,2,3,2,3,2,0,2,3,2,1,3,2,0 | 0,317,760,837,969,2065,2137,2222,2644,2710,2813,3349,3593,3998,4298,4615,4989,5315,5590,5669,5917,6571,6657,7598,8206,8628,8848,9205,9365,9677,9968
71 | 3,2,3,2,0,2,3,2,0,1,0,1,3,2,3,2,0,2,3,2,3,2,0,1,3,0,1,0,1,3,2,3,2,3 | 0,108,181,333,506,1058,1756,1885,2188,2597,2814,3620,3782,4392,4619,4791,5042,5491,5859,6416,6538,6815,7090,7487,8094,8331,8415,8529,8674,8866,9073,9356,9718,9941
72 | 3,2,0,2,3,0,2,0,2,0,1,0,2,0,2,3,2,3,2,3,2,0,3,2,3,2,3,2,0,2,0,1,0,1,0,2 | 0,204,474,594,835,1102,1356,1526,1921,1976,2509,2609,2742,2933,3033,3194,3443,3545,3749,3924,4164,4584,4804,5138,5825,6045,6333,6685,6836,7835,7956,8317,8446,8507,8617,9020
73 | 3,1,3,0,1,3,2,0,1,2,3,2,3,2,0,2,0,1,0,1,0,1,0,1,0,1,3,2,0 | 0,459,736,1059,1169,1466,2011,2191,2623,2807,3082,3633,3849,5357,5476,5637,5831,6128,6350,6455,6592,6648,7440,7508,7652,7756,8376,8871,9168
74 | 3,2,0,2,0,2,3,0,2,3,2,0,2,0,2,0,2,0,2,0,2,0,1,3,2,3,1,3 | 0,578,1163,1278,1378,1576,2532,2772,2827,3265,3395,3704,3838,3908,4556,4643,4771,5666,6274,6353,6412,6732,6917,7377,8022,8236,8703,9112
75 | 3,0,2,0,2,3,2,0,2,0,1,3,2,0,2,0,2,3,0,1,3,0,3,2,0 | 0,965,1346,1530,1648,1943,2024,2334,2418,2530,2898,3115,3594,3822,3925,4077,4445,5067,6361,7371,7865,8816,9177,9560,9799
76 | 3,2,3,2,0,2,0,1,0,2,0,1,3,0,2,0,2,0,2,3,2,3,2,3,2,3,0,1,3,2,0,3,2,3,2 | 0,261,828,964,1082,1314,1407,1940,2005,2540,2629,2749,3134,3382,3970,4140,4214,4317,4382,4530,4592,4986,5195,5435,6170,6394,6652,7010,7112,8125,8620,8866,8966,9220,9963
77 | 3,2,3,2,3,2,0,2,0,2,0,2,0,2,3,1,0,3,2,0,2,0,2,0,2,0,1,3,2,0,2,0,2,0,2,0,1,3 | 0,65,284,670,1072,1531,1670,2032,2122,2302,3172,3538,3604,3674,3858,4078,4254,4470,4659,4885,5117,5292,5466,5545,5962,6255,6401,6690,6775,7038,7580,7745,7889,8003,8590,8707,8965,9177
`;