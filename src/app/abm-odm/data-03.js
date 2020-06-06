var data03 = `
10000
00 | 0,1,0,3,1,3,1,0,1,0,2,0,1,0,3,0,1,0,2,0,2,3,2,0,2,0,2,3,2,0,2,0,1,0,1,0,1,0,1,0 | 0,170,372,698,904,1145,1518,2107,2287,2439,2555,2631,3081,3290,3676,4377,4537,4898,5000,5385,5519,5734,5983,6279,6360,6492,7020,7292,7758,7875,7954,8189,8664,8966,9040,9097,9153,9306,9379,9495
01 | 0,1,3,2,0,1,3,2,0,1,0,2,0,2,3,0,2,3,2,3,2,0,3,2,1,0,1,0,1,0,2,0,1,0,2,0,2 | 0,110,310,613,949,1730,2419,2755,3194,3321,3403,3482,3540,3867,4032,4235,4406,4583,5277,5360,5668,5769,6035,6962,7233,7616,7769,8158,8245,8351,8756,8885,9164,9254,9442,9502,9567
02 | 0,1,0,1,0,1,0,1,0,1,0,2,0,2,0,2,3,2,0,2,0,1,0,2,0,1,0,1,3,2,0,1,3,2,0,2,0 | 0,454,584,683,826,902,1002,1215,1287,1374,1601,1972,2409,2465,2768,2986,3538,3825,3972,4031,4413,4660,4827,4926,5179,5758,5867,5980,6741,6836,7005,7332,7611,7897,8148,9572,9659
03 | 0,1,3,2,0,1,3,2,0,2,0,2,0,2,0,2,0,2,3,2,0,1,0,2,3,2 | 0,155,456,1314,1706,1991,2132,2874,3402,4107,4549,4616,4677,5784,6098,6296,6344,6441,7323,7394,7683,8193,8698,9590,9781,9862
04 | 0,1,0,1,0,1,0,1,3,2,3,0,2,0,2,0,1,3,2,0,1,0,1,0,1,0,1,3,0,1,3 | 0,160,500,1113,1210,1651,1739,1812,2346,2859,2942,4057,4134,4400,4529,4873,5377,5510,5835,6418,6793,6910,7276,7357,7683,7746,8027,8183,9192,9450,9546
05 | 0,1,0,1,3,2,3,2,3,2,3,2,3,2,0,2,0,2,0,2,0,1,0,1,0,1,0,1,0,2,0,2,3,2,3,2,0,2,3,2 | 0,191,258,1207,1978,2174,2379,2845,3276,3368,3581,3649,3856,3951,4327,4430,4615,4799,5005,5183,5491,6023,6106,6195,6405,6470,6584,6723,6862,7088,7208,7306,7659,8173,8260,8616,8857,9187,9334,9453
06 | 0,1,0,1,0,1,0,2,0,2,0,2,0,1,0,3,0,2,0,1,0,1,0,2,0,2,0,2,0,2,1,2,3,1,0,2,0,2,0,2 | 0,250,1140,1397,1486,1572,1629,1735,1782,1988,2134,2230,2310,2779,2872,3086,3547,3647,4106,4381,4469,4555,4935,5365,5543,5603,5670,5733,5812,5902,6370,6647,6891,7135,7766,8152,8409,8741,8834,9039
07 | 0,2,1,0,2,0,2,0,2,3,2,0,2,0,2,0,2,3,2,1,3,2,0,2,1,3,2,0,2,0,2,0,3,2,3,2,3,2,3 | 0,114,798,1095,1164,1229,2417,2756,2868,3242,3334,3456,3539,3589,3690,4041,4123,4203,4263,4719,4985,5161,5568,6338,6705,6793,7081,7338,7402,7639,7701,8167,8786,8869,9053,9131,9464,9651,9796
08 | 1,0,1,0,2,0,1,0,1,0,2,0,2,0,2,0,2,3,0,2,1,0,2,3,2,0,2,0,2,0,1,3,1,3,0,2,0,1,3,2,3,0,1,3 | 0,154,314,422,915,975,1145,1279,1378,1503,1626,1694,1798,1860,1914,2412,2838,2964,3257,3324,3591,4125,4438,4627,4728,4851,5612,5780,5979,6164,6237,6535,6889,7059,7274,7342,7580,7844,8063,8426,8736,9126,9342,9845
09 | 1,0,2,1,3,2,0,2,3,1,0,2,0,1,0,1,3,2,3,0,2,3,2,3 | 0,537,678,982,1191,1715,1823,1992,2151,2596,2846,3121,3334,3699,3854,5719,6450,6742,7255,7525,7589,7929,8055,8286
10 | 1,2,3,2,0,1,0,2,0,1,3,2,3,2,0,1,0,2,3,2,0,2,0,2,0,2,0,2,1,3,2,0,2,0,2,0 | 0,561,831,1039,1181,1421,1723,1789,1885,2357,2564,2725,2942,3053,3434,3604,3769,4313,4482,4648,4931,5224,5447,6547,6771,7158,7212,7713,8083,8172,8374,8840,9388,9559,9700,9761
11 | 1,0,2,1,0,2,0,1,3,2,0,1,0,2,0,2,3,2,3,2,3,2,3,0,2,3,2,3,2 | 0,74,826,1058,1120,1724,2032,2398,2563,2683,3012,3562,3700,4157,4344,4408,4548,5190,5258,5432,5883,6009,7110,7338,8327,8672,9231,9439,9918
12 | 1,0,1,3,0,1,0,1,0,1,0,1,3,0,2,1,0,1,3,2,1,3,1,0,2,0,2,0,2,3,2,3 | 0,254,550,679,1246,1551,1762,2308,2485,2602,2727,3013,3204,3466,3722,4123,4718,4812,5072,5373,5644,5972,6246,6374,6628,7387,7824,7956,8197,8321,8617,8887
13 | 1,0,2,0,2,0,1,3,2,1,0,2,0,2,0,1,0,1,0,1,0,1,0,1,0,1,3,2,3 | 0,257,378,458,637,851,982,1992,2385,2903,2985,3337,3560,3730,3831,5347,5424,5613,5884,6043,6301,7192,7285,8017,8182,8360,8570,9111,9350
14 | 2,0,2,0,1,0,1,0,1,3,2,0,2,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0,1,0,2,0,2,0,1,3,2 | 0,173,258,348,496,572,947,1062,1225,1344,1528,1896,2040,2125,2560,2696,2891,3110,3814,4013,4134,4204,4876,5046,5108,5274,5478,5688,6018,6390,6527,6944,8193,8336,8660,8981,9226
15 | 2,3,2,0,2,3,2,3,0,2,0,2,0,2,0,2,0,2,1,3,2,3,2,0,2,0,2,0,2,3,1,0,1,0 | 0,133,1106,1614,1685,1941,2305,2408,2868,3112,3634,4140,4492,4578,4638,4721,4854,4942,5201,5327,5591,5893,6022,6377,6806,6981,7054,7143,8049,8625,9129,9325,9581,9871
16 | 2,3,2,1,3,0,2,1,3,2,3,0,1,0,1,0,2,0,1,0,2,0,2,0,2,3,2,0 | 0,335,923,1442,1660,1879,2126,2369,2586,3611,4042,4506,4716,5171,5658,5914,6008,6079,6571,7210,7534,7968,8051,8114,8215,8619,9622,9914
17 | 2,3,2,3,0,1,3,2,0,1,0,3,0,2,0,1,0,2,3,0,3,2,3,1,2,0,2,0,2,0,2,0,2,0,3 | 0,522,710,814,1620,2043,2151,2733,2898,3141,3367,3688,4309,4377,4565,4702,4822,5217,5469,5888,6097,6366,7332,7870,8072,8306,8692,8792,8947,9060,9190,9328,9492,9540,9827
18 | 3,2,3,0,1,0,2,0,1,0,1,0,2,0,2,3,2,3,2,3,2,0,2,0,2,3,2,0,1,3 | 0,422,824,1156,1593,1658,2104,2190,2790,2876,3194,3323,3855,3955,4047,4315,4507,5205,5704,5922,6181,6386,6570,6895,7325,7595,8579,9115,9262,9482
19 | 3,2,3,0,2,3,2,3,2,0,1,0,1,0,2,0,2,1,0,2,0,1,3,2,3,0,1,0,1,3,2,3,2 | 0,604,847,1081,1229,1505,1772,1947,2189,2398,2799,3086,3162,3562,4283,4496,4959,5250,5436,6091,6153,6387,6826,7173,7302,7648,7948,8002,8068,8255,8793,8859,9660
20 | 3,2,0,2,0,2,1,3,2,0,1,0,1,0,1,3,2,3,2,0,2,0,1,3,0,2,3,1,2,0,3,2,1,3,0,2,0,2 | 0,208,824,1361,1494,1566,1869,2082,2395,2663,3023,3089,3227,3387,3589,3904,4208,4619,4865,5044,5096,5207,5507,5619,5829,5884,6555,6781,7049,7178,7490,7662,7823,8027,9271,9340,9741,9853
`;