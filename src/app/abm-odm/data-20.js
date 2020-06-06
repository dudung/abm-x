var data20 = `
10000
00 | 0,2,0,1,0,2,0,2,0,1,0,2,0,2,0,2,0,2,0,3,0,2,0,1,0,2,0,1,3,2 | 0,225,571,1619,1703,1969,2174,2352,2470,2931,3188,3313,3594,4204,4288,4527,5224,5296,5855,6130,6876,6943,7069,7218,7719,7811,8395,9149,9339,9576
01 | 0,2,3,0,2,0,1,3,2,3,0,1,0,3,2,3,1,3,2,1,3,2,3,2,3,2,0,1,0,3 | 0,802,882,1128,1524,1750,1968,2433,2755,3086,3294,3586,4512,5227,5349,5492,5662,5790,6736,7136,7790,8041,8390,8777,8848,8925,9129,9557,9631,9907
02 | 0,2,0,2,3,1,3,2,0,2,3,2,0,1,3,2,0,1,3,2,0,1,3,2,3,2,1,3 | 0,120,180,268,657,1331,1845,2185,2488,2855,3144,3361,3640,3794,4475,5887,6270,6953,7120,7624,7761,8177,8485,8586,9053,9190,9580,9840
03 | 0,1,0,3,1,3,0,1,0,1,3,0,2,0,2,0,1,3,0,1,3,2,0,1,3,2,3,2,0,2,0,2,0,2,0,1,0,1,0,1,3 | 0,65,131,693,1408,1470,1768,1906,1988,2236,2429,2654,2720,2954,3062,3131,3437,3584,4791,5210,5460,6068,6380,6587,6695,7044,7267,7671,7928,8042,8096,8278,8449,8583,8658,8933,8994,9125,9205,9288,9486
04 | 0,2,0,2,0,2,3,2,0,1,0,1,3,0,2,3,0,2,3,2,3,2,3,2,0,2,0,2,0 | 0,155,228,307,592,711,890,1229,1476,2176,2267,2527,2878,3251,3859,4364,4883,5136,5615,6368,7010,7366,7462,7971,8237,8627,8703,8830,8901
05 | 0,2,0,2,0,2,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,3,0,1,0,1,0,1,3,2,0,2,0,2,0,2,0 | 0,339,396,599,856,963,1252,1711,2232,2363,2554,3226,3351,3461,3536,3621,4333,4512,4751,4836,5068,5157,5287,5381,5865,6271,6938,7603,7781,8105,8319,8528,8708,8858,9008,9235,9361,9482,9604,9785
06 | 0,2,0,1,0,2,0,2,0,2,0,3,1,0,1,3,1,0,1,0,1,0,1,0,1,3,2,0,1,0,1,3,2,3,2,0 | 0,593,670,938,1256,1675,1783,2011,2195,2428,2749,3044,3843,4097,4241,4758,4999,5109,5210,5291,5358,5857,6131,6480,6662,6776,6964,7528,7993,8121,8730,8876,9122,9334,9455,9879
07 | 0,1,0,2,3,1,0,3,2,0,2,0,3,2,0,2,1,3,2,1,0,2,0,1,0,1,0,2,0 | 0,279,824,1180,1494,1727,2033,3024,3200,3344,3407,3522,4566,4737,4895,5047,5297,5641,5890,6151,6616,6757,7184,8026,8240,9001,9400,9538,9940
08 | 0,1,0,2,3,0,2,0,1,3,2,3,2,1,3,0,2,3,2,3,2,0,2,3,2,3,0,1,0,1,0,1 | 0,182,337,1205,1567,1869,1950,2128,2245,2754,3064,3346,3440,3905,4563,4870,5204,5618,6135,6415,6654,6871,7024,7199,7987,8173,8781,9237,9305,9650,9709,9817
09 | 0,1,0,2,1,0,3,1,3,0,2,0,3,1,0,1,0,3,2,1,0,2,0,2,0,2,3,2 | 0,82,366,425,895,1120,1408,1633,1837,2430,2746,2920,3660,3873,4353,4953,5050,5563,6636,6952,7248,7521,7899,8361,8441,8523,9188,9637
10 | 0,1,0,2,0,1,3,2,0,2,3,2,0,2,0,1,3,2,0,1,0,1,3,2,3,1,3,2,3,1,3 | 0,192,617,689,750,1831,1965,2203,2735,2950,3228,3738,3844,4080,4187,4636,5160,5592,5799,6086,6359,6479,6642,8077,8176,8490,8608,9028,9436,9907,9997
11 | 0,3,2,3,0,1,3,0,2,1,0,2,0,2,3,2,3,0,2,0,1,0,1,3,2,3,2,0,2,0,2,3,2,0 | 0,266,542,839,1088,1369,1838,2149,2212,3020,3130,3230,3300,3744,4350,4471,4987,5650,5726,5858,6729,6800,6858,7190,7595,7656,7762,8027,8287,9163,9242,9371,9608,9904
12 | 0,2,0,2,3,0,2,0,2,3,0,2,0,2,0,2,1,3,2,0,1,3,2,3,0,1,0,1,0,2,0,1,0,1,0,3 | 0,63,326,471,833,1551,1629,2105,2183,2400,2914,3087,3279,3356,3424,3815,4348,5212,5434,5949,6345,6722,6992,7055,7258,7372,7690,7752,8097,8321,8571,8868,8972,9030,9327,9638
13 | 0,2,0,2,0,1,0,1,0,2,0,1,0,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,3,2 | 0,146,741,819,892,1202,1320,1486,1831,2178,3308,3561,4526,4688,4776,4851,5263,5416,5620,5837,5916,6002,6065,6150,6715,7911,8452,8603,8958,9961
14 | 0,2,0,3,2,0,2,0,2,3,2,0,2,1,3,2,0,2,0,2,3,0,1,3,2,0,1,3 | 0,410,543,964,1933,2200,2315,2514,2611,3770,4628,4912,5023,5453,5669,5733,5920,6391,6458,6718,7213,7404,7544,7677,8027,8431,8805,9688
15 | 0,2,0,1,3,0,2,0,2,0,1,0,1,3,2,0,2,3,2,0,2,0,2,1,3,2,0,2,3,1,0,2 | 0,71,413,506,733,1619,2214,2355,2496,2584,3072,3140,3206,3465,3680,4839,5069,5318,6308,6570,6648,6716,6857,7422,7676,7944,8123,8204,8321,8823,8894,9374
16 | 0,2,0,2,3,1,3,1,3,1,0,2,0,2,0,2,0,2,3,2,1,3,0,2,0,1,0,1,3,0,2,0,2,0 | 0,284,553,676,770,1049,1292,1555,1786,1988,2118,2267,2418,2996,3066,3172,3751,3944,4218,4617,5245,5554,6003,6234,6287,6823,6928,7408,7579,7920,8450,8803,9022,9236
17 | 0,1,0,1,0,2,0,2,0,2,3,2,0,2,0,2,1,3,2,0,2,1,0,2,0,2,0,1 | 0,775,965,1351,1789,2401,2904,3176,3280,3393,3874,4028,4261,5183,5985,6065,6460,7192,7411,7616,7688,8092,8205,8332,8395,8775,9501,9933
18 | 0,1,0,1,0,2,0,1,0,2,0,1,0,3,2,0,2,0,2,3,2,3,2,3,1,3,2,3,2 | 0,89,532,684,983,1078,1581,1823,2310,3347,3426,3668,3870,4508,5549,5704,5779,6059,6249,6651,6789,7219,7999,8245,8923,9029,9277,9644,9953
19 | 0,1,0,2,3,2,0,1,3,2,3,0,1,0,1,0,3,2,0,1,0,1,0,1,3,2 | 0,651,995,1240,1726,1948,2590,2902,3053,3542,3988,5533,5900,5987,6553,6626,6940,7285,7467,8082,8652,8986,9032,9144,9368,9854
20 | 0,1,3,2,0,2,0,2,0,2,0,2,0,2,0,1,0,1,0,2,0,2,0,2,0,2,3,2,3,2 | 0,538,953,1449,1666,1761,1982,2091,2201,2449,2541,3422,3553,3658,3719,4586,5036,5325,5483,5789,5871,6024,6442,7741,7840,7927,8089,8261,8378,9932
21 | 0,1,2,0,1,3,2,0,3,0,2,1,3,2,0,2,0,2,0,2,0,1,0,2,0,2,3,2,0 | 0,108,726,925,1269,1399,2310,2661,2893,3132,3966,4650,5336,5755,6163,6297,6482,6611,6813,6983,7095,7729,8645,9028,9174,9347,9463,9755,9920
22 | 0,2,3,2,0,1,0,1,3,2,3,0,2,0,2,0,2,0,2,0,2,3,2,3,2,3,0,3,2,0 | 0,78,211,1574,1767,2070,2143,2367,2515,2906,3723,4491,4549,4648,4757,5139,5324,5544,6137,6252,6343,6905,7110,7375,8301,8580,9150,9401,9485,9752
23 | 0,1,0,2,0,2,3,0,2,0,2,0,1,0,1,0,1,3,0,1,0,2,0,2,0,1,0,2,3,2,0,3 | 0,564,669,819,1027,1184,1902,2440,2557,2656,2844,3093,3269,3590,3704,4122,4525,5303,5546,6222,6282,6533,6815,6901,7168,7618,7731,8036,8473,8883,9029,9426
24 | 0,2,0,2,3,0,2,0,2,0,1,3,0,1,3,2,0,2,0,2,3,2,0,2,0,2,0,3 | 0,465,610,685,897,1162,1379,1822,2148,2397,2628,2766,3538,4177,4539,4719,5251,5516,5583,5715,6868,8033,8195,8296,8778,8918,9381,9860
25 | 0,2,0,1,3,2,3,2,0,3,2,0,1,3,2,3,0,3,2,0,1,0,2,3,2 | 0,661,1373,1641,1944,2170,2262,2334,2603,3398,3894,4172,4972,5414,6272,6431,6712,8015,8338,8463,8603,8771,8900,9020,9985
26 | 0,2,3,0,2,0,2,3,2,3,2,0,1,0,1,0,1,0,1,0,1,0,1,0,2,0,2,0,1,3,2,0,2,0,1,0,2,0 | 0,113,320,556,919,993,1091,1471,2393,2494,2556,3183,3361,3756,3967,4036,4160,4558,5166,5233,5427,5588,6033,6226,6503,6591,6662,7073,7256,7583,7771,8203,8303,8520,9017,9089,9574,9879
27 | 0,2,1,0,2,0,2,0,2,0,2,0,2,0,2,1,3,2,0,2,3,1,3,2,0,1,0,2,0,1,0,1,0,1,0,1,3,1 | 0,150,440,733,891,1153,1630,1914,2370,2665,2731,2841,2913,3056,3135,3356,3600,3994,4330,4397,4780,5023,5148,5305,5454,5656,5738,6412,6512,6738,6801,7657,7886,8307,8597,8684,8993,9685
28 | 0,2,0,2,0,2,0,1,0,2,0,1,0,1,0,1,0,1,0,2,0,1,0,2,3,2,0,2,0,1,0 | 0,252,541,1163,1221,1321,1643,1934,2217,4198,4270,5211,5564,5646,5868,6214,6304,6409,6470,6820,6925,7104,7208,7412,7704,8032,8472,9008,9152,9882,9990
29 | 0,2,0,2,0,2,0,1,0,1,0,2,0,2,0,1,0,1,0,2,0,1,3,2,0,2,0,2,0,3,2,3,2,0,2,0 | 0,51,653,835,1136,1271,1431,1687,1808,2976,3042,3202,3448,3566,3650,4184,4381,4887,5251,5652,5711,5898,6291,6378,6543,6657,6875,6948,7094,7450,7811,7878,8788,8973,9720,9977
30 | 0,1,3,2,0,2,0,1,3,1,0,1,0,1,3,2,0,2,0,2,3,0,2,0,1,0,1,3,0,2,3,2,1,0,2 | 0,194,491,659,1061,1192,1665,1828,1925,2348,2460,2579,2712,2772,2905,3203,3329,3805,3922,4043,4418,4636,5235,5384,5548,6026,6102,6928,7885,7966,8731,9264,9472,9697,9866
31 | 0,2,3,2,3,2,3,2,3,2,3,2,0,2,0,2,0,3,0,2,0,2,1 | 0,307,935,2275,2647,2956,3864,4333,4572,5727,5921,6776,7067,7320,7406,7637,7709,8376,8762,8826,9502,9560,9955
32 | 1,0,2,0,2,3,1,0,1,0,2,0,3,2,0,1,3,2,3,2,3,0,2,0 | 0,132,291,374,1090,1252,1481,1936,2036,2181,2415,3000,3377,3920,4585,4823,4981,5574,5813,6058,6425,8740,9777,9855
33 | 1,0,2,0,2,0,2,0,2,0,2,0,2,3,0,2,0,2,0,1,3,2,3,2,3,2,3 | 0,110,927,1123,1422,1521,1615,1724,2020,2349,2699,2980,3562,4045,4532,4648,4756,4877,4949,5976,6106,7358,8002,8584,8916,9162,9915
34 | 1,0,2,1,0,1,0,2,0,1,0,2,3,2,0,2,0,1,3,1,3,2,0,3,2,0,2,1,3,1,0,2,0 | 0,105,404,583,738,1305,1370,1532,2027,2301,2765,3612,3717,3832,4008,4120,4243,4879,5242,5590,5716,6494,6683,7127,7494,7788,7880,8334,8398,8739,8814,9111,9347
35 | 1,3,1,0,2,0,2,0,2,0,1,0,1,0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,3,0 | 0,323,781,1045,1147,1559,2034,2407,2536,2622,3672,3821,4742,5264,5629,5806,5866,6321,6501,6670,7738,7863,8024,8163,8252,8318,8721,9020,9291,9919
36 | 1,3,2,3,2,3,0,3,2,0,1,0,1,3,2,3,0,2,0,2,0,2,0,2,0,2,3,2,0,2,0,2,0,2,0 | 0,384,717,1031,1511,1580,2159,2370,2484,2760,3006,3072,3145,3272,4755,5083,5331,5407,5903,6047,6196,6325,6403,6682,6829,6903,7153,8372,8557,8675,8740,8873,9041,9136,9866
37 | 1,3,2,3,2,3,2,1,3,2,3,2,3,2,3,2,0,2,0,2,0,2,0 | 0,667,1090,1218,1926,2159,3180,3565,3640,4250,4544,5767,6298,6976,7247,7504,7773,8228,8405,9494,9559,9634,9747
38 | 1,0,1,0,1,0,1,0,2,0,1,0,3,0,2,0,1,0,2,0,2,0,1,0,1,0,1,3 | 0,126,215,533,591,848,1672,1774,2055,2133,3040,3231,3692,4020,4294,4406,4877,5623,5932,6246,6321,6518,6983,7570,8463,8565,8643,9096
39 | 1,0,2,0,2,0,2,3,2,3,2,3,1,0,1,0,2,0,2,3,2,1,3,2,0,1,0,2,0,2,0,2,0,2,0,2,3,2 | 0,70,142,319,460,723,777,912,1059,1146,1821,2075,2293,2449,2536,2891,3111,3500,3889,4462,4784,5062,5311,6433,6666,6815,7741,7837,7996,8089,8389,8493,9054,9137,9203,9293,9502,10000
40 | 1,0,2,0,2,0,2,0,2,0,1,0,1,3,2,0,2,3,2,0,2,1,3,1,0,1,3,2,0,2,3,0,1,0,1,0,1 | 0,141,265,816,1679,2330,2410,2588,2686,2947,3080,3372,3424,3756,4426,4753,4847,5037,5258,5743,5977,6434,6872,7120,7202,7496,7923,8299,8771,8878,9000,9245,9437,9505,9583,9649,9788
41 | 1,0,1,3,2,3,0,2,0,1,0,1,0,2,0,1,3,2,0,1,3,2,0,2,0,1,0,3 | 0,162,296,491,669,1002,2823,2920,3243,3655,3827,3960,4211,4857,4968,5494,5625,5896,6013,6665,7101,7564,7720,7866,7965,8216,9084,9525
42 | 1,3,0,2,3,1,3,2,1,3,2,3,1,3,2,3,2,0,1,0,1,0,1,0,1,0,1 | 0,75,630,1137,2084,2313,2499,3486,3706,3961,4290,4678,5092,5775,6055,6209,6446,6762,6901,7147,7481,7561,7643,7891,8167,8277,8572
43 | 1,0,1,3,2,0,1,3,2,3,0,2,0,1,3,2,3,2,0,1,0,2,0,2,0,2,0,1,0,1,3,2,0,1,0,2,0,1,0 | 0,134,208,388,945,1164,1254,1462,2364,2482,3024,3113,3375,4043,4125,4596,4816,5339,5555,5742,5852,5979,6130,6301,6382,6450,6524,6686,6744,6800,6970,7214,7338,7519,7695,8927,9053,9625,9839
44 | 1,3,2,3,2,0,2,0,2,0,1,3,0,2,0,2,0,2,3,2,0,2,0,1,0,1,3,0,1,0,1,0,1,3 | 0,213,1157,1488,1592,1959,2737,2917,2987,3087,3505,3692,4607,4765,4890,5717,5948,6112,6248,6532,6806,7080,7190,7367,7434,7493,7667,7939,8150,8245,8327,8397,8552,8778
45 | 1,0,1,0,1,0,1,0,1,0,2,0,2,0,2,0,2,0,1,0,3,2,0,2,0,1,3,1,0,1,0,1,0,2,0,1,0,2,3,1,0,1,0,2,0 | 0,71,154,306,622,741,813,960,1076,1156,1313,1407,1501,1844,1945,2049,2113,2227,2455,2549,2835,3312,3581,3772,3902,4388,4770,5228,5431,5522,5652,5710,5787,6517,6813,6961,7073,7487,7823,8061,8308,8656,8947,9298,9858
46 | 1,0,2,0,1,0,2,0,2,0,1,0,1,3,2,0,1,3,2,0,1,3,2,0,2,0,3,0,1,3,2 | 0,52,646,771,1065,1316,1765,1838,1905,1976,2359,2553,2724,3412,4202,4318,4936,5184,5605,5924,6156,6316,6455,6665,6739,7222,7486,7822,7984,8301,9327
47 | 1,3,2,0,2,0,2,3,2,3,0,2,0,1,0,2,0,1,3,2,3,2,3,0,2,0,2,3,0,2,0,2 | 0,134,321,484,572,719,776,851,1656,2161,2367,2437,2932,3894,4262,4882,4999,5364,5519,5777,6693,7224,7309,7573,7642,8225,8424,8900,9204,9271,9604,9737
48 | 1,3,2,3,2,0,2,0,1,0,2,3,2,0,2,0,1,3,2,3,2,0,2,0,2,0,1,0,1,0,1,0,2,3,2,3,2 | 0,684,1249,1412,1570,1728,1870,2312,2506,2620,2940,3193,3937,4222,4669,5384,5652,5830,6166,6318,6512,6860,6947,7030,7333,7405,7925,8047,8121,8178,8318,8378,8453,8768,8982,9063,9410
49 | 1,3,2,3,2,3,2,0,2,1,3,2,3,2,3,2,0,2,1,3,2,3,1,3,2,3,2,0,2 | 0,71,819,1312,1696,2118,2499,3002,3178,3527,3686,4509,4748,5366,5629,6117,6319,6442,6772,6871,7350,7421,7827,7981,8647,9209,9272,9481,9874
50 | 1,3,2,1,0,1,0,1,0,1,3,2,3,1,3,2,0,3,2,0,1,3,2,0,2,0,2,0,2,0,2,1,3,1,3,2 | 0,242,453,899,1300,1360,1433,1610,1753,2136,2524,2699,2817,3010,3269,3842,4145,4432,4731,4963,5185,5859,5954,7033,7623,7824,7932,8068,8139,8220,8650,8952,9227,9504,9676,9772
51 | 1,0,1,0,2,0,2,0,2,0,2,3,0,1,3,2,0,3,2,0,2,0,2,0,1,0,1,0,1,0 | 0,256,748,831,1105,1580,1988,2121,2860,3401,3684,3828,4101,4482,4616,4813,5446,5695,5826,6057,6886,7103,7509,7694,7855,8252,8522,8632,9628,9874
52 | 2,0,2,0,3,2,3,0,2,0,1,3,2,0,1,3,1,3,2,0,2,0,2,0,3,2,3,2,0,2,0,1,3,2,0,2 | 0,53,145,352,969,1139,1209,1420,1812,2096,2378,2830,3537,3816,4083,4194,4548,4678,5189,5464,5623,6059,6152,6516,6804,6885,7170,7268,7783,7893,8032,8550,8734,9089,9613,9922
53 | 2,0,1,0,2,3,2,3,2,0,2,3,2,3,0,1,3,1,0,2,3,2,0,1,0,2,3,0,1,0 | 0,86,778,916,996,1319,1889,2221,2302,2545,2613,2940,3154,3242,3443,3582,3953,4501,4975,5633,5938,6475,7237,7476,7683,8214,8602,9323,9527,9813
54 | 2,1,3,2,0,2,3,2,3,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,3,2,3,1,3,2,3,2,0,1,2 | 0,248,559,616,876,963,1504,1615,1986,2258,2372,2440,2609,2955,3030,3126,3214,3388,3462,3533,3616,3736,4429,4497,5265,6224,6302,6616,7487,8391,8863,9076,9337,9607,9892
55 | 2,0,2,0,2,0,2,3,2,0,2,0,2,0,2,0,2,3,2,0,1,3,2,3,1,0,2,3,2,1,3,2,0 | 0,330,421,585,657,2122,2310,2424,2826,3311,3379,3485,3553,3727,3852,4030,4241,4848,5179,6285,6553,6799,7157,7264,7494,7792,8067,8294,8609,8914,9087,9641,9923
56 | 2,3,2,3,0,2,0,2,3,1,0,1,3,2,3,1,3,2,0,2,0,1,0,2,0,2,0,2,0,2,0,1,0,2,0 | 0,346,436,932,1194,1416,1495,1782,2050,3299,3486,3590,3743,3927,4129,4349,4761,5023,5431,5524,5848,6170,6280,6531,6591,6844,7217,7759,7827,7923,7989,8557,8999,9415,9541
57 | 2,3,2,0,2,0,1,0,2,3,2,3,2,3,2,3,2,1,0,2,3,2,3,2,3,2,3,0,2,0,2,0 | 0,463,534,892,2494,2569,2765,2844,3598,4035,4195,4787,5176,5464,5602,5688,6358,6552,6907,7618,8005,8103,8442,8637,8705,8854,8975,9544,9609,9700,9748,9824
58 | 2,3,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,3,2,0,2,0,2,3,0,2,0,2,3,2,0,2,0,2,3 | 0,281,1387,1685,1748,1812,2222,2321,2384,2645,2786,3136,3215,3909,4016,4275,4464,4543,4666,4872,5406,5854,5950,6073,6337,6637,6915,7231,7302,7524,7669,8280,8751,8923,9288,9419,9991
59 | 2,3,2,3,2,0,1,0,1,0,1,0,1,0,2,3,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,3 | 0,370,439,709,976,1178,1321,1449,1524,1595,1986,2051,2178,2734,3242,3661,3757,3914,4156,4442,4560,4663,5856,6023,6328,6516,6601,7598,8001,8372,9467,9591
60 | 2,3,2,3,2,3,0,2,0,1,3,2,3,2,0,2,3,2,3,2,0,2,0,1 | 0,610,1113,1336,1521,1787,2298,2770,3195,4191,4360,4734,5071,5275,5482,5622,5890,7379,7443,7785,7990,8974,9158,9387
61 | 2,0,1,3,2,3,0,1,3,1,0,1,0,2,0,1,0,1,3,2,0,1,0,1,0,1,0,1,0,1,0,2,0,2,0,2,3 | 0,116,508,784,1500,1581,1823,2427,2678,3789,3893,4006,4075,4505,4653,5285,5331,5470,5779,5997,6205,6384,6430,6498,6639,6987,7044,7148,7250,7366,7977,8217,8295,8850,9572,9640,9828
62 | 2,3,2,0,1,0,2,0,2,0,2,3,2,1,3,2,1,0,1,0,2,0,2,0,1,0,2,3,2,3 | 0,100,1164,1336,1709,2525,2680,2772,2911,3160,3236,3619,3964,4328,4524,5076,5531,5610,5778,6060,6533,6843,7269,7535,7766,7979,8193,8622,9430,9699
63 | 2,1,0,1,3,2,0,2,3,2,0,2,3,0,1,0,1,3,2,3,0,3,2,0,2,3,0,3,2 | 0,312,524,965,1257,2118,2443,2833,2912,3390,4342,4560,4885,5341,5526,5756,5860,6060,6352,6443,7063,7420,7797,8454,8661,8761,9224,9497,9909
64 | 2,0,2,3,1,3,0,2,0,2,0,2,0,1,3,2,3,2,1,3,2,0,2,0,1,3,2,3,2,3,2,0,1,0,2,0,2,0,2,0,2,0 | 0,63,126,860,1145,1475,1946,2005,2220,2311,2437,2752,3076,3240,3477,3749,4041,4534,4788,5006,5258,5752,5813,6096,6378,6472,7019,7171,7477,7533,7806,8093,8372,8444,8531,8815,8877,8990,9131,9309,9407,9472
65 | 2,3,1,3,2,0,2,0,2,1,3,1,3,0,3,2,3,2,3,2,0,2,3,2,3,0,2,0,2,0,2 | 0,171,418,693,1290,1499,1575,1678,1858,2378,2483,3341,3922,5156,5403,5985,6070,6261,6830,7820,8034,8108,8191,8389,8454,8709,9055,9135,9287,9851,9963
66 | 2,0,2,3,2,0,1,0,1,3,2,3,0,1,3,2,0,2,0,2,0,2,0,2,0,2,0,2,3,2,3,2,0,2,1,0,1,0,1,3 | 0,69,216,728,964,1409,1605,1744,1811,2224,2350,2453,2776,3132,3720,3955,4289,4360,4443,4898,4957,5109,5265,5403,5613,6046,6209,6437,6877,7126,7223,7675,8003,8342,8547,8702,8781,8904,9538,9682
67 | 2,3,2,3,2,3,0,2,0,1,0,1,0,2,0,2,0,2,1,0,1,0,1,0,1,0,3,2,3,0,1,3,2 | 0,212,918,1193,1811,2296,2575,2639,2886,3155,3664,3765,3844,4413,4903,5197,5330,5537,5884,6103,6187,6542,6746,7001,7407,7615,8410,8515,8874,9091,9191,9413,9652
68 | 3,2,0,2,0,1,0,1,3,2,3,2,1,0,3,2,0,2,0,2,1,0,2,0,2,0,1,0,2,0,2,0,2,0,2 | 0,1005,1198,1311,1871,2292,2450,2531,2708,3096,3641,3754,4362,4627,4860,4966,5160,5302,5512,5910,6258,6703,6934,7508,7586,7832,8096,8273,8413,8642,9098,9184,9333,9484,9796
69 | 3,2,3,2,0,3,1,0,2,1,0,1,0,1,0,1,3,2,3,0,2,0,2,3,2,1,0,1,0,2,0,2,0,1,3,2,0,1,3 | 0,89,531,628,849,1156,1608,1801,2000,2284,2348,2492,2642,2708,3040,3458,3788,4621,4734,4943,5432,5640,5823,6079,6221,6794,7087,7721,7804,7978,8094,8210,8629,8758,8937,9104,9255,9758,9877
70 | 3,2,3,0,2,0,2,3,1,0,1,3,0,2,3,1,3,2,3,2,3,0,2,0,2,0,1,0,3 | 0,1051,1177,1397,1475,1558,1625,1972,2307,2379,2559,2757,3881,3953,4269,4537,4646,5082,5213,5403,6019,6777,6861,6989,8438,8505,8695,8762,9034
71 | 3,2,3,2,0,2,0,1,0,3,2,3,1,3,0,2,1,0,1,0,1,0,2,3,1,3,2,3,2,0,1,0,1,3 | 0,609,1262,1491,1743,1827,2061,2239,2297,2799,2930,3409,3679,3952,4177,4392,4768,5013,5079,5201,5274,5383,5685,6072,7328,7475,7616,7676,7751,8043,8340,8681,8773,9806
72 | 3,2,3,2,3,2,3,2,1,3,1,3,0,2,0,2,0,2,3,2,0,1,3,2,0,2,0,2,0,2,0,2 | 0,357,834,2273,2642,2845,3199,3308,3630,3734,4571,4925,5580,5964,6206,6392,6530,6588,6751,6819,7104,7431,7836,8312,8666,8754,9254,9336,9423,9538,9623,9693
73 | 3,0,2,3,2,3,0,2,0,2,0,1,3,2,0,1,0,3,1,3,2,0,3,2,3,2,0,2,0,1,3 | 0,502,673,781,1459,1517,1753,1836,2592,2723,2937,3246,3488,3742,3898,4604,5174,5469,5749,5977,6147,6666,7237,7363,7910,8540,8819,8886,9000,9822,9935
74 | 3,0,2,0,2,0,2,3,2,0,2,3,0,2,0,2,0,2,3,2,3,2,3,2,3,1,3 | 0,1473,1546,1683,1802,2359,2499,2883,3301,3988,4213,4377,5314,6076,6368,6429,6708,6782,7254,8150,8366,8579,8648,8939,9199,9812,9952
75 | 3,2,0,2,0,1,0,1,0,1,0,1,0,1,0,1,3,2,3,1,3,2,3,0,1,3,2,0,2 | 0,224,415,546,643,1262,1432,1519,1680,1744,2083,2153,2327,2483,2723,2849,3728,4482,5151,5380,5581,6198,6538,6921,7145,7793,8396,8653,9854
76 | 3,2,3,1,3,2,3,2,3,2,1,3,0,2,0,2,0,2,0,2,3,2,0,2,0,3,1,0,2,0,2,0 | 0,148,461,699,916,1177,1452,1953,2280,3488,3924,4214,5043,5762,5837,6039,6091,6182,6278,6409,6739,7486,7958,8155,8382,8637,9153,9343,9447,9562,9707,9916
77 | 3,2,0,2,0,2,0,1,3,2,0,2,1,0,2,0,2,0,2,3,2,1,0,1,0,1,0,1,3,2,3,1,3 | 0,365,779,854,928,992,1509,1576,1801,2342,2579,2662,2988,3228,3580,3812,3916,4743,4811,5133,5723,6100,6205,6454,6757,7529,7665,8435,8649,9012,9157,9382,9562
`;