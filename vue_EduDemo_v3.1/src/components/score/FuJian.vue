<template>
  <div style="width: 100%; height: 170px" ref="chart"></div>
</template>
    
    <script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      //数据
      chartData: [
        {
          score: "693-750",
          currentCount: 42,
          cumulativeCount: 42,
        },
        {
          score: "692",
          currentCount: 10,
          cumulativeCount: 52,
        },
        {
          score: "691",
          currentCount: 14,
          cumulativeCount: 66,
        },
        {
          score: "690",
          currentCount: 13,
          cumulativeCount: 79,
        },
        {
          score: "689",
          currentCount: 9,
          cumulativeCount: 88,
        },
        {
          score: "688",
          currentCount: 11,
          cumulativeCount: 99,
        },
        {
          score: "687",
          currentCount: 20,
          cumulativeCount: 119,
        },
        {
          score: "686",
          currentCount: 23,
          cumulativeCount: 142,
        },
        {
          score: "685",
          currentCount: 13,
          cumulativeCount: 155,
        },
        {
          score: "684",
          currentCount: 11,
          cumulativeCount: 166,
        },
        {
          score: "683",
          currentCount: 21,
          cumulativeCount: 187,
        },
        {
          score: "682",
          currentCount: 25,
          cumulativeCount: 212,
        },
        {
          score: "681",
          currentCount: 23,
          cumulativeCount: 235,
        },
        {
          score: "680",
          currentCount: 24,
          cumulativeCount: 259,
        },
        {
          score: "679",
          currentCount: 17,
          cumulativeCount: 276,
        },
        {
          score: "678",
          currentCount: 27,
          cumulativeCount: 303,
        },
        {
          score: "677",
          currentCount: 36,
          cumulativeCount: 339,
        },
        {
          score: "676",
          currentCount: 27,
          cumulativeCount: 366,
        },
        {
          score: "675",
          currentCount: 29,
          cumulativeCount: 395,
        },
        {
          score: "674",
          currentCount: 34,
          cumulativeCount: 429,
        },
        {
          score: "673",
          currentCount: 32,
          cumulativeCount: 461,
        },
        {
          score: "672",
          currentCount: 44,
          cumulativeCount: 505,
        },
        {
          score: "671",
          currentCount: 40,
          cumulativeCount: 545,
        },
        {
          score: "670",
          currentCount: 36,
          cumulativeCount: 581,
        },
        {
          score: "669",
          currentCount: 37,
          cumulativeCount: 618,
        },
        {
          score: "668",
          currentCount: 54,
          cumulativeCount: 672,
        },
        {
          score: "667",
          currentCount: 54,
          cumulativeCount: 726,
        },
        {
          score: "666",
          currentCount: 51,
          cumulativeCount: 777,
        },
        {
          score: "665",
          currentCount: 64,
          cumulativeCount: 841,
        },
        {
          score: "664",
          currentCount: 62,
          cumulativeCount: 903,
        },
        {
          score: "663",
          currentCount: 71,
          cumulativeCount: 974,
        },
        {
          score: "662",
          currentCount: 73,
          cumulativeCount: 1047,
        },
        {
          score: "661",
          currentCount: 62,
          cumulativeCount: 1109,
        },
        {
          score: "660",
          currentCount: 62,
          cumulativeCount: 1171,
        },
        {
          score: "659",
          currentCount: 88,
          cumulativeCount: 1259,
        },
        {
          score: "658",
          currentCount: 73,
          cumulativeCount: 1332,
        },
        {
          score: "657",
          currentCount: 91,
          cumulativeCount: 1423,
        },
        {
          score: "656",
          currentCount: 92,
          cumulativeCount: 1515,
        },
        {
          score: "655",
          currentCount: 82,
          cumulativeCount: 1597,
        },
        {
          score: "654",
          currentCount: 96,
          cumulativeCount: 1693,
        },
        {
          score: "653",
          currentCount: 109,
          cumulativeCount: 1802,
        },
        {
          score: "652",
          currentCount: 97,
          cumulativeCount: 1899,
        },
        {
          score: "651",
          currentCount: 92,
          cumulativeCount: 1991,
        },
        {
          score: "650",
          currentCount: 94,
          cumulativeCount: 2085,
        },
        {
          score: "649",
          currentCount: 105,
          cumulativeCount: 2190,
        },
        {
          score: "648",
          currentCount: 113,
          cumulativeCount: 2303,
        },
        {
          score: "647",
          currentCount: 109,
          cumulativeCount: 2412,
        },
        {
          score: "646",
          currentCount: 120,
          cumulativeCount: 2532,
        },
        {
          score: "645",
          currentCount: 103,
          cumulativeCount: 2635,
        },
        {
          score: "644",
          currentCount: 130,
          cumulativeCount: 2765,
        },
        {
          score: "643",
          currentCount: 110,
          cumulativeCount: 2875,
        },
        {
          score: "642",
          currentCount: 135,
          cumulativeCount: 3010,
        },
        {
          score: "641",
          currentCount: 131,
          cumulativeCount: 3141,
        },
        {
          score: "640",
          currentCount: 126,
          cumulativeCount: 3267,
        },
        {
          score: "639",
          currentCount: 122,
          cumulativeCount: 3389,
        },
        {
          score: "638",
          currentCount: 157,
          cumulativeCount: 3546,
        },
        {
          score: "637",
          currentCount: 164,
          cumulativeCount: 3710,
        },
        {
          score: "636",
          currentCount: 171,
          cumulativeCount: 3881,
        },
        {
          score: "635",
          currentCount: 141,
          cumulativeCount: 4022,
        },
        {
          score: "634",
          currentCount: 151,
          cumulativeCount: 4173,
        },
        {
          score: "633",
          currentCount: 162,
          cumulativeCount: 4335,
        },
        {
          score: "632",
          currentCount: 156,
          cumulativeCount: 4491,
        },
        {
          score: "631",
          currentCount: 171,
          cumulativeCount: 4662,
        },
        {
          score: "630",
          currentCount: 162,
          cumulativeCount: 4824,
        },
        {
          score: "629",
          currentCount: 181,
          cumulativeCount: 5005,
        },
        {
          score: "628",
          currentCount: 186,
          cumulativeCount: 5191,
        },
        {
          score: "627",
          currentCount: 183,
          cumulativeCount: 5374,
        },
        {
          score: "626",
          currentCount: 187,
          cumulativeCount: 5561,
        },
        {
          score: "625",
          currentCount: 199,
          cumulativeCount: 5760,
        },
        {
          score: "624",
          currentCount: 203,
          cumulativeCount: 5963,
        },
        {
          score: "623",
          currentCount: 174,
          cumulativeCount: 6137,
        },
        {
          score: "622",
          currentCount: 181,
          cumulativeCount: 6318,
        },
        {
          score: "621",
          currentCount: 216,
          cumulativeCount: 6534,
        },
        {
          score: "620",
          currentCount: 223,
          cumulativeCount: 6757,
        },
        {
          score: "619",
          currentCount: 216,
          cumulativeCount: 6973,
        },
        {
          score: "618",
          currentCount: 229,
          cumulativeCount: 7202,
        },
        {
          score: "617",
          currentCount: 204,
          cumulativeCount: 7406,
        },
        {
          score: "616",
          currentCount: 202,
          cumulativeCount: 7608,
        },
        {
          score: "615",
          currentCount: 220,
          cumulativeCount: 7828,
        },
        {
          score: "614",
          currentCount: 197,
          cumulativeCount: 8025,
        },
        {
          score: "613",
          currentCount: 219,
          cumulativeCount: 8244,
        },
        {
          score: "612",
          currentCount: 233,
          cumulativeCount: 8477,
        },
        {
          score: "611",
          currentCount: 214,
          cumulativeCount: 8691,
        },
        {
          score: "610",
          currentCount: 242,
          cumulativeCount: 8933,
        },
        {
          score: "609",
          currentCount: 228,
          cumulativeCount: 9161,
        },
        {
          score: "608",
          currentCount: 251,
          cumulativeCount: 9412,
        },
        {
          score: "607",
          currentCount: 235,
          cumulativeCount: 9647,
        },
        {
          score: "606",
          currentCount: 224,
          cumulativeCount: 9871,
        },
        {
          score: "605",
          currentCount: 252,
          cumulativeCount: 10123,
        },
        {
          score: "604",
          currentCount: 259,
          cumulativeCount: 10382,
        },
        {
          score: "603",
          currentCount: 255,
          cumulativeCount: 10637,
        },
        {
          score: "602",
          currentCount: 258,
          cumulativeCount: 10895,
        },
        {
          score: "601",
          currentCount: 266,
          cumulativeCount: 11161,
        },
        {
          score: "600",
          currentCount: 254,
          cumulativeCount: 11415,
        },
        {
          score: "599",
          currentCount: 288,
          cumulativeCount: 11703,
        },
        {
          score: "598",
          currentCount: 249,
          cumulativeCount: 11952,
        },
        {
          score: "597",
          currentCount: 298,
          cumulativeCount: 12250,
        },
        {
          score: "596",
          currentCount: 294,
          cumulativeCount: 12544,
        },
        {
          score: "595",
          currentCount: 259,
          cumulativeCount: 12803,
        },
        {
          score: "594",
          currentCount: 294,
          cumulativeCount: 13097,
        },
        {
          score: "593",
          currentCount: 283,
          cumulativeCount: 13380,
        },
        {
          score: "592",
          currentCount: 291,
          cumulativeCount: 13671,
        },
        {
          score: "591",
          currentCount: 294,
          cumulativeCount: 13965,
        },
        {
          score: "590",
          currentCount: 345,
          cumulativeCount: 14310,
        },
        {
          score: "589",
          currentCount: 292,
          cumulativeCount: 14602,
        },
        {
          score: "588",
          currentCount: 330,
          cumulativeCount: 14932,
        },
        {
          score: "587",
          currentCount: 331,
          cumulativeCount: 15263,
        },
        {
          score: "586",
          currentCount: 325,
          cumulativeCount: 15588,
        },
        {
          score: "585",
          currentCount: 341,
          cumulativeCount: 15929,
        },
        {
          score: "584",
          currentCount: 312,
          cumulativeCount: 16241,
        },
        {
          score: "583",
          currentCount: 337,
          cumulativeCount: 16578,
        },
        {
          score: "582",
          currentCount: 318,
          cumulativeCount: 16896,
        },
        {
          score: "581",
          currentCount: 331,
          cumulativeCount: 17227,
        },
        {
          score: "580",
          currentCount: 340,
          cumulativeCount: 17567,
        },
        {
          score: "579",
          currentCount: 347,
          cumulativeCount: 17914,
        },
        {
          score: "578",
          currentCount: 338,
          cumulativeCount: 18252,
        },
        {
          score: "577",
          currentCount: 350,
          cumulativeCount: 18602,
        },
        {
          score: "576",
          currentCount: 355,
          cumulativeCount: 18957,
        },
        {
          score: "575",
          currentCount: 378,
          cumulativeCount: 19335,
        },
        {
          score: "574",
          currentCount: 366,
          cumulativeCount: 19701,
        },
        {
          score: "573",
          currentCount: 390,
          cumulativeCount: 20091,
        },
        {
          score: "572",
          currentCount: 361,
          cumulativeCount: 20452,
        },
        {
          score: "571",
          currentCount: 370,
          cumulativeCount: 20822,
        },
        {
          score: "570",
          currentCount: 343,
          cumulativeCount: 21165,
        },
        {
          score: "569",
          currentCount: 397,
          cumulativeCount: 21562,
        },
        {
          score: "568",
          currentCount: 419,
          cumulativeCount: 21981,
        },
        {
          score: "567",
          currentCount: 370,
          cumulativeCount: 22351,
        },
        {
          score: "566",
          currentCount: 352,
          cumulativeCount: 22703,
        },
        {
          score: "565",
          currentCount: 378,
          cumulativeCount: 23081,
        },
        {
          score: "564",
          currentCount: 363,
          cumulativeCount: 23444,
        },
        {
          score: "563",
          currentCount: 391,
          cumulativeCount: 23835,
        },
        {
          score: "562",
          currentCount: 429,
          cumulativeCount: 24264,
        },
        {
          score: "561",
          currentCount: 425,
          cumulativeCount: 24689,
        },
        {
          score: "560",
          currentCount: 401,
          cumulativeCount: 25090,
        },
        {
          score: "559",
          currentCount: 415,
          cumulativeCount: 25505,
        },
        {
          score: "558",
          currentCount: 393,
          cumulativeCount: 25898,
        },
        {
          score: "557",
          currentCount: 440,
          cumulativeCount: 26338,
        },
        {
          score: "556",
          currentCount: 395,
          cumulativeCount: 26733,
        },
        {
          score: "555",
          currentCount: 429,
          cumulativeCount: 27162,
        },
        {
          score: "554",
          currentCount: 408,
          cumulativeCount: 27570,
        },
        {
          score: "553",
          currentCount: 402,
          cumulativeCount: 27972,
        },
        {
          score: "552",
          currentCount: 423,
          cumulativeCount: 28395,
        },
        {
          score: "551",
          currentCount: 455,
          cumulativeCount: 28850,
        },
        {
          score: "550",
          currentCount: 451,
          cumulativeCount: 29301,
        },
        {
          score: "549",
          currentCount: 494,
          cumulativeCount: 29795,
        },
        {
          score: "548",
          currentCount: 444,
          cumulativeCount: 30239,
        },
        {
          score: "547",
          currentCount: 455,
          cumulativeCount: 30694,
        },
        {
          score: "546",
          currentCount: 454,
          cumulativeCount: 31148,
        },
        {
          score: "545",
          currentCount: 435,
          cumulativeCount: 31583,
        },
        {
          score: "544",
          currentCount: 440,
          cumulativeCount: 32023,
        },
        {
          score: "543",
          currentCount: 457,
          cumulativeCount: 32480,
        },
        {
          score: "542",
          currentCount: 469,
          cumulativeCount: 32949,
        },
        {
          score: "541",
          currentCount: 507,
          cumulativeCount: 33456,
        },
        {
          score: "540",
          currentCount: 474,
          cumulativeCount: 33930,
        },
        {
          score: "539",
          currentCount: 513,
          cumulativeCount: 34443,
        },
        {
          score: "538",
          currentCount: 478,
          cumulativeCount: 34921,
        },
        {
          score: "537",
          currentCount: 474,
          cumulativeCount: 35395,
        },
        {
          score: "536",
          currentCount: 484,
          cumulativeCount: 35879,
        },
        {
          score: "535",
          currentCount: 481,
          cumulativeCount: 36360,
        },
        {
          score: "534",
          currentCount: 516,
          cumulativeCount: 36876,
        },
        {
          score: "533",
          currentCount: 447,
          cumulativeCount: 37323,
        },
        {
          score: "532",
          currentCount: 517,
          cumulativeCount: 37840,
        },
        {
          score: "531",
          currentCount: 513,
          cumulativeCount: 38353,
        },
        {
          score: "530",
          currentCount: 517,
          cumulativeCount: 38870,
        },
        {
          score: "529",
          currentCount: 512,
          cumulativeCount: 39382,
        },
        {
          score: "528",
          currentCount: 492,
          cumulativeCount: 39874,
        },
        {
          score: "527",
          currentCount: 525,
          cumulativeCount: 40399,
        },
        {
          score: "526",
          currentCount: 531,
          cumulativeCount: 40930,
        },
        {
          score: "525",
          currentCount: 519,
          cumulativeCount: 41449,
        },
        {
          score: "524",
          currentCount: 540,
          cumulativeCount: 41989,
        },
        {
          score: "523",
          currentCount: 509,
          cumulativeCount: 42498,
        },
        {
          score: "522",
          currentCount: 538,
          cumulativeCount: 43036,
        },
        {
          score: "521",
          currentCount: 564,
          cumulativeCount: 43600,
        },
        {
          score: "520",
          currentCount: 516,
          cumulativeCount: 44116,
        },
        {
          score: "519",
          currentCount: 471,
          cumulativeCount: 44587,
        },
        {
          score: "518",
          currentCount: 595,
          cumulativeCount: 45182,
        },
        {
          score: "517",
          currentCount: 560,
          cumulativeCount: 45742,
        },
        {
          score: "516",
          currentCount: 529,
          cumulativeCount: 46271,
        },
        {
          score: "515",
          currentCount: 516,
          cumulativeCount: 46787,
        },
        {
          score: "514",
          currentCount: 533,
          cumulativeCount: 47320,
        },
        {
          score: "513",
          currentCount: 537,
          cumulativeCount: 47857,
        },
        {
          score: "512",
          currentCount: 598,
          cumulativeCount: 48455,
        },
        {
          score: "511",
          currentCount: 560,
          cumulativeCount: 49015,
        },
        {
          score: "510",
          currentCount: 524,
          cumulativeCount: 49539,
        },
        {
          score: "509",
          currentCount: 604,
          cumulativeCount: 50143,
        },
        {
          score: "508",
          currentCount: 613,
          cumulativeCount: 50756,
        },
        {
          score: "507",
          currentCount: 551,
          cumulativeCount: 51307,
        },
        {
          score: "506",
          currentCount: 616,
          cumulativeCount: 51923,
        },
        {
          score: "505",
          currentCount: 590,
          cumulativeCount: 52513,
        },
        {
          score: "504",
          currentCount: 570,
          cumulativeCount: 53083,
        },
        {
          score: "503",
          currentCount: 585,
          cumulativeCount: 53668,
        },
        {
          score: "502",
          currentCount: 579,
          cumulativeCount: 54247,
        },
        {
          score: "501",
          currentCount: 570,
          cumulativeCount: 54817,
        },
        {
          score: "500",
          currentCount: 578,
          cumulativeCount: 55395,
        },
        {
          score: "499",
          currentCount: 608,
          cumulativeCount: 56003,
        },
        {
          score: "498",
          currentCount: 613,
          cumulativeCount: 56616,
        },
        {
          score: "497",
          currentCount: 607,
          cumulativeCount: 57223,
        },
        {
          score: "496",
          currentCount: 567,
          cumulativeCount: 57790,
        },
        {
          score: "495",
          currentCount: 618,
          cumulativeCount: 58408,
        },
        {
          score: "494",
          currentCount: 619,
          cumulativeCount: 59027,
        },
        {
          score: "493",
          currentCount: 615,
          cumulativeCount: 59642,
        },
        {
          score: "492",
          currentCount: 639,
          cumulativeCount: 60281,
        },
        {
          score: "491",
          currentCount: 628,
          cumulativeCount: 60909,
        },
        {
          score: "490",
          currentCount: 622,
          cumulativeCount: 61531,
        },
        {
          score: "489",
          currentCount: 631,
          cumulativeCount: 62162,
        },
        {
          score: "488",
          currentCount: 625,
          cumulativeCount: 62787,
        },
        {
          score: "487",
          currentCount: 612,
          cumulativeCount: 63399,
        },
        {
          score: "486",
          currentCount: 685,
          cumulativeCount: 64084,
        },
        {
          score: "485",
          currentCount: 641,
          cumulativeCount: 64725,
        },
        {
          score: "484",
          currentCount: 662,
          cumulativeCount: 65387,
        },
        {
          score: "483",
          currentCount: 596,
          cumulativeCount: 65983,
        },
        {
          score: "482",
          currentCount: 630,
          cumulativeCount: 66613,
        },
        {
          score: "481",
          currentCount: 617,
          cumulativeCount: 67230,
        },
        {
          score: "480",
          currentCount: 657,
          cumulativeCount: 67887,
        },
        {
          score: "479",
          currentCount: 651,
          cumulativeCount: 68538,
        },
        {
          score: "478",
          currentCount: 646,
          cumulativeCount: 69184,
        },
        {
          score: "477",
          currentCount: 658,
          cumulativeCount: 69842,
        },
        {
          score: "476",
          currentCount: 663,
          cumulativeCount: 70505,
        },
        {
          score: "475",
          currentCount: 646,
          cumulativeCount: 71151,
        },
        {
          score: "474",
          currentCount: 674,
          cumulativeCount: 71825,
        },
        {
          score: "473",
          currentCount: 644,
          cumulativeCount: 72469,
        },
        {
          score: "472",
          currentCount: 650,
          cumulativeCount: 73119,
        },
        {
          score: "471",
          currentCount: 694,
          cumulativeCount: 73813,
        },
        {
          score: "470",
          currentCount: 633,
          cumulativeCount: 74446,
        },
        {
          score: "469",
          currentCount: 720,
          cumulativeCount: 75166,
        },
        {
          score: "468",
          currentCount: 651,
          cumulativeCount: 75817,
        },
        {
          score: "467",
          currentCount: 703,
          cumulativeCount: 76520,
        },
        {
          score: "466",
          currentCount: 694,
          cumulativeCount: 77214,
        },
        {
          score: "465",
          currentCount: 688,
          cumulativeCount: 77902,
        },
        {
          score: "464",
          currentCount: 669,
          cumulativeCount: 78571,
        },
        {
          score: "463",
          currentCount: 644,
          cumulativeCount: 79215,
        },
        {
          score: "462",
          currentCount: 653,
          cumulativeCount: 79868,
        },
        {
          score: "461",
          currentCount: 667,
          cumulativeCount: 80535,
        },
        {
          score: "460",
          currentCount: 677,
          cumulativeCount: 81212,
        },
        {
          score: "459",
          currentCount: 670,
          cumulativeCount: 81882,
        },
        {
          score: "458",
          currentCount: 677,
          cumulativeCount: 82559,
        },
        {
          score: "457",
          currentCount: 697,
          cumulativeCount: 83256,
        },
        {
          score: "456",
          currentCount: 702,
          cumulativeCount: 83958,
        },
        {
          score: "455",
          currentCount: 683,
          cumulativeCount: 84641,
        },
        {
          score: "454",
          currentCount: 632,
          cumulativeCount: 85273,
        },
        {
          score: "453",
          currentCount: 719,
          cumulativeCount: 85992,
        },
        {
          score: "452",
          currentCount: 694,
          cumulativeCount: 86686,
        },
        {
          score: "451",
          currentCount: 643,
          cumulativeCount: 87329,
        },
        {
          score: "450",
          currentCount: 685,
          cumulativeCount: 88014,
        },
        {
          score: "449",
          currentCount: 656,
          cumulativeCount: 88670,
        },
        {
          score: "448",
          currentCount: 716,
          cumulativeCount: 89386,
        },
        {
          score: "447",
          currentCount: 669,
          cumulativeCount: 90055,
        },
        {
          score: "446",
          currentCount: 761,
          cumulativeCount: 90816,
        },
        {
          score: "445",
          currentCount: 690,
          cumulativeCount: 91506,
        },
        {
          score: "444",
          currentCount: 702,
          cumulativeCount: 92208,
        },
        {
          score: "443",
          currentCount: 747,
          cumulativeCount: 92955,
        },
        {
          score: "442",
          currentCount: 677,
          cumulativeCount: 93632,
        },
        {
          score: "441",
          currentCount: 646,
          cumulativeCount: 94278,
        },
        {
          score: "440",
          currentCount: 742,
          cumulativeCount: 95020,
        },
        {
          score: "439",
          currentCount: 637,
          cumulativeCount: 95657,
        },
        {
          score: "438",
          currentCount: 711,
          cumulativeCount: 96368,
        },
        {
          score: "437",
          currentCount: 711,
          cumulativeCount: 97079,
        },
        {
          score: "436",
          currentCount: 711,
          cumulativeCount: 97790,
        },
        {
          score: "435",
          currentCount: 663,
          cumulativeCount: 98453,
        },
        {
          score: "434",
          currentCount: 690,
          cumulativeCount: 99143,
        },
        {
          score: "433",
          currentCount: 703,
          cumulativeCount: 99846,
        },
        {
          score: "432",
          currentCount: 698,
          cumulativeCount: 100544,
        },
        {
          score: "431",
          currentCount: 681,
          cumulativeCount: 101225,
        },
        {
          score: "430",
          currentCount: 660,
          cumulativeCount: 101885,
        },
        {
          score: "429",
          currentCount: 712,
          cumulativeCount: 102597,
        },
        {
          score: "428",
          currentCount: 680,
          cumulativeCount: 103277,
        },
        {
          score: "427",
          currentCount: 661,
          cumulativeCount: 103938,
        },
        {
          score: "426",
          currentCount: 652,
          cumulativeCount: 104590,
        },
        {
          score: "425",
          currentCount: 703,
          cumulativeCount: 105293,
        },
        {
          score: "424",
          currentCount: 645,
          cumulativeCount: 105938,
        },
        {
          score: "423",
          currentCount: 701,
          cumulativeCount: 106639,
        },
        {
          score: "422",
          currentCount: 691,
          cumulativeCount: 107330,
        },
        {
          score: "421",
          currentCount: 630,
          cumulativeCount: 107960,
        },
        {
          score: "420",
          currentCount: 675,
          cumulativeCount: 108635,
        },
        {
          score: "419",
          currentCount: 667,
          cumulativeCount: 109302,
        },
        {
          score: "418",
          currentCount: 664,
          cumulativeCount: 109966,
        },
        {
          score: "417",
          currentCount: 682,
          cumulativeCount: 110648,
        },
        {
          score: "416",
          currentCount: 609,
          cumulativeCount: 111257,
        },
        {
          score: "415",
          currentCount: 665,
          cumulativeCount: 111922,
        },
        {
          score: "414",
          currentCount: 653,
          cumulativeCount: 112575,
        },
        {
          score: "413",
          currentCount: 646,
          cumulativeCount: 113221,
        },
        {
          score: "412",
          currentCount: 618,
          cumulativeCount: 113839,
        },
        {
          score: "411",
          currentCount: 655,
          cumulativeCount: 114494,
        },
        {
          score: "410",
          currentCount: 594,
          cumulativeCount: 115088,
        },
        {
          score: "409",
          currentCount: 633,
          cumulativeCount: 115721,
        },
        {
          score: "408",
          currentCount: 613,
          cumulativeCount: 116334,
        },
        {
          score: "407",
          currentCount: 656,
          cumulativeCount: 116990,
        },
        {
          score: "406",
          currentCount: 604,
          cumulativeCount: 117594,
        },
        {
          score: "405",
          currentCount: 611,
          cumulativeCount: 118205,
        },
        {
          score: "404",
          currentCount: 610,
          cumulativeCount: 118815,
        },
        {
          score: "403",
          currentCount: 594,
          cumulativeCount: 119409,
        },
        {
          score: "402",
          currentCount: 551,
          cumulativeCount: 119960,
        },
        {
          score: "401",
          currentCount: 592,
          cumulativeCount: 120552,
        },
        {
          score: "400",
          currentCount: 616,
          cumulativeCount: 121168,
        },
        {
          score: "399",
          currentCount: 599,
          cumulativeCount: 121767,
        },
        {
          score: "398",
          currentCount: 580,
          cumulativeCount: 122347,
        },
        {
          score: "397",
          currentCount: 593,
          cumulativeCount: 122940,
        },
        {
          score: "396",
          currentCount: 607,
          cumulativeCount: 123547,
        },
        {
          score: "395",
          currentCount: 524,
          cumulativeCount: 124071,
        },
        {
          score: "394",
          currentCount: 587,
          cumulativeCount: 124658,
        },
        {
          score: "393",
          currentCount: 590,
          cumulativeCount: 125248,
        },
        {
          score: "392",
          currentCount: 575,
          cumulativeCount: 125823,
        },
        {
          score: "391",
          currentCount: 550,
          cumulativeCount: 126373,
        },
        {
          score: "390",
          currentCount: 537,
          cumulativeCount: 126910,
        },
        {
          score: "389",
          currentCount: 507,
          cumulativeCount: 127417,
        },
        {
          score: "388",
          currentCount: 560,
          cumulativeCount: 127977,
        },
        {
          score: "387",
          currentCount: 563,
          cumulativeCount: 128540,
        },
        {
          score: "386",
          currentCount: 493,
          cumulativeCount: 129033,
        },
        {
          score: "385",
          currentCount: 505,
          cumulativeCount: 129538,
        },
        {
          score: "384",
          currentCount: 497,
          cumulativeCount: 130035,
        },
        {
          score: "383",
          currentCount: 511,
          cumulativeCount: 130546,
        },
        {
          score: "382",
          currentCount: 535,
          cumulativeCount: 131081,
        },
        {
          score: "381",
          currentCount: 518,
          cumulativeCount: 131599,
        },
        {
          score: "380",
          currentCount: 500,
          cumulativeCount: 132099,
        },
        {
          score: "379",
          currentCount: 512,
          cumulativeCount: 132611,
        },
        {
          score: "378",
          currentCount: 508,
          cumulativeCount: 133119,
        },
        {
          score: "377",
          currentCount: 462,
          cumulativeCount: 133581,
        },
        {
          score: "376",
          currentCount: 468,
          cumulativeCount: 134049,
        },
        {
          score: "375",
          currentCount: 500,
          cumulativeCount: 134549,
        },
        {
          score: "374",
          currentCount: 495,
          cumulativeCount: 135044,
        },
        {
          score: "373",
          currentCount: 466,
          cumulativeCount: 135510,
        },
        {
          score: "372",
          currentCount: 438,
          cumulativeCount: 135948,
        },
        {
          score: "371",
          currentCount: 474,
          cumulativeCount: 136422,
        },
        {
          score: "370",
          currentCount: 452,
          cumulativeCount: 136874,
        },
        {
          score: "369",
          currentCount: 489,
          cumulativeCount: 137363,
        },
        {
          score: "368",
          currentCount: 454,
          cumulativeCount: 137817,
        },
        {
          score: "367",
          currentCount: 454,
          cumulativeCount: 138271,
        },
        {
          score: "366",
          currentCount: 451,
          cumulativeCount: 138722,
        },
        {
          score: "365",
          currentCount: 430,
          cumulativeCount: 139152,
        },
        {
          score: "364",
          currentCount: 426,
          cumulativeCount: 139578,
        },
        {
          score: "363",
          currentCount: 414,
          cumulativeCount: 139992,
        },
        {
          score: "362",
          currentCount: 402,
          cumulativeCount: 140394,
        },
        {
          score: "361",
          currentCount: 407,
          cumulativeCount: 140801,
        },
        {
          score: "360",
          currentCount: 419,
          cumulativeCount: 141220,
        },
        {
          score: "359",
          currentCount: 364,
          cumulativeCount: 141584,
        },
        {
          score: "358",
          currentCount: 397,
          cumulativeCount: 141981,
        },
        {
          score: "357",
          currentCount: 390,
          cumulativeCount: 142371,
        },
        {
          score: "356",
          currentCount: 391,
          cumulativeCount: 142762,
        },
        {
          score: "355",
          currentCount: 422,
          cumulativeCount: 143184,
        },
        {
          score: "354",
          currentCount: 381,
          cumulativeCount: 143565,
        },
        {
          score: "353",
          currentCount: 366,
          cumulativeCount: 143931,
        },
        {
          score: "352",
          currentCount: 377,
          cumulativeCount: 144308,
        },
        {
          score: "351",
          currentCount: 368,
          cumulativeCount: 144676,
        },
        {
          score: "350",
          currentCount: 369,
          cumulativeCount: 145045,
        },
        {
          score: "349",
          currentCount: 375,
          cumulativeCount: 145420,
        },
        {
          score: "348",
          currentCount: 364,
          cumulativeCount: 145784,
        },
        {
          score: "347",
          currentCount: 363,
          cumulativeCount: 146147,
        },
        {
          score: "346",
          currentCount: 356,
          cumulativeCount: 146503,
        },
        {
          score: "345",
          currentCount: 338,
          cumulativeCount: 146841,
        },
        {
          score: "344",
          currentCount: 343,
          cumulativeCount: 147184,
        },
        {
          score: "343",
          currentCount: 325,
          cumulativeCount: 147509,
        },
        {
          score: "342",
          currentCount: 344,
          cumulativeCount: 147853,
        },
        {
          score: "341",
          currentCount: 361,
          cumulativeCount: 148214,
        },
        {
          score: "340",
          currentCount: 319,
          cumulativeCount: 148533,
        },
        {
          score: "339",
          currentCount: 302,
          cumulativeCount: 148835,
        },
        {
          score: "338",
          currentCount: 321,
          cumulativeCount: 149156,
        },
        {
          score: "337",
          currentCount: 306,
          cumulativeCount: 149462,
        },
        {
          score: "336",
          currentCount: 293,
          cumulativeCount: 149755,
        },
        {
          score: "335",
          currentCount: 292,
          cumulativeCount: 150047,
        },
        {
          score: "334",
          currentCount: 292,
          cumulativeCount: 150339,
        },
        {
          score: "333",
          currentCount: 296,
          cumulativeCount: 150635,
        },
        {
          score: "332",
          currentCount: 312,
          cumulativeCount: 150947,
        },
        {
          score: "331",
          currentCount: 297,
          cumulativeCount: 151244,
        },
        {
          score: "330",
          currentCount: 289,
          cumulativeCount: 151533,
        },
        {
          score: "329",
          currentCount: 263,
          cumulativeCount: 151796,
        },
        {
          score: "328",
          currentCount: 297,
          cumulativeCount: 152093,
        },
        {
          score: "327",
          currentCount: 295,
          cumulativeCount: 152388,
        },
        {
          score: "326",
          currentCount: 237,
          cumulativeCount: 152625,
        },
        {
          score: "325",
          currentCount: 254,
          cumulativeCount: 152879,
        },
        {
          score: "324",
          currentCount: 258,
          cumulativeCount: 153137,
        },
        {
          score: "323",
          currentCount: 267,
          cumulativeCount: 153404,
        },
        {
          score: "322",
          currentCount: 238,
          cumulativeCount: 153642,
        },
        {
          score: "321",
          currentCount: 259,
          cumulativeCount: 153901,
        },
        {
          score: "320",
          currentCount: 258,
          cumulativeCount: 154159,
        },
        {
          score: "319",
          currentCount: 243,
          cumulativeCount: 154402,
        },
        {
          score: "318",
          currentCount: 244,
          cumulativeCount: 154646,
        },
        {
          score: "317",
          currentCount: 249,
          cumulativeCount: 154895,
        },
        {
          score: "316",
          currentCount: 224,
          cumulativeCount: 155119,
        },
        {
          score: "315",
          currentCount: 261,
          cumulativeCount: 155380,
        },
        {
          score: "314",
          currentCount: 253,
          cumulativeCount: 155633,
        },
        {
          score: "313",
          currentCount: 210,
          cumulativeCount: 155843,
        },
        {
          score: "312",
          currentCount: 213,
          cumulativeCount: 156056,
        },
        {
          score: "311",
          currentCount: 208,
          cumulativeCount: 156264,
        },
        {
          score: "310",
          currentCount: 210,
          cumulativeCount: 156474,
        },
        {
          score: "309",
          currentCount: 227,
          cumulativeCount: 156701,
        },
        {
          score: "308",
          currentCount: 215,
          cumulativeCount: 156916,
        },
        {
          score: "307",
          currentCount: 202,
          cumulativeCount: 157118,
        },
        {
          score: "306",
          currentCount: 205,
          cumulativeCount: 157323,
        },
        {
          score: "305",
          currentCount: 210,
          cumulativeCount: 157533,
        },
        {
          score: "304",
          currentCount: 186,
          cumulativeCount: 157719,
        },
        {
          score: "303",
          currentCount: 191,
          cumulativeCount: 157910,
        },
        {
          score: "302",
          currentCount: 183,
          cumulativeCount: 158093,
        },
        {
          score: "301",
          currentCount: 172,
          cumulativeCount: 158265,
        },
        {
          score: "300",
          currentCount: 188,
          cumulativeCount: 158453,
        },
        {
          score: "299",
          currentCount: 152,
          cumulativeCount: 158605,
        },
        {
          score: "298",
          currentCount: 202,
          cumulativeCount: 158807,
        },
        {
          score: "297",
          currentCount: 168,
          cumulativeCount: 158975,
        },
        {
          score: "296",
          currentCount: 165,
          cumulativeCount: 159140,
        },
        {
          score: "295",
          currentCount: 154,
          cumulativeCount: 159294,
        },
        {
          score: "294",
          currentCount: 164,
          cumulativeCount: 159458,
        },
        {
          score: "293",
          currentCount: 206,
          cumulativeCount: 159664,
        },
        {
          score: "292",
          currentCount: 148,
          cumulativeCount: 159812,
        },
        {
          score: "291",
          currentCount: 165,
          cumulativeCount: 159977,
        },
        {
          score: "290",
          currentCount: 151,
          cumulativeCount: 160128,
        },
        {
          score: "289",
          currentCount: 163,
          cumulativeCount: 160291,
        },
        {
          score: "288",
          currentCount: 149,
          cumulativeCount: 160440,
        },
        {
          score: "287",
          currentCount: 140,
          cumulativeCount: 160580,
        },
        {
          score: "286",
          currentCount: 138,
          cumulativeCount: 160718,
        },
        {
          score: "285",
          currentCount: 136,
          cumulativeCount: 160854,
        },
        {
          score: "284",
          currentCount: 148,
          cumulativeCount: 161002,
        },
        {
          score: "283",
          currentCount: 142,
          cumulativeCount: 161144,
        },
        {
          score: "282",
          currentCount: 127,
          cumulativeCount: 161271,
        },
        {
          score: "281",
          currentCount: 132,
          cumulativeCount: 161403,
        },
        {
          score: "280",
          currentCount: 117,
          cumulativeCount: 161520,
        },
        {
          score: "279",
          currentCount: 108,
          cumulativeCount: 161628,
        },
        {
          score: "278",
          currentCount: 111,
          cumulativeCount: 161739,
        },
        {
          score: "277",
          currentCount: 108,
          cumulativeCount: 161847,
        },
        {
          score: "276",
          currentCount: 127,
          cumulativeCount: 161974,
        },
        {
          score: "275",
          currentCount: 105,
          cumulativeCount: 162079,
        },
        {
          score: "274",
          currentCount: 98,
          cumulativeCount: 162177,
        },
        {
          score: "273",
          currentCount: 100,
          cumulativeCount: 162277,
        },
        {
          score: "272",
          currentCount: 123,
          cumulativeCount: 162400,
        },
        {
          score: "271",
          currentCount: 102,
          cumulativeCount: 162502,
        },
        {
          score: "270",
          currentCount: 84,
          cumulativeCount: 162586,
        },
        {
          score: "269",
          currentCount: 86,
          cumulativeCount: 162672,
        },
        {
          score: "268",
          currentCount: 94,
          cumulativeCount: 162766,
        },
        {
          score: "267",
          currentCount: 82,
          cumulativeCount: 162848,
        },
        {
          score: "266",
          currentCount: 82,
          cumulativeCount: 162930,
        },
        {
          score: "265",
          currentCount: 93,
          cumulativeCount: 163023,
        },
        {
          score: "264",
          currentCount: 86,
          cumulativeCount: 163109,
        },
        {
          score: "263",
          currentCount: 72,
          cumulativeCount: 163181,
        },
        {
          score: "262",
          currentCount: 83,
          cumulativeCount: 163264,
        },
        {
          score: "261",
          currentCount: 80,
          cumulativeCount: 163344,
        },
        {
          score: "260",
          currentCount: 81,
          cumulativeCount: 163425,
        },
        {
          score: "259",
          currentCount: 68,
          cumulativeCount: 163493,
        },
        {
          score: "258",
          currentCount: 60,
          cumulativeCount: 163553,
        },
        {
          score: "257",
          currentCount: 69,
          cumulativeCount: 163622,
        },
        {
          score: "256",
          currentCount: 57,
          cumulativeCount: 163679,
        },
        {
          score: "255",
          currentCount: 56,
          cumulativeCount: 163735,
        },
        {
          score: "254",
          currentCount: 56,
          cumulativeCount: 163791,
        },
        {
          score: "253",
          currentCount: 63,
          cumulativeCount: 163854,
        },
        {
          score: "252",
          currentCount: 60,
          cumulativeCount: 163914,
        },
        {
          score: "251",
          currentCount: 45,
          cumulativeCount: 163959,
        },
        {
          score: "250",
          currentCount: 46,
          cumulativeCount: 164005,
        },
        {
          score: "249",
          currentCount: 50,
          cumulativeCount: 164055,
        },
        {
          score: "248",
          currentCount: 50,
          cumulativeCount: 164105,
        },
        {
          score: "247",
          currentCount: 64,
          cumulativeCount: 164169,
        },
        {
          score: "246",
          currentCount: 48,
          cumulativeCount: 164217,
        },
        {
          score: "245",
          currentCount: 42,
          cumulativeCount: 164259,
        },
        {
          score: "244",
          currentCount: 44,
          cumulativeCount: 164303,
        },
        {
          score: "243",
          currentCount: 40,
          cumulativeCount: 164343,
        },
        {
          score: "242",
          currentCount: 44,
          cumulativeCount: 164387,
        },
        {
          score: "241",
          currentCount: 34,
          cumulativeCount: 164421,
        },
        {
          score: "240",
          currentCount: 45,
          cumulativeCount: 164466,
        },
        {
          score: "239",
          currentCount: 35,
          cumulativeCount: 164501,
        },
        {
          score: "238",
          currentCount: 30,
          cumulativeCount: 164531,
        },
        {
          score: "237",
          currentCount: 39,
          cumulativeCount: 164570,
        },
        {
          score: "236",
          currentCount: 33,
          cumulativeCount: 164603,
        },
        {
          score: "235",
          currentCount: 26,
          cumulativeCount: 164629,
        },
        {
          score: "234",
          currentCount: 38,
          cumulativeCount: 164667,
        },
        {
          score: "233",
          currentCount: 29,
          cumulativeCount: 164696,
        },
        {
          score: "232",
          currentCount: 26,
          cumulativeCount: 164722,
        },
        {
          score: "231",
          currentCount: 24,
          cumulativeCount: 164746,
        },
        {
          score: "230",
          currentCount: 28,
          cumulativeCount: 164774,
        },
        {
          score: "229",
          currentCount: 25,
          cumulativeCount: 164799,
        },
        {
          score: "228",
          currentCount: 27,
          cumulativeCount: 164826,
        },
        {
          score: "227",
          currentCount: 18,
          cumulativeCount: 164844,
        },
        {
          score: "226",
          currentCount: 20,
          cumulativeCount: 164864,
        },
        {
          score: "225",
          currentCount: 18,
          cumulativeCount: 164882,
        },
        {
          score: "224",
          currentCount: 24,
          cumulativeCount: 164906,
        },
        {
          score: "223",
          currentCount: 18,
          cumulativeCount: 164924,
        },
        {
          score: "222",
          currentCount: 15,
          cumulativeCount: 164939,
        },
        {
          score: "221",
          currentCount: 17,
          cumulativeCount: 164956,
        },
        {
          score: "220",
          currentCount: 22,
          cumulativeCount: 164978,
        },
        {
          score: "219",
          currentCount: 17,
          cumulativeCount: 164995,
        },
        {
          score: "218",
          currentCount: 18,
          cumulativeCount: 165013,
        },
        {
          score: "217",
          currentCount: 10,
          cumulativeCount: 165023,
        },
        {
          score: "216",
          currentCount: 17,
          cumulativeCount: 165040,
        },
        {
          score: "215",
          currentCount: 10,
          cumulativeCount: 165050,
        },
        {
          score: "214",
          currentCount: 13,
          cumulativeCount: 165063,
        },
        {
          score: "213",
          currentCount: 15,
          cumulativeCount: 165078,
        },
        {
          score: "212",
          currentCount: 16,
          cumulativeCount: 165094,
        },
        {
          score: "211",
          currentCount: 11,
          cumulativeCount: 165105,
        },
        {
          score: "210",
          currentCount: 9,
          cumulativeCount: 165114,
        },
        {
          score: "209",
          currentCount: 5,
          cumulativeCount: 165119,
        },
        {
          score: "208",
          currentCount: 8,
          cumulativeCount: 165127,
        },
        {
          score: "207",
          currentCount: 10,
          cumulativeCount: 165137,
        },
        {
          score: "206",
          currentCount: 13,
          cumulativeCount: 165150,
        },
        {
          score: "205",
          currentCount: 15,
          cumulativeCount: 165165,
        },
        {
          score: "204",
          currentCount: 6,
          cumulativeCount: 165171,
        },
        {
          score: "203",
          currentCount: 5,
          cumulativeCount: 165176,
        },
        {
          score: "202",
          currentCount: 8,
          cumulativeCount: 165184,
        },
        {
          score: "201",
          currentCount: 11,
          cumulativeCount: 165195,
        },
        {
          score: "200",
          currentCount: 7,
          cumulativeCount: 165202,
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
                color: "rgba(255,255,255,0.01)",

              },
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 50,
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
    