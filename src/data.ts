import dedent from "dedent";

export const QUESTION_DATA: [
  string,
  {
    markdown: string;
    question: string;
    answers?: string[];
    keepCase?: boolean;
    correct: number | string | ((value: string) => boolean);
  }
][] = [
  [
    "start",
    {
      markdown: dedent`
        # the metric system is a better system

        Pros of using metric:

        - Everyone in the world (except in US) will understand you
        - Working out things in your head becomes a lot easier
        - You're almost never need a calculator, as multiplying and dividing by 10 just means moving the decimal point

        Cons of using metric:

        - it forces you to come to terms with the idea that the French might have invented something useful

        ---

        ## Fail Case Study: Disneyland Tokyo

        Tokyo Disneyland's Space Mountain rollercoaster derailed in 2003 from a broken axle.
        
        Because of the metric-imperial conversion, the gap between the axle and surrounding wheels was 5 times what it should have been - luckily no-one was injured.
      `,
      question: "Which system is better?",
      answers: ["Metric", "Imperial"],
      correct: 0,
    },
  ],
  [
    "74a400b5",
    {
      markdown: dedent`
        # 10s

        10 in Latin is "decem".
        
        That's why December is the... err... 12th month?
        It actually was originally the 10th month, but Julius Caesar added "July" and Augustus Caesar added "August" because they were SUPER obsessed with themselves.

        Anyway, the modern world uses decimal digits: \`0123456789\`.
        There are 10 digits (including 0), which is why it is called the decimal system.

        > **Fun fact:** there's nothing special about 10. Society could have chosen a different number and used that instead.
        > The Babylonians chose 60:
        > 
        > ![](https://blogs.scientificamerican.com/blogs/assets/File/Babylonian_numerals.jpg)
        >
        > This number system is why there are 60 seconds in a minute, and 60 minutes in an hour.

        So, because 10 is the number we chose for our number system, we can multiply and divide by 10 just by moving the decimal point.

        \`\`\`
        0.03 = …00.0300000…
         0.3 = …000.300000…
           3 = …00003.0000…
          30 = …000030.000…
         300 = …0000300.00…
        \`\`\`

        So it made total sense when people were like, why don't we just use this for every single measurement?
      `,
      question: "Why do we work in 10s for metric units?",
      answers: [
        "Because Julius Caesar",
        "Because we use Arabic numbers",
        "Because it makes adding and subtracting easier",
      ],
      correct: 1,
    },
  ],
  [
    "368628e2",
    {
      markdown: dedent`
        # the stuff you should already know

        In the US, the metric system is used in science. This is because scientists are smart.
        
        As such, many people will already be familiar with some "decimal unit prefixes" - like **kilo**.

        \`\`\`
        mega = M = 1,000,000
        kilo = k =     1,000
                           1
                           0.001     = m   = milli
                           0.000,001 = μ,u = micro
        \`\`\`

        People often confuse mega, milli and micro.

        - **mega** means big. **"Mega Millions"** is a helpful way of remembering that mega = million.
        - **milli** and **micro** means small, but
          - **milli**: **millipedes** have 1,000 legs ~> 1 thousandth
          - **micro**: **microbes** ~> there must be millions of microbes ~> 1 millionth

        ---

        Because science often involves the very large and very small, having these units jump in thousands
        is useful to scientists, but not so much to you and me in day-to-day life.
      `,
      question:
        "How many grams is 3 megamicromilligrams (Mumg)? (a fictional unit!)",
      correct: (str: string): boolean => {
        const s = str.replace(/ +/g, "");
        return s === "0.003" || s === "0.003g" || s === "0.003grams";
      },
    },
  ],
  [
    "330e3d9d",
    {
      markdown: dedent`
        # the useful stuff you don't know

        \`\`\`
        kilo = k = 1,000
                       1
                       0.001 = m = milli
        \`\`\`

        Looking at these units, it sure would be convenient to have some smaller jumps!

        A normal size ruler could be described as 300 millimetres (mm) long, or 0.3 metres (m) long.
        
        But for some reason, humans gravitate towards a unit closer to the scale, and so more decimal
        units fill in these gaps.

        \`\`\`
        kilo = k = 1,000
        ------------------------------------------
         ??? = ? =   100
         ??? = ? =    10
                       1
                       0.1   = d = deci
                       0.01  = c = centi
        ------------------------------------------
                       0.001 = m = milli
        \`\`\`

        The question marks are because the prefixes for 10 and 100 are so rare I had to learn them for this!

        People clearly prefer to say "10 metres" than "1 _decametre_", and "100 metres" than "1 _hectometre_".

        However, **deci** and **centi** are quite common.

        Notably:

        - short lengths that might be measured in inches in imperial are primarily measured in centimetres
        - some bottles of wine give their volume in centilitres
        - 1 centimetre is equivalent to a 1 percent of a metre
        - decibels are 1 tenth of a "bel" (who knew?)
      `,
      question:
        "DVDs have a diameter of 0.12m. If you asked a metric user to measure one, what would their response most likely be?",
      correct: (str: string): boolean => {
        const s = str.replace(/ +/g, "");
        return (
          s === "12cm" || s === "12centimetres" || s === "twelvecentimetres"
        );
      },
    },
  ],
  [
    "d0611baa",
    {
      markdown: dedent`
        # human heights

        In metric countries, heights are typically given in centimetres or metres.

        In spoken form, they can sometimes be pronounced identically:

        - 171cm ~> "one seventy one"
        - 1.71m ~> "one seventy one"

        As such, the unit is often omitted - similar to feet and inches. "5 foot 9 inches"
        is said "five nine".

        Sometimes, it is a bit ambiguous, and so the unit might be clarified:
        
        - 170cm ~> "one seventy" (common)
        - 1.7m ~> "one point seven (metres)" (less common)

        ## Heights in centimetres

        The average man (worldwide) is 172cm tall, and the average woman (worldwide) is 160cm.
        Different countries have different averages, with variations of up to ±10cm.

        Good reference points for converting heights are:
        
        - **150cm** is 4' 11"
        - Five feet is **152cm**
        - **160cm** is 5' 3"
        - **170cm** is 5' 7"
        - **180cm** is 5' 11"
        - Six feet is **183cm**
        - **190cm** is 6' 3"
        - **200cm** is 6' 7"

        **1 inch ≈ 2.5cm**, which can be used to interpolate between these numbers.

        Note that 10cm jumps match almost perfectly to 4" jumps, so memorising just 1 reference point
        will be enough to work it out.
      `,
      question: "If you are 5 foot 5, how many centimetres tall are you?",
      answers: [
        "160cm",
        "161cm",
        "162cm",
        "163cm",
        "164cm",
        "165cm",
        "166cm",
        "167cm",
        "168cm",
        "169cm",
        "170cm",
      ],
      correct: 5,
    },
  ],
  [
    "2c8c9831",
    {
      markdown: dedent``,
      question:
        "Ambush question! You worked out that 5 foot 5 was about 165cm! How much is 165cm in millimetres? (include the unit abbreviation!)",
      correct: "1650mm",
    },
  ],
  [
    "e504344b",
    {
      markdown: dedent`
        # human weights

        In metric countries, metric weights are always given in kilograms.

        Imperial is far more confusing:
        
        - In the US, pounds (lb) are used to measure a person's weight.
        - In the UK, there are two primary units:
          - stone and pounds (st lb); 1 stone (st) is 14 pounds (lb)
          - kilograms

        ## Weights in kilograms

        Different countries have VERY different average weights. The average for Bangladeshi women is 50kg (110lb), whereas the average for Tongan women is almost double: 98kg (215lb).

        The vast majority of people worldwide weigh between 50kg and 100kg.

        Good reference points for converting weights are:
        
        - **50kg** is 110lb
        - **75kg** is 165lb  
          (mnemonic: \[7\]\[5\] = \[1 + 6\]\[5\])
        - **100kg** is 220lb
        - 10st = 140lb ≈ **64kg**  
          (mnemonic: one thought he \[140\] ate \[8\] too \[2\] little ~> 140:8² ~> 140:64)

        Kilograms to pounds isn't too hard:

        - **10kg ≈ 22lb**
        - **5kg ≈ 11lb**
        - general pattern: double it, then add 10% to the result
          - double 10kg: (10 + 10) = 20
          - add 10%: (20 + 10%) ≈ 22lb

        Pounds to kilograms is a bit trickier:
        
        - **20lb ≈ 9kg**
        - general pattern: half it, then subtract 10% from the result
          - half 20lb: (20 ÷ 2) = 10
          - subtract 10%: (10 - 10%) ≈ 9kg

        ---------

        > Before continuing, spend some time absorbing these conversions to memory!
        >
        > ![](https://c.tenor.com/FU4YSSfJG0QAAAAC/spongebob-squarepants.gif)
      `,
      question:
        "How much heavier (in kg) is a 200 lb person than a 10 stone person? (aim for a quick approximation, accepted if close enough)",
      correct: (str: string): boolean => {
        const n = parseInt(
          str.replace(/ +/g, "").replace(/k(ilo)g(ram)s?$/, "")
        );
        return 25 <= n && n <= 30;
      },
    },
  ],
  [
    "1b3632f1",
    {
      markdown: dedent`
      > Explanation:
      > 
      > **How much heavier (in kg) is a 200 lb person than a 10 stone person?**
      >
      > **(Step 1, stones to pounds)**  
      > 10st = 140lb
      >
      > **(Fast approximation method)**  
      > 200lb - 140lb = 60lb ≈ 30kg
      >
      > **(Closer approximation method)**  
      > 200lb - 140lb = 60lb ≈ (30kg - 10%) = 27kg
      >
      > **(Comparing full human weights)**  
      > 200lb ≈ (100kg - 10%) = 90kg  
      > 140lb ≈ (70kg - 10%) = 63kg  
      > 90kg - 63kg = 27kg
      >
      > Real answer: 27.2kg
    `,
      question: "What's 64kg in pounds? (Use the mnemonic from earlier!)",
      correct: (str: string): boolean => {
        const n = parseInt(str.replace(/ +/g, "").replace(/lbs?|pounds?$/, ""));
        return n === 140;
      },
    },
  ],
  [
    "29d03fb2",
    {
      markdown: dedent`
      > Explanation:
      > 
      > **What's 64kg in pounds?**
      >
      > (mnemonic: one thought he \[140\] ate \[8\] too \[2\] little ~> 140:8² ~> 140:64)

      # human temperatures

      Metric temperatures use Celsius (or Kelvin in scientific areas, which is the same scale as Celsius but 0°K refers to absolute zero instead)

      The freezing point of water at sea level is 0 Celsius (0°C).

      The boiling point of water at sea level is 100 Celsius (100°C).

      Clearly, this is more intuitive than Fahrenheit for most things, but weather is the most difficult thing to adjust to.

      ## Weather reference points
      
      - **-89°C = -192°F** | coldest temperature recorded on earth
      - **-40°C = -40°F**
      - **-18°C = 0°F** 
      - -10°C = 14°F
      - -5°C = 23°F
      - 5°C = 41°F
      - **10°C = 50°F** | exact and easy to remember
      - **14°C = 57°F** | average temperature on earth
      - 20°C = 68°F
      - 25°C = 77°F
      - 30°C = 86°F
      - (36-37°C) ≈ (97-100°F) | human body temperature
      - **54°C = 130°F** | hottest temperature recorded on earth

      Celsius to Fahrenheit isn't too hard:

      - every **change** of 5°C is **exactly** 9°F
      - approximation: **double it, then add 30**
        - example, convert 10°C to °F
          - double: (10 + 10) = 20
          - add 30: (20 + 30) ≈ 50°F

      Pounds to kilograms is a bit trickier:
      
      - approximation: **subtract 30, then halve it**
        - example, convert 50°F to °C
          - subtract 30: (50 - 30) ≈ 20
          - halve: 20 ÷ 2 = 20°C
    `,
      question:
        "The weather today is 27°C, with clear skies and no wind. What would be a sensible choice of clothing?",
      answers: [
        "don't go outside, you'll cook to death",
        "t-shirt and shorts",
        "a light jacket or a thin hoodie",
        "a big puffer jacket needed",
        "don't go outside, you'll freeze to death",
      ],
      correct: 1,
    },
  ],
  [
    "04619e0e",
    {
      markdown: dedent`
        # long distances

        Miles are used for road signs in the US, UK and most Caribbean islands.

        Everywhere else uses kilometres.

        ## How to convert

        - 5 miles ≈ 8 kilometres
          - which also means 50 miles per hour = 80 kilometres per hour
        - 1 mile ≈ 1.6 kilometres
        
        --- 

        ## Fuel efficiency

        In the UK and US, it is measured in miles per gallon (mpg). The UK and US gallons are different sizes, which is another reason the imperial system should be killed.

        Fuel efficiency of vehicles in metric countries is often measured in litres per 100 kilometres (L/100km).

        Note that this unit is inverted; it measures the fuel burn per distance, instead of the distance per fuel burn. This means lower is better.
      `,
      question:
        "Approximate how long a marathon is in kilometres. Assume a marathon is exactly 26 miles.",
      correct: (str: string): boolean => {
        const n = parseInt(
          str.replace(/ +/g, "").replace(/k(ilo)g(metre)s?$/, "")
        );
        return 40 <= n && n <= 45;
      },
    },
  ],
  [
    "9cb56c6a",
    {
      markdown: dedent`
        > Explanation:
        > 
        > **Approximate how long a marathon is in kilometres.**
        >
        > We know that **5 miles ≈ 8 kilometres**  
        > 5 x (5 miles) ≈ 5 x (8 kilometres)  
        > 25 miles ≈ 40 kilometres  
        > 1 + (25 miles) ≈ 1.6 + (40 kilometres)  
        > 26 miles ≈ 41.6 kilometres
        >
        > Real answer: 41.8km
        
        # finale: pro skills

        Metric units allow you to convert between seemingly unrelated units.

        Here are some useful tricks:

        - a metre is the same as 100cm, but **a square metre (1m²) is NOT 100cm²**!

          It is actually 10,000cm², as 100 * 100 = 10,000.

          ![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/zzwV9Iw3XN-gridzoomsmall.png?width=2400)
          
          This also means that 1m³ is 1,000,000cm³ as 100 * 100 * 100 = 1,000,000.

          People get caught out by this all of the time.

        - a 1m x 1m x 1m cube of water weighs exactly 1 metric ton (= 1000kg)

          It's advised to always call it a "metric ton" in English, as people frequently get metric tons (a.k.a. tonnes)
          and imperial tons confused.

          ![](https://www.unitedutilities.com/globalassets/images/in-page-images/cubic-metre-of-water.rs.gif)

        - a 10cm x 10cm x 10cm cube of water weights exactly 1kg and is exactly
          the same volume as 1 litre (by design)

          ![](https://www.theknittingphysicist.com/assets/images/floppy_cube.jpg)
          
          If you filled this with water it would weigh almost exactly 1 kg, as
          floppy disks are about 10cm wide and tall.
      `,
      question:
        "How many floppy disk cubes would you need to hold the contents of one of those giant 2L Coca-Cola bottles?",
      answers: ["1", "2", "4", "8", "10", "100", "1000"],
      correct: 1,
    },
  ],
];
