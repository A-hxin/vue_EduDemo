<template>
  <div style="width: 100%; height: 170px" ref="chart"></div>
</template>
    
    <script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      chartData: [
        {
          score: "750-691",
          currentCount: 31,
          cumulativeCount: 31,
        },
        {
          score: "690",
          currentCount: 7,
          cumulativeCount: 38,
        },
        {
          score: "689",
          currentCount: 11,
          cumulativeCount: 49,
        },
        {
          score: "688",
          currentCount: 6,
          cumulativeCount: 55,
        },
        {
          score: "687",
          currentCount: 12,
          cumulativeCount: 67,
        },
        {
          score: "686",
          currentCount: 6,
          cumulativeCount: 73,
        },
        {
          score: "685",
          currentCount: 12,
          cumulativeCount: 85,
        },
        {
          score: "684",
          currentCount: 15,
          cumulativeCount: 100,
        },
        {
          score: "683",
          currentCount: 9,
          cumulativeCount: 109,
        },
        {
          score: "682",
          currentCount: 13,
          cumulativeCount: 122,
        },
        {
          score: "681",
          currentCount: 20,
          cumulativeCount: 142,
        },
        {
          score: "680",
          currentCount: 21,
          cumulativeCount: 163,
        },
        {
          score: "679",
          currentCount: 19,
          cumulativeCount: 182,
        },
        {
          score: "678",
          currentCount: 30,
          cumulativeCount: 212,
        },
        {
          score: "677",
          currentCount: 33,
          cumulativeCount: 245,
        },
        {
          score: "676",
          currentCount: 20,
          cumulativeCount: 265,
        },
        {
          score: "675",
          currentCount: 29,
          cumulativeCount: 294,
        },
        {
          score: "674",
          currentCount: 32,
          cumulativeCount: 326,
        },
        {
          score: "673",
          currentCount: 30,
          cumulativeCount: 356,
        },
        {
          score: "672",
          currentCount: 28,
          cumulativeCount: 384,
        },
        {
          score: "671",
          currentCount: 32,
          cumulativeCount: 416,
        },
        {
          score: "670",
          currentCount: 37,
          cumulativeCount: 453,
        },
        {
          score: "669",
          currentCount: 55,
          cumulativeCount: 508,
        },
        {
          score: "668",
          currentCount: 40,
          cumulativeCount: 548,
        },
        {
          score: "667",
          currentCount: 60,
          cumulativeCount: 608,
        },
        {
          score: "666",
          currentCount: 58,
          cumulativeCount: 666,
        },
        {
          score: "665",
          currentCount: 59,
          cumulativeCount: 725,
        },
        {
          score: "664",
          currentCount: 60,
          cumulativeCount: 785,
        },
        {
          score: "663",
          currentCount: 60,
          cumulativeCount: 845,
        },
        {
          score: "662",
          currentCount: 62,
          cumulativeCount: 907,
        },
        {
          score: "661",
          currentCount: 62,
          cumulativeCount: 969,
        },
        {
          score: "660",
          currentCount: 74,
          cumulativeCount: 1043,
        },
        {
          score: "659",
          currentCount: 67,
          cumulativeCount: 1110,
        },
        {
          score: "658",
          currentCount: 71,
          cumulativeCount: 1181,
        },
        {
          score: "657",
          currentCount: 85,
          cumulativeCount: 1266,
        },
        {
          score: "656",
          currentCount: 94,
          cumulativeCount: 1360,
        },
        {
          score: "655",
          currentCount: 103,
          cumulativeCount: 1463,
        },
        {
          score: "654",
          currentCount: 95,
          cumulativeCount: 1558,
        },
        {
          score: "653",
          currentCount: 102,
          cumulativeCount: 1660,
        },
        {
          score: "652",
          currentCount: 92,
          cumulativeCount: 1752,
        },
        {
          score: "651",
          currentCount: 110,
          cumulativeCount: 1862,
        },
        {
          score: "650",
          currentCount: 122,
          cumulativeCount: 1984,
        },
        {
          score: "649",
          currentCount: 126,
          cumulativeCount: 2110,
        },
        {
          score: "648",
          currentCount: 126,
          cumulativeCount: 2236,
        },
        {
          score: "647",
          currentCount: 132,
          cumulativeCount: 2368,
        },
        {
          score: "646",
          currentCount: 146,
          cumulativeCount: 2514,
        },
        {
          score: "645",
          currentCount: 129,
          cumulativeCount: 2643,
        },
        {
          score: "644",
          currentCount: 143,
          cumulativeCount: 2786,
        },
        {
          score: "643",
          currentCount: 155,
          cumulativeCount: 2941,
        },
        {
          score: "642",
          currentCount: 165,
          cumulativeCount: 3106,
        },
        {
          score: "641",
          currentCount: 165,
          cumulativeCount: 3271,
        },
        {
          score: "640",
          currentCount: 179,
          cumulativeCount: 3450,
        },
        {
          score: "639",
          currentCount: 165,
          cumulativeCount: 3615,
        },
        {
          score: "638",
          currentCount: 170,
          cumulativeCount: 3785,
        },
        {
          score: "637",
          currentCount: 190,
          cumulativeCount: 3975,
        },
        {
          score: "636",
          currentCount: 212,
          cumulativeCount: 4187,
        },
        {
          score: "635",
          currentCount: 211,
          cumulativeCount: 4398,
        },
        {
          score: "634",
          currentCount: 195,
          cumulativeCount: 4593,
        },
        {
          score: "633",
          currentCount: 203,
          cumulativeCount: 4796,
        },
        {
          score: "632",
          currentCount: 213,
          cumulativeCount: 5009,
        },
        {
          score: "631",
          currentCount: 218,
          cumulativeCount: 5227,
        },
        {
          score: "630",
          currentCount: 222,
          cumulativeCount: 5449,
        },
        {
          score: "629",
          currentCount: 237,
          cumulativeCount: 5686,
        },
        {
          score: "628",
          currentCount: 211,
          cumulativeCount: 5897,
        },
        {
          score: "627",
          currentCount: 253,
          cumulativeCount: 6150,
        },
        {
          score: "626",
          currentCount: 280,
          cumulativeCount: 6430,
        },
        {
          score: "625",
          currentCount: 268,
          cumulativeCount: 6698,
        },
        {
          score: "624",
          currentCount: 270,
          cumulativeCount: 6968,
        },
        {
          score: "623",
          currentCount: 254,
          cumulativeCount: 7222,
        },
        {
          score: "622",
          currentCount: 291,
          cumulativeCount: 7513,
        },
        {
          score: "621",
          currentCount: 292,
          cumulativeCount: 7805,
        },
        {
          score: "620",
          currentCount: 284,
          cumulativeCount: 8089,
        },
        {
          score: "619",
          currentCount: 299,
          cumulativeCount: 8388,
        },
        {
          score: "618",
          currentCount: 315,
          cumulativeCount: 8703,
        },
        {
          score: "617",
          currentCount: 301,
          cumulativeCount: 9004,
        },
        {
          score: "616",
          currentCount: 335,
          cumulativeCount: 9339,
        },
        {
          score: "615",
          currentCount: 339,
          cumulativeCount: 9678,
        },
        {
          score: "614",
          currentCount: 342,
          cumulativeCount: 10020,
        },
        {
          score: "613",
          currentCount: 340,
          cumulativeCount: 10360,
        },
        {
          score: "612",
          currentCount: 358,
          cumulativeCount: 10718,
        },
        {
          score: "611",
          currentCount: 353,
          cumulativeCount: 11071,
        },
        {
          score: "610",
          currentCount: 410,
          cumulativeCount: 11481,
        },
        {
          score: "609",
          currentCount: 402,
          cumulativeCount: 11883,
        },
        {
          score: "608",
          currentCount: 404,
          cumulativeCount: 12287,
        },
        {
          score: "607",
          currentCount: 413,
          cumulativeCount: 12700,
        },
        {
          score: "606",
          currentCount: 451,
          cumulativeCount: 13151,
        },
        {
          score: "605",
          currentCount: 436,
          cumulativeCount: 13587,
        },
        {
          score: "604",
          currentCount: 419,
          cumulativeCount: 14006,
        },
        {
          score: "603",
          currentCount: 377,
          cumulativeCount: 14383,
        },
        {
          score: "602",
          currentCount: 421,
          cumulativeCount: 14804,
        },
        {
          score: "601",
          currentCount: 427,
          cumulativeCount: 15231,
        },
        {
          score: "600",
          currentCount: 456,
          cumulativeCount: 15687,
        },
        {
          score: "599",
          currentCount: 448,
          cumulativeCount: 16135,
        },
        {
          score: "598",
          currentCount: 454,
          cumulativeCount: 16589,
        },
        {
          score: "597",
          currentCount: 450,
          cumulativeCount: 17039,
        },
        {
          score: "596",
          currentCount: 468,
          cumulativeCount: 17507,
        },
        {
          score: "595",
          currentCount: 497,
          cumulativeCount: 18004,
        },
        {
          score: "594",
          currentCount: 446,
          cumulativeCount: 18450,
        },
        {
          score: "593",
          currentCount: 528,
          cumulativeCount: 18978,
        },
        {
          score: "592",
          currentCount: 534,
          cumulativeCount: 19512,
        },
        {
          score: "591",
          currentCount: 545,
          cumulativeCount: 20057,
        },
        {
          score: "590",
          currentCount: 550,
          cumulativeCount: 20607,
        },
        {
          score: "589",
          currentCount: 552,
          cumulativeCount: 21159,
        },
        {
          score: "588",
          currentCount: 532,
          cumulativeCount: 21691,
        },
        {
          score: "587",
          currentCount: 541,
          cumulativeCount: 22232,
        },
        {
          score: "586",
          currentCount: 593,
          cumulativeCount: 22825,
        },
        {
          score: "585",
          currentCount: 528,
          cumulativeCount: 23353,
        },
        {
          score: "584",
          currentCount: 594,
          cumulativeCount: 23947,
        },
        {
          score: "583",
          currentCount: 572,
          cumulativeCount: 24519,
        },
        {
          score: "582",
          currentCount: 574,
          cumulativeCount: 25093,
        },
        {
          score: "581",
          currentCount: 584,
          cumulativeCount: 25677,
        },
        {
          score: "580",
          currentCount: 644,
          cumulativeCount: 26321,
        },
        {
          score: "579",
          currentCount: 628,
          cumulativeCount: 26949,
        },
        {
          score: "578",
          currentCount: 622,
          cumulativeCount: 27571,
        },
        {
          score: "577",
          currentCount: 666,
          cumulativeCount: 28237,
        },
        {
          score: "576",
          currentCount: 654,
          cumulativeCount: 28891,
        },
        {
          score: "575",
          currentCount: 625,
          cumulativeCount: 29516,
        },
        {
          score: "574",
          currentCount: 628,
          cumulativeCount: 30144,
        },
        {
          score: "573",
          currentCount: 698,
          cumulativeCount: 30842,
        },
        {
          score: "572",
          currentCount: 653,
          cumulativeCount: 31495,
        },
        {
          score: "571",
          currentCount: 640,
          cumulativeCount: 32135,
        },
        {
          score: "570",
          currentCount: 668,
          cumulativeCount: 32803,
        },
        {
          score: "569",
          currentCount: 653,
          cumulativeCount: 33456,
        },
        {
          score: "568",
          currentCount: 738,
          cumulativeCount: 34194,
        },
        {
          score: "567",
          currentCount: 716,
          cumulativeCount: 34910,
        },
        {
          score: "566",
          currentCount: 717,
          cumulativeCount: 35627,
        },
        {
          score: "565",
          currentCount: 688,
          cumulativeCount: 36315,
        },
        {
          score: "564",
          currentCount: 763,
          cumulativeCount: 37078,
        },
        {
          score: "563",
          currentCount: 718,
          cumulativeCount: 37796,
        },
        {
          score: "562",
          currentCount: 804,
          cumulativeCount: 38600,
        },
        {
          score: "561",
          currentCount: 766,
          cumulativeCount: 39366,
        },
        {
          score: "560",
          currentCount: 758,
          cumulativeCount: 40124,
        },
        {
          score: "559",
          currentCount: 727,
          cumulativeCount: 40851,
        },
        {
          score: "558",
          currentCount: 774,
          cumulativeCount: 41625,
        },
        {
          score: "557",
          currentCount: 806,
          cumulativeCount: 42431,
        },
        {
          score: "556",
          currentCount: 734,
          cumulativeCount: 43165,
        },
        {
          score: "555",
          currentCount: 811,
          cumulativeCount: 43976,
        },
        {
          score: "554",
          currentCount: 818,
          cumulativeCount: 44794,
        },
        {
          score: "553",
          currentCount: 833,
          cumulativeCount: 45627,
        },
        {
          score: "552",
          currentCount: 809,
          cumulativeCount: 46436,
        },
        {
          score: "551",
          currentCount: 859,
          cumulativeCount: 47295,
        },
        {
          score: "550",
          currentCount: 882,
          cumulativeCount: 48177,
        },
        {
          score: "549",
          currentCount: 896,
          cumulativeCount: 49073,
        },
        {
          score: "548",
          currentCount: 846,
          cumulativeCount: 49919,
        },
        {
          score: "547",
          currentCount: 879,
          cumulativeCount: 50798,
        },
        {
          score: "546",
          currentCount: 815,
          cumulativeCount: 51613,
        },
        {
          score: "545",
          currentCount: 883,
          cumulativeCount: 52496,
        },
        {
          score: "544",
          currentCount: 847,
          cumulativeCount: 53343,
        },
        {
          score: "543",
          currentCount: 924,
          cumulativeCount: 54267,
        },
        {
          score: "542",
          currentCount: 867,
          cumulativeCount: 55134,
        },
        {
          score: "541",
          currentCount: 930,
          cumulativeCount: 56064,
        },
        {
          score: "540",
          currentCount: 853,
          cumulativeCount: 56917,
        },
        {
          score: "539",
          currentCount: 912,
          cumulativeCount: 57829,
        },
        {
          score: "538",
          currentCount: 951,
          cumulativeCount: 58780,
        },
        {
          score: "537",
          currentCount: 950,
          cumulativeCount: 59730,
        },
        {
          score: "536",
          currentCount: 923,
          cumulativeCount: 60653,
        },
        {
          score: "535",
          currentCount: 998,
          cumulativeCount: 61651,
        },
        {
          score: "534",
          currentCount: 962,
          cumulativeCount: 62613,
        },
        {
          score: "533",
          currentCount: 971,
          cumulativeCount: 63584,
        },
        {
          score: "532",
          currentCount: 1033,
          cumulativeCount: 64617,
        },
        {
          score: "531",
          currentCount: 949,
          cumulativeCount: 65566,
        },
        {
          score: "530",
          currentCount: 944,
          cumulativeCount: 66510,
        },
        {
          score: "529",
          currentCount: 1045,
          cumulativeCount: 67555,
        },
        {
          score: "528",
          currentCount: 1029,
          cumulativeCount: 68584,
        },
        {
          score: "527",
          currentCount: 1058,
          cumulativeCount: 69642,
        },
        {
          score: "526",
          currentCount: 983,
          cumulativeCount: 70625,
        },
        {
          score: "525",
          currentCount: 1045,
          cumulativeCount: 71670,
        },
        {
          score: "524",
          currentCount: 1051,
          cumulativeCount: 72721,
        },
        {
          score: "523",
          currentCount: 1053,
          cumulativeCount: 73774,
        },
        {
          score: "522",
          currentCount: 1060,
          cumulativeCount: 74834,
        },
        {
          score: "521",
          currentCount: 1101,
          cumulativeCount: 75935,
        },
        {
          score: "520",
          currentCount: 1047,
          cumulativeCount: 76982,
        },
        {
          score: "519",
          currentCount: 1096,
          cumulativeCount: 78078,
        },
        {
          score: "518",
          currentCount: 1120,
          cumulativeCount: 79198,
        },
        {
          score: "517",
          currentCount: 1167,
          cumulativeCount: 80365,
        },
        {
          score: "516",
          currentCount: 1103,
          cumulativeCount: 81468,
        },
        {
          score: "515",
          currentCount: 1120,
          cumulativeCount: 82588,
        },
        {
          score: "514",
          currentCount: 1151,
          cumulativeCount: 83739,
        },
        {
          score: "513",
          currentCount: 1174,
          cumulativeCount: 84913,
        },
        {
          score: "512",
          currentCount: 1106,
          cumulativeCount: 86019,
        },
        {
          score: "511",
          currentCount: 1118,
          cumulativeCount: 87137,
        },
        {
          score: "510",
          currentCount: 1169,
          cumulativeCount: 88306,
        },
        {
          score: "509",
          currentCount: 1201,
          cumulativeCount: 89507,
        },
        {
          score: "508",
          currentCount: 1180,
          cumulativeCount: 90687,
        },
        {
          score: "507",
          currentCount: 1181,
          cumulativeCount: 91868,
        },
        {
          score: "506",
          currentCount: 1234,
          cumulativeCount: 93102,
        },
        {
          score: "505",
          currentCount: 1155,
          cumulativeCount: 94257,
        },
        {
          score: "504",
          currentCount: 1188,
          cumulativeCount: 95445,
        },
        {
          score: "503",
          currentCount: 1218,
          cumulativeCount: 96663,
        },
        {
          score: "502",
          currentCount: 1261,
          cumulativeCount: 97924,
        },
        {
          score: "501",
          currentCount: 1242,
          cumulativeCount: 99166,
        },
        {
          score: "500",
          currentCount: 1199,
          cumulativeCount: 100365,
        },
        {
          score: "499",
          currentCount: 1215,
          cumulativeCount: 101580,
        },
        {
          score: "498",
          currentCount: 1229,
          cumulativeCount: 102809,
        },
        {
          score: "497",
          currentCount: 1240,
          cumulativeCount: 104049,
        },
        {
          score: "496",
          currentCount: 1245,
          cumulativeCount: 105294,
        },
        {
          score: "495",
          currentCount: 1292,
          cumulativeCount: 106586,
        },
        {
          score: "494",
          currentCount: 1311,
          cumulativeCount: 107897,
        },
        {
          score: "493",
          currentCount: 1277,
          cumulativeCount: 109174,
        },
        {
          score: "492",
          currentCount: 1276,
          cumulativeCount: 110450,
        },
        {
          score: "491",
          currentCount: 1372,
          cumulativeCount: 111822,
        },
        {
          score: "490",
          currentCount: 1234,
          cumulativeCount: 113056,
        },
        {
          score: "489",
          currentCount: 1280,
          cumulativeCount: 114336,
        },
        {
          score: "488",
          currentCount: 1258,
          cumulativeCount: 115594,
        },
        {
          score: "487",
          currentCount: 1236,
          cumulativeCount: 116830,
        },
        {
          score: "486",
          currentCount: 1322,
          cumulativeCount: 118152,
        },
        {
          score: "485",
          currentCount: 1328,
          cumulativeCount: 119480,
        },
        {
          score: "484",
          currentCount: 1296,
          cumulativeCount: 120776,
        },
        {
          score: "483",
          currentCount: 1343,
          cumulativeCount: 122119,
        },
        {
          score: "482",
          currentCount: 1311,
          cumulativeCount: 123430,
        },
        {
          score: "481",
          currentCount: 1380,
          cumulativeCount: 124810,
        },
        {
          score: "480",
          currentCount: 1367,
          cumulativeCount: 126177,
        },
        {
          score: "479",
          currentCount: 1358,
          cumulativeCount: 127535,
        },
        {
          score: "478",
          currentCount: 1322,
          cumulativeCount: 128857,
        },
        {
          score: "477",
          currentCount: 1365,
          cumulativeCount: 130222,
        },
        {
          score: "476",
          currentCount: 1301,
          cumulativeCount: 131523,
        },
        {
          score: "475",
          currentCount: 1373,
          cumulativeCount: 132896,
        },
        {
          score: "474",
          currentCount: 1344,
          cumulativeCount: 134240,
        },
        {
          score: "473",
          currentCount: 1342,
          cumulativeCount: 135582,
        },
        {
          score: "472",
          currentCount: 1377,
          cumulativeCount: 136959,
        },
        {
          score: "471",
          currentCount: 1396,
          cumulativeCount: 138355,
        },
        {
          score: "470",
          currentCount: 1352,
          cumulativeCount: 139707,
        },
        {
          score: "469",
          currentCount: 1401,
          cumulativeCount: 141108,
        },
        {
          score: "468",
          currentCount: 1371,
          cumulativeCount: 142479,
        },
        {
          score: "467",
          currentCount: 1360,
          cumulativeCount: 143839,
        },
        {
          score: "466",
          currentCount: 1367,
          cumulativeCount: 145206,
        },
        {
          score: "465",
          currentCount: 1455,
          cumulativeCount: 146661,
        },
        {
          score: "464",
          currentCount: 1402,
          cumulativeCount: 148063,
        },
        {
          score: "463",
          currentCount: 1414,
          cumulativeCount: 149477,
        },
        {
          score: "462",
          currentCount: 1468,
          cumulativeCount: 150945,
        },
        {
          score: "461",
          currentCount: 1417,
          cumulativeCount: 152362,
        },
        {
          score: "460",
          currentCount: 1436,
          cumulativeCount: 153798,
        },
        {
          score: "459",
          currentCount: 1460,
          cumulativeCount: 155258,
        },
        {
          score: "458",
          currentCount: 1434,
          cumulativeCount: 156692,
        },
        {
          score: "457",
          currentCount: 1389,
          cumulativeCount: 158081,
        },
        {
          score: "456",
          currentCount: 1413,
          cumulativeCount: 159494,
        },
        {
          score: "455",
          currentCount: 1425,
          cumulativeCount: 160919,
        },
        {
          score: "454",
          currentCount: 1390,
          cumulativeCount: 162309,
        },
        {
          score: "453",
          currentCount: 1404,
          cumulativeCount: 163713,
        },
        {
          score: "452",
          currentCount: 1412,
          cumulativeCount: 165125,
        },
        {
          score: "451",
          currentCount: 1383,
          cumulativeCount: 166508,
        },
        {
          score: "450",
          currentCount: 1423,
          cumulativeCount: 167931,
        },
        {
          score: "449",
          currentCount: 1392,
          cumulativeCount: 169323,
        },
        {
          score: "448",
          currentCount: 1447,
          cumulativeCount: 170770,
        },
        {
          score: "447",
          currentCount: 1415,
          cumulativeCount: 172185,
        },
        {
          score: "446",
          currentCount: 1452,
          cumulativeCount: 173637,
        },
        {
          score: "445",
          currentCount: 1451,
          cumulativeCount: 175088,
        },
        {
          score: "444",
          currentCount: 1441,
          cumulativeCount: 176529,
        },
        {
          score: "443",
          currentCount: 1436,
          cumulativeCount: 177965,
        },
        {
          score: "442",
          currentCount: 1368,
          cumulativeCount: 179333,
        },
        {
          score: "441",
          currentCount: 1405,
          cumulativeCount: 180738,
        },
        {
          score: "440",
          currentCount: 1368,
          cumulativeCount: 182106,
        },
        {
          score: "439",
          currentCount: 1416,
          cumulativeCount: 183522,
        },
        {
          score: "438",
          currentCount: 1410,
          cumulativeCount: 184932,
        },
        {
          score: "437",
          currentCount: 1446,
          cumulativeCount: 186378,
        },
        {
          score: "436",
          currentCount: 1403,
          cumulativeCount: 187781,
        },
        {
          score: "435",
          currentCount: 1392,
          cumulativeCount: 189173,
        },
        {
          score: "434",
          currentCount: 1366,
          cumulativeCount: 190539,
        },
        {
          score: "433",
          currentCount: 1376,
          cumulativeCount: 191915,
        },
        {
          score: "432",
          currentCount: 1383,
          cumulativeCount: 193298,
        },
        {
          score: "431",
          currentCount: 1298,
          cumulativeCount: 194596,
        },
        {
          score: "430",
          currentCount: 1450,
          cumulativeCount: 196046,
        },
        {
          score: "429",
          currentCount: 1328,
          cumulativeCount: 197374,
        },
        {
          score: "428",
          currentCount: 1321,
          cumulativeCount: 198695,
        },
        {
          score: "427",
          currentCount: 1346,
          cumulativeCount: 200041,
        },
        {
          score: "426",
          currentCount: 1442,
          cumulativeCount: 201483,
        },
        {
          score: "425",
          currentCount: 1350,
          cumulativeCount: 202833,
        },
        {
          score: "424",
          currentCount: 1305,
          cumulativeCount: 204138,
        },
        {
          score: "423",
          currentCount: 1296,
          cumulativeCount: 205434,
        },
        {
          score: "422",
          currentCount: 1294,
          cumulativeCount: 206728,
        },
        {
          score: "421",
          currentCount: 1312,
          cumulativeCount: 208040,
        },
        {
          score: "420",
          currentCount: 1293,
          cumulativeCount: 209333,
        },
        {
          score: "419",
          currentCount: 1375,
          cumulativeCount: 210708,
        },
        {
          score: "418",
          currentCount: 1291,
          cumulativeCount: 211999,
        },
        {
          score: "417",
          currentCount: 1295,
          cumulativeCount: 213294,
        },
        {
          score: "416",
          currentCount: 1310,
          cumulativeCount: 214604,
        },
        {
          score: "415",
          currentCount: 1298,
          cumulativeCount: 215902,
        },
        {
          score: "414",
          currentCount: 1368,
          cumulativeCount: 217270,
        },
        {
          score: "413",
          currentCount: 1297,
          cumulativeCount: 218567,
        },
        {
          score: "412",
          currentCount: 1282,
          cumulativeCount: 219849,
        },
        {
          score: "411",
          currentCount: 1307,
          cumulativeCount: 221156,
        },
        {
          score: "410",
          currentCount: 1325,
          cumulativeCount: 222481,
        },
        {
          score: "409",
          currentCount: 1301,
          cumulativeCount: 223782,
        },
        {
          score: "408",
          currentCount: 1270,
          cumulativeCount: 225052,
        },
        {
          score: "407",
          currentCount: 1276,
          cumulativeCount: 226328,
        },
        {
          score: "406",
          currentCount: 1294,
          cumulativeCount: 227622,
        },
        {
          score: "405",
          currentCount: 1175,
          cumulativeCount: 228797,
        },
        {
          score: "404",
          currentCount: 1308,
          cumulativeCount: 230105,
        },
        {
          score: "403",
          currentCount: 1225,
          cumulativeCount: 231330,
        },
        {
          score: "402",
          currentCount: 1305,
          cumulativeCount: 232635,
        },
        {
          score: "401",
          currentCount: 1191,
          cumulativeCount: 233826,
        },
        {
          score: "400",
          currentCount: 1216,
          cumulativeCount: 235042,
        },
        {
          score: "399",
          currentCount: 1221,
          cumulativeCount: 236263,
        },
        {
          score: "398",
          currentCount: 1232,
          cumulativeCount: 237495,
        },
        {
          score: "397",
          currentCount: 1229,
          cumulativeCount: 238724,
        },
        {
          score: "396",
          currentCount: 1217,
          cumulativeCount: 239941,
        },
        {
          score: "395",
          currentCount: 1201,
          cumulativeCount: 241142,
        },
        {
          score: "394",
          currentCount: 1222,
          cumulativeCount: 242364,
        },
        {
          score: "393",
          currentCount: 1114,
          cumulativeCount: 243478,
        },
        {
          score: "392",
          currentCount: 1167,
          cumulativeCount: 244645,
        },
        {
          score: "391",
          currentCount: 1126,
          cumulativeCount: 245771,
        },
        {
          score: "390",
          currentCount: 1219,
          cumulativeCount: 246990,
        },
        {
          score: "389",
          currentCount: 1084,
          cumulativeCount: 248074,
        },
        {
          score: "388",
          currentCount: 1094,
          cumulativeCount: 249168,
        },
        {
          score: "387",
          currentCount: 1109,
          cumulativeCount: 250277,
        },
        {
          score: "386",
          currentCount: 1048,
          cumulativeCount: 251325,
        },
        {
          score: "385",
          currentCount: 1120,
          cumulativeCount: 252445,
        },
        {
          score: "384",
          currentCount: 1059,
          cumulativeCount: 253504,
        },
        {
          score: "383",
          currentCount: 1123,
          cumulativeCount: 254627,
        },
        {
          score: "382",
          currentCount: 1104,
          cumulativeCount: 255731,
        },
        {
          score: "381",
          currentCount: 1077,
          cumulativeCount: 256808,
        },
        {
          score: "380",
          currentCount: 1070,
          cumulativeCount: 257878,
        },
        {
          score: "379",
          currentCount: 1062,
          cumulativeCount: 258940,
        },
        {
          score: "378",
          currentCount: 1021,
          cumulativeCount: 259961,
        },
        {
          score: "377",
          currentCount: 994,
          cumulativeCount: 260955,
        },
        {
          score: "376",
          currentCount: 1057,
          cumulativeCount: 262012,
        },
        {
          score: "375",
          currentCount: 1022,
          cumulativeCount: 263034,
        },
        {
          score: "374",
          currentCount: 1033,
          cumulativeCount: 264067,
        },
        {
          score: "373",
          currentCount: 1011,
          cumulativeCount: 265078,
        },
        {
          score: "372",
          currentCount: 995,
          cumulativeCount: 266073,
        },
        {
          score: "371",
          currentCount: 955,
          cumulativeCount: 267028,
        },
        {
          score: "370",
          currentCount: 933,
          cumulativeCount: 267961,
        },
        {
          score: "369",
          currentCount: 972,
          cumulativeCount: 268933,
        },
        {
          score: "368",
          currentCount: 951,
          cumulativeCount: 269884,
        },
        {
          score: "367",
          currentCount: 941,
          cumulativeCount: 270825,
        },
        {
          score: "366",
          currentCount: 900,
          cumulativeCount: 271725,
        },
        {
          score: "365",
          currentCount: 950,
          cumulativeCount: 272675,
        },
        {
          score: "364",
          currentCount: 932,
          cumulativeCount: 273607,
        },
        {
          score: "363",
          currentCount: 920,
          cumulativeCount: 274527,
        },
        {
          score: "362",
          currentCount: 855,
          cumulativeCount: 275382,
        },
        {
          score: "361",
          currentCount: 857,
          cumulativeCount: 276239,
        },
        {
          score: "360",
          currentCount: 875,
          cumulativeCount: 277114,
        },
        {
          score: "359",
          currentCount: 862,
          cumulativeCount: 277976,
        },
        {
          score: "358",
          currentCount: 799,
          cumulativeCount: 278775,
        },
        {
          score: "357",
          currentCount: 830,
          cumulativeCount: 279605,
        },
        {
          score: "356",
          currentCount: 863,
          cumulativeCount: 280468,
        },
        {
          score: "355",
          currentCount: 839,
          cumulativeCount: 281307,
        },
        {
          score: "354",
          currentCount: 776,
          cumulativeCount: 282083,
        },
        {
          score: "353",
          currentCount: 811,
          cumulativeCount: 282894,
        },
        {
          score: "352",
          currentCount: 820,
          cumulativeCount: 283714,
        },
        {
          score: "351",
          currentCount: 814,
          cumulativeCount: 284528,
        },
        {
          score: "350",
          currentCount: 789,
          cumulativeCount: 285317,
        },
        {
          score: "349",
          currentCount: 786,
          cumulativeCount: 286103,
        },
        {
          score: "348",
          currentCount: 781,
          cumulativeCount: 286884,
        },
        {
          score: "347",
          currentCount: 784,
          cumulativeCount: 287668,
        },
        {
          score: "346",
          currentCount: 780,
          cumulativeCount: 288448,
        },
        {
          score: "345",
          currentCount: 703,
          cumulativeCount: 289151,
        },
        {
          score: "344",
          currentCount: 769,
          cumulativeCount: 289920,
        },
        {
          score: "343",
          currentCount: 756,
          cumulativeCount: 290676,
        },
        {
          score: "342",
          currentCount: 737,
          cumulativeCount: 291413,
        },
        {
          score: "341",
          currentCount: 653,
          cumulativeCount: 292066,
        },
        {
          score: "340",
          currentCount: 664,
          cumulativeCount: 292730,
        },
        {
          score: "339",
          currentCount: 655,
          cumulativeCount: 293385,
        },
        {
          score: "338",
          currentCount: 695,
          cumulativeCount: 294080,
        },
        {
          score: "337",
          currentCount: 665,
          cumulativeCount: 294745,
        },
        {
          score: "336",
          currentCount: 639,
          cumulativeCount: 295384,
        },
        {
          score: "335",
          currentCount: 621,
          cumulativeCount: 296005,
        },
        {
          score: "334",
          currentCount: 641,
          cumulativeCount: 296646,
        },
        {
          score: "333",
          currentCount: 635,
          cumulativeCount: 297281,
        },
        {
          score: "332",
          currentCount: 650,
          cumulativeCount: 297931,
        },
        {
          score: "331",
          currentCount: 625,
          cumulativeCount: 298556,
        },
        {
          score: "330",
          currentCount: 614,
          cumulativeCount: 299170,
        },
        {
          score: "329",
          currentCount: 625,
          cumulativeCount: 299795,
        },
        {
          score: "328",
          currentCount: 595,
          cumulativeCount: 300390,
        },
        {
          score: "327",
          currentCount: 568,
          cumulativeCount: 300958,
        },
        {
          score: "326",
          currentCount: 604,
          cumulativeCount: 301562,
        },
        {
          score: "325",
          currentCount: 574,
          cumulativeCount: 302136,
        },
        {
          score: "324",
          currentCount: 568,
          cumulativeCount: 302704,
        },
        {
          score: "323",
          currentCount: 525,
          cumulativeCount: 303229,
        },
        {
          score: "322",
          currentCount: 581,
          cumulativeCount: 303810,
        },
        {
          score: "321",
          currentCount: 543,
          cumulativeCount: 304353,
        },
        {
          score: "320",
          currentCount: 540,
          cumulativeCount: 304893,
        },
        {
          score: "319",
          currentCount: 545,
          cumulativeCount: 305438,
        },
        {
          score: "318",
          currentCount: 497,
          cumulativeCount: 305935,
        },
        {
          score: "317",
          currentCount: 484,
          cumulativeCount: 306419,
        },
        {
          score: "316",
          currentCount: 531,
          cumulativeCount: 306950,
        },
        {
          score: "315",
          currentCount: 530,
          cumulativeCount: 307480,
        },
        {
          score: "314",
          currentCount: 501,
          cumulativeCount: 307981,
        },
        {
          score: "313",
          currentCount: 472,
          cumulativeCount: 308453,
        },
        {
          score: "312",
          currentCount: 502,
          cumulativeCount: 308955,
        },
        {
          score: "311",
          currentCount: 459,
          cumulativeCount: 309414,
        },
        {
          score: "310",
          currentCount: 433,
          cumulativeCount: 309847,
        },
        {
          score: "309",
          currentCount: 459,
          cumulativeCount: 310306,
        },
        {
          score: "308",
          currentCount: 448,
          cumulativeCount: 310754,
        },
        {
          score: "307",
          currentCount: 462,
          cumulativeCount: 311216,
        },
        {
          score: "306",
          currentCount: 463,
          cumulativeCount: 311679,
        },
        {
          score: "305",
          currentCount: 426,
          cumulativeCount: 312105,
        },
        {
          score: "304",
          currentCount: 425,
          cumulativeCount: 312530,
        },
        {
          score: "303",
          currentCount: 440,
          cumulativeCount: 312970,
        },
        {
          score: "302",
          currentCount: 416,
          cumulativeCount: 313386,
        },
        {
          score: "301",
          currentCount: 416,
          cumulativeCount: 313802,
        },
        {
          score: "300",
          currentCount: 395,
          cumulativeCount: 314197,
        },
        {
          score: "299",
          currentCount: 418,
          cumulativeCount: 314615,
        },
        {
          score: "298",
          currentCount: 390,
          cumulativeCount: 315005,
        },
        {
          score: "297",
          currentCount: 371,
          cumulativeCount: 315376,
        },
        {
          score: "296",
          currentCount: 387,
          cumulativeCount: 315763,
        },
        {
          score: "295",
          currentCount: 341,
          cumulativeCount: 316104,
        },
        {
          score: "294",
          currentCount: 370,
          cumulativeCount: 316474,
        },
        {
          score: "293",
          currentCount: 380,
          cumulativeCount: 316854,
        },
        {
          score: "292",
          currentCount: 339,
          cumulativeCount: 317193,
        },
        {
          score: "291",
          currentCount: 333,
          cumulativeCount: 317526,
        },
        {
          score: "290",
          currentCount: 328,
          cumulativeCount: 317854,
        },
        {
          score: "289",
          currentCount: 322,
          cumulativeCount: 318176,
        },
        {
          score: "288",
          currentCount: 342,
          cumulativeCount: 318518,
        },
        {
          score: "287",
          currentCount: 317,
          cumulativeCount: 318835,
        },
        {
          score: "286",
          currentCount: 341,
          cumulativeCount: 319176,
        },
        {
          score: "285",
          currentCount: 301,
          cumulativeCount: 319477,
        },
        {
          score: "284",
          currentCount: 311,
          cumulativeCount: 319788,
        },
        {
          score: "283",
          currentCount: 269,
          cumulativeCount: 320057,
        },
        {
          score: "282",
          currentCount: 296,
          cumulativeCount: 320353,
        },
        {
          score: "281",
          currentCount: 308,
          cumulativeCount: 320661,
        },
        {
          score: "280",
          currentCount: 270,
          cumulativeCount: 320931,
        },
        {
          score: "279",
          currentCount: 279,
          cumulativeCount: 321210,
        },
        {
          score: "278",
          currentCount: 299,
          cumulativeCount: 321509,
        },
        {
          score: "277",
          currentCount: 238,
          cumulativeCount: 321747,
        },
        {
          score: "276",
          currentCount: 289,
          cumulativeCount: 322036,
        },
        {
          score: "275",
          currentCount: 270,
          cumulativeCount: 322306,
        },
        {
          score: "274",
          currentCount: 242,
          cumulativeCount: 322548,
        },
        {
          score: "273",
          currentCount: 255,
          cumulativeCount: 322803,
        },
        {
          score: "272",
          currentCount: 236,
          cumulativeCount: 323039,
        },
        {
          score: "271",
          currentCount: 233,
          cumulativeCount: 323272,
        },
        {
          score: "270",
          currentCount: 221,
          cumulativeCount: 323493,
        },
        {
          score: "269",
          currentCount: 236,
          cumulativeCount: 323729,
        },
        {
          score: "268",
          currentCount: 238,
          cumulativeCount: 323967,
        },
        {
          score: "267",
          currentCount: 209,
          cumulativeCount: 324176,
        },
        {
          score: "266",
          currentCount: 235,
          cumulativeCount: 324411,
        },
        {
          score: "265",
          currentCount: 223,
          cumulativeCount: 324634,
        },
        {
          score: "264",
          currentCount: 225,
          cumulativeCount: 324859,
        },
        {
          score: "263",
          currentCount: 217,
          cumulativeCount: 325076,
        },
        {
          score: "262",
          currentCount: 235,
          cumulativeCount: 325311,
        },
        {
          score: "261",
          currentCount: 217,
          cumulativeCount: 325528,
        },
        {
          score: "260",
          currentCount: 197,
          cumulativeCount: 325725,
        },
        {
          score: "259",
          currentCount: 190,
          cumulativeCount: 325915,
        },
        {
          score: "258",
          currentCount: 179,
          cumulativeCount: 326094,
        },
        {
          score: "257",
          currentCount: 182,
          cumulativeCount: 326276,
        },
        {
          score: "256",
          currentCount: 171,
          cumulativeCount: 326447,
        },
        {
          score: "255",
          currentCount: 179,
          cumulativeCount: 326626,
        },
        {
          score: "254",
          currentCount: 164,
          cumulativeCount: 326790,
        },
        {
          score: "253",
          currentCount: 177,
          cumulativeCount: 326967,
        },
        {
          score: "252",
          currentCount: 178,
          cumulativeCount: 327145,
        },
        {
          score: "251",
          currentCount: 160,
          cumulativeCount: 327305,
        },
        {
          score: "250",
          currentCount: 164,
          cumulativeCount: 327469,
        },
        {
          score: "249",
          currentCount: 160,
          cumulativeCount: 327629,
        },
        {
          score: "248",
          currentCount: 146,
          cumulativeCount: 327775,
        },
        {
          score: "247",
          currentCount: 157,
          cumulativeCount: 327932,
        },
        {
          score: "246",
          currentCount: 172,
          cumulativeCount: 328104,
        },
        {
          score: "245",
          currentCount: 153,
          cumulativeCount: 328257,
        },
        {
          score: "244",
          currentCount: 139,
          cumulativeCount: 328396,
        },
        {
          score: "243",
          currentCount: 146,
          cumulativeCount: 328542,
        },
        {
          score: "242",
          currentCount: 164,
          cumulativeCount: 328706,
        },
        {
          score: "241",
          currentCount: 131,
          cumulativeCount: 328837,
        },
        {
          score: "240",
          currentCount: 152,
          cumulativeCount: 328989,
        },
        {
          score: "239",
          currentCount: 142,
          cumulativeCount: 329131,
        },
        {
          score: "238",
          currentCount: 135,
          cumulativeCount: 329266,
        },
        {
          score: "237",
          currentCount: 139,
          cumulativeCount: 329405,
        },
        {
          score: "236",
          currentCount: 140,
          cumulativeCount: 329545,
        },
        {
          score: "235",
          currentCount: 145,
          cumulativeCount: 329690,
        },
        {
          score: "234",
          currentCount: 127,
          cumulativeCount: 329817,
        },
        {
          score: "233",
          currentCount: 147,
          cumulativeCount: 329964,
        },
        {
          score: "232",
          currentCount: 119,
          cumulativeCount: 330083,
        },
        {
          score: "231",
          currentCount: 126,
          cumulativeCount: 330209,
        },
        {
          score: "230",
          currentCount: 124,
          cumulativeCount: 330333,
        },
        {
          score: "229",
          currentCount: 112,
          cumulativeCount: 330445,
        },
        {
          score: "228",
          currentCount: 117,
          cumulativeCount: 330562,
        },
        {
          score: "227",
          currentCount: 131,
          cumulativeCount: 330693,
        },
        {
          score: "226",
          currentCount: 117,
          cumulativeCount: 330810,
        },
        {
          score: "225",
          currentCount: 114,
          cumulativeCount: 330924,
        },
        {
          score: "224",
          currentCount: 102,
          cumulativeCount: 331026,
        },
        {
          score: "223",
          currentCount: 109,
          cumulativeCount: 331135,
        },
        {
          score: "222",
          currentCount: 103,
          cumulativeCount: 331238,
        },
        {
          score: "221",
          currentCount: 108,
          cumulativeCount: 331346,
        },
        {
          score: "220",
          currentCount: 111,
          cumulativeCount: 331457,
        },
        {
          score: "219",
          currentCount: 114,
          cumulativeCount: 331571,
        },
        {
          score: "218",
          currentCount: 101,
          cumulativeCount: 331672,
        },
        {
          score: "217",
          currentCount: 103,
          cumulativeCount: 331775,
        },
        {
          score: "216",
          currentCount: 101,
          cumulativeCount: 331876,
        },
        {
          score: "215",
          currentCount: 97,
          cumulativeCount: 331973,
        },
        {
          score: "214",
          currentCount: 85,
          cumulativeCount: 332058,
        },
        {
          score: "213",
          currentCount: 87,
          cumulativeCount: 332145,
        },
        {
          score: "212",
          currentCount: 88,
          cumulativeCount: 332233,
        },
        {
          score: "211",
          currentCount: 81,
          cumulativeCount: 332314,
        },
        {
          score: "210",
          currentCount: 88,
          cumulativeCount: 332402,
        },
        {
          score: "209",
          currentCount: 95,
          cumulativeCount: 332497,
        },
        {
          score: "208",
          currentCount: 94,
          cumulativeCount: 332591,
        },
        {
          score: "207",
          currentCount: 90,
          cumulativeCount: 332681,
        },
        {
          score: "206",
          currentCount: 88,
          cumulativeCount: 332769,
        },
        {
          score: "205",
          currentCount: 84,
          cumulativeCount: 332853,
        },
        {
          score: "204",
          currentCount: 83,
          cumulativeCount: 332936,
        },
        {
          score: "203",
          currentCount: 87,
          cumulativeCount: 333023,
        },
        {
          score: "202",
          currentCount: 65,
          cumulativeCount: 333088,
        },
        {
          score: "201",
          currentCount: 71,
          cumulativeCount: 333159,
        },
        {
          score: "200",
          currentCount: 83,
          cumulativeCount: 333242,
        },
        {
          score: "199",
          currentCount: 74,
          cumulativeCount: 333316,
        },
        {
          score: "198",
          currentCount: 63,
          cumulativeCount: 333379,
        },
        {
          score: "197",
          currentCount: 74,
          cumulativeCount: 333453,
        },
        {
          score: "196",
          currentCount: 64,
          cumulativeCount: 333517,
        },
        {
          score: "195",
          currentCount: 62,
          cumulativeCount: 333579,
        },
        {
          score: "194",
          currentCount: 68,
          cumulativeCount: 333647,
        },
        {
          score: "193",
          currentCount: 65,
          cumulativeCount: 333712,
        },
        {
          score: "192",
          currentCount: 51,
          cumulativeCount: 333763,
        },
        {
          score: "191",
          currentCount: 59,
          cumulativeCount: 333822,
        },
        {
          score: "190",
          currentCount: 59,
          cumulativeCount: 333881,
        },
        {
          score: "189",
          currentCount: 51,
          cumulativeCount: 333932,
        },
        {
          score: "188",
          currentCount: 55,
          cumulativeCount: 333987,
        },
        {
          score: "187",
          currentCount: 57,
          cumulativeCount: 334044,
        },
        {
          score: "186",
          currentCount: 57,
          cumulativeCount: 334101,
        },
        {
          score: "185",
          currentCount: 52,
          cumulativeCount: 334153,
        },
        {
          score: "184",
          currentCount: 37,
          cumulativeCount: 334190,
        },
        {
          score: "183",
          currentCount: 54,
          cumulativeCount: 334244,
        },
        {
          score: "182",
          currentCount: 40,
          cumulativeCount: 334284,
        },
        {
          score: "181",
          currentCount: 44,
          cumulativeCount: 334328,
        },
        {
          score: "180",
          currentCount: 35,
          cumulativeCount: 334363,
        },
        {
          score: "179",
          currentCount: 36,
          cumulativeCount: 334399,
        },
        {
          score: "178",
          currentCount: 38,
          cumulativeCount: 334437,
        },
        {
          score: "177",
          currentCount: 33,
          cumulativeCount: 334470,
        },
        {
          score: "176",
          currentCount: 34,
          cumulativeCount: 334504,
        },
        {
          score: "175",
          currentCount: 30,
          cumulativeCount: 334534,
        },
        {
          score: "174",
          currentCount: 40,
          cumulativeCount: 334574,
        },
        {
          score: "173",
          currentCount: 41,
          cumulativeCount: 334615,
        },
        {
          score: "172",
          currentCount: 23,
          cumulativeCount: 334638,
        },
        {
          score: "171",
          currentCount: 30,
          cumulativeCount: 334668,
        },
        {
          score: "170",
          currentCount: 33,
          cumulativeCount: 334701,
        },
        {
          score: "169",
          currentCount: 20,
          cumulativeCount: 334721,
        },
        {
          score: "168",
          currentCount: 26,
          cumulativeCount: 334747,
        },
        {
          score: "167",
          currentCount: 22,
          cumulativeCount: 334769,
        },
        {
          score: "166",
          currentCount: 20,
          cumulativeCount: 334789,
        },
        {
          score: "165",
          currentCount: 24,
          cumulativeCount: 334813,
        },
        {
          score: "164",
          currentCount: 20,
          cumulativeCount: 334833,
        },
        {
          score: "163",
          currentCount: 23,
          cumulativeCount: 334856,
        },
        {
          score: "162",
          currentCount: 21,
          cumulativeCount: 334877,
        },
        {
          score: "161",
          currentCount: 21,
          cumulativeCount: 334898,
        },
        {
          score: "160",
          currentCount: 20,
          cumulativeCount: 334918,
        },
        {
          score: "159",
          currentCount: 18,
          cumulativeCount: 334936,
        },
        {
          score: "158",
          currentCount: 26,
          cumulativeCount: 334962,
        },
        {
          score: "157",
          currentCount: 18,
          cumulativeCount: 334980,
        },
        {
          score: "156",
          currentCount: 19,
          cumulativeCount: 334999,
        },
        {
          score: "155",
          currentCount: 17,
          cumulativeCount: 335016,
        },
        {
          score: "154",
          currentCount: 16,
          cumulativeCount: 335032,
        },
        {
          score: "153",
          currentCount: 19,
          cumulativeCount: 335051,
        },
        {
          score: "152",
          currentCount: 16,
          cumulativeCount: 335067,
        },
        {
          score: "151",
          currentCount: 11,
          cumulativeCount: 335078,
        },
        {
          score: "150",
          currentCount: 14,
          cumulativeCount: 335092,
        },
        {
          score: "149",
          currentCount: 19,
          cumulativeCount: 335111,
        },
        {
          score: "148",
          currentCount: 12,
          cumulativeCount: 335123,
        },
        {
          score: "147",
          currentCount: 11,
          cumulativeCount: 335134,
        },
        {
          score: "146",
          currentCount: 8,
          cumulativeCount: 335142,
        },
        {
          score: "145",
          currentCount: 11,
          cumulativeCount: 335153,
        },
        {
          score: "144",
          currentCount: 15,
          cumulativeCount: 335168,
        },
        {
          score: "143",
          currentCount: 10,
          cumulativeCount: 335178,
        },
        {
          score: "142",
          currentCount: 8,
          cumulativeCount: 335186,
        },
        {
          score: "141",
          currentCount: 11,
          cumulativeCount: 335197,
        },
        {
          score: "140",
          currentCount: 10,
          cumulativeCount: 335207,
        },
      ],
    };
  },
  mounted() {
    this.renderChart();
    // 添加窗口大小变化监听器，以便在窗口大小变化时重新渲染图表
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // 在组件销毁之前移除窗口大小变化监听器
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    renderChart() {
      const chart = echarts.init(this.$refs.chart);
      const xAxisData = this.chartData.map((item) => item.score);
      const seriesData1 = this.chartData.map((item) => item.currentCount);
      const seriesData2 = this.chartData.map((item) => item.cumulativeCount);

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          top: "0",
          left: "2",
          right: "2",
          bottom: "45%",
        },
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数",
            min: 0,
            interval: 10,
            axisLabel: {
              formatter: "{value}",
            },
            // 背景线颜色
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.001)",
              },
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 10,
          },
          {
            type: "inside",
            start: 0,
            end: 90,
          },
        ],
        series: [
          {
            name: "累计人数",
            type: "line",
            data: seriesData1,
            itemStyle: {
              color: "#7565b4",
            },
          },
          {
            name: "本段人数",
            type: "bar",
            data: seriesData2,
            itemStyle: {
              color: "#3e61be",
            },
          },
        ],
      };

      chart.setOption(option);
    },
    handleResize() {
      // 窗口大小变化时重新渲染图表
      this.$nextTick(() => {
        this.renderChart();
      });
    },
  },
};
</script>
    
    <style>
/* 可以添加样式 */
</style>
    