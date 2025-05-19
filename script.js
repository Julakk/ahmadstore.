document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let game = params.get("game");
    document.getElementById("game-title").innerText = game ? `${game}` : "Top-Up Game";

    let priceOptions = {
        "Mobile Legends ID": [
            { value: "Weekly Diamond Pass", price: 30321 },
            { value: "Weekly Diamond Pass x2", price: 59643 },
            { value: "Weekly Diamond Pass x3", price: 86963 },
            { value: "Weekly Diamond Pass x4", price: 115284 },
            { value: "Weekly Diamond Pass x5", price: 145606 },
            { value: "Twilight", price: 15569 },
            { value: "3 Diamonds", price: 1558 },
            { value: "5 Diamonds", price: 1958 },
            { value: "10 Diamonds (9 + 1 Bonus)", price: 4055 },
            { value: "12 Diamonds (11 + 1 Bonus)", price: 4800 },
            { value: "14 Diamonds (13 + 1 Bonus)", price: 4560 },
            { value: "18 Diamonds (17 + 1 Bonus)", price: 6571 },
            { value: "19 Diamonds (17 + 2 Bonus)", price: 7602 },
            { value: "28 Diamonds (25 + 3 Bonus)", price: 10150 },
            { value: "Twilight Pass", price: 149000 },
            { value: "36 Diamonds (33 + 3 Bonus)", price: 11326 },
            { value: "44 Diamonds (40 + 4 Bonus)", price: 13226 },
            { value: "46 Diamonds (42 + 4 Bonus)", price: 15383 },
            { value: "54 Diamonds (50 + 4 Bonus)", price: 16792 },
            { value: "71 Diamonds (64 + 7 Bonus)", price: 21865 },
            { value: "74 Diamonds (67 + 7 Bonus)", price: 23658 },
            { value: "85 Diamonds (77 + 8 Bonus)", price: 25433 },
            { value: "88 Diamonds (80 + 8 Bonus)", price: 26788 },
            { value: "110 Diamonds (100 + 10 Bonus)", price: 32985 },
            { value: "113 Diamonds (102 + 11 Bonus)", price: 35582 },
            { value: "128 Diamonds (117 + 11 Bonus)", price: 39150 },
            { value: "148 Diamonds (134 + 14 Bonus)", price: 45314 },
            { value: "170 Diamonds (154 + 16 Bonus)", price: 49865 },
            { value: "176 Diamonds (160 + 16 Bonus)", price: 52576 },
            { value: "184 Diamonds (167 + 17 Bonus)", price: 55643 },
            { value: "222 Diamonds (200 + 22 Bonus)", price: 62971 },
            { value: "240 Diamonds (217 + 23 Bonus)", price: 69084 },
            { value: "258 Diamonds (233 + 25 Bonus)", price: 74298 },
            { value: "277 Diamonds (250 + 27 Bonus)", price: 80462 },
            { value: "284 Diamonds (257 + 27 Bonus)", price: 82308 },
            { value: "296 Diamonds (256 + 40 Bonus)", price: 83518 },
            { value: "301 Diamonds (261 + 40 Bonus)", price: 85846 },
            { value: "305 Diamonds (276 + 29 Bonus)", price: 87724 },
            { value: "333 Diamonds (302 + 31 Bonus)", price: 95987 },
            { value: "346 Diamonds (314 + 32 Bonus)", price: 99439 },
            { value: "356 Diamonds (322 + 34 Bonus)", price: 102646 },
            { value: "370 Diamonds (333 + 37 Bonus)", price: 105283 },
            { value: "384 Diamonds (346 + 38 Bonus)", price: 110414 },
            { value: "408 Diamonds (367 + 41 Bonus)", price: 113837 },
            { value: "424 Diamonds (383 + 41 Bonus)", price: 174239},
            { value: "452 Diamonds (407 + 45 Bonus)", price: 126064},
            { value: "518 Diamonds (467 + 51 Bonus)", price: 145821},
            { value: "568 Diamonds (503 + 65 Bonus)", price: 155541},
            { value: "601 Diamonds (533 + 68 Bonus)", price: 165220},
            { value: "642 Diamonds (570 + 72 Bonus)", price: 177198},
            { value: "716 Diamonds (637 + 79 Bonus)", price: 198856},
            { value: "758 Diamonds (675 + 83 Bonus)", price: 210137},
            { value: "790 Diamonds (703 + 87 Bonus)", price: 221512},
            { value: "845 Diamonds (753 + 92 Bonus)", price: 234994},
            { value: "875 Diamonds (774 + 101 Bonus)", price: 237728},
            { value: "938 Diamonds (836 + 102 Bonus)", price: 259308},
            { value: "966 Diamonds (862 + 104 Bonus)", price: 269409},
            { value: "1045 Diamonds (928 + 117 Bonus)", price: 281674},
            { value: "1136 Diamonds (1006 + 130 Bonus)", price: 310602},
            { value: "1443 Diamonds (1277 + 166 Bonus)", price: 386279},
            { value: "1159 Diamonds (1028 + 131 Bonus)", price: 315161},
            { value: "1506 Diamonds (1339 + 167 Bonus)", price: 410859},
            { value: "1704 Diamonds (1509 + 195 Bonus)", price: 456151},
            { value: "2010 Diamonds (1708 + 302 Bonus)", price: 510822},
            { value: "2232 Diamonds (1908 + 324 Bonus)", price: 569578},
            { value: "2578 Diamonds (2211 + 367 Bonus)", price: 659373},
            { value: "2380 Diamonds (2041 + 339 Bonus)", price: 610081},
            { value: "2625 Diamonds (2253 + 372 Bonus)", price: 670857},
            { value: "14490 Diamonds (12009 + 2481 Bonus)", price: 3699091},
            { value: "24150 Diamonds (20015 + 4135 Bonus)", price: 5995821},
            { value: "23340 Diamonds (19428 + 3912 Bonus)", price: 5794601} 
        ],
        "Free Fire": [
            { value: "BP Card", price: 48004 },
            { value: "Level Up Pass", price: 17335 },
            { value: "Member Mingguan", price: 35669 },
            { value: "Member Bulanan", price: 95008 },
            { value: "5 Diamonds", price: 1916 },
            { value: "10 Diamonds", price: 2833 },
            { value: "12 Diamonds", price: 2857 },
            { value: "20 Diamonds", price: 4665 },
            { value: "50 Diamonds", price: 9331 },
            { value: "70 Diamonds", price: 11122 },
            { value: "100 Diamonds", price: 16659 },
            { value: "140 Diamonds", price: 20244 },
            { value: "150 Diamonds", price: 23067 },
            { value: "210 Diamonds", price: 30365 },
            { value: "280 Diamonds", price: 39486 },
            { value: "355 Diamonds", price: 48608 },
            { value: "425 Diamonds", price: 56730 },
            { value: "495 Diamonds", price: 65851 },
            { value: "500 Diamonds", price: 69680 },
            { value: "720 Diamonds", price: 95217 },
            { value: "860 Diamonds", price: 119460 },
            { value: "1000 Diamonds", price: 130704 },
            { value: "1075 Diamonds", price: 141654 },
            { value: "1440 Diamonds", price: 189433 },
            { value: "1450 Diamonds", price: 190092 },
            { value: "2160 Diamonds", price: 279784 },
            { value: "2180 Diamonds", price: 281036 },
            { value: "3640 Diamonds", price: 461144 },
            { value: "36500 Diamonds", price: 5475896 },
            { value: "7290 Diamonds", price: 900779 },
            { value: "73100 Diamonds", price: 9942793 }
        ],
        "PUBG Mobile": [
            { value: "60 UC", price: 16979 },
            { value: "120 UC", price: 33961 },
            { value: "300 + 25 Bonus UC", price: 81900 },
            { value: "600 + 60 Bonus UC", price: 161799 },
            { value: "1500 + 300 Bonus UC", price: 400166 },
            { value: "3000 + 850 Bonus UC", price: 790831 },
            { value: "6000 + 2100 Bonus UC", price: 1580163 },
            {value: "12000 + 4200 Bonus UC", price: 3200826 },
            {value: "18000 + 6300 Bonus UC", price: 5704488 },
            {value: "36000 + 12600 Bonus UC", price: 9599976 },
            {value: "24000 + 8400 Bonus UC", price: 7271151 }  
        ],
        "Genshin Impact": [
            { value: "60 Genesis Crystals", price: 16000 },
            { value: "300 Genesis Crystals", price: 80000 },
            { value: "980 Genesis Crystals", price: 240000 },
            { value: "1980 Genesis Crystals", price: 480000 },
            { value: "3280 Genesis Crystals", price: 800000 },
            { value: "6480 Genesis Crystals", price: 1600000 }
        ],
        "Call of Duty Mobile": [
            { value: "80 CP", price: 15000 },
            { value: "420 CP", price: 75000 },
            { value: "880 CP", price: 150000 },
            { value: "2000 CP", price: 350000 },
            { value: "4000 CP", price: 700000 },
            { value: "8000 CP", price: 1400000 }
        ],
        "Valorant": [
            { value: "125 VP", price: 16000 },
            { value: "625 VP", price: 80000 },
            { value: "1125 VP", price: 150000 },
            { value: "2000 VP", price: 250000 },
            { value: "4000 VP", price: 500000 },
            { value: "8000 VP", price: 1000000 }
        ],
        "Honkai Star Rail": [
            { value: "60 Oneiric Shards", price: 16000 },
            { value: "300 Oneiric Shards", price: 80000 },
            { value: "980 Oneiric Shards", price: 240000 },
            { value: "1980 Oneiric Shards", price: 480000 },
            { value: "3280 Oneiric Shards", price: 800000 },
            { value: "6480 Oneiric Shards", price: 1600000 }
        ],
        "League of Legends": [
            { value: "200 RP", price: 15000 },
            { value: "1000 RP", price: 75000 },
            { value: "2000 RP", price: 150000 },
            { value: "5000 RP", price: 350000 },
            { value: "10000 RP", price: 700000 }
        ],
        "FC Moblie": [
            { value: "40 FC POINTS", price: 10000 },
            { value: "100 FC POINTS", price: 20000 },
            { value: "520 FC POINTS", price: 77000 },
            { value: "1070 FC POINTS", price: 150000 },
            { value: "2200 FC POINTS", price: 302000 },
            { value: "5750 FC POINTS", price: 725000 },
            { value: "12000 FC POINTS", price: 1447000 },
            //SILEVR FC MOBILE
            { value: "39 SILVER", price: 10000 },
            { value: "99 SILVER", price: 20000 },
            { value: "499 SILVER", price: 77000 },
            { value: "999 SILVER", price: 150000 },
            { value: "1999 SILVER", price: 302000 },
            { value: "4999 SILVER", price: 725000 },
            { value: "9999 SILVER", price: 1447000 },
        ],
        "Efootball Pes 2025": [
            { value: "130 myClub Coins (Android)", price: 21000 },
            { value: "300 myClub Coins (Android)", price: 46000 },
            { value: "550 myClub Coins (Android)", price: 79000 },
            { value: "750 myClub Coins (Android)", price: 109000 },
            { value: "1040 myClub Coins (Android)", price: 141000 },
            { value: "2130 myClub Coins (Android)", price: 295000 },
            { value: "3250 myClub Coins (Android)", price: 425000 },
            { value: "5700 myClub Coins (Android)", price: 692000 },
            { value: "12800 myClub Coins (Android)", price: 1519000 },
        ],
        "Stumble Guys": [
            { value: "Pile Of Gems (250)", price: 15000 },
            { value: "Bag Of Gems (800)", price: 35000 },
            { value: "Crate of Gems (1600 Gems + 75 Tokens)", price: 55000 },
            { value: "Vault of Gems (5000 Gems + 275 Tokens)", price: 120000 },
            { value: "Pile of Stumble Tokens (120)", price: 40000 },
            { value: "Vault of Stumble Tokens (1300)", price: 290000 },
        ],
        "Roblox": [
                { value: "800 Robux", price: 170680 },
                { value: "1200 Robux Global", price: 349725 },
                { value: "20000 Robux Global", price: 437026 },
                { value: "1700 Robux Global", price: 437026 },
                { value: "4500 Robux Global", price: 810235 }
        ],
        "Honor Of Kings": [
                { value: "Weekly Card", price: 15000 },
                { value: "Weekly Card Plus", price: 46000 },
                { value: "16 + 1 Tokens", price: 5000 },
                { value: "80 + 8 Tokens", price: 17000 },
                { value: "240 + 17 Tokens", price: 47000 },
                { value: "400 + 32 Tokens", price: 78000 },
                { value: "560 + 45 Tokens", price: 105000 },
                { value: "800 + 65 Tokens", price: 155000 },
                { value: "1200 + 108 Tokens", price: 225000 },
                { value: "2400 + 216 Tokens", price: 449000 },
                { value: "4000 + 400 Tokens", price: 750000 },
                { value: "8000 + 800 Tokens", price: 1500000 }
        ],
        "Magic Chess Go Go": [
                { value: "Magic Chess: Go Go - 5 Diamonds", price: 1481 },
                { value: "Magic Chess: Go Go - 12 (11+1) Diamonds", price: 3454 },
                { value: "Magic Chess: Go Go - 19 (17+2) Diamonds", price: 5425 },
                { value: "Magic Chess: Go Go - 28 (25+3) Diamonds", price: 7890 },
                { value: "Magic Chess: Go Go - 44 (40+4) Diamonds", price: 11835 },
                { value: "Magic Chess: Go Go - 59 (53+6) Diamonds", price: 15779 },
                { value: "Magic Chess: Go Go - 85 (77+8) Diamonds", price: 22683 },
                { value: "Magic Chess: Go Go - 170 (154+16) Diamonds", price: 45364 },
                { value: "Magic Chess: Go Go - 240 (217+23) Diamonds", price: 64102 },
                { value: "Magic Chess: Go Go - 296 (256+40) Diamonds", price: 78894 },
                { value: "Magic Chess: Go Go - 408 (367+41) Diamonds", price: 108479 },
                { value: "Magic Chess: Go Go - 568 (503+65) Diamonds", price: 147924 },
                { value: "Magic Chess: Go Go - 875 (774+101) Diamonds", price: 226818 },
                { value: "Magic Chess: Go Go - 2010 (1708+302) Diamonds", price: 493081 },
                { value: "Magic Chess: Go Go - 4830 (4003+827) Diamonds", price: 1183392 }
      ],
      "Free Fire Max": [
                { value: "Membership Mingguan 1x", price: 32373 },
                { value: "Membership Bulanan 1x", price: 95160 },
                { value: "5 Diamond", price: 1917 },
                { value: "10 Diamond", price: 2827 },
                { value: "50 Diamond", price: 8958 },
                { value: "70 Diamond", price: 10988 },
                { value: "120 Diamond", price: 19980 },  
                { value: "140 Diamond", price: 19214 },
                { value: "190 Diamond", price: 26528 },
                { value: "210 Diamond", price: 30800 },
                { value: "280 Diamond", price: 37531 },
                { value: "355 Diamond", price: 47661 },
                { value: "405 Diamond", price: 57981 },
                { value: "425 Diamond", price: 59591 },
                { value: "475 Diamond", price: 66990 },
                { value: "495 Diamond", price: 69890 },
                { value: "565 Diamond", price: 75555 },
                { value: "545 Diamond", price: 76590 },
                { value: "635 Diamond", price: 84234 },
                { value: "720 Diamond", price: 97490 },
                { value: "770 Diamond", price: 103990 },
                { value: "860 Diamond", price: 111690 },
                { value: "930 Diamond", price: 120880 },
                { value: "1000 Diamond", price: 135680 },
                { value: "1075 Diamond", price: 138995 },
                { value: "1440 Diamond", price: 210790 },
               { value: "7290 Diamond", price: 1230550 }  
      ],
      "Arena Of Valor": [
                { value: "40 AOV Vouchers", price: 15000 },
                { value: "90 AOV Vouchers", price: 25000 },
                { value: "230 AOV Vouchers", price: 55000 },
                { value: "470 AOV Vouchers", price: 105000 },
                { value: "950 AOV Vouchers", price: 210000 },
                { value: "1430 AOV Vouchers", price: 310000 },
                { value: "2390 AOV Vouchers", price: 510000 },
                { value: "4800 AOV Vouchers", price: 1025000 },
                { value: "24050 AOV Vouchers", price: 5020000 },
                { value: "48200 AOV Vouchers", price: 10220000 }
     ],
     "Pubg New State": [
                { value: "300 NC", price: 20000 },
                { value: "1500 NC", price: 80000 },
                { value: "3600 NC", price: 190000 },
                { value: "9300 NC", price: 480000 },
                { value: "30000 NC", price: 1520000 }
     ],
      "Super Sus": [
                { value: "SUPER PASS", price: 85000 },
                { value: "SUPER PASS BUNDLE", price: 150000 },
                { value: "WEEKLY CARD", price: 20000 },
                { value: "MONTHLY CARD", price: 150000 },
                { value: "SUPER VIP CARD", price: 180000 },
                { value: "100 GOLDSTAR", price: 15000 },
                { value: "310 GOLDSTAR", price: 35000 },
                { value: "520 GOLDSTAR", price: 55000 },
                { value: "1060 GOLDSTAR", price: 110000 },
                { value: "2180 GOLDSTAR", price: 215000 },
                { value: "5600 GOLDSTAR", price: 550000 }
      ],
      "Arena Breakout": [
                { value: "Pilihan Pemula", price: 11808 },
                { value: "Kotak Antipeluru (30 hari)", price: 33990 },
                { value: "Battle Pass Lanjutan", price: 57568 },
                { value: "Kotak Komposit (30 hari)", price: 100680 },
                { value: "Battle Pass Premium", price: 165241 }
     ],
     "Blood Strike": [
                { value: "100 + 5 Gold", price: 11995 },
                { value: "300 + 20 Gold", price: 33985 },
                { value: "500 + 40 Gold", price: 55975 },
                { value: "1000 + 100 Gold", price: 110949 },
                { value: "2000 + 260 Gold", price: 220898 },
                { value: "5000 + 800 Gold", price: 545465 }
     ],
     "GrowTopia": [
                { value: "Gem Fountain", price: 72322 },
                { value: "Its Rainin Gems", price: 145759 },
                { value: "Royal Grow Pass", price: 155759 },
                { value: "Gem Bounty", price: 459508 },
                { value: "1 Year Subscription Token", price:  699384 },
                { value: "Gem Abundance", price: 725890 }
     ],
     "Point Blank": [
                { value: "1.200 PB Cash", price: 10651 },
                { value: "2.400 PB Cash", price: 20981 },
                { value: "6.000 PB Cash", price: 49249 },
                { value: "12.000 PB Cash", price: 97570 },
                { value: "24.000 PB Cash", price: 199913 },
                { value: "36.000 PB Cash", price: 291356 },
                { value: "60.000 PB Cash", price: 485240 }
     ],
     "Marvel": [
                { value: "55 Star Credit", price: 12541 },
                { value: "275 Star Credit", price: 59985 },
                { value: "565 Star Credit", price: 119664 },
                { value: "1155 Star Credit", price: 239426 },
                { value: "1765 Star Credit", price: 389.379 },
                { value: "2950 Star Credit", price: 599503 },
                { value: "6000 Star Credit", price: 1285300 }
     ],
     "Lifeafter Credits": [
                { value: "65 Credits", price: 12798 },
                { value: "330 Credits", price: 59816 },
                { value: "558 Credits", price: 92235 },
                { value: "1108 Credits", price: 185105 },
                { value: "2268 Credits", price: 365825 },
                { value: "3468 Credits", price: 552188 }
     ],
     "Delta Force": [
                { value: "60 Delta Coin", price: 15500 },
                { value: "300 Delta Coin", price: 65162 },
                { value: "420 Delta Coin", price: 93552 },
                { value: "680 Delta Coin", price: 137848 },
                { value: "1280 Delta Coin", price: 250533 },
                { value: "1680 Delta Coin", price: 317685 },
                { value: "3280 Delta Coin", price: 620687 },
                { value: "6480 Delta Coin", price: 1550161 }
     ],
     "Hago Diamond": [
                { value: "25 Diamond Hago", price: 8971 },
                { value: "50 Diamond Hago", price: 16535 },
                { value: "75 Diamond Hago", price: 24500 },
                { value: "100 Diamond Hago", price: 33964 },
                { value: "200 Diamond Hago", price: 62621 },
                { value: "300 Diamond Hago", price: 94992 },
                { value: "400 Diamond Hago", price: 125856 },  
                { value: "500 Diamond Hago", price: 156819 },
                { value: "600 Diamond Hago", price: 192784 },
                { value: "700 Diamond Hago", price: 219748 },
                { value: "800 Diamond Hago", price: 250711 },
                { value: "900 Diamond Hago", price: 280675 },
                { value: "1000 Diamond Hago", price: 311639 },
                { value: "2000 Diamond Hago", price: 616276 },
                { value: "3000 Diamond Hago", price: 921847 },
                { value: "4000 Diamond Hago", price: 1330658 },
                { value: "5000 Diamond Hago", price: 2563450 }               
      ],
       "Pokemon Unite": [
              { value: "60 Aeos Gems", price: 12923 },
              { value: "250 (245+5) Aeos Gems", price: 49652 },
              { value: "525 (490+35) Aeos Gems", price: 96546 },
              { value: "1350 (1220+1130) Aeos Gems", price: 249823 },
              { value: "2740 (2450+290) Aeos Gems", price: 479618 },
              { value: "3500 (3050+450) Aeos Gems", price: 589906 },
              { value: "7100 (6000+1100) Aeos Gems", price: 1250544 }
     ],
      "Metal Slug": [
              { value: "60 Ruby", price: 15187 },
              { value: "310 Ruby", price: 63511 },
              { value: "Kartu Bulanan", price: 65931 },
              { value: "Support Pass", price: 67951 },
              { value: "630 Ruby", price: 120659 },
              { value: "Kartu Bulanan Premium", price: 125659 },
              { value: "Support Pass Premium", price: 130659 },
              { value: "1300 Ruby", price: 240180 },
              { value: "3200 Ruby", price: 619867 },
              { value: "6500 Ruby", price: 1296790 }
     ],
     "Zenless Zone Zero": [
              { value: "60 Monochrome", price: 18366 },
              { value: "300 Monochrome", price: 66586 },
              { value: "Kartu Bulanan", price: 65931 },
              { value: "Support Pass", price: 67951 },
              { value: "630 Ruby", price: 120659 },
              { value: "Kartu Bulanan Premium", price: 125659 },
              { value: "Support Pass Premium", price: 130659 },
              { value: "1300 Ruby", price: 240180 },
              { value: "3200 Ruby", price: 619867 },
              { value: "6500 Ruby", price: 1296790 }
     ],
     "Mobile Legends MY": [
              { value: "14 Diamonds (13 + 1 Bonus)", price: 5769 },
              { value: "70 Diamonds (64 + 6 Bonus)", price: 20802 },
              { value: "112 Diamond (102 + 10 Bonus)", price: 32149 },
              { value: "284 Diamonds (254 + 30 Bonus)", price: 77495 },
              { value: "569 Diamond (510 + 59 Bonus)", price: 153958 },
              { value: "1145 Diamonds (1016 + 129 Bonus)", price: 312522 },
              { value: "Weekly Diamond Pass (Event Topup +100)", price: 35261 },
              { value: "Twilight Pass", price: 165198 },
              { value: "28 Diamonds (26 + 2 Bonus)", price: 9937 },
              { value: "42 Diamonds (38 + 4 Bonus)", price: 13548 },
              { value: "140 Diamonds (127 + 13 Bonus)", price: 39644 },
              { value: "168 Diamonds (154 + 14 Bonus)", price: 47140 },
              { value: "355 Diamonds (317 + 38 Bonus)", price: 96421 },
              { value: "429 Diamonds (383 + 46 Bonus)", price: 115264 },
              { value: "716 Diamonds (633 + 83 Bonus)", price: 190759 },
              { value: "1084 Diamonds (940 + 144 Bonus)", price: 285310 },
              { value: "1446 Diamonds (1252 + 194 Bonus)", price: 379482 },
              { value: "1730 Diamonds (1506 + 224 Bonus)", price: 454977 },
              { value: "2976 Diamonds (2501 + 475 Bonus)", price: 758275 },
              { value: "7502 Diamonds (6252 + 1250 Bonus)", price: 2885546 }
     ],
     "Mobile Legends PH": [
              { value: "11 Diamonds (10 + 1 Bonus)", price: 4635 },
              { value: "56 Diamonds (51 + 5 Bonus)", price: 15519 },
              { value: "279 Diamonds (254 + 25 Bonus)", price: 66730 },
              { value: "570 Diamonds (504 + 66 Bonus)", price: 131451 },
              { value: "1163 Diamonds (1007 + 156 Bonus)", price: 260894 },
              { value: "Weekly Diamond Pass (Event Topup +100)", price: 27597 },
              { value: "5 Diamonds (5 + 0 Bonus)", price: 2960 },
              { value: "22 Diamonds (20 + 2 Bonus)", price: 6657 },
              { value: "112 Diamonds (102 + 10 Bonus)", price: 27859 },
              { value: "168 Diamonds (153 + 15 Bonus)", price: 40876 },
              { value: "223 Diamonds (203 + 20 Bonus)", price: 79816 },
              { value: "1733 Diamonds (1511 + 222 Bonus)", price: 390255 },
              { value: "2398 Diamonds (2015 + 383 Bonus)", price: 527693 },
              { value: "6042 Diamonds (5035 + 1007 Bonus)", price: 1321876 }
     ],
    };
    let selectedPrice = null;
    let selectedValue = null;
    let priceList = document.getElementById("price-options");

    if (game && priceOptions[game]) {
        priceOptions[game].forEach(option => {
            let div = document.createElement("div");
            div.className = "price-item";
            div.innerHTML = `${option.value} <br> Rp ${option.price.toLocaleString()}`;
            div.dataset.value = option.value;
            div.dataset.price = option.price;

            div.addEventListener("click", function () {
                document.querySelectorAll(".price-item").forEach(i => i.style.background = "#e0e0e0");
                this.style.background = "#ff6600";
                this.style.color = "white";
                selectedPrice = option.price;
                selectedValue = option.value;
            });

            priceList.appendChild(div);
        });
    }

    document.getElementById("checkout-btn").addEventListener("click", function () {
        let userId = document.getElementById("user-id").value;
        let whatsapp = document.getElementById("whatsapp").value;

        if (!userId || !whatsapp || !selectedPrice) {
            alert("Harap isi semua data dan pilih nominal!");
            return;
        }

        let message = `Halo Admin, saya ingin top-up ${game} dengan detail:\n\nID: ${userId}\nNominal: ${selectedValue}\nHarga: Rp ${selectedPrice}`;
        let whatsappUrl = `https://wa.me/6287854851480?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    });
});

// image slider
const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const texts = [
        " DISCORD",
        "WHATSHAPP",
        "INSTAGRAM"
    ]

    let speed = 100;

        const textElements = document.querySelector(".typewriter-text")
        
        let textIndex = 0;
        let charcterIndex = 0;
        
    function typeWriter() {
        if(charcterIndex < texts[textIndex].length){
            textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
            charcterIndex++;
            setTimeout(typeWriter, speed); 
        }
        else{
            setTimeout(eraseText, 1000)
        }
    }
    
    function eraseText() {
        if(textElements.innerHTML.length > 0){
            textElements.innerHTML = textElements.innerHTML.slice(0,-1)
            setTimeout(eraseText, 50)
        }
        else{
            textIndex = (textIndex + 1) % texts.length;
            charcterIndex = 0;
            setTimeout(typeWriter,500)
        }
    }
    window.onload = typeWriter;
    const audio = document.getElementById("myAudio");
    const unmuteBtn = document.getElementById("unmuteBtn");

    // Mulai autoplay (muted) saat halaman load
    window.addEventListener("load", () => {
      audio.play().catch(err => {
        console.log("Autoplay diblokir:", err);
      });
    });

    // Saat tombol diklik, matikan mute dan setel ulang audio dengan volume
    unmuteBtn.addEventListener("click", () => {
      audio.muted = false;
      audio.play().catch(err => {
        console.log("Gagal memainkan audio:", err);
      });
    });