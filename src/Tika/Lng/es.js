/*!
 * es addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013.01.12, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"_de":136162,
"os_":104432,
"de_":96031,
"_la":81054,
"_co":64732,
"la_":62987,
"es_":60027,
"as_":58615,
"_qu":56200,
"que":55727,
"ue_":53693,
"ent":53516,
"en_":52339,
"el_":50612,
"_en":49870,
"_es":48725,
"ón_":46841,
"ión":46068,
"est":43016,
"nte":42192,
"te_":38687,
"_el":38461,
"con":37552,
"_se":37134,
"_pr":35772,
"do_":34887,
"_lo":34502,
"_y_":32030,
"_un":30742,
"_re":29625,
"_po":29551,
"aci":29218,
"_a_":29199,
"los":28792,
"ció":28717,
"_pa":28600,
"to_":28476,
"ra_":27785,
"res":27200,
"men":26415,
"ar_":25118,
"ado":25005,
"com":24457,
"sta":23713,
"par":23570,
"or_":22898,
"_in":22253,
"se_":21776,
"al_":21224,
"por":20662,
"_ha":20266,
"no_":19782,
"_no":19637,
"las":19623,
"pro":18796,
"nto":18515,
"pre":18215,
"tra":18215,
"ien":18094,
"ta_":18071,
"cia":18041,
"ion":17727,
"ida":17065,
"nci":16820,
"na_":16728,
"ica":16595,
"cio":16590,
"mos":16275,
"one":16216,
"del":15972,
"dad":15624,
"lo_":15488,
"ara":15288,
"ia_":14766,
"una":14753,
"ant":14486,
"nes":14249,
"_si":14167,
"er_":14052,
"ame":13930,
"dos":13906,
"_al":13877,
"rec":13848,
"rop":13745,
"on_":13491,
"an_":13268,
"_so":13252,
"nta":13173,
"da_":13104,
"ro_":13032,
"_di":12932,
"_su":12895,
"ues":12709,
"_me":12586,
"era":12502,
"des":12453,
"per":12285,
"_pe":12224,
"un_":12196,
"re_":11905,
"ste":11899,
"mis":11726,
"ten":11678,
"ter":11476,
"enc":11340,
"ad_":11252,
"tar":11116,
"isi":11112,
"_ca":10938,
"ici":10928,
"les":10770,
"uro":10756,
"sió":10697,
"pue":10688,
"tad":10621,
"mo_":10163,
"io_":10146,
"str":10101,
"ons":9952,
"nos":9905,
"_cu":9835,
"ari":9810,
"ada":9771,
"tos":9746,
"ido":9642,
"omi":9583,
"eur":9560,
"tiv":9560,
"ntr":9498,
"_eu":9482,
"esp":9477,
"_tr":9414,
"_mi":9363,
"ect":9362,
"tic":9322,
"ero":9214,
"den":9204,
"emo":9181,
"ere":9157,
"tan":9147,
"ier":9049,
"_ma":8996,
"_ta":8994,
"ía_":8957,
"tam":8818,
"orm":8810,
"rio":8749,
"_ac":8686,
"esi":8656,
"bre":8655,
"sid":8627,
"ca_":8595,
"ale":8551,
"ndo":8536,
"mie":8477,
"ist":8448,
"der":8325,
"ide":8284,
"for":8259,
"eci":8249,
"sti":8242,
"ble":8210,
"ene":8196,
"_to":8194,
"ona":8191,
"esa":8081,
"ran":8077,
"_te":7956,
"end":7934,
"uni":7910,
"ope":7900,
"tro":7898,
"ont":7887,
"deb":7873,
"ros":7787,
"mbi":7751,
"sto":7662,
"_pu":7656,
"cho":7529,
"ha_":7509,
"amb":7491,
"_ex":7420,
"ese":7364,
"int":7253,
"ina":7226,
"das":7081,
"ría":7030,
"_mu":6965,
"art":6917,
"gra":6882,
"cto":6867,
"tes":6857,
"so_":6839,
"ir_":6792,
"spe":6704,
"ma_":6692,
"edi":6656,
"ás_":6644,
"_nu":6501,
"señ":6470,
"co_":6455,
"más":6441,
"tod":6398,
"omo":6376,
"ora":6350,
"lam":6322,
"ece":6312,
"ser":6290,
"ita":6283,
"ea_":6280,
"ria":6261,
"me_":6256,
"qui":6227,
"sar":6206,
"_as":6167,
"lar":6121,
"obr":6092,
"cue":6081,
"eño":6050,
"iva":6034,
"nue":5959,
"_ap":5930,
"fic":5924,
"amo":5908,
"ali":5900,
"nal":5838,
"rta":5836,
"egu":5791,
"ech":5761,
"iza":5731,
"eri":5730,
"ñor":5723,
"ort":5694,
"rac":5692,
"ico":5684,
"dic":5667,
"ces":5661,
"pon":5640,
"ade":5636,
"sob":5607,
"ren":5603,
"and":5589,
"odo":5582,
"_má":5529,
"emp":5523,
"rma":5485,
"ner":5478,
"ebe":5448,
"ace":5437,
"mpl":5411,
"ios":5407,
"ura":5405,
"ial":5353,
"cer":5337,
"le_":5271,
"inc":5236,
"su_":5233,
"uer":5220,
"man":5215,
"sen":5211,
"unt":5206,
"eo_":5197,
"tas":5168,
"va_":5165,
"ras":5158,
"tal":5158,
"cas":5154,
"mer":5148,
"cie":5130,
"imp":5117,
"arl":5078,
"mpo":5051,
"nda":5030,
"dec":5018,
"ema":5009,
"ili":4972,
"reg":4968,
"lic":4876,
"pos":4860,
"_ve":4848,
"_gr":4823,
"_im":4816,
"lid":4782,
"ati":4776,
"go_":4763,
"tur":4735,
"uci":4702,
"med":4693,
"omp":4690,
"én_":4638,
"_mo":4635,
"ién":4631,
"_fu":4619,
"_cr":4615,
"ate":4578,
"cci":4569,
"anc":4568,
"cre":4551,
"gun":4544,
"abl":4531,
"nfo":4528,
"rla":4516,
"tor":4512,
"ued":4491,
"inf":4486,
"min":4483,
"mbr":4479,
"pec":4452,
"imi":4425,
"car":4406,
"_fi":4395,
"pri":4389,
"bié":4365,
"nió":4365,
"eso":4355,
"rar":4352,
"jo_":4338,
"nse":4338,
"llo":4335,
"rme":4321,
"iem":4305,
"nti":4303,
"nde":4301,
"_he":4300,
"seg":4296,
"ede":4292,
"íti":4288,
"cul":4283,
"pol":4276,
"ore":4270,
"rad":4258,
"rat":4258,
"rea":4240,
"cua":4237,
"_ad":4228,
"ral":4227,
"ber":4225,
"sin":4202,
"_ci":4201,
"_le":4201,
"dem":4197,
"oci":4196,
"ho_":4169,
"ivo":4168,
"ejo":4157,
"ust":4130,
"cti":4120,
"emb":4112,
"ver":4101,
"eco":4094,
"erc":4092,
"ual":4083,
"ce_":4081,
"_an":4068,
"cad":4066,
"_vi":4063,
"_ob":4051,
"tie":4051,
"mas":4028,
"_ti":4026,
"ias":4006,
"_fo":4000,
"ndi":3986,
"hac":3960,
"otr":3955,
"bie":3949,
"rte":3940,
"ert":3938,
"uen":3928,
"pea":3898,
"cos":3884,
"osi":3878,
"olí":3869,
"itu":3867,
"lít":3862,
"ond":3830,
"uie":3829,
"_em":3827,
"gar":3820,
"vo_":3815,
"ses":3796,
"_ne":3768,
"act":3761,
"lan":3753,
"ano":3752,
"ela":3735,
"sa_":3724,
"leg":3684,
"uda":3682,
"nic":3664,
"tre":3662,
"son":3648,
"und":3647,
"pli":3635,
"nst":3629,
"ers":3619,
"tem":3608,
"fin":3594,
"dis":3574,
"mun":3572,
"nsi":3564,
"sol":3562,
"spo":3562,
"mar":3555,
"ome":3555,
"gen":3525,
"ya_":3515,
"aba":3508,
"ini":3502,
"ori":3488,
"are":3485,
"_sa":3467,
"ata":3448,
"ern":3428,
"nac":3427,
"rti":3426,
"ven":3417,
"ism":3368,
"rá_":3358,
"in_":3345,
"_li":3344,
"dir":3340,
"lac":3283,
"nid":3274,
"si_":3260,
"_ot":3258,
"ram":3248,
"cha":3246,
"ult":3241,
"fer":3233,
"ne_":3232,
"uch":3216,
"ime":3214,
"duc":3206,
"aís":3191,
"_va":3189,
"ref":3180,
"paí":3177,
"egi":3164,
"mpr":3151,
"ito":3147,
"did":3144,
"lem":3142,
"hos":3128,
"tri":3124,
"sos":3118,
"_pl":3114,
"liz":3114,
"_au":3112,
"eda":3111,
"ula":3098,
"tua":3093,
"ifi":3092,
"alm":3090,
"pla":3086,
"ens":3079,
"sit":3076,
"pod":3075,
"rol":3071,
"nas":3064,
"lme":3051,
"stá":3045,
"ele":3044,
"rob":3044,
"_lu":3042,
"_am":3028,
"erd":3021,
"nad":3003,
"_sr":3002,
"sus":2988,
"onc":2986,
"rid":2986,
"tac":2982,
"po_":2953,
"hay":2931,
"_ni":2929,
"ino":2926,
"peo":2926,
"nec":2913,
"rse":2912,
"alg":2904,
"cac":2898,
"erv":2887,
"_ju":2883,
"ami":2876,
"eme":2876,
"ete":2870,
"_na":2864,
"dar":2863,
"ple":2848,
"can":2846,
"bil":2844,
"ota":2843,
"eti":2833,
"obl":2827,
"mit":2792,
"bro":2790,
"oce":2787,
"han":2775,
"smo":2766,
"opu":2758,
"_fa":2755,
"zar":2749,
"rim":2746,
"rab":2736,
"rro":2736,
"ecu":2730,
"err":2724,
"imo":2724,
"arr":2720,
"soc":2713,
"roc":2704,
"cam":2703,
"cla":2695,
"eno":2678,
"ega":2677,
"ell":2677,
"_or":2676,
"tid":2674,
"_o_":2673,
"hab":2673,
"dam":2666,
"cir":2660,
"cid":2642,
"ctu":2640,
"ins":2639,
"_ba":2632,
"án_":2620,
"sis":2617,
"aso":2601,
"nen":2596,
"baj":2594,
"col":2593,
"eni":2592,
"_vo":2591,
"ani":2585,
"efe":2575,
"_do":2570,
"erm":2567,
"cor":2558,
"olu":2547,
"ric":2542,
"eva":2539,
"omu":2535,
"efi":2534,
"sej":2529,
"_ho":2525,
"exi":2525,
"luc":2523,
"nsa":2521,
"fun":2516,
"lta":2515,
"_da":2504,
"rel":2501,
"eta":2498,
"us_":2489,
"año":2479,
"rmi":2479,
"ret":2474,
"dor":2469,
"tim":2466,
"cen":2463,
"rem":2447,
"igu":2444,
"be_":2439,
"tab":2438,
"_ge":2428,
"arg":2428,
"erí":2426,
"lec":2420,
"_añ":2418,
"nar":2418,
"asa":2417,
"ima":2411,
"sas":2410,
"uno":2406,
"esu":2405,
"pa_":2400,
"tit":2399,
"nve":2392,
"sio":2389,
"pet":2388,
"uev":2383,
"ún_":2383,
"rca":2373,
"_ag":2372,
"sup":2371,
"dif":2370,
"rod":2370,
"asi":2361,
"nce":2358,
"_op":2357,
"_ya":2349,
"ord":2330,
"ire":2328,
"cip":2322,
"muc":2313,
"exp":2312,
"cis":2308,
"sab":2308,
"oda":2307,
"rso":2304,
"vis":2293,
"reo":2290,
"eba":2276,
"rno":2272,
"sie":2272,
"íse":2272,
"dio":2271,
"ena":2267,
"hor":2263,
"esc":2262,
"sig":2261,
"opi":2243,
"abi":2240,
"ogr":2238,
"ced":2230,
"eal":2230,
"oy_":2229,
"rep":2225,
"vid":2221,
"ind":2215,
"uy_":2209,
"ibl":2208,
"muy":2207,
"cta":2197,
"dan":2196,
"mpe":2191,
"ama":2184,
"ola":2180,
"gui":2174,
"nan":2173,
"clu":2164,
"sib":2157,
"zac":2153,
"ono":2144,
"opa":2139,
"lib":2125,
"_ec":2123,
"gur":2121,
"ana":2118,
"fue":2118,
"isa":2117,
"nor":2114,
"oso":2113,
"ará":2110,
"lla":2106,
"onf":2106,
"fec":2105,
"abo":2101,
"ocu":2100,
"bar":2093,
"rre":2089,
"odu":2085,
"sr_":2080,
"iti":2075,
"pen":2075,
"ay_":2074,
"vos":2073,
"yo_":2071,
"tin":2070,
"_ll":2067,
"ast":2062,
"_fr":2056,
"ode":2055,
"sea":2047,
"za_":2041,
"_ce":2031,
"dia":2031,
"sec":2031,
"opo":2020,
"uan":2019,
"vas":2014,
"ans":2007,
"sí_":2007,
"oll":2000,
"_hu":1988,
"lgu":1988,
"lle":1985,
"evi":1984,
"tir":1984,
"gan":1981,
"rda":1965,
"bra":1964,
"mi_":1962,
"acu":1957,
"ext":1953,
"rie":1950,
"ga_":1949,
"rqu":1948,
"tió":1947,
"_ra":1933,
"ala":1932,
"_ab":1931,
"uct":1930,
"lat":1922,
"uga":1915,
"_cl":1914,
"apr":1913,
"rgo":1913,
"rin":1912,
"bat":1911,
"orí":1910,
"acc":1900,
"tru":1897,
"rev":1895,
"cal":1882,
"len":1878,
"amp":1874,
"eje":1874,
"ior":1874,
"nmi":1873,
"pac":1865,
"mod":1864,
"tá_":1863,
"uma":1862,
"ías":1861,
"lad":1859,
"upo":1856,
"_ar":1850,
"ron":1849,
"bli":1846,
"ume":1844,
"ost":1838,
"sic":1838,
"ncl":1831,
"ños":1831,
"pta":1823,
"_ga":1822,
"uir":1816,
"ole":1812,
"lab":1809,
"icu":1801,
"arc":1795,
"rdo":1785,
"abe":1783,
"lug":1782,
"_ej":1777,
"lim":1774,
"rog":1767,
"iac":1765,
"eli":1764,
"rán":1763,
"iad":1762,
"_só":1756,
"ars":1755,
"gua":1754,
"sól":1754,
"rib":1739,
"ibi":1732,
"ajo":1722,
"zad":1714,
"ivi":1712,
"jet":1711,
"aqu":1697,
"iar":1696,
"pas":1694,
"has":1690,
"lia":1687,
"onv":1686,
"_ah":1684,
"ólo":1682,
"_bi":1681,
"enm":1680,
"apo":1676,
"oca":1673,
"ayo":1670,
"nza":1670,
"ecc":1665,
"_du":1663,
"uac":1660,
"rup":1659,
"ane":1657,
"_ef":1656,
"ez_":1651,
"may":1650,
"oba":1642,
"ben":1638,
"bje":1637,
"nom":1632,
"obj":1629,
"ote":1628,
"unc":1627,
"asu":1623,
"_ay":1614,
"rci":1610,
"equ":1609,
"rna":1609,
"cep":1608,
"nco":1605,
"ing":1599,
"mac":1597,
"bor":1589,
"agr":1581,
"mej":1581,
"mil":1580,
"uto":1578,
"gru":1575,
"ase":1573,
"hec":1573,
"apl":1564,
"orq":1563,
"mic":1562,
"yor":1561,
"rga":1557,
"rit":1557,
"cit":1554,
"ich":1552,
"abr":1550,
"iga":1549,
"cri":1548,
"ato":1547,
"evo":1541,
"nit":1541,
"ive":1540,
"ine":1537,
"mba":1535,
"omb":1535,
"vot":1534,
"pio":1532,
"mat":1528,
"pun":1527,
"uri":1526,
"cur":1525,
"tec":1525,
"lti":1518,
"sad":1517,
"és_":1517,
"bem":1516,
"bas":1512,
"_us":1510,
"nis":1509,
"osa":1509,
"hem":1508,
"hum":1500,
"_oc":1498,
"bla":1496,
"isp":1496,
"aho":1494,
"jor":1478,
"así":1476,
"rde":1476,
"_aq":1475,
"anz":1470,
"red":1468,
"sul":1466,
"xis":1462,
"eng":1454,
"sum":1448,
"uis":1447,
"apa":1445,
"orr":1444,
"ayu":1442,
"cum":1439,
"quí":1436,
"rto":1434,
"ite":1433,
"_bu":1431,
"rot":1430,
"yud":1429,
"eto":1424,
"noc":1424,
"die":1420,
"ian":1420,
"pal":1418,
"ulo":1416,
"ibu":1407,
"val":1403,
"arí":1402,
"emá":1402,
"_ev":1401,
"adi":1401,
"sca":1400,
"iud":1392,
"ciu":1386,
"alt":1380,
"bit":1378,
"cab":1378,
"sun":1375,
"fra":1374,
"_at":1373,
"_fe":1361,
"van":1359,
"esd":1358,
"ego":1353,
"he_":1353,
"sal":1353,
"sde":1352,
"aut":1349,
"erá":1346,
"poy":1341,
"lig":1338,
"jer":1331,
"teg":1331,
"nem":1326,
"nóm":1323,
"ruc":1319,
"oco":1311,
"uta":1310,
"_pi":1308,
"aya":1306,
"qué":1306,
"rom":1306,
"upu":1304,
"spu":1302,
"gue":1300,
"tán":1300,
"ibe":1299,
"mid":1296,
"rtu":1293,
"il_":1292,
"aña":1289,
"onó":1286,
"plo":1284,
"ife":1280,
"_af":1276,
"dim":1272,
"cim":1271,
"ño_":1271,
"log":1268,
"ómi":1268,
"lus":1263,
"ué_":1250,
"uid":1244,
"sam":1238,
"oli":1232,
"def":1231,
"_go":1228,
"ept":1227,
"lis":1227,
"isc":1225,
"obs":1220,
"til":1218,
"mad":1213,
"gio":1212,
"aro":1211,
"cup":1209,
"lev":1208,
"egl":1204,
"rra":1204,
"usi":1199,
"cil":1195,
"ba_":1191,
"aca":1188,
"vez":1188,
"sla":1184,
"_és":1183,
"nsp":1178,
"inv":1177,
"rlo":1176,
"tom":1174,
"_tu":1166,
"gla":1166,
"ill":1165,
"odr":1163,
"mpa":1161,
"spa":1161,
"eña":1157,
"obi":1155,
"odi":1155,
"is_":1152,
"pes":1150,
"hoy":1148,
"ted":1146,
"var":1141,
"día":1140,
"nsu":1140,
"rco":1138,
"nam":1136,
"_yo":1131,
"rvi":1131,
"cap":1128,
"rri":1127,
"nif":1124,
"uel":1121,
"eja":1120,
"udi":1119,
"pin":1115,
"tud":1114,
"vel":1112,
"tuc":1107,
"uso":1106,
"vic":1106,
"sem":1105,
"últ":1105,
"ipa":1103,
"dop":1100,
"fre":1098,
"aja":1097,
"aus":1097,
"gas":1096,
"ipi":1094,
"pid":1089,
"exc":1086,
"det":1083,
"_úl":1082,
"_gu":1077,
"mes":1077,
"zo_":1077,
"bri":1075
};
LanguageIdentifier.addProfile('es', ngrams, 5928555);
}());
