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
          score: "696-750",
          currentCount: 104,
          cumulativeCount: 104,
        },
        {
          score: "695",
          currentCount: 11,
          cumulativeCount: 115,
        },
        {
          score: "694",
          currentCount: 12,
          cumulativeCount: 127,
        },
        {
          score: "693",
          currentCount: 17,
          cumulativeCount: 144,
        },
        {
          score: "692",
          currentCount: 24,
          cumulativeCount: 168,
        },
        {
          score: "691",
          currentCount: 24,
          cumulativeCount: 192,
        },
        {
          score: "690",
          currentCount: 29,
          cumulativeCount: 221,
        },
        {
          score: "689",
          currentCount: 30,
          cumulativeCount: 251,
        },
        {
          score: "688",
          currentCount: 33,
          cumulativeCount: 284,
        },
        {
          score: "687",
          currentCount: 29,
          cumulativeCount: 313,
        },
        {
          score: "686",
          currentCount: 23,
          cumulativeCount: 336,
        },
        {
          score: "685",
          currentCount: 32,
          cumulativeCount: 368,
        },
        {
          score: "684",
          currentCount: 34,
          cumulativeCount: 402,
        },
        {
          score: "683",
          currentCount: 40,
          cumulativeCount: 442,
        },
        {
          score: "682",
          currentCount: 40,
          cumulativeCount: 482,
        },
        {
          score: "681",
          currentCount: 32,
          cumulativeCount: 514,
        },
        {
          score: "680",
          currentCount: 40,
          cumulativeCount: 554,
        },
        {
          score: "679",
          currentCount: 52,
          cumulativeCount: 606,
        },
        {
          score: "678",
          currentCount: 44,
          cumulativeCount: 650,
        },
        {
          score: "677",
          currentCount: 44,
          cumulativeCount: 694,
        },
        {
          score: "676",
          currentCount: 37,
          cumulativeCount: 731,
        },
        {
          score: "675",
          currentCount: 60,
          cumulativeCount: 791,
        },
        {
          score: "674",
          currentCount: 47,
          cumulativeCount: 838,
        },
        {
          score: "673",
          currentCount: 56,
          cumulativeCount: 894,
        },
        {
          score: "672",
          currentCount: 46,
          cumulativeCount: 940,
        },
        {
          score: "671",
          currentCount: 69,
          cumulativeCount: 1009,
        },
        {
          score: "670",
          currentCount: 57,
          cumulativeCount: 1066,
        },
        {
          score: "669",
          currentCount: 61,
          cumulativeCount: 1127,
        },
        {
          score: "668",
          currentCount: 65,
          cumulativeCount: 1192,
        },
        {
          score: "667",
          currentCount: 72,
          cumulativeCount: 1264,
        },
        {
          score: "666",
          currentCount: 73,
          cumulativeCount: 1337,
        },
        {
          score: "665",
          currentCount: 82,
          cumulativeCount: 1419,
        },
        {
          score: "664",
          currentCount: 66,
          cumulativeCount: 1485,
        },
        {
          score: "663",
          currentCount: 96,
          cumulativeCount: 1581,
        },
        {
          score: "662",
          currentCount: 81,
          cumulativeCount: 1662,
        },
        {
          score: "661",
          currentCount: 82,
          cumulativeCount: 1744,
        },
        {
          score: "660",
          currentCount: 92,
          cumulativeCount: 1836,
        },
        {
          score: "659",
          currentCount: 65,
          cumulativeCount: 1901,
        },
        {
          score: "658",
          currentCount: 78,
          cumulativeCount: 1979,
        },
        {
          score: "657",
          currentCount: 104,
          cumulativeCount: 2083,
        },
        {
          score: "656",
          currentCount: 97,
          cumulativeCount: 2180,
        },
        {
          score: "655",
          currentCount: 89,
          cumulativeCount: 2269,
        },
        {
          score: "654",
          currentCount: 100,
          cumulativeCount: 2369,
        },
        {
          score: "653",
          currentCount: 88,
          cumulativeCount: 2457,
        },
        {
          score: "652",
          currentCount: 87,
          cumulativeCount: 2544,
        },
        {
          score: "651",
          currentCount: 104,
          cumulativeCount: 2648,
        },
        {
          score: "650",
          currentCount: 106,
          cumulativeCount: 2754,
        },
        {
          score: "649",
          currentCount: 120,
          cumulativeCount: 2874,
        },
        {
          score: "648",
          currentCount: 116,
          cumulativeCount: 2990,
        },
        {
          score: "647",
          currentCount: 106,
          cumulativeCount: 3096,
        },
        {
          score: "646",
          currentCount: 128,
          cumulativeCount: 3224,
        },
        {
          score: "645",
          currentCount: 123,
          cumulativeCount: 3347,
        },
        {
          score: "644",
          currentCount: 108,
          cumulativeCount: 3455,
        },
        {
          score: "643",
          currentCount: 108,
          cumulativeCount: 3563,
        },
        {
          score: "642",
          currentCount: 134,
          cumulativeCount: 3697,
        },
        {
          score: "641",
          currentCount: 119,
          cumulativeCount: 3816,
        },
        {
          score: "640",
          currentCount: 109,
          cumulativeCount: 3925,
        },
        {
          score: "639",
          currentCount: 145,
          cumulativeCount: 4070,
        },
        {
          score: "638",
          currentCount: 122,
          cumulativeCount: 4192,
        },
        {
          score: "637",
          currentCount: 133,
          cumulativeCount: 4325,
        },
        {
          score: "636",
          currentCount: 133,
          cumulativeCount: 4458,
        },
        {
          score: "635",
          currentCount: 146,
          cumulativeCount: 4604,
        },
        {
          score: "634",
          currentCount: 125,
          cumulativeCount: 4729,
        },
        {
          score: "633",
          currentCount: 152,
          cumulativeCount: 4881,
        },
        {
          score: "632",
          currentCount: 148,
          cumulativeCount: 5029,
        },
        {
          score: "631",
          currentCount: 132,
          cumulativeCount: 5161,
        },
        {
          score: "630",
          currentCount: 147,
          cumulativeCount: 5308,
        },
        {
          score: "629",
          currentCount: 149,
          cumulativeCount: 5457,
        },
        {
          score: "628",
          currentCount: 139,
          cumulativeCount: 5596,
        },
        {
          score: "627",
          currentCount: 159,
          cumulativeCount: 5755,
        },
        {
          score: "626",
          currentCount: 140,
          cumulativeCount: 5895,
        },
        {
          score: "625",
          currentCount: 150,
          cumulativeCount: 6045,
        },
        {
          score: "624",
          currentCount: 157,
          cumulativeCount: 6202,
        },
        {
          score: "623",
          currentCount: 173,
          cumulativeCount: 6375,
        },
        {
          score: "622",
          currentCount: 153,
          cumulativeCount: 6528,
        },
        {
          score: "621",
          currentCount: 163,
          cumulativeCount: 6691,
        },
        {
          score: "620",
          currentCount: 170,
          cumulativeCount: 6861,
        },
        {
          score: "619",
          currentCount: 176,
          cumulativeCount: 7037,
        },
        {
          score: "618",
          currentCount: 165,
          cumulativeCount: 7202,
        },
        {
          score: "617",
          currentCount: 159,
          cumulativeCount: 7361,
        },
        {
          score: "616",
          currentCount: 181,
          cumulativeCount: 7542,
        },
        {
          score: "615",
          currentCount: 158,
          cumulativeCount: 7700,
        },
        {
          score: "614",
          currentCount: 162,
          cumulativeCount: 7862,
        },
        {
          score: "613",
          currentCount: 137,
          cumulativeCount: 7999,
        },
        {
          score: "612",
          currentCount: 148,
          cumulativeCount: 8147,
        },
        {
          score: "611",
          currentCount: 182,
          cumulativeCount: 8329,
        },
        {
          score: "610",
          currentCount: 193,
          cumulativeCount: 8522,
        },
        {
          score: "609",
          currentCount: 170,
          cumulativeCount: 8692,
        },
        {
          score: "608",
          currentCount: 168,
          cumulativeCount: 8860,
        },
        {
          score: "607",
          currentCount: 172,
          cumulativeCount: 9032,
        },
        {
          score: "606",
          currentCount: 165,
          cumulativeCount: 9197,
        },
        {
          score: "605",
          currentCount: 170,
          cumulativeCount: 9367,
        },
        {
          score: "604",
          currentCount: 207,
          cumulativeCount: 9574,
        },
        {
          score: "603",
          currentCount: 191,
          cumulativeCount: 9765,
        },
        {
          score: "602",
          currentCount: 234,
          cumulativeCount: 9999,
        },
        {
          score: "601",
          currentCount: 169,
          cumulativeCount: 10168,
        },
        {
          score: "600",
          currentCount: 180,
          cumulativeCount: 10348,
        },
        {
          score: "599",
          currentCount: 160,
          cumulativeCount: 10508,
        },
        {
          score: "598",
          currentCount: 191,
          cumulativeCount: 10699,
        },
        {
          score: "597",
          currentCount: 160,
          cumulativeCount: 10859,
        },
        {
          score: "596",
          currentCount: 212,
          cumulativeCount: 11071,
        },
        {
          score: "595",
          currentCount: 204,
          cumulativeCount: 11275,
        },
        {
          score: "594",
          currentCount: 201,
          cumulativeCount: 11476,
        },
        {
          score: "593",
          currentCount: 182,
          cumulativeCount: 11658,
        },
        {
          score: "592",
          currentCount: 200,
          cumulativeCount: 11858,
        },
        {
          score: "591",
          currentCount: 189,
          cumulativeCount: 12047,
        },
        {
          score: "590",
          currentCount: 200,
          cumulativeCount: 12247,
        },
        {
          score: "589",
          currentCount: 193,
          cumulativeCount: 12440,
        },
        {
          score: "588",
          currentCount: 178,
          cumulativeCount: 12618,
        },
        {
          score: "587",
          currentCount: 174,
          cumulativeCount: 12792,
        },
        {
          score: "586",
          currentCount: 215,
          cumulativeCount: 13007,
        },
        {
          score: "585",
          currentCount: 198,
          cumulativeCount: 13205,
        },
        {
          score: "584",
          currentCount: 192,
          cumulativeCount: 13397,
        },
        {
          score: "583",
          currentCount: 214,
          cumulativeCount: 13611,
        },
        {
          score: "582",
          currentCount: 187,
          cumulativeCount: 13798,
        },
        {
          score: "581",
          currentCount: 198,
          cumulativeCount: 13996,
        },
        {
          score: "580",
          currentCount: 190,
          cumulativeCount: 14186,
        },
        {
          score: "579",
          currentCount: 189,
          cumulativeCount: 14375,
        },
        {
          score: "578",
          currentCount: 173,
          cumulativeCount: 14548,
        },
        {
          score: "577",
          currentCount: 221,
          cumulativeCount: 14769,
        },
        {
          score: "576",
          currentCount: 191,
          cumulativeCount: 14960,
        },
        {
          score: "575",
          currentCount: 209,
          cumulativeCount: 15169,
        },
        {
          score: "574",
          currentCount: 220,
          cumulativeCount: 15389,
        },
        {
          score: "573",
          currentCount: 205,
          cumulativeCount: 15594,
        },
        {
          score: "572",
          currentCount: 181,
          cumulativeCount: 15775,
        },
        {
          score: "571",
          currentCount: 208,
          cumulativeCount: 15983,
        },
        {
          score: "570",
          currentCount: 212,
          cumulativeCount: 16195,
        },
        {
          score: "569",
          currentCount: 222,
          cumulativeCount: 16417,
        },
        {
          score: "568",
          currentCount: 183,
          cumulativeCount: 16600,
        },
        {
          score: "567",
          currentCount: 216,
          cumulativeCount: 16816,
        },
        {
          score: "566",
          currentCount: 214,
          cumulativeCount: 17030,
        },
        {
          score: "565",
          currentCount: 194,
          cumulativeCount: 17224,
        },
        {
          score: "564",
          currentCount: 193,
          cumulativeCount: 17417,
        },
        {
          score: "563",
          currentCount: 200,
          cumulativeCount: 17617,
        },
        {
          score: "562",
          currentCount: 202,
          cumulativeCount: 17819,
        },
        {
          score: "561",
          currentCount: 207,
          cumulativeCount: 18026,
        },
        {
          score: "560",
          currentCount: 209,
          cumulativeCount: 18235,
        },
        {
          score: "559",
          currentCount: 225,
          cumulativeCount: 18460,
        },
        {
          score: "558",
          currentCount: 213,
          cumulativeCount: 18673,
        },
        {
          score: "557",
          currentCount: 209,
          cumulativeCount: 18882,
        },
        {
          score: "556",
          currentCount: 210,
          cumulativeCount: 19092,
        },
        {
          score: "555",
          currentCount: 228,
          cumulativeCount: 19320,
        },
        {
          score: "554",
          currentCount: 210,
          cumulativeCount: 19530,
        },
        {
          score: "553",
          currentCount: 220,
          cumulativeCount: 19750,
        },
        {
          score: "552",
          currentCount: 244,
          cumulativeCount: 19994,
        },
        {
          score: "551",
          currentCount: 198,
          cumulativeCount: 20192,
        },
        {
          score: "550",
          currentCount: 195,
          cumulativeCount: 20387,
        },
        {
          score: "549",
          currentCount: 210,
          cumulativeCount: 20597,
        },
        {
          score: "548",
          currentCount: 193,
          cumulativeCount: 20790,
        },
        {
          score: "547",
          currentCount: 230,
          cumulativeCount: 21020,
        },
        {
          score: "546",
          currentCount: 219,
          cumulativeCount: 21239,
        },
        {
          score: "545",
          currentCount: 228,
          cumulativeCount: 21467,
        },
        {
          score: "544",
          currentCount: 193,
          cumulativeCount: 21660,
        },
        {
          score: "543",
          currentCount: 250,
          cumulativeCount: 21910,
        },
        {
          score: "542",
          currentCount: 238,
          cumulativeCount: 22148,
        },
        {
          score: "541",
          currentCount: 195,
          cumulativeCount: 22343,
        },
        {
          score: "540",
          currentCount: 217,
          cumulativeCount: 22560,
        },
        {
          score: "539",
          currentCount: 244,
          cumulativeCount: 22804,
        },
        {
          score: "538",
          currentCount: 204,
          cumulativeCount: 23008,
        },
        {
          score: "537",
          currentCount: 234,
          cumulativeCount: 23242,
        },
        {
          score: "536",
          currentCount: 226,
          cumulativeCount: 23468,
        },
        {
          score: "535",
          currentCount: 258,
          cumulativeCount: 23726,
        },
        {
          score: "534",
          currentCount: 228,
          cumulativeCount: 23954,
        },
        {
          score: "533",
          currentCount: 228,
          cumulativeCount: 24182,
        },
        {
          score: "532",
          currentCount: 223,
          cumulativeCount: 24405,
        },
        {
          score: "531",
          currentCount: 224,
          cumulativeCount: 24629,
        },
        {
          score: "530",
          currentCount: 223,
          cumulativeCount: 24852,
        },
        {
          score: "529",
          currentCount: 232,
          cumulativeCount: 25084,
        },
        {
          score: "528",
          currentCount: 229,
          cumulativeCount: 25313,
        },
        {
          score: "527",
          currentCount: 238,
          cumulativeCount: 25551,
        },
        {
          score: "526",
          currentCount: 225,
          cumulativeCount: 25776,
        },
        {
          score: "525",
          currentCount: 227,
          cumulativeCount: 26003,
        },
        {
          score: "524",
          currentCount: 246,
          cumulativeCount: 26249,
        },
        {
          score: "523",
          currentCount: 217,
          cumulativeCount: 26466,
        },
        {
          score: "522",
          currentCount: 258,
          cumulativeCount: 26724,
        },
        {
          score: "521",
          currentCount: 215,
          cumulativeCount: 26939,
        },
        {
          score: "520",
          currentCount: 237,
          cumulativeCount: 27176,
        },
        {
          score: "519",
          currentCount: 226,
          cumulativeCount: 27402,
        },
        {
          score: "518",
          currentCount: 247,
          cumulativeCount: 27649,
        },
        {
          score: "517",
          currentCount: 228,
          cumulativeCount: 27877,
        },
        {
          score: "516",
          currentCount: 258,
          cumulativeCount: 28135,
        },
        {
          score: "515",
          currentCount: 214,
          cumulativeCount: 28349,
        },
        {
          score: "514",
          currentCount: 213,
          cumulativeCount: 28562,
        },
        {
          score: "513",
          currentCount: 227,
          cumulativeCount: 28789,
        },
        {
          score: "512",
          currentCount: 209,
          cumulativeCount: 28998,
        },
        {
          score: "511",
          currentCount: 231,
          cumulativeCount: 29229,
        },
        {
          score: "510",
          currentCount: 248,
          cumulativeCount: 29477,
        },
        {
          score: "509",
          currentCount: 216,
          cumulativeCount: 29693,
        },
        {
          score: "508",
          currentCount: 253,
          cumulativeCount: 29946,
        },
        {
          score: "507",
          currentCount: 259,
          cumulativeCount: 30205,
        },
        {
          score: "506",
          currentCount: 256,
          cumulativeCount: 30461,
        },
        {
          score: "505",
          currentCount: 224,
          cumulativeCount: 30685,
        },
        {
          score: "504",
          currentCount: 218,
          cumulativeCount: 30903,
        },
        {
          score: "503",
          currentCount: 257,
          cumulativeCount: 31160,
        },
        {
          score: "502",
          currentCount: 218,
          cumulativeCount: 31378,
        },
        {
          score: "501",
          currentCount: 223,
          cumulativeCount: 31601,
        },
        {
          score: "500",
          currentCount: 230,
          cumulativeCount: 31831,
        },
        {
          score: "499",
          currentCount: 207,
          cumulativeCount: 32038,
        },
        {
          score: "498",
          currentCount: 226,
          cumulativeCount: 32264,
        },
        {
          score: "497",
          currentCount: 243,
          cumulativeCount: 32507,
        },
        {
          score: "496",
          currentCount: 246,
          cumulativeCount: 32753,
        },
        {
          score: "495",
          currentCount: 200,
          cumulativeCount: 32953,
        },
        {
          score: "494",
          currentCount: 241,
          cumulativeCount: 33194,
        },
        {
          score: "493",
          currentCount: 225,
          cumulativeCount: 33419,
        },
        {
          score: "492",
          currentCount: 227,
          cumulativeCount: 33646,
        },
        {
          score: "491",
          currentCount: 242,
          cumulativeCount: 33888,
        },
        {
          score: "490",
          currentCount: 215,
          cumulativeCount: 34103,
        },
        {
          score: "489",
          currentCount: 200,
          cumulativeCount: 34303,
        },
        {
          score: "488",
          currentCount: 235,
          cumulativeCount: 34538,
        },
        {
          score: "487",
          currentCount: 211,
          cumulativeCount: 34749,
        },
        {
          score: "486",
          currentCount: 216,
          cumulativeCount: 34965,
        },
        {
          score: "485",
          currentCount: 216,
          cumulativeCount: 35181,
        },
        {
          score: "484",
          currentCount: 238,
          cumulativeCount: 35419,
        },
        {
          score: "483",
          currentCount: 202,
          cumulativeCount: 35621,
        },
        {
          score: "482",
          currentCount: 222,
          cumulativeCount: 35843,
        },
        {
          score: "481",
          currentCount: 180,
          cumulativeCount: 36023,
        },
        {
          score: "480",
          currentCount: 204,
          cumulativeCount: 36227,
        },
        {
          score: "479",
          currentCount: 214,
          cumulativeCount: 36441,
        },
        {
          score: "478",
          currentCount: 226,
          cumulativeCount: 36667,
        },
        {
          score: "477",
          currentCount: 222,
          cumulativeCount: 36889,
        },
        {
          score: "476",
          currentCount: 220,
          cumulativeCount: 37109,
        },
        {
          score: "475",
          currentCount: 182,
          cumulativeCount: 37291,
        },
        {
          score: "474",
          currentCount: 204,
          cumulativeCount: 37495,
        },
        {
          score: "473",
          currentCount: 225,
          cumulativeCount: 37720,
        },
        {
          score: "472",
          currentCount: 192,
          cumulativeCount: 37912,
        },
        {
          score: "471",
          currentCount: 210,
          cumulativeCount: 38122,
        },
        {
          score: "470",
          currentCount: 189,
          cumulativeCount: 38311,
        },
        {
          score: "469",
          currentCount: 179,
          cumulativeCount: 38490,
        },
        {
          score: "468",
          currentCount: 205,
          cumulativeCount: 38695,
        },
        {
          score: "467",
          currentCount: 181,
          cumulativeCount: 38876,
        },
        {
          score: "466",
          currentCount: 199,
          cumulativeCount: 39075,
        },
        {
          score: "465",
          currentCount: 183,
          cumulativeCount: 39258,
        },
        {
          score: "464",
          currentCount: 177,
          cumulativeCount: 39435,
        },
        {
          score: "463",
          currentCount: 195,
          cumulativeCount: 39630,
        },
        {
          score: "462",
          currentCount: 200,
          cumulativeCount: 39830,
        },
        {
          score: "461",
          currentCount: 203,
          cumulativeCount: 40033,
        },
        {
          score: "460",
          currentCount: 173,
          cumulativeCount: 40206,
        },
        {
          score: "459",
          currentCount: 190,
          cumulativeCount: 40396,
        },
        {
          score: "458",
          currentCount: 181,
          cumulativeCount: 40577,
        },
        {
          score: "457",
          currentCount: 185,
          cumulativeCount: 40762,
        },
        {
          score: "456",
          currentCount: 166,
          cumulativeCount: 40928,
        },
        {
          score: "455",
          currentCount: 171,
          cumulativeCount: 41099,
        },
        {
          score: "454",
          currentCount: 172,
          cumulativeCount: 41271,
        },
        {
          score: "453",
          currentCount: 179,
          cumulativeCount: 41450,
        },
        {
          score: "452",
          currentCount: 174,
          cumulativeCount: 41624,
        },
        {
          score: "451",
          currentCount: 189,
          cumulativeCount: 41813,
        },
        {
          score: "450",
          currentCount: 168,
          cumulativeCount: 41981,
        },
        {
          score: "449",
          currentCount: 208,
          cumulativeCount: 42189,
        },
        {
          score: "448",
          currentCount: 158,
          cumulativeCount: 42347,
        },
        {
          score: "447",
          currentCount: 178,
          cumulativeCount: 42525,
        },
        {
          score: "446",
          currentCount: 159,
          cumulativeCount: 42684,
        },
        {
          score: "445",
          currentCount: 194,
          cumulativeCount: 42878,
        },
        {
          score: "444",
          currentCount: 153,
          cumulativeCount: 43031,
        },
        {
          score: "443",
          currentCount: 195,
          cumulativeCount: 43226,
        },
        {
          score: "442",
          currentCount: 162,
          cumulativeCount: 43388,
        },
        {
          score: "441",
          currentCount: 140,
          cumulativeCount: 43528,
        },
        {
          score: "440",
          currentCount: 163,
          cumulativeCount: 43691,
        },
        {
          score: "439",
          currentCount: 186,
          cumulativeCount: 43877,
        },
        {
          score: "438",
          currentCount: 153,
          cumulativeCount: 44030,
        },
        {
          score: "437",
          currentCount: 162,
          cumulativeCount: 44192,
        },
        {
          score: "436",
          currentCount: 158,
          cumulativeCount: 44350,
        },
        {
          score: "435",
          currentCount: 136,
          cumulativeCount: 44486,
        },
        {
          score: "434",
          currentCount: 172,
          cumulativeCount: 44658,
        },
        {
          score: "433",
          currentCount: 164,
          cumulativeCount: 44822,
        },
        {
          score: "432",
          currentCount: 148,
          cumulativeCount: 44970,
        },
        {
          score: "431",
          currentCount: 144,
          cumulativeCount: 45114,
        },
        {
          score: "430",
          currentCount: 147,
          cumulativeCount: 45261,
        },
        {
          score: "429",
          currentCount: 147,
          cumulativeCount: 45408,
        },
        {
          score: "428",
          currentCount: 148,
          cumulativeCount: 45556,
        },
        {
          score: "427",
          currentCount: 135,
          cumulativeCount: 45691,
        },
        {
          score: "426",
          currentCount: 128,
          cumulativeCount: 45819,
        },
        {
          score: "425",
          currentCount: 142,
          cumulativeCount: 45961,
        },
        {
          score: "424",
          currentCount: 148,
          cumulativeCount: 46109,
        },
        {
          score: "423",
          currentCount: 150,
          cumulativeCount: 46259,
        },
        {
          score: "422",
          currentCount: 149,
          cumulativeCount: 46408,
        },
        {
          score: "421",
          currentCount: 133,
          cumulativeCount: 46541,
        },
        {
          score: "420",
          currentCount: 137,
          cumulativeCount: 46678,
        },
        {
          score: "419",
          currentCount: 129,
          cumulativeCount: 46807,
        },
        {
          score: "418",
          currentCount: 118,
          cumulativeCount: 46925,
        },
        {
          score: "417",
          currentCount: 143,
          cumulativeCount: 47068,
        },
        {
          score: "416",
          currentCount: 124,
          cumulativeCount: 47192,
        },
        {
          score: "415",
          currentCount: 121,
          cumulativeCount: 47313,
        },
        {
          score: "414",
          currentCount: 107,
          cumulativeCount: 47420,
        },
        {
          score: "413",
          currentCount: 120,
          cumulativeCount: 47540,
        },
        {
          score: "412",
          currentCount: 100,
          cumulativeCount: 47640,
        },
        {
          score: "411",
          currentCount: 114,
          cumulativeCount: 47754,
        },
        {
          score: "410",
          currentCount: 117,
          cumulativeCount: 47871,
        },
        {
          score: "409",
          currentCount: 102,
          cumulativeCount: 47973,
        },
        {
          score: "408",
          currentCount: 114,
          cumulativeCount: 48087,
        },
        {
          score: "407",
          currentCount: 124,
          cumulativeCount: 48211,
        },
        {
          score: "406",
          currentCount: 135,
          cumulativeCount: 48346,
        },
        {
          score: "405",
          currentCount: 111,
          cumulativeCount: 48457,
        },
        {
          score: "404",
          currentCount: 105,
          cumulativeCount: 48562,
        },
        {
          score: "403",
          currentCount: 128,
          cumulativeCount: 48690,
        },
        {
          score: "402",
          currentCount: 107,
          cumulativeCount: 48797,
        },
        {
          score: "401",
          currentCount: 97,
          cumulativeCount: 48894,
        },
        {
          score: "400",
          currentCount: 116,
          cumulativeCount: 49010,
        },
        {
          score: "390",
          currentCount: 987,
          cumulativeCount: 49997,
        },
        {
          score: "389",
          currentCount: 880,
          cumulativeCount: 50877,
        },
        {
          score: "370",
          currentCount: 764,
          cumulativeCount: 51641,
        },
        {
          score: "360",
          currentCount: 691,
          cumulativeCount: 52332,
        },
        {
          score: "350",
          currentCount: 563,
          cumulativeCount: 52895,
        },
        {
          score: "340",
          currentCount: 474,
          cumulativeCount: 53369,
        },
        {
          score: "330",
          currentCount: 385,
          cumulativeCount: 53754,
        },
        {
          score: "320",
          currentCount: 277,
          cumulativeCount: 54031,
        },
        {
          score: "310",
          currentCount: 237,
          cumulativeCount: 54268,
        },
        {
          score: "300",
          currentCount: 176,
          cumulativeCount: 54444,
        },
        {
          score: "329",
          currentCount: 164,
          cumulativeCount: 54608,
        },
        {
          score: "280",
          currentCount: 118,
          cumulativeCount: 54726,
        },
        {
          score: "270",
          currentCount: 114,
          cumulativeCount: 54840,
        },
        {
          score: "260",
          currentCount: 77,
          cumulativeCount: 54917,
        },
        {
          score: "250",
          currentCount: 59,
          cumulativeCount: 54976,
        },
        {
          score: "240",
          currentCount: 28,
          cumulativeCount: 55004,
        },
        {
          score: "230",
          currentCount: 33,
          cumulativeCount: 55037,
        },
        {
          score: "220",
          currentCount: 27,
          cumulativeCount: 55064,
        },
        {
          score: "210",
          currentCount: 18,
          cumulativeCount: 55082,
        },
        {
          score: "200",
          currentCount: 13,
          cumulativeCount: 55095,
        },
        {
          score: "190",
          currentCount: 16,
          cumulativeCount: 55111,
        },
        {
          score: "180",
          currentCount: 12,
          cumulativeCount: 55123,
        },
        {
          score: "170",
          currentCount: 10,
          cumulativeCount: 55133,
        },
        {
          score: "160",
          currentCount: 10,
          cumulativeCount: 55143,
        },
        {
          score: "150",
          currentCount: 4,
          cumulativeCount: 55147,
        },
        {
          score: "140",
          currentCount: 11,
          cumulativeCount: 55158,
        },
        {
          score: "130",
          currentCount: 7,
          cumulativeCount: 55165,
        },
        {
          score: "120",
          currentCount: 11,
          cumulativeCount: 55176,
        },
        {
          score: "110",
          currentCount: 12,
          cumulativeCount: 55188,
        },
        {
          score: "100",
          currentCount: 13,
          cumulativeCount: 55201,
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
            end: 10,
          },
          {
            type: "inside",
            start: 0,
            end: 30,
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
    