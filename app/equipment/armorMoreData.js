const imprintPools = {
  "2:epicBoss45": [["Damage Tolerance","7.2% ~ 8.35%"],["Perfect Chance","3.3% ~ 3.87%"],["Endurance","2.2% ~ 2.6%"],["Attack increase","1.46% ~ 1.75%"],["Double Resist","2.2% ~ 2.6%"],["Status Effect Resist","4.71% ~ 5.49%"],["Multi-hit Resist","3.3% ~ 3.87%"],["Dexterity","7 ~ 15"],["Constitution","11 ~ 20"],["Willpower","8 ~ 16"],["Attack","15 ~ 24"],["Critical Hit","23 ~ 33"],["Accuracy","31 ~ 43"],["Defense","183 ~ 217"],["Evasion","18 ~ 28"],["Critical Damage Defense","188 ~ 223"],["Back Defense","188 ~ 223"],["Front Defense","188 ~ 223"],["Critical Hit Resist","33 ~ 45"],["Block","18 ~ 28"],["MP","70 ~ 88"],["HP","141 ~ 169"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","33 ~ 45"]],
  "2:epic43": [["Damage Tolerance","6.3% ~ 7.32%"],["Perfect Chance","2.88% ~ 3.38%"],["Endurance","1.92% ~ 2.28%"],["Attack increase","1.28% ~ 1.54%"],["Double Resist","1.92% ~ 2.28%"],["Status Effect Resist","4.12% ~ 4.81%"],["Multi-hit Resist","2.88% ~ 3.38%"],["Dexterity","6 ~ 14"],["Constitution","9 ~ 17"],["Willpower","7 ~ 15"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","27 ~ 38"],["Defense","160 ~ 191"],["Evasion","16 ~ 25"],["Critical Damage Defense","164 ~ 196"],["Back Defense","164 ~ 196"],["Front Defense","164 ~ 196"],["Critical Hit Resist","29 ~ 40"],["Block","16 ~ 25"],["MP","61 ~ 77"],["HP","123 ~ 148"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","29 ~ 40"]],
  "2:epic45": [["Damage Tolerance","6.75% ~ 7.83%"],["Perfect Chance","3.09% ~ 3.62%"],["Endurance","2.06% ~ 2.44%"],["Attack increase","1.37% ~ 1.65%"],["Double Resist","2.06% ~ 2.44%"],["Status Effect Resist","4.42% ~ 5.15%"],["Multi-hit Resist","3.09% ~ 3.62%"],["Dexterity","6 ~ 14"],["Constitution","10 ~ 19"],["Willpower","8 ~ 16"],["Attack","14 ~ 23"],["Critical Hit","22 ~ 32"],["Accuracy","29 ~ 40"],["Defense","171 ~ 204"],["Evasion","17 ~ 27"],["Critical Damage Defense","176 ~ 209"],["Back Defense","176 ~ 209"],["Front Defense","176 ~ 209"],["Critical Hit Resist","31 ~ 43"],["Block","17 ~ 27"],["MP","66 ~ 83"],["HP","132 ~ 159"],["Natural MP Regen","15 ~ 24"],["Natural HP Regen","31 ~ 43"]],
  "2:quest29": [["Defense","39 ~ 39"],["MP","25 ~ 25"],["Natural MP Regen","8 ~ 8"]],
  "2:quest38": [["Defense","42 ~ 42"],["MP","26 ~ 26"],["Natural MP Regen","9 ~ 9"]],
  "2:epicCraft40": [["Damage Tolerance","6.07% ~ 7.05%"],["Perfect Chance","2.78% ~ 3.27%"],["Endurance","1.85% ~ 2.2%"],["Attack increase","1.23% ~ 1.48%"],["Double Resist","1.85% ~ 2.2%"],["Status Effect Resist","3.97% ~ 4.64%"],["Multi-hit Resist","2.78% ~ 3.27%"],["Dexterity","6 ~ 14"],["Constitution","9 ~ 17"],["Willpower","7 ~ 15"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","26 ~ 37"],["Defense","154 ~ 184"],["Evasion","15 ~ 24"],["Critical Damage Defense","158 ~ 189"],["Back Defense","158 ~ 189"],["Front Defense","158 ~ 189"],["Critical Hit Resist","28 ~ 39"],["Block","15 ~ 24"],["MP","59 ~ 75"],["HP","119 ~ 144"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"]],
  "2:epicCraft33": [["Damage Tolerance","5.85% ~ 6.8%"],["Perfect Chance","2.68% ~ 3.15%"],["Endurance","1.78% ~ 2.12%"],["Attack increase","1.19% ~ 1.44%"],["Double Resist","1.78% ~ 2.12%"],["Status Effect Resist","3.83% ~ 4.47%"],["Multi-hit Resist","2.68% ~ 3.15%"],["Dexterity","5 ~ 13"],["Constitution","9 ~ 17"],["Willpower","7 ~ 15"],["Attack","12 ~ 21"],["Critical Hit","19 ~ 29"],["Accuracy","25 ~ 36"],["Defense","148 ~ 177"],["Evasion","15 ~ 24"],["Critical Damage Defense","153 ~ 183"],["Back Defense","153 ~ 183"],["Front Defense","153 ~ 183"],["Critical Hit Resist","27 ~ 38"],["Block","15 ~ 24"],["MP","57 ~ 73"],["HP","115 ~ 139"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","27 ~ 38"]],
  "2:epic23": [["Damage Tolerance","5.17% ~ 6.02%"],["Perfect Chance","2.37% ~ 2.8%"],["Endurance","1.58% ~ 1.89%"],["Attack increase","1.05% ~ 1.28%"],["Double Resist","1.58% ~ 1.89%"],["Status Effect Resist","3.39% ~ 3.97%"],["Multi-hit Resist","2.37% ~ 2.8%"],["Dexterity","5 ~ 13"],["Constitution","8 ~ 16"],["Willpower","6 ~ 14"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","22 ~ 32"],["Defense","131 ~ 158"],["Evasion","13 ~ 22"],["Critical Damage Defense","135 ~ 162"],["Back Defense","135 ~ 162"],["Front Defense","135 ~ 162"],["Critical Hit Resist","24 ~ 35"],["Block","13 ~ 22"],["MP","50 ~ 65"],["HP","101 ~ 123"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","24 ~ 35"]],
  "2:epic28": [["Damage Tolerance","5.4% ~ 6.28%"],["Perfect Chance","2.47% ~ 2.91%"],["Endurance","1.65% ~ 1.97%"],["Attack increase","1.1% ~ 1.34%"],["Double Resist","1.65% ~ 1.97%"],["Status Effect Resist","3.53% ~ 4.13%"],["Multi-hit Resist","2.47% ~ 2.91%"],["Dexterity","5 ~ 13"],["Constitution","8 ~ 16"],["Willpower","6 ~ 14"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","23 ~ 33"],["Defense","137 ~ 165"],["Evasion","13 ~ 22"],["Critical Damage Defense","141 ~ 169"],["Back Defense","141 ~ 169"],["Front Defense","141 ~ 169"],["Critical Hit Resist","25 ~ 36"],["Block","13 ~ 22"],["MP","52 ~ 67"],["HP","106 ~ 129"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","25 ~ 36"]],
  "2:epic33": [["Damage Tolerance","5.62% ~ 6.53%"],["Perfect Chance","2.57% ~ 3.03%"],["Endurance","1.71% ~ 2.04%"],["Attack increase","1.14% ~ 1.38%"],["Double Resist","1.71% ~ 2.04%"],["Status Effect Resist","3.68% ~ 4.3%"],["Multi-hit Resist","2.57% ~ 3.03%"],["Dexterity","5 ~ 13"],["Constitution","8 ~ 16"],["Willpower","6 ~ 14"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],["Accuracy","24 ~ 35"],["Defense","143 ~ 171"],["Evasion","14 ~ 23"],["Critical Damage Defense","147 ~ 176"],["Back Defense","147 ~ 176"],["Front Defense","147 ~ 176"],["Critical Hit Resist","26 ~ 37"],["Block","14 ~ 23"],["MP","55 ~ 70"],["HP","110 ~ 134"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","26 ~ 37"]],

  "2:argo66": [["Damage Tolerance","8.1% ~ 9.39%"],["Perfect Chance","3.71% ~ 4.34%"],["Endurance","2.47% ~ 2.91%"],["Attack increase","1.65% ~ 1.97%"],["Double Resist","2.47% ~ 2.91%"],["Status Effect Resist","5.3% ~ 6.17%"],["Multi-hit Resist","3.71% ~ 4.34%"],["Dexterity","8 ~ 16"],["Constitution","12 ~ 21"],["Willpower","9 ~ 17"],["Attack","17 ~ 27"],["Critical Hit","26 ~ 37"],["Accuracy","35 ~ 47"],["Defense","206 ~ 244"],["Evasion","20 ~ 30"],["Critical Damage Defense","212 ~ 251"],["Back Defense","212 ~ 251"],["Front Defense","212 ~ 251"],["Critical Hit Resist","37 ~ 50"],["Block","21 ~ 31"],["MP","79 ~ 98"],["HP","159 ~ 190"],["Natural MP Regen","18 ~ 28"],["Natural HP Regen","37 ~ 50"]],
  "2:dragon102": [["Damage Tolerance","9.99% ~ 11.56%"],["Perfect Chance","4.57% ~ 5.33%"],["Endurance","3.05% ~ 3.58%"],["Attack increase","2.03% ~ 2.4%"],["Double Resist","3.05% ~ 3.58%"],["Status Effect Resist","6.54% ~ 7.59%"],["Multi-hit Resist","4.57% ~ 5.33%"],["Dexterity","9 ~ 17"],["Constitution","15 ~ 24"],["Willpower","12 ~ 21"],["Attack","21 ~ 31"],["Critical Hit","32 ~ 44"],["Accuracy","43 ~ 56"],["Defense","254 ~ 299"],["Evasion","25 ~ 36"],["Critical Damage Defense","261 ~ 307"],["Back Defense","261 ~ 307"],["Front Defense","261 ~ 307"],["Critical Hit Resist","45 ~ 59"],["Block","26 ~ 37"],["MP","97 ~ 119"],["HP","196 ~ 232"],["Natural MP Regen","23 ~ 33"],["Natural HP Regen","45 ~ 59"]],
  "2:conquering51": [["Damage Tolerance","7.56% ~ 8.76%"],["Perfect Chance","3.46% ~ 4.05%"],["Endurance","2.31% ~ 2.73%"],["Attack increase","1.54% ~ 1.84%"],["Double Resist","2.31% ~ 2.73%"],["Status Effect Resist","4.95% ~ 5.76%"],["Multi-hit Resist","3.46% ~ 4.05%"],["Dexterity","7 ~ 15"],["Constitution","11 ~ 20"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","24 ~ 35"],["Accuracy","33 ~ 45"],["Defense","192 ~ 228"],["Evasion","19 ~ 29"],["Critical Damage Defense","197 ~ 234"],["Back Defense","197 ~ 234"],["Front Defense","197 ~ 234"],["Critical Hit Resist","34 ~ 46"],["Block","20 ~ 30"],["MP","73 ~ 91"],["HP","148 ~ 177"],["Natural MP Regen","17 ~ 27"],["Natural HP Regen","34 ~ 46"]],
  "2:wise94": [["Damage Tolerance","9.45% ~ 10.94%"],["Perfect Chance","4.33% ~ 5.05%"],["Endurance","2.88% ~ 3.38%"],["Attack increase","1.92% ~ 2.28%"],["Double Resist","2.88% ~ 3.38%"],["Status Effect Resist","6.18% ~ 7.18%"],["Multi-hit Resist","4.33% ~ 5.05%"],["Dexterity","9 ~ 17"],["Constitution","14 ~ 23"],["Willpower","11 ~ 20"],["Attack","20 ~ 30"],["Critical Hit","30 ~ 42"],["Accuracy","41 ~ 54"],["Defense","240 ~ 283"],["Evasion","24 ~ 35"],["Critical Damage Defense","247 ~ 291"],["Back Defense","247 ~ 291"],["Front Defense","247 ~ 291"],["Critical Hit Resist","43 ~ 56"],["Block","25 ~ 36"],["MP","92 ~ 113"],["HP","185 ~ 220"],["Natural MP Regen","22 ~ 32"],["Natural HP Regen","43 ~ 56"]],
  "2:white78": [["Damage Tolerance","8.64% ~ 10.01%"],["Perfect Chance","3.96% ~ 4.62%"],["Endurance","2.64% ~ 3.11%"],["Attack increase","1.76% ~ 2.09%"],["Double Resist","2.64% ~ 3.11%"],["Status Effect Resist","5.65% ~ 6.57%"],["Multi-hit Resist","3.96% ~ 4.62%"],["Dexterity","8 ~ 16"],["Constitution","13 ~ 22"],["Willpower","10 ~ 19"],["Attack","18 ~ 28"],["Critical Hit","28 ~ 39"],["Accuracy","37 ~ 50"],["Defense","220 ~ 260"],["Evasion","22 ~ 32"],["Critical Damage Defense","226 ~ 267"],["Back Defense","226 ~ 267"],["Front Defense","226 ~ 267"],["Critical Hit Resist","39 ~ 52"],["Block","22 ~ 32"],["MP","84 ~ 104"],["HP","169 ~ 201"],["Natural MP Regen","20 ~ 30"],["Natural HP Regen","39 ~ 52"]],
  "2:splendent70": [["Damage Tolerance","8.37% ~ 9.7%"],["Perfect Chance","3.83% ~ 4.47%"],["Endurance","2.55% ~ 3%"],["Attack increase","1.7% ~ 2.03%"],["Double Resist","2.55% ~ 3%"],["Status Effect Resist","5.48% ~ 6.37%"],["Multi-hit Resist","3.83% ~ 4.47%"],["Dexterity","8 ~ 16"],["Constitution","13 ~ 22"],["Willpower","10 ~ 19"],["Attack","17 ~ 27"],["Critical Hit","27 ~ 38"],["Accuracy","36 ~ 48"],["Defense","213 ~ 252"],["Evasion","21 ~ 31"],["Critical Damage Defense","219 ~ 259"],["Back Defense","219 ~ 259"],["Front Defense","219 ~ 259"],["Critical Hit Resist","38 ~ 51"],["Block","22 ~ 32"],["MP","81 ~ 100"],["HP","164 ~ 196"],["Natural MP Regen","19 ~ 29"],["Natural HP Regen","38 ~ 51"]],
  "2:splendentwhite86": [["Damage Tolerance","9.18% ~ 10.63%"],["Perfect Chance","4.2% ~ 4.9%"],["Endurance","2.8% ~ 3.29%"],["Attack increase","1.87% ~ 2.22%"],["Double Resist","2.8% ~ 3.29%"],["Status Effect Resist","6.01% ~ 6.98%"],["Multi-hit Resist","4.2% ~ 4.9%"],["Dexterity","9 ~ 17"],["Constitution","14 ~ 23"],["Willpower","11 ~ 20"],["Attack","19 ~ 29"],["Critical Hit","29 ~ 40"],["Accuracy","40 ~ 53"],["Defense","233 ~ 275"],["Evasion","23 ~ 33"],["Critical Damage Defense","240 ~ 283"],["Back Defense","240 ~ 283"],["Front Defense","240 ~ 283"],["Critical Hit Resist","42 ~ 55"],["Block","24 ~ 35"],["MP","89 ~ 109"],["HP","180 ~ 214"],["Natural MP Regen","21 ~ 31"],["Natural HP Regen","42 ~ 55"]],

  "2:dragon62": [["Damage Tolerance","7.83% ~ 9.07%"],["Perfect Chance","3.58% ~ 4.19%"],["Endurance","2.39% ~ 2.82%"],["Attack increase","1.59% ~ 1.9%"],["Double Resist","2.39% ~ 2.82%"],["Status Effect Resist","5.12% ~ 5.96%"],["Multi-hit Resist","3.58% ~ 4.19%"],["Dexterity","7 ~ 15"],["Constitution","12 ~ 21"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","25 ~ 36"],["Accuracy","34 ~ 46"],["Defense","199 ~ 236"],["Evasion","19 ~ 29"],["Critical Damage Defense","204 ~ 242"],["Back Defense","204 ~ 242"],["Front Defense","204 ~ 242"],["Critical Hit Resist","35 ~ 47"],["Block","20 ~ 30"],["MP","76 ~ 94"],["HP","153 ~ 183"],["Natural MP Regen","18 ~ 28"],["Natural HP Regen","35 ~ 47"]],
  "2:fallen46": [["Damage Tolerance","7.29% ~ 8.45%"],["Perfect Chance","3.34% ~ 3.91%"],["Endurance","2.22% ~ 2.62%"],["Attack increase","1.48% ~ 1.77%"],["Double Resist","2.22% ~ 2.62%"],["Status Effect Resist","4.77% ~ 5.56%"],["Multi-hit Resist","3.34% ~ 3.91%"],["Dexterity","7 ~ 15"],["Constitution","11 ~ 20"],["Willpower","8 ~ 16"],["Attack","15 ~ 24"],["Critical Hit","23 ~ 33"],["Accuracy","31 ~ 43"],["Defense","185 ~ 220"],["Evasion","18 ~ 28"],["Critical Damage Defense","190 ~ 226"],["Back Defense","190 ~ 226"],["Front Defense","190 ~ 226"],["Critical Hit Resist","33 ~ 45"],["Block","19 ~ 29"],["MP","71 ~ 89"],["HP","143 ~ 171"],["Natural MP Regen","17 ~ 27"],["Natural HP Regen","33 ~ 45"]],
  "6:holy41": [["Move Speed","6.24% ~ 7.25%"],["Perfect Chance","2.63% ~ 3.09%"],["Regeneration","1.31% ~ 1.58%"],["Defense increase","1.75% ~ 2.08%"],["Perfect Resist","2.19% ~ 2.59%"],["Status Effect Resist","3.76% ~ 4.39%"],["Endurance Penetration","1.31% ~ 1.58%"],["Dexterity","14 ~ 23"],["Constitution","8 ~ 16"],["Willpower","10 ~ 19"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],["Accuracy","25 ~ 36"],["Defense","146 ~ 175"],["Evasion","14 ~ 23"],["Critical Damage Defense","150 ~ 180"],["Back Defense","150 ~ 180"],["Front Defense","150 ~ 180"],["Critical Hit Resist","26 ~ 37"],["Block","15 ~ 24"],["MP","56 ~ 71"],["HP","112 ~ 136"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","26 ~ 37"]],
  "7:holy41": [["Critical Damage Tolerance","7.8% ~ 9.04%"],["Double Chance","1.04% ~ 1.27%"],["Endurance","1.56% ~ 1.86%"],["Attack increase","1.04% ~ 1.27%"],["Weapon Damage Tolerance","5.85% ~ 6.8%"],["Status Effect Resist","3.34% ~ 3.91%"],["Endurance Penetration","1.17% ~ 1.42%"],["Dexterity","12 ~ 21"],["Constitution","7 ~ 15"],["Willpower","12 ~ 21"],["Attack","10 ~ 19"],["Critical Hit","16 ~ 25"],["Accuracy","22 ~ 32"],["Defense","130 ~ 157"],["Evasion","13 ~ 22"],["Critical Damage Defense","133 ~ 160"],["Back Defense","133 ~ 160"],["Front Defense","133 ~ 160"],["Critical Hit Resist","23 ~ 33"],["Block","13 ~ 22"],["MP","49 ~ 63"],["HP","100 ~ 122"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","23 ~ 33"]],
  "4:holy41": [["Critical Damage Boost","7.8% ~ 9.04%"],["Regeneration","1.17% ~ 1.42%"],["Double Chance","1.04% ~ 1.27%"],["Defense increase","1.56% ~ 1.86%"],["Endurance Penetration","1.17% ~ 1.42%"],["Status Effect Resist","3.34% ~ 3.91%"],["Perfect Resist","1.95% ~ 2.31%"],["Dexterity","10 ~ 19"],["Constitution","7 ~ 15"],["Willpower","14 ~ 23"],["Attack","10 ~ 19"],["Critical Hit","16 ~ 25"],["Accuracy","22 ~ 32"],["Defense","130 ~ 157"],["Evasion","13 ~ 22"],["Critical Damage Defense","133 ~ 160"],["Back Defense","133 ~ 160"],["Front Defense","133 ~ 160"],["Critical Hit Resist","23 ~ 33"],["Block","13 ~ 22"],["MP","49 ~ 63"],["HP","100 ~ 122"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","23 ~ 33"]],
  "5:holy41": [["Combat Speed","4.38% ~ 5.11%"],["Perfect Chance","2.04% ~ 2.42%"],["Regeneration","1.02% ~ 1.24%"],["Defense increase","1.36% ~ 1.63%"],["Endurance Penetration","1.02% ~ 1.24%"],["Status Effect Resist","2.92% ~ 3.43%"],["Multi-hit Resist","2.04% ~ 2.42%"],["Dexterity","9 ~ 17"],["Constitution","9 ~ 17"],["Willpower","9 ~ 17"],["Attack","9 ~ 17"],["Critical Hit","14 ~ 23"],["Accuracy","19 ~ 29"],["Defense","113 ~ 137"],["Evasion","11 ~ 20"],["Critical Damage Defense","116 ~ 140"],["Back Defense","116 ~ 140"],["Front Defense","116 ~ 140"],["Critical Hit Resist","20 ~ 30"],["Block","11 ~ 20"],["MP","43 ~ 56"],["HP","87 ~ 107"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","20 ~ 30"]],
  "2:holy41": [["Damage Tolerance","7.02% ~ 8.14%"],["Perfect Chance","3.21% ~ 3.76%"],["Endurance","2.14% ~ 2.53%"],["Attack increase","1.43% ~ 1.71%"],["Double Resist","2.14% ~ 2.53%"],["Status Effect Resist","4.59% ~ 5.35%"],["Multi-hit Resist","3.21% ~ 3.76%"],["Dexterity","7 ~ 15"],["Constitution","10 ~ 19"],["Willpower","8 ~ 16"],["Attack","15 ~ 24"],["Critical Hit","22 ~ 32"],["Accuracy","30 ~ 42"],["Defense","178 ~ 212"],["Evasion","17 ~ 27"],["Critical Damage Defense","183 ~ 217"],["Back Defense","183 ~ 217"],["Front Defense","183 ~ 217"],["Critical Hit Resist","32 ~ 44"],["Block","18 ~ 28"],["MP","68 ~ 85"],["HP","137 ~ 165"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","32 ~ 44"]],
  "2:common13": [
    [
      "Damage Tolerance",
      "2.97% ~ 3.49%"
    ],
    [
      "Perfect Chance",
      "1.36% ~ 1.63%"
    ],
    [
      "Endurance",
      "0.9% ~ 1.11%"
    ],
    [
      "Attack increase",
      "0.6% ~ 0.76%"
    ],
    [
      "Double Resist",
      "0.9% ~ 1.11%"
    ],
    [
      "Status Effect Resist",
      "1.94% ~ 2.3%"
    ],
    [
      "Multi-hit Resist",
      "1.36% ~ 1.63%"
    ],
    [
      "Dexterity",
      "2 ~ 9"
    ],
    [
      "Constitution",
      "4 ~ 12"
    ],
    [
      "Willpower",
      "3 ~ 10"
    ],
    [
      "Attack",
      "6 ~ 14"
    ],
    [
      "Critical Hit",
      "9 ~ 17"
    ],
    [
      "Accuracy",
      "12 ~ 21"
    ],
    [
      "Defense",
      "75 ~ 93"
    ],
    [
      "Evasion",
      "7 ~ 15"
    ],
    [
      "Critical Damage Defense",
      "78 ~ 97"
    ],
    [
      "Back Defense",
      "78 ~ 97"
    ],
    [
      "Front Defense",
      "78 ~ 97"
    ],
    [
      "Critical Hit Resist",
      "13 ~ 22"
    ],
    [
      "Block",
      "7 ~ 15"
    ],
    [
      "MP",
      "29 ~ 40"
    ],
    [
      "HP",
      "58 ~ 74"
    ],
    [
      "Natural MP Regen",
      "6 ~ 14"
    ],
    [
      "Natural HP Regen",
      "13 ~ 22"
    ]
  ],
  "2:common18": [
    [
      "Damage Tolerance",
      "3.1% ~ 3.64%"
    ],
    [
      "Perfect Chance",
      "1.42% ~ 1.7%"
    ],
    [
      "Endurance",
      "0.94% ~ 1.15%"
    ],
    [
      "Attack increase",
      "0.63% ~ 0.79%"
    ],
    [
      "Double Resist",
      "0.94% ~ 1.15%"
    ],
    [
      "Status Effect Resist",
      "2.03% ~ 2.4%"
    ],
    [
      "Multi-hit Resist",
      "1.42% ~ 1.7%"
    ],
    [
      "Dexterity",
      "3 ~ 10"
    ],
    [
      "Constitution",
      "4 ~ 12"
    ],
    [
      "Willpower",
      "3 ~ 10"
    ],
    [
      "Attack",
      "6 ~ 14"
    ],
    [
      "Critical Hit",
      "10 ~ 19"
    ],
    [
      "Accuracy",
      "13 ~ 22"
    ],
    [
      "Defense",
      "79 ~ 98"
    ],
    [
      "Evasion",
      "8 ~ 16"
    ],
    [
      "Critical Damage Defense",
      "81 ~ 100"
    ],
    [
      "Back Defense",
      "81 ~ 100"
    ],
    [
      "Front Defense",
      "81 ~ 100"
    ],
    [
      "Critical Hit Resist",
      "14 ~ 23"
    ],
    [
      "Block",
      "8 ~ 16"
    ],
    [
      "MP",
      "30 ~ 42"
    ],
    [
      "HP",
      "60 ~ 76"
    ],
    [
      "Natural MP Regen",
      "6 ~ 14"
    ],
    [
      "Natural HP Regen",
      "14 ~ 23"
    ]
  ],
  "2:rare": [
    [
      "Damage Tolerance",
      "3.96% ~ 4.62%"
    ],
    [
      "Perfect Chance",
      "1.81% ~ 2.15%"
    ],
    [
      "Endurance",
      "1.21% ~ 1.46%"
    ],
    [
      "Attack increase",
      "0.8% ~ 0.99%"
    ],
    [
      "Double Resist",
      "1.21% ~ 1.46%"
    ],
    [
      "Status Effect Resist",
      "2.59% ~ 3.05%"
    ],
    [
      "Multi-hit Resist",
      "1.81% ~ 2.15%"
    ],
    [
      "Dexterity",
      "3 ~ 10"
    ],
    [
      "Constitution",
      "6 ~ 14"
    ],
    [
      "Willpower",
      "4 ~ 12"
    ],
    [
      "Attack",
      "8 ~ 16"
    ],
    [
      "Critical Hit",
      "12 ~ 21"
    ],
    [
      "Accuracy",
      "17 ~ 27"
    ],
    [
      "Defense",
      "101 ~ 123"
    ],
    [
      "Evasion",
      "10 ~ 19"
    ],
    [
      "Critical Damage Defense",
      "103 ~ 125"
    ],
    [
      "Back Defense",
      "103 ~ 125"
    ],
    [
      "Front Defense",
      "103 ~ 125"
    ],
    [
      "Critical Hit Resist",
      "18 ~ 28"
    ],
    [
      "Block",
      "10 ~ 19"
    ],
    [
      "MP",
      "38 ~ 51"
    ],
    [
      "HP",
      "78 ~ 97"
    ],
    [
      "Natural MP Regen",
      "9 ~ 17"
    ],
    [
      "Natural HP Regen",
      "18 ~ 28"
    ]
  ],
  "2:epic": [
    [
      "Damage Tolerance",
      "5.17% ~ 6.02%"
    ],
    [
      "Perfect Chance",
      "2.37% ~ 2.8%"
    ],
    [
      "Endurance",
      "1.58% ~ 1.89%"
    ],
    [
      "Attack increase",
      "1.05% ~ 1.28%"
    ],
    [
      "Double Resist",
      "1.58% ~ 1.89%"
    ],
    [
      "Status Effect Resist",
      "3.39% ~ 3.97%"
    ],
    [
      "Multi-hit Resist",
      "2.37% ~ 2.8%"
    ],
    [
      "Dexterity",
      "5 ~ 13"
    ],
    [
      "Constitution",
      "8 ~ 16"
    ],
    [
      "Willpower",
      "6 ~ 14"
    ],
    [
      "Attack",
      "11 ~ 20"
    ],
    [
      "Critical Hit",
      "17 ~ 27"
    ],
    [
      "Accuracy",
      "22 ~ 32"
    ],
    [
      "Defense",
      "131 ~ 158"
    ],
    [
      "Evasion",
      "13 ~ 22"
    ],
    [
      "Critical Damage Defense",
      "135 ~ 162"
    ],
    [
      "Back Defense",
      "135 ~ 162"
    ],
    [
      "Front Defense",
      "135 ~ 162"
    ],
    [
      "Critical Hit Resist",
      "24 ~ 35"
    ],
    [
      "Block",
      "13 ~ 22"
    ],
    [
      "MP",
      "50 ~ 65"
    ],
    [
      "HP",
      "101 ~ 123"
    ],
    [
      "Natural MP Regen",
      "12 ~ 21"
    ],
    [
      "Natural HP Regen",
      "24 ~ 35"
    ]
  ],
  "2:unique": [
    [
      "Damage Tolerance",
      "6.75% ~ 7.83%"
    ],
    [
      "Perfect Chance",
      "3.09% ~ 3.62%"
    ],
    [
      "Endurance",
      "2.06% ~ 2.44%"
    ],
    [
      "Attack increase",
      "1.37% ~ 1.65%"
    ],
    [
      "Double Resist",
      "2.06% ~ 2.44%"
    ],
    [
      "Status Effect Resist",
      "4.42% ~ 5.15%"
    ],
    [
      "Multi-hit Resist",
      "3.09% ~ 3.62%"
    ],
    [
      "Dexterity",
      "6 ~ 14"
    ],
    [
      "Constitution",
      "10 ~ 19"
    ],
    [
      "Willpower",
      "8 ~ 16"
    ],
    [
      "Attack",
      "14 ~ 23"
    ],
    [
      "Critical Hit",
      "22 ~ 32"
    ],
    [
      "Accuracy",
      "29 ~ 40"
    ],
    [
      "Defense",
      "171 ~ 204"
    ],
    [
      "Evasion",
      "17 ~ 27"
    ],
    [
      "Critical Damage Defense",
      "176 ~ 209"
    ],
    [
      "Back Defense",
      "176 ~ 209"
    ],
    [
      "Front Defense",
      "176 ~ 209"
    ],
    [
      "Critical Hit Resist",
      "30 ~ 42"
    ],
    [
      "Block",
      "17 ~ 27"
    ],
    [
      "MP",
      "66 ~ 83"
    ],
    [
      "HP",
      "132 ~ 159"
    ],
    [
      "Natural MP Regen",
      "15 ~ 24"
    ],
    [
      "Natural HP Regen",
      "30 ~ 42"
    ]
  ],
  "4:common13": [
    [
      "Critical Damage Boost",
      "3.3% ~ 3.87%"
    ],
    [
      "Regeneration",
      "0.49% ~ 0.63%"
    ],
    [
      "Double Chance",
      "0.44% ~ 0.58%"
    ],
    [
      "Defense increase",
      "0.66% ~ 0.83%"
    ],
    [
      "Endurance Penetration",
      "0.49% ~ 0.63%"
    ],
    [
      "Status Effect Resist",
      "1.41% ~ 1.69%"
    ],
    [
      "Perfect Resist",
      "0.82% ~ 1.01%"
    ],
    [
      "Dexterity",
      "4 ~ 12"
    ],
    [
      "Constitution",
      "2 ~ 9"
    ],
    [
      "Willpower",
      "5 ~ 13"
    ],
    [
      "Attack",
      "4 ~ 12"
    ],
    [
      "Critical Hit",
      "7 ~ 15"
    ],
    [
      "Accuracy",
      "9 ~ 17"
    ],
    [
      "Defense",
      "55 ~ 70"
    ],
    [
      "Evasion",
      "5 ~ 13"
    ],
    [
      "Critical Damage Defense",
      "56 ~ 71"
    ],
    [
      "Back Defense",
      "56 ~ 71"
    ],
    [
      "Front Defense",
      "56 ~ 71"
    ],
    [
      "Critical Hit Resist",
      "10 ~ 19"
    ],
    [
      "Block",
      "5 ~ 13"
    ],
    [
      "MP",
      "21 ~ 31"
    ],
    [
      "HP",
      "42 ~ 55"
    ],
    [
      "Natural MP Regen",
      "4 ~ 12"
    ],
    [
      "Natural HP Regen",
      "10 ~ 19"
    ]
  ],
  "4:common18": [
    [
      "Critical Damage Boost",
      "3.45% ~ 4.04%"
    ],
    [
      "Regeneration",
      "0.51% ~ 0.66%"
    ],
    [
      "Double Chance",
      "0.46% ~ 0.6%"
    ],
    [
      "Defense increase",
      "0.69% ~ 0.86%"
    ],
    [
      "Endurance Penetration",
      "0.51% ~ 0.66%"
    ],
    [
      "Status Effect Resist",
      "1.47% ~ 1.76%"
    ],
    [
      "Perfect Resist",
      "0.86% ~ 1.06%"
    ],
    [
      "Dexterity",
      "4 ~ 12"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "6 ~ 14"
    ],
    [
      "Attack",
      "5 ~ 13"
    ],
    [
      "Critical Hit",
      "7 ~ 15"
    ],
    [
      "Accuracy",
      "9 ~ 17"
    ],
    [
      "Defense",
      "57 ~ 73"
    ],
    [
      "Evasion",
      "5 ~ 13"
    ],
    [
      "Critical Damage Defense",
      "59 ~ 75"
    ],
    [
      "Back Defense",
      "59 ~ 75"
    ],
    [
      "Front Defense",
      "59 ~ 75"
    ],
    [
      "Critical Hit Resist",
      "10 ~ 19"
    ],
    [
      "Block",
      "5 ~ 13"
    ],
    [
      "MP",
      "22 ~ 32"
    ],
    [
      "HP",
      "44 ~ 58"
    ],
    [
      "Natural MP Regen",
      "5 ~ 13"
    ],
    [
      "Natural HP Regen",
      "10 ~ 19"
    ]
  ],
  "4:rare": [
    [
      "Critical Damage Boost",
      "4.4% ~ 5.13%"
    ],
    [
      "Regeneration",
      "0.66% ~ 0.83%"
    ],
    [
      "Double Chance",
      "0.58% ~ 0.74%"
    ],
    [
      "Defense increase",
      "0.88% ~ 1.08%"
    ],
    [
      "Endurance Penetration",
      "0.66% ~ 0.83%"
    ],
    [
      "Status Effect Resist",
      "1.88% ~ 2.23%"
    ],
    [
      "Perfect Resist",
      "1.1% ~ 1.34%"
    ],
    [
      "Dexterity",
      "6 ~ 14"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "7 ~ 15"
    ],
    [
      "Attack",
      "6 ~ 14"
    ],
    [
      "Critical Hit",
      "9 ~ 17"
    ],
    [
      "Accuracy",
      "12 ~ 21"
    ],
    [
      "Defense",
      "73 ~ 91"
    ],
    [
      "Evasion",
      "7 ~ 15"
    ],
    [
      "Critical Damage Defense",
      "75 ~ 93"
    ],
    [
      "Back Defense",
      "75 ~ 93"
    ],
    [
      "Front Defense",
      "75 ~ 93"
    ],
    [
      "Critical Hit Resist",
      "13 ~ 22"
    ],
    [
      "Block",
      "7 ~ 15"
    ],
    [
      "MP",
      "28 ~ 39"
    ],
    [
      "HP",
      "56 ~ 71"
    ],
    [
      "Natural MP Regen",
      "6 ~ 14"
    ],
    [
      "Natural HP Regen",
      "13 ~ 22"
    ]
  ],
  "4:epic": [
    [
      "Critical Damage Boost",
      "5.75% ~ 6.68%"
    ],
    [
      "Regeneration",
      "0.86% ~ 1.06%"
    ],
    [
      "Double Chance",
      "0.76% ~ 0.94%"
    ],
    [
      "Defense increase",
      "1.15% ~ 1.39%"
    ],
    [
      "Endurance Penetration",
      "0.86% ~ 1.06%"
    ],
    [
      "Status Effect Resist",
      "2.46% ~ 2.9%"
    ],
    [
      "Perfect Resist",
      "1.43% ~ 1.71%"
    ],
    [
      "Dexterity",
      "8 ~ 16"
    ],
    [
      "Constitution",
      "5 ~ 13"
    ],
    [
      "Willpower",
      "10 ~ 19"
    ],
    [
      "Attack",
      "8 ~ 16"
    ],
    [
      "Critical Hit",
      "12 ~ 21"
    ],
    [
      "Accuracy",
      "16 ~ 25"
    ],
    [
      "Defense",
      "95 ~ 116"
    ],
    [
      "Evasion",
      "9 ~ 17"
    ],
    [
      "Critical Damage Defense",
      "98 ~ 120"
    ],
    [
      "Back Defense",
      "98 ~ 120"
    ],
    [
      "Front Defense",
      "98 ~ 120"
    ],
    [
      "Critical Hit Resist",
      "17 ~ 27"
    ],
    [
      "Block",
      "9 ~ 17"
    ],
    [
      "MP",
      "36 ~ 48"
    ],
    [
      "HP",
      "74 ~ 92"
    ],
    [
      "Natural MP Regen",
      "8 ~ 16"
    ],
    [
      "Natural HP Regen",
      "17 ~ 27"
    ]
  ],
  "4:unique": [
    [
      "Critical Damage Boost",
      "7.5% ~ 8.7%"
    ],
    [
      "Regeneration",
      "1.12% ~ 1.36%"
    ],
    [
      "Double Chance",
      "1% ~ 1.22%"
    ],
    [
      "Defense increase",
      "1.5% ~ 1.8%"
    ],
    [
      "Endurance Penetration",
      "1.12% ~ 1.36%"
    ],
    [
      "Status Effect Resist",
      "3.21% ~ 3.76%"
    ],
    [
      "Perfect Resist",
      "1.87% ~ 2.22%"
    ],
    [
      "Dexterity",
      "10 ~ 19"
    ],
    [
      "Constitution",
      "6 ~ 14"
    ],
    [
      "Willpower",
      "13 ~ 22"
    ],
    [
      "Attack",
      "10 ~ 19"
    ],
    [
      "Critical Hit",
      "16 ~ 25"
    ],
    [
      "Accuracy",
      "21 ~ 31"
    ],
    [
      "Defense",
      "125 ~ 151"
    ],
    [
      "Evasion",
      "12 ~ 21"
    ],
    [
      "Critical Damage Defense",
      "128 ~ 154"
    ],
    [
      "Back Defense",
      "128 ~ 154"
    ],
    [
      "Front Defense",
      "128 ~ 154"
    ],
    [
      "Critical Hit Resist",
      "22 ~ 32"
    ],
    [
      "Block",
      "13 ~ 22"
    ],
    [
      "MP",
      "48 ~ 62"
    ],
    [
      "HP",
      "96 ~ 117"
    ],
    [
      "Natural MP Regen",
      "11 ~ 20"
    ],
    [
      "Natural HP Regen",
      "22 ~ 32"
    ]
  ],
  "5:common13": [
    [
      "Combat Speed",
      "1.85% ~ 2.2%"
    ],
    [
      "Perfect Chance",
      "0.86% ~ 1.06%"
    ],
    [
      "Regeneration",
      "0.43% ~ 0.56%"
    ],
    [
      "Defense increase",
      "0.57% ~ 0.73%"
    ],
    [
      "Endurance Penetration",
      "0.43% ~ 0.56%"
    ],
    [
      "Status Effect Resist",
      "1.23% ~ 1.48%"
    ],
    [
      "Multi-hit Resist",
      "0.86% ~ 1.06%"
    ],
    [
      "Dexterity",
      "3 ~ 10"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "3 ~ 10"
    ],
    [
      "Attack",
      "4 ~ 12"
    ],
    [
      "Critical Hit",
      "6 ~ 14"
    ],
    [
      "Accuracy",
      "8 ~ 16"
    ],
    [
      "Defense",
      "48 ~ 62"
    ],
    [
      "Evasion",
      "5 ~ 13"
    ],
    [
      "Critical Damage Defense",
      "49 ~ 63"
    ],
    [
      "Back Defense",
      "49 ~ 63"
    ],
    [
      "Front Defense",
      "49 ~ 63"
    ],
    [
      "Critical Hit Resist",
      "8 ~ 16"
    ],
    [
      "Block",
      "5 ~ 13"
    ],
    [
      "MP",
      "18 ~ 28"
    ],
    [
      "HP",
      "36 ~ 48"
    ],
    [
      "Natural MP Regen",
      "4 ~ 12"
    ],
    [
      "Natural HP Regen",
      "8 ~ 16"
    ]
  ],
  "5:common18": [
    [
      "Combat Speed",
      "1.94% ~ 2.3%"
    ],
    [
      "Perfect Chance",
      "0.9% ~ 1.11%"
    ],
    [
      "Regeneration",
      "0.45% ~ 0.59%"
    ],
    [
      "Defense increase",
      "0.6% ~ 0.76%"
    ],
    [
      "Endurance Penetration",
      "0.45% ~ 0.59%"
    ],
    [
      "Status Effect Resist",
      "1.29% ~ 1.55%"
    ],
    [
      "Multi-hit Resist",
      "0.9% ~ 1.11%"
    ],
    [
      "Dexterity",
      "4 ~ 12"
    ],
    [
      "Constitution",
      "4 ~ 12"
    ],
    [
      "Willpower",
      "4 ~ 12"
    ],
    [
      "Attack",
      "4 ~ 12"
    ],
    [
      "Critical Hit",
      "6 ~ 14"
    ],
    [
      "Accuracy",
      "8 ~ 16"
    ],
    [
      "Defense",
      "50 ~ 65"
    ],
    [
      "Evasion",
      "5 ~ 13"
    ],
    [
      "Critical Damage Defense",
      "51 ~ 66"
    ],
    [
      "Back Defense",
      "51 ~ 66"
    ],
    [
      "Front Defense",
      "51 ~ 66"
    ],
    [
      "Critical Hit Resist",
      "9 ~ 17"
    ],
    [
      "Block",
      "5 ~ 13"
    ],
    [
      "MP",
      "19 ~ 29"
    ],
    [
      "HP",
      "38 ~ 51"
    ],
    [
      "Natural MP Regen",
      "4 ~ 12"
    ],
    [
      "Natural HP Regen",
      "9 ~ 17"
    ]
  ],
  "5:rare": [
    [
      "Combat Speed",
      "2.47% ~ 2.91%"
    ],
    [
      "Perfect Chance",
      "1.15% ~ 1.39%"
    ],
    [
      "Regeneration",
      "0.57% ~ 0.73%"
    ],
    [
      "Defense increase",
      "0.77% ~ 0.96%"
    ],
    [
      "Endurance Penetration",
      "0.57% ~ 0.73%"
    ],
    [
      "Status Effect Resist",
      "1.65% ~ 1.97%"
    ],
    [
      "Multi-hit Resist",
      "1.15% ~ 1.39%"
    ],
    [
      "Dexterity",
      "5 ~ 13"
    ],
    [
      "Constitution",
      "5 ~ 13"
    ],
    [
      "Willpower",
      "5 ~ 13"
    ],
    [
      "Attack",
      "5 ~ 13"
    ],
    [
      "Critical Hit",
      "8 ~ 16"
    ],
    [
      "Accuracy",
      "11 ~ 20"
    ],
    [
      "Defense",
      "64 ~ 81"
    ],
    [
      "Evasion",
      "6 ~ 14"
    ],
    [
      "Critical Damage Defense",
      "65 ~ 82"
    ],
    [
      "Back Defense",
      "65 ~ 82"
    ],
    [
      "Front Defense",
      "65 ~ 82"
    ],
    [
      "Critical Hit Resist",
      "11 ~ 20"
    ],
    [
      "Block",
      "6 ~ 14"
    ],
    [
      "MP",
      "24 ~ 35"
    ],
    [
      "HP",
      "49 ~ 63"
    ],
    [
      "Natural MP Regen",
      "5 ~ 13"
    ],
    [
      "Natural HP Regen",
      "11 ~ 20"
    ]
  ],
  "5:epic": [
    [
      "Combat Speed",
      "3.23% ~ 3.78%"
    ],
    [
      "Perfect Chance",
      "1.5% ~ 1.8%"
    ],
    [
      "Regeneration",
      "0.75% ~ 0.93%"
    ],
    [
      "Defense increase",
      "1% ~ 1.22%"
    ],
    [
      "Endurance Penetration",
      "0.75% ~ 0.93%"
    ],
    [
      "Status Effect Resist",
      "2.15% ~ 2.54%"
    ],
    [
      "Multi-hit Resist",
      "1.5% ~ 1.8%"
    ],
    [
      "Dexterity",
      "6 ~ 14"
    ],
    [
      "Constitution",
      "6 ~ 14"
    ],
    [
      "Willpower",
      "6 ~ 14"
    ],
    [
      "Attack",
      "7 ~ 15"
    ],
    [
      "Critical Hit",
      "10 ~ 19"
    ],
    [
      "Accuracy",
      "14 ~ 23"
    ],
    [
      "Defense",
      "83 ~ 102"
    ],
    [
      "Evasion",
      "8 ~ 16"
    ],
    [
      "Critical Damage Defense",
      "86 ~ 106"
    ],
    [
      "Back Defense",
      "86 ~ 106"
    ],
    [
      "Front Defense",
      "86 ~ 106"
    ],
    [
      "Critical Hit Resist",
      "15 ~ 24"
    ],
    [
      "Block",
      "8 ~ 16"
    ],
    [
      "MP",
      "32 ~ 44"
    ],
    [
      "HP",
      "64 ~ 81"
    ],
    [
      "Natural MP Regen",
      "7 ~ 15"
    ],
    [
      "Natural HP Regen",
      "15 ~ 24"
    ]
  ],
  "5:unique": [
    [
      "Combat Speed",
      "4.21% ~ 4.91%"
    ],
    [
      "Perfect Chance",
      "1.96% ~ 2.32%"
    ],
    [
      "Regeneration",
      "0.98% ~ 1.2%"
    ],
    [
      "Defense increase",
      "1.31% ~ 1.58%"
    ],
    [
      "Endurance Penetration",
      "0.98% ~ 1.2%"
    ],
    [
      "Status Effect Resist",
      "2.81% ~ 3.3%"
    ],
    [
      "Multi-hit Resist",
      "1.96% ~ 2.32%"
    ],
    [
      "Dexterity",
      "9 ~ 17"
    ],
    [
      "Constitution",
      "9 ~ 17"
    ],
    [
      "Willpower",
      "9 ~ 17"
    ],
    [
      "Attack",
      "9 ~ 17"
    ],
    [
      "Critical Hit",
      "14 ~ 23"
    ],
    [
      "Accuracy",
      "18 ~ 28"
    ],
    [
      "Defense",
      "109 ~ 132"
    ],
    [
      "Evasion",
      "10 ~ 19"
    ],
    [
      "Critical Damage Defense",
      "112 ~ 136"
    ],
    [
      "Back Defense",
      "112 ~ 136"
    ],
    [
      "Front Defense",
      "112 ~ 136"
    ],
    [
      "Critical Hit Resist",
      "19 ~ 29"
    ],
    [
      "Block",
      "11 ~ 20"
    ],
    [
      "MP",
      "42 ~ 55"
    ],
    [
      "HP",
      "84 ~ 104"
    ],
    [
      "Natural MP Regen",
      "10 ~ 19"
    ],
    [
      "Natural HP Regen",
      "19 ~ 29"
    ]
  ],
  "6:common13": [
    [
      "Move Speed",
      "2.64% ~ 3.11%"
    ],
    [
      "Perfect Chance",
      "1.11% ~ 1.35%"
    ],
    [
      "Regeneration",
      "0.55% ~ 0.7%"
    ],
    [
      "Defense increase",
      "0.74% ~ 0.92%"
    ],
    [
      "Perfect Resist",
      "0.93% ~ 1.14%"
    ],
    [
      "Status Effect Resist",
      "1.58% ~ 1.89%"
    ],
    [
      "Endurance Penetration",
      "0.55% ~ 0.7%"
    ],
    [
      "Dexterity",
      "5 ~ 13"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "4 ~ 12"
    ],
    [
      "Attack",
      "5 ~ 13"
    ],
    [
      "Critical Hit",
      "7 ~ 15"
    ],
    [
      "Accuracy",
      "10 ~ 19"
    ],
    [
      "Defense",
      "61 ~ 77"
    ],
    [
      "Evasion",
      "6 ~ 14"
    ],
    [
      "Critical Damage Defense",
      "63 ~ 79"
    ],
    [
      "Back Defense",
      "63 ~ 79"
    ],
    [
      "Front Defense",
      "63 ~ 79"
    ],
    [
      "Critical Hit Resist",
      "11 ~ 20"
    ],
    [
      "Block",
      "6 ~ 14"
    ],
    [
      "MP",
      "23 ~ 33"
    ],
    [
      "HP",
      "47 ~ 61"
    ],
    [
      "Natural MP Regen",
      "5 ~ 13"
    ],
    [
      "Natural HP Regen",
      "11 ~ 20"
    ]
  ],
  "6:common18": [
    [
      "Move Speed",
      "2.76% ~ 3.24%"
    ],
    [
      "Perfect Chance",
      "1.16% ~ 1.4%"
    ],
    [
      "Regeneration",
      "0.58% ~ 0.74%"
    ],
    [
      "Defense increase",
      "0.77% ~ 0.96%"
    ],
    [
      "Perfect Resist",
      "0.97% ~ 1.19%"
    ],
    [
      "Status Effect Resist",
      "1.66% ~ 1.98%"
    ],
    [
      "Endurance Penetration",
      "0.58% ~ 0.74%"
    ],
    [
      "Dexterity",
      "6 ~ 14"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "4 ~ 12"
    ],
    [
      "Attack",
      "5 ~ 13"
    ],
    [
      "Critical Hit",
      "8 ~ 16"
    ],
    [
      "Accuracy",
      "10 ~ 19"
    ],
    [
      "Defense",
      "64 ~ 81"
    ],
    [
      "Evasion",
      "6 ~ 14"
    ],
    [
      "Critical Damage Defense",
      "66 ~ 83"
    ],
    [
      "Back Defense",
      "66 ~ 83"
    ],
    [
      "Front Defense",
      "66 ~ 83"
    ],
    [
      "Critical Hit Resist",
      "11 ~ 20"
    ],
    [
      "Block",
      "6 ~ 14"
    ],
    [
      "MP",
      "24 ~ 35"
    ],
    [
      "HP",
      "49 ~ 63"
    ],
    [
      "Natural MP Regen",
      "5 ~ 13"
    ],
    [
      "Natural HP Regen",
      "11 ~ 20"
    ]
  ],
  "6:rare": [
    [
      "Move Speed",
      "3.52% ~ 4.12%"
    ],
    [
      "Perfect Chance",
      "1.48% ~ 1.77%"
    ],
    [
      "Regeneration",
      "0.74% ~ 0.92%"
    ],
    [
      "Defense increase",
      "0.99% ~ 1.21%"
    ],
    [
      "Perfect Resist",
      "1.23% ~ 1.48%"
    ],
    [
      "Status Effect Resist",
      "2.12% ~ 2.51%"
    ],
    [
      "Endurance Penetration",
      "0.74% ~ 0.92%"
    ],
    [
      "Dexterity",
      "7 ~ 15"
    ],
    [
      "Constitution",
      "4 ~ 12"
    ],
    [
      "Willpower",
      "6 ~ 14"
    ],
    [
      "Attack",
      "6 ~ 14"
    ],
    [
      "Critical Hit",
      "10 ~ 19"
    ],
    [
      "Accuracy",
      "14 ~ 23"
    ],
    [
      "Defense",
      "82 ~ 101"
    ],
    [
      "Evasion",
      "8 ~ 16"
    ],
    [
      "Critical Damage Defense",
      "84 ~ 104"
    ],
    [
      "Back Defense",
      "84 ~ 104"
    ],
    [
      "Front Defense",
      "84 ~ 104"
    ],
    [
      "Critical Hit Resist",
      "14 ~ 23"
    ],
    [
      "Block",
      "8 ~ 16"
    ],
    [
      "MP",
      "31 ~ 43"
    ],
    [
      "HP",
      "63 ~ 79"
    ],
    [
      "Natural MP Regen",
      "7 ~ 15"
    ],
    [
      "Natural HP Regen",
      "14 ~ 23"
    ]
  ],
  "6:epic": [
    [
      "Move Speed",
      "4.6% ~ 5.36%"
    ],
    [
      "Perfect Chance",
      "1.94% ~ 2.3%"
    ],
    [
      "Regeneration",
      "0.97% ~ 1.19%"
    ],
    [
      "Defense increase",
      "1.29% ~ 1.55%"
    ],
    [
      "Perfect Resist",
      "1.61% ~ 1.92%"
    ],
    [
      "Status Effect Resist",
      "2.77% ~ 3.26%"
    ],
    [
      "Endurance Penetration",
      "0.97% ~ 1.19%"
    ],
    [
      "Dexterity",
      "10 ~ 19"
    ],
    [
      "Constitution",
      "6 ~ 14"
    ],
    [
      "Willpower",
      "8 ~ 16"
    ],
    [
      "Attack",
      "9 ~ 17"
    ],
    [
      "Critical Hit",
      "13 ~ 22"
    ],
    [
      "Accuracy",
      "18 ~ 28"
    ],
    [
      "Defense",
      "107 ~ 130"
    ],
    [
      "Evasion",
      "10 ~ 19"
    ],
    [
      "Critical Damage Defense",
      "110 ~ 134"
    ],
    [
      "Back Defense",
      "110 ~ 134"
    ],
    [
      "Front Defense",
      "110 ~ 134"
    ],
    [
      "Critical Hit Resist",
      "19 ~ 29"
    ],
    [
      "Block",
      "10 ~ 19"
    ],
    [
      "MP",
      "41 ~ 54"
    ],
    [
      "HP",
      "83 ~ 102"
    ],
    [
      "Natural MP Regen",
      "9 ~ 17"
    ],
    [
      "Natural HP Regen",
      "19 ~ 29"
    ]
  ],
  "6:unique": [
    [
      "Move Speed",
      "6% ~ 6.97%"
    ],
    [
      "Perfect Chance",
      "2.53% ~ 2.98%"
    ],
    [
      "Regeneration",
      "1.26% ~ 1.52%"
    ],
    [
      "Defense increase",
      "1.68% ~ 2%"
    ],
    [
      "Perfect Resist",
      "2.1% ~ 2.49%"
    ],
    [
      "Status Effect Resist",
      "3.61% ~ 4.22%"
    ],
    [
      "Endurance Penetration",
      "1.26% ~ 1.52%"
    ],
    [
      "Dexterity",
      "13 ~ 22"
    ],
    [
      "Constitution",
      "8 ~ 16"
    ],
    [
      "Willpower",
      "10 ~ 19"
    ],
    [
      "Attack",
      "11 ~ 20"
    ],
    [
      "Critical Hit",
      "18 ~ 28"
    ],
    [
      "Accuracy",
      "24 ~ 35"
    ],
    [
      "Defense",
      "140 ~ 168"
    ],
    [
      "Evasion",
      "14 ~ 23"
    ],
    [
      "Critical Damage Defense",
      "144 ~ 173"
    ],
    [
      "Back Defense",
      "144 ~ 173"
    ],
    [
      "Front Defense",
      "144 ~ 173"
    ],
    [
      "Critical Hit Resist",
      "25 ~ 36"
    ],
    [
      "Block",
      "14 ~ 23"
    ],
    [
      "MP",
      "54 ~ 69"
    ],
    [
      "HP",
      "108 ~ 131"
    ],
    [
      "Natural MP Regen",
      "12 ~ 21"
    ],
    [
      "Natural HP Regen",
      "25 ~ 36"
    ]
  ],
  "7:common13": [
    [
      "Critical Damage Tolerance",
      "3.3% ~ 3.87%"
    ],
    [
      "Double Chance",
      "0.44% ~ 0.58%"
    ],
    [
      "Endurance",
      "0.66% ~ 0.83%"
    ],
    [
      "Attack increase",
      "0.44% ~ 0.58%"
    ],
    [
      "Weapon Damage Tolerance",
      "2.47% ~ 2.91%"
    ],
    [
      "Status Effect Resist",
      "1.41% ~ 1.69%"
    ],
    [
      "Endurance Penetration",
      "0.49% ~ 0.63%"
    ],
    [
      "Dexterity",
      "5 ~ 13"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "5 ~ 13"
    ],
    [
      "Attack",
      "4 ~ 12"
    ],
    [
      "Critical Hit",
      "7 ~ 15"
    ],
    [
      "Accuracy",
      "9 ~ 17"
    ],
    [
      "Defense",
      "55 ~ 70"
    ],
    [
      "Evasion",
      "5 ~ 13"
    ],
    [
      "Critical Damage Defense",
      "56 ~ 71"
    ],
    [
      "Back Defense",
      "56 ~ 71"
    ],
    [
      "Front Defense",
      "56 ~ 71"
    ],
    [
      "Critical Hit Resist",
      "10 ~ 19"
    ],
    [
      "Block",
      "5 ~ 13"
    ],
    [
      "MP",
      "21 ~ 31"
    ],
    [
      "HP",
      "42 ~ 55"
    ],
    [
      "Natural MP Regen",
      "4 ~ 12"
    ],
    [
      "Natural HP Regen",
      "10 ~ 19"
    ]
  ],
  "7:common18": [
    [
      "Critical Damage Tolerance",
      "3.45% ~ 4.04%"
    ],
    [
      "Double Chance",
      "0.46% ~ 0.6%"
    ],
    [
      "Endurance",
      "0.69% ~ 0.86%"
    ],
    [
      "Attack increase",
      "0.46% ~ 0.6%"
    ],
    [
      "Weapon Damage Tolerance",
      "2.58% ~ 3.04%"
    ],
    [
      "Status Effect Resist",
      "1.47% ~ 1.76%"
    ],
    [
      "Endurance Penetration",
      "0.51% ~ 0.66%"
    ],
    [
      "Dexterity",
      "5 ~ 13"
    ],
    [
      "Constitution",
      "3 ~ 10"
    ],
    [
      "Willpower",
      "5 ~ 13"
    ],
    [
      "Attack",
      "5 ~ 13"
    ],
    [
      "Critical Hit",
      "7 ~ 15"
    ],
    [
      "Accuracy",
      "9 ~ 17"
    ],
    [
      "Defense",
      "57 ~ 73"
    ],
    [
      "Evasion",
      "5 ~ 13"
    ],
    [
      "Critical Damage Defense",
      "59 ~ 75"
    ],
    [
      "Back Defense",
      "59 ~ 75"
    ],
    [
      "Front Defense",
      "59 ~ 75"
    ],
    [
      "Critical Hit Resist",
      "10 ~ 19"
    ],
    [
      "Block",
      "5 ~ 13"
    ],
    [
      "MP",
      "22 ~ 32"
    ],
    [
      "HP",
      "44 ~ 58"
    ],
    [
      "Natural MP Regen",
      "5 ~ 13"
    ],
    [
      "Natural HP Regen",
      "10 ~ 19"
    ]
  ],
  "7:rare": [
    [
      "Critical Damage Tolerance",
      "4.4% ~ 5.13%"
    ],
    [
      "Double Chance",
      "0.58% ~ 0.74%"
    ],
    [
      "Endurance",
      "0.88% ~ 1.08%"
    ],
    [
      "Attack increase",
      "0.58% ~ 0.74%"
    ],
    [
      "Weapon Damage Tolerance",
      "3.3% ~ 3.87%"
    ],
    [
      "Status Effect Resist",
      "1.88% ~ 2.23%"
    ],
    [
      "Endurance Penetration",
      "0.66% ~ 0.83%"
    ],
    [
      "Dexterity",
      "7 ~ 15"
    ],
    [
      "Constitution",
      "4 ~ 12"
    ],
    [
      "Willpower",
      "7 ~ 15"
    ],
    [
      "Attack",
      "6 ~ 14"
    ],
    [
      "Critical Hit",
      "9 ~ 17"
    ],
    [
      "Accuracy",
      "12 ~ 21"
    ],
    [
      "Defense",
      "73 ~ 91"
    ],
    [
      "Evasion",
      "7 ~ 15"
    ],
    [
      "Critical Damage Defense",
      "75 ~ 93"
    ],
    [
      "Back Defense",
      "75 ~ 93"
    ],
    [
      "Front Defense",
      "75 ~ 93"
    ],
    [
      "Critical Hit Resist",
      "13 ~ 22"
    ],
    [
      "Block",
      "7 ~ 15"
    ],
    [
      "MP",
      "28 ~ 39"
    ],
    [
      "HP",
      "56 ~ 71"
    ],
    [
      "Natural MP Regen",
      "6 ~ 14"
    ],
    [
      "Natural HP Regen",
      "13 ~ 22"
    ]
  ],
  "7:epic": [
    [
      "Critical Damage Tolerance",
      "5.75% ~ 6.68%"
    ],
    [
      "Double Chance",
      "0.76% ~ 0.94%"
    ],
    [
      "Endurance",
      "1.15% ~ 1.39%"
    ],
    [
      "Attack increase",
      "0.76% ~ 0.94%"
    ],
    [
      "Weapon Damage Tolerance",
      "4.31% ~ 5.03%"
    ],
    [
      "Status Effect Resist",
      "2.46% ~ 2.9%"
    ],
    [
      "Endurance Penetration",
      "0.86% ~ 1.06%"
    ],
    [
      "Dexterity",
      "9 ~ 17"
    ],
    [
      "Constitution",
      "5 ~ 13"
    ],
    [
      "Willpower",
      "9 ~ 17"
    ],
    [
      "Attack",
      "8 ~ 16"
    ],
    [
      "Critical Hit",
      "12 ~ 21"
    ],
    [
      "Accuracy",
      "16 ~ 25"
    ],
    [
      "Defense",
      "95 ~ 116"
    ],
    [
      "Evasion",
      "9 ~ 17"
    ],
    [
      "Critical Damage Defense",
      "98 ~ 120"
    ],
    [
      "Back Defense",
      "98 ~ 120"
    ],
    [
      "Front Defense",
      "98 ~ 120"
    ],
    [
      "Critical Hit Resist",
      "17 ~ 27"
    ],
    [
      "Block",
      "9 ~ 17"
    ],
    [
      "MP",
      "36 ~ 48"
    ],
    [
      "HP",
      "74 ~ 92"
    ],
    [
      "Natural MP Regen",
      "8 ~ 16"
    ],
    [
      "Natural HP Regen",
      "17 ~ 27"
    ]
  ],
  "7:unique": [
    [
      "Critical Damage Tolerance",
      "7.5% ~ 8.7%"
    ],
    [
      "Double Chance",
      "1% ~ 1.22%"
    ],
    [
      "Endurance",
      "1.5% ~ 1.8%"
    ],
    [
      "Attack increase",
      "1% ~ 1.22%"
    ],
    [
      "Weapon Damage Tolerance",
      "5.62% ~ 6.53%"
    ],
    [
      "Status Effect Resist",
      "3.21% ~ 3.76%"
    ],
    [
      "Endurance Penetration",
      "1.12% ~ 1.36%"
    ],
    [
      "Dexterity",
      "12 ~ 21"
    ],
    [
      "Constitution",
      "7 ~ 15"
    ],
    [
      "Willpower",
      "12 ~ 21"
    ],
    [
      "Attack",
      "10 ~ 19"
    ],
    [
      "Critical Hit",
      "16 ~ 25"
    ],
    [
      "Accuracy",
      "21 ~ 31"
    ],
    [
      "Defense",
      "125 ~ 151"
    ],
    [
      "Evasion",
      "12 ~ 21"
    ],
    [
      "Critical Damage Defense",
      "128 ~ 154"
    ],
    [
      "Back Defense",
      "128 ~ 154"
    ],
    [
      "Front Defense",
      "128 ~ 154"
    ],
    [
      "Critical Hit Resist",
      "22 ~ 32"
    ],
    [
      "Block",
      "13 ~ 22"
    ],
    [
      "MP",
      "48 ~ 62"
    ],
    [
      "HP",
      "96 ~ 117"
    ],
    [
      "Natural MP Regen",
      "11 ~ 20"
    ],
    [
      "Natural HP Regen",
      "22 ~ 32"
    ]
  ]
};
const armorPieces = [
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240067","name":"Taulo Greaves","obtain":["Drop: Chaser Taulo (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240068","name":"Aullamu Greaves","obtain":["Drop: Forest Warrior Aullamu (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240069","name":"Layla Greaves","obtain":["Drop: Heretic Layla (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240070","name":"Lawa Greaves","obtain":["Drop: Black Tentacle Lawa (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240071","name":"Demiros Greaves","obtain":["Drop: Centurion Demiros (Lv 45 world boss, Verteron)"]},

  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240058","name":"Aulla Greaves","obtain":["Drop: Scholar Aulla (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240060","name":"Garsan Greaves","obtain":["Drop: Predator Garsan (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240061","name":"Trid Greaves","obtain":["Drop: Deceiver Trid (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240062","name":"Kelpina Greaves","obtain":["Drop: Blue Wave Kelpina (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240063","name":"Nutah Greaves","obtain":["Drop: High Overseer Nutah (Lv 45 world boss, Altgard)"]},

  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240053","name":"Lunatic Greaves","level":"45","required":"45","defense":"475","hp":"201","pool":"2:epicBoss45","sell":"4,345 Gold","upgrade":"At +10: Defense 149, HP 53","binding":"Bind on Pickup","obtain":["Raid reward: Abyssal Forge: Ludra"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240054","name":"Kusan Greaves","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Drop: Kusan the Mad Gladiator (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240055","name":"Garshim Greaves","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Drop: Ritualist Garshim (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240056","name":"Pnyn Greaves","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Drop: Bloodfang Pnyn (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240057","name":"Saursus Greaves","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Drop: Furious Saursus (Lv 45 world boss, Verteron)"]},

  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","binding":"Bind on Pickup","obtain":["Raid reward: Abyssal Forge: Ludra; also listed as a party dungeon reward"],"id":"210240047","name":"Unyielding Greaves","level":"43","required":"45","defense":"339","hp":"144","pool":"2:epic43","sell":"1,202 Gold","upgrade":"At +10: Defense 143, HP 51"},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","binding":"Bind on Pickup","obtain":["Raid reward: Abyssal Forge: Ludra; also listed as a party dungeon reward"],"id":"210240048","name":"Black Claw Greaves","level":"45","required":"45","defense":"396","hp":"168","pool":"2:epic45","sell":"2,065 Gold","upgrade":"At +10: Defense 149, HP 53"},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240034","name":"Avenger Greaves","level":"29","defense":"202","hp":"87","pool":"2:quest29","sell":"250 Gold","upgrade":"At +10: Defense 95, HP 35","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Rescue Operation (Lv 32)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240035","name":"Liberator Greaves","level":"38","defense":"267","hp":"114","pool":"2:quest38","sell":"459 Gold","upgrade":"At +10: Defense 126, HP 45","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Exiled Ritualist (Lv 40)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240038","name":"Order Greaves","level":"38","required":"35","defense":"267","hp":"114","pool":"2:epicCraft33","sell":"611 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Drops from named enemies and world bosses around Verteron; 73 Global source entries"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240039","name":"Discipline Greaves","level":"38","required":"35","defense":"267","hp":"114","pool":"2:epicCraft33","sell":"611 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Drops from named enemies and world bosses around Altgard; 62 Global source entries"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","id":"210240040","name":"Vowed Greaves","level":"38","required":"35","defense":"267","hp":"114","pool":"2:epicCraft33","sell":"611 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Acquisition route not listed in the Global client snapshot"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","binding":"Bind on Pickup","id":"210240043","name":"Divine Canyon Greaves","level":"43","required":"45","defense":"339","hp":"144","pool":"2:epic43","sell":"1,202 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Raid reward: Abyssal Forge: Ludra; also listed as a party dungeon reward"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","binding":"Bind on Pickup","id":"210240044","name":"Corrupted Judicator Greaves","level":"45","required":"45","defense":"396","hp":"168","pool":"2:epic45","sell":"2,065 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Raid reward: Abyssal Forge: Ludra; also listed as a party dungeon reward"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","binding":"Bound","id":"210240030","name":"Drifter Greaves","level":"29","defense":"202","hp":"87","pool":"2:quest29","sell":"250 Gold","upgrade":"At +10: Defense 95, HP 35","fixedImprints":true,"obtain":["Quest reward: Protectors of the Rock Hill (Lv 32)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","binding":"Bound","id":"210240031","name":"Pilgrim Greaves","level":"38","defense":"267","hp":"114","pool":"2:quest38","sell":"459 Gold","upgrade":"At +10: Defense 126, HP 45","fixedImprints":true,"obtain":["Quest reward: Notos Legion Makeover (Lv 41)"]},
  {"id":"210240022","name":"Red Agate Greaves","category":"Pants","grade":"Epic","level":"25","required":"22","equipType":"Pants","defense":"173","hp":"75","pool":"2:epic28","sockets":"3","sell":"254 Gold","enchant":"+10","upgrade":"At +10: Defense 82, HP 30","binding":"Bind on Pickup","obtain":["Party dungeon reward (Global location not specified)"]},
  {"id":"210240023","name":"Faith Greaves","category":"Pants","grade":"Epic","level":"33","required":"30","equipType":"Pants","defense":"231","hp":"99","pool":"2:epic33","sockets":"3","sell":"436 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","binding":"Bind on Pickup","obtain":["Party dungeon reward (Global location not specified)"]},
  {"id":"210240024","name":"Judicator Greaves","category":"Pants","grade":"Epic","level":"38","required":"35","equipType":"Pants","defense":"267","hp":"114","pool":"2:epicCraft33","sockets":"3","sell":"611 Gold","enchant":"+10","upgrade":"At +10: Defense 126, HP 45","binding":"Bind on Pickup","obtain":["Party dungeon reward (Global location not specified)"]},
  {"id":"210240029","name":"Anguish Greaves","category":"Pants","grade":"Epic","level":"40","required":"37","equipType":"Pants","defense":"281","hp":"120","pool":"2:epicCraft40","sockets":"3","sell":"700 Gold","enchant":"+10","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","obtain":["Raid reward: Abyssal Forge: Ludra; also listed as a party dungeon reward"]},
  {"id":"210240042","name":"Division Greaves","category":"Pants","grade":"Epic","level":"40","required":"37","equipType":"Pants","defense":"281","hp":"120","pool":"2:epicCraft40","sockets":"3","sell":"700 Gold","enchant":"+10","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","obtain":["Raid reward: Abyssal Forge: Ludra; also listed as a party dungeon reward"]},
  {"id":"210240013","name":"Artisan's Orichalcum Greaves (Elyos)","category":"Pants","grade":"Epic","level":"40","required":"36","equipType":"Pants","defense":"331","hp":"141","pool":"2:epicCraft40","sockets":"3","sell":"981 Gold","enchant":"+10","upgrade":"At +10: Defense 133, HP 47","faction":"Elyos","crafting":"Tailoring Lv 30 · Expert's Splendent Orichalcum Greaves ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×4, Pure Odyle ×2; 25% combo chance","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"id":"210240014","name":"Expert's Splendent Orichalcum Greaves (Asmodians)","category":"Pants","grade":"Epic","level":"33","required":"26","equipType":"Pants","defense":"245","hp":"105","pool":"2:epicCraft33","sockets":"3","sell":"499 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","faction":"Asmodians","crafting":"Tailoring Lv 15 · Splendent Orichalcum Greaves ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×2; 25% combo chance","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"id":"210240015","name":"Artisan's Orichalcum Greaves (Asmodians)","category":"Pants","grade":"Epic","level":"40","required":"36","equipType":"Pants","defense":"331","hp":"141","pool":"2:epicCraft40","sockets":"3","sell":"981 Gold","enchant":"+10","upgrade":"At +10: Defense 133, HP 47","faction":"Asmodians","crafting":"Tailoring Lv 30 · Expert's Splendent Orichalcum Greaves ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×4, Pure Odyle ×2; 25% combo chance","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"id":"210240010","name":"Whispering Oblivion Greaves","category":"Pants","grade":"Epic","level":"28","required":"25","equipType":"Pants","defense":"195","hp":"84","pool":"2:epic28","sockets":"3","sell":"311 Gold","enchant":"+10","upgrade":"At +10: Defense 92, HP 33","obtain":["No Global acquisition route documented; KR/TW drop data only"]},
  {"id":"210240011","name":"Bloodthirsty Greaves","category":"Pants","grade":"Epic","level":"33","required":"30","equipType":"Pants","defense":"231","hp":"99","pool":"2:epic33","sockets":"3","sell":"436 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["World and named enemy drops in Chaotic Lower Reshanta; 281 source drop entries"]},
  {"id":"210240012","name":"Expert's Splendent Orichalcum Greaves (Elyos)","category":"Pants","grade":"Epic","level":"33","required":"26","equipType":"Pants","defense":"245","hp":"105","pool":"2:epicCraft33","sockets":"3","sell":"499 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","faction":"Elyos","crafting":"Tailoring Lv 15 · Splendent Orichalcum Greaves ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×2; 25% combo chance","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"id":"210240007","name":"Pragmatist Greaves","category":"Pants","grade":"Epic","level":"28","required":"25","equipType":"Pants","defense":"195","hp":"84","pool":"2:epic28","sockets":"3","sell":"311 Gold","enchant":"+10","upgrade":"At +10: Defense 92, HP 33","obtain":["World enemy drops in Altgard; 92 source drop entries"]},
  {"id":"210240008","name":"Destruction Greaves","category":"Pants","grade":"Epic","level":"33","required":"30","equipType":"Pants","defense":"231","hp":"99","pool":"2:epic33","sockets":"3","sell":"436 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["World and named enemy drops in Altgard; 62 source drop entries"]},
  {"id":"210240009","name":"Defender Greaves","category":"Pants","grade":"Epic","level":"23","required":"20","equipType":"Pants","defense":"159","hp":"69","pool":"2:epic23","sockets":"3","sell":"222 Gold","enchant":"+10","upgrade":"At +10: Defense 75, HP 28","obtain":["No acquisition route documented in the Global Launch Scale Test reference"]},
  {"id":"210240003","name":"Temple Guardian Greaves","category":"Pants","grade":"Epic","level":"28","required":"25","equipType":"Pants","defense":"195","hp":"84","pool":"2:epic28","sockets":"3","sell":"311 Gold","enchant":"+10","upgrade":"At +10: Defense 92, HP 33","obtain":["World and named enemy drops in Verteron; 94 source drop entries"]},
  {"id":"210240004","name":"Illusion Greaves","category":"Pants","grade":"Epic","level":"33","required":"30","equipType":"Pants","defense":"231","hp":"99","pool":"2:epic33","sockets":"3","sell":"436 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["World and named enemy drops in Verteron; 73 source drop entries"]},
  {"id":"210240006","name":"Relic Collector Greaves","category":"Pants","grade":"Epic","level":"23","required":"20","equipType":"Pants","defense":"159","hp":"69","pool":"2:epic23","sockets":"3","sell":"222 Gold","enchant":"+10","upgrade":"At +10: Defense 75, HP 28","obtain":["World enemy drops in Altgard; 85 source drop entries"]},
  {"id":"210230065","name":"Argo Greaves","category":"Pants","grade":"Unique","level":"66","required":"45","equipType":"Pants","defense":"468","hp":"198","pool":"2:argo66","sockets":"4","sell":"5,788 Gold","enchant":"+15","upgrade":"At +15: Defense 330, HP 117 · Exceed +1: Defense 33, HP 33, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Argo, the Spirit King or Executor Argo (Lv 65 world bosses) in Chaotic Lower Reshanta","Argo's Merit Chests (Bound)","Dimensional Merit Chests (Bound)"]},
  {"id":"210230072","name":"Kashapa Greaves","category":"Pants","grade":"Unique","level":"46","required":"40","equipType":"Pants","defense":"324","hp":"138","pool":"2:fallen46","sockets":"4","sell":"1,714 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["Soul Ruler Kashapa (Lv 45 world boss); one listed location is Altgard"]},
  {"id":"210230073","name":"High Commander Lagta Greaves","category":"Pants","grade":"Unique","level":"46","required":"40","equipType":"Pants","defense":"324","hp":"138","pool":"2:fallen46","sockets":"4","sell":"1,714 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["High Commander Lagta (Lv 45 world boss) in Verteron or Altgard"]},
  {"id":"210230059","name":"Dartan Greaves","category":"Pants","grade":"Unique","level":"46","required":"40","equipType":"Pants","defense":"324","hp":"138","pool":"2:fallen46","sockets":"4","sell":"1,714 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["Silent Dartan (Lv 45 world boss) in Verteron or Altgard"]},
  {"id":"210230060","name":"Gartua Greaves","category":"Pants","grade":"Unique","level":"70","required":"45","equipType":"Pants","defense":"497","hp":"210","pool":"2:splendent70","sockets":"4","sell":"6,193 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124 · Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","obtain":["Eternal Gartua (Lv 51 world boss) in Verteron","Immortal Gartua (Lv 51 world boss) in Altgard"]},
  {"id":"210230062","name":"Kaira Greaves","category":"Pants","grade":"Unique","level":"56","required":"45","equipType":"Pants","defense":"396","hp":"168","pool":"2:dragon62","sockets":"4","sell":"3,370 Gold","enchant":"+15","upgrade":"At +15: Defense 280, HP 99 · Exceed +1: Defense 28, HP 28, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Watcher Kaira or Executor Kaira (Lv 65 world bosses) in Chaotic Lower Reshanta","Kaira's Merit Chests (Bound)","Dimensional Merit Chests (Bound)"]},
  {"id":"210230052","name":"Vakron Greaves","category":"Pants","grade":"Unique","level":"70","required":"45","equipType":"Pants","defense":"497","hp":"210","pool":"2:white78","sockets":"4","sell":"40,000 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124 · Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","binding":"Bind on Pickup","obtain":["Abyssal Forge: Ludra raid reward","Party Dungeon","Vakron Sky Island: Armor Selection Chest (Bound)"]},
  {"id":"210230053","name":"Nuakum Greaves","category":"Pants","grade":"Unique","level":"86","required":"45","equipType":"Pants","defense":"612","hp":"258","pool":"2:wise94","sockets":"4","sell":"55,000 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152 · Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","binding":"Bind on Pickup","obtain":["Abyssal Forge: Ludra raid reward","Party Dungeon","Ferocious Horn Den: Armor Selection Chest (Bound)"]},
  {"id":"210230058","name":"Abyssal Greaves","category":"Pants","grade":"Unique","level":"86","required":"45","equipType":"Pants","defense":"612","hp":"258","pool":"2:wise94","sockets":"4","sell":"55,000 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152 · Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","binding":"Bind on Pickup","obtain":["Abyssal Forge: Ludra raid reward"]},
  {"id":"210230040","name":"Splendent Wise Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"102","required":"45","equipType":"Pants","defense":"727","hp":"306","pool":"2:dragon102","sockets":"4","selections":"5","sell":"89,697 Gold","enchant":"+15","upgrade":"At +15: Defense 513, HP 180 · Exceed +5: Defense 250, HP 250, Damage Tolerance 2.5%, HP increase 2.5%","faction":"Elyos","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW Tailoring Lv 85 combo proc recipe only","obtain":["Light Armorsmithing Table in Verteron; Global recipe contents not yet documented"]},
  {"id":"210230041","name":"Splendent Ebony Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"102","required":"45","equipType":"Pants","defense":"727","hp":"306","pool":"2:dragon102","sockets":"4","selections":"5","sell":"89,697 Gold","enchant":"+15","upgrade":"At +15: Defense 513, HP 180 · Exceed +5: Defense 250, HP 250, Damage Tolerance 2.5%, HP increase 2.5%","faction":"Asmodians","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW Tailoring Lv 85 combo proc recipe only","obtain":["Dark Armorsmithing Table in Verteron; Global recipe contents not yet documented"]},
  {"id":"210230044","name":"Conquering Greaves","category":"Pants","grade":"Unique","level":"51","required":"45","equipType":"Pants","defense":"360","hp":"153","pool":"2:conquering51","sockets":"4","sell":"2,403 Gold","enchant":"+15","upgrade":"At +15: Defense 254, HP 90","obtain":["No acquisition route documented in the Global Launch Scale Test reference"]},
  {"id":"210230033","name":"Transcendent Greaves","category":"Pants","grade":"Unique","level":"43","required":"37","equipType":"Pants","defense":"303","hp":"129","pool":"2:fallen46","sockets":"4","sell":"1,399 Gold","enchant":"+15","upgrade":"At +15: Defense 214, HP 76","binding":"Bind on Pickup","obtain":["Transcendent Armor Selection Chest (Bound)"]},
  {"id":"210230038","name":"Bakarma Greaves","category":"Pants","grade":"Unique","level":"54","required":"45","equipType":"Pants","defense":"382","hp":"162","pool":"2:dragon62","sockets":"4","sell":"30,000 Gold","enchant":"+15","upgrade":"At +15: Defense 269, HP 96 · Exceed +1: Defense 27, HP 27, Damage Tolerance 0.5%, HP increase 0.5%","binding":"Bind on Pickup","obtain":["Abyssal Forge: Ludra raid reward","Draupnir: Armor Selection Chest (Bound)","Bakarma Armor Selection Chest (Bound)"]},
  {"id":"210230039","name":"Guardian Lord Nahma Greaves","category":"Pants","grade":"Unique","level":"86","required":"45","equipType":"Pants","defense":"612","hp":"258","pool":"2:wise94","sockets":"4","sell":"19,552 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152 · Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":["Guardian Lord Nahma in Chaotic Lower Reshanta","Enraged Guardian Lord Nahma","Nahma's Merit Chests (Bound)"]},
  {"id":"210230027","name":"Guardian Centurion Greaves","category":"Pants","grade":"Unique","equipType":"Pants","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":["No Global acquisition data in the Launch Scale Test reference; KR/TW acquisition only"],"level":"78","required":"45","defense":"555","hp":"234","pool":"2:white78","sell":"40,943 Gold","upgrade":"At +15: Defense 391, HP 138 · Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%"},
  {"id":"210230028","name":"Guardian Tribunus Greaves","category":"Pants","grade":"Unique","equipType":"Pants","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":["No Global acquisition data in the Launch Scale Test reference; KR/TW acquisition only"],"level":"94","required":"45","defense":"670","hp":"282","pool":"2:wise94","sell":"117,150 Gold","upgrade":"At +15: Defense 472, HP 166 · Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"id":"210230030","name":"Archon Decanus Greaves","category":"Pants","grade":"Unique","equipType":"Pants","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":["No Global acquisition data in the Launch Scale Test reference; KR/TW acquisition only"],"level":"62","required":"40","defense":"439","hp":"186","pool":"2:dragon62","sell":"12,615 Gold","upgrade":"At +15: Defense 310, HP 110 · Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%"},
  {"id":"210230031","name":"Archon Centurion Greaves","category":"Pants","grade":"Unique","equipType":"Pants","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":["No Global acquisition data in the Launch Scale Test reference; KR/TW acquisition only"],"level":"78","required":"45","defense":"555","hp":"234","pool":"2:white78","sell":"40,943 Gold","upgrade":"At +15: Defense 391, HP 138 · Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%"},
  {"id":"210230032","name":"Archon Tribunus Greaves","category":"Pants","grade":"Unique","equipType":"Pants","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":["No Global acquisition data in the Launch Scale Test reference; KR/TW acquisition only"],"level":"94","required":"45","defense":"670","hp":"282","pool":"2:wise94","sell":"117,150 Gold","upgrade":"At +15: Defense 472, HP 166 · Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"id":"210230023","name":"Wise Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"94","required":"45","equipType":"Pants","defense":"670","hp":"282","pool":"2:wise94","sockets":"4","selections":"5","sell":"45,620 Gold","enchant":"+15","upgrade":"At +15: Defense 472, HP 166 · Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW Tailoring Lv 85 recipe only","obtain":["No Global acquisition data in the Launch Scale Test reference"],"faction":"Elyos"},
  {"id":"210230024","name":"Ebony Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"94","required":"45","equipType":"Pants","defense":"670","hp":"282","pool":"2:wise94","sockets":"4","selections":"5","sell":"45,620 Gold","enchant":"+15","upgrade":"At +15: Defense 472, HP 166 · Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW Tailoring Lv 85 recipe only","obtain":["No Global acquisition data in the Launch Scale Test reference"],"faction":"Asmodians"},
  {"id":"210230026","name":"Guardian Decanus Greaves","category":"Pants","grade":"Unique","level":"62","required":"40","equipType":"Pants","defense":"439","hp":"186","pool":"2:dragon62","sockets":"4","sell":"12,615 Gold","enchant":"+15","upgrade":"At +15: Defense 310, HP 110 · Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","binding":"Bind on Pickup","obtain":["No Global acquisition data in the Launch Scale Test reference; KR/TW token shop only"]},
  {"id":"210230019","name":"Star Dragon Lord Greaves","category":"Pants","grade":"Unique","required":"45","equipType":"Pants","sockets":"4","selections":"5","enchant":"+15","faction":"Asmodians","level":"62","defense":"439","hp":"186","pool":"2:dragon62","sell":"15,453 Gold","upgrade":"At +15: Defense 310, HP 110 · Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 55 · Artisan's Splendent Orichalcum Greaves ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×11, Wrathful Mind ×5, Radiant Orichalcum Ore ×4, Radiant Odyle ×2","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"id":"210230020","name":"Dark Dragon Lord Greaves","category":"Pants","grade":"Unique","required":"45","equipType":"Pants","sockets":"4","selections":"5","enchant":"+15","faction":"Asmodians","level":"78","defense":"555","hp":"234","pool":"2:white78","sell":"26,551 Gold","upgrade":"At +15: Defense 391, HP 138 · Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW Tailoring Lv 70 recipe only","obtain":["No Global acquisition data in the Launch Scale Test reference"]},
  {"id":"210230021","name":"Splendent Star Dragon Lord Greaves","category":"Pants","grade":"Unique","required":"45","equipType":"Pants","sockets":"4","selections":"5","enchant":"+15","faction":"Asmodians","level":"70","defense":"497","hp":"210","pool":"2:splendent70","sell":"30,384 Gold","upgrade":"At +15: Defense 351, HP 124 · Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Tailoring Lv 55 · 25% upgraded combo from Star Dragon Lord Greaves recipe","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"id":"210230022","name":"Splendent Dark Dragon Lord Greaves","category":"Pants","grade":"Unique","required":"45","equipType":"Pants","sockets":"4","selections":"5","enchant":"+15","faction":"Asmodians","level":"86","defense":"612","hp":"258","pool":"2:splendentwhite86","sell":"52,204 Gold","upgrade":"At +15: Defense 432, HP 152 · Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW 25% combo from Dark Dragon Lord Greaves","obtain":["Dark Armorsmithing Table in Verteron is listed; Global recipe unavailable"]},
  {"id":"210230016","name":"White Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"78","required":"45","equipType":"Pants","defense":"555","hp":"234","pool":"2:white78","sockets":"4","selections":"5","sell":"26,551 Gold","enchant":"+15","upgrade":"At +15: Defense 391, HP 138 · Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","faction":"Elyos","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW Tailoring Lv 70 recipe only","obtain":["No Global acquisition data in the Launch Scale Test reference"]},
  {"id":"210230017","name":"Splendent True Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"70","required":"45","equipType":"Pants","defense":"431","hp":"210","pool":"2:splendent70","sockets":"4","selections":"5","sell":"30,384 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124 · Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","faction":"Elyos","crafting":"Tailoring Lv 55 · 25% upgraded combo from True Dragon Lord Greaves recipe","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"id":"210230018","name":"Splendent White Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"86","required":"45","equipType":"Pants","defense":"612","hp":"258","pool":"2:splendentwhite86","sockets":"4","selections":"5","sell":"52,204 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152 · Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","faction":"Elyos","crafting":"Global recipe not documented in the Launch Scale Test reference; KR/TW 25% combo from White Dragon Lord Greaves","obtain":["Light Armorsmithing Table in Verteron is listed; Global recipe unavailable"]},
  {"id":"210230013","name":"Artisan's Splendent Orichalcum Greaves (Elyos)","category":"Pants","grade":"Unique","level":"44","required":"34","equipType":"Pants","defense":"310","hp":"132","pool":"2:fallen46","sockets":"4","sell":"1,714 Gold","enchant":"+15","upgrade":"At +15: Defense 219, HP 78","faction":"Elyos","crafting":"Tailoring Lv 30 · Expert's Splendent Orichalcum Greaves ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×4, Pure Odyle ×2","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"id":"210230014","name":"Artisan's Splendent Orichalcum Greaves (Asmodians)","category":"Pants","grade":"Unique","level":"44","required":"34","equipType":"Pants","defense":"310","hp":"132","pool":"2:fallen46","sockets":"4","sell":"1,714 Gold","enchant":"+15","upgrade":"At +15: Defense 219, HP 78","faction":"Asmodians","crafting":"Tailoring Lv 30 · Expert's Splendent Orichalcum Greaves ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×4, Pure Odyle ×2","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"id":"210230015","name":"True Dragon Lord Greaves","category":"Pants","grade":"Unique","level":"62","required":"45","equipType":"Pants","defense":"381","hp":"186","pool":"2:dragon62","sockets":"4","selections":"5","sell":"15,453 Gold","enchant":"+15","upgrade":"At +15: Defense 310, HP 110 · Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","faction":"Elyos","crafting":"Tailoring Lv 55 · Artisan's Splendent Orichalcum Greaves ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×11, Wrathful Mind ×5, Radiant Orichalcum Ore ×4, Radiant Odyle ×2","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"id":"210230010","name":"Tranquility Greaves","category":"Pants","grade":"Unique","level":"36","required":"30","equipType":"Pants","defense":"252","hp":"108","pool":"2:unique","sockets":"4","sell":"871 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["No Global acquisition data in the Launch Scale Test reference"]},
  {"id":"210230011","name":"Courage Greaves","category":"Pants","grade":"Unique","level":"41","required":"35","equipType":"Pants","defense":"288","hp":"123","pool":"2:holy41","sockets":"4","sell":"1,222 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Abyss monsters in Chaotic Lower Reshanta, including Abyss Rusty Rotan"]},
  {"id":"210230012","name":"Fallen Ancient God Greaves","category":"Pants","grade":"Unique","level":"46","required":"40","equipType":"Pants","defense":"324","hp":"138","pool":"2:fallen46","sockets":"4","sell":"1,714 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["Named bosses and elite monsters in Chaotic Lower Reshanta, including Argo, the Spirit King"]},
  {"id":"210630002","name":"Holy Spirit Boots","category":"Boots","grade":"Unique","level":"41","required":"35","equipType":"Boots","defense":"230","hp":"82","pool":"6:holy41","sockets":"4","sell":"1,018 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Named world bosses, including Neikel of the East"]},
  {"id":"210630005","name":"Fantasy Boots","category":"Boots","grade":"Unique","level":"36","required":"30","equipType":"Boots","defense":"202","hp":"72","pool":"6:unique","sockets":"4","sell":"726 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210630006","name":"Spectral Boots","category":"Boots","grade":"Unique","level":"41","required":"35","equipType":"Boots","defense":"230","hp":"82","pool":"6:holy41","sockets":"4","sell":"1,018 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210730002","name":"Holy Spirit Cloak","category":"Cape","grade":"Unique","level":"41","required":"35","equipType":"Cape","defense":"230","hp":"82","pool":"7:holy41","sockets":"4","sell":"815 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Named world bosses, including Neikel of the East"]},
  {"id":"210730005","name":"Fantasy Cloak","category":"Cape","grade":"Unique","level":"36","required":"30","equipType":"Cape","defense":"202","hp":"72","pool":"7:unique","sockets":"4","sell":"581 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210730006","name":"Spectral Cloak","category":"Cape","grade":"Unique","level":"41","required":"35","equipType":"Cape","defense":"230","hp":"82","pool":"7:holy41","sockets":"4","sell":"815 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210430002","name":"Holy Spirit Pauldrons","category":"Shoulder","grade":"Unique","level":"41","required":"35","equipType":"Shoulder","defense":"259","hp":"103","pool":"4:holy41","sockets":"4","sell":"1,018 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Named world bosses, including Neikel of the East"]},
  {"id":"210430005","name":"Fantasy Pauldrons","category":"Shoulder","grade":"Unique","level":"36","required":"30","equipType":"Shoulder","defense":"227","hp":"90","pool":"4:unique","sockets":"4","sell":"726 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210430006","name":"Spectral Pauldrons","category":"Shoulder","grade":"Unique","level":"41","required":"35","equipType":"Shoulder","defense":"259","hp":"103","pool":"4:holy41","sockets":"4","sell":"1,018 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210530002","name":"Holy Spirit Gloves","category":"Gloves","grade":"Unique","level":"41","required":"35","equipType":"Gloves","defense":"230","hp":"82","pool":"5:holy41","sockets":"4","sell":"815 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Named world bosses, including Neikel of the East"]},
  {"id":"210530005","name":"Fantasy Gloves","category":"Gloves","grade":"Unique","level":"36","required":"30","equipType":"Gloves","defense":"202","hp":"72","pool":"5:unique","sockets":"4","sell":"581 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210530006","name":"Spectral Gloves","category":"Gloves","grade":"Unique","level":"41","required":"35","equipType":"Gloves","defense":"230","hp":"82","pool":"5:holy41","sockets":"4","sell":"815 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210230002","name":"Holy Spirit Greaves","category":"Pants","grade":"Unique","level":"41","required":"35","equipType":"Pants","defense":"288","hp":"123","pool":"2:holy41","sockets":"4","sell":"1,222 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Named world bosses, including Neikel of the East"]},
  {"id":"210230005","name":"Fantasy Greaves","category":"Pants","grade":"Unique","level":"36","required":"30","equipType":"Pants","defense":"252","hp":"108","pool":"2:unique","sockets":"4","sell":"871 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["Altgard world bosses, including Melted Danar"]},
  {"id":"210230006","name":"Spectral Greaves","category":"Pants","grade":"Unique","level":"41","required":"35","equipType":"Pants","defense":"288","hp":"123","pool":"2:holy41","sockets":"4","sell":"1,222 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Altgard world bosses, including Melted Danar"]},
  {
    "id": "210260017",
    "name": "Forgotten Greaves",
    "category": "Pants",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Pants",
    "defense": "87",
    "hp": "39",
    "pool": "2:common13",
    "sockets": "1",
    "sell": "34 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210260018",
    "name": "Riverside Greaves",
    "category": "Pants",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Pants",
    "defense": "123",
    "hp": "54",
    "pool": "2:common18",
    "sockets": "1",
    "sell": "48 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210260021",
    "name": "Shade Greaves",
    "category": "Pants",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Pants",
    "defense": "87",
    "hp": "39",
    "pool": "2:common13",
    "sockets": "1",
    "sell": "34 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210260022",
    "name": "Phantasm Greaves",
    "category": "Pants",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Pants",
    "defense": "123",
    "hp": "54",
    "pool": "2:common18",
    "sockets": "1",
    "sell": "48 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210250008",
    "name": "Tempest Greaves",
    "category": "Pants",
    "grade": "Rare",
    "level": "15",
    "required": "15",
    "equipType": "Pants",
    "defense": "101",
    "hp": "45",
    "pool": "2:rare",
    "sockets": "2",
    "sell": "79 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 24, HP 9"
  },
  {
    "id": "210240002",
    "name": "Elder Greaves",
    "category": "Pants",
    "grade": "Epic",
    "level": "23",
    "required": "20",
    "equipType": "Pants",
    "defense": "159",
    "hp": "69",
    "pool": "2:epic",
    "sockets": "3",
    "sell": "222 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Defense 75, HP 28"
  },
  {
    "id": "210230001",
    "name": "Wisdom Greaves",
    "category": "Pants",
    "grade": "Unique",
    "level": "36",
    "required": "30",
    "equipType": "Pants",
    "defense": "252",
    "hp": "108",
    "pool": "2:unique",
    "sockets": "4",
    "sell": "871 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Defense 178, HP 64"
  },
  {
    "id": "210460017",
    "name": "Forgotten Pauldrons",
    "category": "Shoulder",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Shoulder",
    "defense": "78",
    "hp": "33",
    "pool": "4:common13",
    "sockets": "1",
    "sell": "29 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210460018",
    "name": "Riverside Pauldrons",
    "category": "Shoulder",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Shoulder",
    "defense": "110",
    "hp": "45",
    "pool": "4:common18",
    "sockets": "1",
    "sell": "40 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210460021",
    "name": "Shade Pauldrons",
    "category": "Shoulder",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Shoulder",
    "defense": "78",
    "hp": "33",
    "pool": "4:common13",
    "sockets": "1",
    "sell": "29 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210460022",
    "name": "Phantasm Pauldrons",
    "category": "Shoulder",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Shoulder",
    "defense": "110",
    "hp": "45",
    "pool": "4:common18",
    "sockets": "1",
    "sell": "40 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210450008",
    "name": "Tempest Pauldrons",
    "category": "Shoulder",
    "grade": "Rare",
    "level": "15",
    "required": "15",
    "equipType": "Shoulder",
    "defense": "91",
    "hp": "38",
    "pool": "4:rare",
    "sockets": "2",
    "sell": "66 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 24, HP 9"
  },
  {
    "id": "210440002",
    "name": "Elder Pauldrons",
    "category": "Shoulder",
    "grade": "Epic",
    "level": "23",
    "required": "20",
    "equipType": "Shoulder",
    "defense": "143",
    "hp": "58",
    "pool": "4:epic",
    "sockets": "3",
    "sell": "185 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Defense 75, HP 28"
  },
  {
    "id": "210430001",
    "name": "Wisdom Pauldrons",
    "category": "Shoulder",
    "grade": "Unique",
    "level": "36",
    "required": "30",
    "equipType": "Shoulder",
    "defense": "227",
    "hp": "90",
    "pool": "4:unique",
    "sockets": "4",
    "sell": "726 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Defense 178, HP 64"
  },
  {
    "id": "210560017",
    "name": "Forgotten Gloves",
    "category": "Gloves",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Gloves",
    "defense": "69",
    "hp": "26",
    "pool": "5:common13",
    "sockets": "1",
    "sell": "23 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210560018",
    "name": "Riverside Gloves",
    "category": "Gloves",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Gloves",
    "defense": "98",
    "hp": "36",
    "pool": "5:common18",
    "sockets": "1",
    "sell": "32 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210560021",
    "name": "Shade Gloves",
    "category": "Gloves",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Gloves",
    "defense": "69",
    "hp": "26",
    "pool": "5:common13",
    "sockets": "1",
    "sell": "23 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210560022",
    "name": "Phantasm Gloves",
    "category": "Gloves",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Gloves",
    "defense": "98",
    "hp": "36",
    "pool": "5:common18",
    "sockets": "1",
    "sell": "32 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210550008",
    "name": "Tempest Gloves",
    "category": "Gloves",
    "grade": "Rare",
    "level": "15",
    "required": "15",
    "equipType": "Gloves",
    "defense": "81",
    "hp": "30",
    "pool": "5:rare",
    "sockets": "2",
    "sell": "53 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 24, HP 9"
  },
  {
    "id": "210540002",
    "name": "Elder Gloves",
    "category": "Gloves",
    "grade": "Epic",
    "level": "23",
    "required": "20",
    "equipType": "Gloves",
    "defense": "127",
    "hp": "46",
    "pool": "5:epic",
    "sockets": "3",
    "sell": "148 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Defense 75, HP 28"
  },
  {
    "id": "210530001",
    "name": "Wisdom Gloves",
    "category": "Gloves",
    "grade": "Unique",
    "level": "36",
    "required": "30",
    "equipType": "Gloves",
    "defense": "202",
    "hp": "72",
    "pool": "5:unique",
    "sockets": "4",
    "sell": "581 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Defense 178, HP 64"
  },
  {
    "id": "210660017",
    "name": "Forgotten Boots",
    "category": "Boots",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Boots",
    "defense": "69",
    "hp": "26",
    "pool": "6:common13",
    "sockets": "1",
    "sell": "29 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210660018",
    "name": "Riverside Boots",
    "category": "Boots",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Boots",
    "defense": "98",
    "hp": "36",
    "pool": "6:common18",
    "sockets": "1",
    "sell": "40 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210660021",
    "name": "Shade Boots",
    "category": "Boots",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Boots",
    "defense": "69",
    "hp": "26",
    "pool": "6:common13",
    "sockets": "1",
    "sell": "29 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210660022",
    "name": "Phantasm Boots",
    "category": "Boots",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Boots",
    "defense": "98",
    "hp": "36",
    "pool": "6:common18",
    "sockets": "1",
    "sell": "40 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210650008",
    "name": "Tempest Boots",
    "category": "Boots",
    "grade": "Rare",
    "level": "15",
    "required": "15",
    "equipType": "Boots",
    "defense": "81",
    "hp": "30",
    "pool": "6:rare",
    "sockets": "2",
    "sell": "66 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 24, HP 9"
  },
  {
    "id": "210640002",
    "name": "Elder Boots",
    "category": "Boots",
    "grade": "Epic",
    "level": "23",
    "required": "20",
    "equipType": "Boots",
    "defense": "127",
    "hp": "46",
    "pool": "6:epic",
    "sockets": "3",
    "sell": "185 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Defense 75, HP 28"
  },
  {
    "id": "210630001",
    "name": "Wisdom Boots",
    "category": "Boots",
    "grade": "Unique",
    "level": "36",
    "required": "30",
    "equipType": "Boots",
    "defense": "202",
    "hp": "72",
    "pool": "6:unique",
    "sockets": "4",
    "sell": "726 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Defense 178, HP 64"
  },
  {
    "id": "210760017",
    "name": "Forgotten Cloak",
    "category": "Cape",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Cape",
    "defense": "69",
    "hp": "26",
    "pool": "7:common13",
    "sockets": "1",
    "sell": "23 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210760018",
    "name": "Riverside Cloak",
    "category": "Cape",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Cape",
    "defense": "98",
    "hp": "36",
    "pool": "7:common18",
    "sockets": "1",
    "sell": "32 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210760021",
    "name": "Shade Cloak",
    "category": "Cape",
    "grade": "Common",
    "level": "13",
    "required": "13",
    "equipType": "Cape",
    "defense": "69",
    "hp": "26",
    "pool": "7:common13",
    "sockets": "1",
    "sell": "23 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 21, HP 8"
  },
  {
    "id": "210760022",
    "name": "Phantasm Cloak",
    "category": "Cape",
    "grade": "Common",
    "level": "18",
    "required": "18",
    "equipType": "Cape",
    "defense": "98",
    "hp": "36",
    "pool": "7:common18",
    "sockets": "1",
    "sell": "32 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 29, HP 11"
  },
  {
    "id": "210750008",
    "name": "Tempest Cloak",
    "category": "Cape",
    "grade": "Rare",
    "level": "15",
    "required": "15",
    "equipType": "Cape",
    "defense": "81",
    "hp": "30",
    "pool": "7:rare",
    "sockets": "2",
    "sell": "53 Gold",
    "enchant": "+5",
    "upgrade": "At +5: Defense 24, HP 9"
  },
  {
    "id": "210740002",
    "name": "Elder Cloak",
    "category": "Cape",
    "grade": "Epic",
    "level": "23",
    "required": "20",
    "equipType": "Cape",
    "defense": "127",
    "hp": "46",
    "pool": "7:epic",
    "sockets": "3",
    "sell": "148 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Defense 75, HP 28"
  },
  {
    "id": "210730001",
    "name": "Wisdom Cloak",
    "category": "Cape",
    "grade": "Unique",
    "level": "36",
    "required": "30",
    "equipType": "Cape",
    "defense": "202",
    "hp": "72",
    "pool": "7:unique",
    "sockets": "4",
    "sell": "581 Gold",
    "enchant": "+15",
    "upgrade": "At +15: Defense 178, HP 64"
  }
];
const pairs = (entries) => entries.map(([label, value]) => ({label, value}));
const GLOBAL_207_SYNC = new Set(["210230015","210230017"]);
const current207Source = {
  name: "gaming.tools AION 2 Global client database",
  region: "GLOBAL",
  clientVersion: "2.0.7.0",
  capturedAt: "2026-10-14",
  official: false,
  status: "GLOBAL_CLIENT_CROSSCHECKED"
};

export default armorPieces.map((item) => ({
  id: item.id,
  name: item.name,
  group: "Armor",
  category: item.category,
  grade: item.grade,
  itemLevel: item.level,
  requiredLevel: item.required,
  equipType: item.equipType,
  itemType: "Armor",
  icon: "/equipment-icons/" + item.id + ".webp",
  stats: pairs([["Defense", item.defense], ["HP", item.hp]]),
  imprints: pairs(imprintPools[item.pool]),
  details: [
    {label: "Binding", value: item.binding || "Bind on Equip"},
    {label: "Manastone sockets", value: item.sockets},
    {label: "Soul imprint selection", value: item.fixedImprints ? "Fixed quest reward stats" : "Choose " + (item.selections || item.sockets) + " sub-stats"},
    ...(item.faction ? [{label: "Faction", value: item.faction}] : []),
    ...(item.crafting ? [{label: "Crafting recipe", value: item.crafting}] : []),
    {label: "Sell price", value: item.sell},
    {label: "Enchantable to", value: item.enchant},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  upgrades: item.upgrade,
  obtain: item.obtain,
  verificationStatus: GLOBAL_207_SYNC.has(item.id) ? "GLOBAL_207_CROSSCHECKED" : "",
  source: GLOBAL_207_SYNC.has(item.id) ? current207Source : {
    name: "AION 2 VISION independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
}));
