var data02 = `
10000
00 | 0,1,3,2,0,2,0,2,0,2,3,2,3,2,0,2,0,2,3,1,0,1,0,1,0,2,1,0,1,0,2,0,1,0,1,3,2,3,2 | 0,673,1049,1272,1504,1613,1693,2130,2217,2865,3311,3594,4594,4809,5067,5122,5396,5479,5589,6037,6099,6236,6360,6514,6602,6699,7006,7322,7440,7807,8069,8179,9016,9113,9244,9452,9840,9906,9997
01 | 0,1,0,1,3,2,3,2,0,1,0,2,0,2,3,2,0,2,0,2,0,2,3,1,0,2,0,2,0,1,0,1,0,1,0,1,0,1 | 0,293,1125,1901,2035,2164,2393,2802,2970,3558,4014,4258,4544,4641,4722,4871,5348,5451,5538,5677,5881,5982,6292,6840,7050,7181,7254,7621,7741,8002,8143,8195,8301,8402,8459,8510,9274,9623
02 | 0,1,3,2,0,2,0,2,0,2,0,2,3,2,0,2,0,2,0,2,0,1,0,1,0,1,0,2,0,1,0,1,0,1,0,1,0,1,3,2,0,2,0,2 | 0,70,294,377,962,1033,1103,1172,1237,1443,1651,1759,1904,2736,2953,3208,3285,3512,3571,3675,4160,5048,5113,5254,5332,5394,5548,6134,6346,6830,6961,7056,7142,7635,7786,8205,8569,8628,9001,9286,9595,9761,9826,9934
03 | 0,1,3,2,3,0,2,3,0,1,0,1,3,0,3,2,0,2,0,1,0,1,0,3,2,3,2 | 0,112,458,765,1348,1559,1671,1816,2829,3436,3780,3989,4061,4399,5339,6400,6814,6951,7256,7628,7898,8216,8352,9071,9618,9887,9946
04 | 0,2,0,2,3,2,0,2,3,0,2,0,2,3,2,3,2,0,2,0,2,0,1,3,2,0,2,0,2,0,2,3 | 0,177,491,958,1286,1522,1696,1833,2016,2217,2266,2472,3033,3139,3422,3746,5210,5362,5519,5951,6546,7151,7492,7892,8087,8295,8652,9235,9302,9497,9599,9850
05 | 0,1,0,2,3,0,1,0,2,0,2,0,1,0,1,0,1,0,2,3,2,3,2,0,2,0,1,0,1,0,2,0,2,0,2 | 0,209,469,807,1264,1925,2061,2370,2537,2869,2951,3047,3132,3201,3268,3844,3902,4211,4328,4648,4876,5271,7291,7491,7844,7919,8313,8406,8461,8616,8987,9336,9408,9472,9695
06 | 0,3,0,1,0,2,0,2,0,2,0,2,0,1,0,2,3,2,3,0,2,0,2,3,2,0,2,0,1,0,2,3,2,3,1 | 0,417,1035,1357,1701,2070,2265,2339,2594,2740,2816,2904,3418,4277,4344,4721,4986,5098,5737,6037,6138,6568,6657,6841,6909,7259,7491,7753,7854,7913,8228,8644,8945,9216,9812
07 | 0,1,0,1,0,1,0,1,3,1,3,2,3,0,2,3,2,3,2,3,1,3,0,1,0,3,0,1,0,1 | 0,89,514,658,731,883,1321,1568,1659,1880,2088,2208,2582,2802,3075,3858,4231,4527,5270,5703,5880,6096,6592,6806,7279,7680,9556,9683,9754,9965
08 | 0,2,1,3,1,0,1,0,1,3,2,3,2,3,2,3,0,2,0,2,0,2,0,3,2,3,2,0,2,3,2,3,2,0,2,3,2,0,3 | 0,576,912,1033,1437,1548,1611,1914,2252,2443,2965,3212,3263,3353,3490,3597,3888,4036,4147,4263,4360,4435,4533,4880,5768,5867,5929,6299,6366,6794,6970,7205,7853,8103,8207,8942,9112,9298,9836
09 | 0,2,0,2,0,2,0,2,0,3,2,3,2,3,0,2,3,0,2,0,2,3,2,0,2,3,2,0,2,0,1,0,2,0,2 | 0,517,861,1066,1464,1520,1607,1763,1824,2398,2858,3052,3431,3505,4427,4784,5022,5262,5541,5708,5874,6371,6559,7018,7119,7707,8433,8692,8759,8846,9027,9352,9814,9933,9992
10 | 0,1,0,3,1,3,2,0,1,0,2,0,1,3,0,1,0,2,0,1,3,2,0,2,0,2,0,2,0,3,2,3,0 | 0,228,589,1142,1707,2172,2560,2756,3270,3568,4128,4205,4360,4600,5016,5127,5196,5688,5927,6142,6664,7035,7245,7475,7702,7767,8350,8430,8691,8958,9500,9575,9909
11 | 0,1,0,1,3,2,0,2,0,3,2,3,0,1,3,2,3,2,0 | 0,88,793,1246,1478,2631,2799,3276,4197,4558,4788,4896,6828,7484,7793,8188,8666,9422,9841
12 | 0,2,0,2,0,3,0,1,0,1,3,2,3,2,0,2,3,2,0,2,0,2,0,2,3,2,0,2,0,2,0,1,0,1,0,2,3,0,1,0 | 0,116,605,670,738,1712,2017,2253,2445,2513,2953,3081,3518,3600,3759,3824,4463,5128,5354,5439,5515,5582,5644,5739,6146,7046,7177,7285,7506,7671,7931,8227,8508,8605,8696,8873,9098,9327,9411,9766
13 | 0,2,0,2,0,2,0,2,0,2,0,2,3,2,0,1,0,1,0,1,0,3,0,1,0,2,0,1,0,2,0,2,0,2,0,2,0 | 0,140,357,443,647,788,1376,1473,1649,1805,2378,2468,2862,2930,3176,3615,3881,4107,4426,4632,4762,5050,6345,6862,7012,7219,7279,8031,8112,8269,8477,9221,9321,9393,9475,9623,9752
14 | 0,1,3,2,3,2,0,2,0,2,3,1,3,2,3,2,3,2,3,2,3,1,3,2,3 | 0,546,904,1723,1802,1985,2435,2489,2574,2720,3426,3682,4495,4662,5054,5163,5414,5594,5841,6221,6583,6996,7207,9348,9757
15 | 0,2,3,2,3,0,2,0,2,3,2,0,1,0,2,0,1,3,2,0,2,0,1,3,0,2,0,2,0,2 | 0,489,1051,1630,1894,2590,2998,3120,3379,3572,3744,4090,4250,4546,4903,4978,5608,5925,6636,6853,6966,7308,7652,7992,8456,8604,9170,9260,9359,9418
16 | 1,0,3,2,3,2,0,2,3,1,0,1,3,2,0,2,0,3,1,0,1,3,2,3,2,3,2,3,2,1,0 | 0,663,1100,1495,1900,2005,2350,2407,2628,2843,3037,3236,4346,4961,5143,5350,6197,6652,6842,6954,7015,7188,7401,7638,7732,8366,8527,8788,9221,9410,9899
17 | 1,0,1,0,1,3,1,0,2,0,2,3,2,3,0,1,0,1,0,1,0,1,0,1,0,1,0,1,3 | 0,65,157,877,1509,1808,2103,2464,2961,3152,3627,3919,4099,4664,5218,5433,6542,6607,6679,6905,7065,7164,7327,7765,7872,7947,8151,8485,8842
18 | 1,3,2,0,2,0,2,3,2,0,2,0,2,0,3,1,0,1,0,3,2,0,2,0,2,0,2,0,2,0,1,0,2,3 | 0,227,714,1098,1191,1398,2135,2335,3024,3199,3568,3785,3862,4007,4339,4583,4988,5411,5736,6076,6548,6772,6879,7181,7245,7623,7725,7800,7961,8063,8429,8914,9171,9762
19 | 1,3,1,0,1,3,2,0,1,3,2,3,2,3,2,3,2,0,3,2,3,2,3,2,0 | 0,137,677,1138,1323,1665,3041,3323,3448,3604,4366,4483,4574,4716,6286,6701,7106,7440,7962,8367,8452,8632,9161,9475,9877
20 | 1,0,2,0,2,0,2,0,1,3,2,3,2,0,2,0,3,0,2,3,2,0,1,0,2,3,2,3 | 0,331,860,1213,2212,2285,2396,2727,2918,3413,3985,4059,4339,4568,4668,4775,5068,6022,6639,7073,7349,7848,8190,8600,8811,9088,9392,9609
21 | 1,0,2,3,2,3,2,0,1,3,2,0,2,0,1,0,1,3,2,0,2,0,2,0,2,0,2,3,0,2,0,1,0,2,0,2 | 0,299,500,576,1855,2308,2670,2896,3075,3400,4039,4144,4283,4798,4923,5139,5399,5817,6197,6548,6669,6735,6909,7254,7325,7392,7455,7706,8213,8713,8926,9171,9312,9563,9784,9911
22 | 1,0,1,0,3,2,0,1,0,2,3,2,3,2,3,2,3,2,1,0,1,0,1,0,1,3,0,2,0,2,3,0,1,3 | 0,48,695,745,1407,1477,1942,2347,2471,2860,3194,3400,3640,4086,4254,4534,4882,5045,5353,5529,5670,5768,5839,6034,6588,6691,7160,7465,7526,7864,8457,8673,9156,9363
23 | 1,0,2,0,3,2,0,2,0,1,0,1,0,1,3,2,3,2,0,2,0,2,0,2,3,2,0,2,0,2,0,2,3 | 0,136,272,721,1608,2019,2373,2474,2952,3456,3677,3829,3916,4027,4327,4443,4684,4887,5283,5450,5510,7085,7145,7204,7745,7870,8559,8871,9035,9264,9386,9462,9713
24 | 1,3,2,3,2,0,2,0,2,0,2,0,2,0,1,3,0,2,0,2,0,2,0,1,3,1,0,1,3,0,3,1,3 | 0,119,404,781,1231,1451,1967,2112,2206,2419,2532,2804,3030,3146,3378,3533,4268,5217,5459,5539,5613,6101,6206,6558,6987,7487,7576,8055,8228,8596,9146,9852,9905
25 | 1,0,1,0,1,3,0,2,0,1,3,2,3,2,3,2,3,2,0,1,0,1,3,2,0,1,0,2,3,2,0,2,0,2,3,1,3,0 | 0,118,252,385,577,970,1179,1385,1456,1753,2107,2492,2759,3583,3801,4062,4679,5130,5299,5552,5657,5731,5886,6295,6601,6727,6983,7100,7431,7519,7843,7908,8004,8085,8341,8596,9075,9764
26 | 1,3,2,0,2,0,2,3,2,3,0,1,0,1,3,2,0,2,0,1,0,2,3,2,0,2,0,2,0,2,0,2,0,1 | 0,62,1208,1669,1867,1938,2547,2672,2823,2899,3356,3782,3841,3929,4456,4593,5230,5345,5406,5910,5983,6881,7115,7685,7911,8033,8162,8844,9157,9216,9554,9620,9808,9966
27 | 1,3,2,3,2,0,1,0,1,0,2,0,1,0,2,0,2,0,1,3,2,0,1,0,2,3,2,3,2,0,1,0,2,0 | 0,88,212,509,1195,1714,1806,1943,2005,2247,2403,2650,3100,3528,3602,3671,3889,4075,4316,4832,5031,5326,5472,5572,5773,6022,6808,7440,7611,8288,9102,9570,9826,9887
28 | 2,0,2,0,1,3,2,3,2,0,2,0,1,3,2,3,2,0,2,0,2,0,1,3,2,0,2,0,2,0,1,0,2,0 | 0,67,254,554,855,1287,2139,2501,2850,3164,3291,3376,3659,3825,3962,4217,4676,5158,5237,5489,5621,5727,6168,6433,6811,7110,7410,7471,7630,7741,8270,8723,9384,9972
29 | 2,1,3,1,0,1,0,1,0,1,0,1,0,1,3,2,0,3,2,0,1,0,1,0,2,3 | 0,598,828,1067,1286,1948,2009,2634,2940,3041,3220,4258,4620,4722,4992,6193,6542,6868,7190,7527,8572,8655,8874,9110,9765,9988
30 | 2,0,2,0,2,3,1,3,0,2,0,2,0,2,0,1,0,1,0,2,0,1,0,3,2,3,0,2,3,2,0,1,0,1 | 0,582,666,1086,1165,2054,2321,2413,4124,4225,4296,4686,4768,4881,5187,5277,5353,5678,5794,6180,6351,6824,6883,7224,7503,7775,8170,8239,8759,8859,9121,9298,9588,9706
31 | 2,3,2,0,2,3,2,0,2,3,2,0,3,2,1,3,2,0,2,0,2,3,2,3,2,3,2,0,2,0,2,3,2,1,0,2,3,2,0 | 0,216,274,829,1157,1375,1490,1782,1849,2120,2736,2936,3449,3574,4069,4284,4774,5059,5182,5465,5787,5863,5949,6186,6304,6544,6609,7106,7191,7760,7813,7977,8133,8445,8708,8804,9516,9793,9990
32 | 2,1,3,2,3,2,0,2,1,0,2,3,2,0,2,3,2,3,1,0,2,0,2,3,2,0,1,0,1,3,2 | 0,412,580,1959,2064,2151,2392,2446,2732,2854,3349,3763,3884,4027,4121,4404,4470,5189,5692,5956,6021,6145,6526,7073,7173,7372,7843,8108,8166,8606,9527
33 | 2,0,2,3,2,0,2,0,1,0,1,0,2,3,2,3,1,0,1,3,0,1,0 | 0,490,681,1157,1393,1916,2011,2673,2858,3123,3460,3525,3652,5322,5601,5710,6005,6070,6386,6922,8533,8680,9869
34 | 2,3,2,0,1,0,1,0,1,3,2,0,2,3,2,0,2,3,2,3,0,3,2,3,2,3,2,0,2,0,2 | 0,202,519,851,1188,1324,1399,1951,2085,2293,2658,3175,3260,3531,4686,5008,5468,5769,5996,6231,7953,8243,8502,8795,8911,9263,9414,9653,9825,9897,9968
35 | 2,0,2,0,1,0,1,0,2,0,2,0,2,0,2,3,2,3,2,3,2,0,1,0,2,0,1,0,2,0,3,0 | 0,215,298,371,903,1103,1328,1400,2055,2121,2434,2563,2629,2687,2774,3556,4284,4464,5861,5968,6450,6652,7016,7110,7277,7415,7635,8037,8376,8670,9419,9963
36 | 3,1,3,2,0,2,0,2,0,2,0,1,0,1,0,3,2,0,2,0,2,3,2,0,1,3,2,3,2,0,1,0,2,0,2,0,2,0,1,3,2 | 0,502,617,779,1038,1210,1286,1420,1765,2100,2386,2976,3125,3422,3498,3717,3983,4216,4288,4443,4923,5037,5110,5261,5662,5817,5940,6238,6452,6844,7010,7069,7687,7764,7957,8026,8107,8176,9266,9520,9981
37 | 3,2,3,2,3,2,3,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,3,0,1,0,1,0,1,0,3,2,3,2,0 | 0,350,573,1024,1232,1516,1952,2574,2719,3005,3164,3237,3350,3428,3577,3737,4053,4185,4264,4374,4510,5264,5385,5749,6064,6286,6507,6660,7038,7673,7919,8343,8870,9153,9418
38 | 3,2,0,1,3,0,2,0,1,0,1,3,2,3,0,3,2,0,2,0,2,0,2,0,2,0,2,0,3,2,3 | 0,193,476,785,1391,1748,2210,2557,2907,3274,3413,4163,5009,5083,5289,5718,5927,6455,6564,6665,6772,6841,6913,7001,7068,7360,7434,7984,8623,9305,9790
39 | 3,2,0,2,0,2,3,0,2,0,2,0,2,3,2,0,2,3,2,3,2,0,1,0,2,0,2,0,2,0,1,3,0,2,0,3,2 | 0,247,378,881,967,1445,2207,2388,3365,3654,3764,3867,3949,4132,4594,4829,4908,5091,5538,5658,5725,5868,6279,6481,6992,7072,7160,7386,7471,7539,7828,8019,8263,8359,8734,9031,9419
40 | 3,0,2,0,2,0,1,0,1,0,1,3,2,3,2,0,2,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0,2,3,2,3 | 0,410,519,630,719,819,944,1048,1130,1375,1620,1707,1881,2224,3060,3753,3837,3925,4013,4126,4290,4997,5406,5987,7830,8127,8202,8363,8435,8492,8572,8644,9183,9746,9849,9982
41 | 3,2,3,1,0,1,3,2,1,0,1,0,2,0,1,0,2,0,1,0,2,0,2,0,1,0,2,3,2,0,1,0,1,3,2,0,2,0 | 0,217,906,1133,1212,1282,1394,1649,1998,2172,2515,2611,3102,3225,3413,3475,3611,3913,4484,4554,4737,4856,4946,5134,5376,5444,6600,6920,7157,7380,7801,8003,8058,8640,9627,9867,9932,9998
`;