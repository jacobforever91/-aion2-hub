const imprintPools = {
  "3:bootsLunatic45": [["Move Speed","6.4% ~ 7.43%"],["Perfect Chance","2.7% ~ 3.18%"],["Regeneration","1.35% ~ 1.62%"],["Defense increase","1.8% ~ 2.14%"],["Perfect Resist","2.25% ~ 2.66%"],["Status Effect Resist","3.85% ~ 4.5%"],["Endurance Penetration","1.35% ~ 1.62%"],["Dexterity","14 ~ 23"],["Constitution","8 ~ 16"],["Willpower","11 ~ 20"],["Attack","12 ~ 21"],["Critical Hit","19 ~ 29"],["Accuracy","25 ~ 36"],["Defense","149 ~ 178"],["Evasion","15 ~ 24"],["Critical Damage Defense","154 ~ 184"],["Back Defense","154 ~ 184"],["Front Defense","154 ~ 184"],["Critical Hit Resist","27 ~ 38"],["Block","15 ~ 24"],["MP","57 ~ 73"],["HP","115 ~ 139"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","27 ~ 38"]],
  "3:bootsPilgrimQuest39": [["Defense","30 ~ 30"],["MP","19 ~ 19"],["Natural MP Regen","7 ~ 7"]],
  "3:bootsLiberatorQuest39": [["Defense","30 ~ 30"],["MP","19 ~ 19"],["Natural MP Regen","7 ~ 7"]],
  "3:boots43": [["Move Speed","5.6% ~ 6.51%"],["Perfect Chance","2.36% ~ 2.78%"],["Regeneration","1.18% ~ 1.43%"],["Defense increase","1.57% ~ 1.88%"],["Perfect Resist","1.97% ~ 2.34%"],["Status Effect Resist","3.37% ~ 3.95%"],["Endurance Penetration","1.18% ~ 1.43%"],["Dexterity","12 ~ 21"],["Constitution","7 ~ 15"],["Willpower","9 ~ 17"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","22 ~ 32"],["Defense","131 ~ 158"],["Evasion","13 ~ 22"],["Critical Damage Defense","134 ~ 161"],["Back Defense","134 ~ 161"],["Front Defense","134 ~ 161"],["Critical Hit Resist","23 ~ 33"],["Block","13 ~ 22"],["MP","50 ~ 65"],["HP","101 ~ 123"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","23 ~ 33"]],
  "3:boots45": [["Move Speed","6% ~ 6.97%"],["Perfect Chance","2.53% ~ 2.98%"],["Regeneration","1.26% ~ 1.52%"],["Defense increase","1.68% ~ 2%"],["Perfect Resist","2.11% ~ 2.5%"],["Status Effect Resist","3.61% ~ 4.22%"],["Endurance Penetration","1.26% ~ 1.52%"],["Dexterity","13 ~ 22"],["Constitution","8 ~ 16"],["Willpower","10 ~ 19"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],["Accuracy","24 ~ 35"],["Defense","140 ~ 168"],["Evasion","14 ~ 23"],["Critical Damage Defense","144 ~ 173"],["Back Defense","144 ~ 173"],["Front Defense","144 ~ 173"],["Critical Hit Resist","25 ~ 36"],["Block","14 ~ 23"],["MP","54 ~ 69"],["HP","108 ~ 131"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","25 ~ 36"]],
  "3:bootsDrifterQuest31": [["Defense","28 ~ 28"],["MP","18 ~ 18"],["Natural MP Regen","7 ~ 7"]],
  "3:boots38": [["Move Speed","5.2% ~ 6.05%"],["Perfect Chance","2.19% ~ 2.59%"],["Regeneration","1.09% ~ 1.32%"],["Defense increase","1.46% ~ 1.75%"],["Perfect Resist","1.83% ~ 2.17%"],["Status Effect Resist","3.13% ~ 3.67%"],["Endurance Penetration","1.09% ~ 1.32%"],["Dexterity","11 ~ 20"],["Constitution","7 ~ 15"],["Willpower","9 ~ 17"],["Attack","10 ~ 19"],["Critical Hit","15 ~ 24"],["Accuracy","21 ~ 31"],["Defense","121 ~ 146"],["Evasion","12 ~ 21"],["Critical Damage Defense","125 ~ 151"],["Back Defense","125 ~ 151"],["Front Defense","125 ~ 151"],["Critical Hit Resist","22 ~ 32"],["Block","12 ~ 21"],["MP","46 ~ 60"],["HP","94 ~ 115"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","22 ~ 32"]],
  "3:bootsArtisan40": [["Move Speed","5.4% ~ 6.28%"],["Perfect Chance","2.27% ~ 2.68%"],["Regeneration","1.14% ~ 1.38%"],["Defense increase","1.51% ~ 1.81%"],["Perfect Resist","1.9% ~ 2.26%"],["Status Effect Resist","3.25% ~ 3.81%"],["Endurance Penetration","1.14% ~ 1.38%"],["Dexterity","12 ~ 21"],["Constitution","7 ~ 15"],["Willpower","9 ~ 17"],["Attack","10 ~ 19"],["Critical Hit","16 ~ 25"],["Accuracy","21 ~ 31"],["Defense","126 ~ 152"],["Evasion","12 ~ 21"],["Critical Damage Defense","130 ~ 157"],["Back Defense","130 ~ 157"],["Front Defense","130 ~ 157"],["Critical Hit Resist","23 ~ 33"],["Block","12 ~ 21"],["MP","48 ~ 62"],["HP","97 ~ 119"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","23 ~ 33"]],
  "3:bootsExpert33": [["Move Speed","5.2% ~ 6.05%"],["Perfect Chance","2.19% ~ 2.59%"],["Regeneration","1.09% ~ 1.32%"],["Defense increase","1.46% ~ 1.75%"],["Perfect Resist","1.83% ~ 2.17%"],["Status Effect Resist","3.13% ~ 3.67%"],["Endurance Penetration","1.09% ~ 1.32%"],["Dexterity","11 ~ 20"],["Constitution","7 ~ 15"],["Willpower","9 ~ 17"],["Attack","10 ~ 19"],["Critical Hit","15 ~ 24"],["Accuracy","21 ~ 31"],["Defense","121 ~ 146"],["Evasion","12 ~ 21"],["Critical Damage Defense","125 ~ 151"],["Back Defense","125 ~ 151"],["Front Defense","125 ~ 151"],["Critical Hit Resist","22 ~ 32"],["Block","12 ~ 21"],["MP","46 ~ 60"],["HP","94 ~ 115"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","22 ~ 32"]],
  "3:boots23": [["Move Speed","4.6% ~ 5.36%"],["Perfect Chance","1.94% ~ 2.3%"],["Regeneration","0.97% ~ 1.19%"],["Defense increase","1.29% ~ 1.55%"],["Perfect Resist","1.61% ~ 1.92%"],["Status Effect Resist","2.77% ~ 3.26%"],["Endurance Penetration","0.97% ~ 1.19%"],["Dexterity","10 ~ 19"],["Constitution","6 ~ 14"],["Willpower","8 ~ 16"],["Attack","9 ~ 17"],["Critical Hit","13 ~ 22"],["Accuracy","18 ~ 28"],["Defense","107 ~ 130"],["Evasion","10 ~ 19"],["Critical Damage Defense","110 ~ 134"],["Back Defense","110 ~ 134"],["Front Defense","110 ~ 134"],["Critical Hit Resist","19 ~ 29"],["Block","10 ~ 19"],["MP","41 ~ 54"],["HP","83 ~ 102"],["Natural MP Regen","9 ~ 17"],["Natural HP Regen","19 ~ 29"]],
  "3:boots28": [["Move Speed","4.8% ~ 5.59%"],["Perfect Chance","2.02% ~ 2.39%"],["Regeneration","1.01% ~ 1.23%"],["Defense increase","1.35% ~ 1.62%"],["Perfect Resist","1.69% ~ 2.01%"],["Status Effect Resist","2.89% ~ 3.39%"],["Endurance Penetration","1.01% ~ 1.23%"],["Dexterity","10 ~ 19"],["Constitution","6 ~ 14"],["Willpower","8 ~ 16"],["Attack","9 ~ 17"],["Critical Hit","14 ~ 23"],["Accuracy","19 ~ 29"],["Defense","112 ~ 136"],["Evasion","11 ~ 20"],["Critical Damage Defense","115 ~ 139"],["Back Defense","115 ~ 139"],["Front Defense","115 ~ 139"],["Critical Hit Resist","20 ~ 30"],["Block","11 ~ 20"],["MP","43 ~ 56"],["HP","86 ~ 106"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","20 ~ 30"]],
  "3:boots33": [["Move Speed","5% ~ 5.82%"],["Perfect Chance","2.1% ~ 2.49%"],["Regeneration","1.05% ~ 1.28%"],["Defense increase","1.4% ~ 1.68%"],["Perfect Resist","1.76% ~ 2.09%"],["Status Effect Resist","3.01% ~ 3.53%"],["Endurance Penetration","1.05% ~ 1.28%"],["Dexterity","11 ~ 20"],["Constitution","6 ~ 14"],["Willpower","8 ~ 16"],["Attack","10 ~ 19"],["Critical Hit","15 ~ 24"],["Accuracy","20 ~ 30"],["Defense","117 ~ 142"],["Evasion","11 ~ 20"],["Critical Damage Defense","120 ~ 145"],["Back Defense","120 ~ 145"],["Front Defense","120 ~ 145"],["Critical Hit Resist","21 ~ 31"],["Block","11 ~ 20"],["MP","45 ~ 59"],["HP","90 ~ 111"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","21 ~ 31"]],
  "6:dragon66": [["Move Speed","7.2% ~ 8.35%"],["Perfect Chance","3.03% ~ 3.55%"],["Regeneration","1.51% ~ 1.81%"],["Defense increase","2.02% ~ 2.39%"],["Perfect Resist","2.53% ~ 2.98%"],["Status Effect Resist","4.34% ~ 5.06%"],["Endurance Penetration","1.51% ~ 1.81%"],["Dexterity","16 ~ 25"],["Constitution","9 ~ 17"],["Willpower","12 ~ 21"],["Attack","14 ~ 23"],["Critical Hit","21 ~ 31"],["Accuracy","29 ~ 40"],["Defense","168 ~ 200"],["Evasion","16 ~ 25"],["Critical Damage Defense","173 ~ 206"],["Back Defense","173 ~ 206"],["Front Defense","173 ~ 206"],["Critical Hit Resist","30 ~ 42"],["Block","17 ~ 27"],["MP","64 ~ 81"],["HP","130 ~ 157"],["Natural MP Regen","15 ~ 24"],["Natural HP Regen","30 ~ 42"]],
  "6:unique51": [["Move Speed","6.72% ~ 7.8%"],["Perfect Chance","2.83% ~ 3.32%"],["Regeneration","1.41% ~ 1.69%"],["Defense increase","1.89% ~ 2.24%"],["Perfect Resist","2.36% ~ 2.78%"],["Status Effect Resist","4.05% ~ 4.73%"],["Endurance Penetration","1.41% ~ 1.69%"],["Dexterity","15 ~ 24"],["Constitution","9 ~ 17"],["Willpower","11 ~ 20"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","27 ~ 38"],["Defense","157 ~ 188"],["Evasion","15 ~ 24"],["Critical Damage Defense","161 ~ 192"],["Back Defense","161 ~ 192"],["Front Defense","161 ~ 192"],["Critical Hit Resist","28 ~ 39"],["Block","16 ~ 25"],["MP","60 ~ 76"],["HP","121 ~ 146"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"]],
  "6:dragon102": [["Move Speed","8.88% ~ 10.28%"],["Perfect Chance","3.74% ~ 4.37%"],["Regeneration","1.87% ~ 2.22%"],["Defense increase","2.49% ~ 2.93%"],["Perfect Resist","3.12% ~ 3.66%"],["Status Effect Resist","5.35% ~ 6.22%"],["Endurance Penetration","1.87% ~ 2.22%"],["Dexterity","19 ~ 29"],["Constitution","12 ~ 21"],["Willpower","15 ~ 24"],["Attack","17 ~ 27"],["Critical Hit","26 ~ 37"],["Accuracy","35 ~ 47"],["Defense","208 ~ 246"],["Evasion","20 ~ 30"],["Critical Damage Defense","213 ~ 252"],["Back Defense","213 ~ 252"],["Front Defense","213 ~ 252"],["Critical Hit Resist","37 ~ 50"],["Block","21 ~ 31"],["MP","79 ~ 98"],["HP","160 ~ 191"],["Natural MP Regen","19 ~ 29"],["Natural HP Regen","37 ~ 50"]],
  "6:dragon94": [["Move Speed","8.4% ~ 9.73%"],["Perfect Chance","3.54% ~ 4.14%"],["Regeneration","1.77% ~ 2.11%"],["Defense increase","2.36% ~ 2.78%"],["Perfect Resist","2.95% ~ 3.46%"],["Status Effect Resist","5.06% ~ 5.89%"],["Endurance Penetration","1.77% ~ 2.11%"],["Dexterity","18 ~ 28"],["Constitution","11 ~ 20"],["Willpower","14 ~ 23"],["Attack","16 ~ 25"],["Critical Hit","25 ~ 36"],["Accuracy","33 ~ 45"],["Defense","196 ~ 232"],["Evasion","19 ~ 29"],["Critical Damage Defense","202 ~ 239"],["Back Defense","202 ~ 239"],["Front Defense","202 ~ 239"],["Critical Hit Resist","35 ~ 47"],["Block","20 ~ 30"],["MP","75 ~ 93"],["HP","151 ~ 181"],["Natural MP Regen","18 ~ 28"],["Natural HP Regen","35 ~ 47"]],
  "6:dragon70": [["Move Speed","7.44% ~ 8.63%"],["Perfect Chance","3.13% ~ 3.67%"],["Regeneration","1.56% ~ 1.86%"],["Defense increase","2.09% ~ 2.47%"],["Perfect Resist","2.61% ~ 3.07%"],["Status Effect Resist","4.48% ~ 5.22%"],["Endurance Penetration","1.56% ~ 1.86%"],["Dexterity","16 ~ 25"],["Constitution","10 ~ 19"],["Willpower","13 ~ 22"],["Attack","14 ~ 23"],["Critical Hit","22 ~ 32"],["Accuracy","29 ~ 40"],["Defense","174 ~ 207"],["Evasion","17 ~ 27"],["Critical Damage Defense","179 ~ 213"],["Back Defense","179 ~ 213"],["Front Defense","179 ~ 213"],["Critical Hit Resist","31 ~ 43"],["Block","18 ~ 28"],["MP","66 ~ 83"],["HP","134 ~ 161"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","31 ~ 43"]],
  "6:dragon86": [["Move Speed","8.16% ~ 9.45%"],["Perfect Chance","3.44% ~ 4.03%"],["Regeneration","1.72% ~ 2.05%"],["Defense increase","2.29% ~ 2.7%"],["Perfect Resist","2.86% ~ 3.36%"],["Status Effect Resist","4.91% ~ 5.72%"],["Endurance Penetration","1.72% ~ 2.05%"],["Dexterity","18 ~ 28"],["Constitution","11 ~ 20"],["Willpower","14 ~ 23"],["Attack","16 ~ 25"],["Critical Hit","24 ~ 35"],["Accuracy","32 ~ 44"],["Defense","191 ~ 227"],["Evasion","19 ~ 29"],["Critical Damage Defense","196 ~ 232"],["Back Defense","196 ~ 232"],["Front Defense","196 ~ 232"],["Critical Hit Resist","34 ~ 46"],["Block","19 ~ 29"],["MP","73 ~ 91"],["HP","147 ~ 176"],["Natural MP Regen","17 ~ 27"],["Natural HP Regen","34 ~ 46"]],
  "6:dragon62": [["Move Speed","6.96% ~ 8.07%"],["Perfect Chance","2.93% ~ 3.44%"],["Regeneration","1.46% ~ 1.75%"],["Defense increase","1.95% ~ 2.31%"],["Perfect Resist","2.44% ~ 2.88%"],["Status Effect Resist","4.19% ~ 4.89%"],["Endurance Penetration","1.46% ~ 1.75%"],["Dexterity","15 ~ 24"],["Constitution","9 ~ 17"],["Willpower","12 ~ 21"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","28 ~ 39"],["Defense","163 ~ 194"],["Evasion","16 ~ 25"],["Critical Damage Defense","167 ~ 199"],["Back Defense","167 ~ 199"],["Front Defense","167 ~ 199"],["Critical Hit Resist","29 ~ 40"],["Block","16 ~ 25"],["MP","62 ~ 78"],["HP","125 ~ 151"],["Natural MP Regen","15 ~ 24"],["Natural HP Regen","29 ~ 40"]],
  "6:dragon78": [["Move Speed","7.68% ~ 8.9%"],["Perfect Chance","3.24% ~ 3.8%"],["Regeneration","1.62% ~ 1.93%"],["Defense increase","2.16% ~ 2.55%"],["Perfect Resist","2.7% ~ 3.18%"],["Status Effect Resist","4.62% ~ 5.38%"],["Endurance Penetration","1.62% ~ 1.93%"],["Dexterity","17 ~ 27"],["Constitution","10 ~ 19"],["Willpower","13 ~ 22"],["Attack","15 ~ 24"],["Critical Hit","23 ~ 33"],["Accuracy","30 ~ 42"],["Defense","180 ~ 214"],["Evasion","18 ~ 28"],["Critical Damage Defense","185 ~ 220"],["Back Defense","185 ~ 220"],["Front Defense","185 ~ 220"],["Critical Hit Resist","32 ~ 44"],["Block","18 ~ 28"],["MP","69 ~ 86"],["HP","138 ~ 166"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","32 ~ 44"]],
  "6:unique46": [["Move Speed","6.48% ~ 7.52%"],["Perfect Chance","2.73% ~ 3.21%"],["Regeneration","1.36% ~ 1.63%"],["Defense increase","1.82% ~ 2.16%"],["Perfect Resist","2.27% ~ 2.68%"],["Status Effect Resist","3.9% ~ 4.56%"],["Endurance Penetration","1.36% ~ 1.63%"],["Dexterity","14 ~ 23"],["Constitution","8 ~ 16"],["Willpower","11 ~ 20"],["Attack","12 ~ 21"],["Critical Hit","19 ~ 29"],["Accuracy","26 ~ 37"],["Defense","151 ~ 181"],["Evasion","15 ~ 24"],["Critical Damage Defense","156 ~ 186"],["Back Defense","156 ~ 186"],["Front Defense","156 ~ 186"],["Critical Hit Resist","27 ~ 38"],["Block","15 ~ 24"],["MP","58 ~ 74"],["HP","117 ~ 142"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","27 ~ 38"]],
  "4:unique66": [["Critical Damage Boost","9% ~ 10.42%"],["Regeneration","1.35% ~ 1.62%"],["Double Chance","1.2% ~ 1.45%"],["Defense increase","1.8% ~ 2.14%"],["Endurance Penetration","1.35% ~ 1.62%"],["Status Effect Resist","3.85% ~ 4.5%"],["Perfect Resist","2.25% ~ 2.66%"],["Dexterity","12 ~ 21"],["Constitution","8 ~ 16"],["Willpower","16 ~ 25"],["Attack","12 ~ 21"],["Critical Hit","19 ~ 29"],["Accuracy","25 ~ 36"],["Defense","150 ~ 180"],["Evasion","15 ~ 24"],["Critical Damage Defense","154 ~ 184"],["Back Defense","154 ~ 184"],["Front Defense","154 ~ 184"],["Critical Hit Resist","27 ~ 38"],["Block","15 ~ 24"],["MP","57 ~ 73"],["HP","115 ~ 139"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","27 ~ 38"]],
  "4:unique86": [["Critical Damage Boost","10.5% ~ 12.15%"],["Regeneration","1.57% ~ 1.88%"],["Double Chance","1.4% ~ 1.68%"],["Defense increase","2.1% ~ 2.49%"],["Endurance Penetration","1.57% ~ 1.88%"],["Status Effect Resist","4.5% ~ 5.25%"],["Perfect Resist","2.62% ~ 3.08%"],["Dexterity","14 ~ 23"],["Constitution","9 ~ 17"],["Willpower","18 ~ 28"],["Attack","14 ~ 23"],["Critical Hit","22 ~ 32"],["Accuracy","30 ~ 42"],["Defense","175 ~ 208"],["Evasion","17 ~ 27"],["Critical Damage Defense","179 ~ 213"],["Back Defense","179 ~ 213"],["Front Defense","179 ~ 213"],["Critical Hit Resist","31 ~ 43"],["Block","18 ~ 28"],["MP","67 ~ 84"],["HP","135 ~ 162"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","31 ~ 43"]],
  "4:unique51": [["Critical Damage Boost","8.4% ~ 9.73%"],["Regeneration","1.26% ~ 1.52%"],["Double Chance","1.12% ~ 1.36%"],["Defense increase","1.68% ~ 2%"],["Endurance Penetration","1.26% ~ 1.52%"],["Status Effect Resist","3.6% ~ 4.21%"],["Perfect Resist","2.1% ~ 2.49%"],["Dexterity","11 ~ 20"],["Constitution","7 ~ 15"],["Willpower","15 ~ 24"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","24 ~ 35"],["Defense","140 ~ 168"],["Evasion","14 ~ 23"],["Critical Damage Defense","143 ~ 171"],["Back Defense","143 ~ 171"],["Front Defense","143 ~ 171"],["Critical Hit Resist","25 ~ 36"],["Block","14 ~ 23"],["MP","53 ~ 68"],["HP","108 ~ 131"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","25 ~ 36"]],
  "4:dragon62": [["Critical Damage Boost","8.7% ~ 10.08%"],["Regeneration","1.3% ~ 1.57%"],["Double Chance","1.16% ~ 1.4%"],["Defense increase","1.74% ~ 2.07%"],["Endurance Penetration","1.3% ~ 1.57%"],["Status Effect Resist","3.72% ~ 4.35%"],["Perfect Resist","2.17% ~ 2.57%"],["Dexterity","12 ~ 21"],["Constitution","7 ~ 15"],["Willpower","15 ~ 24"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],["Accuracy","24 ~ 35"],["Defense","145 ~ 174"],["Evasion","14 ~ 23"],["Critical Damage Defense","149 ~ 178"],["Back Defense","149 ~ 178"],["Front Defense","149 ~ 178"],["Critical Hit Resist","26 ~ 37"],["Block","15 ~ 24"],["MP","55 ~ 70"],["HP","111 ~ 135"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","26 ~ 37"]],
  "4:dragon70": [["Critical Damage Boost","9.3% ~ 10.77%"],["Regeneration","1.39% ~ 1.67%"],["Double Chance","1.24% ~ 1.5%"],["Defense increase","1.86% ~ 2.21%"],["Endurance Penetration","1.39% ~ 1.67%"],["Status Effect Resist","3.98% ~ 4.65%"],["Perfect Resist","2.32% ~ 2.74%"],["Dexterity","13 ~ 22"],["Constitution","8 ~ 16"],["Willpower","16 ~ 25"],["Attack","13 ~ 22"],["Critical Hit","19 ~ 29"],["Accuracy","26 ~ 37"],["Defense","155 ~ 185"],["Evasion","15 ~ 24"],["Critical Damage Defense","159 ~ 190"],["Back Defense","159 ~ 190"],["Front Defense","159 ~ 190"],["Critical Hit Resist","27 ~ 38"],["Block","16 ~ 25"],["MP","59 ~ 75"],["HP","119 ~ 144"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","27 ~ 38"]],
  "4:unique46": [["Critical Damage Boost","8.1% ~ 9.39%"],["Regeneration","1.21% ~ 1.46%"],["Double Chance","1.08% ~ 1.31%"],["Defense increase","1.62% ~ 1.93%"],["Endurance Penetration","1.21% ~ 1.46%"],["Status Effect Resist","3.47% ~ 4.06%"],["Perfect Resist","2.02% ~ 2.39%"],["Dexterity","11 ~ 20"],["Constitution","7 ~ 15"],["Willpower","14 ~ 23"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","23 ~ 33"],["Defense","135 ~ 162"],["Evasion","13 ~ 22"],["Critical Damage Defense","138 ~ 166"],["Back Defense","138 ~ 166"],["Front Defense","138 ~ 166"],["Critical Hit Resist","24 ~ 35"],["Block","14 ~ 23"],["MP","51 ~ 66"],["HP","104 ~ 127"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","24 ~ 35"]],
  "2:rareHelm30": [["Incoming Heal","7.5% ~ 8.7%"],["Double Chance","0.83% ~ 1.02%"],["Endurance","1.25% ~ 1.51%"],["Attack increase","0.83% ~ 1.02%"],["Perfect Resist","1.56% ~ 1.86%"],["Status Effect Resist","2.68% ~ 3.15%"],["Weapon Damage Tolerance","3% ~ 3.52%"],["Dexterity","5 ~ 13"],["Constitution","8 ~ 16"],["Willpower","5 ~ 13"],["Attack","8 ~ 16"],["Critical Hit","13 ~ 22"],["Accuracy","18 ~ 28"],["Defense","104 ~ 127"],["Evasion","10 ~ 19"],["Critical Damage Defense","106 ~ 129"],["Back Defense","106 ~ 129"],["Front Defense","106 ~ 129"],["Critical Hit Resist","18 ~ 28"],["Block","10 ~ 19"],["MP","40 ~ 53"],["HP","80 ~ 99"],["Natural MP Regen","9 ~ 17"],["Natural HP Regen","18 ~ 28"]],
  "2:rareHelm35": [["Incoming Heal","7.8% ~ 9.04%"],["Double Chance","0.86% ~ 1.06%"],["Endurance","1.3% ~ 1.57%"],["Attack increase","0.86% ~ 1.06%"],["Perfect Resist","1.62% ~ 1.93%"],["Status Effect Resist","2.78% ~ 3.27%"],["Weapon Damage Tolerance","3.12% ~ 3.66%"],["Dexterity","5 ~ 13"],["Constitution","8 ~ 16"],["Willpower","5 ~ 13"],["Attack","9 ~ 17"],["Critical Hit","13 ~ 22"],["Accuracy","18 ~ 28"],["Defense","108 ~ 131"],["Evasion","11 ~ 20"],["Critical Damage Defense","111 ~ 135"],["Back Defense","111 ~ 135"],["Front Defense","111 ~ 135"],["Critical Hit Resist","19 ~ 29"],["Block","11 ~ 20"],["MP","41 ~ 54"],["HP","83 ~ 102"],["Natural MP Regen","9 ~ 17"],["Natural HP Regen","19 ~ 29"]],
  "2:windChaserQuest": [["Defense","27 ~ 27"],["Natural MP Regen","7 ~ 7"]],
  "2:rareHelm15": [["Incoming Heal","6.6% ~ 7.66%"],["Double Chance","0.73% ~ 0.91%"],["Endurance","1.1% ~ 1.34%"],["Attack increase","0.73% ~ 0.91%"],["Perfect Resist","1.37% ~ 1.65%"],["Status Effect Resist","2.35% ~ 2.77%"],["Weapon Damage Tolerance","2.64% ~ 3.11%"],["Dexterity","4 ~ 12"],["Constitution","7 ~ 15"],["Willpower","4 ~ 12"],["Attack","7 ~ 15"],["Critical Hit","11 ~ 20"],["Accuracy","15 ~ 24"],["Defense","91 ~ 112"],["Evasion","9 ~ 17"],["Critical Damage Defense","94 ~ 115"],["Back Defense","94 ~ 115"],["Front Defense","94 ~ 115"],["Critical Hit Resist","16 ~ 25"],["Block","9 ~ 17"],["MP","35 ~ 47"],["HP","70 ~ 88"],["Natural MP Regen","8 ~ 16"],["Natural HP Regen","16 ~ 25"]],
  "2:rareHelm20": [["Incoming Heal","6.9% ~ 8.01%"],["Double Chance","0.76% ~ 0.94%"],["Endurance","1.15% ~ 1.39%"],["Attack increase","0.76% ~ 0.94%"],["Perfect Resist","1.43% ~ 1.71%"],["Status Effect Resist","2.46% ~ 2.9%"],["Weapon Damage Tolerance","2.76% ~ 3.24%"],["Dexterity","4 ~ 12"],["Constitution","7 ~ 15"],["Willpower","4 ~ 12"],["Attack","8 ~ 16"],["Critical Hit","12 ~ 21"],["Accuracy","16 ~ 25"],["Defense","96 ~ 117"],["Evasion","9 ~ 17"],["Critical Damage Defense","98 ~ 120"],["Back Defense","98 ~ 120"],["Front Defense","98 ~ 120"],["Critical Hit Resist","17 ~ 27"],["Block","9 ~ 17"],["MP","36 ~ 48"],["HP","74 ~ 92"],["Natural MP Regen","8 ~ 16"],["Natural HP Regen","17 ~ 27"]],
  "2:rareHelm25": [["Incoming Heal","7.2% ~ 8.35%"],["Double Chance","0.79% ~ 0.98%"],["Endurance","1.2% ~ 1.45%"],["Attack increase","0.79% ~ 0.98%"],["Perfect Resist","1.5% ~ 1.8%"],["Status Effect Resist","2.57% ~ 3.03%"],["Weapon Damage Tolerance","2.88% ~ 3.38%"],["Dexterity","4 ~ 12"],["Constitution","7 ~ 15"],["Willpower","4 ~ 12"],["Attack","8 ~ 16"],["Critical Hit","12 ~ 21"],["Accuracy","17 ~ 27"],["Defense","100 ~ 122"],["Evasion","10 ~ 19"],["Critical Damage Defense","102 ~ 124"],["Back Defense","102 ~ 124"],["Front Defense","102 ~ 124"],["Critical Hit Resist","18 ~ 28"],["Block","10 ~ 19"],["MP","38 ~ 51"],["HP","77 ~ 96"],["Natural MP Regen","9 ~ 17"],["Natural HP Regen","18 ~ 28"]],
  "3:epicBoss45": [["Incoming Heal","12% ~ 13.87%"],["Double Chance","1.33% ~ 1.6%"],["Endurance","2% ~ 2.37%"],["Attack increase","1.33% ~ 1.6%"],["Perfect Resist","2.5% ~ 2.95%"],["Status Effect Resist","4.28% ~ 4.99%"],["Weapon Damage Tolerance","4.8% ~ 5.59%"],["Dexterity","8 ~ 16"],["Constitution","12 ~ 21"],["Willpower","8 ~ 16"],["Attack","14 ~ 23"],["Critical Hit","21 ~ 31"],["Accuracy","28 ~ 39"],["Defense","166 ~ 198"],["Evasion","16 ~ 25"],["Critical Damage Defense","171 ~ 204"],["Back Defense","171 ~ 204"],["Front Defense","171 ~ 204"],["Critical Hit Resist","30 ~ 42"],["Block","16 ~ 25"],["MP","64 ~ 81"],["HP","128 ~ 154"],["Natural MP Regen","15 ~ 24"],["Natural HP Regen","30 ~ 42"]],
  "3:epic43": [["Incoming Heal","10.5% ~ 12.15%"],["Double Chance","1.16% ~ 1.4%"],["Endurance","1.75% ~ 2.08%"],["Attack increase","1.16% ~ 1.4%"],["Perfect Resist","2.19% ~ 2.59%"],["Status Effect Resist","3.75% ~ 4.38%"],["Weapon Damage Tolerance","4.2% ~ 4.9%"],["Dexterity","7 ~ 15"],["Constitution","11 ~ 20"],["Willpower","7 ~ 15"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],["Accuracy","25 ~ 36"],["Defense","145 ~ 174"],["Evasion","14 ~ 23"],["Critical Damage Defense","149 ~ 178"],["Back Defense","149 ~ 178"],["Front Defense","149 ~ 178"],["Critical Hit Resist","26 ~ 37"],["Block","14 ~ 23"],["MP","56 ~ 71"],["HP","112 ~ 136"],["Natural MP Regen","13 ~ 22"],["Natural HP Regen","26 ~ 37"]],
  "3:epic45": [["Incoming Heal","11.25% ~ 13.01%"],["Double Chance","1.25% ~ 1.51%"],["Endurance","1.87% ~ 2.22%"],["Attack increase","1.25% ~ 1.51%"],["Perfect Resist","2.34% ~ 2.76%"],["Status Effect Resist","4.02% ~ 4.69%"],["Weapon Damage Tolerance","4.5% ~ 5.25%"],["Dexterity","7 ~ 15"],["Constitution","12 ~ 21"],["Willpower","7 ~ 15"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","27 ~ 38"],["Defense","156 ~ 186"],["Evasion","15 ~ 24"],["Critical Damage Defense","160 ~ 191"],["Back Defense","160 ~ 191"],["Front Defense","160 ~ 191"],["Critical Hit Resist","28 ~ 39"],["Block","15 ~ 24"],["MP","60 ~ 76"],["HP","120 ~ 145"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"]],
  "3:drifterQuest": [["Defense","32 ~ 32"],["MP","20 ~ 20"],["Natural MP Regen","7 ~ 7"]],
  "3:pilgrimQuest": [["Defense","34 ~ 34"],["MP","22 ~ 22"],["Natural MP Regen","8 ~ 8"]],
  "3:epicCraft40": [["Incoming Heal","10.12% ~ 11.71%"],["Double Chance","1.12% ~ 1.36%"],["Endurance","1.68% ~ 2%"],["Attack increase","1.12% ~ 1.36%"],["Perfect Resist","2.11% ~ 2.5%"],["Status Effect Resist","3.61% ~ 4.22%"],["Weapon Damage Tolerance","4.05% ~ 4.73%"],["Dexterity","6 ~ 14"],["Constitution","10 ~ 19"],["Willpower","6 ~ 14"],["Attack","12 ~ 21"],["Critical Hit","18 ~ 28"],["Accuracy","24 ~ 35"],["Defense","140 ~ 168"],["Evasion","14 ~ 23"],["Critical Damage Defense","144 ~ 173"],["Back Defense","144 ~ 173"],["Front Defense","144 ~ 173"],["Critical Hit Resist","25 ~ 36"],["Block","14 ~ 23"],["MP","54 ~ 69"],["HP","108 ~ 131"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","25 ~ 36"]],
  "3:epicCraft33": [["Incoming Heal","9.75% ~ 11.28%"],["Double Chance","1.08% ~ 1.31%"],["Endurance","1.62% ~ 1.93%"],["Attack increase","1.08% ~ 1.31%"],["Perfect Resist","2.03% ~ 2.4%"],["Status Effect Resist","3.48% ~ 4.07%"],["Weapon Damage Tolerance","3.9% ~ 4.56%"],["Dexterity","6 ~ 14"],["Constitution","10 ~ 19"],["Willpower","6 ~ 14"],["Attack","11 ~ 20"],["Critical Hit","17 ~ 27"],["Accuracy","23 ~ 33"],["Defense","135 ~ 162"],["Evasion","13 ~ 22"],["Critical Damage Defense","139 ~ 167"],["Back Defense","139 ~ 167"],["Front Defense","139 ~ 167"],["Critical Hit Resist","24 ~ 35"],["Block","13 ~ 22"],["MP","52 ~ 67"],["HP","104 ~ 127"],["Natural MP Regen","12 ~ 21"],["Natural HP Regen","24 ~ 35"]],
  "3:epic28": [["Incoming Heal","9% ~ 10.42%"],["Double Chance","1% ~ 1.22%"],["Endurance","1.5% ~ 1.8%"],["Attack increase","1% ~ 1.22%"],["Perfect Resist","1.87% ~ 2.22%"],["Status Effect Resist","3.21% ~ 3.76%"],["Weapon Damage Tolerance","3.6% ~ 4.21%"],["Dexterity","6 ~ 14"],["Constitution","9 ~ 17"],["Willpower","6 ~ 14"],["Attack","10 ~ 19"],["Critical Hit","16 ~ 25"],["Accuracy","21 ~ 31"],["Defense","124 ~ 150"],["Evasion","12 ~ 21"],["Critical Damage Defense","128 ~ 154"],["Back Defense","128 ~ 154"],["Front Defense","128 ~ 154"],["Critical Hit Resist","22 ~ 32"],["Block","12 ~ 21"],["MP","48 ~ 62"],["HP","96 ~ 117"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","22 ~ 32"]],
  "3:epic33": [["Incoming Heal","9.37% ~ 10.85%"],["Double Chance","1.04% ~ 1.27%"],["Endurance","1.56% ~ 1.86%"],["Attack increase","1.04% ~ 1.27%"],["Perfect Resist","1.95% ~ 2.31%"],["Status Effect Resist","3.35% ~ 3.92%"],["Weapon Damage Tolerance","3.75% ~ 4.38%"],["Dexterity","6 ~ 14"],["Constitution","10 ~ 19"],["Willpower","6 ~ 14"],["Attack","11 ~ 20"],["Critical Hit","16 ~ 25"],["Accuracy","22 ~ 32"],["Defense","130 ~ 157"],["Evasion","13 ~ 22"],["Critical Damage Defense","133 ~ 160"],["Back Defense","133 ~ 160"],["Front Defense","133 ~ 160"],["Critical Hit Resist","23 ~ 33"],["Block","13 ~ 22"],["MP","50 ~ 65"],["HP","100 ~ 122"],["Natural MP Regen","11 ~ 20"],["Natural HP Regen","23 ~ 33"]],
  "3:epic23": [["Incoming Heal","8.62% ~ 9.98%"],["Double Chance","0.96% ~ 1.17%"],["Endurance","1.43% ~ 1.71%"],["Attack increase","0.96% ~ 1.17%"],["Perfect Resist","1.79% ~ 2.13%"],["Status Effect Resist","3.08% ~ 3.61%"],["Weapon Damage Tolerance","3.45% ~ 4.04%"],["Dexterity","5 ~ 13"],["Constitution","9 ~ 17"],["Willpower","5 ~ 13"],["Attack","10 ~ 19"],["Critical Hit","15 ~ 24"],["Accuracy","20 ~ 30"],["Defense","119 ~ 144"],["Evasion","12 ~ 21"],["Critical Damage Defense","123 ~ 148"],["Back Defense","123 ~ 148"],["Front Defense","123 ~ 148"],["Critical Hit Resist","21 ~ 31"],["Block","12 ~ 21"],["MP","46 ~ 60"],["HP","92 ~ 113"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","21 ~ 31"]],
  "3:unique55": [["Incoming Heal","13.5% ~ 15.6%"],["Double Chance","1.5% ~ 1.8%"],["Endurance","2.25% ~ 2.66%"],["Attack increase","1.5% ~ 1.8%"],["Perfect Resist","2.81% ~ 3.3%"],["Status Effect Resist","4.82% ~ 5.61%"],["Weapon Damage Tolerance","5.4% ~ 6.28%"],["Dexterity","9 ~ 17"],["Constitution","14 ~ 23"],["Willpower","9 ~ 17"],["Attack","15 ~ 24"],["Critical Hit","24 ~ 35"],["Accuracy","32 ~ 44"],["Defense","187 ~ 222"],["Evasion","18 ~ 28"],["Critical Damage Defense","192 ~ 228"],["Back Defense","192 ~ 228"],["Front Defense","192 ~ 228"],["Critical Hit Resist","33 ~ 45"],["Block","19 ~ 29"],["MP","72 ~ 90"],["HP","144 ~ 173"],["Natural MP Regen","17 ~ 27"],["Natural HP Regen","33 ~ 45"]],
  "3:unique60": [["Incoming Heal","13.95% ~ 16.11%"],["Double Chance","1.55% ~ 1.85%"],["Endurance","2.32% ~ 2.74%"],["Attack increase","1.55% ~ 1.85%"],["Perfect Resist","2.9% ~ 3.41%"],["Status Effect Resist","4.98% ~ 5.8%"],["Weapon Damage Tolerance","5.58% ~ 6.49%"],["Dexterity","9 ~ 17"],["Constitution","14 ~ 23"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","24 ~ 35"],["Accuracy","33 ~ 45"],["Defense","193 ~ 229"],["Evasion","19 ~ 29"],["Critical Damage Defense","199 ~ 236"],["Back Defense","199 ~ 236"],["Front Defense","199 ~ 236"],["Critical Hit Resist","34 ~ 46"],["Block","20 ~ 30"],["MP","74 ~ 92"],["HP","149 ~ 178"],["Natural MP Regen","17 ~ 27"],["Natural HP Regen","34 ~ 46"]],
  "3:unique100": [["Incoming Heal","16.65% ~ 19.22%"],["Double Chance","1.85% ~ 2.2%"],["Endurance","2.77% ~ 3.26%"],["Attack increase","1.85% ~ 2.2%"],["Perfect Resist","3.46% ~ 4.05%"],["Status Effect Resist","5.94% ~ 6.9%"],["Weapon Damage Tolerance","6.66% ~ 7.73%"],["Dexterity","11 ~ 20"],["Constitution","17 ~ 27"],["Willpower","11 ~ 20"],["Attack","19 ~ 29"],["Critical Hit","29 ~ 40"],["Accuracy","39 ~ 52"],["Defense","231 ~ 273"],["Evasion","23 ~ 33"],["Critical Damage Defense","237 ~ 280"],["Back Defense","237 ~ 280"],["Front Defense","237 ~ 280"],["Critical Hit Resist","41 ~ 54"],["Block","24 ~ 35"],["MP","88 ~ 108"],["HP","178 ~ 212"],["Natural MP Regen","21 ~ 31"],["Natural HP Regen","41 ~ 54"]],
  "3:unique90": [["Incoming Heal","15.75% ~ 18.18%"],["Double Chance","1.75% ~ 2.08%"],["Endurance","2.62% ~ 3.08%"],["Attack increase","1.75% ~ 2.08%"],["Perfect Resist","3.28% ~ 3.84%"],["Status Effect Resist","5.62% ~ 6.53%"],["Weapon Damage Tolerance","6.3% ~ 7.32%"],["Dexterity","10 ~ 19"],["Constitution","16 ~ 25"],["Willpower","10 ~ 19"],["Attack","18 ~ 28"],["Critical Hit","28 ~ 39"],["Accuracy","37 ~ 50"],["Defense","218 ~ 258"],["Evasion","21 ~ 31"],["Critical Damage Defense","224 ~ 265"],["Back Defense","224 ~ 265"],["Front Defense","224 ~ 265"],["Critical Hit Resist","39 ~ 52"],["Block","22 ~ 32"],["MP","84 ~ 104"],["HP","168 ~ 200"],["Natural MP Regen","20 ~ 30"],["Natural HP Regen","39 ~ 52"]],
  "3:unique65": [["Incoming Heal","13.95% ~ 16.11%"],["Double Chance","1.55% ~ 1.85%"],["Endurance","2.32% ~ 2.74%"],["Attack increase","1.55% ~ 1.85%"],["Perfect Resist","2.9% ~ 3.41%"],["Status Effect Resist","4.98% ~ 5.8%"],["Weapon Damage Tolerance","5.58% ~ 6.49%"],["Dexterity","9 ~ 17"],["Constitution","14 ~ 23"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","24 ~ 35"],["Accuracy","33 ~ 45"],["Defense","193 ~ 229"],["Evasion","19 ~ 29"],["Critical Damage Defense","199 ~ 236"],["Back Defense","199 ~ 236"],["Front Defense","199 ~ 236"],["Critical Hit Resist","34 ~ 46"],["Block","20 ~ 30"],["MP","74 ~ 92"],["HP","149 ~ 178"],["Natural MP Regen","17 ~ 27"],["Natural HP Regen","34 ~ 46"]],
  "3:unique80": [["Incoming Heal","15.3% ~ 17.67%"],["Double Chance","1.7% ~ 2.03%"],["Endurance","2.55% ~ 3%"],["Attack increase","1.7% ~ 2.03%"],["Perfect Resist","3.18% ~ 3.73%"],["Status Effect Resist","5.46% ~ 6.35%"],["Weapon Damage Tolerance","6.12% ~ 7.11%"],["Dexterity","10 ~ 19"],["Constitution","16 ~ 25"],["Willpower","10 ~ 19"],["Attack","17 ~ 27"],["Critical Hit","27 ~ 38"],["Accuracy","36 ~ 48"],["Defense","212 ~ 251"],["Evasion","21 ~ 31"],["Critical Damage Defense","218 ~ 258"],["Back Defense","218 ~ 258"],["Front Defense","218 ~ 258"],["Critical Hit Resist","38 ~ 51"],["Block","22 ~ 32"],["MP","81 ~ 100"],["HP","164 ~ 196"],["Natural MP Regen","19 ~ 29"],["Natural HP Regen","38 ~ 51"]],
  "3:unique45": [["Incoming Heal","13.05% ~ 15.08%"],["Double Chance","1.45% ~ 1.74%"],["Endurance","2.17% ~ 2.57%"],["Attack increase","1.45% ~ 1.74%"],["Perfect Resist","2.71% ~ 3.19%"],["Status Effect Resist","4.66% ~ 5.43%"],["Weapon Damage Tolerance","5.22% ~ 6.07%"],["Dexterity","8 ~ 16"],["Constitution","13 ~ 22"],["Willpower","8 ~ 16"],["Attack","15 ~ 24"],["Critical Hit","23 ~ 33"],["Accuracy","31 ~ 43"],["Defense","181 ~ 215"],["Evasion","18 ~ 28"],["Critical Damage Defense","186 ~ 221"],["Back Defense","186 ~ 221"],["Front Defense","186 ~ 221"],["Critical Hit Resist","32 ~ 44"],["Block","18 ~ 28"],["MP","69 ~ 86"],["HP","139 ~ 167"],["Natural MP Regen","16 ~ 25"],["Natural HP Regen","32 ~ 44"]],
  "3:unique70": [["Incoming Heal","14.4% ~ 16.63%"],["Double Chance","1.6% ~ 1.91%"],["Endurance","2.4% ~ 2.83%"],["Attack increase","1.6% ~ 1.91%"],["Perfect Resist","3% ~ 3.52%"],["Status Effect Resist","5.14% ~ 5.98%"],["Weapon Damage Tolerance","5.76% ~ 6.69%"],["Dexterity","9 ~ 17"],["Constitution","15 ~ 24"],["Willpower","9 ~ 17"],["Attack","16 ~ 25"],["Critical Hit","25 ~ 36"],["Accuracy","34 ~ 46"],["Defense","200 ~ 237"],["Evasion","20 ~ 30"],["Critical Damage Defense","205 ~ 243"],["Back Defense","205 ~ 243"],["Front Defense","205 ~ 243"],["Critical Hit Resist","36 ~ 48"],["Block","20 ~ 30"],["MP","76 ~ 94"],["HP","154 ~ 184"],["Natural MP Regen","18 ~ 28"],["Natural HP Regen","36 ~ 48"]],
  "3:unique30": [["Incoming Heal","11.25% ~ 13.01%"],["Double Chance","1.25% ~ 1.51%"],["Endurance","1.87% ~ 2.22%"],["Attack increase","1.25% ~ 1.51%"],["Perfect Resist","2.34% ~ 2.76%"],["Status Effect Resist","4.01% ~ 4.68%"],["Weapon Damage Tolerance","4.5% ~ 5.25%"],["Dexterity","7 ~ 15"],["Constitution","12 ~ 21"],["Willpower","7 ~ 15"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","26 ~ 37"],["Defense","156 ~ 186"],["Evasion","15 ~ 24"],["Critical Damage Defense","160 ~ 191"],["Back Defense","160 ~ 191"],["Front Defense","160 ~ 191"],["Critical Hit Resist","28 ~ 39"],["Block","16 ~ 25"],["MP","60 ~ 76"],["HP","120 ~ 145"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","28 ~ 39"]],
  "3:unique35": [["Incoming Heal","11.7% ~ 13.53%"],["Double Chance","1.3% ~ 1.57%"],["Endurance","1.95% ~ 2.31%"],["Attack increase","1.3% ~ 1.57%"],["Perfect Resist","2.43% ~ 2.86%"],["Status Effect Resist","4.17% ~ 4.87%"],["Weapon Damage Tolerance","4.68% ~ 5.45%"],["Dexterity","7 ~ 15"],["Constitution","12 ~ 21"],["Willpower","7 ~ 15"],["Attack","13 ~ 22"],["Critical Hit","20 ~ 30"],["Accuracy","27 ~ 38"],["Defense","162 ~ 193"],["Evasion","16 ~ 25"],["Critical Damage Defense","167 ~ 199"],["Back Defense","167 ~ 199"],["Front Defense","167 ~ 199"],["Critical Hit Resist","29 ~ 40"],["Block","16 ~ 25"],["MP","62 ~ 78"],["HP","125 ~ 151"],["Natural MP Regen","14 ~ 23"],["Natural HP Regen","29 ~ 40"]],
  "3:unique40": [["Incoming Heal","12.15% ~ 14.04%"],["Double Chance","1.35% ~ 1.62%"],["Endurance","2.02% ~ 2.39%"],["Attack increase","1.35% ~ 1.62%"],["Perfect Resist","2.53% ~ 2.98%"],["Status Effect Resist","4.34% ~ 5.06%"],["Weapon Damage Tolerance","4.86% ~ 5.66%"],["Dexterity","8 ~ 16"],["Constitution","12 ~ 21"],["Willpower","8 ~ 16"],["Attack","14 ~ 23"],["Critical Hit","21 ~ 31"],["Accuracy","29 ~ 40"],["Defense","168 ~ 200"],["Evasion","16 ~ 25"],["Critical Damage Defense","173 ~ 206"],["Back Defense","173 ~ 206"],["Front Defense","173 ~ 206"],["Critical Hit Resist","30 ~ 42"],["Block","17 ~ 27"],["MP","64 ~ 81"],["HP","130 ~ 157"],["Natural MP Regen","15 ~ 24"],["Natural HP Regen","30 ~ 42"]],
  "2:quest16hp29": [["HP","29 ~ 29"]],
  "2:quest2hp26": [["HP","26 ~ 26"]],
  "2:quest9hp27": [["HP","27 ~ 27"]],
  "2:quest21": [["Defense","32 ~ 32"],["Natural MP Regen","7 ~ 7"]],
  "2:rare35": [["Damage Tolerance","4.68% ~ 5.45%"],["Perfect Chance","2.14% ~ 2.53%"],["Endurance","1.43% ~ 1.71%"],["Attack increase","0.95% ~ 1.16%"],["Double Resist","1.43% ~ 1.71%"],["Status Effect Resist","3.06% ~ 3.59%"],["Multi-hit Resist","2.14% ~ 2.53%"],["Dexterity","4 ~ 12"],["Constitution","7 ~ 15"],["Willpower","5 ~ 13"],["Attack","10 ~ 19"],["Critical Hit","15 ~ 24"],["Accuracy","20 ~ 30"],["Defense","119 ~ 144"],["Evasion","12 ~ 21"],["Critical Damage Defense","122 ~ 147"],["Back Defense","122 ~ 147"],["Front Defense","122 ~ 147"],["Critical Hit Resist","21 ~ 31"],["Block","12 ~ 21"],["MP","45 ~ 59"],["HP","92 ~ 113"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","21 ~ 31"]],
  "2:rare30": [["Damage Tolerance","4.5% ~ 5.25%"],["Perfect Chance","2.06% ~ 2.44%"],["Endurance","1.37% ~ 1.65%"],["Attack increase","0.91% ~ 1.12%"],["Double Resist","1.37% ~ 1.65%"],["Status Effect Resist","2.94% ~ 3.45%"],["Multi-hit Resist","2.06% ~ 2.44%"],["Dexterity","4 ~ 12"],["Constitution","7 ~ 15"],["Willpower","5 ~ 13"],["Attack","9 ~ 17"],["Critical Hit","14 ~ 23"],["Accuracy","19 ~ 29"],["Defense","114 ~ 138"],["Evasion","11 ~ 20"],["Critical Damage Defense","117 ~ 142"],["Back Defense","117 ~ 142"],["Front Defense","117 ~ 142"],["Critical Hit Resist","20 ~ 30"],["Block","11 ~ 20"],["MP","44 ~ 58"],["HP","88 ~ 108"],["Natural MP Regen","10 ~ 19"],["Natural HP Regen","20 ~ 30"]],
  "2:rare20": [["Damage Tolerance","4.14% ~ 4.83%"],["Perfect Chance","1.89% ~ 2.24%"],["Endurance","1.26% ~ 1.52%"],["Attack increase","0.84% ~ 1.04%"],["Double Resist","1.26% ~ 1.52%"],["Status Effect Resist","2.71% ~ 3.19%"],["Multi-hit Resist","1.89% ~ 2.24%"],["Dexterity","4 ~ 12"],["Constitution","6 ~ 14"],["Willpower","5 ~ 13"],["Attack","8 ~ 16"],["Critical Hit","13 ~ 22"],["Accuracy","18 ~ 28"],["Defense","105 ~ 128"],["Evasion","10 ~ 19"],["Critical Damage Defense","108 ~ 131"],["Back Defense","108 ~ 131"],["Front Defense","108 ~ 131"],["Critical Hit Resist","18 ~ 28"],["Block","10 ~ 19"],["MP","40 ~ 53"],["HP","81 ~ 100"],["Natural MP Regen","9 ~ 17"],["Natural HP Regen","18 ~ 28"]],
  "2:rare25": [["Damage Tolerance","4.32% ~ 5.04%"],["Perfect Chance","1.98% ~ 2.35%"],["Endurance","1.32% ~ 1.59%"],["Attack increase","0.87% ~ 1.07%"],["Double Resist","1.32% ~ 1.59%"],["Status Effect Resist","2.83% ~ 3.32%"],["Multi-hit Resist","1.98% ~ 2.35%"],["Dexterity","4 ~ 12"],["Constitution","6 ~ 14"],["Willpower","5 ~ 13"],["Attack","9 ~ 17"],["Critical Hit","13 ~ 22"],["Accuracy","19 ~ 29"],["Defense","110 ~ 134"],["Evasion","11 ~ 20"],["Critical Damage Defense","112 ~ 136"],["Back Defense","112 ~ 136"],["Front Defense","112 ~ 136"],["Critical Hit Resist","19 ~ 29"],["Block","11 ~ 20"],["MP","42 ~ 55"],["HP","85 ~ 105"],["Natural MP Regen","9 ~ 17"],["Natural HP Regen","19 ~ 29"]],
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
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640137","name":"Shujakan Boots","obtain":["Found in chest: Shujakan's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640138","name":"Karuka Boots","obtain":["Found in chest: Karuka's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640139","name":"Vishwada Boots","obtain":["Found in chest: Vishwada's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640140","name":"Shylak Boots","obtain":["Found in chest: Shylak's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640133","name":"Guruta Boots","obtain":["Found in chest: Guruta\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640134","name":"K'nash Boots","obtain":["Found in chest: K'nash\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640135","name":"Setram Boots","obtain":["Found in chest: Setram\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640130","name":"Axios Boots","obtain":["Found in chest: Axios\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640131","name":"Hardirun Boots","obtain":["Found in chest: Hardirun\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640132","name":"Barthien Boots","obtain":["Found in chest: Barthien\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640127","name":"Resana Boots","obtain":["Found in chest: Resana\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640128","name":"Linx Boots","obtain":["Found in chest: Linx\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640129","name":"Newbold Boots","obtain":["Found in chest: Newbold\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640124","name":"Demiros Boots","obtain":["Found in chest: Demiros\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640125","name":"Ansas Boots","obtain":["Found in chest: Ansas\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640126","name":"Moshav Boots","obtain":["Found in chest: Moshav\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640121","name":"Aullamu Boots","obtain":["Found in chest: Aullamu\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640122","name":"Layla Boots","obtain":["Found in chest: Layla\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","binding":"Bind on Pickup","id":"210640123","name":"Lawa Boots","obtain":["Found in chest: Lawa\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","pool":"3:bootsArtisan40","binding":"Bind on Pickup","id":"210640119","name":"Nutah Boots","level":"40","required":"37","defense":"225","hp":"80","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Found in chest: Nutah\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","pool":"3:bootsArtisan40","binding":"Bind on Equip","id":"210640066","name":"Pact-Bound Boots","level":"43","required":"40","defense":"242","hp":"86","sell":"714 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Global acquisition route not listed for item #210640066"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","pool":"3:bootsArtisan40","binding":"Bind on Pickup","id":"210640120","name":"Taulo Boots","level":"40","required":"37","defense":"225","hp":"80","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Found in chest: Taulo\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640116","name":"Garsan Boots","obtain":["Found in chest: Garsan\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640117","name":"Trid Boots","obtain":["Found in chest: Trid\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640118","name":"Kelpina Boots","obtain":["Found in chest: Kelpina\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640113","name":"Pnyn Boots","obtain":["Found in chest: Pnyn's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640114","name":"Saursus Boots","obtain":["Found in chest: Saursus\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640115","name":"Aulla Boots","obtain":["Found in chest: Aulla\u0027s Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","id":"210640053","name":"Lunatic Boots","level":"45","required":"45","defense":"380","hp":"134","pool":"3:bootsLunatic45","binding":"Bind on Pickup","sell":"3,621 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Raid reward: Abyssal Forge: Ludra"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","id":"210640111","name":"Kusan Boots","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Found in chest: Kusan's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","id":"210640112","name":"Garshim Boots","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Found in chest: Garshim's Loot Chest (Bound)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640045","name":"Unyielding Boots","level":"43","required":"45","defense":"271","hp":"96","pool":"3:boots43","sell":"1,002 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Global acquisition not listed for item #210640045","Equivalent Global item #210640047: Abyssal Forge: Ludra raid reward; Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640046","name":"Black Claw Boots","level":"45","required":"45","defense":"317","hp":"112","pool":"3:boots45","sell":"1,721 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Global acquisition not listed for item #210640046","Equivalent Global item #210640048: Abyssal Forge: Ludra raid reward; Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","level":"38","required":"35","defense":"213","hp":"76","pool":"3:boots38","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","id":"210640102","name":"Order Boots","obtain":["Field event: Jump Jump","Field event: Wraith Evasion","Field event: Mysterious Track","Field event: Hidden Lugi","Field event: Odyle Flight Frenzy","Field event: Goldrin's Treasure","Field event: Defend Shugo Merchants","Field event: Up! Up! Up!","Field event: Not This Tile?"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","level":"38","required":"35","defense":"213","hp":"76","pool":"3:boots38","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","id":"210640103","name":"Discipline Boots","obtain":["Field event: Jump Jump","Field event: Wraith Evasion","Field event: Mysterious Track","Field event: Hidden Lugi","Field event: Odyle Flight Frenzy","Field event: Goldrin's Treasure","Field event: Defend Shugo Merchants","Field event: Up! Up! Up!","Field event: Not This Tile?"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","level":"38","required":"35","defense":"213","hp":"76","pool":"3:boots38","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","id":"210640104","name":"Vowed Boots","obtain":[]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bound","selections":"3","fixedImprints":true,"id":"210640031","name":"Pilgrim Boots","level":"39","defense":"219","hp":"78","pool":"3:bootsPilgrimQuest39","sell":"409 Gold","upgrade":"At +10: Defense 129, HP 46","obtain":["Quest reward: Pilgrims of the Garden (Lv 44)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bound","selections":"3","fixedImprints":true,"id":"210640034","name":"Avenger Boots","level":"31","defense":"173","hp":"62","pool":"3:bootsDrifterQuest31","sell":"238 Gold","upgrade":"At +10: Defense 102, HP 37","obtain":["Quest reward: Frozen Fafnite (Lv 36)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bound","selections":"3","fixedImprints":true,"id":"210640035","name":"Liberator Boots","level":"39","defense":"219","hp":"78","pool":"3:bootsLiberatorQuest39","sell":"409 Gold","upgrade":"At +10: Defense 129, HP 46","obtain":["Quest reward: Treatment (Lv 40)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640027","name":"Divine Canyon Boots","level":"43","required":"45","defense":"271","hp":"96","pool":"3:boots43","sell":"1,002 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Global acquisition not listed for item #210640027","Equivalent Global item #210640043: Abyssal Forge: Ludra raid reward; Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640028","name":"Corrupted Judicator Boots","level":"45","required":"45","defense":"317","hp":"112","pool":"3:boots45","sell":"1,721 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Global acquisition not listed for item #210640028","Equivalent Global item #210640044: Abyssal Forge: Ludra raid reward; Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bound","selections":"3","id":"210640030","name":"Drifter Boots","level":"31","defense":"173","hp":"62","pool":"3:bootsDrifterQuest31","sell":"238 Gold","upgrade":"At +10: Defense 102, HP 37","fixedImprints":true,"obtain":["Quest reward: Fragmented Tale (Lv 35)"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640024","name":"Judicator Boots","level":"38","required":"35","defense":"213","hp":"76","pool":"3:boots38","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640025","name":"Anguish Boots","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Global acquisition not listed for item #210640025","Equivalent Global item #210640029: Abyssal Forge: Ludra raid reward; Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","id":"210640026","name":"Division Boots","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Global acquisition not listed for item #210640026","Equivalent Global item #210640042: Abyssal Forge: Ludra raid reward; Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","level":"25","required":"22","defense":"138","hp":"50","pool":"3:boots28","sell":"212 Gold","upgrade":"At +10: Defense 82, HP 30","id":"210640022","name":"Red Agate Boots","obtain":["Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","level":"33","required":"30","defense":"184","hp":"66","pool":"3:boots33","sell":"363 Gold","upgrade":"At +10: Defense 109, HP 39","id":"210640023","name":"Faith Boots","obtain":["Party Dungeon"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Equip","selections":"3","level":"40","required":"36","defense":"265","hp":"94","pool":"3:bootsArtisan40","sell":"817 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640013","name":"Artisan's Orichalcum Boots (Elyos)","faction":"Elyos","crafting":"Tailoring Lv 40: Expert's Splendent Orichalcum Boots ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2 (25% Combo chance)","obtain":["Crafted at Light Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Equip","selections":"3","level":"40","required":"36","defense":"265","hp":"94","pool":"3:bootsArtisan40","sell":"817 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640015","name":"Artisan's Orichalcum Boots (Asmodians)","faction":"Asmodians","crafting":"Tailoring Lv 40: Expert's Splendent Orichalcum Boots ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2 (25% Combo chance)","obtain":["Crafted at Dark Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","obtain":[],"id":"210640101","name":"Bloodthirsty Boots","level":"33","required":"30","defense":"184","hp":"66","pool":"3:boots33","sell":"363 Gold","upgrade":"At +10: Defense 109, HP 39"},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Equip","selections":"3","level":"33","defense":"196","hp":"70","pool":"3:bootsExpert33","sell":"416 Gold","upgrade":"At +10: Defense 109, HP 39","id":"210640012","name":"Expert's Splendent Orichalcum Boots (Elyos)","required":"26","faction":"Elyos","crafting":"Tailoring Lv 25: Splendent Orichalcum Boots ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×1 (25% Combo chance)","obtain":["Crafted at Light Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Equip","selections":"3","level":"33","defense":"196","hp":"70","pool":"3:bootsExpert33","sell":"416 Gold","upgrade":"At +10: Defense 109, HP 39","id":"210640014","name":"Expert's Splendent Orichalcum Boots (Asmodians)","required":"26","faction":"Asmodians","crafting":"Tailoring Lv 25: Splendent Orichalcum Boots ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×1 (25% Combo chance)","obtain":["Crafted at Dark Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","obtain":["Field event: Jump Jump","Field event: Wraith Evasion","Field event: Mysterious Track","Field event: Hidden Lugi","Field event: Odyle Flight Frenzy","Field event: Goldrin's Treasure","Field event: Defend Shugo Merchants","Field event: Up! Up! Up!","Field event: Not This Tile?"],"id":"210640098","name":"Destruction Boots","level":"33","required":"30","defense":"184","hp":"66","pool":"3:boots33","sell":"363 Gold","upgrade":"At +10: Defense 109, HP 39"},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","obtain":[],"id":"210640099","name":"Defender Boots","level":"23","required":"20","defense":"127","hp":"46","pool":"3:boots23","sell":"185 Gold","upgrade":"At +10: Defense 75, HP 28"},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","obtain":[],"id":"210640100","name":"Whispering Oblivion Boots","level":"28","required":"25","defense":"156","hp":"56","pool":"3:boots28","sell":"259 Gold","upgrade":"At +10: Defense 92, HP 33"},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","obtain":["Field event: Jump Jump","Field event: Wraith Evasion","Field event: Mysterious Track","Field event: Hidden Lugi","Field event: Odyle Flight Frenzy","Field event: Goldrin's Treasure","Field event: Defend Shugo Merchants","Field event: Up! Up! Up!","Field event: Not This Tile?"],"id":"210640096","name":"Relic Collector Boots","level":"23","required":"20","defense":"127","hp":"46","pool":"3:boots23","sell":"185 Gold","upgrade":"At +10: Defense 75, HP 28"},
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","binding":"Bind on Pickup","selections":"3","obtain":["Field event: Jump Jump","Field event: Wraith Evasion","Field event: Mysterious Track","Field event: Hidden Lugi","Field event: Odyle Flight Frenzy","Field event: Goldrin's Treasure","Field event: Defend Shugo Merchants","Field event: Up! Up! Up!","Field event: Not This Tile?"],"id":"210640097","name":"Pragmatist Boots","level":"28","required":"25","defense":"156","hp":"56","pool":"3:boots28","sell":"259 Gold","upgrade":"At +10: Defense 92, HP 33"},
  {
    "category": "Boots",
    "grade": "Epic",
    "equipType": "Boots",
    "sockets": "3",
    "enchant": "+10",
    "binding": "Bind on Pickup",
    "selections": "3",
    "obtain": [
      "Field event: Jump Jump",
      "Field event: Wraith Evasion",
      "Field event: Mysterious Track",
      "Field event: Hidden Lugi",
      "Field event: Odyle Flight Frenzy",
      "Field event: Goldrin's Treasure",
      "Field event: Defend Shugo Merchants",
      "Field event: Up! Up! Up!",
      "Field event: Not This Tile?"
    ],
    "id": "210640093",
    "name": "Temple Guardian Boots",
    "level": "28",
    "required": "25",
    "defense": "156",
    "hp": "56",
    "pool": "3:boots28",
    "sell": "259 Gold",
    "upgrade": "At +10: Defense 92, HP 33"
  },
  {
    "category": "Boots",
    "grade": "Epic",
    "equipType": "Boots",
    "sockets": "3",
    "enchant": "+10",
    "binding": "Bind on Pickup",
    "selections": "3",
    "obtain": [
      "Field event: Jump Jump",
      "Field event: Wraith Evasion",
      "Field event: Mysterious Track",
      "Field event: Hidden Lugi",
      "Field event: Odyle Flight Frenzy",
      "Field event: Goldrin's Treasure",
      "Field event: Defend Shugo Merchants",
      "Field event: Up! Up! Up!",
      "Field event: Not This Tile?"
    ],
    "id": "210640094",
    "name": "Illusion Boots",
    "level": "33",
    "required": "30",
    "defense": "184",
    "hp": "66",
    "pool": "3:boots33",
    "sell": "363 Gold",
    "upgrade": "At +10: Defense 109, HP 39"
  },
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["High Commander Lagta world boss in Verteron and Altgard"],"id":"210630073","name":"High Commander Lagta Boots","level":"46","required":"40","defense":"259","hp":"92","pool":"6:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["Argo, the Spirit King and Executor Argo world bosses in Chaotic Lower Reshanta","Argo's Merit Chests and Dimensional Merit Chests"],"id":"210630065","name":"Argo Boots","level":"66","required":"45","defense":"374","hp":"132","pool":"6:dragon66","sell":"4,823 Gold","upgrade":"At +15: Defense 330, HP 117; Exceed +1: Defense 33, HP 33, Damage Tolerance 0.5%, HP increase 0.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["Soul Ruler Kashapa world boss"],"id":"210630072","name":"Kashapa Boots","level":"46","required":"40","defense":"259","hp":"92","pool":"6:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["Eternal Gartua world boss in Verteron","Immortal Gartua world boss in Altgard"],"id":"210630060","name":"Gartua Boots","level":"70","required":"45","defense":"398","hp":"140","pool":"6:dragon70","sell":"5,161 Gold","upgrade":"At +15: Defense 351, HP 124; Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["Watcher Kaira and Executor Kaira world bosses in Chaotic Lower Reshanta","Kaira's Merit Chests and Dimensional Merit Chests"],"id":"210630062","name":"Kaira Boots","level":"56","required":"45","defense":"317","hp":"112","pool":"6:dragon62","sell":"2,809 Gold","upgrade":"At +15: Defense 280, HP 99; Exceed +1: Defense 28, HP 28, Damage Tolerance 0.5%, HP increase 0.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","selections":"4","obtain":["Abyssal Forge: Ludra raid reward"],"id":"210630058","name":"Abyssal Boots","level":"86","required":"45","defense":"490","hp":"172","pool":"6:dragon94","sell":"55,000 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["Silent Dartan world boss in Verteron and Altgard"],"id":"210630059","name":"Dartan Boots","level":"46","required":"40","defense":"259","hp":"92","pool":"6:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":[],"id":"210630044","name":"Conquering Boots","level":"51","required":"45","defense":"288","hp":"102","pool":"6:unique51","sell":"2,003 Gold","upgrade":"At +15: Defense 254, HP 90"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","selections":"4","obtain":["Abyssal Forge: Ludra raid reward","Ferocious Horn Den: Armor Selection Chest (Bound)"],"id":"210630053","name":"Nuakum Boots","level":"86","required":"45","defense":"490","hp":"172","pool":"6:dragon94","sell":"55,000 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","obtain":[],"id":"210630040","name":"Splendent Wise Dragon Lord Boots","level":"102","required":"45","defense":"582","hp":"204","pool":"6:dragon102","faction":"Elyos","sell":"74,747 Gold","upgrade":"At +15: Defense 513, HP 180; Exceed +5: Defense 250, HP 250, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","obtain":[],"id":"210630041","name":"Splendent Ebony Dragon Lord Boots","level":"102","required":"45","defense":"582","hp":"204","pool":"6:dragon102","faction":"Asmodians","sell":"74,747 Gold","upgrade":"At +15: Defense 513, HP 180; Exceed +5: Defense 250, HP 250, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","selections":"4","obtain":["Transcendent Armor Selection Chest (Bound)"],"id":"210630033","name":"Transcendent Boots","level":"43","required":"37","defense":"242","hp":"86","pool":"6:unique46","sell":"1,166 Gold","upgrade":"At +15: Defense 214, HP 76"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"4","obtain":["Guardian Lord Nahma and Enraged Guardian Lord Nahma world bosses","Nahma merit chests"],"id":"210630039","name":"Guardian Lord Nahma Boots","level":"86","required":"45","defense":"490","hp":"172","pool":"6:dragon94","sell":"16,293 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":[],"id":"210630026","name":"Guardian Decanus Boots","level":"62","required":"40","defense":"351","hp":"124","pool":"6:dragon62","sell":"10,512 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":[],"id":"210630027","name":"Guardian Centurion Boots","level":"78","required":"45","defense":"444","hp":"156","pool":"6:dragon78","sell":"34,119 Gold","upgrade":"At +15: Defense 391, HP 138; Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":[],"id":"210630028","name":"Guardian Tribunus Boots","level":"94","required":"45","defense":"536","hp":"188","pool":"6:dragon94","sell":"97,625 Gold","upgrade":"At +15: Defense 472, HP 166; Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":[],"id":"210630030","name":"Archon Decanus Boots","level":"62","required":"40","defense":"351","hp":"124","pool":"6:dragon62","sell":"10,512 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":[],"id":"210630031","name":"Archon Centurion Boots","level":"78","required":"45","defense":"444","hp":"156","pool":"6:dragon78","sell":"34,119 Gold","upgrade":"At +15: Defense 391, HP 138; Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Pickup","obtain":[],"id":"210630032","name":"Archon Tribunus Boots","level":"94","required":"45","defense":"536","hp":"188","pool":"6:dragon94","sell":"97,625 Gold","upgrade":"At +15: Defense 472, HP 166; Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%"},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630021","name":"Splendent Star Dragon Lord Boots","level":"70","required":"45","defense":"398","hp":"140","pool":"6:dragon70","faction":"Asmodians","sell":"25,320 Gold","upgrade":"At +15: Defense 351, HP 124; Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"25% Combo result from Tailoring Lv 60: Artisan's Splendent Orichalcum Boots ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×5, Radiant Orichalcum Ore ×2, Radiant Odyle ×2","obtain":["Crafted at Dark Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630022","name":"Splendent Dark Dragon Lord Boots","level":"86","required":"45","defense":"490","hp":"172","pool":"6:dragon86","faction":"Asmodians","sell":"43,504 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630023","name":"Wise Dragon Lord Boots","level":"94","required":"45","defense":"536","hp":"188","pool":"6:dragon94","faction":"Elyos","sell":"38,016 Gold","upgrade":"At +15: Defense 472, HP 166; Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630024","name":"Ebony Dragon Lord Boots","level":"94","required":"45","defense":"536","hp":"188","pool":"6:dragon94","faction":"Asmodians","sell":"38,016 Gold","upgrade":"At +15: Defense 472, HP 166; Exceed +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630017","name":"Splendent True Dragon Lord Boots","level":"70","required":"45","defense":"398","hp":"140","pool":"6:dragon70","faction":"Elyos","sell":"25,320 Gold","upgrade":"At +15: Defense 351, HP 124; Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"25% Combo result from Tailoring Lv 60: Artisan's Splendent Orichalcum Boots ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×5, Radiant Orichalcum Ore ×2, Radiant Odyle ×2","obtain":["Crafted at Light Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630018","name":"Splendent White Dragon Lord Boots","level":"86","required":"45","defense":"490","hp":"172","pool":"6:dragon86","faction":"Elyos","sell":"43,504 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630019","name":"Star Dragon Lord Boots","level":"62","required":"45","defense":"351","hp":"124","pool":"6:dragon62","faction":"Asmodians","sell":"12,878 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 60: Artisan's Splendent Orichalcum Boots ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×5, Radiant Orichalcum Ore ×2, Radiant Odyle ×2 (25% Combo chance)","obtain":["Crafted at Dark Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","selections":"5","id":"210630020","name":"Dark Dragon Lord Boots","level":"78","required":"45","defense":"444","hp":"156","pool":"6:dragon78","faction":"Asmodians","sell":"22,126 Gold","upgrade":"At +15: Defense 391, HP 138; Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210630013","name":"Artisan's Splendent Orichalcum Boots (Elyos)","level":"44","required":"34","defense":"248","hp":"88","pool":"6:unique46","faction":"Elyos","sell":"1,428 Gold","upgrade":"At +15: Defense 219, HP 78","crafting":"Tailoring Lv 40: Expert's Splendent Orichalcum Boots ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2 (25% Combo chance)","obtain":["Crafted at Light Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210630014","name":"Artisan's Splendent Orichalcum Boots (Asmodians)","level":"44","required":"34","defense":"248","hp":"88","pool":"6:unique46","faction":"Asmodians","sell":"1,428 Gold","upgrade":"At +15: Defense 219, HP 78","crafting":"Tailoring Lv 40: Expert's Splendent Orichalcum Boots ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2 (25% Combo chance)","obtain":["Crafted at Dark Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210630015","name":"True Dragon Lord Boots","level":"62","required":"45","defense":"351","hp":"124","pool":"6:dragon62","selections":"5","faction":"Elyos","sell":"12,878 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 60: Artisan's Splendent Orichalcum Boots ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×5, Radiant Orichalcum Ore ×2, Radiant Odyle ×2 (25% Combo chance)","obtain":["Crafted at Light Armorsmithing Table, Verteron"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210630016","name":"White Dragon Lord Boots","level":"78","required":"45","defense":"444","hp":"156","pool":"6:dragon78","selections":"5","faction":"Elyos","sell":"22,126 Gold","upgrade":"At +15: Defense 391, HP 138; Exceed +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","id":"210630001","name":"Wisdom Boots","level":"36","required":"30","defense":"202","hp":"72","pool":"6:unique","sell":"726 Gold","upgrade":"At +15: Defense 178, HP 64","obtain":["Verteron monsters and named world bosses, including Neikel of the East"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","id":"210630010","name":"Tranquility Boots","level":"36","required":"30","defense":"202","hp":"72","pool":"6:unique","sell":"726 Gold","upgrade":"At +15: Defense 178, HP 64","obtain":[]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","id":"210630011","name":"Courage Boots","level":"41","required":"35","defense":"230","hp":"82","pool":"6:holy41","sell":"1,018 Gold","upgrade":"At +15: Defense 204, HP 73","obtain":["Chaotic Lower Reshanta monsters, including Abyss Rusty Rotan"]},
  {"category":"Boots","grade":"Unique","equipType":"Boots","sockets":"4","enchant":"+15","id":"210630012","name":"Fallen Ancient God Boots","level":"46","required":"40","defense":"259","hp":"92","pool":"6:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82","obtain":["Chaotic Lower Reshanta monsters and named world bosses"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210430062","name":"Kaira Pauldrons","level":"56","required":"45","defense":"356","hp":"140","pool":"4:dragon62","sell":"2,809 Gold","upgrade":"At +15: Defense 280, HP 99; Exceed +1: Defense 28, HP 28, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Watcher Kaira or Executor Kaira","Kaira or Dimensional merit chests"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210430065","name":"Argo Pauldrons","level":"66","required":"45","defense":"421","hp":"165","pool":"4:unique66","sell":"4,823 Gold","upgrade":"At +15: Defense 330, HP 117; Exceed +1: Defense 33, HP 33, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Argo, the Spirit King or Executor Argo","Argo or Dimensional merit chests"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210430072","name":"Kashapa Pauldrons","level":"46","required":"40","defense":"292","hp":"115","pool":"4:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82","obtain":["Soul Ruler Kashapa"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","binding":"Bind on Equip","id":"210430073","name":"High Commander Lagta Pauldrons","level":"46","required":"40","defense":"292","hp":"115","pool":"4:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82","obtain":["High Commander Lagta (Verteron or Altgard)"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430039","name":"Guardian Lord Nahma Pauldrons","level":"86","required":"45","defense":"551","hp":"215","pool":"4:unique86","sell":"16,293 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":["Guardian Lord Nahma or Enraged Guardian Lord Nahma","Nahma merit chests"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430058","name":"Abyssal Pauldrons","level":"86","required":"45","defense":"551","hp":"215","pool":"4:unique86","binding":"Bind on Pickup","sell":"55,000 Gold","upgrade":"At +15: Defense 432, HP 152; Exceed +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":["Abyssal Forge: Ludra raid reward"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430059","name":"Dartan Pauldrons","level":"46","required":"40","defense":"292","hp":"115","pool":"4:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82","obtain":["Silent Dartan world boss in Verteron or Altgard"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430060","name":"Gartua Pauldrons","level":"70","required":"45","defense":"447","hp":"175","pool":"4:dragon70","sell":"5,161 Gold","upgrade":"At +15: Defense 351, HP 124; Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","obtain":["Eternal Gartua in Verteron or Immortal Gartua in Altgard"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430026","name":"Guardian Decanus Pauldrons","level":"62","required":"40","defense":"395","hp":"155","pool":"4:dragon62","binding":"Bind on Pickup","sell":"10,512 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","obtain":[]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430033","name":"Transcendent Pauldrons","level":"43","required":"37","defense":"272","hp":"108","pool":"4:unique46","binding":"Bind on Pickup","sell":"1,166 Gold","upgrade":"At +15: Defense 214, HP 76","obtain":["Transcendent Armor Selection Chest (Bound)"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430034","name":"Bakarma Pauldrons","level":"54","required":"45","defense":"343","hp":"135","pool":"4:dragon62","binding":"Bind on Pickup","sell":"30,000 Gold","upgrade":"At +15: Defense 269, HP 96; Exceed +1: Defense 27, HP 27, Damage Tolerance 0.5%, HP increase 0.5%","obtain":[]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430044","name":"Conquering Pauldrons","level":"51","required":"45","defense":"324","hp":"128","pool":"4:unique51","sell":"2,003 Gold","upgrade":"At +15: Defense 254, HP 90","obtain":[]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","required":"45","sockets":"4","selections":"5","enchant":"+15","id":"210430015","name":"True Dragon Lord Pauldrons","level":"62","defense":"395","hp":"155","pool":"4:dragon62","faction":"Elyos","sell":"12,878 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 55: Artisan's Splendent Orichalcum Pauldrons ×1 (Elyos), Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2 (25% upgraded combo chance)","obtain":["Craft at an Armorsmithing Table (Light)"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","required":"45","sockets":"4","selections":"5","enchant":"+15","id":"210430017","name":"Splendent True Dragon Lord Pauldrons","level":"70","defense":"447","hp":"175","pool":"4:dragon70","faction":"Elyos","sell":"25,320 Gold","upgrade":"At +15: Defense 351, HP 124; Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Tailoring Lv 55: 25% combo result of the True Dragon Lord Pauldrons recipe (Artisan's Splendent Orichalcum Pauldrons ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2)","obtain":["Craft at an Armorsmithing Table (Light)"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","required":"45","sockets":"4","selections":"5","enchant":"+15","id":"210430019","name":"Star Dragon Lord Pauldrons","level":"62","defense":"395","hp":"155","pool":"4:dragon62","faction":"Asmodians","sell":"12,878 Gold","upgrade":"At +15: Defense 310, HP 110; Exceed +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 55: Artisan's Splendent Orichalcum Pauldrons ×1 (Asmodians), Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2 (25% upgraded combo chance)","obtain":["Craft at an Armorsmithing Table (Dark)"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","required":"45","sockets":"4","selections":"5","enchant":"+15","id":"210430021","name":"Splendent Star Dragon Lord Pauldrons","level":"70","defense":"447","hp":"175","pool":"4:dragon70","faction":"Asmodians","sell":"25,320 Gold","upgrade":"At +15: Defense 351, HP 124; Exceed +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Tailoring Lv 55: 25% combo result of the Star Dragon Lord Pauldrons recipe (Artisan's Splendent Orichalcum Pauldrons ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2)","obtain":["Craft at an Armorsmithing Table (Dark)"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430001","name":"Wisdom Pauldrons","level":"36","required":"30","defense":"227","hp":"90","pool":"4:unique","sell":"726 Gold","upgrade":"At +15: Defense 178, HP 64","obtain":["Named world bosses, including Neikel of the East"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430010","name":"Tranquility Pauldrons","level":"36","required":"30","defense":"227","hp":"90","pool":"4:unique","sell":"726 Gold","upgrade":"At +15: Defense 178, HP 64","obtain":[]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430011","name":"Courage Pauldrons","level":"41","required":"35","defense":"259","hp":"103","pool":"4:holy41","sell":"1,018 Gold","upgrade":"At +15: Defense 204, HP 73","obtain":["Chaotic Lower Reshanta enemy drops"]},
  {"category":"Shoulder","grade":"Unique","equipType":"Shoulder","sockets":"4","enchant":"+15","id":"210430012","name":"Fallen Ancient God Pauldrons","level":"46","required":"40","defense":"292","hp":"115","pool":"4:unique46","sell":"1,428 Gold","upgrade":"At +15: Defense 229, HP 82","obtain":["Abyss world bosses, including Argo the Spirit King and Guardian Lord Nahma"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350067","name":"Aed Helm","obtain":["Black Warrior Aed, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350068","name":"Rajit Helm","obtain":["Faithful Rajit, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350069","name":"Vargor Helm","obtain":["Berserker Vargor, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350070","name":"Lannar Helm","obtain":["Blood Warrior Lannar, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350051","name":"Danar Helm","obtain":["Melted Danar, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350056","name":"Neikel Helm","obtain":["Neikel of the East, Lv 45 world boss"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350057","name":"Kutar Helm","obtain":["Rotten Kutar, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350058","name":"Korin Helm","obtain":["Blooming Korin, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210350059","name":"Teegant Helm","obtain":["Bodyguard Teegant, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","id":"210350013","name":"Vagabond Helm","level":"30","required":"30","defense":"188","hp":"75","pool":"2:rareHelm30","sell":"182 Gold","binding":"Bind on Equip","upgrade":"At +5: Defense 50, HP 18","obtain":["Dropped by Argo, the Spirit King and Guardian Lord Nahma in Chaotic Lower Reshanta, among other enemies"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","id":"210350027","name":"Wind Breeze Helm","level":"26","defense":"162","hp":"65","pool":"2:windChaserQuest","sell":"104 Gold","binding":"Bound","fixedImprints":true,"upgrade":"At +5: Defense 43, HP 16","obtain":["Quest reward: Secrets of the Altar (Lv 30)"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","id":"210350034","name":"Chaser Helm","level":"26","defense":"162","hp":"65","pool":"2:windChaserQuest","sell":"104 Gold","binding":"Bound","fixedImprints":true,"upgrade":"At +5: Defense 43, HP 16","obtain":["Quest reward: Land of Rifts (Lv 29)"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","id":"210350046","name":"Kernon Helm","level":"35","required":"35","defense":"221","hp":"88","pool":"2:rareHelm35","sell":"255 Gold","binding":"Bind on Equip","upgrade":"At +5: Defense 58, HP 21","obtain":["Kernon of the West, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350009","name":"Chaos Helm","level":"20","required":"20","defense":"123","hp":"50","pool":"2:rareHelm20","sell":"92 Gold","upgrade":"At +5: Defense 33, HP 12","obtain":["Dropped by Melted Danar and Black Warrior Aed in Altgard, among other enemies"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350010","name":"Luminous Helm","level":"25","required":"25","defense":"156","hp":"63","pool":"2:rareHelm25","sell":"130 Gold","upgrade":"At +5: Defense 41, HP 15","obtain":["Dropped by Melted Danar and Black Warrior Aed in Altgard, among other enemies"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350011","name":"Frontline Helm","level":"20","required":"20","defense":"123","hp":"50","pool":"2:rareHelm20","sell":"92 Gold","upgrade":"At +5: Defense 33, HP 12","obtain":["Acquisition route not listed in the Global client data"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350012","name":"Intruder Helm","level":"25","required":"25","defense":"156","hp":"63","pool":"2:rareHelm25","sell":"130 Gold","upgrade":"At +5: Defense 41, HP 15","obtain":["Acquisition route not listed in the Global client data"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350003","name":"Rainy Forest Helm","level":"15","required":"15","defense":"91","hp":"38","pool":"2:rareHelm15","sell":"66 Gold","upgrade":"At +5: Defense 24, HP 9","obtain":["Dropped by Marsh Targon, Ellun River Sylphen and other Verteron enemies"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350004","name":"Ethereal Helm","level":"20","required":"20","defense":"123","hp":"50","pool":"2:rareHelm20","sell":"92 Gold","upgrade":"At +5: Defense 33, HP 12","obtain":["Dropped by Neikel of the East, Rotten Kutar and other listed enemies"]},
  {"category":"Helmet","grade":"Rare","equipType":"Helmet","sockets":"2","selections":"2","enchant":"+5","binding":"Bind on Equip","id":"210350005","name":"Comet Helm","level":"25","required":"25","defense":"156","hp":"63","pool":"2:rareHelm25","sell":"130 Gold","upgrade":"At +5: Defense 41, HP 15","obtain":["Dropped by Neikel of the East, Rotten Kutar and other listed enemies"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340081","name":"K'nash Helm","obtain":["Sentinel K'nash, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340082","name":"Setram Helm","obtain":["Researcher Setram, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340083","name":"Kasia Helm","obtain":["Phantasm Kasia, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340086","name":"Shujakan Helm","obtain":["Veteran Shujakan, Lv 45 world boss"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340087","name":"Karuka Helm","obtain":["Visionary Karuka, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340088","name":"Vishwada Helm","obtain":["Dark Shadow Vishwada, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210340089","name":"Shylak Helm","obtain":["Sharp Shylak, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340077","name":"Axios Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Specter Archon Axios, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340078","name":"Hardirun Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Addicted Hardirun, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340079","name":"Barthien Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Executioner Barthien, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340080","name":"Guruta Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Drakan Battalion Weapon Guruta, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340073","name":"Moshav Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Harvest Manager Moshav, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340074","name":"Resana Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Advisor Resana, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340075","name":"Linx Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Special Operations Leader Linx, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340076","name":"Newbold Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Desecrator Newbold, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340069","name":"Layla Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Heretic Layla, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340070","name":"Lawa Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Black Tentacle Lawa, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340071","name":"Demiros Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Centurion Demiros, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340072","name":"Ansas Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Divine Ansas, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340066","name":"Pact-Bound Helm","level":"43","required":"40","defense":"272","hp":"108","pool":"3:epicCraft40","sell":"714 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Acquisition route not listed in the Global client data"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340067","name":"Taulo Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Chaser Taulo, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","binding":"Bind on Equip","id":"210340068","name":"Aullamu Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Forest Warrior Aullamu, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340060","name":"Garsan Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Predator Garsan, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340061","name":"Trid Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Deceiver Trid, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340062","name":"Kelpina Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Blue Wave Kelpina, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340063","name":"Nutah Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["High Overseer Nutah, Lv 45 world boss in Altgard"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340056","name":"Pnyn Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Bloodfang Pnyn, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340057","name":"Saursus Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Furious Saursus, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340058","name":"Aulla Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Scholar Aulla, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340045","name":"Unyielding Helm","level":"43","required":"45","defense":"305","hp":"120","pool":"3:epic43","binding":"Bind on Pickup","sell":"1,002 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Alternate Global record #210340047 lists Abyssal Forge: Ludra raid reward and Party Dungeon; KR/TW reference lists Vakron in Vakron Sky Island and Eternal Ludra in Abyssal Forge"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340046","name":"Black Claw Helm","level":"45","required":"45","defense":"356","hp":"140","pool":"3:epic45","binding":"Bind on Pickup","sell":"1,721 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Alternate Global record #210340048 lists Abyssal Forge: Ludra raid reward and Party Dungeon; KR/TW reference lists Ferocious Horn Nuakum in Ferocious Horn Den and Eternal Ludra in Abyssal Forge"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340053","name":"Lunatic Helm","level":"45","required":"45","defense":"428","hp":"168","pool":"3:epicBoss45","binding":"Bind on Pickup","sell":"3,621 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Raid reward: Abyssal Forge: Ludra"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340054","name":"Kusan Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Kusan the Mad Gladiator, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340055","name":"Garshim Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Equip","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Ritualist Garshim, Lv 45 world boss in Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340034","name":"Avenger Helm","level":"32","defense":"201","hp":"80","pool":"3:drifterQuest","binding":"Bound","fixedImprints":true,"sell":"255 Gold","upgrade":"At +10: Defense 105, HP 38","obtain":["Quest reward: Lake of Confrontation (Lv 37)"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340035","name":"Liberator Helm","level":"41","defense":"259","hp":"103","pool":"3:pilgrimQuest","binding":"Bound","fixedImprints":true,"sell":"468 Gold","upgrade":"At +10: Defense 136, HP 49","obtain":["Quest reward: Blood Barrier (Lv 44)"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340038","name":"Order Helm","level":"38","required":"35","defense":"240","hp":"95","pool":"3:epicCraft33","binding":"Bind on Equip","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Neikel of the East, Rotten Kutar, Kernon of the West and other world bosses (73 recorded drops, including Verteron)"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340039","name":"Discipline Helm","level":"38","required":"35","defense":"240","hp":"95","pool":"3:epicCraft33","binding":"Bind on Equip","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Melted Danar, Black Warrior Aed, Faithful Rajit and other world bosses (62 recorded drops, including Altgard)"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340040","name":"Vowed Helm","level":"38","required":"35","defense":"240","hp":"95","pool":"3:epicCraft33","binding":"Bind on Equip","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Global acquisition route not listed"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340026","name":"Division Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Alternate Global record #210340042 lists Abyssal Forge: Ludra raid reward and Party Dungeon; KR/TW reference lists Ultimate Berk in Krao Cave and Eternal Ludra in Abyssal Forge"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340027","name":"Divine Canyon Helm","level":"43","required":"45","defense":"305","hp":"120","pool":"3:epic43","binding":"Bind on Pickup","sell":"1,002 Gold","upgrade":"At +10: Defense 143, HP 51","obtain":["Alternate Global record #210340043 lists Abyssal Forge: Ludra raid reward and Party Dungeon; KR/TW reference lists Divine Auldor in Urugugu Canyon and Eternal Ludra in Abyssal Forge"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340028","name":"Corrupted Judicator Helm","level":"45","required":"45","defense":"356","hp":"140","pool":"3:epic45","binding":"Bind on Pickup","sell":"1,721 Gold","upgrade":"At +10: Defense 149, HP 53","obtain":["Alternate Global record #210340044 lists Abyssal Forge: Ludra raid reward and Party Dungeon; KR/TW reference lists Kromede's Desire in Fire Temple and Eternal Ludra in Abyssal Forge"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340030","name":"Drifter Helm","level":"32","defense":"201","hp":"80","pool":"3:drifterQuest","binding":"Bound","fixedImprints":true,"sell":"255 Gold","upgrade":"At +10: Defense 105, HP 38","obtain":["Quest reward: Path to the Altar (Lv 37)"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340031","name":"Pilgrim Helm","level":"41","defense":"259","hp":"103","pool":"3:pilgrimQuest","binding":"Bound","fixedImprints":true,"sell":"468 Gold","upgrade":"At +10: Defense 136, HP 49","obtain":["Quest reward: Sacred Offering (Lv 45)"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340013","name":"Artisan's Orichalcum Helm (Elyos)","level":"40","required":"36","defense":"298","hp":"118","pool":"3:epicCraft40","binding":"Bind on Equip","faction":"Elyos","crafting":"Tailoring Lv 30: Expert's Splendent Orichalcum Helm ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2 (25% upgraded combo chance)","sell":"817 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Craft at an Armorsmithing Table (Light), Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340015","name":"Artisan's Orichalcum Helm (Asmodians)","level":"40","required":"36","defense":"298","hp":"118","pool":"3:epicCraft40","binding":"Bind on Equip","faction":"Asmodians","crafting":"Tailoring Lv 30: Expert's Splendent Orichalcum Helm ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2 (25% upgraded combo chance)","sell":"817 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Craft at an Armorsmithing Table (Dark), Verteron"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340022","name":"Red Agate Helm","level":"25","required":"22","defense":"156","hp":"63","pool":"3:epic28","binding":"Bind on Pickup","sell":"212 Gold","upgrade":"At +10: Defense 82, HP 30","obtain":["Party Dungeon; specific dungeon not listed in Global reference"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340023","name":"Faith Helm","level":"33","required":"30","defense":"207","hp":"83","pool":"3:epic33","binding":"Bind on Pickup","sell":"363 Gold","upgrade":"At +10: Defense 109, HP 39","obtain":["Party Dungeon; specific dungeon not listed in Global reference"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340024","name":"Judicator Helm","level":"38","required":"35","defense":"240","hp":"95","pool":"3:epicCraft33","binding":"Bind on Pickup","sell":"509 Gold","upgrade":"At +10: Defense 126, HP 45","obtain":["Party Dungeon; specific dungeon not listed in Global reference"]},
  {"category":"Helmet","grade":"Epic","equipType":"Helmet","sockets":"3","selections":"3","enchant":"+10","id":"210340025","name":"Anguish Helm","level":"40","required":"37","defense":"253","hp":"100","pool":"3:epicCraft40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","obtain":["Alternate Global record #210340029 lists Abyssal Forge: Ludra as a raid reward and Party Dungeon; KR/TW reference lists Transcendent Bakarma in Draupnir and Eternal Ludra in Abyssal Forge"]},
  {"id":"210340010","name":"Whispering Oblivion Helm","category":"Helmet","grade":"Epic","level":"28","required":"25","equipType":"Helmet","defense":"175","hp":"70","pool":"3:epic28","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"259 Gold","enchant":"+10","upgrade":"At +10: Defense 92, HP 33","obtain":["Global acquisition route not listed; KR/TW reference lists Abyss Swarm and other enemies in Chaotic Upper Reshanta"]},
  {"id":"210340011","name":"Bloodthirsty Helm","category":"Helmet","grade":"Epic","level":"33","required":"30","equipType":"Helmet","defense":"207","hp":"83","pool":"3:epic33","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"363 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["Argo, Guardian Lord Nahma, Watcher Kaira and other world bosses in Chaotic Lower Reshanta (281 recorded drops)"]},
  {"id":"210340012","name":"Expert's Splendent Orichalcum Helm (Elyos)","category":"Helmet","grade":"Epic","level":"33","required":"26","equipType":"Helmet","defense":"221","hp":"88","pool":"3:epicCraft33","sockets":"3","selections":"3","binding":"Bind on Equip","faction":"Elyos","crafting":"Tailoring Lv 15: Splendent Orichalcum Helm ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×1 (25% upgraded combo chance)","sell":"416 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["Craft at an Armorsmithing Table (Light), Verteron"]},
  {"id":"210340014","name":"Expert's Splendent Orichalcum Helm (Asmodians)","category":"Helmet","grade":"Epic","level":"33","required":"26","equipType":"Helmet","defense":"221","hp":"88","pool":"3:epicCraft33","sockets":"3","selections":"3","binding":"Bind on Equip","faction":"Asmodians","crafting":"Tailoring Lv 15: Splendent Orichalcum Helm ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×1 (25% upgraded combo chance)","sell":"416 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["Craft at an Armorsmithing Table (Dark), Verteron"]},
  {"id":"210340007","name":"Pragmatist Helm","category":"Helmet","grade":"Epic","level":"28","required":"25","equipType":"Helmet","defense":"175","hp":"70","pool":"3:epic28","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"259 Gold","enchant":"+10","upgrade":"At +10: Defense 92, HP 33","obtain":["Contaminated Shulak and other enemies in Altgard (92 recorded drops; levels 35–40)"]},
  {"id":"210340008","name":"Destruction Helm","category":"Helmet","grade":"Epic","level":"33","required":"30","equipType":"Helmet","defense":"207","hp":"83","pool":"3:epic33","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"363 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["Level 45 world bosses and other enemies in Altgard (62 recorded drops)"]},
  {"id":"210340009","name":"Defender Helm","category":"Helmet","grade":"Epic","level":"23","required":"20","equipType":"Helmet","defense":"143","hp":"58","pool":"3:epic23","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"185 Gold","enchant":"+10","upgrade":"At +10: Defense 75, HP 28","obtain":["No acquisition route listed in the current Global client data"]},
  {"id":"210340003","name":"Temple Guardian Helm","category":"Helmet","grade":"Epic","level":"28","required":"25","equipType":"Helmet","defense":"175","hp":"70","pool":"3:epic28","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"259 Gold","enchant":"+10","upgrade":"At +10: Defense 92, HP 33","obtain":["World and field enemies around Verteron (94 recorded drops; levels 35–40)"]},
  {"id":"210340004","name":"Illusion Helm","category":"Helmet","grade":"Epic","level":"33","required":"30","equipType":"Helmet","defense":"207","hp":"83","pool":"3:epic33","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"363 Gold","enchant":"+10","upgrade":"At +10: Defense 109, HP 39","obtain":["Level 45 world bosses and other enemies in Verteron (73 recorded drops)"]},
  {"id":"210340006","name":"Relic Collector Helm","category":"Helmet","grade":"Epic","level":"23","required":"20","equipType":"Helmet","defense":"143","hp":"58","pool":"3:epic23","sockets":"3","selections":"3","binding":"Bind on Equip","sell":"185 Gold","enchant":"+10","upgrade":"At +10: Defense 75, HP 28","obtain":["Daeva Renegades and other enemies in Altgard (85 recorded drops; levels 25–32)"]},
  {"id":"210330062","name":"Kaira Helm","category":"Helmet","grade":"Unique","level":"56","required":"45","equipType":"Helmet","defense":"356","hp":"140","pool":"3:unique45","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"2,809 Gold","enchant":"+15","upgrade":"At +15: Defense 280, HP 99; Exceed to +1: Defense 28, HP 28, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Watcher Kaira and Executor Kaira (Lv 65 world bosses), Chaotic Lower Reshanta","Kaira's Merit Chests and Dimensional Merit Chests (Bound), Rare/Epic/Unique variants"]},
  {"id":"210330065","name":"Argo Helm","category":"Helmet","grade":"Unique","level":"66","required":"45","equipType":"Helmet","defense":"421","hp":"165","pool":"3:unique55","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"4,823 Gold","enchant":"+15","upgrade":"At +15: Defense 330, HP 117; Exceed to +1: Defense 33, HP 33, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Argo, the Spirit King and Executor Argo (Lv 65 world bosses), Chaotic Lower Reshanta","Argo's Merit Chests and Dimensional Merit Chests (Bound), Rare/Epic/Unique variants"]},
  {"id":"210330072","name":"Kashapa Helm","category":"Helmet","grade":"Unique","level":"46","required":"40","equipType":"Helmet","defense":"292","hp":"115","pool":"3:unique40","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"1,428 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["Soul Ruler Kashapa (Lv 45 world boss); one reference spawn is listed in Altgard"]},
  {"id":"210330073","name":"High Commander Lagta Helm","category":"Helmet","grade":"Unique","level":"46","required":"40","equipType":"Helmet","defense":"292","hp":"115","pool":"3:unique40","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"1,428 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["High Commander Lagta (Lv 45 world boss), Verteron and Altgard"]},
  {"id":"210330058","name":"Abyssal Helm","category":"Helmet","grade":"Unique","level":"86","required":"45","equipType":"Helmet","defense":"551","hp":"215","pool":"3:unique90","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"55,000 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152; Exceed to +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":["Abyssal Forge: Ludra raid reward"]},
  {"id":"210330059","name":"Dartan Helm","category":"Helmet","grade":"Unique","level":"46","required":"40","equipType":"Helmet","defense":"292","hp":"115","pool":"3:unique40","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"1,428 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["Silent Dartan (Lv 45 world boss), Verteron and Altgard"]},
  {"id":"210330060","name":"Gartua Helm","category":"Helmet","grade":"Unique","level":"70","required":"45","equipType":"Helmet","defense":"447","hp":"175","pool":"3:unique60","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"5,161 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124; Exceed to +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","obtain":["Eternal Gartua (Lv 51 world boss), Verteron","Immortal Gartua (Lv 51 world boss), Altgard"]},
  {"id":"210330050","name":"Vakron Helm","category":"Helmet","grade":"Unique","level":"70","required":"45","equipType":"Helmet","defense":"447","hp":"175","pool":"3:unique70","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"40,000 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124; Exceed to +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","obtain":["Global reference (alternate item #210330052): Abyssal Forge: Ludra raid reward; Party Dungeon; Vakron Sky Island: Armor Selection Chest (Bound)","KR/TW reference for item #210330050: Vakron (Lv 53 and Lv 72) in Vakron Sky Island, Eternal Ludra (Lv 76) in Abyssal Forge: Ludra; no Global acquisition listed for item #210330050"]},
  {"id":"210330051","name":"Nuakum Helm","category":"Helmet","grade":"Unique","level":"86","required":"45","equipType":"Helmet","defense":"551","hp":"215","pool":"3:unique90","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"55,000 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152; Exceed to +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":["Global reference (alternate item #210330053): Abyssal Forge: Ludra raid reward; Party Dungeon; Ferocious Horn Den: Armor Selection Chest (Bound)","KR/TW reference for item #210330051: Ferocious Horn Nuakum (Lv 63 and Lv 74) in Ferocious Horn Den, Eternal Ludra (Lv 76) in Abyssal Forge: Ludra; no Global acquisition listed for item #210330051"]},
  {"id":"210330039","name":"Guardian Lord Nahma Helm","category":"Helmet","grade":"Unique","level":"86","required":"45","equipType":"Helmet","defense":"551","hp":"215","pool":"3:unique90","sockets":"4","selections":"4","binding":"Bind on Equip","sell":"16,293 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152; Exceed to +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","obtain":["Guardian Lord Nahma (Lv 65 world boss) and Enraged Guardian Lord Nahma (Lv 80 world boss)","Nahma's and Enraged Nahma's Merit Chests (Bound), including Unique, Epic and Rare variants"]},
  {"id":"210330040","name":"Splendent Wise Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"102","required":"45","equipType":"Helmet","defense":"654","hp":"255","pool":"3:unique100","sockets":"4","selections":"5","binding":"Bind on Equip","faction":"Elyos","sell":"74,747 Gold","enchant":"+15","upgrade":"At +15: Defense 513, HP 180; Exceed to +5: Defense 250, HP 250, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"KR/TW Tailoring Lv 85 combo proc from Wise Dragon Lord Helm (25%); not craftable in Global client as of 2026-09-19","obtain":["Global client lists Armorsmithing Table (Light), Verteron; recipe contents are not yet in Global client data"]},
  {"id":"210330041","name":"Splendent Ebony Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"102","required":"45","equipType":"Helmet","defense":"654","hp":"255","pool":"3:unique100","sockets":"4","selections":"5","binding":"Bind on Equip","faction":"Asmodians","sell":"74,747 Gold","enchant":"+15","upgrade":"At +15: Defense 513, HP 180; Exceed to +5: Defense 250, HP 250, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"KR/TW Tailoring Lv 85 combo proc from Ebony Dragon Lord Helm (25%); not craftable in Global client as of 2026-09-19","obtain":["Global client lists Armorsmithing Table (Dark), Verteron; recipe contents are not yet in Global client data"]},
  {"id":"210330033","name":"Transcendent Helm","category":"Helmet","grade":"Unique","level":"43","required":"37","equipType":"Helmet","defense":"272","hp":"108","pool":"3:unique40","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"1,166 Gold","enchant":"+15","upgrade":"At +15: Defense 214, HP 76","obtain":["Transcendent Armor Selection Chest (Bound)"]},
  {"id":"210330034","name":"Bakarma Helm","category":"Helmet","grade":"Unique","level":"54","required":"45","equipType":"Helmet","defense":"343","hp":"135","pool":"3:unique45","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"30,000 Gold","enchant":"+15","upgrade":"At +15: Defense 269, HP 96; Exceed to +1: Defense 27, HP 27, Damage Tolerance 0.5%, HP increase 0.5%","obtain":["Global reference (alternate item #210330038): Abyssal Forge: Ludra raid reward; Party Dungeon; Draupnir: Armor Selection Chest (Bound); Bakarma Armor Selection Chest (Bound)","KR/TW reference for item #210330034: Transcendent Bakarma (Lv 45 and Lv 70) in Draupnir, Eternal Ludra (Lv 76) in Abyssal Forge: Ludra; no Global acquisition listed for item #210330034"]},
  {"id":"210330030","name":"Archon Decanus Helm","category":"Helmet","grade":"Unique","level":"62","required":"40","equipType":"Helmet","defense":"395","hp":"155","pool":"3:unique45","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"10,512 Gold","enchant":"+15","upgrade":"At +15: Defense 310, HP 110; Exceed to +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","setBonus":"KR/TW only: Archon Decanus Tribulation — 2 pieces: Abyss PvE Damage Boost 15%, PvE Damage Boost -5%; 5 pieces: Abyss PvE Damage Boost 20%, PvE Damage Boost -5%. Not in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists Trade Shop for 52,600 Abyss Points"]},
  {"id":"210330031","name":"Archon Centurion Helm","category":"Helmet","grade":"Unique","level":"78","required":"45","equipType":"Helmet","defense":"499","hp":"195","pool":"3:unique70","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"34,119 Gold","enchant":"+15","upgrade":"At +15: Defense 391, HP 138; Exceed to +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","setBonus":"KR/TW only: Archon Centurion Tribulation — 2 pieces: Abyss PvE Damage Boost 15%, PvP Damage Boost 5%, PvE Damage Boost -5%; 5 pieces: Abyss PvE Damage Boost 20%, PvP Damage Tolerance 5%, PvE Damage Boost -5%; 8 pieces: Abyss PvE Damage Boost 25%, PvE Damage Boost -5%. Not in Global reference.","crafting":"Korea/Taiwan only, Tailoring: Abyss Points ×150,000, Silver Medal of Merit ×20. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists Trade Shop for 170,600 Abyss Points and crafting at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330032","name":"Archon Tribunus Helm","category":"Helmet","grade":"Unique","level":"94","required":"45","equipType":"Helmet","defense":"603","hp":"235","pool":"3:unique90","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"97,625 Gold","enchant":"+15","upgrade":"At +15: Defense 472, HP 166; Exceed to +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","setBonus":"KR/TW only: Archon Tribunus Tribulation — 2 pieces: Abyss PvE Damage Boost 20%, PvP Damage Boost 5%, PvE Damage Boost -5%; 5 pieces: Abyss PvE Damage Boost 25%, PvP Damage Tolerance 5%, PvE Damage Boost -5%; 8 pieces: Abyss PvE Damage Boost 30%, PvP Damage Boost 5%, PvE Damage Boost -5%; 12 pieces: Abyss PvE Damage Boost 35%, PvP Damage Tolerance 5%, PvE Damage Boost -5%. Not in Global reference.","crafting":"Korea/Taiwan only, Tailoring: Abyss Points ×400,000, Gold Medal of Merit ×50. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists Trade Shop for 488,200 Abyss Points and crafting at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330026","name":"Guardian Decanus Helm","category":"Helmet","grade":"Unique","level":"62","required":"40","equipType":"Helmet","defense":"395","hp":"155","pool":"3:unique45","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"10,512 Gold","enchant":"+15","upgrade":"At +15: Defense 310, HP 110; Exceed to +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","setBonus":"KR/TW only: Guardian Decanus Tribulation — 2 pieces: Abyss PvE Damage Boost 15%, PvE Damage Boost -5%; 5 pieces: Abyss PvE Damage Boost 20%, PvE Damage Boost -5%. Not in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists Trade Shop for 52,600 Abyss Points"]},
  {"id":"210330027","name":"Guardian Centurion Helm","category":"Helmet","grade":"Unique","level":"78","required":"45","equipType":"Helmet","defense":"499","hp":"195","pool":"3:unique70","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"34,119 Gold","enchant":"+15","upgrade":"At +15: Defense 391, HP 138; Exceed to +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","setBonus":"KR/TW only: Guardian Centurion Tribulation — 2 pieces: Abyss PvE Damage Boost 15%, PvP Damage Boost 5%, PvE Damage Boost -5%; 5 pieces: Abyss PvE Damage Boost 20%, PvP Damage Tolerance 5%, PvE Damage Boost -5%; 8 pieces: Abyss PvE Damage Boost 25%, PvE Damage Boost -5%. Not in Global reference.","crafting":"Korea/Taiwan only, Tailoring: Abyss Points ×150,000, Silver Medal of Merit ×20. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists Trade Shop for 170,600 Abyss Points and crafting at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330028","name":"Guardian Tribunus Helm","category":"Helmet","grade":"Unique","level":"94","required":"45","equipType":"Helmet","defense":"603","hp":"235","pool":"3:unique90","sockets":"4","selections":"4","binding":"Bind on Pickup","sell":"97,625 Gold","enchant":"+15","upgrade":"At +15: Defense 472, HP 166; Exceed to +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","setBonus":"KR/TW only: Guardian Tribunus Tribulation — 2 pieces: Abyss PvE Damage Boost 20%, PvP Damage Boost 5%, PvE Damage Boost -5%; 5 pieces: Abyss PvE Damage Boost 25%, PvP Damage Tolerance 5%, PvE Damage Boost -5%; 8 pieces: Abyss PvE Damage Boost 30%, PvP Damage Boost 5%, PvE Damage Boost -5%; 12 pieces: Abyss PvE Damage Boost 35%, PvP Damage Tolerance 5%, PvE Damage Boost -5%. Not in Global reference.","crafting":"Korea/Taiwan only, Tailoring: Abyss Points ×400,000, Gold Medal of Merit ×50. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists Trade Shop for 488,200 Abyss Points and crafting at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330023","name":"Wise Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"94","required":"45","equipType":"Helmet","defense":"603","hp":"235","pool":"3:unique90","sockets":"4","selections":"5","sell":"38,016 Gold","enchant":"+15","upgrade":"At +15: Defense 472, HP 166; Exceed to +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","faction":"Elyos","crafting":"Korea/Taiwan only, Tailoring Lv 85: Artisan's Splendent Orichalcum Helm ×3, Artisan's Ultimate Refining Stone ×7, Tanned Durable Balaur Leather ×17, Wrathful Mind ×2, Wrathful Will ×4, Wrathful Ego ×9, Radiant Orichalcum Ore ×15, Radiant Odyle ×9; 25% Combo chance. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists crafting at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330024","name":"Ebony Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"94","required":"45","equipType":"Helmet","defense":"603","hp":"235","pool":"3:unique90","sockets":"4","selections":"5","sell":"38,016 Gold","enchant":"+15","upgrade":"At +15: Defense 472, HP 166; Exceed to +5: Defense 230, HP 230, Damage Tolerance 2.5%, HP increase 2.5%","faction":"Asmodians","crafting":"Korea/Taiwan only, Tailoring Lv 85: Artisan's Splendent Orichalcum Helm ×3, Artisan's Ultimate Refining Stone ×7, Tanned Durable Balaur Leather ×17, Wrathful Mind ×2, Wrathful Will ×4, Wrathful Ego ×9, Radiant Orichalcum Ore ×15, Radiant Odyle ×9; 25% Combo chance. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists crafting at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330019","name":"Star Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"62","required":"45","equipType":"Helmet","defense":"395","hp":"155","pool":"3:unique45","sockets":"4","selections":"5","faction":"Asmodians","sell":"12,878 Gold","enchant":"+15","upgrade":"At +15: Defense 310, HP 110; Exceed to +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 55: Artisan's Splendent Orichalcum Helm ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2; 25% Combo chance","obtain":["Craft at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330020","name":"Dark Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"78","required":"45","equipType":"Helmet","defense":"499","hp":"195","pool":"3:unique70","sockets":"4","selections":"5","faction":"Asmodians","sell":"22,126 Gold","enchant":"+15","upgrade":"At +15: Defense 391, HP 138; Exceed to +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Korea/Taiwan only, Tailoring Lv 70: Artisan's Splendent Orichalcum Helm ×2, Artisan's Ultimate Refining Stone ×3, Tanned Hard Balaur Leather ×12, Wrathful Mind ×3, Wrathful Will ×6, Radiant Orichalcum Ore ×8, Radiant Odyle ×5; 25% Combo chance. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists crafting at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330021","name":"Splendent Star Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"70","required":"45","equipType":"Helmet","defense":"447","hp":"175","pool":"3:unique65","sockets":"4","selections":"5","faction":"Asmodians","sell":"25,320 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124; Exceed to +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Tailoring Lv 55: 25% Combo result of Star Dragon Lord Helm, using Artisan's Splendent Orichalcum Helm ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2","obtain":["Craft at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330022","name":"Splendent Dark Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"86","required":"45","equipType":"Helmet","defense":"551","hp":"215","pool":"3:unique80","sockets":"4","selections":"5","faction":"Asmodians","sell":"43,504 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152; Exceed to +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"Korea/Taiwan only, Tailoring Lv 70: 25% Combo result of Dark Dragon Lord Helm, using Artisan's Splendent Orichalcum Helm ×2, Artisan's Ultimate Refining Stone ×3, Tanned Hard Balaur Leather ×12, Wrathful Mind ×3, Wrathful Will ×6, Radiant Orichalcum Ore ×8, Radiant Odyle ×5. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists crafting at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330017","name":"Splendent True Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"70","required":"45","equipType":"Helmet","defense":"447","hp":"175","pool":"3:unique65","sockets":"4","selections":"5","faction":"Elyos","sell":"25,320 Gold","enchant":"+15","upgrade":"At +15: Defense 351, HP 124; Exceed to +3: Defense 103, HP 103, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Tailoring Lv 55: 25% Combo result of True Dragon Lord Helm, using Artisan's Splendent Orichalcum Helm ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2","obtain":["Craft at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330018","name":"Splendent White Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"86","required":"45","equipType":"Helmet","defense":"551","hp":"215","pool":"3:unique80","sockets":"4","selections":"5","faction":"Elyos","sell":"43,504 Gold","enchant":"+15","upgrade":"At +15: Defense 432, HP 152; Exceed to +5: Defense 210, HP 210, Damage Tolerance 2.5%, HP increase 2.5%","crafting":"Korea/Taiwan only, Tailoring Lv 70: 25% Combo result of White Dragon Lord Helm using Artisan's Splendent Orichalcum Helm ×2, Artisan's Ultimate Refining Stone ×3, Tanned Hard Balaur Leather ×12, Wrathful Mind ×3, Wrathful Will ×6, Radiant Orichalcum Ore ×8, Radiant Odyle ×5. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists crafting at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330013","name":"Artisan's Splendent Orichalcum Helm (Elyos)","category":"Helmet","grade":"Unique","level":"44","required":"34","equipType":"Helmet","defense":"279","hp":"110","pool":"3:unique40","sockets":"4","faction":"Elyos","sell":"1,428 Gold","enchant":"+15","upgrade":"At +15: Defense 219, HP 78","crafting":"Tailoring Lv 30: Expert's Splendent Orichalcum Helm ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2; 25% Combo chance","obtain":["Craft at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330014","name":"Artisan's Splendent Orichalcum Helm (Asmodians)","category":"Helmet","grade":"Unique","level":"44","required":"34","equipType":"Helmet","defense":"279","hp":"110","pool":"3:unique40","sockets":"4","faction":"Asmodians","sell":"1,428 Gold","enchant":"+15","upgrade":"At +15: Defense 219, HP 78","crafting":"Tailoring Lv 30: Expert's Splendent Orichalcum Helm ×1, Artisan's Refining Stone ×2, Pure Orichalcum Ore ×3, Pure Odyle ×2; 25% Combo chance","obtain":["Craft at an Armorsmithing Table (Dark) in Verteron"]},
  {"id":"210330015","name":"True Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"62","required":"45","equipType":"Helmet","defense":"395","hp":"155","pool":"3:unique45","sockets":"4","selections":"5","faction":"Elyos","sell":"12,878 Gold","enchant":"+15","upgrade":"At +15: Defense 310, HP 110; Exceed to +1: Defense 31, HP 31, Damage Tolerance 0.5%, HP increase 0.5%","crafting":"Tailoring Lv 55: Artisan's Splendent Orichalcum Helm ×1, Artisan's Ultimate Refining Stone ×2, Tanned Thick Balaur Leather ×9, Wrathful Mind ×4, Radiant Orichalcum Ore ×3, Radiant Odyle ×2; 25% Combo chance","obtain":["Craft at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330016","name":"White Dragon Lord Helm","category":"Helmet","grade":"Unique","level":"78","required":"45","equipType":"Helmet","defense":"499","hp":"195","pool":"3:unique70","sockets":"4","selections":"5","faction":"Elyos","sell":"22,126 Gold","enchant":"+15","upgrade":"At +15: Defense 391, HP 138; Exceed to +3: Defense 114, HP 114, Damage Tolerance 1.5%, HP increase 1.5%","crafting":"Korea/Taiwan only, Tailoring Lv 70: Artisan's Splendent Orichalcum Helm ×2, Artisan's Ultimate Refining Stone ×3, Tanned Hard Balaur Leather ×12, Wrathful Mind ×3, Wrathful Will ×6, Radiant Orichalcum Ore ×8, Radiant Odyle ×5; 25% Combo chance. Not craftable in Global reference.","obtain":["No Global acquisition data; Korea/Taiwan client lists crafting at an Armorsmithing Table (Light) in Verteron"]},
  {"id":"210330010","name":"Tranquility Helm","category":"Helmet","grade":"Unique","level":"36","required":"30","equipType":"Helmet","defense":"227","hp":"90","pool":"3:unique30","sockets":"4","sell":"726 Gold","enchant":"+15","upgrade":"At +15: Defense 178, HP 64","obtain":["Global acquisition data unavailable; KR/TW client lists Abyss Swarm, Abyss Swarm Colony, Abyss Drana Slime and Abyss Drana Skama in Chaotic Upper Reshanta"]},
  {"id":"210330011","name":"Courage Helm","category":"Helmet","grade":"Unique","level":"41","required":"35","equipType":"Helmet","defense":"259","hp":"103","pool":"3:unique35","sockets":"4","sell":"1,018 Gold","enchant":"+15","upgrade":"At +15: Defense 204, HP 73","obtain":["Defeat monsters in Chaotic Lower Reshanta"]},
  {"id":"210330012","name":"Fallen Ancient God Helm","category":"Helmet","grade":"Unique","level":"46","required":"40","equipType":"Helmet","defense":"292","hp":"115","pool":"3:unique40","sockets":"4","sell":"1,428 Gold","enchant":"+15","upgrade":"At +15: Defense 229, HP 82","obtain":["Defeat named bosses and monsters in Chaotic Lower Reshanta"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260029","name":"Facade Greaves","level":"16","defense":"108","hp":"48","pool":"2:quest16hp29","sell":"42 Gold","upgrade":"At +5: Defense 26, HP 10","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Transformation Prep (Lv 19)"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260030","name":"Old Mercenary Commander Greaves","level":"9","defense":"58","hp":"27","pool":"2:quest9hp27","sell":"26 Gold","upgrade":"At +5: Defense 14, HP 6","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Contaminated Area (Lv 11)"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260031","name":"Outsider Greaves","level":"16","defense":"108","hp":"48","pool":"2:quest16hp29","sell":"42 Gold","upgrade":"At +5: Defense 26, HP 10","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Malice Laid Bare (Lv 18)"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260025","name":"Earth Greaves","level":"20","required":"20","defense":"137","hp":"60","pool":"2:common18","sell":"55 Gold","upgrade":"At +5: Defense 33, HP 12","obtain":["Drop from monsters in the Global client"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260026","name":"Twilight Greaves","level":"2","defense":"7","hp":"6","pool":"2:quest2hp26","sell":"16 Gold","upgrade":"At +5: Defense 5, HP 5","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Making Yourself Useful (Lv 2)"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260027","name":"Strange Karma Greaves","level":"2","defense":"7","hp":"6","pool":"2:quest2hp26","sell":"16 Gold","upgrade":"At +5: Defense 5, HP 5","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Prepare to Escape (Lv 2)"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260028","name":"Dawn Greaves","level":"9","defense":"58","hp":"27","pool":"2:quest9hp27","sell":"26 Gold","upgrade":"At +5: Defense 14, HP 6","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Valley of Hope (Lv 12)"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260023","name":"Orichalcum Greaves (Elyos)","level":"18","required":"16","defense":"166","hp":"72","pool":"2:common18","sell":"63 Gold","upgrade":"At +5: Defense 29, HP 11","faction":"Elyos","crafting":"Tailoring Lv 3 · Orichalcum Ingot ×2, Strong Leather ×3, Refining Stone ×2, Odyle ×1; 25% combo chance","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"category":"Pants","grade":"Common","equipType":"Pants","sockets":"1","enchant":"+5","id":"210260024","name":"Orichalcum Greaves (Asmodians)","level":"18","required":"16","defense":"166","hp":"72","pool":"2:common18","sell":"63 Gold","upgrade":"At +5: Defense 29, HP 11","faction":"Asmodians","crafting":"Tailoring Lv 3 · Orichalcum Ingot ×2, Strong Leather ×3, Refining Stone ×2, Odyle ×1; 25% combo chance","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250067","name":"Aed Greaves","obtain":["Drop: Black Warrior Aed (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250068","name":"Rajit Greaves","obtain":["Drop: Faithful Rajit (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250069","name":"Vargor Greaves","obtain":["Drop: Berserker Vargor (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250070","name":"Lannar Greaves","obtain":["Drop: Blood Warrior Lannar (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250056","name":"Neikel Greaves","obtain":["Drop: Neikel of the East (Lv 45 world boss)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250057","name":"Kutar Greaves","obtain":["Drop: Rotten Kutar (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250058","name":"Korin Greaves","obtain":["Drop: Blooming Korin (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","id":"210250059","name":"Teegant Greaves","obtain":["Drop: Bodyguard Teegant (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250027","name":"Wind Breeze Greaves","level":"21","defense":"144","hp":"63","pool":"2:quest21","sell":"89 Gold","upgrade":"At +5: Defense 34, HP 13","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Best Served Cold (Lv 25)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250034","name":"Chaser Greaves","level":"21","defense":"144","hp":"63","pool":"2:quest21","sell":"89 Gold","upgrade":"At +5: Defense 34, HP 13","binding":"Bound","fixedImprints":true,"obtain":["Quest reward: Voice of Rage (Lv 25)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250046","name":"Kernon Greaves","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","obtain":["Drop: Kernon of the West (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250051","name":"Danar Greaves","level":"35","required":"35","defense":"245","hp":"105","pool":"2:rare35","sell":"306 Gold","upgrade":"At +5: Defense 58, HP 21","obtain":["Drop: Melted Danar (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250014","name":"Splendent Orichalcum Greaves (Elyos)","level":"22","required":"16","defense":"151","hp":"66","pool":"2:rare25","sell":"127 Gold","upgrade":"At +5: Defense 36, HP 13","faction":"Elyos","crafting":"Tailoring Lv 3 · Orichalcum Ingot ×2, Strong Leather ×3, Refining Stone ×2, Odyle ×1; 25% combo chance","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250015","name":"Expert's Orichalcum Greaves (Elyos)","level":"26","required":"28","defense":"252","hp":"108","pool":"2:rare30","sell":"286 Gold","upgrade":"At +5: Defense 43, HP 16","faction":"Elyos","crafting":"Tailoring Lv 15 · Splendent Orichalcum Greaves ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×2; 25% combo chance","obtain":["Craft at the Light Armorsmithing Table in Verteron"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250016","name":"Splendent Orichalcum Greaves (Asmodians)","level":"22","required":"16","defense":"151","hp":"66","pool":"2:rare25","sell":"127 Gold","upgrade":"At +5: Defense 36, HP 13","faction":"Asmodians","crafting":"Tailoring Lv 3 · Orichalcum Ingot ×2, Strong Leather ×3, Refining Stone ×2, Odyle ×1; 25% combo chance","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","id":"210250017","name":"Expert's Orichalcum Greaves (Asmodians)","level":"26","required":"28","defense":"252","hp":"108","pool":"2:rare30","sell":"286 Gold","upgrade":"At +5: Defense 43, HP 16","faction":"Asmodians","crafting":"Tailoring Lv 15 · Splendent Orichalcum Greaves ×1, Expert's Refining Stone ×2, Fine Orichalcum Ore ×3, Fine Odyle ×2; 25% combo chance","obtain":["Craft at the Dark Armorsmithing Table in Verteron"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"20","required":"20","defense":"137","hp":"60","pool":"2:rare20","sell":"111 Gold","upgrade":"At +5: Defense 33, HP 12","id":"210250011","name":"Frontline Greaves","obtain":["Acquisition route not listed in the Global client snapshot"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"25","required":"25","defense":"173","hp":"75","pool":"2:rare25","sell":"156 Gold","upgrade":"At +5: Defense 41, HP 15","id":"210250012","name":"Intruder Greaves","obtain":["Acquisition route not listed in the Global client snapshot"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"30","required":"30","defense":"209","hp":"90","pool":"2:rare30","sell":"218 Gold","upgrade":"At +5: Defense 50, HP 18","id":"210250013","name":"Vagabond Greaves","obtain":["Drop: various creatures, including Argo, the Spirit King and Guardian Lord Nahma (Lv 65 world bosses, Chaotic Lower Reshanta)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"20","required":"20","defense":"137","hp":"60","pool":"2:rare20","sell":"111 Gold","upgrade":"At +5: Defense 33, HP 12","id":"210250004","name":"Ethereal Greaves","obtain":["Drop: various creatures, including Neikel of the East and Rotten Kutar (Lv 45 world bosses)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"25","required":"25","defense":"173","hp":"75","pool":"2:rare25","sell":"156 Gold","upgrade":"At +5: Defense 41, HP 15","id":"210250005","name":"Comet Greaves","obtain":["Drop: various creatures, including Neikel of the East and Rotten Kutar (Lv 45 world bosses)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"20","required":"20","defense":"137","hp":"60","pool":"2:rare20","sell":"111 Gold","upgrade":"At +5: Defense 33, HP 12","id":"210250009","name":"Chaos Greaves","obtain":["Drop: various creatures, including Melted Danar, Black Warrior Aed and Faithful Rajit (Lv 45 world bosses, Altgard)"]},
  {"category":"Pants","grade":"Rare","equipType":"Pants","sockets":"2","enchant":"+5","level":"15","required":"15","defense":"101","hp":"45","pool":"2:rare","sell":"79 Gold","upgrade":"At +5: Defense 24, HP 9","id":"210250003","name":"Rainy Forest Greaves","obtain":["Drop: Marsh Targon, Ellun River Sylphen and other creatures (Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240089","name":"Shylak Greaves","obtain":["Drop: Sharp Shylak (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240082","name":"Setram Greaves","obtain":["Drop: Researcher Setram (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240083","name":"Kasia Greaves","obtain":["Drop: Phantasm Kasia (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240086","name":"Shujakan Greaves","obtain":["Drop: Veteran Shujakan (Lv 45 world boss)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240087","name":"Karuka Greaves","obtain":["Drop: Visionary Karuka (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240088","name":"Vishwada Greaves","obtain":["Drop: Dark Shadow Vishwada (Lv 45 world boss, Altgard)"]},

  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240077","name":"Axios Greaves","obtain":["Drop: Specter Archon Axios (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240078","name":"Hardirun Greaves","obtain":["Drop: Addicted Hardirun (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240079","name":"Barthien Greaves","obtain":["Drop: Executioner Barthien (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240080","name":"Guruta Greaves","obtain":["Drop: Drakan Battalion Weapon Guruta (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240081","name":"K'nash Greaves","obtain":["Drop: Sentinel K'nash (Lv 45 world boss, Verteron)"]},

  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240072","name":"Ansas Greaves","obtain":["Drop: Divine Ansas (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240073","name":"Moshav Greaves","obtain":["Drop: Harvest Manager Moshav (Lv 45 world boss, Verteron)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240074","name":"Resana Greaves","obtain":["Drop: Advisor Resana (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240075","name":"Linx Greaves","obtain":["Drop: Special Operations Leader Linx (Lv 45 world boss, Altgard)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","binding":"Bind on Pickup","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240128","name":"Linx Greaves","obtain":["Found in chest: Linx\u0027s Loot Chest (Bound)"]},
  {"category":"Pants","grade":"Epic","equipType":"Pants","sockets":"3","enchant":"+10","level":"40","required":"37","defense":"281","hp":"120","pool":"2:epicCraft40","sell":"700 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210240076","name":"Newbold Greaves","obtain":["Drop: Desecrator Newbold (Lv 45 world boss, Altgard)"]},

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
    "id": "210640092",
    "name": "Elder Boots",
    "category": "Boots",
    "grade": "Epic",
    "level": "23",
    "required": "20",
    "equipType": "Boots",
    "defense": "127",
    "hp": "46",
    "pool": "3:boots23",
    "sockets": "3",
    "sell": "185 Gold",
    "enchant": "+10",
    "upgrade": "At +10: Defense 75, HP 28",
    "binding": "Bind on Pickup",
    "obtain": [
      "Field event: Jump Jump",
      "Field event: Wraith Evasion",
      "Field event: Mysterious Track",
      "Field event: Hidden Lugi",
      "Field event: Odyle Flight Frenzy",
      "Field event: Goldrin's Treasure",
      "Field event: Defend Shugo Merchants",
      "Field event: Up! Up! Up!",
      "Field event: Not This Tile?"
    ]
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
  },
  {"category":"Boots","grade":"Epic","equipType":"Boots","sockets":"3","enchant":"+10","selections":"3","level":"40","required":"37","defense":"225","hp":"80","pool":"3:bootsArtisan40","binding":"Bind on Pickup","sell":"583 Gold","upgrade":"At +10: Defense 133, HP 47","id":"210640136","name":"Kasia Boots","obtain":["Found in chest: Kasia\u0027s Loot Chest (Bound)"]},
];
const pairs = (entries) => entries.map(([label, value]) => ({label, value}));
const GLOBAL_207_SYNC = new Set(["210230015","210230017"]);
const AION2HUB_MANUAL_SYNC = new Set(["210640096","210640097","210640098","210640099","210640100","210640101","210640102","210640103","210640104","210640111","210640112","210640113","210640114","210640115","210640116","210640117","210640118","210640119","210640120","210640121","210640122","210640123","210640124","210640125","210640126","210640127","210640128","210640129","210640130","210640131","210640132","210640133","210640134","210640135","210640136","210640137","210640138","210640139","210640140","210240128"]);
const aion2HubManualSource = {
  name: "AION2 Hub item database (manual reference)",
  region: "Global Launch Scale Test snapshot",
  capturedAt: "2026-10-25",
  dataSnapshotAt: "2026-09-19",
  official: false,
  status: "MANUALLY_REVIEWED"
};
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
    ...(item.setBonus ? [{label: "Set bonus", value: item.setBonus}] : []),
    {label: "Sell price", value: item.sell},
    {label: "Enchantable to", value: item.enchant},
    {label: "Region/version", value: "Global Launch Scale Test client · 2026-09-19"},
  ],
  upgrades: item.upgrade,
  obtain: item.obtain,
  verificationStatus: AION2HUB_MANUAL_SYNC.has(item.id) ? "MANUALLY_REVIEWED" : GLOBAL_207_SYNC.has(item.id) ? "GLOBAL_207_CROSSCHECKED" : "",
  source: AION2HUB_MANUAL_SYNC.has(item.id) ? aion2HubManualSource : GLOBAL_207_SYNC.has(item.id) ? current207Source : {
    name: "AION 2 VISION independent item database",
    region: "Global Launch Scale Test snapshot",
    capturedAt: "2026-09-19",
    official: false,
  },
}));
