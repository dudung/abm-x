var data00 = `
10000
00 | 0,1,0,1,3,0,2,0,3,2,3,2,3,0,2,0,3,2,3,2,0,2,0,3,2 | 0,224,491,583,1003,3905,4122,4352,4518,5726,5878,6014,6323,6603,6732,6845,7354,7562,8161,8717,8857,8940,9006,9300,9825
01 | 0,2,0,1,3,2,1,0,1,3,2,3,1,0,1,0,2,0,2,3,1,0,3,2,0,1,0,1,0,1,0,1,3,2,0,2,1,0,1,3 | 0,119,701,1011,1207,1541,1783,1860,2236,2303,2787,3041,3316,3482,3549,3862,4376,4714,4794,4860,5114,5234,5717,6140,6344,6730,6804,6921,7099,7232,7346,7623,7721,8300,8536,8590,8815,8980,9056,9565
02 | 0,1,3,0,1,0,2,3,2,0,1,0,2,0,1,3,2,0,2,3,2,3,2,3,2,0,2,0,2,3,2,3,2,3,2 | 0,213,497,984,1230,1589,1777,2637,2834,3320,3482,3544,3649,3726,3887,4073,4290,4958,5181,5371,5787,5846,6355,6787,7124,7588,7666,7760,7831,8445,8668,8734,9192,9484,9855
03 | 0,1,0,1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,1,0,1,3,0,2,0,2,0,2,3,0,2,0,2,0 | 0,64,153,699,1190,1321,1582,1675,1764,2249,2445,2680,3254,3335,3458,3508,3852,4204,4408,4512,4679,4738,5424,5897,6172,6312,6389,6567,6662,7119,7344,8982,9349,9430,9990
04 | 0,2,3,2,0,2,3,2,0,2,3,2,0,1,0,2,0,2,0,2,0,1,0,1,0,1,0,1,0,1,0,2,0 | 0,722,1082,1598,1905,2111,2423,2826,3265,3871,3977,5497,5605,5844,6003,6118,6279,6357,6564,6683,6813,7096,7151,7260,7342,7788,7852,8178,8346,8583,9129,9543,9757
05 | 0,1,0,2,0,2,0,2,0,2,3,0,2,3,2,0,2,3,2,0,2,0,2,3,0,2,0,2,0,2,0,2,3,0,2,1,3 | 0,265,927,1330,1493,1753,1997,2058,2134,2563,2801,3021,3426,3809,4159,4542,4736,5218,5463,6107,6460,6539,6615,6976,7195,7329,7463,7546,7967,8370,8492,8752,9098,9357,9468,9716,9804
06 | 0,1,0,2,3,0,1,0,1,0,1,0,1,0,2,3,1,3,2,0,2,3,1,3,2,3,0,2,0,2,3,2,3,2,0,2 | 0,277,341,549,1014,1332,1520,1662,1729,1804,1909,2079,2231,2568,2940,3009,3247,3550,4162,4325,4383,5061,5250,5340,5660,5983,6162,6816,6933,7260,7933,8388,8599,9083,9582,9990
07 | 0,3,0,2,0,2,3,2,0,2,0,2,3,2,3,2,0,2,0,2,0,1,0,1,3,0,2,0,2,3,0,1,3 | 0,920,1229,1304,1793,1873,2004,2196,2373,2442,2699,2852,3163,3311,3924,3998,4075,4333,4623,5000,5330,5494,5885,5999,6244,6528,6884,6951,7490,7649,7799,7939,8168
08 | 1,3,2,0,2,3,2,3,2,3,1,3,2,1,3,0,2,3,0,1,0,2,0,3,2,0,1,0,2,0 | 0,401,733,1126,1388,1881,2114,2246,2349,2574,3129,3397,4133,4382,4565,5675,6134,6260,6441,7113,7547,7683,7873,8062,8501,8613,9071,9198,9370,9498
09 | 1,0,2,0,1,0,2,0,2,0,1,0,1,0,1,0,2,0,2,0,1,0,1,0,1,0,1,0 | 0,141,517,825,927,981,1570,1630,1865,1975,3442,3563,4350,4434,4938,5021,6232,6447,6564,6817,7313,7368,7843,8082,8181,8717,8806,9646
10 | 1,3,1,3,2,3,2,1,0,2,3,2,3,2,0,1,3,1,3,0,2,0,2,0,1,3,1,3,1,0 | 0,599,1055,1231,1648,1979,2064,2889,3110,3485,3717,3976,4354,4598,4939,5212,5409,5627,5764,6066,6161,6302,6375,6612,7412,7546,8075,8301,9695,9908
11 | 1,0,2,0,1,3,2,0,2,1,3,2,3,0,1,0,2,0,2,3,2,0,1,0,1,0,2,0,1,0,2,3,2 | 0,176,562,878,1153,1508,1815,2752,2840,3064,3289,3662,3832,4063,4680,4812,5349,5600,5843,6567,6892,7129,7323,7441,7504,7576,8057,8690,8975,9238,9329,9706,9809
12 | 1,0,1,3,2,1,3,2,0,1,0,2,0,1,0,3,2,0,1,0,1,0,1,0,1,0,2,3,2,3,2,0,1,3 | 0,233,357,606,1068,1597,1839,2464,2860,3102,3165,3397,3586,3729,4423,4915,5236,5424,5582,5932,6124,6607,6671,6843,7085,7193,7424,7694,7867,8180,8565,8720,8962,9758
13 | 1,3,2,3,0,2,3,2,0,2,0,1,0,2,0,1,0,2,0,2,0,2,1,0,2,0,2,0,3 | 0,289,1357,1867,2123,2587,2921,3119,3261,3371,3748,4089,4157,4246,4733,5235,5428,6348,6645,7150,7340,7417,8529,8704,9165,9259,9354,9589,9909
14 | 2,0,1,0,1,0,1,0,1,3,2,3,1,0,2,0,2,3,2,3,2,0,2,0,1,0,2,0,2,0 | 0,286,734,1075,1175,1242,1339,1416,2263,2597,2909,3528,3955,4203,4659,4720,4798,5172,6076,6332,6579,7233,7301,8038,8445,8494,8734,9091,9713,9937
15 | 2,0,1,0,1,0,1,0,2,0,2,0,3,2,3,2,3,2,3,2,0,2,0,2,0,2,0,1,3,2,3 | 0,312,816,1036,1134,1495,1583,2037,2345,2453,2509,2686,3061,3189,4357,4702,4986,5961,6432,6514,6711,7323,7429,7618,7683,7999,8238,8756,8929,9410,9618
16 | 2,0,2,3,2,3,2,0,1,0,1,0,1,0,3,2,3,0,3,2,0,1,0,2,0,2,3,0,1,0,2,3,2,0,2,3,2,0,2 | 0,76,148,519,682,1021,1452,1681,2339,2393,2456,2549,2595,2711,3005,3265,3400,3864,4090,4309,4492,5037,5409,6001,6481,6568,6890,7100,7425,8077,8175,8400,8517,8652,8788,8941,9190,9437,9673
17 | 2,0,2,0,1,3,2,0,2,3,2,0,1,0,1,0,2,0,1,0,1,3,1,3,2,0,2,0,2,3,2,0,2,0,2,3 | 0,273,345,414,541,956,1801,1949,2693,2771,3541,3877,4131,4229,4278,4336,5600,5665,5836,6495,6988,7135,7568,7699,8288,8373,8447,8526,8587,8811,8895,9153,9211,9309,9615,9841
18 | 3,0,2,0,2,3,2,3,2,1,3,2,3,2,0,2,3,2,3,2,0,2,1,0,3,1,3,1,3 | 0,290,688,1010,1072,1782,2147,2439,3618,3817,4009,4242,4390,4621,5696,5778,6078,6165,6819,7267,7367,7597,7832,8174,8755,9180,9391,9642,9831
19 | 3,2,0,1,3,2,3,2,0,1,0,1,0,1,3,2,3,2,0,1,0,3,1,0,1,0,1,0,1,0,1,3,2,0,2,0,2,3,1 | 0,213,432,784,853,1055,1252,1351,1510,1702,1898,1956,2341,2753,2931,3287,3381,3439,3634,3881,3991,4225,4968,5335,5484,5675,5761,5822,6001,6469,7037,7146,7306,7445,7700,8764,8821,8925,9518
20 | 3,2,1,0,1,3,2,0,2,0,1,3,0,2,0,2,1,0,1,3,2,0,1,2,3,2,3,2,3,2,3 | 0,574,791,874,1186,1974,2391,2661,2730,2838,3039,3338,3606,3688,3793,3843,4127,4622,5612,5751,6625,7019,7684,8132,8200,8256,8474,8648,9007,9351,9504
`;