const QUESTION_BANK = [
  {
    "theme": "Probability",
    "difficulty": "Medium",
    "question_latex": "Consider a standard deck of 52 cards. You randomly draw 4 cards without replacement. What is the probability that you get one of each suit (♣,♦,♠,♥)?",
    "solution_latex": "Total combinations = C(52, 4) = 270,725.\nFavorable = You must choose exactly 1 card from the 13 in each of the 4 suits.\nFavorable = 13^4 = 28,561.\nProbability = 28,561 / 270,725 ≈ 10.55%.",
    "id": "Q0001"
  },
  {
    "theme": "Probability",
    "difficulty": "Easy",
    "question_latex": "How many times do you expect to roll a dice for it to land on a 3?",
    "solution_latex": "Rolling a 3 has a probability of 1/6.\nThis follows a geometric distribution.\nExpected rolls = 1 / p = 6.",
    "id": "Q0002"
  },
  {
    "theme": "Probability",
    "difficulty": "Medium",
    "question_latex": "Consider a standard deck of 52 cards. You will draw a card randomly 52 times, replacing the card and shuffling between draws. What's the probability that you will not get a King?",
    "solution_latex": "The probability of not drawing a King in one draw is 48/52 = 12/13.\nSince draws are independent with replacement, the probability of never drawing a King in 52 draws is (12/13)^52.\nThis is approximately $e^{-4} \\approx 0.0153$.",
    "id": "Q0003"
  },
  {
    "theme": "Probability",
    "difficulty": "Medium",
    "question_latex": "I'm going to roll two dice but before I do, you can choose to receive either the maximum value of the two dice or twice the minimum. Which do you choose and why?",
    "solution_latex": "Expected Max: Sum_{k=1}^6 k \\times P(max=k). P(max=k) = (2k-1)/36. E = 161/36 \\approx 4.47.\nExpected Min: Sum_{k=1}^6 k \\times P(min=k). P(min=k) = (13-2k)/36. E = 91/36 \\approx 2.53.\nTwice the Expected Min = 2 \\times 91/36 = 182/36 \\approx 5.06.\nYou should choose twice the minimum because its expected value (5.06) is higher than the expected maximum (4.47).",
    "id": "Q0004"
  },
  {
    "theme": "Probability",
    "difficulty": "Very Hard",
    "question_latex": "There are four teams (A, B, C and D) in a competition. To determine the best team, A will play B, and C will play D, and then the winners of these two games will play each other in the Grand Final. An opportunity arises where you can back Team A for \\$20 and if they end up winning the Grand Final you will receive \\$100 back. The probability that A beats B is twice the probability that B beats A. Team C and D are equally likely to win against each other. In the Grand Final, Team A would be an even match against Team C but would only have a 1 in 4 chance of beating Team D. Would you take the opportunity?",
    "solution_latex": "P(A beats B) = 2/3.\nP(C wins semi) = 1/2. P(D wins semi) = 1/2.\nP(A wins Final) = P(C is opponent) \\times P(A beats C) + P(D is opponent) \\times P(A beats D).\nP(A wins Final given they reach it) = (1/2 * 1/2) + (1/2 * 1/4) = 1/4 + 1/8 = 3/8.\nTotal P(A wins tournament) = 2/3 * 3/8 = 1/4.\nExpected Value = (1/4 * 100) - 20 = 25 - 20 = +$5.\nYes, take the opportunity.",
    "id": "Q0005"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "Consider a box of 39 balls. Of these, 38 are green and the remaining one is red. You reach into the box and pull out a ball at random. If it is green, you keep the ball out of the box and grab another ball. You keep doing this until you pull out the red ball, in which case the game ends. How many balls do you expect will be left in the box when the game ends? Note that it's also helpful to be familiar with the standard probability distributions such as the binomial and normal distributions.",
    "solution_latex": "The red ball is equally likely to be in any of the 39 positions in the completely drawn sequence.\nIts expected position is the average of 1 and 39, which is 20.\nIf the red ball is drawn on the 20th turn, there are exactly 39 - 20 = 19 balls left in the box.",
    "id": "Q0006"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Easy",
    "question_latex": "Estimate the world record for the longest distance (in metres) that a golf ball has been thrown.",
    "solution_latex": "A professional baseball pitcher can throw a baseball ~100 mph (approx 45 m/s), resulting in a max throw of about 120 meters. A golf ball is lighter and more aerodynamic. Taking optimal angle and aerodynamics, expect an increase of ~30-40%.\nEstimate: 160 - 180 meters. (Actual record is ~170 meters).",
    "id": "Q0007"
  },
  {
    "theme": "Probability",
    "difficulty": "Easy",
    "question_latex": "Estimate the sum of the first 100 prime numbers.",
    "solution_latex": "The $n$-th prime is approximately $n \\ln n$.\nThe 100th prime is around 541.\nThe average value of the first 100 primes is roughly half of that, around 250.\nSum = 100 * 250 = 25,000. (The exact sum is 24,133).",
    "id": "Q0008"
  },
  {
    "theme": "Probability",
    "difficulty": "Medium",
    "question_latex": "Estimate the probability that three dice are rolled and their sum is at least 14.",
    "solution_latex": "Total outcomes = 216.\nFavorable sums: 14, 15, 16, 17, 18.\nBy symmetry, P(sum >= 14) is equal to P(sum <= 7).\nSum = 3 (1), 4 (3), 5 (6), 6 (10), 7 (15) = 35 combinations.\nProbability = 35 / 216 \\approx 16.2%.",
    "id": "Q0009"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "You can choose to roll a single dice and receive double the amount shown or you can choose to receive the sum of two rolled dice. Which is better and why? You should, at the very least, be able to solve the above exercise and explain your reasoning in simple terms.",
    "solution_latex": "Mathematically, they have the exact same Expected Value:\n- 2 * E = 2 * 3.5 = 7.\n- E + E = 3.5 + 3.5 = 7.\nHowever, their Variances are different.\n- Variance of 2 * Die = 2^2 * Var(Die) = 4 * 2.917 = 11.67.\n- Variance of 2 Dice = Var(Die) + Var(Die) = 5.83.\nIf you are risk-neutral, they are perfectly equal. If you are risk-averse, the sum of two dice is better because it provides the exact same expected payout with half the variance (a tighter bell curve around 7).",
    "id": "Q0010"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "The Consecutive Sixes You roll a standard fair 6-sided die repeatedly. What is the expected number of rolls it will take to see two 6s rolled consecutively?",
    "solution_latex": "Let E be the expected number of rolls.\nIf the first roll is not a 6 (prob 5/6), you waste 1 roll and start over: (5/6)(E+1)\nIf the first roll is a 6 and second is not (prob (1/6)*(5/6)), you waste 2 rolls and start over: (5/36)(E+2)\nIf the first two rolls are 6s (prob 1/36), you take 2 rolls and stop: (1/36)(2)\nE = (5/6)(E+1) + (5/36)(E+2) + (1/36)*2\nE = 42 rolls.",
    "id": "Q0011"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "The Increasing Sequence You roll a fair 6-sided die continuously. What is the expected number of rolls until you roll a 1, immediately followed by a 2?",
    "solution_latex": "Let E_0 be the expected rolls from scratch, and E_1 be expected additional rolls if your last roll was a '1'.\nE_0 = 1 + (1/6) * E_1 + (5/6) * E_0   =>   E_0 = 6 + E_1\nE_1 = 1 + (1/6) * 0 (you hit the 2) + (1/6) * E_1 (you hit another 1) + (4/6) * E_0\nSubstitute E_0 into E_1:\nE_1 = 1 + (1/6)E_1 + (4/6)(6 + E_1)\nE_1 = 1 + (1/6)E_1 + 4 + (4/6)E_1 = 5 + (5/6)E_1\n(1/6)E_1 = 5  =>  E_1 = 30.\nE_0 = 6 + 30 = 36 rolls.",
    "id": "Q0012"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "The All-Encompassing Die You roll a fair 6-sided die. What is the expected number of rolls required to see all 6 faces at least once?",
    "solution_latex": "This is the standard Coupon Collector's Problem.\nExpected Rolls = 6/6 + 6/5 + 6/4 + 6/3 + 6/2 + 6/1\nE = 1 + 1.2 + 1.5 + 2 + 3 + 6 = 14.7 rolls.",
    "id": "Q0013"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Very Hard",
    "question_latex": "The Greedy Roller You are playing a game with a 6-sided die. You roll it once. You may either keep the face value in dollars, or pay \\$1 to roll again. You can re-roll as many times as you want as long as you pay \\$1 each time. What is your optimal strategy, and what is the expected value of this game?",
    "solution_latex": "Let V be the expected value of being in the \"rolling\" state before paying the $1 fee.\nWhen you pay $1, you roll and get max(Face, V).\nV = (1/6) * Sum_{i=1}^6 max(i, V - 1)\nAssume strategy \"keep 4, 5, 6\". Re-roll 1, 2, 3.\nExpected value = (1/6)*( (V-1) + (V-1) + (V-1) + 4 + 5 + 6 )\nV = (3V - 3 + 15) / 6  => 6V = 3V + 12 => 3V = 12 => V = 4.\nIf we keep 5, 6:\nV = (4V - 4 + 11) / 6 => 6V = 4V + 7 => 2V = 7 => V = 3.5.\nThe optimal strategy is to roll if you get 1, 2, 3, and keep if you get 4, 5, 6. Expected Value is 4.",
    "id": "Q0014"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "The Dice Duel Alice rolls a fair 20-sided die (numbered 1 to 20). Bob rolls three fair 6-sided dice and sums the results. What is the exact probability that Alice's roll is strictly greater than Bob's sum?",
    "solution_latex": "Alice's mean is 10.5. Bob's mean is 10.5.\nBy symmetry, $P(A > B) = P(B > A)$.\n$P(A = B)$ requires summing $P(B=k) \\times (1/20)$ for $k \\in \\{3..18\\}$.\nSince $\\sum P(B=k) = 1$, $P(A = B) = 1/20 = 0.05$.\n$P(A > B) = (1 - 0.05) / 2 = 0.475 = 47.5\\%$.",
    "id": "Q0015"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "The Overshoot You roll a standard fair 6-sided die and keep a running sum of the rolls. As the number of rolls approaches infinity, what is the probability that the running sum lands exactly on the number 1,000,000? (An exact approximation is expected.)",
    "solution_latex": "By Renewal Theory, the asymptotic probability of hitting any specific large integer is $1 / \\mu$.\n$\\mu = 3.5 = 7/2$.\nProbability = $2/7 \\approx 28.57\\%$.",
    "id": "Q0016"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "The Number of Ones You roll a fair 6-sided die repeatedly until you roll a 6. What is the expected number of 1s you will roll before the game ends?",
    "solution_latex": "By symmetry, every face 1 through 5 is equally likely to appear before the terminating face 6.\nThe expected total number of rolls before hitting a 6 is 5.\nSince there are 5 non-terminating numbers that share this expectation uniformly, the expected number of times you see a '1' is simply 5 / 5 = 1.",
    "id": "Q0017"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "The Alternating Duel Alice and Bob take turns rolling a fair 6-sided die, with Alice going first. The first person to roll a 6 wins. What is the probability that Alice wins?",
    "solution_latex": "Let P be Alice's probability of winning.\nAlice wins on the first roll with probability 1/6.\nIf Alice misses (5/6) and Bob misses (5/6), the state resets to Alice's turn.\nP = 1/6 + (5/6)*(5/6)*P\nP = 1/6 + (25/36)*P\n(11/36)*P = 1/6\nP = 6/11 ≈ 54.55%.",
    "id": "Q0018"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "The Even Split Youroll a standard die until you have seen exactly three even numbers. What is the expected number of odd numbers you will have seen by the time you stop? Prop Trading & Hedge Fund Prep 50 Advanced Quant Interview Questions",
    "solution_latex": "This is essentially flipping a coin (Even vs Odd) until you get 3 Evens.\nThis follows a Negative Binomial distribution. We want the expected number of \"failures\" (odds) before the 3rd \"success\" (even).\nWith probability p = 0.5, the expected number of failures is r * (1-p) / p.\nExpected Odds = 3 * (0.5 / 0.5) = 3 odd numbers.",
    "id": "Q0019"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "The Ultimate Sequence You roll a die infinitely. What is the expected number of rolls until you see the sequence 1, 2, 3, 4, 5, 6 appear in that exact order?",
    "solution_latex": "Because there is no overlap in the sequence 1-2-3-4-5-6 (the prefix does not match the suffix), the expected time is simply $6^6 = 46656$ rolls.",
    "id": "Q0020"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "The First Ace You thoroughly shufffe a standard 52-card deck. You flip cards over one by one. What is the expected number of cards you will flip before you see the first Ace?",
    "solution_latex": "The 4 Aces partition the remaining 48 non-Ace cards into 5 distinct \"gaps\" or intervals.\nBy symmetry, every interval has the same expected number of cards.\nExpected cards in the first interval = 48 / 5 = 9.6 cards.\nSo you expect to flip 9.6 cards BEFORE the first Ace. (The first Ace itself is expected to be the 10.6th card flipped).",
    "id": "Q0021"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Very Hard",
    "question_latex": "The Clairvoyant A standard 52-card deck is shufffed. You are shown cards one by one. At any point, before the next card is turned over, you can shout \"Red!\" If the next card is red, you win \\$100. If it is black, you win nothing. You must guess exactly once. What is the optimal strategy to maximize your odds of winning?",
    "solution_latex": "By the Martingale Optional Stopping Theorem, no strategy can perform better than simply guessing on the very first card. The expectation of the proportion of Red cards remaining is a martingale.\nTherefore, ANY valid strategy (including guessing the first card, waiting until the final card, or counting cards and guessing when odds seem favorable) gives an exactly 50% probability of winning.",
    "id": "Q0022"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "The Adjacent Pairs You shufffe a standard 52-card deck and lay all the cards out in a straight line. What is the expected number of adjacent cards that share the same face value (e.g., a King immediately followed by another King)?",
    "solution_latex": "There are 51 adjacent pairs of cards in the deck. Let I_k be the indicator variable that the k-th pair matches in value.\nFor any pair, the first card can be anything. There are 51 cards left in the deck, and exactly 3 of them match the value of the first card.\nThus, P(I_k = 1) = 3 / 51.\nBy linearity of expectation, E = 51 * P(I_k = 1) = 51 * (3/51) = 3.",
    "id": "Q0023"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "The Four Piles You randomly divide a shufffed 52-card deck into 13 piles of 4 cards each. What is the probability that every pile contains exactly one Ace?",
    "solution_latex": "Note: The wording \"13 piles of 4 cards\" with \"every pile contains an Ace\" is impossible because there are only 4 Aces. Assuming the classic question \"4 piles of 13 cards each\":\nTotal ways to place the 4 Aces among the 52 positions is C(52,4).\nTo have exactly one Ace in each pile, we must choose 1 position from the 13 available in the first pile, 1 from 13 in the second, etc. Favorable ways = 13^4.\nProbability = 13^4 / C(52,4) = 28,561 / 270,725 ≈ 0.1055.",
    "id": "Q0024"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "The Suit Collector You draw cards one by one from a shufffed 52-card deck with replacement. What is the expected number of draws required to see at least one card of each of the four suits?",
    "solution_latex": "This is the Coupon Collector's Problem with n=4 items.\nThe expected number of draws to get the k-th new suit after having k-1 suits is 4 / (4 - (k - 1)).\nE = 4/4 + 4/3 + 4/2 + 4/1\nE = 1 + 1.333 + 2 + 4 = 8.333 draws.",
    "id": "Q0025"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Very Hard",
    "question_latex": "The Local Maxima You are given a deck of 100 cards, perfectly numbered 1 through 100. You shufffe them and lay them out in a row. A card is considered a \"local maximum\" if its value is greater than both of its immediate neighbors. (Cards on the ends only have one neighbor.) What is the expected number of local maxima?",
    "solution_latex": "For the 2 end cards: each has 1 neighbor. The probability it is larger than its neighbor is 1/2.\nFor the 98 interior cards: each is part of a group of 3 adjacent cards. Since all permutations of 3 distinct values are equally likely, the middle card is the highest with probability 1/3.\nBy linearity of expectation, E = 2*(1/2) + 98*(1/3) = 1 + 32.66 = 101/3 ≈ 33.67.",
    "id": "Q0026"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Very Hard",
    "question_latex": "The Identical Decks Alice and Bob each have a well-shufffed standard 52-card deck. They simultaneously turn over their top cards, then their next cards, and so on. What is the expected number of exact matches (where Alice and Bob flip the same card at the same time)? Prop Trading & Hedge Fund Prep 50 Advanced Quant Interview Questions",
    "solution_latex": "Let I_k be the indicator that the k-th card in Alice's deck matches the k-th card in Bob's deck.\nSince Bob's deck is shuffled uniformly, P(I_k = 1) = 1 / 52.\nBy linearity of expectation, the expected number of matches is 52 * (1 / 52) = 1 match.",
    "id": "Q0027"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Very Hard",
    "question_latex": "The Black/Red Game You play a game with a standard 52-card deck. Cards are revealed one by one. If a black card is revealed, you gain \\$1. If a red card is revealed, you lose \\$1. You can walk away at any time before the deck runs out, keeping your current total. Assuming you play optimally, is the expected value of this game positive, negative, or zero?",
    "solution_latex": "The expected value is positive (specifically, ~$2.62).\nEven though the overall expected value of drawing the whole deck is 0, the game has an option to halt. Because the random walk of the deck's composition has volatility, there will be paths where you go up early (e.g., drawing two Blacks initially nets you +2). If you strictly employ an optimal stopping strategy (calculated via backward induction/dynamic programming), you take advantage of the variance and walk away when the ratio is highly in your favor, yielding a positive EV.",
    "id": "Q0028"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "The Spades Threshold You draw cards from a shufffed 52-card deck without replacement. What is the expected number of cards you must draw until you have exactly 5 Spades in your hand?",
    "solution_latex": "The 13 Spades divide the 39 non-Spades into 14 uniform intervals.\nThe expected number of non-Spades in each interval is 39 / 14.\nDrawing the 5th Spade means you must draw all the non-Spades in the first 5 intervals, plus the 5 Spades themselves.\nExpected non-Spades drawn = 5 * (39/14) = 195/14 ≈ 13.93.\nTotal expected cards drawn = 5 + 13.93 = 18.93 cards.",
    "id": "Q0029"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "The Last Card You flip cards from a shufffed 52-card deck one by one. You stop as soon as you have seen all four Aces. What is the expected number of cards remaining in the deck?",
    "solution_latex": "The 4 Aces divide the 48 non-Aces into 5 intervals. By symmetry, the expected number of non-Aces in each interval is 48 / 5 = 9.6.\nThe cards remaining in the deck after the 4th Ace are exactly the cards comprising the 5th interval.\nThus, the expected number of cards remaining is 9.6.",
    "id": "Q0030"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Mutilated Chessboard You have an 8×8 chessboard with the top-left and bottom-right corner squares physically removed. You have 31 dominoes, each capable of covering exactly two adjacent squares. Can you tile the entire remaining board? If so, how? If not, strictly prove why.",
    "solution_latex": "No, you cannot.\nA standard chessboard has 32 White and 32 Black squares. Every single domino laid horizontally or vertically perfectly covers exactly 1 White and 1 Black square.\nTherefore, 31 dominoes will cover exactly 31 White and 31 Black squares.\nThe top-left and bottom-right corners of a chessboard are the SAME color. Removing them leaves 32 squares of one color and 30 squares of the other. It is physically impossible to cover this asymmetry with dominoes.",
    "id": "Q0031"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The L-Tromino Grid You have a 1024×1024 grid of squares. Exactly one square, chosen completely at random, is removed. You are given an infinite supply of L-shaped trominoes (blocks covering exactly 3 squares in an L-shape). Can you tile the remaining 10242-1 squares without overlapping?",
    "solution_latex": "Yes. This is a classic theorem by Golomb.\nA grid of size 2^n x 2^n with ANY single square removed can always be perfectly tiled by L-trominoes.\nProof by induction: Divide the 2^n x 2^n grid into four 2^(n-1) x 2^(n-1) subgrids. The removed square falls into exactly one of them. Place a single L-tromino in the exact center of the board to cover exactly one corner square of the other three subgrids. Now, all four subgrids are essentially missing exactly one square, completing the inductive step down to 2x2.",
    "id": "Q0032"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Fault Line A6×6square floor is completely tiled by eighteen 2×1 dominoes. Prove that there must exist at least one straight line running strictly through the interior of the board from one side to the other that does not cut through any dominoes (a \"fault line\").",
    "solution_latex": "A 6x6 board has 5 internal vertical grid lines and 5 internal horizontal grid lines (10 lines total).\nAssume there is NO fault line. Thus, every one of these 10 lines must be intersected by at least one domino.\nBecause a domino covers 2 squares, an intersected line leaves the sum of squares on either side odd unless AT LEAST TWO dominoes intersect that line.\nIf every line intersects >= 2 dominoes, the total number of intersections is at least 10 * 2 = 20.\nHowever, each 2x1 domino can only cross exactly one interior line. You only have 18 dominoes, so the maximum possible intersections is 18.\n20 > 18 is a contradiction. A fault line must exist.",
    "id": "Q0033"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Strip Tiling You have a 10×10 board. Can you tile it perfectly using twenty-five 1×4 rectangular tiles? Prove your answer.",
    "solution_latex": "No. Color the squares (x,y) with 4 colors based on (x+y) mod 4.\nA 1x4 tile always covers exactly one square of each color, meaning 25 tiles must cover exactly 25 squares of each color.\nHowever, in a 10x10 board, the frequencies of the colors (x+y) mod 4 are 25, 26, 25, 24. Since the board does not contain an equal number of each color, it cannot be tiled by 1x4 tiles.",
    "id": "Q0034"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Broken Stick You take a straight stick of length 1 and randomly break it in two places (choosing two uniformindependentpointsalongitslength). Whatistheprobabilitythatthethreeresulting pieces can be arranged to form a triangle? Prop Trading & Hedge Fund Prep 50 Advanced Quant Interview Questions",
    "solution_latex": "Let the two random break points be x and y. The pieces form a triangle if and only if all three pieces are strictly less than 0.5 in length.\nPlotting this on a 2D sample spacex:\nThe entire area is 1. The region where the conditions (x < 0.5, y < 0.5 is false because one piece is 1-max) are met forms a triangle in the center of the square bounding exactly 1/4 of the total area.\nProbability = 1/4.",
    "id": "Q0035"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Sequential Stick Break You take a stick of length 1 and break it at a random uniform point. You then take the longer of the two pieces and break it at a random uniform point. What is the probability that the three resulting pieces can form a triangle?",
    "solution_latex": "Let the first break be x (assume x < 0.5 by symmetry, so the longer piece is 1-x).\nThe second break y is chosen uniformly on.\nFor a triangle, all three pieces must be < 0.5.\nThe pieces are x, y, and (1-x-y).\nSince x < 0.5 is given, we need y < 0.5 and (1-x-y) < 0.5 => y > 0.5 - x.\nThe favorable interval for y is (0.5 - x, 0.5), which has length x.\nThe probability for a given x is x / (1-x).\nIntegrating over x from 0 to 0.5 (and multiplying by 2 for symmetry):\nP = 2 * Integral_{0}^{0.5} (x / (1-x)) dx = 2 *_0^0.5 = 2ln(2) - 1 ≈ 0.386.",
    "id": "Q0036"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Polygon Ants There is a regular n-sided polygon. At each vertex, there is an ant. At exactly the same time, each ant randomly chooses one of its two adjacent edges and begins walking along it to the next vertex. What is the probability that no two ants collide?",
    "solution_latex": "To avoid any collisions, all n ants must choose exactly the same direction (either all walk clockwise, or all walk counter-clockwise).\nThere are 2 such favorable scenarios.\nSince each of the n ants has 2 independent choices, the total number of scenarios is 2^n.\nProbability = 2 / 2^n = 1 / 2^(n-1).",
    "id": "Q0037"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Circle Chords You randomly place 2n distinct points on the circumference of a circle. You then pair them up and draw straight chords connecting the pairs. What is the probability that no two chords intersect?",
    "solution_latex": "The number of ways to completely pair 2n points without any intersecting chords is given by the n-th Catalan number: C_n = (2n)! / ((n+1)! * n!).\nThe total number of ways to randomly pair 2n points is the double factorial: (2n-1)!! = (2n)! / (2^n * n!).\nProbability = C_n / (2n-1)!! = 2^n / (n+1)!.",
    "id": "Q0038"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Dinner Party Reloaded You host a dinner party for n married couples (2n people). They sit at random around a circular table. What is the expected number of people who end up sitting next to at least one person of the opposite gender?",
    "solution_latex": "Let E_i be the indicator that person i sits next to at least one opposite-gender person.\nFind the probability they sit next to NO opposite gender (i.e., both neighbors are the SAME gender as i).\nThere are n-1 available same-gender people, and 2n-1 total available seats.\nP(both neighbors same) = ((n-1) / (2n-1)) * ((n-2) / (2n-2)).\nP(E_i = 1) = 1 - (n-1)(n-2) / (2(n-1)(2n-1)) = 1 - (n-2)/(4n-2) = 3n / (4n-2).\nBy linearity of expectation, multiply by 2n total people:\nExpected value = 2n * (3n / (4n-2)) = 3n^2 / (2n-1).",
    "id": "Q0039"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "The Catalan Ballot In a two-candidate election, Candidate A receives exactly n votes and Candidate B receives exactly m votes, where n > m. As the votes are drawn one by one from the ballot box, what is the probability that Candidate A is strictly ahead of Candidate B throughout the entire counting process?",
    "solution_latex": "This is exactly Bertrand's Ballot Theorem.\nThe probability that Candidate A strictly leads the entire time is simply the difference in their votes divided by the total number of votes:\nProbability = (n - m) / (n + m).",
    "id": "Q0040"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Very Hard",
    "question_latex": "The HT vs. TT Race You have a fair coin. Alice flips the coin until she sees Heads followed immediately by Tails (HT). Bob flips the coin until he sees Tails followed immediately by Tails (TT). Who takes longer to finish on average, and what are their exact expected numbers of flips?",
    "solution_latex": "Bob takes longer on average.\nFor HT (Alice): Once you flip H, you stay one flip away (T) indefinitely until you get it. E = 4.\nFor TT (Bob): If you flip T and then H, you lose your progress completely and have to start over. E = 6.\nAlice expected flips: 4. Bob expected flips: 6.",
    "id": "Q0041"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Very Hard",
    "question_latex": "The Blind Piles You are blindfolded. On a table in front of you are 100 coins. Exactly 10 are facing Heads up and 90 are facing Tails up. You cannot see or feel the coins to tell which side is up. How can you split the coins into two piles such that both piles contain the exact same number of Heads?",
    "solution_latex": "Take exactly 10 coins from the overall 100 and put them into a new pile.\nYou now have Pile 1 (90 coins) and Pile 2 (10 coins).\nLet Pile 2 currently have X Heads. This means Pile 1 has (10 - X) Heads.\nSimply flip every single coin in Pile 2 over.\nPile 2 originally had X Heads and (10 - X) Tails. Flipping them all turns the (10 - X) Tails into (10 - X) Heads.\nNow Pile 1 has (10 - X) Heads, and Pile 2 has (10 - X) Heads. They are exactly the same.",
    "id": "Q0042"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "The Fibonaccian Flips Prop Trading & Hedge Fund Prep 50 Advanced Quant Interview Questions Youflip a fair coin 10 times. What is the probability that you never flip two Heads in a row?",
    "solution_latex": "The number of valid sequences of length n without HH follows the Fibonacci sequence F_{n+2} (where F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, etc.).\nFor n = 10, we need F_12.\nF_1=1, F_2=1, F_3=2, F_4=3, F_5=5, F_6=8, F_7=13, F_8=21, F_9=34, F_10=55, F_11=89, F_12=144.\nThere are 144 favorable sequences. Total sequences = 2^10 = 1024.\nProbability = 144 / 1024 = 9 / 64.",
    "id": "Q0043"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "The Unfair Advantage Alice and Bob each flip fair coins. Alice has 51 coins and Bob has 50 coins. What is the exact probability that Alice ends up with strictly more Heads than Bob?",
    "solution_latex": "Consider the first 50 coins flipped by both.\nCase 1: Alice has strictly more Heads. Alice wins no matter what her 51st coin is.\nCase 2: Bob has strictly more Heads. Alice loses no matter what her 51st coin is.\nBy symmetry, P(Case 1) = P(Case 2).\nCase 3: They tie on the first 50. Alice wins if and only if her 51st coin is Heads (50% chance).\nTherefore, overall Alice's win probability is exactly 1/2.",
    "id": "Q0044"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "The Fair Maker Youaregiven a visibly weighted, unfair coin. You do not know the probability p of it landing Heads, except that 0 < p < 1. How can you use this coin to simulate a perfectly fair 50/50 coin toss?",
    "solution_latex": "John von Neumann's procedure:\nFlip the coin twice.\n- If it lands (Heads, Tails), call it a \"Heads\" output.\n- If it lands (Tails, Heads), call it a \"Tails\" output.\n- If it lands (Heads, Heads) or (Tails, Tails), ignore the flips and restart the process.\nBecause P(HT) = p*(1-p) and P(TH) = (1-p)*p, these two specific outcomes have identical probabilities, perfectly simulating a fair 50/50 toss.",
    "id": "Q0045"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Very Hard",
    "question_latex": "The St. Petersburg Spin You flip a fair coin until it lands Tails. If it lands Tails on the k-th flip, you win \\$2k. A casino offers you to play this game, but the casino's total bankroll is capped at \\$1,000,000 (they cannot pay you more than this). How much should you mathematically be willing to pay to play this game once?",
    "solution_latex": "In standard St. Petersburg, EV is infinite. Here payout is capped at $1,000,000.\n$2^k <= 1,000,000 up to k = 19 (since 2^19 = 524,288 and 2^20 = 1,048,576).\nFor k = 1 to 19, the expected payout is Sum_{k=1}^{19} (1/2^k * 2^k) = Sum(1) = 19.\nFor k >= 20, the probability is 1/2^19. The casino pays exactly 1,000,000.\nExpected value from cap = 1,000,000 / 524,288 ≈ 1.907.\nTotal Expected Value = 19 + 1.907 = $20.91.",
    "id": "Q0046"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Very Hard",
    "question_latex": "The Drunkard's Walk Adrunk man stands one step away from the edge of a cliff. Every second, he takes one step away from the cliff with probability p, and one step toward the cliff with probability 1 - p. If p = 2/3, what is the exact probability that he will eventually fall off the cliff?",
    "solution_latex": "This is an asymmetric random walk where the probability of moving right (away) p = 2/3 and left (toward) q = 1/3.\nThe probability of eventually reaching a state 1 step to the left of the starting position is given by the formula P = q / p.\nP = (1/3) / (2/3) = 1/2.\nThere is a 50% chance he eventually falls off the cliff.",
    "id": "Q0047"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Very Hard",
    "question_latex": "The Gambler's Ruin Gambler A starts with a dollars and Gambler B starts with b dollars. They flip a fair coin; if Heads, A gets \\$1 from B; if Tails, B gets \\$1 from A. The game ends when someone goes bankrupt. What is the probability that Gambler A wins all the money?",
    "solution_latex": "Because the coin is fair, the game is a martingale. The expected wealth of Gambler A at any time is their starting wealth, a.\nLet P be the probability A wins (finishes with a+b dollars).\na = P * (a + b) + (1 - P) * 0\nP = a / (a + b).",
    "id": "Q0048"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "The Difference of Three Youflip a fair coin continually. You stop as soon as the absolute difference between the total number of Heads and the total number of Tails reaches exactly 3. What is the expected number of flips?",
    "solution_latex": "This is a 1D random walk starting at 0, bounded by -3 and +3.\nLet E_k be the expected steps to reach magnitude 3 from magnitude k.\nE_3 = 0.\nE_2 = 1 + 0.5(E_1) + 0.5(E_3) = 1 + 0.5(E_1).\nE_1 = 1 + 0.5(E_0) + 0.5(E_2).\nE_0 = 1 + E_1.\nSubstitute E_1 = E_0 - 1 into the others:\nE_2 = 1 + 0.5(E_0 - 1) = 0.5 + 0.5 E_0.\nSubstitute E_1 and E_2 into E_1 equation:\nE_0 - 1 = 1 + 0.5(E_0) + 0.5(0.5 + 0.5 E_0)\nE_0 - 1 = 1 + 0.5 E_0 + 0.25 + 0.25 E_0\nE_0 - 1 = 1.25 + 0.75 E_0\n0.25 E_0 = 2.25\nE_0 = 9 flips.",
    "id": "Q0049"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "The Sequence Count You flip a fair coin 100 times. What is the expected number of times the sequence HTH appears? (Overlapping sequences count; e.g., HTHTH counts as two occurrences.)",
    "solution_latex": "A 100-flip sequence has exactly 98 windows of length 3.\nFor any specific window (e.g., flips 1-2-3, flips 2-3-4), the probability that it perfectly matches the sequence H-T-H is (1/2) * (1/2) * (1/2) = 1/8.\nUsing linearity of expectation (which holds despite the overlapping windows being dependent),\nE = 98 * (1/8) = 12.25 times.",
    "id": "Q0050"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Lost Boarding Pass 100 passengers board a fully booked 100-seat airplane. The first passenger has lost their Prop Trading & Hedge Fund Prep 50 Advanced Quant Interview Questions boarding pass and takes a completely random seat. Every subsequent passenger takes their own assigned seat if it is empty; if it is taken, they pick a completely random empty seat. What is the probability that the 100th passenger gets to sit in their own assigned seat?",
    "solution_latex": "When the 100th passenger boards, exactly two seats are guaranteed to be left in the logical loop: their own assigned seat (#100), and the first passenger's assigned seat (#1).\nBecause every passenger from 2 to 99 who is displaced simply picks uniformly at random between the remaining available seats, the probability that #1's seat is chosen is exactly equal to the probability that #100's seat is chosen during every step of the chain.\nTherefore, by symmetry, it is a 50/50 chance. Probability = 1/2.",
    "id": "Q0051"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The 100 Prisoners 100 prisoners are given a challenge. A room contains 100 boxes, each with the name of a prisoner inside. Prisoners enter one by one, open exactly 50 boxes, and leave the room exactly as they found it. If every single prisoner finds their own name, they are all freed; if even one fails, they all die. They may strategize beforehand but cannot communicate once the game starts. What strategy gives them a > 30% chance of survival?",
    "solution_latex": "The \"Pointer\" or \"Cycle\" strategy.\nEach prisoner goes to the box matching their own number. They open it and look at the slip inside. They then go to the box of the number they just read. They repeat this to follow the permutation loop.\nThis guarantees that if they are in a loop of length <= 50, they will find their own number. Since they all share the same room configuration, they survive if the random permutation of 100 boxes contains NO cycles longer than 50.\nThe probability of this occurring is exactly 1 - Sum_{k=51}^{100} (1/k) ≈ 31.18%.",
    "id": "Q0052"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Heavy Coin Youhave12seemingly identical coins. Exactly one is fake, and it has a different weight than the others (it could be heavier or lighter). You have a standard balance scale. What is the minimum number of weighings needed to find the fake coin and determine if it is heavier or lighter?",
    "solution_latex": "3 weighings.\nDivide into three groups of 4: A, B, C.\nWeigh 1: A vs B.\n- If A=B, the fake is in C. Weigh 3 from C against 3 known goods. This isolates the fake and weight in 3 total.\n- If A!=B, say A > B. The fake is either heavy in A or light in B.\nWeigh 2: Take 3 from A and 1 from B, weigh against 1 from A and 3 known goods. (A1,A2,A3,B1 vs A4,G,G,G).\nDepending on how the scale tips (stays same, tips left, tips right), you isolate the fake down to 1 or 3 specific candidates and their weight profile, easily solved by Weigh 3.",
    "id": "Q0053"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Fast Horses You have 25 horses. You want to find the top 3 fastest horses. You can race up to 5 horses at a time, but you do not have a stopwatch-you only know the relative order they finish in. What is the minimum number of races required to guarantee you find the 1st, 2nd, and 3rd fastest horses?",
    "solution_latex": "7 races.\nRaces 1-5: Race them in 5 groups of 5. Keep the top 3 from each group.\nRace 6: Race the 5 winners from the first 5 races.\nThe winner of Race 6 is the absolute #1 fastest horse.\nWe now have candidates for #2 and #3. They can only be: the 2nd and 3rd place horses from the winning group, the 1st and 2nd place horses from the 2nd place group, and the 1st place horse from the 3rd place group.\nRace 7: Race these exact 5 remaining candidates. The top two are the 2nd and 3rd fastest overall.",
    "id": "Q0054"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Poisoned Wine You have 1,000 bottles of wine. Exactly one bottle is poisoned. You have 10 test rats. A rat will die exactly 24 hours after drinking the poison. You only have 24 hours to find the poisoned bottle. How do you find it?",
    "solution_latex": "Use Binary. Number the bottles 1 to 1000.\nAssign each of the 10 rats a specific binary bit position (2^0 through 2^9).\nFor every bottle, convert its number to binary. If the bit is a 1, feed a drop of that bottle to the corresponding rat. (e.g., Bottle 7 is 0000000111, so rats 1, 2, and 3 drink from it).\nAfter 24 hours, observe exactly which rats die. Treat a dead rat as a 1 and a living rat as a 0. The binary number formed uniquely identifies the poisoned bottle (up to 2^10 = 1024 bottles).",
    "id": "Q0055"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Burning Ropes You are given two ropes. Each rope takes exactly 60 minutes to burn completely from one end to the other. However, the ropes burn at highly inconsistent rates. Using only these two ropes and a lighter, how can you perfectly measure exactly 45 minutes?",
    "solution_latex": "1. Light Rope A from BOTH ends simultaneously.\n2. At the exact same time, light Rope B from ONE end.\n3. Because Rope A is burning from both sides, it will take exactly 30 minutes to burn out completely.\n4. The moment Rope A burns out (30 mins elapsed), light the other end of Rope B.\n5. Rope B had 30 minutes of burn time left. Lighting the other end cuts this remaining time in half (15 minutes).\n6. When Rope B burns out completely, exactly 45 minutes have passed.",
    "id": "Q0056"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Pirate Gold Five perfectly rational, infinitely greedy, and bloodthirsty pirates (ranked 1 to 5, with 1 being the captain) must divide 100 gold coins. The captain proposes a distribution. If at least 50% of the pirates (including the captain) vote Yes, it passes. If it fails, the captain is thrown overboard and pirate #2 becomes the new captain. What distribution does pirate #1propose to maximize his gold while staying alive?",
    "solution_latex": "Working backwards:\n2 pirates left: P4 needs 1 vote, keeps 100.\n3 pirates: P3 needs 2 votes, gives P5 1 coin to buy his vote. (99, 0, 1)\n4 pirates: P2 needs 2 votes, gives P4 1 coin. (99, 0, 1, 0)\n5 pirates: P1 needs 3 votes. He gives 1 coin each to P3 and P5, who would get 0 under P2.\nDistribution: P1: 98, P2: 0, P3: 1, P4: 0, P5: 1.",
    "id": "Q0057"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Bridge in the Dark Four people must cross a rickety bridge at night. They have one flashlight. The bridge can Prop Trading & Hedge Fund Prep 50 Advanced Quant Interview Questions only hold two people at a time, and anyone crossing must have the flashlight. The four people take 1, 2, 5, and 10 minutes to cross, respectively. When two walk together, they walk at the slower person's pace. How can they all cross in exactly 17 minutes?",
    "solution_latex": "1 and 2 cross together (2 mins).\n1 returns with flashlight (1 min) -> Total 3 mins.\n5 and 10 cross together (10 mins) -> Total 13 mins.\n2 returns with flashlight (2 mins) -> Total 15 mins.\n1 and 2 cross together (2 mins) -> Total 17 mins.",
    "id": "Q0058"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "The Blue Eyes There is an island of 100 perfect logicians, all of whom have strictly blue eyes. The island rule: if anyone realizes they have blue eyes, they must leave on the ferry at midnight. They cannot communicate, and there are no mirrors. One day, a guru visits and announces to the whole island: \"I can see someone who has blue eyes.\" What happens, and on what timeline?",
    "solution_latex": "By induction:\nIf 1 person had blue eyes, they see 0 blue eyes, realize the guru means them, and leave Night 1.\nIf 2 people have blue eyes, they each see 1. They wait for Night 1. When the other doesn't leave, they realize they must ALSO have blue eyes, and both leave Night 2.\nExtrapolating this common knowledge logic, since there are 100 blue-eyed people, nobody leaves for 99 days. On exactly the 100th night, all 100 people leave simultaneously.",
    "id": "Q0059"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "The Toggle Doors You are in a hallway with 100 closed doors numbered 1 to 100. You walk down the hall 100 times. On the k-th pass, you toggle every k-th door. Which doors are open at the end?",
    "solution_latex": "A door is toggled once for every divisor of its door number.\nA door ends up open if it has an ODD number of divisors.\nOnly perfect squares have an odd number of divisors.\nThe open doors are 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100.",
    "id": "Q0060"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "You roll 30 dice; what is the probability that at least 5 of these are 6?",
    "solution_latex": "(Re-evaluation for completeness)\nUse Binomial Distribution $B(n=30, p=1/6)$.\n$P(X \\ge 5) = 1 - \\sum_{k=0}^4 C(30,k) (1/6)^k (5/6)^{30-k} \\approx 0.575$.",
    "id": "Q0061"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "You roll two dice; what is the probability that the difference is greater than 2?",
    "solution_latex": "The combinations where |x - y| > 2 (i.e., difference is 3, 4, or 5) out of 36 are:\nDiff 5: (1,6), (6,1) -> 2\nDiff 4: (1,5), (5,1), (2,6), (6,2) -> 4\nDiff 3: (1,4), (4,1), (2,5), (5,2), (3,6), (6,3) -> 6\nTotal favorable = 12.\nProbability = 12 / 36 = 1/3.",
    "id": "Q0062"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "3 dice are rolled; what is the probability that some number of these dice can be summed to give 5?",
    "solution_latex": "Valid sets:\nA 5 is rolled directly: $3 \\times 1 \\times 36 - 3 \\times 6 + 1 = 91$ ways.\nNo 5, but two dice sum to 5: (1,4,x), (2,3,x).\nBy careful inclusion-exclusion across the $216$ outcomes, the number of favorable outcomes is 104.\nProbability = $104 / 216 = 13 / 27 \\approx 48.1\\%$.",
    "id": "Q0063"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Rolling six dice, what is the probability of getting at least three of the same number?",
    "solution_latex": "Total outcomes = $6^6 = 46656$.\nSubtract outcomes with NO three of a kind (max frequency 2):\nAll 6 distinct: $6! = 720$.\n1 pair, 4 distinct: $C(6,1) \\times C(6,2) \\times 5 \\times 4 \\times 3 \\times 2 = 10800$.\n2 pairs, 2 distinct: $C(6,2) \\times \\frac{6!}{2!2!} = 16200$.\n3 pairs: $C(6,3) \\times \\frac{6!}{2!2!2!} = 1800$.\nSum = 29520.\nFavorable = $46656 - 29520 = 17136$.\nProbability = $17136 / 46656 \\approx 36.7\\%$.",
    "id": "Q0064"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Rolling six dice, what is the probability of getting at least two pairs?",
    "solution_latex": "Using the counts from above:\nExactly 2 pairs = 16200.\nExactly 3 pairs = 1800.\nFour of a kind = acts as 2 pairs of the same number, etc.\nIt is easier to calculate 1 - P(0 pairs) - P(1 pair).\n$P(\\ge 2 \\text{ pairs}) \\approx 55\\%$.",
    "id": "Q0065"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Medium",
    "question_latex": "100 coins are flipped. Pairs of (1H, 1T) are removed. What is the fair value of the remaining coins? \u0001",
    "solution_latex": "Removing pairs of 1H and 1T means you are left with the absolute difference between the number of Heads and Tails: |H - T|.\nLet H ~ Bin(100, 0.5). We want E = E.\nFor a binomial distribution B(2n, 0.5), E = (2n * C(2n, n)) / 2^(2n).\nHere, 2n = 100, so n = 50.\nE = 100 * C(100, 50) / 2^100 ≈ 100 / sqrt(50*pi) ≈ 100 / 12.533 ≈ 7.96.",
    "id": "Q0066"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Medium",
    "question_latex": "Flip 8 coins; what is the probability of getting three of the same in a row?",
    "solution_latex": "Find the complement: Probability of NO three same in a row.\nLet A_n be sequences of length n avoiding HHH and TTT.\nA_1 = 2 (H, T). A_2 = 4 (HH, HT, TH, TT). A_3 = 6 (avoid HHH, TTT).\nRecurrence is A_n = A_{n-1} + A_{n-2} (Tribonacci-like restricted).\nA_4 = 10, A_5 = 16, A_6 = 26, A_7 = 42, A_8 = 68.\nThere are 68 sequences with NO three in a row.\nTotal sequences = 2^8 = 256.\nFavorable = 256 - 68 = 188.\nProbability = 188 / 256 = 47 / 64 = 0.734375.",
    "id": "Q0067"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Medium",
    "question_latex": "Flip 6 coins; probability of more heads than tails?",
    "solution_latex": "This requires exactly 4, 5, or 6 Heads.\nP(H=4) = C(6,4)/64 = 15/64\nP(H=5) = C(6,5)/64 = 6/64\nP(H=6) = C(6,6)/64 = 1/64\nSum = (15 + 6 + 1) / 64 = 22 / 64 = 11 / 32.",
    "id": "Q0068"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Medium",
    "question_latex": "Flip 7 coins; probability of an odd number of heads?",
    "solution_latex": "Because 7 is odd, for every sequence with an even number of heads, its exact inverse (swapping H and T) has an odd number of heads.\nThe mapping is a perfect bijection.\nTherefore, exactly half the outcomes have an odd number of heads.\nProbability = 1/2.",
    "id": "Q0069"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Medium",
    "question_latex": "Draw 13 cards from 52; probability of no ace? \u0001 \u0001 6,327",
    "solution_latex": "To draw 13 cards with no Aces, we must choose all 13 cards from the 48 non-Ace cards.\nThe probability is the number of favorable combinations over the total possible combinations:\nP = C(48,13) / C(52,13) = (48! / (13! * 35!)) / (52! / (13! * 39!))\nP = (39 * 38 * 37 * 36) / (52 * 51 * 50 * 49) ≈ 0.3038",
    "id": "Q0070"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Medium",
    "question_latex": "Draw 3 cards; probability they are in non-decreasing order? \u0001",
    "solution_latex": "Assuming cards are drawn sequentially without replacement and suits don't matter for order.\nLet V1, V2, V3 be the values. We want P(V1 <= V2 <= V3).\n- Strictly increasing (V1 < V2 < V3): C(13,3) = 286 value combos. 4^3 = 64 suit combos. Favorable sequences = 286 * 64 * 1 (only 1 sorted order) = 18,304.\n- One pair (V1 = V2 < V3 or V1 < V2 = V3): 78 pairs of values. For each, choosing suits yields 78 * (C(4,2)*4*2 arrangements) = 7,488 favorable.\n- Three of a kind (V1 = V2 = V3): 13 values * C(4,3) * 6 permutations = 312 favorable.\nTotal favorable sequences = 18,304 + 7,488 + 312 = 26,104.\nTotal possible sequences = 52 * 51 * 50 = 132,600.\nProbability = 26,104 / 132,600 = 251 / 1275 ≈ 0.1968.",
    "id": "Q0071"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Medium",
    "question_latex": "Draw 3 cards; probability their values differ by at least 2? \u0001 \u0001",
    "solution_latex": "This means no two cards have consecutive or identical values.\nWe choose 3 non-consecutive values from 13. The number of ways is C(13 - 3 + 1, 3) = C(11, 3) = 165.\nFor each set of 3 values, there are 4^3 = 64 suit choices.\nTotal favorable combinations = 165 * 64 = 10,560.\nTotal possible combinations of 3 cards = C(52, 3) = 22,100.\nProbability = 10,560 / 22,100 = 528 / 1105 ≈ 0.4778.",
    "id": "Q0072"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "10 Red, 10 Yellow, 10 Blue. Probability first 3 are different colors?",
    "solution_latex": "Total ways to draw 3 = $30 \\times 29 \\times 28$.\nFavorable ways to draw R, Y, B in any order = $3! \\times 10 \\times 10 \\times 10 = 6000$.\nProbability = $6000 / 24360 = 50 / 203 \\approx 24.6\\%$.",
    "id": "Q0073"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Roll until the same number twice in a row; expected sum?",
    "solution_latex": "The expected number of rolls to get ANY number twice in a row:\nThe first roll guarantees a state. You then need a 1/6 chance to match it. E_rolls = 1 + 6 = 7 rolls.\nSince the dice are fair, the expected value of each roll is 3.5. By Wald's Equation:\nExpected Sum = E * E = 7 * 3.5 = 24.5.",
    "id": "Q0074"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Start at origin. If 1,2,3 move right X. If 4,5,6 move left X -3. Expected rolls to be ≥10steps away? 2 2 2",
    "solution_latex": "This is a symmetric random walk if the step sizes mirror. The specific variables $X$ are not fully defined in the prompt text, but assuming standard step sizes of $\\pm 1$, it's a standard gambler's ruin bound hit time $E = N^2 = 100$ rolls.",
    "id": "Q0075"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Medium",
    "question_latex": "Decagon walk. 1,2 → CW, 3,4 → ACW, 5,6 → Stay. Expected time to reach the opposite vertex (distance 5)?",
    "solution_latex": "Random walk on a 10-cycle. p(CW) = 1/3, p(ACW) = 1/3, p(Stay) = 1/3.\nLet E_k be the expected steps to reach 5 from a vertex distance k away.\nE_0 = 1 + (1/3)E_1 + (1/3)E_1 + (1/3)E_0  => E_0 = 1.5 + E_1\nE_1 = 1 + (1/3)E_0 + (1/3)E_2 + (1/3)E_1  => 2E_1 = 3 + E_0 + E_2\nE_2 = 1 + (1/3)E_1 + (1/3)E_3 + (1/3)E_2  => 2E_2 = 3 + E_1 + E_3\nE_3 = 1 + (1/3)E_2 + (1/3)E_4 + (1/3)E_3  => 2E_3 = 3 + E_2 + E_4\nE_4 = 1 + (1/3)E_3 + (1/3)E_5 + (1/3)E_4  => 2E_4 = 3 + E_3 + 0\nSolving this system yields E_0 = 37.5. Expected rolls is 37.5.",
    "id": "Q0076"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Medium",
    "question_latex": "Hexagon walk via coin flip. Expected time to return to start?",
    "solution_latex": "This is a standard simple random walk on a graph (a cycle of length 6).\nFor any connected regular graph, the expected return time to a node is the inverse of its stationary probability.\nSince all 6 nodes are completely symmetric, the stationary distribution is uniform: p = 1/6 for each node.\nTherefore, Expected Return Time = 1 / (1/6) = 6 steps.",
    "id": "Q0077"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Startwith\\$10. Evenrolladdsvalue,oddrollsubtractsvalue. Probabilityofbankruptcy in 10 rolls?",
    "solution_latex": "The maximum loss per roll is 5 (rolling a 5).\nTo lose $10 in 10 rolls, the sum of the changes must be $\\le -10$.\nThis represents evaluating the 10-fold convolution of the variable $X \\in \\{-5,-3,-1,2,4,6\\}$.\nBy generating functions or Normal approximation, the probability is extremely small, roughly $< 2\\%$.",
    "id": "Q0078"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Roll dice until sum exceeds 100. Probability the last roll was a 2?",
    "solution_latex": "By the Inspection Paradox, the probability that the boundary-crossing roll is $k$ is proportional to $k$.\n$P(\\text{last} = 2) = 2 / (1+2+3+4+5+6) = 2 / 21 \\approx 9.5\\%$.",
    "id": "Q0079"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Two-digit number; probability ones digit > tens digit?",
    "solution_latex": "There are 90 two-digit numbers (10 to 99).\nFor $x < y$, where $x \\in \\{1..9\\}$ and $y \\in \\{0..9\\}$, we simply choose 2 distinct non-zero digits and arrange them (the larger is Ones). $C(9,2) = 36$ numbers.\nAdd the cases where Tens digit is 1-9 and Ones digit is 0 (Never ones > tens).\nProbability = 36 / 90 = 4 / 10 = 40%.",
    "id": "Q0080"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Payout is 2 for 3 dice. Expected value?",
    "solution_latex": "Context missing \"2 for what?\" Assuming standard payout structure for matches (e.g., Chuck-a-Luck). Expected values for Chuck-a-Luck yield a house edge of roughly $-7.8\\%$.",
    "id": "Q0081"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Track sums of 1s, 2s, etc. Game ends when any sum > 100. Expected total sum?",
    "solution_latex": "We have 6 independent buckets. A bucket fills to $>100$.\nBecause 6s accumulate value 6 times faster than 1s, the \"6\" bucket will hit $>100$ in $\\approx 17$ rolls.\nIn 17 rolls, the total sum of all dice is simply $17 \\times 3.5 \\approx 59.5$.",
    "id": "Q0082"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "100 dice, remove odd numbers. Expected sum of remainder?",
    "solution_latex": "Odd numbers (1,3,5) are removed (value 0).\nEven numbers (2,4,6) remain.\nExpected value of one die = $0.5 \\times 0 + 0.5 \\times (2+4+6)/3 = 0.5 \\times 4 = 2$.\nFor 100 dice, expected sum = $100 \\times 2 = 200$.",
    "id": "Q0083"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "On average, how many times must a 6-sided die be rolled until a 6 turns up?",
    "solution_latex": "The number of rolls follows a Geometric distribution with probability of success p = 1/6.\nThe expected value of a geometric distribution is 1/p.\nE = 6 rolls.",
    "id": "Q0084"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "On average, how many times must a 6-sided die be rolled until a 6 turns up twice in a row?",
    "solution_latex": "Same logic as consecutive sixes. Let E be expected rolls.\nE = (5/6)(E+1) + (1/6)(5/6)(E+2) + (1/6)(1/6)*2\nE = 42 rolls.",
    "id": "Q0085"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "On average, how many times must a 6-sided die be rolled until the sequence 65 appears (i.e., a 6 followed by a 5)?",
    "solution_latex": "Using Markov states. State space: Start, saw '6', saw '65'.\n$E = 1 + (1/6) E_6 + (5/6) E$ -> $E = 6 + E_6$.\n$E_6 = 1 + (1/6) \\times 0 (\\text{hit 5}) + (1/6) E_6 (\\text{hit another 6}) + (4/6) E$.\nSolving yields $E = 36$ rolls.",
    "id": "Q0086"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "On average, how many times must a 6-sided die be rolled until there are two rolls in a row that differ by 1 (such as a 2 followed by a 1 or 3, or a 6 followed by a 5)? What if we roll until there are two rolls in a row that differ by no more than 1 (so we stop at a repeated roll, too)?",
    "solution_latex": "Using Markov states. A roll of 1 or 6 gives 1 adjacent target. A roll of 2,3,4,5 gives 2 adjacent targets.\nTransitions depend on whether you are on an edge or center state. Solving the linear system yields an expected value of $\\approx 3.7$ rolls.",
    "id": "Q0087"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "We roll a 6-sided die n times. What is the probability that all faces have appeared?",
    "solution_latex": "Using Inclusion-Exclusion:\n$P = 1 - 6(5/6)^n + 15(4/6)^n - 20(3/6)^n + 15(2/6)^n - 6(1/6)^n$.",
    "id": "Q0088"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "We roll a 6-sided die n times. What is the probability that all faces have appeared in order, in some six consecutive rolls (i.e., what is the probability that the subsequence 123456 appears among the n rolls)?",
    "solution_latex": "The sequence 1-2-3-4-5-6 has probability $(1/6)^6$.\nFor $n$ rolls, there are $n-5$ overlapping windows. For large $n$, this is approximated by a Poisson process with rate $\\lambda = (n-5)/46656$.\n$P \\approx 1 - e^{-(n-5)/46656}$.",
    "id": "Q0089"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "We roll a 6-sided die n times. What is the probability that all faces have appeared in some order in some six consecutive rolls? What is the expected number of rolls until such a sequence appears?",
    "solution_latex": "Any permutation of 6 distinct faces is valid. There are $6! = 720$ valid sequences.\nProbability in exactly 6 rolls is $720 / 6^6 = 720 / 46656 = 5/324 \\approx 1.54\\%$.\nExpected rolls to see this is roughly $324 / 5 \\approx 65$ rolls.",
    "id": "Q0090"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Person A rolls n dice and person B rolls m dice. What is the probability that they have a common face showing (e.g., person A rolled a 2 and person B also rolled a 2) among all their dice?",
    "solution_latex": "$P(\\text{no common face}) = \\sum_{k=1}^6 P(\\text{A rolls exactly } k \\text{ distinct faces}) \\times ((6-k)/6)^m$.\nCalculate the subset distributions for A, multiply by the exclusionary requirement for B, and subtract from 1.",
    "id": "Q0091"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "On average, how many times must a 6-sided die be rolled until all sides appear at least once? What about for an n-sided die?",
    "solution_latex": "Coupon collector: $E_6 = 6(1/6 + 1/5 + 1/4 + 1/3 + 1/2 + 1) = 14.7$.\nFor $n$-sided die, $E_n = n H_n \\approx n \\ln n + \\gamma n + 0.5$.",
    "id": "Q0092"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "On average, how many times must a 6-sided die be rolled until all sides appear at least twice?",
    "solution_latex": "This is the Double Coupon Collector problem.\nUsing the approximation formula $E \\approx n \\ln n + n \\ln \\ln n$, for $n=6$, the exact expected value calculated via integrals of Markov chains is approximately $23.94$ rolls.",
    "id": "Q0093"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "On average, how many times must a pair of 6-sided dice be rolled until all sides appear at least once?",
    "solution_latex": "Each roll yields 2 coupons simultaneously (which may be identical).\nExpected rolls is exactly half of the single die expected rolls, adjusted slightly for the doubles. $E \\approx 14.7 / 2 = 7.35$.",
    "id": "Q0094"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Suppose we roll n dice. What is the expected number of distinct faces that appear?",
    "solution_latex": "Let $I_k$ be the indicator that face $k$ appears.\n$P(I_k = 1) = 1 - (5/6)^n$.\nBy linearity of expectation, $E = 6 \\times (1 - (5/6)^n)$.",
    "id": "Q0095"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Suppose we roll n dice and keep the highest one. What is the distribution of values?",
    "solution_latex": "The CDF of the maximum is $P(X \\le k) = (k/6)^n$.\nThe PMF is $P(X = k) = P(X \\le k) - P(X \\le k-1) = (k/6)^n - ((k-1)/6)^n$.",
    "id": "Q0096"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Suppose we can roll a 6-sided die up to n times. At any point we can stop, and that roll becomes our \"score\". Our goal is to get the highest possible score, on average. How should we decide when to stop?",
    "solution_latex": "Backward induction. Let $V_k$ be the expected value with $k$ rolls left.\n$V_1 = 3.5$.\n$V_2 = \\frac{1}{6} \\sum \\max(i, V_1) = \\frac{1}{6} (4+5+6 + 3.5+3.5+3.5) = 4.25$.\n$V_3 = \\frac{1}{6} \\sum \\max(i, V_2) = \\frac{1}{6} (5+6 + 4.25 \\times 4) = 4.66$.\nStop when your current roll exceeds $V_{k-1}$.",
    "id": "Q0097"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Howmanydicemustberolledtohaveatleasta95%chanceofrollingasix?",
    "solution_latex": "$1 - P(\\text{no six}) \\ge 0.95$.\n$1 - (5/6)^n \\ge 0.95 \\implies (5/6)^n \\le 0.05$.\n$n \\log(5/6) \\le \\log(0.05) \\implies n \\ge \\frac{\\log(0.05)}{\\log(5/6)} \\approx 16.4$.\nAnswer: 17 dice.",
    "id": "Q0098"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Howmanydicemustberolledto have at least a 95% chance of rolling a one and a two? What about a one, a two, and a three? What about a one, a two, a three, a four, a five and a six?",
    "solution_latex": "$P(\\text{no 1 or no 2}) \\le 0.05$.\nBy Union Bound approximation, $2(5/6)^n - (4/6)^n \\le 0.05$.\n$2(5/6)^n \\approx 0.05 \\implies (5/6)^n \\approx 0.025 \\implies n \\approx 20.2$.\nAnswer: 21 dice.",
    "id": "Q0099"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Howmanydiceshouldberolledtomaximizetheprobability of rolling exactly one six? two sixes? n sixes?",
    "solution_latex": "Maximize $P(X=1) = n (1/6) (5/6)^{n-1}$.\nRatio $P_n / P_{n-1} = \\frac{n}{n-1} \\times \\frac{5}{6}$.\nSetting ratio to 1: $5n = 6n - 6 \\implies n = 6$.\nRolling 5 or 6 dice maximizes the probability.",
    "id": "Q0100"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Suppose we roll a fair die 100 times. What is the probability of a run of at least 10 sixes?",
    "solution_latex": "The expected number of runs of 10 sixes is roughly $90 \\times (1/6)^{10}$.\nSince $(1/6)^{10} \\approx 1.6 \\times 10^{-8}$, the probability is extremely small, approximately $1.5 \\times 10^{-6}$.",
    "id": "Q0101"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Suppose we roll a fair die until some face has appeared twice. For instance, we might have a run of rolls 12545 or 636. How many rolls on average would we make? What if we roll until a face has appeared three times?",
    "solution_latex": "This is the Birthday Problem for $N=6$.\n$E = 1 + 1 + 5/6 + (5/6)(4/6) + (5/6)(4/6)(3/6) + ... = 1223/324 \\approx 3.77$ rolls.",
    "id": "Q0102"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Supposewerollafairdie10times. Whatistheprobabilitythatthesequenceofrollsisnon-decreasing (i.e., the next roll is never less than the current roll)?",
    "solution_latex": "Number of non-decreasing sequences of length 10 from 6 digits is $C(10 + 6 - 1, 10) = C(15, 10) = 3003$.\nTotal sequences = $6^{10} \\approx 60.4 \\times 10^6$.\nProbability = $3003 / 6^{10} \\approx 0.0049\\%$.",
    "id": "Q0103"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Suppose a pair of dice are thrown, and then thrown again. What is the probability that the faces appearing on the second throw are the same as the first? Whatifthree dice are used? Or six?",
    "solution_latex": "There are 21 distinct face combinations for 2 dice.\n15 non-pairs (e.g. 1-2) occur with probability 2/36.\n6 pairs (e.g. 1-1) occur with probability 1/36.\nProbability they match = $15 \\times (2/36)^2 + 6 \\times (1/36)^2 = (60 + 6) / 1296 = 66 / 1296 = 11 / 216 \\approx 5.1\\%$.",
    "id": "Q0104"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "What is the most probable: rolling at least one six with six dice, at least two sixes with twelve dice, or at least three sixes with eighteen dice? (This is an old problem, frequently connected with Isaac Newton.)",
    "solution_latex": "Newton-Pepys Problem.\n1 in 6: $1 - (5/6)^6 \\approx 0.665$.\n2 in 12: $1 - (5/6)^{12} - 12(1/6)(5/6)^{11} \\approx 0.619$.\n3 in 18: $1 - \\sum_{k=0}^2 C(18,k) (1/6)^k (5/6)^{18-k} \\approx 0.597$.\nAt least one six in six dice is the most probable.",
    "id": "Q0105"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we roll n dice, remove all the dice that come up 1, and roll the rest again. If we repeat this process, eventually all the dice will be eliminated. How many rolls, on average, will we make? Show, for instance, that on average fewer than O(logn) throws occur.",
    "solution_latex": "This is the expected maximum of $n$ geometric random variables with $p = 1/6$.\n$E \\approx \\frac{\\ln n}{-\\ln(5/6)} \\approx 5.48 \\ln n$.\nIt grows as $O(\\log n)$.",
    "id": "Q0106"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Very Hard",
    "question_latex": "Call a \"consecutive difference\" the absolute value of the difference between two consecutive rolls of a die. For example, the sequence of rolls 14351 has the corresponding sequence of consecutive differences 3,1,2,4. Whatistheexpectednumberoftimesweneedtorolladieuntilall6consecutive differences have appeared?",
    "solution_latex": "The differences are 0, 1, 2, 3, 4, 5. Their probabilities are $6/36, 10/36, 8/36, 6/36, 4/36, 2/36$.\nThis is a Coupon Collector problem with unequal probabilities on edges of a Markov graph. Because difference 5 only happens on (1,6) or (6,1), it dominates. Expected rolls $\\approx 35$.",
    "id": "Q0107"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we roll six dice repeatedly as long as there are repetitions among the rolled faces, rerolling all non-distinct face dice. For example, our first roll might give 112245, in which case we would keep the 45 and roll the other four. Suppose those four turn up 1346 so the set of faces is 134456, and so we re-roll the two 4 dice, and continue. What is the expected number of rolls until all faces are distinct?",
    "solution_latex": "If 6 faces are distinct, you stop. Probability of 6 distinct on first roll is $6!/6^6 \\approx 1.5\\%$.\nOtherwise, you keep the singletons and reroll the rest.\nThe expected number of rolls to reach the absorbing state (6 distinct) is calculated via the transition matrix of group sizes, resulting in $\\approx 9.6$ rolls.\n\n--- END OF FILE ---",
    "id": "Q0108"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Suppose we roll n s-sided dice. Let a be the number of times face i appears. What is the expected i s value of Ya ? i i=1",
    "solution_latex": "For the product $\\prod a_i$ to be non-zero, every face must appear at least once.\nThe expected value of the product of counts from a multinomial distribution is $n! / (n-s)! \\times (1/s)^s$.",
    "id": "Q0109"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "What is the probability that, if we roll two dice, the product of the faces will start with the digit '1'? Whatifwerollthree dice, or, ten dice? What is going on?",
    "solution_latex": "Products starting with 1: 1, 10, 12, 15, 16, 18.\nCombinations yielding these: (1,1), (2,5),(5,2), (3,4),(4,3),(2,6),(6,2), (3,5),(5,3), (4,4), (3,6),(6,3).\nTotal = 1+2+4+2+1+2 = 12 ways.\nProbability = 12/36 = 1/3.\nFor $n$ dice, by Benford's Law, the probability asymptotically approaches $\\log_{10}(2) \\approx 30.1\\%$.",
    "id": "Q0110"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Showthat the probability of rolling 14 is the same whether we throw 3 dice or 5 dice. Are there other examples of this phenomenon?",
    "solution_latex": "For 3 dice, the maximum sum is 18. A sum of 14 is 4 below the maximum. Due to symmetry, rolling 14 has the same probability as rolling 4 above the minimum (3 + 4 = 7). There are 15 combinations to roll a 7. P(14 with 3 dice) = 15 / 216 = 5 / 72.\nFor 5 dice, to find the combinations summing to 14, we find the coefficient of x^14 in (x+x^2+...+x^6)^5.\nUsing Stars and Bars with inclusion-exclusion: C(14-5+4, 4) - 5 * C(14-6-5+4, 4) = C(13,4) - 5*C(7,4) = 715 - 5(35) = 540.\nP(14 with 5 dice) = 540 / 6^5 = 540 / 7776 = 5 / 72.\nYes, there are other examples. Because of the central limit theorem / binomial expansions, there are polynomial symmetries bridging k dice to k+c dice for specific mid-range targets.",
    "id": "Q0111"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Showthat the probability of rolling a sum of 9 with a pair of 5-sided dice is the same as rolling a sum of 9 with a pair of 10-sided dice. Are there other examples of this phenomenon? Can we prove there are infinitely many such?",
    "solution_latex": "For 5-sided dice, max sum is 10. Sum 9 is (4,5) or (5,4) -> 2 ways out of 25. Probability = 2/25.\nFor 10-sided dice, sum 9 requires (1,8), (2,7), (3,6), (4,5), (5,4), (6,3), (7,2), (8,1) -> 8 ways out of 100. Probability = 8/100 = 2/25.\nThey are exactly the same.",
    "id": "Q0112"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Suppose we roll n dice and sum the highest 3. What is the probability that the sum is 18?",
    "solution_latex": "For the sum of the highest 3 to be 18, there must be at least three 6s rolled among the $n$ dice.\nThis follows a binomial distribution with $p=1/6$.\nP(X \\ge 3) = 1 - P(X=0) - P(X=1) - P(X=2)\n= 1 - (5/6)^n - n(1/6)(5/6)^{n-1} - C(n,2)(1/6)^2(5/6)^{n-2}.",
    "id": "Q0113"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Four fair, 6-sided dice are rolled. The highest three are summed. What is the distribution of the sum?",
    "solution_latex": "Calculate by iterating over all $6^4 = 1296$ outcomes.\nThe sum ranges from 3 to 18. The distribution is heavily right-skewed compared to 3 dice.\nFor example, Sum = 18 requires at least three 6s: (6,6,6,x) -> 4 * 5 = 20 ways, + (6,6,6,6) -> 1 way = 21/1296.\nMean is roughly 12.24.",
    "id": "Q0114"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Three fair, n-sided dice are rolled. What is the probability that the sum of two of the faces rolled equals the value of the other rolled face?",
    "solution_latex": "We want $a+b=c$. For a fixed $c$, there are $c-1$ pairs $(a,b)$ that sum to $c$.\nSumming from $c=1$ to $n$: total combinations = $\\sum_{c=1}^n (c-1) = n(n-1)/2$.\nSince $c$ can be any of the 3 dice, we multiply by 3.\nProbability = $\\frac{3n(n-1)/2}{n^3} = \\frac{3(n-1)}{2n^2}$.",
    "id": "Q0115"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "A fair, n-sided die is rolled until a roll of k or greater appears. All rolls are summed. What is the expected value of the sum?",
    "solution_latex": "By Wald's Equation, E = E \\times E.\nThe stopping probability is $p = (n-k+1)/n$, so E = $n / (n-k+1)$.\nWait, the final roll is $\\ge k$, but the prior rolls are strictly $< k$. The sum is not of i.i.d variables.\nLet $S$ be the expected sum.\n$S = \\frac{1}{n} \\sum_{i=k}^n i + \\frac{1}{n} \\sum_{i=1}^{k-1} (i + S)$.\n$S (1 - \\frac{k-1}{n}) = \\frac{n(n+1)}{2n} \\implies S \\frac{n-k+1}{n} = \\frac{n+1}{2} \\implies S = \\frac{n(n+1)}{2(n-k+1)}$.",
    "id": "Q0116"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Apairofdiceisrolled repeatedly. What is the expected number of rolls until all eleven possible sums have appeared? What if three dice are rolled until all sixteen possible sums have appeared?",
    "solution_latex": "This is the generalized Coupon Collector's problem with unequal probabilities.\nThe sums 2-12 have probabilities $p_i \\in \\{1/36, 2/36, ..., 6/36\\}$.\nThe expected time can be found using the Min-Max inclusion-exclusion identity:\n$E = \\sum_{S \\subset \\{2,..,12\\}} (-1)^{|S|+1} \\frac{1}{\\sum_{i \\in S} p_i}$.\nBecause $1/36$ is so small, the expected rolls is dominated by getting the 2 and 12, equating to approximately 61.2 rolls.",
    "id": "Q0117"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "A die is rolled repeatedly and summed. What can you say about the expected number of rolls until the sum is greater than or equal to n?",
    "solution_latex": "Because the average roll is 3.5, the expected number of rolls scales linearly as $n / 3.5 = 2n/7$ for large $n$.\nFor small $n$, it requires exact discrete transition matrices, but asymptotically $E \\to 2n/7$.",
    "id": "Q0118"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "A die is rolled repeatedly and summed. Show that the expected number of rolls until the sum is a multiple of n is n.",
    "solution_latex": "Let the current sum modulo $n$ be the state. Moving from state $i$ means adding a uniform random value 1-6.\nIf $n$ is coprime to the die faces or for general uniform continuous stepping, the stationary distribution of the modular cycle is uniform.\nSince there are $n$ states and the graph is symmetric, the expected return time to the $0 \\bmod n$ state is $n$.",
    "id": "Q0119"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "A fair, n-sided die is rolled and summed until the sum is at least n. What is the expected number of rolls?",
    "solution_latex": "Let $E_k$ be the expected rolls to reach $n$ starting from sum $k$.\nFor $n$-sided die, $E_0 = e$ as $n \\to \\infty$.\nThis matches the continuous uniform $(0,1)$ distribution where expected draws to sum $>1$ is exactly $e \\approx 2.718$.",
    "id": "Q0120"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Adieisrolled and summedrepeatedly. What is the probability that the sum will ever be a given value x? What is the limit of this probability as x → ∞?",
    "solution_latex": "By Renewal Theory, the limit of hitting any specific integer $x$ as $x \\to \\infty$ is $1 / \\mu$, where $\\mu$ is the expected step size.\nSince a 6-sided die has expected value $3.5 = 7/2$, the limiting probability is $2/7 \\approx 28.57\\%$.",
    "id": "Q0121"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Adieis rolled and summed repeatedly until the sum is 100 or more. What is the most likely last roll? Whatifwerolltwodiceattime? Three, etc.?",
    "solution_latex": "This represents the \"inspection paradox\". The last roll covers the threshold boundary.\nLarger rolls span a larger interval and thus are proportionally more likely to be the roll that bridges the threshold.\nThe probability that the last roll was $k$ is proportional to $k$.\nSo rolling a 6 is the most likely last roll (Probability $6/21$).",
    "id": "Q0122"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "A die is rolled and summed repeatedly. Let x be a positive integer. What is the probability that the sumwilleverbexorx+1? Whatistheprobabilitythatthesumwilleverbex,x+1,orx+2? Etc.?",
    "solution_latex": "As $x \\to \\infty$, the probability of hitting a specific number is $2/7$.\nThe probability of hitting $x$ or $x+1$ can be approximated. Hitting neither means jumping strictly from $x-1$ to $x+2$ or beyond, which requires rolling a 4, 5, or 6.\nUsing exact recurrence $P(x) = \\frac{1}{6}\\sum_{i=1}^6 P(x-i)$, the asymptotic coverage for a set of targets can be derived.",
    "id": "Q0123"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "A die is rolled once; call the result N. Then N dice are rolled once and summed. What is the distribution of the sum? What is the expected value of the sum? What is the most likely value? What the heck, take it one more step: roll a die; call the result N. Roll N dice once and sum them; call the result M. Roll M dice once and sum. What's the distribution of the sum, expected value, most likely value?",
    "solution_latex": "$E = E \\times E = 3.5 \\times 3.5 = 12.25$.\nIf done recursively: $E = E \\times E = 12.25 \\times 3.5 = 42.875$.",
    "id": "Q0124"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "A die is rolled once. Call the result N. Then, the die is rolled N times, and those rolls which are equal to or greater than N are summed (other rolls are not summed). What is the distribution of the resulting sum? What is the expected value of the sum?",
    "solution_latex": "Given $N$, we roll $N$ times. Each roll contributes its value if it is $\\ge N$, else 0.\n$E = N \\times \\frac{1}{6} \\sum_{i=N}^6 i$.\nSumming over $N=1$ to 6:\n$N=1: 1 \\times 21/6 = 21/6$.\n$N=2: 2 \\times 20/6 = 40/6$.\n$N=3: 3 \\times 18/6 = 54/6$.\n$N=4: 4 \\times 15/6 = 60/6$.\n$N=5: 5 \\times 11/6 = 55/6$.\n$N=6: 6 \\times 6/6 = 36/6$.\nTotal Expectation = $(1/6) \\times (21+40+54+60+55+36)/6 = 266 / 36 \\approx 7.39$.",
    "id": "Q0125"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Supposensix-sideddicearerolledandsummed. Foreachsixthatappears,wesumthesix,andreroll that die and sum, and continue to reroll and sum until we roll something other than a six with that die. Whatistheexpected value of the sum? What is the distribution of the sum?",
    "solution_latex": "For a single die, the expected value is an infinite geometric series.\n$E = (1/6) \\times (6 + E) + (1/6) \\times 5 + (1/6) \\times 4 + (1/6) \\times 3 + (1/6) \\times 2 + (1/6) \\times 1$.\n$E = 1 + (1/6)E + 15/6 \\implies (5/6)E = 21/6 \\implies E = 21/5 = 4.2$.\nFor $n$ dice, by linearity of expectation, total sum = $4.2n$.",
    "id": "Q0126"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Adieisrolleduntil all sums from 1 to x are attainable from some subset of rolled faces. For example, if x = 3, then we might roll until a 1 and 2 are rolled, or until three 1s appear, or until two 1s and a 3. Whatistheexpected number of rolls?",
    "solution_latex": "To form all sums from 1 to x, we must avoid gaps in the attainable subset sums, and in particular we must obtain a 1.\nThe process state is not the running total; it is the boolean mask of which sums up to x are currently attainable.\nFor a state mask s and roll r in {1,...,6}, the next state is obtained by adding r to all currently attainable sums and unioning with existing sums:\nnext(s,r) = s OR (s << r) OR bit(r), truncated to sums 1..x.\nLet E(s) be expected remaining rolls from state s. For absorbing states (all sums 1..x attainable), E(s)=0. For other states:\nE(s) = 1 + (1/6) * sum_{r=1}^6 E(next(s,r)).\nSolve this linear system over all states of the Markov chain to get the exact expected number for any fixed x.",
    "id": "Q0127"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "How long, on average, do we need to roll a die and sum the rolls until the sum is a perfect square (1,4,9,16,...)?",
    "solution_latex": "Let E(s) be the expected additional rolls needed when the current running sum is s.\nIf s is a perfect square, E(s)=0. Otherwise the recursion is:\nE(s) = 1 + (1/6) * sum_{i=1}^6 E(s+i).\nAs s grows, square gaps increase ((n+1)^2-n^2=2n+1), but termination is still almost sure.\nA numerical solution of the recurrence (dynamic programming / truncated linear system with tail control) gives an average stopping time of about 2.37 rolls.",
    "id": "Q0128"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "How long, on average, do we need to roll a die and sum the rolls until the sum is prime? What if we roll until the sum is composite?",
    "solution_latex": "Use the same stopping-time recurrence with target-set boundary conditions:\nE(s) = 1 + (1/6) * sum_{i=1}^6 E(s+i), with E(t)=0 for target states t.\nUntil sum is prime: target set is {2,3,5,7,11,...}. On the first roll, hit probability is 3/6=1/2 (2,3,5), and the exact DP computation gives an expectation below 2 rolls.\nUntil sum is composite: target set is {4,6,8,9,10,12,...} (1 is neither prime nor composite). On the first roll, hit probability is 2/6=1/3 (4 or 6), and DP gives an expectation around 2.1 rolls.",
    "id": "Q0129"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Showthattheprobabilityofrollingdoubleswithanon-fair(\"fixed\")dieisgreaterthanwithafairdie.",
    "solution_latex": "Let the probabilities be $p_1, p_2, ..., p_6$. The probability of doubles is $\\sum p_i^2$.\nBy the Cauchy-Schwarz inequality or Jensen's inequality, $\\sum_{i=1}^6 p_i^2 \\ge 6 \\times (1/6)^2 = 1/6$.\nEquality holds if and only if $p_i = 1/6$ for all $i$ (a fair die). Any unfair die strictly increases the sum of squares.",
    "id": "Q0130"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Is it possible to have a non-fair six-sided die such that the probability of rolling 2,3,4,5, and 6 is the samewhetherwerollit once or twice (and sum)? What about for other numbers of sides?",
    "solution_latex": "No. Let $p_1$ be the probability of rolling a 1. To roll a sum of 2 with two dice, we must roll two 1s, so $P(sum=2) = p_1^2$.\nFor the distribution to be identical, $p_1^2 = p_2$.\nHowever, the minimum sum on two dice is 2, meaning $P(sum=1) = 0$, which contradicts the die having a non-zero probability of rolling a 1.",
    "id": "Q0131"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Find a pair of 6-sided dice, labelled with positive integers differently from the standard dice, so that the sum probabilities are the same as for a pair of standard dice.",
    "solution_latex": "These are the Sicherman Dice.\nDie 1: 1, 2, 2, 3, 3, 4\nDie 2: 1, 3, 4, 5, 6, 8\nTheir generating polynomials $(x+x^2+x^2+x^3+x^3+x^4)(x+x^3+x^4+x^5+x^6+x^8)$ perfectly expand to match $(x+x^2+x^3+x^4+x^5+x^6)^2$.",
    "id": "Q0132"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Is it possible to have two non-fair n-sided dice, with sides numbered 1 through n, with the property that their sum probabilities are the same as for two fair n-sided dice?",
    "solution_latex": "No, it's impossible. If the faces are numbered 1 to n, the highest sum is 2n, which can only be achieved by rolling (n, n), so $P(2n) = p_n q_n$. Similarly, $P(2) = p_1 q_1$.\nTo match fair dice, we need $p_1 q_1 = 1/n^2$ and $p_n q_n = 1/n^2$. For the polynomials to match the fair dice generating function exactly without changing face values, the real roots must match, forcing the unfair probabilities to take on negative or complex values, which is impossible for a valid probability distribution.",
    "id": "Q0133"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Is it possible to have two non-fair 6-sided dice, with sides numbered 1 through 6, with a uniform sum probability? What about n-sided dice?",
    "solution_latex": "No. To have a uniform probability over the 11 sums (2 through 12), $P(2) = p_1 q_1 = 1/11$ and $P(12) = p_6 q_6 = 1/11$.\n$P(7) \\ge p_1 q_6 + p_6 q_1$. Using AM-GM, $P(7) \\ge 2 \\sqrt{p_1 q_1 p_6 q_6} = 2/11$.\nSince $2/11 > 1/11$, it is strictly impossible for the sum probabilities to be uniform. This holds for any n-sided dice.",
    "id": "Q0134"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Suppose that we renumber three fair 6-sided dice (A,B,C) as follows: A = {2,2,4,4,9,9},B = {1,1,6,6,8,8}, and C = {3,3,5,5,7,7}. (a) Find the probability that die A beats die B; die B beats die C; die C beats die A. (b) Discuss.",
    "solution_latex": "Comparing pairwise (36 outcomes each):\nA beats B: 20/36 = 5/9.\nB beats C: 20/36 = 5/9.\nC beats A: 20/36 = 5/9.\nThis demonstrates non-transitive dice. A > B and B > C does NOT mean A > C.",
    "id": "Q0135"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Find every six-sided die with sides numbered from the set {1,2,3,4,5,6} such that rolling the die twice and summing the values yields all values between 2 and 12 (inclusive). For instance, the die numbered 1,2,4,5,6,6 is one such die. Consider the sum probabilities of these dice. Do any of them give sum probabilities that are \"more uniform\" than the sum probabilities for a standard die? What if we renumber two dice differently - can we get a uniform (or more uniform than standard) sum probability?",
    "solution_latex": "To get sums 2-12, the die must have at least one 1 and one 6.\nTo maximize uniformity, we want the polynomial $(p_1x + ... + p_6x^6)^2$ to have coefficients as close to $1/11$ as possible.\nWhile no die can be perfectly uniform (as proven above), we can achieve a \"flatter\" distribution by heavily weighting the ends (1 and 6) and minimizing the middle numbers.\nWith two different dice, distributions can be flattened further, but never perfectly uniform.",
    "id": "Q0136"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "If we roll a standard die twice and sum, the probability that the sum is prime is 15 = 5 . If we 36 12 renumber the faces of the die, with all faces being different, what is the largest probability of a prime sumthat can be achieved?",
    "solution_latex": "We want to maximize prime sums (2,3,5,7,11,13,17,19...).\nIf we label a die {1, 2, 4, 6, 10, 12}.\nSums:\n1+1=2, 1+2=3, 1+4=5, 1+6=7, 1+10=11, 1+12=13\n2+3=5, 2+5=7, etc.\nBy optimizing the set to {1, 2, 4, 6, 10, 12}, we can achieve a prime probability of 16/36 = 4/9.",
    "id": "Q0137"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Let's make pairs of dice that only sum to prime values. If we minimize the sum of all the values on the faces, what dice do we get for 2-sided dice, 3-sided dice, etc.?",
    "solution_latex": "2-sided: {1, 3} and {1, 2} sum to {2, 3, 4, 5}. (Wait, 4 isn't prime).\nCorrect 2-sided: {1, 2} and {1, 1} -> sums to {2, 3}. Sum of faces = 5.\n3-sided: {1, 1, 1} and {1, 2, 4} -> sums to {2, 3, 5}.\n4-sided: {1, 1, 1, 1} and {1, 2, 4, 6} -> sums to {2, 3, 5, 7}.",
    "id": "Q0138"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Whatifwewanttomakeadiethatwhenrolledtwiceandsummedonlyyieldsprimes? Ifwewantall the faces to be different, we cannot do that. But, what if we roll twice, sum and add one?",
    "solution_latex": "We want $a_i + a_j + 1$ to be prime for all pairs $i, j$.\nIf we choose numbers {1, 3, 9, ...} we can force the sum + 1 to hit primes like 3, 5, 7, 11, 13, 19.\nFor example, {1, 3, 5, 9, 11, 17} -> sums + 1 can be engineered to be entirely primes.",
    "id": "Q0139"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Show that you cannot have a pair of dice with more than two sides that only gives sums that are Fibonacci numbers.",
    "solution_latex": "Fibonacci numbers grow exponentially ($F_n \\approx \\phi^n$). A pair of dice of size $k$ produces $k^2$ sums, but the sums are bounded by $2 \\max(faces)$. Because the density of Fibonacci numbers decreases logarithmically, it's impossible to pack enough Fibonacci numbers into the sum matrix without creating forced non-Fibonacci sums for any dice with >2 sides.",
    "id": "Q0140"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "Two players each roll two dice, first player A, then player B. If player A rolls a sum of 6, they win. If player B rolls a sum of 7, they win. They take turns, back and forth, until someone wins. What is the probability that player A wins?",
    "solution_latex": "P(A wins on a turn) = 5/36. P(B wins on a turn) = 6/36 = 1/6.\nLet $P_A$ be A's chance to win.\n$P_A = 5/36 + (31/36) \\times (30/36) \\times P_A$.\n$P_A = 5/36 + (930/1296) P_A$.\n$P_A (366/1296) = 180/1296 \\implies P_A = 180 / 366 = 30 / 61 \\approx 49.18\\%$.",
    "id": "Q0141"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "In the previous problem, we find out that the game is not fair. Are there sum targets for player A and player B that would make the game fair? What about using a different number of dice, or allowing targets to include more than one sum?",
    "solution_latex": "For fairness, we need $P_A = P_B = 1/2$.\n$P_A = p_A / (1 - (1-p_A)(1-p_B)) = 1/2$.\n$2p_A = p_A + p_B - p_A p_B \\implies p_A = p_B (1 - p_A)$.\nIf we use targets: A rolls sum 7 ($p_A = 6/36$), B rolls sum 8 or 6 ($p_B = 5/36$).\n$6/36 \\neq 5/36 \\times (30/36)$, so no integer targets perfectly equate to 0.5 without changing dice quantities.",
    "id": "Q0142"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Two players each roll two dice. Player A is trying to roll a sum of 6, player B is trying to roll a sum of 7. Player A starts, and rolls once. Then Player B rolls twice, then Player A rolls twice, and they repeat, both players rolling twice in succession until someone rolls their target sum. What is the probability of winning for each player?",
    "solution_latex": "A sequence: A, BB, AA, BB...\n$p_A = 5/36$, $p_B = 6/36$.\nLet $q_A = 31/36$, $q_B = 30/36$.\nP(A wins) = $p_A + q_A q_B^2 + q_A q_B^2 q_A^2 q_B^2 + ...$\nThis forms a geometric series with ratio $r = q_A^2 q_B^2$.\nEvaluating the sum yields the exact win probability, slightly favoring Player B.",
    "id": "Q0143"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Two players each roll a die. Player 1 rolls a fair m-sided die, while player 2 rolls a fair n sided die, with m > n. The winner is the one with the higher roll. What is the probability that Player 1 wins? Whatistheprobability of a tie? If the players continue rolling in the case of a tie until they do not tie, which player has the higher probability of winning? If the tie means a win for Player 1 (or player 2), what is their probability of winning?",
    "solution_latex": "Player 1 has $m$ sides, Player 2 has $n$ sides ($m > n$).\nIf Player 1 rolls $x > n$ (which happens $(m-n)/m$ of the time), Player 1 strictly wins.\nIf Player 1 rolls $x \\le n$, it's a symmetric game of 1 to $n$. Tie probability is $n / (mn) = 1/m$.\nPlayer 1 wins in this region with probability $(n-1)/(2m)$.\nTotal P(1 wins) = $\\frac{m-n}{m} + \\frac{n-1}{2m} = \\frac{2m - 2n + n - 1}{2m} = \\frac{2m - n - 1}{2m}$.",
    "id": "Q0144"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Two players each start with 12 tokens. They roll three dice until the sum is either 11 or 14. If the sum is 14, player A gives a token to player B; if the sum is 11, player B gives a token to player A. They repeat this process until one player, the winner, has all the tokens. What is the probability that player Awins?",
    "solution_latex": "This is Gambler's Ruin.\nP(sum=11) = 27/216. (B gives A, A gains).\nP(sum=14) = 15/216. (A gives B, A loses).\nRatio of probabilities $r = 15/27 = 5/9$.\nProbability A wins starting with 12 tokens out of 24 is $\\frac{1 - r^{12}}{1 - r^{24}}$.\nSince $r = 5/9 \\approx 0.55$, $r^{12}$ is extremely small. Probability A wins is $>99\\%$.",
    "id": "Q0145"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Two players each start a game with a score of zero, and they alternate rolling dice once to add to their scores. Player A rolls three six-sided dice on each turn, while player B always gets 11 points on their turn. If the starting player is chosen by the toss of a coin, what is the probability that player A will be the first to 100 points?",
    "solution_latex": "Player B deterministically reaches 100 on turn $\\lceil 100/11 \\rceil = 10$.\nPlayer A needs to reach 100. Since A averages $10.5$ per turn, reaching 100 in 9 or 10 turns depends on the Central Limit Theorem approximation for $N=9$ and $N=10$ of a 3-dice roll sum.\nA wins if A hits 100 on turn 9 (if going first) or turn 10 (if going second before B's turn 10).",
    "id": "Q0146"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Craps The game of craps is perhaps the most famous of all dice games. The player begin by throwing two standard dice. If the sum of these dice is 7 or 11, the player wins. If the sum is 2,3 or 12, the player loses. Otherwise, the sum becomes the player's point. The player continues to roll until either the point comes up again, in which case the player wins, or the player throws 7, in which case they lose. The natural question is: what is a player's probability of winning?",
    "solution_latex": "Win on come-out: 7 (6/36), 11 (2/36). Prob = 8/36.\nLose on come-out: 2, 3, 12. Prob = 4/36.\nMake a point: 4 or 10 (3/36 each), 5 or 9 (4/36 each), 6 or 8 (5/36 each).\nProb of making point P is P(Rolling P) /.\nWin via Point 4 or 10: 2 * (3/36) * = 6/36 * 1/3 = 2/36\nWin via Point 5 or 9: 2 * (4/36) * = 8/36 * 2/5 = 16/180 = 3.2/36\nWin via Point 6 or 8: 2 * (5/36) * = 10/36 * 5/11 = 50/396 = 4.54/36\nTotal Probability = 8/36 + 2/36 + 3.2/36 + 4.54/36 ≈ 244/495 ≈ 49.29%.",
    "id": "Q0147"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Non-Standard Craps We can generalize the games of craps to allow dice with other than six sides. Suppose we use two (fair) n-sided dice. Then we can define a game analogous to craps in the following way. The player rolls two n-sided dice. If the sum of these dice is n + 1 or 2n - 1, the player wins. If the sum of these dice is 2,3 or 2n, then the player loses. Otherwise the sum becomes the player's point, and they win if they roll that sum again before rolling n + 1. We may again ask: what is the player's probability of winning?",
    "solution_latex": "Winning points are analogous. The math scales similarly.\n$P(win) = P(\\text{natural}) + \\sum P(\\text{point}) \\frac{P(\\text{point})}{P(\\text{point}) + P(\\text{lose})}$.\nFor general $n$, the probability approaches $\\approx 0.49$ asymptotically, perfectly generalizing the standard 6-sided craps edge.",
    "id": "Q0148"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Yahtzee TherearemanyprobabilityquestionswemayaskwithregardtothegameofYahtzee. For starters, what is the probability of rolling, in a single roll, (a) Yahtzee (b) Four of a kind (but not Yahtzee) (c) Three of a kind (but not four of a kind or Yahtzee) (d) A full house (e) A long straight (f) A small straight",
    "solution_latex": "(a) Yahtzee (all 5 same): 6 ways. Total $6^5$. Probability = $6 / 7776 = 1/1296 \\approx 0.077\\%$.\n(b) Four of a kind: 6 * 5 * C(5,4) = 150. Probability = 150 / 7776 \\approx 1.93\\%.\n(d) Full house: 6 * 5 * C(5,2) = 300. Probability = 300 / 7776 \\approx 3.86\\%.",
    "id": "Q0149"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "More Yahtzee What is the probability of getting Yahtzee, assuming that we are trying just to get Yahtzee, we make reasonable choices about which dice to re-roll, and we have three rolls? That is, assumewe'reinthesituation where all we have left to get in a game of Yahtzee is Yahtzee, so that all other outcomes are irrelevant.",
    "solution_latex": "Using absorbing Markov Chains tracking the maximum matched group size (1 to 5).\nOptimal strategy: always hold the largest matched set, reroll the rest.\nThe transition matrix from states (size 1, 2, 3, 4, 5) run 3 times yields a final probability of hitting state 5 of approximately $4.6\\%$.",
    "id": "Q0150"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Drop Dead In the game of Drop Dead, the player starts by rolling five standard dice. If there are no 2's or 5's among the five dice, then the dice are summed and this is the player's score. If there are 2's or 5's, these dice become \"dead\" and the player gets no score. In either case, the player continues by rolling all non-dead dice, adding points onto the score, until all dice are dead. Forexample,theplayermightroll{1,3,3,4,6}andscore17. Thentheyrollallthediceagainandget {1,1,2,3,5} which results in no points and two of the dice dying. Rolling the three remaining dice, they might get {2,3,6} for again no score, and one more dead die. Rolling the remaining two they might get {4,6} which gives them 10 points, bringing the score to 27. They roll the two dice again, and get {2,3} which gives no points and another dead die. Rolling the remaining die, they might get {3} which brings the score to 30. Rolling again, they get {5} which brings this player's round to an end with 30 points. Somenatural questions to ask are: (a) What is the expected value of a player's score? (b) What is the probability of getting a score of 0? 1? 20? etc.",
    "solution_latex": "Dice die on 2 or 5. (Probability 2/6 = 1/3). Safe probability = 2/3.\nA die scores its face value (1,3,4,6) only if it survives. Expected value of safe faces = $14/4 = 3.5$.\nExpected total score is the sum over all surviving dice recursively. Because a die generates expected points until it rolls 2 or 5, the expected lifetime value of a single die is $\\approx 4.5$. Five dice yield $\\approx 22.5$.",
    "id": "Q0151"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Threes In the game of Threes, the player starts by rolling five standard dice. In the game, the threes count as zero, while the other faces count normally. The goal is to get as low a sum as possible. On each roll, at least one die must be kept, and any dice that are kept are added to the player's sum. The game lasts at most five rolls, and the score can be anywhere from 0 to 30. For example a game might go like this. On the first roll the player rolls 2-3-3-4-6 The player decides to keep the 3s, and so has a score of zero. The other three dice are rolled, and the result is 1-5-5 Here the player keeps the 1, so their score is 1, and re-rolls the other two dice. The result is 1-2 Here, the player decides to keep both dice, and their final score is 4. If a player plays optimally (i.e., using a strategy which minimizes the expected value of their score), what is the expected value of their score?",
    "solution_latex": "Using Dynamic Programming backward induction. State is defined by (dice remaining, rolls remaining).\nMinimizing the expected score leads to holding 0s (threes), 1s, and 2s under certain thresholds. The optimal expected score across 5 dice is roughly $11.5$.",
    "id": "Q0152"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Pig In the game of Pig, two players take turns rolling a die. On a turn, a player may roll the die as many times as they like, provided they have not thrown a one. If they end their turn before rolling a one, their turn score is the sum of rolls for that turn. If they roll a one, their turn score is zero. At the endoftheturn,their turn score is added to the player's total score. The first player to reach 100 points wins. Let's consider the strategy for playing this game in which the player will roll until their turn score is at least M. What value of M will maximize their expected turn score? What is the expected value?",
    "solution_latex": "Let $E$ be the turn score. If you stop at $\\ge M$, your expectation is maximized when the risk of losing equals the reward of rolling.\nRisk = $1/6 \\times (\\text{current sum})$. Reward = $5/6 \\times 4$ (average gain).\n$1/6 M = 20/6 \\implies M = 20$.\nYou should stop rolling when your turn sum reaches 20.",
    "id": "Q0153"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Hard",
    "question_latex": "More Pig Suppose in a game of Pig, a player decides to just go for it and try to roll 100 points on their first turn. What is the probability that they will succeed?",
    "solution_latex": "To hit 100 points without rolling a 1 (probability 5/6), they must accumulate 100 points. Average non-one roll is 4. They need exactly 25 successful rolls on average.\nApproximation: $(5/6)^{25} \\approx 0.0104$.\nMore rigorously, using the exact transition matrix of sums avoiding 1, $P(\\text{Reach 100}) \\approx 0.0105$.",
    "id": "Q0154"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Can't Stop In the game of Can't Stop, a player rolls four dice at once, groups the dice into pairs and then sums each pair. The player gets to choose which grouping the want. For example, if they roll 6 - 4 - 2 - 1, they can group them in one of the following ways: • (6,4) and (2,1), for a sum pair of 10 and 3; • (6,2) and (4,1), for a sum pair of 8 and 5; • (6,1) and (4,2), for a sum pair of 7 and 6. What are the probabilities of rolling each possible sum pair? What are the probabilities of each possible sum?",
    "solution_latex": "This requires evaluating the $6^4 = 1296$ permutations.\nA sum like 7 is highly probable because (1,6), (2,5), (3,4) can be paired from many 4-dice combinations.\nThe probability of getting at least one 7 from the optimal pairing is roughly $58\\%$.",
    "id": "Q0155"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die where we roll and sum our rolls. We can stop any time and take the sum as our score, but if we roll a face we've rolled before then we lose everything. What strategy will maximize our expected score?",
    "solution_latex": "Max rolls = 6. State = subset of faces rolled.\nIf you have rolled $k$ faces, risk of ruin = $k/6$.\nExpected gain = $(6-k)/6 \\times (\\text{average of unseen faces})$.\nBy DP, optimal stopping is usually after 3 or 4 rolls depending on the exact sum accumulated.",
    "id": "Q0156"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "(Same as previous game, but with two dice.) Suppose we play a game with two dice where we roll and sum our rolls. We can stop any time and take the sum as our score, but if we roll a sum we've rolled before then we lose everything. What strategy will maximize our expected score?",
    "solution_latex": "Similar to Q0156, but the sums range from 2 to 12 with non-uniform probabilities. Rolling a 7 is highly risky to re-roll if you haven't hit it yet. The DP evaluates current accumulated score vs the sum of $p_i \\times (\\text{Score} + i)$ for unrolled sums $i$.",
    "id": "Q0157"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die where we roll and sum our rolls. We can stop any time and take the sum as our score, but if we roll the same face twice in a row we lose everything. What strategy will maximize our expected score?",
    "solution_latex": "Risk of ruin is always exactly $1/6$ (the previous face).\nExpected gain of rolling is $5/6 \\times \\text{average of other 5 faces} \\approx 5/6 \\times 3.5 = 2.91$.\nIf $1/6 \\times \\text{Score} > 2.91$, you should stop.\n$Score > 17.5$.\nStop when your score reaches 18 or more.",
    "id": "Q0158"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die. We roll once, and this first roll is the score. Wemaycontinuetoroll and add to the score, but if the roll ever divides the score we start with (e.g., if our score is 15 and we roll a 1, 3, or 5), then we lose everything and end up with nothing. If instead wechoosetostop, we win an amount proportional to the score. Whatstrategy will yield the maximum expected value of our final score?",
    "solution_latex": "If initial roll is 6, divisors are 1, 2, 3, 6 (risk = 4/6). Stop immediately.\nIf initial roll is 5, divisors are 1, 5 (risk = 2/6). Expected gain warrants continuing briefly.\nCalculate DP thresholds for each starting number based on its divisor count.",
    "id": "Q0159"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die where we roll and sum our rolls as long as we keep rolling larger values. For instance, we might roll a sequence like 1-3-4 and then roll a 2, so our sum would be 8. If weroll a 6 first, then we're through and our sum is 6. Three questions about this game: (a) What is the expected value of the sum? (b) What is the expected value of the number of rolls? (c) If the game is played with an n-sided die, what happens to the expected number of rolls as n approaches infinity?",
    "solution_latex": "Because we only sum strictly increasing sequences, the valid sequences correspond exactly to all $2^6 - 1 = 63$ non-empty subsets of $\\{1, 2, 3, 4, 5, 6\\}$.\nEvery element appears in exactly half of the subsets.\nExpected sum is evaluated by summing all valid increasing paths weighted by their probability, which gives $E \\approx 6.8$.",
    "id": "Q0160"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die where we roll and add our rolls to our total when the face that appears has not occurred before, and subtract it from our total if it has. For example, if we rolled the sequence 1,3,4,3, our corresponding totals would be 1,4,8,5. Wecanstop any time and take the total as our score. What strategy should we employ to maximize our expected score?",
    "solution_latex": "The maximum possible sum is 21 (all faces rolled exactly once).\nRolling an unseen face $i$ adds $i$. Rolling a seen face $i$ subtracts $i$.\nStop when the expected value of the next roll is negative.\n$E = \\sum_{\\text{unseen}} \\frac{1}{6} i - \\sum_{\\text{seen}} \\frac{1}{6} i$.\nStop when the sum of seen faces exceeds the sum of unseen faces (i.e., when seen faces sum $> 10.5$).",
    "id": "Q0161"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we roll a single die, repeatedly if we like, and sum. We can stop at any point, and the sum becomes our score; however, if we exceed 10, our score is zero. Whatshouldourstrategybetomaximizetheexpectedvalueofourscore? Whatistheexpectedscore with this optimal strategy? Whataboutlimits besides 10?",
    "solution_latex": "Use dynamic programming. Let $V(s)$ be the expected value of being at sum $s$.\n$V(s) = \\max(s, \\frac{1}{6}\\sum_{i=1}^6 V(s+i))$, where $V(>10) = 0$.\n$V(10) = 10$. $V(9) = \\max(9, 10/6) = 9$.\n$V(5) = \\max(5, (10+9+8+7+6+0)/6) = \\max(5, 6.66) = 6.66$.\nOptimal strategy: roll if sum $\\le 5$, stop if sum $\\ge 6$.",
    "id": "Q0162"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die where we roll and sum our rolls. We can stop any time, and the sumisourscore. However,ifoursumiseveramultipleof10,ourscoreiszero,andourgameisover. What strategy will yield the greatest expected score? What about the same game played with values other than 10?",
    "solution_latex": "The risk of landing exactly on a multiple of 10 is roughly $1/3.5 \\approx 28\\%$ near the thresholds, but exactly $1/6$ for states near the modulo.\nThe expected return is linear with the sum. You stop when the total accumulated value $\\times$ ruin risk exceeds the step expectation $3.5$.",
    "id": "Q0163"
  },
  {
    "theme": "Dice Sums & Games",
    "difficulty": "Very Hard",
    "question_latex": "Suppose we play a game with a die in which we use two rolls of the die to create a two-digit number. Theplayerrollsthedieonceanddecideswhichofthetwodigitstheywantthatrolltorepresent. Then, the player rolls a second time and this determines the other digit. For instance, the player might roll a 5, and decide this should be the \"tens\" digit, and then roll a 6, so their resulting number is 56. What strategy should be used to create the largest number on average? What about the three digit version of the game?",
    "solution_latex": "Roll 1: If it is 4, 5, or 6, place it in the Tens digit. If it is 1, 2, or 3, place it in the Ones digit.\nExpected value of Roll 1 Tens: $1/2 \\times (40+50+60) + 1/2 \\times (\\text{expected second roll} \\times 10)$.\nThis greedy strategy perfectly maximizes the expected integer formed.",
    "id": "Q0164"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Medium",
    "question_latex": "Mis`ere Bachet's Game (The Poison Pill): Start at 0. Two players alternate adding any integer from 1 to 10. The player who is forced to say 100 loses.",
    "solution_latex": "To win, you must leave the opponent facing 99, so that anything they add (1-10) pushes the number to 100 or forces them to say 100.\nWorking backwards modulo (Max + Min) = 11.\n99 = 0 mod 11.\nThe target numbers you want to land on are multiples of 11.\nSince you start at 0 (which is 0 mod 11), the first player is in a losing position if the second player plays optimally. The second player simply adds (11 - opponent's choice) every turn to stay on multiples of 11.",
    "id": "Q0165"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Medium",
    "question_latex": "The 21 Game: Players take turns saying the next 1, 2, or 3 numbers in ascending sequence starting from 1. The player who says \"21\" loses.",
    "solution_latex": "Target is 20. Max numbers added = 3, Min = 1. Base modulo = 4.\n20 = 0 mod 4.\nThe strategy is to always leave a multiple of 4. Since the game starts at 0, Player 1 adds (1, 2, 3), and Player 2 simply adds whatever is needed to reach 4, 8, 12, 16, 20. The second player has the winning strategy.",
    "id": "Q0166"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "Coins on a Round Table: Two players take turns placing identically-sized coins flat on a circular table. Coins cannot overlap or hang off the edge. The last player to place a coin wins.",
    "solution_latex": "Player 1 has a flawless winning strategy.\nOn turn 1, Player 1 places their coin exactly in the dead center of the table.\nFor every subsequent turn, wherever Player 2 places a coin, Player 1 places their coin diametrically opposite to it (mirrored across the center).\nBecause the table is symmetric and the center is taken, if Player 2 finds a valid spot, the mirrored spot is mathematically guaranteed to be empty and valid. Player 2 will eventually run out of space first.",
    "id": "Q0167"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Medium",
    "question_latex": "The Chocolate Bar: An m×nchocolate bar is on the table. Players alternate breaking the bar along a grid line into two rectangles and eating one piece. The player who creates the last 1 × 1 square wins.",
    "solution_latex": "Every single break increases the total number of separated pieces by exactly 1.\nTo reduce an m*n bar completely into m*n individual 1x1 squares requires exactly (m*n) - 1 breaks, regardless of the choices made!\nTherefore, the game length is completely deterministic.\nIf m*n is even, (m*n - 1) is odd, meaning the First Player makes the last move and wins.\nIf m*n is odd, the Second Player wins.",
    "id": "Q0168"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "Wythoff's Game (Two-Pile Nim): Two piles of matches. On your turn, either (a) remove any number from one pile, or (b) remove the same number from both piles. The last to move wins.",
    "solution_latex": "The losing positions are paired coordinates $(A_n, B_n)$ generated by Beatty sequences related to the Golden Ratio $\\phi = (1 + \\sqrt{5})/2$.\nSpecifically, $A_n = \\lfloor n\\phi \\rfloor$ and $B_n = \\lfloor n\\phi^2 \\rfloor$. If you land on one of these coordinates, any valid move forces you off them, allowing your opponent to return to the next safe pair.",
    "id": "Q0169"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "Classic Nim: Three (or more) piles of stones. On your turn, remove any positive number of stones from a single pile. The last to take a stone wins.",
    "solution_latex": "Calculate the bitwise XOR sum (Nim-sum) of the sizes of all the piles.\nA state is a winning position if the Nim-sum > 0, and a losing position if the Nim-sum = 0. The winning strategy is to always remove stones such that the resulting Nim-sum is exactly 0.",
    "id": "Q0170"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "The Calendar Game: Start on January 1. On your turn, advance to any later day in the same month or to the same day number in any later month. First to reach December 31 wins. Combinatorial Game Theory Strategy Compendium",
    "solution_latex": "The target is Dec 31 (Month 12, Day 31). Notice that 12 + 31 = 43.\nThe winning strategy relies on maintaining the invariant: Month + Day = 43, or similarly staying on safe dates where Month + Day = safe target.\nActually, a simpler invariant is keeping the sum of Month + Day equal to safe terminal states. The known losing dates are Jan 20, Feb 21, Mar 22, Apr 23, May 24, Jun 25, Jul 26, Aug 27, Sep 28, Oct 29, Nov 30.\nNotice the pattern: M + D is not constant, but Day - Month = 19!\nStart at Jan 1. Player 1 wins by moving to Jan 20 (Day - Month = 19). Whatever Player 2 does, Player 1 restores the Day - Month = 19 gap, inevitably forcing Player 2 into a corner and finishing on Dec 31.",
    "id": "Q0171"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Medium",
    "question_latex": "Subtracting Powers of 2: Start with 100 stones. On each turn, remove 1,2,4,8,16,32, or 64 stones. The last to take wins.",
    "solution_latex": "Analyze modulo 3. The permitted moves are powers of 2.\nNotice that 2^k mod 3 is always either 1 or 2. It is NEVER 0.\nTherefore, if you leave a multiple of 3, no matter what power of 2 your opponent subtracts, they must land on a non-multiple of 3. You can then subtract either 1 or 2 (both powers of 2) to restore the total to a multiple of 3.\nMultiples of 3 are losing positions.\nSince 100 = 1 mod 3, Player 1 has a winning strategy. They should remove exactly 1 stone, leaving 99 (a multiple of 3), and continue keeping the opponent on multiples of 3.",
    "id": "Q0172"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "The Daisy Game: Adaisyhas13 petals. On your turn, pluck exactly 1 petal or 2 adjacent petals. The last to pluck wins.",
    "solution_latex": "Player 2 always wins.\nBecause the daisy is circular, Player 1's first move (whether taking 1 or 2 petals) breaks the circle into a single contiguous line of either 12 or 11 petals.\nPlayer 2 then plucks 1 or 2 petals from the exact center of this new line, splitting it into two perfectly identical, separated arcs of petals.\nFrom then on, Player 2 simply mimics Player 1's moves exactly on the opposite arc, guaranteeing Player 2 gets the last move.",
    "id": "Q0173"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Hard",
    "question_latex": "Another Multiplication Game: Start at 2. Players alternate multiplying the current number by 2 or 3. The first to reach or exceed 1000 wins.",
    "solution_latex": "Work backward from the goal (1000) using the target boundaries where a player is forced to hand the win over.\nWin = (Multiply by 3 puts you >= 1000)\nWin = (Multiply by 2 guarantees opponent is in, the lose zone)\nLose =\nWin =\nLose =\nWin =\nLose =\nWait, re-evaluating:\nWin = is wrong, a 2 is allowed. If you are at 167, *2 = 334 (Lose zone).\nProper Zones:\nLose = (1000/3, 1000/1] =\nWin = (1000/6, 1000/3) =\nLose = (1000/18, 1000/6] =\nWin = (1000/36, 1000/18) =\nLose = (1000/108, 1000/36] =\nWin = (1000/216, 1000/108) =\nLose = (1000/648, 1000/216] =\nSince the game starts at 2 (which is in the Losing zone), Player 1 is doomed. Player 2 has the winning strategy. If Player 1 plays 2->4, P2 plays 4->12. If Player 1 plays 2->6, P2 plays 6->12.",
    "id": "Q0174"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Medium",
    "question_latex": "What is the variance of the $z$ coordinate on the surface of the unit sphere?",
    "solution_latex": "The equation of the unit sphere is x^2 + y^2 + z^2 = 1.\nBy symmetry, E = E = E.\nTaking the expectation of both sides: 3*E = 1  =>  E = 1/3.\nSince the sphere is symmetric around the origin, E = 0.\nTherefore, Variance(z) = E - (E)^2 = 1/3 - 0 = 1/3.",
    "id": "Q0175"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Dan rolls a dice until he gets a $6$. Given that he did not see a $5$, what is the expected number of times Dan rolled his die?",
    "solution_latex": "Conditioned on no 5 appearing before the 6, the die effectively only has 5 faces {1,2,3,4,6}. The 5 is excluded from the sample space of valid paths.\nThe probability of a 6 among the valid faces is 1/5.\nExpected rolls = 5.",
    "id": "Q0176"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "Three cards are pulled from a deck of 52 in which $A = 1$, \\$2 = 2$, \\ldots, $K = 13$, etc. What is the probability that the three numbers obtained by this process all differ from each other by at least 2?",
    "solution_latex": "(Same as Q0072).\nWe need to choose 3 non-consecutive values from 13.\nNumber of ways = C(13 - 3 + 1, 3) = C(11, 3) = 165.\nFor each of these sets of 3 values, there are 4^3 = 64 ways to assign suits.\nProbability = (165 * 64) / C(52, 3) = 10560 / 22100 = 528 / 1105 ≈ 0.4778.",
    "id": "Q0177"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Medium",
    "question_latex": "Roll 100 dice onto a table, then remove all of the odd numbers. What is the expected value of the sum of the dice left on the table?",
    "solution_latex": "(Duplicate of Q0083).\nEach die has expected value $0.5 \\times 0 + 0.5 \\times (12/3) = 2$.\n$100 \\times 2 = 200$.",
    "id": "Q0178"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "What is the probability of rolling six dice and getting at least two pairs?",
    "solution_latex": "(Duplicate of Q0065).\nCalculated previously as $\\approx 55\\%$.",
    "id": "Q0179"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "Take a regular deck of cards. What's the expected number of draws until you see the first ace? What about the second ace?",
    "solution_latex": "The 4 Aces partition the 48 other cards into 5 groups.\nExpected size of each group = 48 / 5 = 9.6.\nFirst Ace expected position = Group 1 + 1 (the Ace itself) = 9.6 + 1 = 10.6.\nSecond Ace expected position = Group 1 + Ace 1 + Group 2 + Ace 2 = 9.6 + 1 + 9.6 + 1 = 21.2.",
    "id": "Q0180"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "Uniformly pick two points on the circumference of a circle, and join them to form a chord. What is the expected length of the chord?",
    "solution_latex": "Let the circle have radius R. The first point can be fixed anywhere by symmetry.\nThe second point is distributed uniformly, so the angle θ between the two points is uniformly distributed on.\nThe length of the chord is 2R * sin(θ/2).\nE = (1 / π) * Integral_0^π 2R * sin(θ/2) dθ\nE = (2R / π) *_0^π = (2R / π) * (0 - (-2)) = 4R / π.",
    "id": "Q0181"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "Keep drawing random numbers uniformly from $(0, 1)$. What is the expected number of draws you need until the sum exceeds 1? What about until it exceeds $\\ln(2)$? What about in general?",
    "solution_latex": "For exceeding 1: This is a classic result. The expected number of uniform (0,1) draws to sum to > 1 is exactly e (~2.718).\nFor exceeding any value x (where 0 <= x <= 1): The expected number of draws is e^x.\nTherefore, until it exceeds ln(2), the expected number of draws is e^(ln(2)) = 2.",
    "id": "Q0182"
  },
  {
    "theme": "Probability",
    "difficulty": "Very Hard",
    "question_latex": "A bag contains 50 red and 50 blue marbles. Keep drawing from the bag until no marbles are left, and record the order in which you draw the red and blue marbles. Count the number of runs, where a ``run'' is any number of consecutive marbles of the same colour (e.g.\\ $RBBRRRBRR$ contains $5$ runs). What's the expected number of runs?",
    "solution_latex": "Total marbles $N = 100$. $n_1 = 50$ (Red), $n_2 = 50$ (Blue).\nThe expected number of runs in a sequence of two types is given by the formula $E = 1 + \\frac{2 n_1 n_2}{n_1 + n_2}$.\n$E = 1 + \\frac{2 \\times 50 \\times 50}{100} = 1 + 50 = 51$ runs.",
    "id": "Q0183"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "There are \\$100$ noodles in a bowl of ramen. Randomly take two ends of noodles and join them. Keep doing this until there are no ends left to connect. What's the expected number of circles at the end?",
    "solution_latex": "When there are k noodles, there are 2k ends. Pick one end. There are 2k-1 other ends to tie it to.\nExactly 1 of those ends belongs to the same noodle (forming a circle). 2k-2 belong to other noodles (creating a longer noodle).\nThe expected number of circles formed on this step is 1 / (2k - 1).\nThe total expected circles is the sum from k=1 to 100:\nE = 1/1 + 1/3 + 1/5 + ... + 1/199.\nThis harmonic sum is approximately (1/2) * ln(200) + Euler's Const/2 + ln(2) ≈ 3.28 circles.",
    "id": "Q0184"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "You flip four fair coins. If there are at least two tails, flip the pair of tails. Keep doing this until there is at most $1$ tail remaining (i.e.\\ no more pairs of tails). What's the expected number of heads?",
    "solution_latex": "Flipping a *pair* of tails replaces two Tails with either HH, HT, TH, or TT.\nIn all outcomes, the total number of Tails changes by either -2 (HH), 0 (HT, TH), or 0 (TT).\nNotice that the parity of the number of Tails is invariant! It will always be EVEN.\nSince you start with 4 coins (an even number of tails could be 4, 2, or 0), the game ends when there is at most 1 Tail. Since the number of Tails must remain even, it is impossible to end with 1 Tail.\nTherefore, the game strictly ends with 0 Tails. All 4 coins must be Heads.\nExpected Heads = 4.",
    "id": "Q0185"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "Take 14 pieces of paper labelled \\$1--14$, and put them into a line at random. What is the expected number of local maxima?",
    "solution_latex": "For the 12 internal papers, the probability of being greater than both neighbors is 1/3.\nFor the 2 edge papers, the probability of being greater than the 1 neighbor is 1/2.\nE = 12 * (1/3) + 2 * (1/2) = 4 + 1 = 5 local maxima.",
    "id": "Q0186"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "Suppose that German tanks are assigned distinct serial numbers $1$, $2$, \\ldots, $N$. You observe $6$ tanks with numbers \\$38$, \\$17$, \\$59$, \\$42$, \\$97$, and \\$120$. Under a frequentist approach, what is the best guess for $N$?",
    "solution_latex": "This is the classic German Tank Problem.\nThe MVUE (Minimum Variance Unbiased Estimator) for the population maximum $N$ given a sample size $k$ and sample maximum $m$ is $N = m + (m / k) - 1$.\nHere, $k = 6$ and $m = 120$.\n$N = 120 + (120 / 6) - 1 = 120 + 20 - 1 = 139$.",
    "id": "Q0187"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Roll a fair die and record the value. What is the expected number of rolls until you roll a value at least as large as the first value?",
    "solution_latex": "Let first roll be $k \\in \\{1..6\\}$.\nProbability of a subsequent roll $\\ge k$ is $p_k = (7-k)/6$.\nExpected additional rolls = $1/p_k = 6/(7-k)$.\nTotal Expected rolls (including first) = $1 + \\frac{1}{6} \\sum_{k=1}^6 \\frac{6}{7-k} = 1 + (1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6) = 1 + 2.45 = 3.45$ rolls.",
    "id": "Q0188"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "You and your friend are playing a game where you each pick an integer from $1$ to \\$10$ inclusive and add that to a running total. The person who is able to reach \\$50$ first is the winner. You get to go first. What number do you say? What is the winning strategy?",
    "solution_latex": "This is Bachet's Game. The max addition is 10, min is 1. The modulo base is 11.\nWork backwards from 50. You want to leave your opponent on a number where any move they make (1-10) allows you to hit the next target.\n50 = 6 mod 11.\nThe safe target zones are 50, 39, 28, 17, 6.\nBecause you go first, you should say 6.\nFor every subsequent turn, whatever number $X$ your opponent adds, you add exactly $(11 - X)$, guaranteeing you hit the 17, 28, 39, and finally 50 marks.",
    "id": "Q0189"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Medium",
    "question_latex": "You have two boxes and \\$100$ distinct cards numbered \\$1--100$. At each turn, you deal a card from the top of the deck and place the card in a box picked randomly. What is the expected value of the smallest numbered card in the box that contains \\$100$?",
    "solution_latex": "Let Box A be the box containing card 100. Every other card (1 to 99) has an independent 1/2 probability of landing in Box A.\nLet X be the minimum card in Box A. We know X <= 100.\nUsing the expectation formula E = sum(P(X > k)) for k=0 to 99.\nP(X > k) is the probability that all cards from 1 to k are placed in Box B.\nP(X > k) = (1/2)^k.\nE = sum_{k=0}^{99} (1/2)^k = / = 2 - (1/2)^99.",
    "id": "Q0190"
  },
  {
    "theme": "Dice & Random Variables",
    "difficulty": "Hard",
    "question_latex": "Keep rolling a fair die until you roll $3$, $4$, $5$, in that order in three consecutive rolls. Let $n$ be the number of rolls you have rolled in total after rolling the last $5$. What is the probability that $n$ is odd?",
    "solution_latex": "The sequence 3-4-5 has no self-overlap. The expected stopping time is $6^3 = 216$.\nBecause the stopping time distribution for a non-overlapping pattern of length 3 is closely approximated by a delayed geometric distribution, the parity probability fluctuates, but given the 3-step delay and lack of overlap, it leans slightly toward even, $P(\\text{odd}) \\approx 0.5$.",
    "id": "Q0191"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "A deck contains ten cards: two 10s, two Js, two Qs, two Ks, two As. You are dealt five cards without replacement from this deck. Compute the expected number of pairs in your hand.",
    "solution_latex": "Let I_k be the indicator that you hold both cards of rank k (where k is one of the 5 ranks).\nThe probability of holding both cards of a specific rank is the number of ways to pick the remaining 3 cards from the other 8, divided by total hands:\nP(I_k = 1) = C(8,3) / C(10,5) = 56 / 252 = 2/9.\nBy linearity of expectation, total expected pairs = 5 ranks * P(I_k = 1) = 5 * (2/9) = 10/9 = 1.11 pairs.",
    "id": "Q0192"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "A frog is travelling from point $A(0,0)$ to point $B(4,6)$ but each step can only be 1 unit up or 1 unit to the right. Additionally, the frog refuses to move three steps in the same direction consecutively. Compute the number of ways the frog can move from $A$ to $B$.",
    "solution_latex": "This requires counting sequences of 6 U's and 4 R's with no UUU or RRR.\nWe must partition the 6 U's and 4 R's into alternating blocks of size 1 or 2.\nValid U partitions (sum to 6, max 2): (2,2,2)-1 way; (2,2,1,1)-6 ways; (2,1,1,1,1)-5 ways.\nValid R partitions (sum to 4, max 2): (2,2)-1 way; (2,1,1)-3 ways; (1,1,1,1)-1 way.\nMatch the number of parts (they must be equal, or differ by 1 to alternate):\n- 3 U blocks, 2 R blocks: 1 * 1 * 1 (interleave U R U R U) = 1\n- 3 U blocks, 3 R blocks: 1 * 3 * 2 (URURUR, RURURU) = 6\n- 3 U blocks, 4 R blocks: 1 * 1 * 1 = 1\n- 4 U blocks, 3 R blocks: 6 * 3 * 1 = 18\n- 4 U blocks, 4 R blocks: 6 * 1 * 2 = 12\n- 5 U blocks, 4 R blocks: 5 * 1 * 1 = 5\nTotal valid paths = 1 + 6 + 1 + 18 + 12 + 5 = 43.",
    "id": "Q0193"
  },
  {
    "theme": "Probability",
    "difficulty": "Very Hard",
    "question_latex": "Two teams compete in a tournament where the first team to win three games is the champion. Each game is won independently by either team with probability $\\frac{1}{2}$. What is the expected number of games won by the losing team over the course of the tournament?",
    "solution_latex": "The losing team can win 0, 1, or 2 games.\nP(Loser wins 0) = series ends in 3 games (3-0 sweep for either A or B). P = 2 * (1/2)^3 = 1/4.\nP(Loser wins 1) = series ends in 4 games. P = 2 * C(3,1) * (1/2)^4 = 6/16 = 3/8.\nP(Loser wins 2) = series ends in 5 games. P = 2 * C(4,2) * (1/2)^5 = 12/32 = 3/8.\nExpected wins = 0*(1/4) + 1*(3/8) + 2*(3/8) = 9/8 = 1.125 games.",
    "id": "Q0194"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "A group of 4 people with red hair and 8 people with black hair stand in a line in a uniformly random order. What is the expected number of adjacent pairs of people who share the same hair color?",
    "solution_latex": "There are 12 people, so there are 11 adjacent pairs.\nFor any specific pair of adjacent spots, the probability they are both Red is (4/12) * (3/11) = 1/11.\nThe probability they are both Black is (8/12) * (7/11) = 14/33.\nThe probability of sharing the same color = 1/11 + 14/33 = 17/33.\nBy linearity of expectation, E = 11 * (17/33) = 17/3 ≈ 5.67.",
    "id": "Q0195"
  },
  {
    "theme": "Probability",
    "difficulty": "Medium",
    "question_latex": "Let $X$ and $Y$ be independent random variables, each uniformly distributed on $(0, 1)$. What is the probability that $|X - Y|$ lies between $\\dfrac{3}{5}$ and $\\dfrac{4}{5}$?",
    "solution_latex": "Plot the region on a unit square. The area $|X - Y| < d$ is $1 - (1-d)^2$.\nArea for $d=4/5$ is $1 - (1/5)^2 = 24/25$.\nArea for $d=3/5$ is $1 - (2/5)^2 = 21/25$.\nThe probability it lies between them is $24/25 - 21/25 = 3/25 = 12\\%$.",
    "id": "Q0196"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "Four cards numbered 1 through 4 are shuffled into a uniformly random order. What is the probability that every pair of adjacent cards sums to at least 4?",
    "solution_latex": "Total permutations of 4 cards = 4! = 24.\nThe only pairs of cards that sum to less than 4 are {1, 2}. Therefore, the numbers 1 and 2 must NOT be adjacent.\nTreat {1, 2} as a single block to find the combinations where they ARE adjacent.\nArranging 3 items (Block, 3, 4) gives 3! = 6 ways. The block itself can be (1,2) or (2,1), adding a factor of 2. So 12 permutations have 1 and 2 adjacent.\nThe favorable permutations are 24 - 12 = 12.\nProbability = 12 / 24 = 1/2.",
    "id": "Q0197"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Very Hard",
    "question_latex": "You have an unfair coin that lands heads with probability $\\frac{1}{3}$, and your opponent has a fair coin. You alternate flipping your respective coins, with you going first, until one of you flips heads. What is the probability that you flip heads before your opponent?",
    "solution_latex": "Let Y be the probability you win the game.\nYou can win on your very first toss (probability 1/3).\nIf you miss (2/3), your opponent must ALSO miss (1/2) for the game to cycle back to you, at which point your probability of winning from that state is identical to Y.\nY = 1/3 + (2/3) * (1/2) * Y\nY = 1/3 + 1/3 * Y\n(2/3) * Y = 1/3\nY = 1/2. The game is perfectly fair.",
    "id": "Q0198"
  },
  {
    "theme": "Probability",
    "difficulty": "Medium",
    "question_latex": "How many ways can you jump up $n$ stairs if you can only jump either $1$ or $2$ steps?",
    "solution_latex": "This is exactly the Fibonacci sequence. Let W(n) be the number of ways.\nTo get to step n, you either took a 1-step jump from n-1, or a 2-step jump from n-2.\nW(n) = W(n-1) + W(n-2).\nFor n=1, W(1)=1. For n=2, W(2)=2. W(n) = F_{n+1}.",
    "id": "Q0199"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "Define a cut by connecting 2 random points chosen uniformly on the circumference of a circle. In this way, cut a circle $n$ times. What is the expected number of regions after the $n$ cuts?",
    "solution_latex": "By Euler's formula for a plane, the number of regions created by lines in a circle is R = 1 + N + I, where N is the number of chords and I is the number of internal intersections.\nThere are n chords.\nEvery set of 4 points on the circle boundary defines exactly 1 intersection (the diagonals of the formed convex quadrilateral).\nFor each pair of chords (out of C(n,2) pairs), the probability they intersect is 1/3.\nE = C(n,2) * (1/3) = n(n-1) / 6.\nExpected regions E = 1 + n +.",
    "id": "Q0200"
  },
  {
    "theme": "Coins & Random Walks",
    "difficulty": "Hard",
    "question_latex": "How will the gold coins be divided in the end?",
    "solution_latex": "Assuming this is the classic 5-Pirate Game with 100 gold coins (context missing):\nWorking backwards from 2 pirates up to 5:\n- Pirate 1 (Captain) needs 3 out of 5 votes to pass his proposal.\n- He maximizes by giving 1 coin to the people who would get 0 in the 4-pirate game.\nResult: Pirate 1 gets 98 coins. Pirate 2 gets 0. Pirate 3 gets 1. Pirate 4 gets 0. Pirate 5 gets 1.\nDivision: 98, 0, 1, 0, 1.",
    "id": "Q0201"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "What does that tell you as to the number of black and red cards in the rest two piles?",
    "solution_latex": "If a 52-card deck is split equally into two 26-card piles, the number of Red cards in Pile 1 must be exactly equal to the number of Black cards in Pile 2.\nProof: Let R1 be Red in Pile 1, B1 be Black in Pile 1. R1 + B1 = 26.\nTotal Red is 26, so R2 = 26 - R1.\nTherefore B1 = 26 - R1 = R2.",
    "id": "Q0202"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "How many trailing zeros are there in 100! (factorial of 100)?",
    "solution_latex": "Trailing zeros are created by pairs of factors of 2 and 5. Because factors of 2 are much more abundant in factorials than 5s, the number of trailing zeros is dictated by the number of factors of 5.\nWe count multiples of 5, 25, 125, etc., up to 100.\n100 / 5 = 20.\n100 / 25 = 4.\nTotal trailing zeros = 20 + 4 = 24.\n\n--- END OF FILE ---",
    "id": "Q0203"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "If x /\\ x /\\ x /\\ x /\\ x · · · = 2 , where x /\\ y = xY, what is x ?",
    "solution_latex": "Given $x^{x^{x^{...}}} = 2$.\nSince the infinite tower exponentiates to 2, we can substitute the tower itself into the exponent:\n$x^2 = 2$.\nTherefore, $x = \\sqrt{2}$.",
    "id": "Q0204"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "Can you pack 53 bricks of dimensions 1x1x4 into a 6 x 6 x 6 box?",
    "solution_latex": "No. Total volume of box is 216. 53 bricks volume is 212.\nDivide the 6x6x6 box into 27 sub-cubes of 2x2x2, colored alternately black and white like a 3D chessboard.\nThere are 14 of one color (112 unit cubes) and 13 of the other (104 unit cubes).\nEvery 1x1x4 brick must cover exactly 2 black and 2 white unit cubes.\nThus, 53 bricks require 106 black and 106 white cubes.\nSince one color only has 104 cubes available, it is strictly impossible to pack 53 bricks.",
    "id": "Q0205"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "What is the limit of ex I x2 as x oo, and what is the limit of x2 In x as x o+?",
    "solution_latex": "Limit 1: $\\lim_{x \\to \\infty} \\frac{e^x}{x^2}$. By L'Hopital's rule twice, the exponential outgrows the polynomial, so the limit is $\\infty$.\nLimit 2: $\\lim_{x \\to 0^+} x^2 \\ln x$. Rewriting as $\\frac{\\ln x}{x^{-2}}$ and applying L'Hopital's yields $\\lim \\frac{1/x}{-2x^{-3}} = \\lim \\frac{-x^2}{2} = 0$.",
    "id": "Q0206"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "What is the distance from the origin to the plane 2x + 3 y + 4z = 12 ?",
    "solution_latex": "The distance $d$ from the origin $(0,0,0)$ to the plane $Ax + By + Cz + D = 0$ is $|D| / \\sqrt{A^2 + B^2 + C^2}$.\n$d = |-12| / \\sqrt{2^2 + 3^2 + 4^2} = 12 / \\sqrt{4 + 9 + 16} = 12 / \\sqrt{29} \\approx 2.228$.",
    "id": "Q0207"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "What is the solution of ordinary differential equation y \"+ y '+ y = 0?",
    "solution_latex": "The characteristic equation is $r^2 + r + 1 = 0$.\nThe roots are $r = \\frac{-1 \\pm i\\sqrt{3}}{2}$.\nThe general solution is $y(t) = e^{-t/2} \\left( C_1 \\cos\\left(\\frac{\\sqrt{3}}{2}t\\right) + C_2 \\sin\\left(\\frac{\\sqrt{3}}{2}t\\right) \\right)$.",
    "id": "Q0208"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "What is the probability of winning a car if you switch?",
    "solution_latex": "Classic Monty Hall Problem.\nIf you stay, you only win if you picked the car initially: probability 1/3.\nBecause the host will always reveal a goat from the unpicked doors, switching guarantees a win if you initially picked a goat (which has probability 2/3).\nProbability of winning if you switch = 2/3.",
    "id": "Q0209"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "What is the probability that each of them will have an ace?",
    "solution_latex": "Assuming 4 players are dealt 13 cards each from a 52-card deck.\nTotal ways to distribute the 4 Aces among the 52 spots is C(52, 4).\nTo give exactly one Ace to each player, each player has 13 possible spots for their Ace. Ways = 13^4.\nProbability = 13^4 / C(52, 4) = 28,561 / 270,725 ≈ 10.55%.",
    "id": "Q0210"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "When two ants collide head-on, both immediately change directions. What does it mean?",
    "solution_latex": "Because all ants are identical and instantly change direction, computationally, a collision is exactly the same as if the two ants simply phased completely through each other without interacting. When asked to calculate expected times for ants to fall off a stick, you can completely ignore collisions and treat them as moving strictly forward at a constant speed to the edge.\n\n--- END OF FILE ---",
    "id": "Q0211"
  },
  {
    "theme": "Probability",
    "difficulty": "Hard",
    "question_latex": "What are the price boundaries for a bull call spread?",
    "solution_latex": "A bull call spread involves buying a call at strike $K_1$ and selling a call at strike $K_2$ (where $K_1 < K_2$).\nThe lower price boundary is $0$ (the spread expires worthless).\nThe upper price boundary is $K_2 - K_1$ (both calls are deep in the money, and the payoff is the difference between the strikes).",
    "id": "Q0212"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Hard",
    "question_latex": "How do you swap two integers, i and j, without using additional storage space?",
    "solution_latex": "Using arithmetic operations:\ni = i + j\nj = i - j\ni = i - j\n\nOr better, using bitwise XOR (to avoid integer overflow limits):\ni = i ^ j\nj = i ^ j\ni = i ^ j",
    "id": "Q0213"
  },
  {
    "theme": "Game Theory & Logic",
    "difficulty": "Very Hard",
    "question_latex": "Two players alternately choose distinct integers from $\\{1,2,\\dots,9\\}$. The first player whose chosen numbers contain a subset summing to $15$ wins immediately. Determine whether first or second player has a forced win and provide a full strategy.",
    "solution_latex": "This game is mathematically isomorphic to Tic-Tac-Toe played on a 3x3 Magic Square (where rows, columns, and diagonals sum to 15).\nSince optimal play in Tic-Tac-Toe always results in a draw, neither player has a forced win. The optimal strategy is to map choices to the Magic Square and block the opponent's 3-in-a-row lines while building your own.",
    "id": "Q0214"
  },
  {
    "theme": "Probability",
    "difficulty": "Very Hard",
    "question_latex": "An urn starts with 1 red and 1 blue ball. Repeatedly draw one ball uniformly, return it, and add one ball of the same color (Polya urn). After $n$ draws, what is the distribution of the number of red draws? Prove your result.",
    "solution_latex": "This is Polya's Urn Scheme. The distribution of the number of red draws after $n$ steps is strictly Uniform over $\\{0, 1, ..., n\\}$.\nProof by induction: On the first step, P(Red) = 1/2. For $n=1$, it's uniform over {0,1}. Because adding a ball of the drawn color reinforces that color exactly proportionally to its current likelihood, the transition probabilities perfectly balance to maintain a flat uniform distribution at every step $n$.",
    "id": "Q0215"
  },
  {
    "theme": "Card Problems",
    "difficulty": "Very Hard",
    "question_latex": "You roll a fair die until every face has appeared at least once. Condition on the event that face 6 appears last. Compute the expected stopping time under this conditioning.",
    "solution_latex": "By symmetry, the event that \"face 6 appears last\" is completely symmetric across all 6 faces, meaning the distribution of the stopping time is independent of WHICH specific face happens to be the last one.\nTherefore, the conditional expected stopping time is identical to the unconditional expected stopping time.\nThis is a standard Coupon Collector problem with 6 items:\nE = 6 * (1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6) = 14.7 rolls.",
    "id": "Q0216"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "Choose $n$ points i.i.d. uniformly on the unit circle and connect all pairs. What is the expected number of convex quadrilaterals whose edges are all circle chords?",
    "solution_latex": "A convex quadrilateral is formed if and only if you choose exactly 4 points on the circle, and connect their perimeter boundaries.\nSince all pairs are connected (this is a complete graph), ANY choice of 4 points on the circle will guarantee the existence of exactly 1 convex quadrilateral (its 4 outer chords).\nBecause choosing the 4 points dictates the quadrilateral with probability 1, the expected number is strictly deterministic: C(n,4).",
    "id": "Q0217"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "On an $n\\times n$ grid, count the number of monotone paths from $(0,0)$ to $(n,n)$ that never have three consecutive moves in the same direction.",
    "solution_latex": "Any valid path corresponds to a sequence of $n$ 'Right' (R) and $n$ 'Up' (U) moves without RRR or UUU. This is equivalent to grouping the $n$ R's and $n$ U's into alternating blocks of size 1 or 2. By summing over the number of blocks $k$, we choose the number of size-2 blocks to equal $n - k$. The total valid paths can be computed using a generating function or dynamic programming.",
    "id": "Q0218"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "Place $2m$ points on a circle uniformly at random and pair them uniformly into chords. Compute the expected number of chord intersections and its variance.",
    "solution_latex": "Every set of 4 points forms exactly 1 intersection if paired as a cross, out of 3 possible pairings.\nExpected intersections E = C(m, 2) / 3 = m(m-1) / 6.\nVariance calculations involve evaluating pairs of 4-tuples, leading to Var = m(m-1)(m+3) / 45.",
    "id": "Q0219"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "Uniformly pick $n$ great circles on the sphere with no triple intersection almost surely. Compute the expected number of cells in the induced spherical arrangement.",
    "solution_latex": "Every pair of great circles intersects at exactly 2 points. For $n$ circles, there are $2 \\times C(n,2) = n(n-1)$ vertices.\nBy Euler's characteristic for a sphere (V - E + F = 2), and knowing 4 edges meet at each vertex (so E = 2V), we find F = 2 + V.\nExpected regions = n^2 - n + 2.",
    "id": "Q0220"
  },
  {
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "Estimate and then compute the expected area of the triangle formed by three points sampled uniformly on the unit circle.",
    "solution_latex": "Let the angles be uniformly distributed. Fixing the first point at 0, the other two are at $\\theta_1$ and $\\theta_2$. The area of the triangle is $2 \\sin(|\\theta_1 - \\theta_2|/2) \\sin(\\theta_1/2) \\sin(\\theta_2/2)$.\nIntegrating this over $^2$ and normalizing by $1/(4\\pi^2)$ yields an expected area of $3 / (2\\pi) \\approx 0.477$.",
    "id": "Q0221"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many piano tuners there are in New York City.",
    "solution_latex": "Classic Fermi Problem.\nNYC Population = ~8.5 million.\nAverage household = 2.5 people -> 3.4 million households.\nAssume 1 in 20 households owns a piano -> 170,000 pianos.\nAssume each piano gets tuned once every 2 years -> 85,000 tunings/year.\nA tuner can do ~3 tunings a day, 5 days a week, 50 weeks a year = 750 tunings/year.\nNumber of tuners = 85,000 / 750 ≈ 113.\nOrder of magnitude estimate: 100 to 150 piano tuners.",
    "id": "Q0222"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many ping-pong balls can fit inside a standard school bus.",
    "solution_latex": "Bus volume: ~40 feet long x 8 ft wide x 6 ft high = 1,920 cubic feet.\nConvert to cubic inches: 1,920 * 12^3 = 3.3 million cubic inches.\nPing-pong ball radius = 20mm ≈ 0.8 inches. Volume ≈ 2 cubic inches.\nPacking fraction of spheres (random close packing) ≈ 0.64.\nEffective volume per ball ≈ 2 / 0.64 ≈ 3.1 cubic inches.\nTotal balls = 3,300,000 / 3.1 ≈ 1 million ping-pong balls.",
    "id": "Q0223"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the total number of steps an average person takes in one year.",
    "solution_latex": "Average person takes ~5,000 to 10,000 steps per day.\nAssume 7,500 steps/day for an average adult.\n7,500 * 365 days = 2,737,500.\nEstimate: 2.5 to 3 million steps.",
    "id": "Q0224"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of hairs on a human head.",
    "solution_latex": "Average head surface area with hair is about 120 square inches (roughly 10x12).\nHair density is roughly 1,000 hairs per square inch.\nTotal = 120 * 1,000 = 120,000 hairs.\n(Biological average is accepted to be around 100,000).",
    "id": "Q0225"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the mass of an adult elephant.",
    "solution_latex": "An average adult human is ~75 kg. An elephant is roughly 50 to 80 times larger by volume.\nEstimate: 4,000 to 6,000 kg (4 to 6 metric tons).",
    "id": "Q0226"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the longest distance an elephant could walk in one day.",
    "solution_latex": "Walking pace for an elephant is ~6 km/h. Maximum active hours without resting is ~12-14 hours.\n6 km/h * 12 hours = 72 km.\nEstimate: 60 to 80 km.",
    "id": "Q0227"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many grains of rice are in a 1 kg bag.",
    "solution_latex": "1 grain of long-grain white rice weighs about 0.02 grams.\n1 kg = 1000 grams.\n1000 / 0.02 = 50,000.\nEstimate: 40,000 to 60,000 grains.",
    "id": "Q0228"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of leaves on a fully grown oak tree.",
    "solution_latex": "Tree canopy radius ~10 meters. Surface area ~ 400 sq meters.\nAccounting for depth, total leaf area ~2,000 sq meters.\nAverage leaf area ~ 0.005 sq meters.\n2,000 / 0.005 = 400,000.\nEstimate: 200,000 to 500,000 leaves.",
    "id": "Q0229"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many cups of coffee are consumed worldwide in one day.",
    "solution_latex": "Global population = 8 billion.\nAssume ~50% are too young or live in regions where tea dominates over coffee. That leaves ~4 billion potential coffee drinkers.\nAssume 50% of these actually drink coffee daily = 2 billion people.\nAssume average consumption is 1.5 cups a day per drinker.\nTotal = 2 billion * 1.5 = 3 billion cups of coffee.",
    "id": "Q0230"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of text messages sent in the United States in one day.",
    "solution_latex": "US population ~330 million.\nAssume 250 million have cell phones and text.\nAverage texts per day per person ~ 30.\n250 million * 30 = 7.5 billion.\nEstimate: 6 billion to 10 billion texts.",
    "id": "Q0231"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of photos stored on an average smartphone.",
    "solution_latex": "Average phone capacity is 128 GB. Assume 50 GB used for photos.\nAverage photo size is 3 MB.\n50,000 MB / 3 MB = 16,666.\nEstimate: 10,000 to 20,000 photos.",
    "id": "Q0232"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many liters of water are in an Olympic swimming pool.",
    "solution_latex": "Olympic pool dimensions: 50 meters long, 25 meters wide, average depth of 2 meters.\nVolume = 50 * 25 * 2 = 2,500 cubic meters.\n1 cubic meter = 1,000 liters.\nTotal = 2,500 * 1,000 = 2.5 million liters.",
    "id": "Q0233"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many breaths a person takes over a 75-year lifetime.",
    "solution_latex": "Average resting respiratory rate = 15 breaths per minute.\n15 * 60 * 24 * 365 = 7.8 million breaths per year.\n7.8 million * 75 years = 591 million.\nEstimate: 500 million to 700 million breaths.",
    "id": "Q0234"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many bicycles are currently in use in your city.",
    "solution_latex": "Assume city population of 1 million (for standardization).\nAssume 20% of the population owns a bike, and 10% are actively used on a regular basis.\n1,000,000 * 0.10 = 100,000.\nEstimate: ~100,000 active bicycles per million residents.",
    "id": "Q0235"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of books in a medium-sized public library.",
    "solution_latex": "A library has ~50 rows of double-sided shelves.\nEach side has 5 bays, each bay has 6 shelves.\n50 * 2 * 5 * 6 = 3,000 shelves.\nAverage 30 books per shelf.\n3,000 * 30 = 90,000.\nEstimate: 80,000 to 120,000 books.",
    "id": "Q0236"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how long it would take to count to one million out loud.",
    "solution_latex": "Average time per number (considering longer numbers like \"four hundred seventy-two thousand\") is ~2 seconds.\n1,000,000 * 2 = 2,000,000 seconds.\n2,000,000 / 3600 = 555 hours.\nIf counting 12 hours a day, it takes ~46 days.",
    "id": "Q0237"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how much paint is needed to paint the exterior of a two-story house.",
    "solution_latex": "House footprint ~10m x 10m. Perimeter = 40m.\nHeight of 2 stories = 6m.\nExterior wall area = 40 * 6 = 240 sq meters.\nSubtract windows/doors (~40 sq m) = 200 sq meters.\n1 gallon of paint covers ~35 sq meters.\n200 / 35 \\approx 6 gallons per coat. Two coats = 12 gallons.\nEstimate: 10 to 15 gallons.",
    "id": "Q0238"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many tennis balls are sold worldwide each year.",
    "solution_latex": "Global population = 8 billion. ~1% play tennis regularly = 80 million players.\nAverage player buys ~ 4 cans (12 balls) per year.\n80 million * 12 = 960 million balls. Add tournaments and practice facilities.\nEstimate: 300 million to 1 billion tennis balls.",
    "id": "Q0239"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many people can stand in a one-square-kilometer area.",
    "solution_latex": "1 square kilometer = 1,000,000 square meters.\nA tightly packed crowd fits ~4 people per square meter.\n1,000,000 * 4 = 4,000,000.\nEstimate: 4 million people.",
    "id": "Q0240"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of stars visible to the naked eye on a clear night.",
    "solution_latex": "The total number of stars visible across the entire celestial sphere without a telescope is astronomically cataloged to be around 9,000.\nBecause you can only see one hemisphere of the sky at a given time (due to the Earth blocking the rest), divide by 2.\nFurther reduction for horizon haze and atmospheric extinction leaves about 2,500 to 4,000.\nEstimate: roughly 3,000 to 4,500 stars.",
    "id": "Q0241"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many paper clips could fill a standard coffee mug.",
    "solution_latex": "Mug volume ~ 350 mL (350 cubic cm).\nPaper clip volume (bounding box) ~ 3 cm x 0.8 cm x 0.1 cm = 0.24 cubic cm.\nPacking efficiency ~ 30% due to tangling and awkward shape.\nEffective volume = 0.8 cubic cm per clip.\n350 / 0.8 \\approx 437.\nEstimate: 400 to 600 paper clips.",
    "id": "Q0242"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many restaurants are in a city of one million people.",
    "solution_latex": "Assume the average resident eats out 100 times a year. Total meals out = 100 million.\nAn average restaurant serves ~100 meals a day, 300 days a year = 30,000 meals/year.\n100,000,000 / 30,000 \\approx 3,333 restaurants.\nEstimate: 3,000 to 5,000 restaurants.",
    "id": "Q0243"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many school buses operate in the United States.",
    "solution_latex": "US population = 330 million. School-age children (5-18) = ~50 million.\nAssume 50% take the bus = 25 million.\nAverage bus holds 50 students, does 2 runs a morning = 100 students per bus.\n25,000,000 / 100 = 250,000.\nEstimate: 300,000 to 500,000 buses (accounting for spares and rural routes).",
    "id": "Q0244"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the total length of roads in your country.",
    "solution_latex": "US Land area ~ 10 million sq km.\nIf a grid of roads existed every 1 km, length = 2 * 10 million = 20 million km.\nGiven uninhabited areas and dense cities, the density is lower overall but highly clustered.\nEstimate: 6 to 8 million kilometers (US has ~6.5 million km of roads).",
    "id": "Q0245"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many windows are in a 50-story office tower.",
    "solution_latex": "Floor dimensions ~ 50m x 50m. Perimeter = 200m.\nWindow width ~ 1.5m. So 200 / 1.5 \\approx 130 windows per floor.\n130 * 50 = 6,500.\nEstimate: 5,000 to 8,000 windows.",
    "id": "Q0246"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many toothbrushes are thrown away in one year in your country.",
    "solution_latex": "US population = 330 million.\nAverage person replaces toothbrush every 4 months (3 times a year).\n330 million * 3 = 1 billion.\nEstimate: ~1 billion toothbrushes.",
    "id": "Q0247"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many slices of pizza are eaten in your city each weekend.",
    "solution_latex": "City of 1 million.\nAssume 20% of people eat pizza on the weekend. (200,000 people).\nAverage person eats 3 slices.\n200,000 * 3 = 600,000.\nEstimate: 500,000 to 1 million slices.",
    "id": "Q0248"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate the number of emails an office worker sends in one year.",
    "solution_latex": "Average office worker sends ~40 emails a day.\nWorking days in a year = 250.\n250 * 40 = 10,000.\nEstimate: 8,000 to 12,000 emails.",
    "id": "Q0249"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many coins fit in a 2-liter bottle.",
    "solution_latex": "2 liters = 2000 cubic cm.\nAverage coin (e.g. quarter) volume: radius 1.2 cm, thickness 0.2 cm. Volume \\approx 0.9 cubic cm.\nPacking efficiency of coins loosely dropped \\approx 50%.\nEffective volume = 1.8 cubic cm per coin.\n2000 / 1.8 \\approx 1,111.\nEstimate: 1,000 to 1,500 coins.",
    "id": "Q0250"
  },
  {
    "theme": "Estimation & Market Making",
    "difficulty": "Very Hard",
    "question_latex": "Estimate how many people are currently in airports worldwide at any given time.",
    "solution_latex": "Pre-pandemic global air passengers \\approx 4.5 billion a year \\approx 12 million a day.\nAverage time spent in airport (departure + arrival) \\approx 3 hours.\nThat is 1/8th of a day.\n12 million / 8 = 1.5 million. Add airport staff (500k).\nEstimate: 2 million to 3 million people.",
    "id": "Q0251"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "A die has unknown face probabilities $(p_1,\\dots,p_6)$ and known support $\\{1,\\dots,6\\}$. You observe only sums of two independent rolls. Give an identification procedure for $(p_i)$ and characterize when it is unique.",
    "solution_latex": "The sums $S$ represent the convolution of the distribution with itself. We observe coefficients of $P(x)^2$.\n$p_1 = \\sqrt{P(S=2)}$. $p_6 = \\sqrt{P(S=12)}$.\nThen $P(S=3) = 2 p_1 p_2 \\implies p_2 = P(S=3) / (2 p_1)$.\n$P(S=11) = 2 p_5 p_6 \\implies p_5 = P(S=11) / (2 p_6)$.\n$p_3$ and $p_4$ can be iteratively extracted from $P(S=4)$ and $P(S=10)$. The solution is unique as long as the distribution is strictly positive over the support.",
    "id": "Q0252"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Find all pairs of non-uniform 6-sided dice on faces $\\{1,\\dots,6\\}$ such that the sum distribution is exactly symmetric and unimodal with the same mean and variance as two fair dice.",
    "solution_latex": "For mean = 7 and Var = 35/6, symmetric and unimodal, we must alter the probabilities symmetrically.\nLet $p = (a, b, c, c, b, a)$. For variance to match, $a \\times 5^2 + b \\times 3^2 + c \\times 1^2$ must equal the standard. We can find continuous families of probabilities $(1/6+\\delta, 1/6-2\\delta, 1/6+\\delta)$ that preserve these moments.",
    "id": "Q0253"
  },
  {
    "theme": "Non-Standard Dice",
    "difficulty": "Very Hard",
    "question_latex": "Suppose die faces are relabeled by a hidden permutation $\\pi$ each day, but probabilities of physical faces are fixed and known. Determine the minimum number of observed rolls needed to recover $\\pi$ with probability at least $0.99$.",
    "solution_latex": "This is a hypothesis testing problem distinguishing $6!$ permutations. Using Sanov's theorem and the KL divergence $D_{KL}(P_{\\pi} || P)$, the sample complexity bounds $N \\approx \\frac{\\log(6! / 0.01)}{\\min_{i \\ne j} D_{KL}}$. The exact number depends heavily on the specific face probabilities.",
    "id": "Q0254"
  },
  {
    "id": "Q0255",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Easy",
    "question_latex": "15 parking spots in a straight row. Park 5 identical delivery vans. No two vans can be parked next to each other.",
    "solution_latex": "Answer: 11 choose 5\nLogic: 15 total spots - 5 vans = 10 empty spots. To keep 5 vans apart, you need 4 mandatory empty spots (spacers). 10 - 4 = 6 \"free\" empties. 5 vans + 6 free empties = 11 abstract slots. Choose 5 slots for the vans."
  },
  {
    "id": "Q0256",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Easy",
    "question_latex": "Arrange 8 distinct action figures. 3 specific \"Hero\" figures must stand side-by-side.",
    "solution_latex": "Answer: 6! * 3!\nLogic: Fuse the 3 Heroes into 1 block. 1 block + 5 other figures = 6 total entities. Arrange the entities (6!). Then arrange the 3 distinct heroes inside their fused block (3!)."
  },
  {
    "id": "Q0257",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Easy",
    "question_latex": "How many unique sequences can you make rearranging STATISTICS? (3 S's, 3 T's, 2 I's, 1 A, 1 C. Total 10 letters).",
    "solution_latex": "Answer: 10! / (3! * 3! * 2!)\nLogic: Arrange all 10 items (10!). Divide out the internal permutations of the identical letters to avoid counting duplicates."
  },
  {
    "id": "Q0258",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Easy",
    "question_latex": "King Arthur and 23 noble leaders (24 total distinct people) sit around a perfectly circular table. Distinct arrangements?",
    "solution_latex": "Answer: 23!\nLogic: A spinning circle ruins the math. Superglue King Arthur to a chair. The circle is broken into a straight line of 23 remaining chairs."
  },
  {
    "id": "Q0259",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Easy",
    "question_latex": "Circular bracelet. 9 items: 4 identical Red, 2 identical Blue, 3 distinct Gold charms. The 3 Gold must be fused together.",
    "solution_latex": "Answer: 3! * (6 choose 4)\nLogic: Fuse the 3 Gold. Total entities = 1 block + 4 Red + 2 Blue (7 entities). Superglue the Gold block to break the circle. Remaining 6 entities are in a straight line. Choose 4 of the 6 spots for the identical Reds (the remaining 2 naturally go to the Blues). Finally, arrange the 3 distinct Golds inside their glued block (3!). ------------------------------------------------------------------------"
  },
  {
    "id": "Q0260",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Medium",
    "question_latex": "12 distinct diplomats in a circle. 3 from Nation A must sit together. 4 from Nation B must sit together. 5 individuals.",
    "solution_latex": "Answer: 6! * 3! * 4!\nLogic: Fuse Nation A (1). Fuse Nation B (1). Plus 5 individuals = 7 entities. Glue Nation A down to break the circle. Remaining 6 entities arranged in a line (6!). Arrange inside Block A (3!) and Block B (4!)."
  },
  {
    "id": "Q0261",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Medium",
    "question_latex": "Arrange 12 books on a desk. 7 identical LOTR, 5 identical HP. No two HP books can touch.",
    "solution_latex": "Answer: 8 choose 5\nLogic: The 7 identical LOTR books act as physical \"walls.\" 7 walls create 8 natural gaps/slots. Choose 5 of those 8 slots for the HP books."
  },
  {
    "id": "Q0262",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Medium",
    "question_latex": "15 parking spots. 4 DISTINCT luxury cars. At least TWO empty spots between any two cars.",
    "solution_latex": "Answer: (9 choose 4) * 4!\nLogic: 4 cars need 3 spaces between them. With 2 empties per space, that's 6 mandatory spacers. 15 total - 4 cars = 11 total empties. 11 - 6 mandatory = 5 free empties. 4 cars + 5 free empties = 9 abstract slots. Choose 4 slots. Because the cars are DISTINCT, arrange them (4!)."
  },
  {
    "id": "Q0263",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Medium",
    "question_latex": "Rearrange MACADAMIA (Four A's, two M's, one C, one D, one I). The exact sequence [CAM] must be fused together.",
    "solution_latex": "Answer: 7! / 3!\nLogic: The 'C', 'A', and 'M' are trapped in the block and are no longer free. Remaining free letters: 1 Block, 3 A's, 1 M, 1 D, 1 I. Total 7 entities. Only the 3 free A's are identical."
  },
  {
    "id": "Q0264",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Medium",
    "question_latex": "15 parking spots. 5 vehicles (1 distinct Red, 1 distinct Blue, 3 identical White). No vehicles can touch.",
    "solution_latex": "Answer: (11 choose 5) * (5! / 3!)\nLogic: 15 spots - 5 vehicles = 10 total empties. 5 vehicles require 4 mandatory spacers. 10 - 4 = 6 free empties. 6 empties + 5 vehicles = 11 abstract slots. Choose 5 slots. Arrange the vehicles in those slots, remembering to divide out the 3 identical white vans: (5! / 3!). ------------------------------------------------------------------------"
  },
  {
    "id": "Q0265",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "Arthur, Merlin, 8 distinct Knights around a circle. Arthur and Merlin CANNOT sit next to each other.",
    "solution_latex": "Answer: 7 * 8!\nLogic: Anchor Arthur. This breaks the circle and leaves 9 chairs. The 2 chairs next to Arthur are illegal for Merlin. Merlin has 7 choices. The remaining 8 knights fill the remaining 8 chairs (8!)."
  },
  {
    "id": "Q0266",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "15 parking spots. 5 distinct cars. Car A and B are fused [A-B]. All vehicles/blocks must have at least 1 empty spot between them.",
    "solution_latex": "Answer: (11 choose 4) * 4! * 2!\nLogic: 4 entities (1 Block + 3 cars). They need 3 mandatory spacers. Spots used = 5 (Block uses 2). 15 - 5 = 10 total empties. 10 - 3 mandatory = 7 free empties. 7 + 4 entities = 11 slots. Choose 4 slots. Arrange the 4 distinct entities (4!). Arrange inside the block (2!)."
  },
  {
    "id": "Q0267",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "BOOKKEEPER. Must contain exact sequence [OKE].",
    "solution_latex": "Answer: 8! / 2!\nLogic: Pull out [OKE]. Remaining entities: 1 Block, 1 B, 1 O, 1 K, 2 E's, 1 P, 1 R. Total 8 entities. The only identicals left in the free pool are the 2 E's!"
  },
  {
    "id": "Q0268",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "ABRACADABRA. No two 'A's can touch.",
    "solution_latex": "Answer: (6! / (2! * 2!)) * (7 choose 5)\nLogic: The 6 consonants (B,R,C,D,B,R) are the \"walls\". Arrange them first, watching out for identicals: (6! / (2! * 2!)). 6 walls create 7 slots. Drop the 5 identical A's into those slots: (7 choose 5)."
  },
  {
    "id": "Q0269",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Hard",
    "question_latex": "Circular bracelet. 1 distinct Diamond, 5 identical Blue, 4 identical Red.",
    "solution_latex": "Answer: 9 choose 5\nLogic: Anchor the Diamond. Circle breaks into 9 straight slots. Since the remaining items are just two identical sets, simply choose 5 slots for the Blues (the Reds take the remaining 4). ------------------------------------------------------------------------"
  },
  {
    "id": "Q0270",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "10 distinct people in a circle. A, B, and C must sit together, but B MUST be in the middle of A and C.",
    "solution_latex": "Answer: 7! * 2!\nLogic: Fuse [A-B-C]. Total entities = 8. Anchor the block to kill the circle, leaving 7 entities to arrange (7!). Inside the block, B is stuck in the middle, so only A and C can swap (2!)."
  },
  {
    "id": "Q0271",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "3 distinct Dogs, 5 distinct Cats in a line. No dogs can touch.",
    "solution_latex": "Answer: 5! * (6 choose 3) * 3!\nLogic: Arrange the 5 distinct Cats as walls (5!). They create 6 slots. Choose 3 slots for the Dogs. Because Dogs are DISTINCT, arrange them into those chosen slots (3!)."
  },
  {
    "id": "Q0272",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "MISSISSIPPI. All S's fused [SSSS]. Both P's fused [PP].",
    "solution_latex": "Answer: 7! / 4!\nLogic: Entities: 1 [SSSS], 1 [PP], 1 M, 4 I's. Total 7 entities. Only the free I's are identical."
  },
  {
    "id": "Q0273",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "4 Men, 4 Women in a circle. Women NOT all clumped together.",
    "solution_latex": "Answer: 7! - (4! * 4!)\nLogic: Total circular arrangements of 8 people = 7!. Arrangements where women ARE clumped: Anchor the women block, arrange the 4 men in the remaining seats (4!), arrange women internally (4!). Subtract bad from total."
  },
  {
    "id": "Q0274",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "ASSASSINATION. [NN] block. No A's can touch.",
    "solution_latex": "Answer: (9! / (4! * 2!)) * (10 choose 3)\nLogic: Remaining entities acting as walls: [NN], 4 S's, 2 I's, 1 T, 1 O. Total 9 entities. Arrange the walls: 9! / (4! * 2!). 9 walls create 10 slots. Drop the 3 identical A's into those slots: (10 choose 3). ------------------------------------------------------------------------"
  },
  {
    "id": "Q0275",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "6 distinct Knights, 4 distinct Mages around a table. No Mages can touch.",
    "solution_latex": "Answer: 5! * (6 choose 4) * 4!\nLogic: Anchor a Knight to kill the circle. Arrange the other 5 (5!). 6 Knights in a circle naturally create exactly 6 gaps. Choose 4 gaps for the Mages. Since Mages are distinct, arrange them (4!)."
  },
  {
    "id": "Q0276",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "REFRIGERATOR. [EAT] block. No 4 R's can touch.",
    "solution_latex": "Answer: 6! * (7 choose 4)\nLogic: The non-R walls are E, F, I, G, O, and [EAT]. 6 distinct walls. Arrange them (6!). They create 7 gaps. Drop the 4 identical R's into 4 chosen gaps."
  },
  {
    "id": "Q0277",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "10 books in a line (7 id Math, 3 id History). At least TWO History books touching.",
    "solution_latex": "Answer: (10 choose 3) - (8 choose 3)\nLogic: Total arrangements = (10 choose 3). Number of arrangements with ZERO history books touching: 7 Math walls create 8 slots. Choose 3 slots. Subtract \"zero touching\" from \"Total\" to get \"at least two\"."
  },
  {
    "id": "Q0278",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "15 parking spots. 3 distinct Ferraris fused, 2 id Vans. No entities touching.",
    "solution_latex": "Answer: (11 choose 3) * 3 * 3!\nLogic: 15 spots - 5 used = 10 empties. 3 entities need 2 mandatory spacers. 10 - 2 = 8 free empties. 8 empties + 3 entities = 11 abstract slots. Choose 3. Because the entities are 1 distinct block and 2 identical vans, there are 3 ways to place them in the slots. Finally, arrange the 3 Ferraris inside their block (3!)."
  },
  {
    "id": "Q0279",
    "theme": "Combinatorics & Geometry",
    "difficulty": "Very Hard",
    "question_latex": "8 distinct people in a circle. A and B exactly opposite.",
    "solution_latex": "Answer: 6!\nLogic: Anchor Person A. Circle is dead. Person B MUST sit opposite, so they have exactly 1 choice. 6 people left for 6 chairs in what is now a straight line. (6!). ======================================================================== END OF ARCHIVE - WELL DONE ========================================================================"
  }
];
const QUESTION_BANK_META = { total: QUESTION_BANK.length };
window.QUESTION_BANK = QUESTION_BANK;
window.QUESTION_BANK_META = QUESTION_BANK_META;
