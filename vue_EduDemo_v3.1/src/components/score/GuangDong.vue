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
          score: "700-750",
          currentCount: 27,
          cumulativeCount: 27,
        },
        {
          score: "699",
          currentCount: 8,
          cumulativeCount: 35,
        },
        {
          score: "698",
          currentCount: 4,
          cumulativeCount: 39,
        },
        {
          score: "697",
          currentCount: 6,
          cumulativeCount: 45,
        },
        {
          score: "696",
          currentCount: 12,
          cumulativeCount: 57,
        },
        {
          score: "695",
          currentCount: 14,
          cumulativeCount: 71,
        },
        {
          score: "694",
          currentCount: 14,
          cumulativeCount: 85,
        },
        {
          score: "693",
          currentCount: 11,
          cumulativeCount: 96,
        },
        {
          score: "692",
          currentCount: 15,
          cumulativeCount: 111,
        },
        {
          score: "691",
          currentCount: 13,
          cumulativeCount: 124,
        },
        {
          score: "690",
          currentCount: 18,
          cumulativeCount: 142,
        },
        {
          score: "689",
          currentCount: 19,
          cumulativeCount: 161,
        },
        {
          score: "688",
          currentCount: 20,
          cumulativeCount: 181,
        },
        {
          score: "687",
          currentCount: 19,
          cumulativeCount: 200,
        },
        {
          score: "686",
          currentCount: 27,
          cumulativeCount: 227,
        },
        {
          score: "685",
          currentCount: 27,
          cumulativeCount: 254,
        },
        {
          score: "684",
          currentCount: 38,
          cumulativeCount: 292,
        },
        {
          score: "683",
          currentCount: 42,
          cumulativeCount: 334,
        },
        {
          score: "682",
          currentCount: 28,
          cumulativeCount: 362,
        },
        {
          score: "681",
          currentCount: 40,
          cumulativeCount: 402,
        },
        {
          score: "680",
          currentCount: 50,
          cumulativeCount: 452,
        },
        {
          score: "679",
          currentCount: 38,
          cumulativeCount: 490,
        },
        {
          score: "678",
          currentCount: 43,
          cumulativeCount: 533,
        },
        {
          score: "677",
          currentCount: 61,
          cumulativeCount: 594,
        },
        {
          score: "676",
          currentCount: 48,
          cumulativeCount: 642,
        },
        {
          score: "675",
          currentCount: 65,
          cumulativeCount: 707,
        },
        {
          score: "674",
          currentCount: 74,
          cumulativeCount: 781,
        },
        {
          score: "673",
          currentCount: 55,
          cumulativeCount: 836,
        },
        {
          score: "672",
          currentCount: 75,
          cumulativeCount: 911,
        },
        {
          score: "671",
          currentCount: 73,
          cumulativeCount: 984,
        },
        {
          score: "670",
          currentCount: 83,
          cumulativeCount: 1067,
        },
        {
          score: "669",
          currentCount: 91,
          cumulativeCount: 1158,
        },
        {
          score: "668",
          currentCount: 84,
          cumulativeCount: 1242,
        },
        {
          score: "667",
          currentCount: 112,
          cumulativeCount: 1354,
        },
        {
          score: "666",
          currentCount: 111,
          cumulativeCount: 1465,
        },
        {
          score: "665",
          currentCount: 98,
          cumulativeCount: 1563,
        },
        {
          score: "664",
          currentCount: 92,
          cumulativeCount: 1655,
        },
        {
          score: "663",
          currentCount: 126,
          cumulativeCount: 1781,
        },
        {
          score: "662",
          currentCount: 120,
          cumulativeCount: 1901,
        },
        {
          score: "661",
          currentCount: 139,
          cumulativeCount: 2040,
        },
        {
          score: "660",
          currentCount: 154,
          cumulativeCount: 2194,
        },
        {
          score: "659",
          currentCount: 179,
          cumulativeCount: 2373,
        },
        {
          score: "658",
          currentCount: 152,
          cumulativeCount: 2525,
        },
        {
          score: "657",
          currentCount: 171,
          cumulativeCount: 2696,
        },
        {
          score: "656",
          currentCount: 177,
          cumulativeCount: 2873,
        },
        {
          score: "655",
          currentCount: 168,
          cumulativeCount: 3041,
        },
        {
          score: "654",
          currentCount: 190,
          cumulativeCount: 3231,
        },
        {
          score: "653",
          currentCount: 196,
          cumulativeCount: 3427,
        },
        {
          score: "652",
          currentCount: 202,
          cumulativeCount: 3629,
        },
        {
          score: "651",
          currentCount: 230,
          cumulativeCount: 3859,
        },
        {
          score: "650",
          currentCount: 225,
          cumulativeCount: 4084,
        },
        {
          score: "649",
          currentCount: 250,
          cumulativeCount: 4334,
        },
        {
          score: "648",
          currentCount: 246,
          cumulativeCount: 4580,
        },
        {
          score: "647",
          currentCount: 248,
          cumulativeCount: 4828,
        },
        {
          score: "646",
          currentCount: 264,
          cumulativeCount: 5092,
        },
        {
          score: "645",
          currentCount: 252,
          cumulativeCount: 5344,
        },
        {
          score: "644",
          currentCount: 276,
          cumulativeCount: 5620,
        },
        {
          score: "643",
          currentCount: 266,
          cumulativeCount: 5886,
        },
        {
          score: "642",
          currentCount: 297,
          cumulativeCount: 6183,
        },
        {
          score: "641",
          currentCount: 300,
          cumulativeCount: 6483,
        },
        {
          score: "640",
          currentCount: 318,
          cumulativeCount: 6801,
        },
        {
          score: "639",
          currentCount: 322,
          cumulativeCount: 7123,
        },
        {
          score: "638",
          currentCount: 304,
          cumulativeCount: 7427,
        },
        {
          score: "637",
          currentCount: 365,
          cumulativeCount: 7792,
        },
        {
          score: "636",
          currentCount: 363,
          cumulativeCount: 8155,
        },
        {
          score: "635",
          currentCount: 382,
          cumulativeCount: 8537,
        },
        {
          score: "634",
          currentCount: 365,
          cumulativeCount: 8902,
        },
        {
          score: "633",
          currentCount: 373,
          cumulativeCount: 9275,
        },
        {
          score: "632",
          currentCount: 390,
          cumulativeCount: 9665,
        },
        {
          score: "631",
          currentCount: 392,
          cumulativeCount: 10057,
        },
        {
          score: "630",
          currentCount: 405,
          cumulativeCount: 10462,
        },
        {
          score: "629",
          currentCount: 449,
          cumulativeCount: 10911,
        },
        {
          score: "628",
          currentCount: 417,
          cumulativeCount: 11328,
        },
        {
          score: "627",
          currentCount: 434,
          cumulativeCount: 11762,
        },
        {
          score: "626",
          currentCount: 466,
          cumulativeCount: 12228,
        },
        {
          score: "625",
          currentCount: 453,
          cumulativeCount: 12681,
        },
        {
          score: "624",
          currentCount: 460,
          cumulativeCount: 13141,
        },
        {
          score: "623",
          currentCount: 462,
          cumulativeCount: 13603,
        },
        {
          score: "622",
          currentCount: 481,
          cumulativeCount: 14084,
        },
        {
          score: "621",
          currentCount: 469,
          cumulativeCount: 14553,
        },
        {
          score: "620",
          currentCount: 472,
          cumulativeCount: 15025,
        },
        {
          score: "619",
          currentCount: 490,
          cumulativeCount: 15515,
        },
        {
          score: "618",
          currentCount: 500,
          cumulativeCount: 16015,
        },
        {
          score: "617",
          currentCount: 536,
          cumulativeCount: 16551,
        },
        {
          score: "616",
          currentCount: 503,
          cumulativeCount: 17054,
        },
        {
          score: "615",
          currentCount: 578,
          cumulativeCount: 17632,
        },
        {
          score: "614",
          currentCount: 530,
          cumulativeCount: 18162,
        },
        {
          score: "613",
          currentCount: 543,
          cumulativeCount: 18705,
        },
        {
          score: "612",
          currentCount: 561,
          cumulativeCount: 19266,
        },
        {
          score: "611",
          currentCount: 631,
          cumulativeCount: 19897,
        },
        {
          score: "610",
          currentCount: 584,
          cumulativeCount: 20481,
        },
        {
          score: "609",
          currentCount: 597,
          cumulativeCount: 21078,
        },
        {
          score: "608",
          currentCount: 647,
          cumulativeCount: 21725,
        },
        {
          score: "607",
          currentCount: 662,
          cumulativeCount: 22387,
        },
        {
          score: "606",
          currentCount: 686,
          cumulativeCount: 23073,
        },
        {
          score: "605",
          currentCount: 674,
          cumulativeCount: 23747,
        },
        {
          score: "604",
          currentCount: 676,
          cumulativeCount: 24423,
        },
        {
          score: "603",
          currentCount: 684,
          cumulativeCount: 25107,
        },
        {
          score: "602",
          currentCount: 675,
          cumulativeCount: 25782,
        },
        {
          score: "601",
          currentCount: 684,
          cumulativeCount: 26466,
        },
        {
          score: "600",
          currentCount: 702,
          cumulativeCount: 27168,
        },
        {
          score: "599",
          currentCount: 768,
          cumulativeCount: 27936,
        },
        {
          score: "598",
          currentCount: 709,
          cumulativeCount: 28645,
        },
        {
          score: "597",
          currentCount: 746,
          cumulativeCount: 29391,
        },
        {
          score: "596",
          currentCount: 723,
          cumulativeCount: 30114,
        },
        {
          score: "595",
          currentCount: 773,
          cumulativeCount: 30887,
        },
        {
          score: "594",
          currentCount: 771,
          cumulativeCount: 31658,
        },
        {
          score: "593",
          currentCount: 789,
          cumulativeCount: 32447,
        },
        {
          score: "592",
          currentCount: 783,
          cumulativeCount: 33230,
        },
        {
          score: "591",
          currentCount: 811,
          cumulativeCount: 34041,
        },
        {
          score: "590",
          currentCount: 830,
          cumulativeCount: 34871,
        },
        {
          score: "589",
          currentCount: 848,
          cumulativeCount: 35719,
        },
        {
          score: "588",
          currentCount: 870,
          cumulativeCount: 36589,
        },
        {
          score: "587",
          currentCount: 861,
          cumulativeCount: 37450,
        },
        {
          score: "586",
          currentCount: 821,
          cumulativeCount: 38271,
        },
        {
          score: "585",
          currentCount: 877,
          cumulativeCount: 39148,
        },
        {
          score: "584",
          currentCount: 875,
          cumulativeCount: 40023,
        },
        {
          score: "583",
          currentCount: 894,
          cumulativeCount: 40917,
        },
        {
          score: "582",
          currentCount: 917,
          cumulativeCount: 41834,
        },
        {
          score: "581",
          currentCount: 863,
          cumulativeCount: 42697,
        },
        {
          score: "580",
          currentCount: 911,
          cumulativeCount: 43608,
        },
        {
          score: "579",
          currentCount: 853,
          cumulativeCount: 44461,
        },
        {
          score: "578",
          currentCount: 942,
          cumulativeCount: 45403,
        },
        {
          score: "577",
          currentCount: 922,
          cumulativeCount: 46325,
        },
        {
          score: "576",
          currentCount: 1012,
          cumulativeCount: 47337,
        },
        {
          score: "575",
          currentCount: 959,
          cumulativeCount: 48296,
        },
        {
          score: "574",
          currentCount: 960,
          cumulativeCount: 49256,
        },
        {
          score: "573",
          currentCount: 972,
          cumulativeCount: 50228,
        },
        {
          score: "572",
          currentCount: 1027,
          cumulativeCount: 51255,
        },
        {
          score: "571",
          currentCount: 1025,
          cumulativeCount: 52280,
        },
        {
          score: "570",
          currentCount: 990,
          cumulativeCount: 53270,
        },
        {
          score: "569",
          currentCount: 993,
          cumulativeCount: 54263,
        },
        {
          score: "568",
          currentCount: 1033,
          cumulativeCount: 55296,
        },
        {
          score: "567",
          currentCount: 1072,
          cumulativeCount: 56368,
        },
        {
          score: "566",
          currentCount: 1013,
          cumulativeCount: 57381,
        },
        {
          score: "565",
          currentCount: 1016,
          cumulativeCount: 58397,
        },
        {
          score: "564",
          currentCount: 1033,
          cumulativeCount: 59430,
        },
        {
          score: "563",
          currentCount: 1032,
          cumulativeCount: 60462,
        },
        {
          score: "562",
          currentCount: 1096,
          cumulativeCount: 61558,
        },
        {
          score: "561",
          currentCount: 1126,
          cumulativeCount: 62684,
        },
        {
          score: "560",
          currentCount: 1093,
          cumulativeCount: 63777,
        },
        {
          score: "559",
          currentCount: 1103,
          cumulativeCount: 64880,
        },
        {
          score: "558",
          currentCount: 1120,
          cumulativeCount: 66000,
        },
        {
          score: "557",
          currentCount: 1188,
          cumulativeCount: 67188,
        },
        {
          score: "556",
          currentCount: 1072,
          cumulativeCount: 68260,
        },
        {
          score: "555",
          currentCount: 1130,
          cumulativeCount: 69390,
        },
        {
          score: "554",
          currentCount: 1163,
          cumulativeCount: 70553,
        },
        {
          score: "553",
          currentCount: 1198,
          cumulativeCount: 71751,
        },
        {
          score: "552",
          currentCount: 1165,
          cumulativeCount: 72916,
        },
        {
          score: "551",
          currentCount: 1175,
          cumulativeCount: 74091,
        },
        {
          score: "550",
          currentCount: 1151,
          cumulativeCount: 75242,
        },
        {
          score: "549",
          currentCount: 1217,
          cumulativeCount: 76459,
        },
        {
          score: "548",
          currentCount: 1164,
          cumulativeCount: 77623,
        },
        {
          score: "547",
          currentCount: 1229,
          cumulativeCount: 78852,
        },
        {
          score: "546",
          currentCount: 1235,
          cumulativeCount: 80087,
        },
        {
          score: "545",
          currentCount: 1141,
          cumulativeCount: 81228,
        },
        {
          score: "544",
          currentCount: 1280,
          cumulativeCount: 82508,
        },
        {
          score: "543",
          currentCount: 1221,
          cumulativeCount: 83729,
        },
        {
          score: "542",
          currentCount: 1287,
          cumulativeCount: 85016,
        },
        {
          score: "541",
          currentCount: 1285,
          cumulativeCount: 86301,
        },
        {
          score: "540",
          currentCount: 1218,
          cumulativeCount: 87519,
        },
        {
          score: "539",
          currentCount: 1278,
          cumulativeCount: 88797,
        },
        {
          score: "538",
          currentCount: 1272,
          cumulativeCount: 90069,
        },
        {
          score: "537",
          currentCount: 1293,
          cumulativeCount: 91362,
        },
        {
          score: "536",
          currentCount: 1269,
          cumulativeCount: 92631,
        },
        {
          score: "535",
          currentCount: 1257,
          cumulativeCount: 93888,
        },
        {
          score: "534",
          currentCount: 1297,
          cumulativeCount: 95185,
        },
        {
          score: "533",
          currentCount: 1320,
          cumulativeCount: 96505,
        },
        {
          score: "532",
          currentCount: 1337,
          cumulativeCount: 97842,
        },
        {
          score: "531",
          currentCount: 1343,
          cumulativeCount: 99185,
        },
        {
          score: "530",
          currentCount: 1363,
          cumulativeCount: 100548,
        },
        {
          score: "529",
          currentCount: 1341,
          cumulativeCount: 101889,
        },
        {
          score: "528",
          currentCount: 1346,
          cumulativeCount: 103235,
        },
        {
          score: "527",
          currentCount: 1330,
          cumulativeCount: 104565,
        },
        {
          score: "526",
          currentCount: 1382,
          cumulativeCount: 105947,
        },
        {
          score: "525",
          currentCount: 1328,
          cumulativeCount: 107275,
        },
        {
          score: "524",
          currentCount: 1355,
          cumulativeCount: 108630,
        },
        {
          score: "523",
          currentCount: 1375,
          cumulativeCount: 110005,
        },
        {
          score: "522",
          currentCount: 1405,
          cumulativeCount: 111410,
        },
        {
          score: "521",
          currentCount: 1325,
          cumulativeCount: 112735,
        },
        {
          score: "520",
          currentCount: 1390,
          cumulativeCount: 114125,
        },
        {
          score: "519",
          currentCount: 1428,
          cumulativeCount: 115553,
        },
        {
          score: "518",
          currentCount: 1348,
          cumulativeCount: 116901,
        },
        {
          score: "517",
          currentCount: 1424,
          cumulativeCount: 118325,
        },
        {
          score: "516",
          currentCount: 1367,
          cumulativeCount: 119692,
        },
        {
          score: "515",
          currentCount: 1454,
          cumulativeCount: 121146,
        },
        {
          score: "514",
          currentCount: 1343,
          cumulativeCount: 122489,
        },
        {
          score: "513",
          currentCount: 1388,
          cumulativeCount: 123877,
        },
        {
          score: "512",
          currentCount: 1419,
          cumulativeCount: 125296,
        },
        {
          score: "511",
          currentCount: 1456,
          cumulativeCount: 126752,
        },
        {
          score: "510",
          currentCount: 1419,
          cumulativeCount: 128171,
        },
        {
          score: "509",
          currentCount: 1441,
          cumulativeCount: 129612,
        },
        {
          score: "508",
          currentCount: 1442,
          cumulativeCount: 131054,
        },
        {
          score: "507",
          currentCount: 1448,
          cumulativeCount: 132502,
        },
        {
          score: "506",
          currentCount: 1413,
          cumulativeCount: 133915,
        },
        {
          score: "505",
          currentCount: 1435,
          cumulativeCount: 135350,
        },
        {
          score: "504",
          currentCount: 1516,
          cumulativeCount: 136866,
        },
        {
          score: "503",
          currentCount: 1461,
          cumulativeCount: 138327,
        },
        {
          score: "502",
          currentCount: 1504,
          cumulativeCount: 139831,
        },
        {
          score: "501",
          currentCount: 1426,
          cumulativeCount: 141257,
        },
        {
          score: "500",
          currentCount: 1448,
          cumulativeCount: 142705,
        },
        {
          score: "499",
          currentCount: 1445,
          cumulativeCount: 144150,
        },
        {
          score: "498",
          currentCount: 1444,
          cumulativeCount: 145594,
        },
        {
          score: "497",
          currentCount: 1453,
          cumulativeCount: 147047,
        },
        {
          score: "496",
          currentCount: 1549,
          cumulativeCount: 148596,
        },
        {
          score: "495",
          currentCount: 1511,
          cumulativeCount: 150107,
        },
        {
          score: "494",
          currentCount: 1458,
          cumulativeCount: 151565,
        },
        {
          score: "493",
          currentCount: 1485,
          cumulativeCount: 153050,
        },
        {
          score: "492",
          currentCount: 1491,
          cumulativeCount: 154541,
        },
        {
          score: "491",
          currentCount: 1458,
          cumulativeCount: 155999,
        },
        {
          score: "490",
          currentCount: 1533,
          cumulativeCount: 157532,
        },
        {
          score: "489",
          currentCount: 1496,
          cumulativeCount: 159028,
        },
        {
          score: "488",
          currentCount: 1478,
          cumulativeCount: 160506,
        },
        {
          score: "487",
          currentCount: 1497,
          cumulativeCount: 162003,
        },
        {
          score: "486",
          currentCount: 1473,
          cumulativeCount: 163476,
        },
        {
          score: "485",
          currentCount: 1515,
          cumulativeCount: 164991,
        },
        {
          score: "484",
          currentCount: 1496,
          cumulativeCount: 166487,
        },
        {
          score: "483",
          currentCount: 1583,
          cumulativeCount: 168070,
        },
        {
          score: "482",
          currentCount: 1473,
          cumulativeCount: 169543,
        },
        {
          score: "481",
          currentCount: 1614,
          cumulativeCount: 171157,
        },
        {
          score: "480",
          currentCount: 1503,
          cumulativeCount: 172660,
        },
        {
          score: "479",
          currentCount: 1596,
          cumulativeCount: 174256,
        },
        {
          score: "478",
          currentCount: 1557,
          cumulativeCount: 175813,
        },
        {
          score: "477",
          currentCount: 1460,
          cumulativeCount: 177273,
        },
        {
          score: "476",
          currentCount: 1485,
          cumulativeCount: 178758,
        },
        {
          score: "475",
          currentCount: 1521,
          cumulativeCount: 180279,
        },
        {
          score: "474",
          currentCount: 1582,
          cumulativeCount: 181861,
        },
        {
          score: "473",
          currentCount: 1560,
          cumulativeCount: 183421,
        },
        {
          score: "472",
          currentCount: 1563,
          cumulativeCount: 184984,
        },
        {
          score: "471",
          currentCount: 1611,
          cumulativeCount: 186595,
        },
        {
          score: "470",
          currentCount: 1537,
          cumulativeCount: 188132,
        },
        {
          score: "469",
          currentCount: 1634,
          cumulativeCount: 189766,
        },
        {
          score: "468",
          currentCount: 1488,
          cumulativeCount: 191254,
        },
        {
          score: "467",
          currentCount: 1553,
          cumulativeCount: 192807,
        },
        {
          score: "466",
          currentCount: 1509,
          cumulativeCount: 194316,
        },
        {
          score: "465",
          currentCount: 1518,
          cumulativeCount: 195834,
        },
        {
          score: "464",
          currentCount: 1577,
          cumulativeCount: 197411,
        },
        {
          score: "463",
          currentCount: 1625,
          cumulativeCount: 199036,
        },
        {
          score: "462",
          currentCount: 1568,
          cumulativeCount: 200604,
        },
        {
          score: "461",
          currentCount: 1436,
          cumulativeCount: 202040,
        },
        {
          score: "460",
          currentCount: 1591,
          cumulativeCount: 203631,
        },
        {
          score: "459",
          currentCount: 1513,
          cumulativeCount: 205144,
        },
        {
          score: "458",
          currentCount: 1602,
          cumulativeCount: 206746,
        },
        {
          score: "457",
          currentCount: 1555,
          cumulativeCount: 208301,
        },
        {
          score: "456",
          currentCount: 1603,
          cumulativeCount: 209904,
        },
        {
          score: "455",
          currentCount: 1589,
          cumulativeCount: 211493,
        },
        {
          score: "454",
          currentCount: 1589,
          cumulativeCount: 213082,
        },
        {
          score: "453",
          currentCount: 1526,
          cumulativeCount: 214608,
        },
        {
          score: "452",
          currentCount: 1545,
          cumulativeCount: 216153,
        },
        {
          score: "451",
          currentCount: 1595,
          cumulativeCount: 217748,
        },
        {
          score: "450",
          currentCount: 1523,
          cumulativeCount: 219271,
        },
        {
          score: "449",
          currentCount: 1534,
          cumulativeCount: 220805,
        },
        {
          score: "448",
          currentCount: 1469,
          cumulativeCount: 222274,
        },
        {
          score: "447",
          currentCount: 1517,
          cumulativeCount: 223791,
        },
        {
          score: "446",
          currentCount: 1531,
          cumulativeCount: 225322,
        },
        {
          score: "445",
          currentCount: 1619,
          cumulativeCount: 226941,
        },
        {
          score: "444",
          currentCount: 1578,
          cumulativeCount: 228519,
        },
        {
          score: "443",
          currentCount: 1490,
          cumulativeCount: 230009,
        },
        {
          score: "442",
          currentCount: 1511,
          cumulativeCount: 231520,
        },
        {
          score: "441",
          currentCount: 1593,
          cumulativeCount: 233113,
        },
        {
          score: "440",
          currentCount: 1521,
          cumulativeCount: 234634,
        },
        {
          score: "439",
          currentCount: 1465,
          cumulativeCount: 236099,
        },
        {
          score: "438",
          currentCount: 1523,
          cumulativeCount: 237622,
        },
        {
          score: "437",
          currentCount: 1502,
          cumulativeCount: 239124,
        },
        {
          score: "436",
          currentCount: 1519,
          cumulativeCount: 240643,
        },
        {
          score: "435",
          currentCount: 1481,
          cumulativeCount: 242124,
        },
        {
          score: "434",
          currentCount: 1454,
          cumulativeCount: 243578,
        },
        {
          score: "433",
          currentCount: 1495,
          cumulativeCount: 245073,
        },
        {
          score: "432",
          currentCount: 1547,
          cumulativeCount: 246620,
        },
        {
          score: "431",
          currentCount: 1502,
          cumulativeCount: 248122,
        },
        {
          score: "430",
          currentCount: 1469,
          cumulativeCount: 249591,
        },
        {
          score: "429",
          currentCount: 1456,
          cumulativeCount: 251047,
        },
        {
          score: "428",
          currentCount: 1482,
          cumulativeCount: 252529,
        },
        {
          score: "427",
          currentCount: 1468,
          cumulativeCount: 253997,
        },
        {
          score: "426",
          currentCount: 1440,
          cumulativeCount: 255437,
        },
        {
          score: "425",
          currentCount: 1459,
          cumulativeCount: 256896,
        },
        {
          score: "424",
          currentCount: 1466,
          cumulativeCount: 258362,
        },
        {
          score: "423",
          currentCount: 1408,
          cumulativeCount: 259770,
        },
        {
          score: "422",
          currentCount: 1357,
          cumulativeCount: 261127,
        },
        {
          score: "421",
          currentCount: 1452,
          cumulativeCount: 262579,
        },
        {
          score: "420",
          currentCount: 1440,
          cumulativeCount: 264019,
        },
        {
          score: "419",
          currentCount: 1412,
          cumulativeCount: 265431,
        },
        {
          score: "418",
          currentCount: 1336,
          cumulativeCount: 266767,
        },
        {
          score: "417",
          currentCount: 1318,
          cumulativeCount: 268085,
        },
        {
          score: "416",
          currentCount: 1440,
          cumulativeCount: 269525,
        },
        {
          score: "415",
          currentCount: 1366,
          cumulativeCount: 270891,
        },
        {
          score: "414",
          currentCount: 1344,
          cumulativeCount: 272235,
        },
        {
          score: "413",
          currentCount: 1390,
          cumulativeCount: 273625,
        },
        {
          score: "412",
          currentCount: 1390,
          cumulativeCount: 275015,
        },
        {
          score: "411",
          currentCount: 1355,
          cumulativeCount: 276370,
        },
        {
          score: "410",
          currentCount: 1291,
          cumulativeCount: 277661,
        },
        {
          score: "409",
          currentCount: 1354,
          cumulativeCount: 279015,
        },
        {
          score: "408",
          currentCount: 1354,
          cumulativeCount: 280369,
        },
        {
          score: "407",
          currentCount: 1266,
          cumulativeCount: 281635,
        },
        {
          score: "406",
          currentCount: 1255,
          cumulativeCount: 282890,
        },
        {
          score: "405",
          currentCount: 1307,
          cumulativeCount: 284197,
        },
        {
          score: "404",
          currentCount: 1333,
          cumulativeCount: 285530,
        },
        {
          score: "403",
          currentCount: 1302,
          cumulativeCount: 286832,
        },
        {
          score: "402",
          currentCount: 1312,
          cumulativeCount: 288144,
        },
        {
          score: "401",
          currentCount: 1325,
          cumulativeCount: 289469,
        },
        {
          score: "400",
          currentCount: 1246,
          cumulativeCount: 290715,
        },
        {
          score: "399",
          currentCount: 1177,
          cumulativeCount: 291892,
        },
        {
          score: "398",
          currentCount: 1247,
          cumulativeCount: 293139,
        },
        {
          score: "397",
          currentCount: 1289,
          cumulativeCount: 294428,
        },
        {
          score: "396",
          currentCount: 1254,
          cumulativeCount: 295682,
        },
        {
          score: "395",
          currentCount: 1242,
          cumulativeCount: 296924,
        },
        {
          score: "394",
          currentCount: 1227,
          cumulativeCount: 298151,
        },
        {
          score: "393",
          currentCount: 1187,
          cumulativeCount: 299338,
        },
        {
          score: "392",
          currentCount: 1174,
          cumulativeCount: 300512,
        },
        {
          score: "391",
          currentCount: 1183,
          cumulativeCount: 301695,
        },
        {
          score: "390",
          currentCount: 1237,
          cumulativeCount: 302932,
        },
        {
          score: "389",
          currentCount: 1180,
          cumulativeCount: 304112,
        },
        {
          score: "388",
          currentCount: 1218,
          cumulativeCount: 305330,
        },
        {
          score: "387",
          currentCount: 1135,
          cumulativeCount: 306465,
        },
        {
          score: "386",
          currentCount: 1083,
          cumulativeCount: 307548,
        },
        {
          score: "385",
          currentCount: 1101,
          cumulativeCount: 308649,
        },
        {
          score: "384",
          currentCount: 1160,
          cumulativeCount: 309809,
        },
        {
          score: "383",
          currentCount: 1058,
          cumulativeCount: 310867,
        },
        {
          score: "382",
          currentCount: 1125,
          cumulativeCount: 311992,
        },
        {
          score: "381",
          currentCount: 1075,
          cumulativeCount: 313067,
        },
        {
          score: "380",
          currentCount: 1083,
          cumulativeCount: 314150,
        },
        {
          score: "379",
          currentCount: 1112,
          cumulativeCount: 315262,
        },
        {
          score: "378",
          currentCount: 1055,
          cumulativeCount: 316317,
        },
        {
          score: "377",
          currentCount: 1100,
          cumulativeCount: 317417,
        },
        {
          score: "376",
          currentCount: 1112,
          cumulativeCount: 318529,
        },
        {
          score: "375",
          currentCount: 1000,
          cumulativeCount: 319529,
        },
        {
          score: "374",
          currentCount: 1021,
          cumulativeCount: 320550,
        },
        {
          score: "373",
          currentCount: 1012,
          cumulativeCount: 321562,
        },
        {
          score: "372",
          currentCount: 1048,
          cumulativeCount: 322610,
        },
        {
          score: "371",
          currentCount: 1013,
          cumulativeCount: 323623,
        },
        {
          score: "370",
          currentCount: 966,
          cumulativeCount: 324589,
        },
        {
          score: "369",
          currentCount: 1059,
          cumulativeCount: 325648,
        },
        {
          score: "368",
          currentCount: 1021,
          cumulativeCount: 326669,
        },
        {
          score: "367",
          currentCount: 974,
          cumulativeCount: 327643,
        },
        {
          score: "366",
          currentCount: 958,
          cumulativeCount: 328601,
        },
        {
          score: "365",
          currentCount: 987,
          cumulativeCount: 329588,
        },
        {
          score: "364",
          currentCount: 927,
          cumulativeCount: 330515,
        },
        {
          score: "363",
          currentCount: 957,
          cumulativeCount: 331472,
        },
        {
          score: "362",
          currentCount: 932,
          cumulativeCount: 332404,
        },
        {
          score: "361",
          currentCount: 901,
          cumulativeCount: 333305,
        },
        {
          score: "360",
          currentCount: 941,
          cumulativeCount: 334246,
        },
        {
          score: "359",
          currentCount: 917,
          cumulativeCount: 335163,
        },
        {
          score: "358",
          currentCount: 947,
          cumulativeCount: 336110,
        },
        {
          score: "357",
          currentCount: 940,
          cumulativeCount: 337050,
        },
        {
          score: "356",
          currentCount: 873,
          cumulativeCount: 337923,
        },
        {
          score: "355",
          currentCount: 837,
          cumulativeCount: 338760,
        },
        {
          score: "354",
          currentCount: 912,
          cumulativeCount: 339672,
        },
        {
          score: "353",
          currentCount: 821,
          cumulativeCount: 340493,
        },
        {
          score: "352",
          currentCount: 881,
          cumulativeCount: 341374,
        },
        {
          score: "351",
          currentCount: 808,
          cumulativeCount: 342182,
        },
        {
          score: "350",
          currentCount: 929,
          cumulativeCount: 343111,
        },
        {
          score: "349",
          currentCount: 892,
          cumulativeCount: 344003,
        },
        {
          score: "348",
          currentCount: 823,
          cumulativeCount: 344826,
        },
        {
          score: "347",
          currentCount: 810,
          cumulativeCount: 345636,
        },
        {
          score: "346",
          currentCount: 798,
          cumulativeCount: 346434,
        },
        {
          score: "345",
          currentCount: 831,
          cumulativeCount: 347265,
        },
        {
          score: "344",
          currentCount: 820,
          cumulativeCount: 348085,
        },
        {
          score: "343",
          currentCount: 769,
          cumulativeCount: 348854,
        },
        {
          score: "342",
          currentCount: 859,
          cumulativeCount: 349713,
        },
        {
          score: "341",
          currentCount: 805,
          cumulativeCount: 350518,
        },
        {
          score: "340",
          currentCount: 815,
          cumulativeCount: 351333,
        },
        {
          score: "339",
          currentCount: 756,
          cumulativeCount: 352089,
        },
        {
          score: "338",
          currentCount: 809,
          cumulativeCount: 352898,
        },
        {
          score: "337",
          currentCount: 721,
          cumulativeCount: 353619,
        },
        {
          score: "336",
          currentCount: 693,
          cumulativeCount: 354312,
        },
        {
          score: "335",
          currentCount: 734,
          cumulativeCount: 355046,
        },
        {
          score: "334",
          currentCount: 761,
          cumulativeCount: 355807,
        },
        {
          score: "333",
          currentCount: 746,
          cumulativeCount: 356553,
        },
        {
          score: "332",
          currentCount: 713,
          cumulativeCount: 357266,
        },
        {
          score: "331",
          currentCount: 741,
          cumulativeCount: 358007,
        },
        {
          score: "330",
          currentCount: 707,
          cumulativeCount: 358714,
        },
        {
          score: "329",
          currentCount: 700,
          cumulativeCount: 359414,
        },
        {
          score: "328",
          currentCount: 719,
          cumulativeCount: 360133,
        },
        {
          score: "327",
          currentCount: 673,
          cumulativeCount: 360806,
        },
        {
          score: "326",
          currentCount: 684,
          cumulativeCount: 361490,
        },
        {
          score: "325",
          currentCount: 700,
          cumulativeCount: 362190,
        },
        {
          score: "324",
          currentCount: 673,
          cumulativeCount: 362863,
        },
        {
          score: "323",
          currentCount: 684,
          cumulativeCount: 363547,
        },
        {
          score: "322",
          currentCount: 624,
          cumulativeCount: 364171,
        },
        {
          score: "321",
          currentCount: 664,
          cumulativeCount: 364835,
        },
        {
          score: "320",
          currentCount: 633,
          cumulativeCount: 365468,
        },
        {
          score: "319",
          currentCount: 650,
          cumulativeCount: 366118,
        },
        {
          score: "318",
          currentCount: 677,
          cumulativeCount: 366795,
        },
        {
          score: "317",
          currentCount: 607,
          cumulativeCount: 367402,
        },
        {
          score: "316",
          currentCount: 643,
          cumulativeCount: 368045,
        },
        {
          score: "315",
          currentCount: 642,
          cumulativeCount: 368687,
        },
        {
          score: "314",
          currentCount: 611,
          cumulativeCount: 369298,
        },
        {
          score: "313",
          currentCount: 600,
          cumulativeCount: 369898,
        },
        {
          score: "312",
          currentCount: 610,
          cumulativeCount: 370508,
        },
        {
          score: "311",
          currentCount: 646,
          cumulativeCount: 371154,
        },
        {
          score: "310",
          currentCount: 604,
          cumulativeCount: 371758,
        },
        {
          score: "309",
          currentCount: 611,
          cumulativeCount: 372369,
        },
        {
          score: "308",
          currentCount: 587,
          cumulativeCount: 372956,
        },
        {
          score: "307",
          currentCount: 613,
          cumulativeCount: 373569,
        },
        {
          score: "306",
          currentCount: 570,
          cumulativeCount: 374139,
        },
        {
          score: "305",
          currentCount: 578,
          cumulativeCount: 374717,
        },
        {
          score: "304",
          currentCount: 524,
          cumulativeCount: 375241,
        },
        {
          score: "303",
          currentCount: 536,
          cumulativeCount: 375777,
        },
        {
          score: "302",
          currentCount: 549,
          cumulativeCount: 376326,
        },
        {
          score: "301",
          currentCount: 593,
          cumulativeCount: 376919,
        },
        {
          score: "300",
          currentCount: 548,
          cumulativeCount: 377467,
        },
        {
          score: "299",
          currentCount: 549,
          cumulativeCount: 378016,
        },
        {
          score: "298",
          currentCount: 541,
          cumulativeCount: 378557,
        },
        {
          score: "297",
          currentCount: 545,
          cumulativeCount: 379102,
        },
        {
          score: "296",
          currentCount: 533,
          cumulativeCount: 379635,
        },
        {
          score: "295",
          currentCount: 517,
          cumulativeCount: 380152,
        },
        {
          score: "294",
          currentCount: 528,
          cumulativeCount: 380680,
        },
        {
          score: "293",
          currentCount: 548,
          cumulativeCount: 381228,
        },
        {
          score: "292",
          currentCount: 524,
          cumulativeCount: 381752,
        },
        {
          score: "291",
          currentCount: 476,
          cumulativeCount: 382228,
        },
        {
          score: "290",
          currentCount: 472,
          cumulativeCount: 382700,
        },
        {
          score: "289",
          currentCount: 492,
          cumulativeCount: 383192,
        },
        {
          score: "288",
          currentCount: 497,
          cumulativeCount: 383689,
        },
        {
          score: "287",
          currentCount: 427,
          cumulativeCount: 384116,
        },
        {
          score: "286",
          currentCount: 495,
          cumulativeCount: 384611,
        },
        {
          score: "285",
          currentCount: 482,
          cumulativeCount: 385093,
        },
        {
          score: "284",
          currentCount: 488,
          cumulativeCount: 385581,
        },
        {
          score: "283",
          currentCount: 458,
          cumulativeCount: 386039,
        },
        {
          score: "282",
          currentCount: 426,
          cumulativeCount: 386465,
        },
        {
          score: "281",
          currentCount: 500,
          cumulativeCount: 386965,
        },
        {
          score: "280",
          currentCount: 480,
          cumulativeCount: 387445,
        },
        {
          score: "279",
          currentCount: 486,
          cumulativeCount: 387931,
        },
        {
          score: "278",
          currentCount: 485,
          cumulativeCount: 388416,
        },
        {
          score: "277",
          currentCount: 435,
          cumulativeCount: 388851,
        },
        {
          score: "276",
          currentCount: 413,
          cumulativeCount: 389264,
        },
        {
          score: "275",
          currentCount: 444,
          cumulativeCount: 389708,
        },
        {
          score: "274",
          currentCount: 441,
          cumulativeCount: 390149,
        },
        {
          score: "273",
          currentCount: 404,
          cumulativeCount: 390553,
        },
        {
          score: "272",
          currentCount: 432,
          cumulativeCount: 390985,
        },
        {
          score: "271",
          currentCount: 376,
          cumulativeCount: 391361,
        },
        {
          score: "270",
          currentCount: 419,
          cumulativeCount: 391780,
        },
        {
          score: "269",
          currentCount: 390,
          cumulativeCount: 392170,
        },
        {
          score: "268",
          currentCount: 415,
          cumulativeCount: 392585,
        },
        {
          score: "267",
          currentCount: 391,
          cumulativeCount: 392976,
        },
        {
          score: "266",
          currentCount: 371,
          cumulativeCount: 393347,
        },
        {
          score: "265",
          currentCount: 369,
          cumulativeCount: 393716,
        },
        {
          score: "264",
          currentCount: 396,
          cumulativeCount: 394112,
        },
        {
          score: "263",
          currentCount: 389,
          cumulativeCount: 394501,
        },
        {
          score: "262",
          currentCount: 383,
          cumulativeCount: 394884,
        },
        {
          score: "261",
          currentCount: 388,
          cumulativeCount: 395272,
        },
        {
          score: "260",
          currentCount: 321,
          cumulativeCount: 395593,
        },
        {
          score: "259",
          currentCount: 371,
          cumulativeCount: 395964,
        },
        {
          score: "258",
          currentCount: 362,
          cumulativeCount: 396326,
        },
        {
          score: "257",
          currentCount: 334,
          cumulativeCount: 396660,
        },
        {
          score: "256",
          currentCount: 321,
          cumulativeCount: 396981,
        },
        {
          score: "255",
          currentCount: 328,
          cumulativeCount: 397309,
        },
        {
          score: "254",
          currentCount: 293,
          cumulativeCount: 397602,
        },
        {
          score: "253",
          currentCount: 320,
          cumulativeCount: 397922,
        },
        {
          score: "252",
          currentCount: 319,
          cumulativeCount: 398241,
        },
        {
          score: "251",
          currentCount: 307,
          cumulativeCount: 398548,
        },
        {
          score: "250",
          currentCount: 343,
          cumulativeCount: 398891,
        },
        {
          score: "249",
          currentCount: 282,
          cumulativeCount: 399173,
        },
        {
          score: "248",
          currentCount: 303,
          cumulativeCount: 399476,
        },
        {
          score: "247",
          currentCount: 267,
          cumulativeCount: 399743,
        },
        {
          score: "246",
          currentCount: 260,
          cumulativeCount: 400003,
        },
        {
          score: "245",
          currentCount: 311,
          cumulativeCount: 400314,
        },
        {
          score: "244",
          currentCount: 288,
          cumulativeCount: 400602,
        },
        {
          score: "243",
          currentCount: 271,
          cumulativeCount: 400873,
        },
        {
          score: "242",
          currentCount: 269,
          cumulativeCount: 401142,
        },
        {
          score: "241",
          currentCount: 269,
          cumulativeCount: 401411,
        },
        {
          score: "240",
          currentCount: 257,
          cumulativeCount: 401668,
        },
        {
          score: "239",
          currentCount: 256,
          cumulativeCount: 401924,
        },
        {
          score: "238",
          currentCount: 250,
          cumulativeCount: 402174,
        },
        {
          score: "237",
          currentCount: 222,
          cumulativeCount: 402396,
        },
        {
          score: "236",
          currentCount: 206,
          cumulativeCount: 402602,
        },
        {
          score: "235",
          currentCount: 225,
          cumulativeCount: 402827,
        },
        {
          score: "234",
          currentCount: 209,
          cumulativeCount: 403036,
        },
        {
          score: "233",
          currentCount: 235,
          cumulativeCount: 403271,
        },
        {
          score: "232",
          currentCount: 194,
          cumulativeCount: 403465,
        },
        {
          score: "231",
          currentCount: 187,
          cumulativeCount: 403652,
        },
        {
          score: "230",
          currentCount: 191,
          cumulativeCount: 403843,
        },
        {
          score: "229",
          currentCount: 173,
          cumulativeCount: 404016,
        },
        {
          score: "228",
          currentCount: 189,
          cumulativeCount: 404205,
        },
        {
          score: "227",
          currentCount: 190,
          cumulativeCount: 404395,
        },
        {
          score: "226",
          currentCount: 158,
          cumulativeCount: 404553,
        },
        {
          score: "225",
          currentCount: 152,
          cumulativeCount: 404705,
        },
        {
          score: "224",
          currentCount: 152,
          cumulativeCount: 404857,
        },
        {
          score: "223",
          currentCount: 156,
          cumulativeCount: 405013,
        },
        {
          score: "222",
          currentCount: 140,
          cumulativeCount: 405153,
        },
        {
          score: "221",
          currentCount: 150,
          cumulativeCount: 405303,
        },
        {
          score: "220",
          currentCount: 148,
          cumulativeCount: 405451,
        },
        {
          score: "219",
          currentCount: 141,
          cumulativeCount: 405592,
        },
        {
          score: "218",
          currentCount: 132,
          cumulativeCount: 405724,
        },
        {
          score: "217",
          currentCount: 119,
          cumulativeCount: 405843,
        },
        {
          score: "216",
          currentCount: 114,
          cumulativeCount: 405957,
        },
        {
          score: "215",
          currentCount: 127,
          cumulativeCount: 406084,
        },
        {
          score: "214",
          currentCount: 112,
          cumulativeCount: 406196,
        },
        {
          score: "213",
          currentCount: 110,
          cumulativeCount: 406306,
        },
        {
          score: "212",
          currentCount: 97,
          cumulativeCount: 406403,
        },
        {
          score: "211",
          currentCount: 110,
          cumulativeCount: 406513,
        },
        {
          score: "210",
          currentCount: 91,
          cumulativeCount: 406604,
        },
        {
          score: "209",
          currentCount: 116,
          cumulativeCount: 406720,
        },
        {
          score: "208",
          currentCount: 95,
          cumulativeCount: 406815,
        },
        {
          score: "207",
          currentCount: 107,
          cumulativeCount: 406922,
        },
        {
          score: "206",
          currentCount: 79,
          cumulativeCount: 407001,
        },
        {
          score: "205",
          currentCount: 92,
          cumulativeCount: 407093,
        },
        {
          score: "204",
          currentCount: 72,
          cumulativeCount: 407165,
        },
        {
          score: "203",
          currentCount: 72,
          cumulativeCount: 407237,
        },
        {
          score: "202",
          currentCount: 91,
          cumulativeCount: 407328,
        },
        {
          score: "201",
          currentCount: 65,
          cumulativeCount: 407393,
        },
        {
          score: "200",
          currentCount: 71,
          cumulativeCount: 407464,
        },
        {
          score: "199",
          currentCount: 79,
          cumulativeCount: 407543,
        },
        {
          score: "198",
          currentCount: 71,
          cumulativeCount: 407614,
        },
        {
          score: "197",
          currentCount: 60,
          cumulativeCount: 407674,
        },
        {
          score: "196",
          currentCount: 52,
          cumulativeCount: 407726,
        },
        {
          score: "195",
          currentCount: 61,
          cumulativeCount: 407787,
        },
        {
          score: "194",
          currentCount: 70,
          cumulativeCount: 407857,
        },
        {
          score: "193",
          currentCount: 55,
          cumulativeCount: 407912,
        },
        {
          score: "192",
          currentCount: 45,
          cumulativeCount: 407957,
        },
        {
          score: "191",
          currentCount: 48,
          cumulativeCount: 408005,
        },
        {
          score: "190",
          currentCount: 64,
          cumulativeCount: 408069,
        },
        {
          score: "189",
          currentCount: 48,
          cumulativeCount: 408117,
        },
        {
          score: "188",
          currentCount: 50,
          cumulativeCount: 408167,
        },
        {
          score: "187",
          currentCount: 56,
          cumulativeCount: 408223,
        },
        {
          score: "186",
          currentCount: 52,
          cumulativeCount: 408275,
        },
        {
          score: "185",
          currentCount: 46,
          cumulativeCount: 408321,
        },
        {
          score: "184",
          currentCount: 41,
          cumulativeCount: 408362,
        },
        {
          score: "183",
          currentCount: 32,
          cumulativeCount: 408394,
        },
        {
          score: "182",
          currentCount: 52,
          cumulativeCount: 408446,
        },
        {
          score: "181",
          currentCount: 30,
          cumulativeCount: 408476,
        },
        {
          score: "180",
          currentCount: 39,
          cumulativeCount: 408515,
        },
        {
          score: "179",
          currentCount: 39,
          cumulativeCount: 408554,
        },
        {
          score: "178",
          currentCount: 55,
          cumulativeCount: 408609,
        },
        {
          score: "177",
          currentCount: 46,
          cumulativeCount: 408655,
        },
        {
          score: "176",
          currentCount: 32,
          cumulativeCount: 408687,
        },
        {
          score: "175",
          currentCount: 30,
          cumulativeCount: 408717,
        },
        {
          score: "174",
          currentCount: 18,
          cumulativeCount: 408735,
        },
        {
          score: "173",
          currentCount: 26,
          cumulativeCount: 408761,
        },
        {
          score: "172",
          currentCount: 30,
          cumulativeCount: 408791,
        },
        {
          score: "171",
          currentCount: 27,
          cumulativeCount: 408818,
        },
        {
          score: "170",
          currentCount: 24,
          cumulativeCount: 408842,
        },
        {
          score: "169",
          currentCount: 27,
          cumulativeCount: 408869,
        },
        {
          score: "168",
          currentCount: 23,
          cumulativeCount: 408892,
        },
        {
          score: "167",
          currentCount: 23,
          cumulativeCount: 408915,
        },
        {
          score: "166",
          currentCount: 15,
          cumulativeCount: 408930,
        },
        {
          score: "165",
          currentCount: 24,
          cumulativeCount: 408954,
        },
        {
          score: "164",
          currentCount: 26,
          cumulativeCount: 408980,
        },
        {
          score: "163",
          currentCount: 20,
          cumulativeCount: 409000,
        },
        {
          score: "162",
          currentCount: 19,
          cumulativeCount: 409019,
        },
        {
          score: "161",
          currentCount: 21,
          cumulativeCount: 409040,
        },
        {
          score: "160",
          currentCount: 21,
          cumulativeCount: 409061,
        },
        {
          score: "159",
          currentCount: 16,
          cumulativeCount: 409077,
        },
        {
          score: "158",
          currentCount: 23,
          cumulativeCount: 409100,
        },
        {
          score: "157",
          currentCount: 22,
          cumulativeCount: 409122,
        },
        {
          score: "156",
          currentCount: 20,
          cumulativeCount: 409142,
        },
        {
          score: "155",
          currentCount: 7,
          cumulativeCount: 409149,
        },
        {
          score: "154",
          currentCount: 17,
          cumulativeCount: 409166,
        },
        {
          score: "153",
          currentCount: 17,
          cumulativeCount: 409183,
        },
        {
          score: "152",
          currentCount: 18,
          cumulativeCount: 409201,
        },
        {
          score: "151",
          currentCount: 17,
          cumulativeCount: 409218,
        },
        {
          score: "150",
          currentCount: 9,
          cumulativeCount: 409227,
        },
        {
          score: "149",
          currentCount: 10,
          cumulativeCount: 409237,
        },
        {
          score: "148",
          currentCount: 14,
          cumulativeCount: 409251,
        },
        {
          score: "147",
          currentCount: 10,
          cumulativeCount: 409261,
        },
        {
          score: "146",
          currentCount: 13,
          cumulativeCount: 409274,
        },
        {
          score: "145",
          currentCount: 14,
          cumulativeCount: 409288,
        },
        {
          score: "144",
          currentCount: 14,
          cumulativeCount: 409302,
        },
        {
          score: "143",
          currentCount: 8,
          cumulativeCount: 409310,
        },
        {
          score: "142",
          currentCount: 12,
          cumulativeCount: 409322,
        },
        {
          score: "141",
          currentCount: 15,
          cumulativeCount: 409337,
        },
        {
          score: "140",
          currentCount: 10,
          cumulativeCount: 409347,
        },
        {
          score: "139",
          currentCount: 13,
          cumulativeCount: 409360,
        },
        {
          score: "138",
          currentCount: 7,
          cumulativeCount: 409367,
        },
        {
          score: "137",
          currentCount: 9,
          cumulativeCount: 409376,
        },
        {
          score: "136",
          currentCount: 5,
          cumulativeCount: 409381,
        },
        {
          score: "135",
          currentCount: 12,
          cumulativeCount: 409393,
        },
        {
          score: "134",
          currentCount: 8,
          cumulativeCount: 409401,
        },
        {
          score: "133",
          currentCount: 10,
          cumulativeCount: 409411,
        },
        {
          score: "132",
          currentCount: 11,
          cumulativeCount: 409422,
        },
        {
          score: "131",
          currentCount: 7,
          cumulativeCount: 409429,
        },
        {
          score: "130",
          currentCount: 8,
          cumulativeCount: 409437,
        },
        {
          score: "129",
          currentCount: 5,
          cumulativeCount: 409442,
        },
        {
          score: "128",
          currentCount: 4,
          cumulativeCount: 409446,
        },
        {
          score: "127",
          currentCount: 10,
          cumulativeCount: 409456,
        },
        {
          score: "126",
          currentCount: 7,
          cumulativeCount: 409463,
        },
        {
          score: "125",
          currentCount: 6,
          cumulativeCount: 409469,
        },
        {
          score: "124",
          currentCount: 6,
          cumulativeCount: 409475,
        },
        {
          score: "123",
          currentCount: 5,
          cumulativeCount: 409480,
        },
        {
          score: "122",
          currentCount: 6,
          cumulativeCount: 409486,
        },
        {
          score: "121",
          currentCount: 9,
          cumulativeCount: 409495,
        },
        {
          score: "120",
          currentCount: 3,
          cumulativeCount: 409498,
        },
        {
          score: "119",
          currentCount: 6,
          cumulativeCount: 409504,
        },
        {
          score: "118",
          currentCount: 8,
          cumulativeCount: 409512,
        },
        {
          score: "117",
          currentCount: 1,
          cumulativeCount: 409513,
        },
        {
          score: "116",
          currentCount: 5,
          cumulativeCount: 409518,
        },
        {
          score: "115",
          currentCount: 5,
          cumulativeCount: 409523,
        },
        {
          score: "114",
          currentCount: 4,
          cumulativeCount: 409527,
        },
        {
          score: "113",
          currentCount: 3,
          cumulativeCount: 409530,
        },
        {
          score: "112",
          currentCount: 4,
          cumulativeCount: 409534,
        },
        {
          score: "111",
          currentCount: 7,
          cumulativeCount: 409541,
        },
        {
          score: "110",
          currentCount: 3,
          cumulativeCount: 409544,
        },
        {
          score: "109",
          currentCount: 10,
          cumulativeCount: 409554,
        },
        {
          score: "108",
          currentCount: 4,
          cumulativeCount: 409558,
        },
        {
          score: "107",
          currentCount: 4,
          cumulativeCount: 409562,
        },
        {
          score: "106",
          currentCount: 5,
          cumulativeCount: 409567,
        },
        {
          score: "105",
          currentCount: 7,
          cumulativeCount: 409574,
        },
        {
          score: "104",
          currentCount: 5,
          cumulativeCount: 409579,
        },
        {
          score: "103",
          currentCount: 9,
          cumulativeCount: 409588,
        },
        {
          score: "102",
          currentCount: 2,
          cumulativeCount: 409590,
        },
        {
          score: "101",
          currentCount: 9,
          cumulativeCount: 409599,
        },
        {
          score: "100",
          currentCount: 5,
          cumulativeCount: 409604,
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
                color: "rgba(255,255,255,0.1)",
              },
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 40,
          },
          {
            type: "inside",
            start: 0,
            end: 50,
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
    