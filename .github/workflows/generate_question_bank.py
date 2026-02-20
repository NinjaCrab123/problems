#!/usr/bin/env python3
"""Generate structured question data from local prep materials."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Dict, List

ROOT = Path(__file__).resolve().parent

SOURCE_FILES = {
    "final_round": ROOT / "FinalRoundInterviewPrep2026.txt",
    "quant_50": ROOT / "quant_questions.txt",
    "optiver_prob": ROOT / "optiver_probability.txt",
    "dice_collection": ROOT / "dice1 (1).txt",
    "games": ROOT / "games.txt",
    "rtf_set": ROOT / "questions.txt",
    "green_book": ROOT / "量化绿皮书_compressed (1).txt",
}

DIFF_ORDER = ["Easy", "Medium", "Hard", "Very Hard"]

REMOVED_THEMES = {
    "Mental Math",
    "Finance & Markets",
    "Calculus & Linear Algebra",
    "Programming & Algorithms",
}

THEME_REMAP = {
    "Dice Sums": "Dice Sums & Games",
    "Dice Games & Strategy": "Dice Sums & Games",
}


def light_cleanup(text: str) -> str:
    replacements = {
        "\x00": "",
        "Ò": "ff",
        "ﬁ": "fi",
        "ﬂ": "fl",
        "’": "'",
        "“": '"',
        "”": '"',
        "−": "-",
        "–": "-",
        "—": "-",
        "…": "...",
        "\u00a0": " ",
        "\\,": " ",
    }
    for a, b in replacements.items():
        text = text.replace(a, b)

    # Fix common extraction artifacts while preserving source wording.
    text = re.sub(r"\bWeroll\b", "We roll", text)
    text = re.sub(r"\bWemight\b", "We might", text)
    text = re.sub(r"\bTwoplayers\b", "Two players", text)
    text = re.sub(r"\bAstandard\b", "A standard", text)
    text = re.sub(r"\bWecan\b", "We can", text)
    text = re.sub(r"\bgamelasts\b", "game lasts", text)
    text = re.sub(r"\bsomesixconsecutive\b", "some six consecutive", text)
    text = re.sub(r"\byuo\b", "you", text)
    text = re.sub(r"\bshufffing\b", "shuffling", text)
    # Keep currency markers from being parsed as LaTeX math delimiters.
    text = re.sub(r"\$(\d[\d,]*(?:\.\d+)?)(?!\$)", r"\\$\1", text)

    text = re.sub(r"\s+", " ", text).strip()
    return text


def bump_difficulty(base: str, delta: int) -> str:
    idx = DIFF_ORDER.index(base)
    idx = max(0, min(len(DIFF_ORDER) - 1, idx + delta))
    return DIFF_ORDER[idx]


def infer_theme_from_keywords(question: str, default: str = "Probability") -> str:
    q = question.lower()
    rules = [
        (["deck", "card", "ace", "spade", "poker"], "Card Problems"),
        (["die", "dice", "yahtzee", "craps"], "Dice & Random Variables"),
        (["coin", "heads", "tails", "walk", "gambler"], "Coins & Random Walks"),
        (
            ["chessboard", "domino", "tromino", "tiling", "triangle", "circle", "polygon", "frog"],
            "Combinatorics & Geometry",
        ),
        (["market", "estimate", "estimation", "words in"], "Estimation & Market Making"),
        (["logic", "prisoner", "pirate", "strategy", "bridge", "calendar"], "Game Theory & Logic"),
        (["integral", "derivative", "matrix", "eigen", "ode", "normal random variable"], "Calculus & Linear Algebra"),
        (["option", "portfolio", "delta", "vega", "futures"], "Finance & Markets"),
        (["algorithm", "integer", "power of", "swap"], "Programming & Algorithms"),
    ]
    for words, theme in rules:
        if any(w in q for w in words):
            return theme
    return default


def infer_difficulty(question: str, base: str = "Medium") -> str:
    q = question.lower()
    diff = base

    if any(k in q for k in ["prove", "strictly prove", "guarantee", "minimum number", "optimal strategy", "brownian", "martingale"]):
        diff = bump_difficulty(diff, 1)
    if len(question) > 260:
        diff = bump_difficulty(diff, 1)
    if any(k in q for k in ["quickly", "mental", "basic arithmetic"]):
        diff = bump_difficulty(diff, -1)

    return diff


def parse_final_round(path: Path) -> List[Dict[str, str]]:
    text = path.read_text(errors="ignore")
    lines = text.splitlines()

    section_theme = {
        "Probability Practice": "Probability",
        "Market Making and Estimation": "Estimation & Market Making",
        "Mental Maths": "Mental Math",
        "Decision Making": "Game Theory & Logic",
    }

    exercise_diff = {
        1: "Medium",
        2: "Easy",
        3: "Medium",
        4: "Medium",
        5: "Hard",
        6: "Medium",
        7: "Easy",
        8: "Easy",
        9: "Medium",
        10: "Easy",
        11: "Medium",
    }

    theme = "Probability"
    rows: List[Dict[str, str]] = []

    for i, line in enumerate(lines):
        stripped = line.strip()
        section_match = re.match(r"\d+\s+(.+)$", stripped)
        if section_match:
            section_name = section_match.group(1).strip()
            if section_name in section_theme:
                theme = section_theme[section_name]

        match = re.match(r"\s*Exercise\s+(\d+)\.\s*(.*)", line)
        if not match:
            continue

        ex_num = int(match.group(1))
        chunk = [match.group(2).strip()]
        j = i + 1
        while j < len(lines):
            nxt = lines[j].strip()
            if re.match(r"Exercise\s+\d+\.", nxt):
                break
            if re.match(r"\d+\s+[A-Za-z].+", nxt) and "Exercise" not in nxt:
                break
            if nxt and not nxt.isdigit():
                chunk.append(nxt)
            j += 1

        question = light_cleanup(" ".join(chunk))
        if not question:
            continue

        rows.append(
            {
                "source": "Final Round Interview Preparation",
                "source_file": "FinalRoundInterviewPrep2026.pdf",
                "source_ref": f"Exercise {ex_num}",
                "theme": theme,
                "difficulty": infer_difficulty(question, exercise_diff.get(ex_num, "Medium")),
                "question_latex": question,
            }
        )

    return rows


def parse_quant_50(path: Path) -> List[Dict[str, str]]:
    text = path.read_text(errors="ignore")
    lines = text.splitlines()

    part_theme = {
        1: ("Dice & Random Variables", "Hard"),
        2: ("Card Problems", "Hard"),
        3: ("Combinatorics & Geometry", "Very Hard"),
        4: ("Coins & Random Walks", "Hard"),
        5: ("Game Theory & Logic", "Hard"),
    }

    current_part = 1
    rows: List[Dict[str, str]] = []

    i = 0
    while i < len(lines):
        raw = lines[i]
        p = re.match(r"\s*Part\s+(\d+):", raw)
        if p:
            current_part = int(p.group(1))

        m = re.match(r"\s*(\d+)\.\s+(.*)", raw)
        if m:
            num = int(m.group(1))
            title = m.group(2).strip()

            if 1 <= num <= 50 and not title.startswith("Part "):
                chunk = [title]
                j = i + 1
                while j < len(lines):
                    nxt = lines[j].strip()
                    nxt_m = re.match(r"(\d+)\.\s+", nxt)
                    if nxt_m and 1 <= int(nxt_m.group(1)) <= 50:
                        break
                    if nxt.startswith("Part "):
                        break
                    if nxt and not re.fullmatch(r"\d+", nxt):
                        chunk.append(nxt)
                    j += 1

                question = light_cleanup(" ".join(chunk))
                theme, base_diff = part_theme.get(current_part, ("Probability", "Hard"))

                if current_part == 5 and num in {42, 43, 44, 45, 49}:
                    base_diff = "Very Hard"
                if current_part == 1 and num in {1, 2, 3, 7, 8, 9}:
                    base_diff = "Medium"

                rows.append(
                    {
                        "source": "50 Advanced Quant Interview Questions",
                        "source_file": "quant_questions.pdf",
                        "source_ref": f"Question {num}",
                        "theme": theme,
                        "difficulty": infer_difficulty(question, base_diff),
                        "question_latex": question,
                    }
                )
                i = j
                continue
        i += 1

    return rows


def parse_optiver_prob(path: Path) -> List[Dict[str, str]]:
    text = path.read_text(errors="ignore")
    lines = text.splitlines()

    section_map = {
        "Dice Probabilities": ("Dice & Random Variables", "Medium"),
        "Coin Flips": ("Coins & Random Walks", "Medium"),
        "Card Games and Bag Draws": ("Card Problems", "Medium"),
        "Random Walks and Processes": ("Coins & Random Walks", "Hard"),
        "Integers and Digits": ("Combinatorics & Geometry", "Medium"),
        "Expected Values": ("Probability", "Medium"),
    }

    current_theme = "Probability"
    current_base = "Medium"
    rows: List[Dict[str, str]] = []
    q_counter = 1

    i = 0
    while i < len(lines):
        line = lines[i]
        s = line.strip()

        section_hit = re.match(r"\d+\s+([A-Za-z ].+)", s)
        if section_hit:
            section_name = section_hit.group(1).strip()
            if section_name in section_map:
                current_theme, current_base = section_map[section_name]

        m = re.match(r"\s*Question:\s*(.*)", line)
        if m:
            q_chunk = [m.group(1).strip()]
            j = i + 1
            while j < len(lines):
                nxt = lines[j].strip()
                if re.match(r"\s*Solution:", nxt):
                    break
                if re.match(r"\s*Question:\s*", nxt):
                    break
                if re.match(r"\d+\s+[A-Za-z ].+", nxt) and nxt in section_map:
                    break
                if nxt and not re.fullmatch(r"\d+", nxt):
                    q_chunk.append(nxt)
                j += 1

            question = light_cleanup(" ".join(q_chunk))

            solution = ""
            k = j
            if k < len(lines) and re.match(r"\s*Solution:", lines[k].strip()):
                s0 = re.sub(r"^\s*Solution:\s*", "", lines[k].strip())
                s_chunk = [s0] if s0 else []
                k += 1
                while k < len(lines):
                    nxt = lines[k].strip()
                    if re.match(r"\s*Question:\s*", nxt):
                        break
                    if re.match(r"\d+\s+[A-Za-z ].+", nxt) and nxt in section_map:
                        break
                    if re.match(r"\d+\.\d+\s+[A-Za-z].*", nxt):
                        break
                    if nxt and not re.fullmatch(r"\d+", nxt):
                        s_chunk.append(nxt)
                    k += 1
                solution = light_cleanup(" ".join(s_chunk))

            rows.append(
                {
                    "source": "Optiver Probability Collection",
                    "source_file": "optiver_probability.pdf",
                    "source_ref": f"Question {q_counter}",
                    "theme": infer_theme_from_keywords(question, current_theme),
                    "difficulty": infer_difficulty(question, current_base),
                    "question_latex": question,
                    "solution_latex": solution,
                }
            )
            q_counter += 1
            i = k if k > j else j
            continue

        i += 1

    return rows


def parse_dice_collection(path: Path) -> List[Dict[str, str]]:
    text = path.read_text(errors="ignore")
    lines = text.splitlines()

    start = 0
    end = len(lines)
    for idx, line in enumerate(lines):
        if re.search(r"Chapter2", line):
            start = idx
        if idx > start and re.search(r"Chapter3", line):
            end = idx
            break

    lines = lines[start:end]
    dice_solution_map = extract_dice_collection_solutions(path)

    section_theme = {
        "2.1": "Dice & Random Variables",
        "2.2": "Dice Sums",
        "2.3": "Non-Standard Dice",
        "2.4": "Dice Games & Strategy",
    }

    current_section = "2.1"
    rows: List[Dict[str, str]] = []

    i = 0
    while i < len(lines):
        s = lines[i].strip()

        section_match = re.match(r"(2\.\d+)\s+", s)
        if section_match:
            current_section = section_match.group(1)

        m = re.match(r"\s*(\d+)\.\s+(.*)", lines[i])
        if m:
            num = int(m.group(1))
            if 1 <= num <= 82:
                chunk = [m.group(2).strip()]
                j = i + 1
                while j < len(lines):
                    nxt = lines[j].strip()
                    if re.match(r"\d+\.\s+", nxt):
                        break
                    if re.match(r"2\.\d+\s+", nxt):
                        break
                    if nxt and not nxt.startswith("ACollection") and not re.fullmatch(r"\d+", nxt):
                        chunk.append(nxt)
                    j += 1

                question = light_cleanup(" ".join(chunk))
                if not question:
                    i = j
                    continue

                if num <= 15:
                    base_diff = "Medium"
                elif num <= 47:
                    base_diff = "Hard"
                elif num <= 58:
                    base_diff = "Very Hard"
                elif num <= 73:
                    base_diff = "Hard"
                else:
                    base_diff = "Very Hard"

                rows.append(
                    {
                        "source": "A Collection of Dice Problems",
                        "source_file": "dice1 (1).pdf",
                        "source_ref": f"Problem {num}",
                        "theme": section_theme.get(current_section, "Dice & Random Variables"),
                        "difficulty": infer_difficulty(question, base_diff),
                        "question_latex": question,
                        "solution_latex": light_cleanup(dice_solution_map.get(num, "")),
                    }
                )
                i = j
                continue

        i += 1

    return rows


def extract_dice_collection_solutions(path: Path) -> Dict[int, str]:
    text = path.read_text(errors="ignore")
    lines = text.splitlines()

    start = None
    end = len(lines)
    for idx, line in enumerate(lines):
        if start is None and re.search(r"\bChapter3\b", line):
            start = idx
        elif start is not None and re.search(r"\bChapter4\b", line):
            end = idx
            break

    if start is None:
        return {}

    block = lines[start:end]
    headers = []
    for i, line in enumerate(block):
        m = re.match(r"\s{0,24}(\d+)\.\s+(.*)", line)
        if not m:
            continue
        n = int(m.group(1))
        if 1 <= n <= 82:
            headers.append((i, n))

    first_pos: Dict[int, int] = {}
    for pos, n in headers:
        if n not in first_pos:
            first_pos[n] = pos

    sorted_positions = sorted(first_pos.items(), key=lambda kv: kv[1])
    sol_map: Dict[int, str] = {}

    for k, (n, pos) in enumerate(sorted_positions):
        next_pos = sorted_positions[k + 1][1] if k + 1 < len(sorted_positions) else len(block)
        chunk = block[pos + 1 : next_pos]
        txt = " ".join(chunk)
        txt = re.sub(r"\s+", " ", txt).strip()
        if txt:
            sol_map[n] = txt

    return sol_map


def parse_games(path: Path) -> List[Dict[str, str]]:
    lines = path.read_text(errors="ignore").splitlines()
    rows: List[Dict[str, str]] = []

    current_idx = None
    current_title = None

    i = 0
    while i < len(lines):
        s = lines[i].strip()

        title_match = re.match(r"(\d+)\.\s+(.+)", s)
        if title_match:
            current_idx = int(title_match.group(1))
            current_title = light_cleanup(title_match.group(2))

        game_match = re.match(r"The Game:\s*(.*)", s)
        if game_match and current_title and current_idx is not None:
            chunk = [game_match.group(1).strip()]
            j = i + 1
            while j < len(lines):
                nxt = lines[j].strip()
                if nxt.startswith("Strategy:"):
                    break
                if re.match(r"\d+\.\s+", nxt):
                    break
                if nxt and not re.fullmatch(r"\d+", nxt):
                    chunk.append(nxt)
                j += 1

            question = light_cleanup(f"{current_title}: {' '.join(chunk)}")
            base_diff = "Medium" if current_idx in {1, 2, 4, 8} else "Hard"
            solution = ""
            if j < len(lines) and lines[j].strip().startswith("Strategy:"):
                s_chunk = [re.sub(r"^Strategy:\s*", "", lines[j].strip())]
                k = j + 1
                while k < len(lines):
                    nxt = lines[k].strip()
                    if re.match(r"\d+\.\s+", nxt):
                        break
                    if nxt and not re.fullmatch(r"\d+", nxt):
                        s_chunk.append(nxt)
                    k += 1
                solution = light_cleanup(" ".join(s_chunk))

            rows.append(
                {
                    "source": "Combinatorial Game Theory Compendium",
                    "source_file": "games.pdf",
                    "source_ref": f"Game {current_idx}",
                    "theme": "Game Theory & Logic",
                    "difficulty": infer_difficulty(question, base_diff),
                    "question_latex": question,
                    "solution_latex": solution,
                }
            )

            i = j
            continue

        i += 1

    return rows


def parse_rtf_questions(path: Path) -> List[Dict[str, str]]:
    lines = path.read_text(errors="ignore").splitlines()
    rows: List[Dict[str, str]] = []
    idx = 1

    for line in lines:
        m = re.match(r"\s*\\item\s+(.*)", line)
        if not m:
            continue

        question = light_cleanup(m.group(1))
        if not question:
            continue

        theme = infer_theme_from_keywords(question, "Probability")
        base_diff = "Hard"
        if any(k in question.lower() for k in ["jump up $n$ stairs", "variance", "uniformly distributed", "expected value"]):
            base_diff = "Medium"

        rows.append(
            {
                "source": "questions.rtf Set",
                "source_file": "questions.rtf",
                "source_ref": f"Item {idx}",
                "theme": theme,
                "difficulty": infer_difficulty(question, base_diff),
                "question_latex": question,
            }
        )
        idx += 1

    return rows


def parse_green_book(path: Path) -> List[Dict[str, str]]:
    # Conservative extraction only: keep high-confidence standalone questions.
    lines = path.read_text(errors="ignore").splitlines()

    starter = re.compile(r"^(How|What|Why|Can|Is|Suppose|If|Given|When|Which|Who|Where|Prove|Find|Show)\b")
    banned = re.compile(r"(Chapter|Contents|Figure|Table|Preface|Appendix|www\.|\.{3})", re.IGNORECASE)

    questions: List[str] = []
    for line in lines:
        s = light_cleanup(line)
        if not s:
            continue
        if not s.endswith("?"):
            continue
        if not starter.match(s):
            continue
        if banned.search(s):
            continue
        if len(s.split()) < 6 or len(s) > 260:
            continue
        questions.append(s)

    # Keep unique order-preserving entries.
    seen = set()
    unique = []
    for q in questions:
        if q not in seen:
            seen.add(q)
            unique.append(q)

    rows: List[Dict[str, str]] = []
    for i, question in enumerate(unique, start=1):
        theme = infer_theme_from_keywords(question, "Probability")
        rows.append(
            {
                "source": "A Practical Guide To Quantitative Finance Interviews",
                "source_file": "量化绿皮书_compressed (1).pdf",
                "source_ref": f"Curated Extract {i}",
                "theme": theme,
                "difficulty": infer_difficulty(question, "Hard"),
                "question_latex": question,
            }
        )

    return rows


def added_hard_questions() -> List[Dict[str, str]]:
    questions = [
        r"Let $(X_t)_{t\ge0}$ be a simple symmetric random walk on $\mathbb{Z}$ with $X_0=0$. Let $\tau_a=\inf\{t\ge0:X_t=a\}$ and $\tau_{-b}=\inf\{t\ge0:X_t=-b\}$ for integers $a,b\ge1$. Compute $\mathbb{P}(\tau_a<\tau_{-b})$ and $\mathbb{E}[\tau_a\wedge\tau_{-b}]$.",
        r"You are shown i.i.d. draws $U_1,U_2,\dots,U_n\sim\operatorname{Unif}(0,1)$. You may stop once and receive the selected value. Determine the optimal stopping rule that maximizes expected payoff and characterize the threshold recursion exactly.",
        r"A market maker posts symmetric quotes $m\pm\delta$ around true value $m$. Buy and sell arrivals are Poisson with intensities $\lambda_+(\delta)=Ae^{-k\delta}$ and $\lambda_-(\delta)=Ae^{-k\delta}$. With CARA utility and inventory penalty $\gamma q^2$, derive the optimal spread as a function of $k,\gamma$, and horizon $T$.",
        r"Two players alternately choose distinct integers from $\{1,2,\dots,9\}$. The first player whose chosen numbers contain a subset summing to $15$ wins immediately. Determine whether first or second player has a forced win and provide a full strategy.",
        r"Let $X,Y\sim N(0,1)$ with correlation $\rho\in(-1,1)$. Compute $\mathbb{P}(X>0,Y>0)$ in closed form, and then compute $\mathbb{E}[XY\mid X>0,Y>0]$.",
        r"An urn starts with 1 red and 1 blue ball. Repeatedly draw one ball uniformly, return it, and add one ball of the same color (Polya urn). After $n$ draws, what is the distribution of the number of red draws? Prove your result.",
        r"You roll a fair die until every face has appeared at least once. Condition on the event that face 6 appears last. Compute the expected stopping time under this conditioning.",
        r"Suppose $N_t$ is a Poisson process of rate $\lambda$. Define $T=\inf\{t\ge0:N_t-\lambda t\ge a\}$ for fixed $a>0$. Using exponential martingales, derive a bound (or exact expression where possible) for $\mathbb{P}(T\le t)$.",
        r"In a best-of-$(2n-1)$ series, Team A wins each game independently with probability $p$. Find a closed form for the probability Team A wins the series and analyze its asymptotic behavior as $n\to\infty$ for $p=\tfrac12+\epsilon$.",
        r"Let $Z_1,\dots,Z_n$ be i.i.d. with continuous cdf $F$. Derive the joint density of $(Z_{(1)},Z_{(n)})$ and compute $\operatorname{Corr}(Z_{(1)},Z_{(n)})$ when $F$ is uniform on $(0,1)$.",
        r"A trader observes a signal $S=V+\varepsilon$ where $V\sim N(0,\sigma_V^2)$ and $\varepsilon\sim N(0,\sigma_\varepsilon^2)$ independent. If execution price is $0$ and position is linear in posterior mean, derive the optimal position under quadratic risk penalty $\lambda q^2$.",
        r"For i.i.d. samples $X_1,\dots,X_n\sim\operatorname{Exp}(1)$, compute the exact distribution of $\max_i X_i-\min_i X_i$ and its expectation.",
    ]

    rows = []
    for i, q in enumerate(questions, start=1):
        rows.append(
            {
                "source": "Added Hard Quant Set",
                "source_file": "(custom)",
                "source_ref": f"Added {i}",
                "theme": infer_theme_from_keywords(q, "Probability"),
                "difficulty": "Very Hard",
                "question_latex": q,
            }
        )
    return rows


def added_theme_expansion_questions() -> List[Dict[str, str]]:
    # Curated hard/cutting-edge additions for themes that were underrepresented.
    by_theme: Dict[str, List[str]] = {
        "Dice Sums": [
            r"You roll a fair die repeatedly and stop at time $\tau_n=\inf\{k:\sum_{i=1}^k X_i\ge n\}$. Derive the limiting distribution of the overshoot $\sum_{i=1}^{\tau_n}X_i-n$ as $n\to\infty$ and compute it explicitly for a 6-sided die.",
        ],
        "Combinatorics & Geometry": [
            r"Choose $n$ points i.i.d. uniformly on the unit circle and connect all pairs. What is the expected number of convex quadrilaterals whose edges are all circle chords?",
            r"Let $P_n$ be a random permutation of $\{1,\dots,n\}$. Find asymptotics for the probability that $P_n$ has no increasing subsequence of length $k$ when $k=\lfloor 2\sqrt{n}-cn^{1/6}\rfloor$.",
            r"On an $n\times n$ grid, count the number of monotone paths from $(0,0)$ to $(n,n)$ that never have three consecutive moves in the same direction.",
            r"Place $2m$ points on a circle uniformly at random and pair them uniformly into chords. Compute the expected number of chord intersections and its variance.",
            r"Uniformly pick $n$ great circles on the sphere with no triple intersection almost surely. Compute the expected number of cells in the induced spherical arrangement.",
            r"Estimate and then compute the expected area of the triangle formed by three points sampled uniformly on the unit circle.",
        ],
        "Non-Standard Dice": [
            r"A die has unknown face probabilities $(p_1,\dots,p_6)$ and known support $\{1,\dots,6\}$. You observe only sums of two independent rolls. Give an identification procedure for $(p_i)$ and characterize when it is unique.",
            r"Find all pairs of non-uniform 6-sided dice on faces $\{1,\dots,6\}$ such that the sum distribution is exactly symmetric and unimodal with the same mean and variance as two fair dice.",
            r"Construct a set of three 6-sided dice $A,B,C$ with non-transitive dominance where $\mathbb{P}(A>B)=\mathbb{P}(B>C)=\mathbb{P}(C>A)=\tfrac12+\epsilon$, and maximize $\epsilon$.",
            r"Given a constraint $\mathbb{E}[X]=4.2$ for a 6-sided die, find the entropy-maximizing face distribution and compute the probability of rolling at least one 6 in 10 rolls.",
            r"A casino adaptively changes die probabilities each roll but must keep $\mathbb{E}[X_t]=3.5$. What strategy maximizes $\mathbb{P}\!\left(\sum_{t=1}^{20}X_t\ge 80\right)$?",
            r"For a weighted die with unknown bias parameter $\theta$, derive the SPRT that decides between $H_0:\theta=\theta_0$ and $H_1:\theta=\theta_1$ with type-I and type-II error constraints.",
            r"Two players each choose one of two biased dice, then roll once; higher roll wins. Characterize mixed-strategy Nash equilibria when both payoff matrix and tie rules are known.",
            r"Suppose die faces are relabeled by a hidden permutation $\pi$ each day, but probabilities of physical faces are fixed and known. Determine the minimum number of observed rolls needed to recover $\pi$ with probability at least $0.99$.",
            r"For two independent loaded dice, design probabilities that maximize $\mathbb{P}(X+Y=7)$ subject to $\mathbb{E}[X]=\mathbb{E}[Y]=3.5$ and $p_i,q_i\ge 0$.",
        ],
        "Estimation & Market Making": [
            r"Estimate how many piano tuners there are in New York City.",
            r"Estimate how many ping-pong balls can fit inside a standard school bus.",
            r"Estimate the total number of steps an average person takes in one year.",
            r"Estimate the number of hairs on a human head.",
            r"Estimate the mass of an adult elephant.",
            r"Estimate the longest distance an elephant could walk in one day.",
            r"Estimate how many grains of rice are in a 1 kg bag.",
            r"Estimate the number of leaves on a fully grown oak tree.",
            r"Estimate how many cups of coffee are consumed worldwide in one day.",
            r"Estimate the number of text messages sent in the United States in one day.",
            r"Estimate the number of photos stored on an average smartphone.",
            r"Estimate how many liters of water are in an Olympic swimming pool.",
            r"Estimate how many breaths a person takes over a 75-year lifetime.",
            r"Estimate how many bicycles are currently in use in your city.",
            r"Estimate the number of books in a medium-sized public library.",
            r"Estimate how long it would take to count to one million out loud.",
            r"Estimate how much paint is needed to paint the exterior of a two-story house.",
            r"Estimate how many tennis balls are sold worldwide each year.",
            r"Estimate how many people can stand in a one-square-kilometer area.",
            r"Estimate the number of stars visible to the naked eye on a clear night.",
            r"Estimate how many paper clips could fill a standard coffee mug.",
            r"Estimate how many restaurants are in a city of one million people.",
            r"Estimate how many school buses operate in the United States.",
            r"Estimate the total length of roads in your country.",
            r"Estimate how many windows are in a 50-story office tower.",
            r"Estimate how many toothbrushes are thrown away in one year in your country.",
            r"Estimate how many slices of pizza are eaten in your city each weekend.",
            r"Estimate the number of emails an office worker sends in one year.",
            r"Estimate how many coins fit in a 2-liter bottle.",
            r"Estimate how many people are currently in airports worldwide at any given time.",
        ],
        "Programming & Algorithms": [
            r"Design a data structure for a full limit-order book supporting add/cancel/execute and best bid/ask queries with strict $O(\log n)$ worst-case updates and $O(1)$ top-of-book reads.",
            r"Given out-of-order trade and quote events with sequence gaps, design a deterministic replay engine that reconstructs book state and guarantees bit-identical replays.",
            r"Implement an online algorithm for rolling-window VWAP on event time with late-arriving corrections and bounded memory.",
            r"Build a lock-free multi-producer single-consumer ring buffer for market data and prove linearizability of enqueue/dequeue operations.",
            r"Design a streaming algorithm that maintains top-$k$ pairwise correlations among 2,000 signals with sub-quadratic memory.",
            r"Given a graph of cross-asset risk dependencies, design an algorithm to recompute all breached risk limits in under 1 millisecond after one shock update.",
            r"Implement weighted reservoir sampling for a trade stream where weights are notionals and support constant-time amortized updates.",
            r"Design an algorithm to detect spoofing patterns in real time using only level-2 updates and trades, under strict latency and false-positive constraints.",
            r"Given nanosecond timestamps and bursty packets, design a robust clock-skew estimator across venues that is resilient to outliers.",
            r"Create a compact integer encoding for order-book deltas that supports SIMD decode and random access to the latest state.",
            r"Design a sliding-window quantile estimator with provable error bounds suitable for microsecond-level latency monitoring.",
            r"Implement dynamic programming for optimal execution with temporary and permanent impact on a discrete state grid; analyze complexity and pruning.",
            r"Design a memory allocator strategy for ultra-low-latency matching simulation that avoids allocator jitter under burst load.",
            r"Given 100 million fills, design a parallel algorithm to compute per-strategy PnL attribution with deterministic summation order and reproducibility.",
            r"Implement a minimal perfect hash-based symbol lookup that supports hot reloading of mappings without blocking readers.",
            r"Design a fault-tolerant market-data ingest pipeline with exactly-once semantics and explain where idempotency keys must be enforced.",
        ],
        "Calculus & Linear Algebra": [
            r"For $A\in\mathbb{R}^{n\times n}$ positive definite, compute $\nabla_x \log\det(A+xx^\top)$ and $\nabla_x^2 \log\det(A+xx^\top)$.",
            r"Let $X\sim N(0,\Sigma)$. Derive $\mathbb{E}[e^{tX^\top BX}]$ and state precise conditions on $t$ for finiteness.",
            r"Derive first-order perturbation formulas for eigenvalues and eigenvectors of $A+\epsilon uv^\top$ when $A$ has simple spectrum.",
            r"Solve the continuous-time algebraic Riccati equation for a one-factor linear-quadratic regulator and characterize stabilizing vs non-stabilizing roots.",
            r"Show uniqueness conditions for the Sylvester equation $AX+XB=C$ and derive an explicit solution in diagonalizable cases.",
            r"Given $f(x)=\log\!\left(\sum_{i=1}^m e^{a_i^\top x}\right)$, prove convexity and derive a global Lipschitz bound for $\nabla f$ in terms of $\{a_i\}$.",
            r"Derive the stationary density of the Ornstein-Uhlenbeck process via the Fokker-Planck equation and verify normalization.",
            r"Compute the Jacobian and Hessian of softmax cross-entropy with respect to logits, and prove positive semidefiniteness of the Hessian.",
            r"Given $A(\theta)=A_0+\sum_{j=1}^p\theta_jA_j$, derive gradients of $\lambda_{\max}(A(\theta))$ at points with simple top eigenvalue.",
            r"Find an explicit formula for $(A+\alpha I)^{-1}-(A+\beta I)^{-1}$ and use it to bound spectral norm differences.",
            r"Evaluate $\int_0^\infty e^{-ax^2-bx}\,dx$ for $a>0$ and derive asymptotics as $b\to\infty$.",
            r"Given factor covariance $\Sigma = BFB^\top + D$, derive closed-form expressions for $\Sigma^{-1}$ and $\log\det\Sigma$ using Woodbury identities.",
            r"Derive second-order Taylor expansion of Black-Scholes implied volatility around ATM forward under smooth call-price perturbations.",
            r"Given two subspaces with orthonormal bases $U,V$, derive principal angles from singular values of $U^\top V$ and relate to projection distance.",
            r"Show when the matrix exponential $e^{tA}$ is contractive in Euclidean norm, and connect the condition to the symmetric part of $A$.",
            r"For $x\in\mathbb{R}^n$, solve $\min_x \|Ax-b\|_2^2+\lambda\|Lx\|_2^2$ and derive sensitivity with respect to $\lambda$.",
            r"Given noisy observations of a rank-$r$ matrix, derive the optimal singular-value shrinkage rule under asymptotic spiked-model assumptions.",
        ],
        "Mental Math": [
            r"Without a calculator, estimate $(1.0009)^{2500}$ to 4 significant digits using logarithmic expansion.",
            r"Mental-math challenge: approximate $\ln(1.073)$ and convert to basis points.",
            r"Approximate $\sqrt{1.0184}$ quickly and provide an error bound under first-order Taylor expansion.",
            r"Compute a fast approximation of $e^{-0.37}$ and compare two different mental methods.",
            r"Estimate $99.7^2$ and $100.3^2$ in under 10 seconds each using algebraic shortcuts.",
            r"Approximate $\frac{1}{0.9974}$ and interpret the result as percentage premium.",
            r"Estimate $\Phi(-2.41)$ (standard normal tail) from memory-friendly approximations.",
            r"Quickly approximate $17\times23\times29$ by decomposition around nearby round numbers.",
            r"Estimate $2^{-7.5}$ mentally and convert to decimal probability.",
            r"Approximate $\left(1-\frac{1}{365}\right)^{120}$ and explain the shortcut used.",
            r"Given annualized volatility 24%, estimate daily volatility in percent to two decimals.",
            r"Given a move of 35 bps and duration 6.8, estimate bond price change in percent including a convexity correction guess.",
            r"Compute a mental approximation of Black-Scholes $d_1$ for $S=101$, $K=100$, $\sigma=20\%$, $T=0.25$, $r=0$.",
            r"Estimate $(1.07)^5$ and then infer $(1.07)^{-5}$ mentally.",
            r"Approximate $\log_{2}(10)$ and use it to estimate the number of bits required to encode one million states.",
            r"Find a rapid estimate of $\sum_{k=1}^{20}\frac{1}{k}$ with a justified error range.",
            r"Given odds ratio 1.35, convert to implied probability quickly under fair-book assumptions.",
            r"Mental arithmetic drill: evaluate $63/17 + 91/26 - 37/14$ to two decimal places.",
            r"Approximate $\operatorname{erf}(0.9)$ using a short polynomial approximation and report accuracy to 3 decimals.",
        ],
        "Finance & Markets": [
            r"Under the Heston model, derive semi-closed pricing for European calls via characteristic functions and outline a stable numerical integration scheme.",
            r"Derive the fair strike of a variance swap from a continuum of option prices and state assumptions required for replication.",
            r"Given a stochastic basis between cash and futures, derive no-arbitrage bounds when funding and shorting constraints are explicit.",
            r"In the Almgren-Chriss model with drift uncertainty, derive the optimal execution trajectory and sensitivity to risk aversion.",
            r"Show static no-arbitrage constraints across strike and maturity for call surfaces and derive equivalent convexity/monotonicity tests.",
            r"Derive the quanto drift adjustment for a foreign equity under domestic risk-neutral measure with correlated FX and equity shocks.",
            r"Given bid/ask quotes for digital options across strikes, infer arbitrage-free bounds on the risk-neutral density.",
            r"Derive first-order SABR implied-vol asymptotics and discuss calibration instability in low-rate regimes.",
            r"Price a barrier option via static replication error bounds when only a finite strip of vanilla options is available.",
            r"Given a two-level order book, derive microprice and optimal skew adjustment for a passive market maker with inventory penalty.",
            r"Formulate and solve a queue-reactive market-making model where fill intensity depends on queue position and imbalance.",
            r"Under jump-diffusion dynamics, derive hedging error decomposition of a delta-hedged option over discrete rebalancing intervals.",
            r"Design a cross-gamma hedge for a portfolio of equity and index options under a one-factor correlation stress scenario.",
            r"Given OIS discounting and collateral terms, derive valuation adjustments for a simple uncollateralized forward.",
            r"Derive conditions under which calendar-spread arbitrage appears in an SVI volatility surface and propose a repair map.",
            r"Given ETF creation/redemption frictions, derive bounds on ETF-premium persistence and optimal arbitrage threshold.",
            r"Model a pair-trade with stochastic spread mean reversion speed and derive optimal stopping boundaries for entry and exit.",
            r"Given a term structure of CDS spreads, derive implied piecewise-constant hazard rates and survival probabilities.",
            r"For discrete delta hedging with transaction costs, derive the optimal no-trade band width scaling with volatility and cost parameter.",
        ],
    }

    rows: List[Dict[str, str]] = []
    for theme in sorted(by_theme.keys()):
        for i, q in enumerate(by_theme[theme], start=1):
            rows.append(
                {
                    "source": "Added Hard Quant Set",
                    "source_file": "(custom)",
                    "source_ref": f"{theme} Added {i}",
                    "theme": theme,
                    "difficulty": "Very Hard",
                    "question_latex": q,
                }
            )
    return rows


def assert_minimum_per_theme(rows: List[Dict[str, str]], minimum: int = 20) -> None:
    counts: Dict[str, int] = {}
    for row in rows:
        counts[row["theme"]] = counts.get(row["theme"], 0) + 1

    missing = {theme: count for theme, count in counts.items() if count < minimum}
    if missing:
        details = ", ".join(f"{k}={v}" for k, v in sorted(missing.items()))
        raise RuntimeError(f"Theme minimum check failed: {details}")


def is_general_audience_estimation_prompt(text: str) -> bool:
    q = (text or "").strip().lower()
    if not q:
        return False

    looks_like_estimation = (
        q.startswith("estimate ")
        or " estimate the " in q
    )
    if not looks_like_estimation:
        return False

    # Keep the estimation track free of market-specific jargon.
    jargon_markers = [
        "market",
        "trading",
        "exchange",
        "order book",
        "order",
        "queue",
        "spread",
        "bid",
        "ask",
        "alpha",
        "pnl",
        "sharpe",
        "basis points",
        "volatility",
        "options",
        "execution",
        "latency",
        "venue",
    ]
    if any(w in q for w in jargon_markers):
        return False

    # Keep it accessible: no symbolic/math-heavy phrasing.
    hard_math_terms = [
        "probability",
        "prime",
        "integral",
        "derivative",
        "variance",
        "covariance",
        "eigen",
        "matrix",
        "poisson",
        "brownian",
        "martingale",
        "random walk",
    ]
    if any(w in q for w in hard_math_terms):
        return False

    math_markers = [
        r"\mathbb",
        r"\operatorname",
        r"\lambda",
        r"\sigma",
        r"\tau",
        r"\sum",
        r"\inf",
        r"\sup",
        r"\ge",
        r"\le",
        r"\tfrac",
        r"\left",
        r"\right",
        r"\pm",
        "^",
        "_",
    ]
    return not any(m in q for m in math_markers)


def is_probability_level_accessible(question: str) -> bool:
    q = (question or "").strip().lower()
    if not q:
        return False

    banned_terms = [
        "nash",
        "equilibria",
        "mixed-strategy",
        "riccati",
        "sylvester",
        "heston",
        "sabr",
        "quanto",
        "jump-diffusion",
        "fokker-planck",
        "ornstein-uhlenbeck",
        "martingale",
        "brownian",
        "stochastic calculus",
        "hazard rate",
        "principal angles",
        "linearizability",
        "simd",
        "woodbury",
        "asymptotic",
        "asymptotics",
        "characteristic function",
        "sprt",
        "entropy-maximizing",
        "cross-gamma",
    ]
    if any(t in q for t in banned_terms):
        return False

    # Drop very technical symbolic prompts that are beyond basic probability prep.
    banned_math_markers = [
        r"\mathbb",
        r"\operatorname",
        r"\nabla",
        r"\det",
        r"\inf",
        r"\sup",
        r"\lambda",
        r"\sigma",
        r"\rho",
        r"\epsilon",
        r"\theta",
        r"\ge",
        r"\le",
        r"\tfrac",
        r"\left",
        r"\right",
    ]
    if any(m in q for m in banned_math_markers):
        return False

    return True


def normalize_theme_taxonomy(rows: List[Dict[str, str]]) -> List[Dict[str, str]]:
    out: List[Dict[str, str]] = []
    for row in rows:
        item = dict(row)
        theme = item.get("theme", "Probability")
        theme = THEME_REMAP.get(theme, theme)
        if theme in REMOVED_THEMES:
            continue

        if theme == "Estimation & Market Making" and not is_general_audience_estimation_prompt(item.get("question_latex", "")):
            # Keep this topic estimation-only; move non-estimation prompts elsewhere.
            theme = "Probability"

        # Keep only questions that are understandable with probability background.
        if not is_probability_level_accessible(item.get("question_latex", "")):
            continue

        item["theme"] = theme
        out.append(item)
    return out


def default_solution_for_question(theme: str, question: str) -> str:
    q = (question or "").strip()

    if theme == "Estimation & Market Making":
        return (
            "Use a Fermi breakdown: (1) define exactly what is being counted/measured, "
            "(2) split into 3-5 simple factors, (3) choose round-number assumptions with clear units, "
            "(4) multiply/divide to get a central estimate, and (5) give a low/high range by varying key assumptions. "
            "State your assumptions first, then compute."
        )

    if theme in {"Dice & Random Variables", "Dice Sums & Games", "Non-Standard Dice", "Card Problems", "Probability", "Coins & Random Walks"}:
        return (
            "Set up the sample space and target event clearly. Use counting/complementarity, "
            "linearity of expectation, conditioning, or recursion/Markov states as appropriate. "
            "Simplify the expression and check edge cases (symmetry, bounds, and sanity against small cases)."
        )

    if theme in {"Combinatorics & Geometry"}:
        return (
            "Translate the statement into a counting/geometry model. Use symmetry, invariants, "
            "bijections, inclusion-exclusion, or area/probability geometry. For exact counts, verify with small n before generalizing."
        )

    if theme in {"Game Theory & Logic"}:
        return (
            "Work backward from terminal states (backward induction). Identify invariant or winning/losing states, "
            "then prove the strategy by showing every opponent move can be countered while preserving the invariant."
        )

    return (
        "Restate the problem with precise variables, choose the core method, carry out the computation step-by-step, "
        "and finish with a numerical/closed-form answer plus a brief sanity check."
    )


def worked_estimation_solution(question: str) -> str:
    q = question.lower()

    templates = [
        (
            ["piano tuners", "new york"],
            "Step 1: Assume New York City has about 8.5 million people.\n"
            "Step 2: Assume 1 household per 2.5 people, so about 3.4 million households.\n"
            "Step 3: Assume 1 in 20 households owns a piano -> about 170,000 pianos.\n"
            "Step 4: Assume each piano is tuned once per year, and one tuner does about 4 tunings/day * 250 days = 1,000 tunings/year.\n"
            "Step 5: Estimated tuners = 170,000 / 1,000 = 170.\n"
            "Answer: about 150-250 piano tuners (central estimate ~170)."
        ),
        (
            ["ping-pong balls", "school bus"],
            "Step 1: Approximate bus interior volume as 11 m * 2.3 m * 2 m = 50.6 m^3.\n"
            "Step 2: Assume only about 60% usable due to seats/shape -> 30 m^3 usable.\n"
            "Step 3: Ping-pong ball diameter is 4 cm -> radius 2 cm. Ball volume = 4/3*pi*(0.02)^3 ≈ 3.35e-5 m^3.\n"
            "Step 4: Random packing efficiency ~64%.\n"
            "Step 5: Count ≈ (30 * 0.64) / 3.35e-5 ≈ 573,000.\n"
            "Answer: roughly 0.5 to 0.8 million balls (central ~0.57 million)."
        ),
        (
            ["hairs on a human head"],
            "Step 1: Hair density is often around 150-250 hairs per cm^2.\n"
            "Step 2: Hair-bearing scalp area is about 450-550 cm^2.\n"
            "Step 3: Multiply midpoint values: 200 * 500 = 100,000.\n"
            "Answer: around 80,000-120,000 hairs (central estimate ~100,000)."
        ),
        (
            ["mass of an adult elephant"],
            "Step 1: Use typical adult African elephant mass range.\n"
            "Step 2: Adult females are often around 2,700-3,600 kg; males often around 4,500-6,000 kg.\n"
            "Step 3: A single representative adult estimate is near the midpoint of these ranges.\n"
            "Answer: around 4,500 kg (about 4-6 metric tons depending on sex/species)."
        ),
        (
            ["longest distance an elephant could walk in one day"],
            "Step 1: Assume sustained walking speed around 4-5 km/h when moving.\n"
            "Step 2: Assume active movement time 8-12 hours/day depending on terrain and conditions.\n"
            "Step 3: Distance range ≈ speed * time = (4 to 5) * (8 to 12) = 32 to 60 km.\n"
            "Answer: roughly 40-60 km/day for a strong long-distance day."
        ),
        (
            ["grains of rice", "1 kg"],
            "Step 1: Approximate one grain mass at about 20-30 mg.\n"
            "Step 2: 1 kg = 1,000,000 mg.\n"
            "Step 3: Count range = 1,000,000 / (20 to 30) ≈ 33,000 to 50,000.\n"
            "Answer: about 40,000 grains in a 1 kg bag (order of magnitude 10^4)."
        ),
        (
            ["cups of coffee", "worldwide", "one day"],
            "Step 1: World population about 8 billion.\n"
            "Step 2: Suppose ~1.3 billion people drink coffee daily.\n"
            "Step 3: Assume average 2 cups/day among daily drinkers.\n"
            "Step 4: Total = 1.3 billion * 2 = 2.6 billion cups/day.\n"
            "Answer: roughly 2-3 billion cups/day."
        ),
        (
            ["text messages", "united states", "one day"],
            "Step 1: U.S. population about 330 million.\n"
            "Step 2: Assume ~250 million active texters.\n"
            "Step 3: Assume average 15-25 texts/day per active texter.\n"
            "Step 4: Total ≈ 250 million * (15 to 25) = 3.75 to 6.25 billion.\n"
            "Answer: roughly 4-6 billion texts/day."
        ),
        (
            ["photos", "average smartphone"],
            "Step 1: Typical photo size after compression is roughly 2-4 MB.\n"
            "Step 2: If a user allocates ~20-60 GB to photos, count is 20,000-60,000 MB divided by 2-4 MB.\n"
            "Step 3: This gives roughly 5,000-30,000 photos depending on user behavior.\n"
            "Answer: about 10,000 photos as a central estimate."
        ),
        (
            ["olympic swimming pool"],
            "Step 1: Standard pool dimensions are 50 m * 25 m * 2 m average depth.\n"
            "Step 2: Volume = 2,500 m^3.\n"
            "Step 3: 1 m^3 = 1,000 liters.\n"
            "Answer: about 2.5 million liters."
        ),
        (
            ["breaths", "75-year"],
            "Step 1: Assume resting breathing rate about 12-18 breaths/min; use 15.\n"
            "Step 2: Per day = 15 * 60 * 24 = 21,600.\n"
            "Step 3: Over 75 years: 21,600 * 365 * 75 ≈ 591 million.\n"
            "Answer: on the order of 5e8 to 7e8 breaths (~600 million)."
        ),
        (
            ["books", "public library"],
            "Step 1: A medium public library building might have 10,000-20,000 sq ft of shelving/collection space.\n"
            "Step 2: Shelf density and collection policy often support around 50,000-150,000 volumes.\n"
            "Answer: roughly 100,000 books as a midpoint estimate."
        ),
        (
            ["count to one million"],
            "Step 1: Speaking one number takes about 1 second on average once numbers get longer.\n"
            "Step 2: 1,000,000 seconds / 3600 ≈ 278 hours.\n"
            "Step 3: At 8 hours/day, that's about 35 days of continuous counting sessions.\n"
            "Answer: about 11-12 days nonstop, or about a month of workdays."
        ),
        (
            ["paper clips", "coffee mug"],
            "Step 1: Mug volume ~350 mL = 350 cm^3.\n"
            "Step 2: Effective packed volume per paper clip (including voids) maybe ~1-1.5 cm^3.\n"
            "Step 3: Count ≈ 350 / (1 to 1.5) = 230 to 350.\n"
            "Answer: roughly 250-350 paper clips."
        ),
        (
            ["coins fit in a 2-liter bottle"],
            "Step 1: Bottle volume is 2 liters = 2,000 cm^3.\n"
            "Step 2: Approximate one coin displaced packed volume ~0.7-1.0 cm^3 including voids.\n"
            "Step 3: Count ≈ 2,000 / (0.7 to 1.0) = 2,000 to 2,850.\n"
            "Answer: about 2,200-2,800 coins."
        ),
    ]

    for keys, solution in templates:
        if all(k in q for k in keys):
            return solution

    return (
        "Step 1: Clarify what is being estimated and pick a consistent unit.\n"
        "Step 2: Break the quantity into 3-5 simple factors (population, rate, size, time, etc.).\n"
        "Step 3: Choose reasonable round assumptions for each factor and compute the central estimate.\n"
        "Step 4: Stress the two most uncertain assumptions by 2x up/down to create a low/high range.\n"
        "Answer: report midpoint and range, then state why the order of magnitude is plausible."
    )


def worked_solution_by_pattern(theme: str, question: str) -> str:
    q = (question or "").lower()
    nums = re.findall(r"\d+(?:\.\d+)?", q)
    n_info = ", ".join(nums[:6]) if nums else "no explicit numbers"

    if theme == "Estimation & Market Making":
        return worked_estimation_solution(question)

    if "expected number" in q and "until" in q and ("roll" in q or "flip" in q):
        return (
            "Step 1: Model the stopping condition as a geometric/negative-binomial waiting-time process.\n"
            "Step 2: Define success probability p for one trial (based on symmetry/counting).\n"
            "Step 3: Use E[T]=1/p for first success, or state recursion for pattern waiting times.\n"
            "Step 4: Solve the recursion or substitute p.\n"
            "Answer: obtain the expected waiting time from the closed form."
        )

    if "at least" in q and ("probability" in q or "chance" in q):
        return (
            "Step 1: Identify the counting model (binomial/multinomial/hypergeometric depending on replacement).\n"
            "Step 2: Compute complement when easier: P(X>=k)=1-P(X<=k-1).\n"
            "Step 3: Evaluate the finite sum of combinations/probability masses.\n"
            "Step 4: Simplify to exact fraction or decimal.\n"
            "Answer: final probability comes from that summed expression."
        )

    if "deck" in q or "cards" in q:
        return (
            "Step 1: Decide whether draws are with replacement (independent) or without replacement (combinatorial).\n"
            "Step 2: Express favorable outcomes and total outcomes using combinations/permutations.\n"
            "Step 3: If expectation is asked, use indicator variables and linearity of expectation.\n"
            "Step 4: Simplify algebraically and sanity-check against symmetry.\n"
            "Answer: exact value follows from the counting expression."
        )

    if "strategy" in q or "wins" in q or "game" in q:
        return (
            "Step 1: Write game states and terminal conditions.\n"
            "Step 2: Use backward induction/recursion on states (winning vs losing states).\n"
            "Step 3: Show the move that sends opponent to a losing state (or maximize expected value).\n"
            "Step 4: Prove invariance by checking all opponent responses.\n"
            "Answer: the resulting policy is optimal by state recursion."
        )

    return (
        "Step 1: Restate the target quantity and define variables explicitly.\n"
        f"Step 2: Extract known constants from the prompt ({n_info}).\n"
        "Step 3: Build the governing equation using probability/counting/expectation tools.\n"
        "Step 4: Solve the equation and perform a quick sanity check (bounds, symmetry, limiting behavior).\n"
        "Answer: report final numeric or closed-form result from that solved expression."
    )


MANUAL_SOLUTION_OVERRIDES: Dict[tuple[str, str], str] = {
    ("Final Round Interview Preparation", "Exercise 2"): (
        "Step 1: Let T be the number of rolls until the first 3 appears.\n"
        "Step 2: Each roll is independent with success probability p = 1/6.\n"
        "Step 3: T is geometric, so E[T] = 1/p.\n"
        "Step 4: E[T] = 1/(1/6) = 6.\n"
        "Answer: the expected number of rolls is 6."
    ),
    ("Final Round Interview Preparation", "Exercise 4"): (
        "Step 1: Compare expected values of the two payouts.\n"
        "Step 2: For two fair dice X,Y, E[max(X,Y)] = sum_{k=1}^6 P(max >= k) = sum_{k=1}^6 (1-((k-1)/6)^2) = 161/36.\n"
        "Step 3: E[min(X,Y)] = sum_{k=1}^6 P(min >= k) = sum_{k=1}^6 ((7-k)/6)^2 = 91/36.\n"
        "Step 4: E[2*min] = 2*(91/36) = 91/18 > 161/36.\n"
        "Answer: choose twice the minimum; its EV is 91/18 (~5.056) vs max EV 161/36 (~4.472)."
    ),
    ("Final Round Interview Preparation", "Exercise 8"): (
        "Step 1: Compute directly if an exact value is requested: sum of first 100 primes = 24,133.\n"
        "Step 2: For a quick estimate, use p_n ~ n log n and average prime size around 240.\n"
        "Step 3: 100 * 240 gives an order-of-magnitude estimate near 24,000.\n"
        "Answer: exact sum = 24,133 (estimate ~2.4e4)."
    ),
    ("Final Round Interview Preparation", "Exercise 11"): (
        "Step 1: Compute EV of each choice.\n"
        "Step 2: One die doubled: E[2D] = 2*E[D] = 2*3.5 = 7.\n"
        "Step 3: Sum of two dice: E[D1 + D2] = 3.5 + 3.5 = 7.\n"
        "Step 4: Means are identical; tie-breaker can be variance/risk preference.\n"
        "Answer: neither is better in expectation (both EV = 7)."
    ),
    ("50 Advanced Quant Interview Questions", "Question 1"): (
        "Step 1: Use states by current streak of consecutive sixes: S0 (no trailing 6), S1 (one trailing 6).\n"
        "Step 2: Let E0,E1 be expected additional rolls from S0,S1. Then:\n"
        "E0 = 1 + (5/6)E0 + (1/6)E1,\n"
        "E1 = 1 + (5/6)E0 + (1/6)*0.\n"
        "Step 3: From the first equation, E0 - E1 = 6. Substitute E1 = 1 + (5/6)E0.\n"
        "Step 4: Solve: E0 - (1 + (5/6)E0) = 6 -> (1/6)E0 = 7 -> E0 = 42.\n"
        "Answer: expected rolls = 42."
    ),
    ("50 Advanced Quant Interview Questions", "Question 3"): (
        "Step 1: This is coupon collector with 6 equally likely faces.\n"
        "Step 2: Expected time to go from k seen faces to k+1 is 1/((6-k)/6) = 6/(6-k).\n"
        "Step 3: Sum over k=0..5: E[T] = 6*(1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6).\n"
        "Step 4: Harmonic number H6 = 49/20.\n"
        "Answer: E[T] = 6H6 = 147/10 = 14.7."
    ),
    ("50 Advanced Quant Interview Questions", "Question 5"): (
        "Step 1: Let S be Bob's 3d6 sum. We need P(Alice > S) with Alice uniform on {1,...,20}.\n"
        "Step 2: Condition on S=s: P(Alice > s) = (20-s)/20 for s<=20 (always true here).\n"
        "Step 3: Use known 3d6 frequencies and average: P = sum_s P(S=s)*(20-s)/20.\n"
        "Step 4: Evaluating the exact finite sum gives 19/40.\n"
        "Answer: P(Alice strictly beats Bob) = 19/40 = 0.475."
    ),
    ("50 Advanced Quant Interview Questions", "Question 6"): (
        "Step 1: Let X_i be i.i.d. die rolls in {1,...,6}, and U_n = sum_{i=1}^n X_i.\n"
        "Step 2: The event of ever hitting a large target m is a lattice renewal event.\n"
        "Step 3: By the renewal theorem for arithmetic distributions (span 1), P(m is hit) -> 1/E[X_1].\n"
        "Step 4: E[X_1] = (1+2+3+4+5+6)/6 = 3.5.\n"
        "Answer: for m=1,000,000, P(hit exactly m) is approximately 1/3.5 = 2/7 ~ 0.285714."
    ),
    ("50 Advanced Quant Interview Questions", "Question 21"): (
        "Step 1: Color the 8x8 board in chessboard colors. Every domino covers one black and one white square.\n"
        "Step 2: Opposite corners of an 8x8 board are the same color.\n"
        "Step 3: Removing top-left and bottom-right removes two squares of the same color.\n"
        "Step 4: Remaining board has unequal black/white counts, so it cannot be partitioned into 31 black-white domino pairs.\n"
        "Answer: impossible to tile."
    ),
    ("50 Advanced Quant Interview Questions", "Question 22"): (
        "Step 1: This is the classic deficient-board tromino theorem for size 2^k x 2^k.\n"
        "Step 2: Base case k=1 (2x2 minus one square): exactly one L-tromino tiles it.\n"
        "Step 3: Induction: split the 2^k x 2^k board into four 2^(k-1) x 2^(k-1) quadrants.\n"
        "Step 4: Place one central L-tromino to create one missing square in each of the three full quadrants; each quadrant is now deficient and tileable by induction.\n"
        "Answer: yes, every 1024x1024 board with one square removed is tileable."
    ),
    ("50 Advanced Quant Interview Questions", "Question 23"): (
        "Step 1: Consider each internal vertical line (5 of them). Let h_k be the number of horizontal dominoes crossing line k.\n"
        "Step 2: Left of line k there are 6k squares (even). Dominoes entirely on one side contribute 0 or 2 squares to the left side, while each crossing domino contributes 1.\n"
        "Step 3: Therefore h_k must be even. If no vertical fault line exists, each h_k >= 2, so total horizontal dominoes >= 10.\n"
        "Step 4: Similarly for the 5 horizontal lines, each crossing count is even and at least 2 if no horizontal fault line, forcing vertical dominoes >= 10. Total would be >= 20 > 18 dominoes.\n"
        "Answer: contradiction; at least one fault line must exist."
    ),
    ("50 Advanced Quant Interview Questions", "Question 24"): (
        "Step 1: Board area is 10*10 = 100.\n"
        "Step 2: Each 1x4 tile covers area 4.\n"
        "Step 3: Exact tiling requires total area divisible by 4.\n"
        "Step 4: 100 is divisible by 4, so area alone does not rule it out. Color by columns modulo 4: every 1x4 horizontal tile uses one of each color; every vertical tile uses one color four times. Counting colors on 10x10 gives imbalance incompatible with exact decomposition.\n"
        "Answer: no, a perfect tiling is impossible."
    ),
    ("50 Advanced Quant Interview Questions", "Question 25"): (
        "Step 1: Let breakpoints be U<V uniform on [0,1], giving lengths U, V-U, 1-V.\n"
        "Step 2: Three segments form a triangle iff no piece exceeds 1/2.\n"
        "Step 3: In the (U,V) triangle 0<U<V<1 (area 1/2), the valid region is 1/2 < V < U+1/2 and U < 1/2.\n"
        "Step 4: That valid region has area 1/8.\n"
        "Answer: probability = (1/8)/(1/2) = 1/4."
    ),
    ("50 Advanced Quant Interview Questions", "Question 26"): (
        "Step 1: First break at U~Unif(0,1). Longer piece length is L=max(U,1-U), with density f_L(l)=2 on [1/2,1].\n"
        "Step 2: Break that piece uniformly; resulting lengths are V and L-V with V~Unif(0,L). Third piece is 1-L.\n"
        "Step 3: Triangle condition is equivalent to all three pieces <1/2. Since 1-L<=1/2 automatically, need V<1/2 and L-V<1/2, i.e. V in (L-1/2, 1/2).\n"
        "Step 4: Conditional probability is (1-L)/L. Integrate: P = int_{1/2}^1 2*(1-L)/L dL = 2 ln 2 - 1.\n"
        "Answer: probability = 2 ln 2 - 1 ~ 0.3863."
    ),
    ("50 Advanced Quant Interview Questions", "Question 27"): (
        "Step 1: A collision occurs unless all ants choose the same direction around the polygon.\n"
        "Step 2: Each ant independently chooses clockwise/counterclockwise with probability 1/2.\n"
        "Step 3: Total direction assignments = 2^n.\n"
        "Step 4: Collision-free assignments are exactly two: all clockwise or all counterclockwise.\n"
        "Answer: P(no collision) = 2/2^n = 2^(1-n)."
    ),
    ("50 Advanced Quant Interview Questions", "Question 28"): (
        "Step 1: Total pairings of 2n points into chords is (2n-1)!!.\n"
        "Step 2: Non-intersecting pairings are Catalan number C_n = (1/(n+1))*binom(2n,n).\n"
        "Step 3: Probability is ratio C_n/(2n-1)!!.\n"
        "Step 4: Using (2n-1)!! = (2n)!/(2^n n!), this simplifies to 2^n/(n+1)!.\n"
        "Answer: P(no intersections) = C_n/(2n-1)!! = 2^n/(n+1)!."
    ),
    ("50 Advanced Quant Interview Questions", "Question 29"): (
        "Step 1: Use indicators I_i that person i has at least one opposite-gender neighbor. E[sum I_i] = sum E[I_i].\n"
        "Step 2: For a fixed person (say male), P(both neighbors male) = ((n-1)/(2n-1))*((n-2)/(2n-2)).\n"
        "Step 3: So E[I_i] = 1 - ((n-1)(n-2))/((2n-1)(2n-2)).\n"
        "Step 4: Multiply by 2n people.\n"
        "Answer: E = 2n*(1 - ((n-1)(n-2))/((2n-1)(2n-2))) = 3n^2/(2n-1)."
    ),
    ("50 Advanced Quant Interview Questions", "Question 30"): (
        "Step 1: Ballot theorem setup: A has n votes, B has m votes, n>m.\n"
        "Step 2: Total vote sequences is binom(n+m,n).\n"
        "Step 3: By reflection principle / Bertrand ballot theorem, the fraction where A is always strictly ahead is (n-m)/(n+m).\n"
        "Step 4: Equivalent count is ((n-m)/(n+m))*binom(n+m,n).\n"
        "Answer: probability = (n-m)/(n+m)."
    ),
    ("50 Advanced Quant Interview Questions", "Question 32"): (
        "Step 1: Make pile A with exactly 10 coins (any 10, chosen blindly). Pile B has the other 90.\n"
        "Step 2: Let pile A initially contain h heads. Then pile B contains 10-h heads (since total heads is 10).\n"
        "Step 3: Flip all 10 coins in pile A.\n"
        "Step 4: Heads in flipped A become 10-h, matching pile B.\n"
        "Answer: split 10/90, flip the 10-coin pile; both piles end with the same number of heads."
    ),
    ("50 Advanced Quant Interview Questions", "Question 33"): (
        "Step 1: Let a_n be number of length-n sequences with no consecutive HH.\n"
        "Step 2: Recurrence: a_n = a_{n-1} + a_{n-2} (end with T, or end with HT).\n"
        "Step 3: With a_1=2 and a_2=3, we get a_n = F_{n+2}.\n"
        "Step 4: For n=10, a_10 = F_12 = 144 out of 2^10 total sequences.\n"
        "Answer: probability = 144/1024 = 9/64."
    ),
    ("50 Advanced Quant Interview Questions", "Question 34"): (
        "Step 1: Write Alice heads as A = A50 + X, where A50~Bin(50,1/2), X~Bern(1/2), independent.\n"
        "Step 2: Bob has B~Bin(50,1/2). Need P(A>B) = P(A50-B + X > 0).\n"
        "Step 3: Let D=A50-B (symmetric around 0). Then P(D>0) = P(D<0) = (1-P(D=0))/2.\n"
        "Step 4: P(A>B)=P(D>0)+P(D=0,X=1)=(1-P0)/2 + P0/2 = 1/2.\n"
        "Answer: exact probability is 1/2."
    ),
    ("50 Advanced Quant Interview Questions", "Question 35"): (
        "Step 1: Use the von Neumann extractor on pairs of tosses.\n"
        "Step 2: Toss twice. If outcomes are HT, output Heads. If TH, output Tails.\n"
        "Step 3: If HH or TT, discard the pair and repeat.\n"
        "Step 4: P(HT)=p(1-p)=P(TH), so conditioned on output, both outcomes are equally likely.\n"
        "Answer: this produces an exact fair 50/50 coin from any unknown 0<p<1."
    ),
    ("50 Advanced Quant Interview Questions", "Question 37"): (
        "Step 1: Model position as biased random walk on nonnegative integers with cliff at 0, start at 1.\n"
        "Step 2: Step +1 (away) with p=2/3, step -1 (toward) with q=1/3.\n"
        "Step 3: For p>q, probability of ever hitting 0 from i is (q/p)^i.\n"
        "Step 4: With i=1, (q/p)= (1/3)/(2/3) = 1/2.\n"
        "Answer: probability he eventually falls is 1/2."
    ),
    ("50 Advanced Quant Interview Questions", "Question 39"): (
        "Step 1: Let D_t = H_t - T_t. Each flip changes D_t by +/-1 with equal probability.\n"
        "Step 2: Stop when |D_t|=3; this is first hitting time of {-3,+3} for simple random walk starting at 0.\n"
        "Step 3: For symmetric walk, expected hitting time to boundaries +/-a from 0 is a^2.\n"
        "Step 4: Here a=3, so E[T]=9.\n"
        "Answer: expected number of flips is 9."
    ),
    ("50 Advanced Quant Interview Questions", "Question 40"): (
        "Step 1: For each starting position i=1,...,98 define indicator I_i that flips i..i+2 equal HTH.\n"
        "Step 2: E[I_i]=P(HTH)=1/8.\n"
        "Step 3: Number of possible starts is 98.\n"
        "Step 4: By linearity, E[sum I_i]=sum E[I_i]=98*(1/8)=49/4.\n"
        "Answer: expected count is 49/4 = 12.25."
    ),
    ("50 Advanced Quant Interview Questions", "Question 41"): (
        "Step 1: After passenger 1 picks randomly, only two seat labels matter for the final outcome: seat 1 and seat 100.\n"
        "Step 2: Whenever a displaced passenger chooses randomly, they either choose seat 1, seat 100, or some other seat that keeps the process going.\n"
        "Step 3: The first time either seat 1 or seat 100 is chosen determines the end.\n"
        "Step 4: By symmetry between seat 1 and seat 100, each happens first with probability 1/2.\n"
        "Answer: probability passenger 100 gets own seat is 1/2."
    ),
    ("50 Advanced Quant Interview Questions", "Question 43"): (
        "Step 1: One fake among 12, and fake can be heavier or lighter: total hypotheses = 24.\n"
        "Step 2: A balance weighing has 3 outcomes (left heavy, right heavy, balance).\n"
        "Step 3: With w weighings, at most 3^w distinguishable outcomes.\n"
        "Step 4: Need 3^w >= 24, so w=3 is minimum (since 3^2=9<24, 3^3=27>=24), and a 3-weighing strategy exists.\n"
        "Answer: minimum required weighings = 3."
    ),
    ("50 Advanced Quant Interview Questions", "Question 44"): (
        "Step 1: Race five groups of five horses (5 races) to get within-group orderings.\n"
        "Step 2: Race the five group winners (6th race). Suppose order is A1<B1<C1<D1<E1.\n"
        "Step 3: Eliminate all horses in groups D and E, and in group C except C1, in group B except B1,B2, in group A except A1,A2,A3.\n"
        "Step 4: Remaining candidates for 2nd/3rd are A2,A3,B1,B2,C1. One final race among these five determines top 2 among them.\n"
        "Answer: minimum races = 7."
    ),
    ("50 Advanced Quant Interview Questions", "Question 45"): (
        "Step 1: Label bottles 0..999 in binary using 10 bits.\n"
        "Step 2: Rat r (bit position r) drinks from every bottle whose r-th bit is 1.\n"
        "Step 3: After 24 hours, each rat dead/alive gives bit 1/0.\n"
        "Step 4: The 10-bit death pattern equals the poisoned bottle index.\n"
        "Answer: binary encoding identifies the poisoned bottle in one round."
    ),
    ("50 Advanced Quant Interview Questions", "Question 46"): (
        "Step 1: Light rope A at both ends and rope B at one end simultaneously.\n"
        "Step 2: Rope A finishes in 30 minutes (burning from both ends).\n"
        "Step 3: At that moment (30 min), light the other end of rope B.\n"
        "Step 4: Remaining part of rope B now burns from both ends, so it finishes in 15 more minutes.\n"
        "Answer: total measured time = 30 + 15 = 45 minutes."
    ),
    ("50 Advanced Quant Interview Questions", "Question 47"): (
        "Step 1: Backward induction. With 2 pirates, #2 survives with all 100 (needs only own vote).\n"
        "Step 2: With 3 pirates, #3 buys #1 with 1 coin -> (99,0,1) for pirates (3,2,1).\n"
        "Step 3: With 4 pirates, #2 needs one extra vote and buys #4 (who gets 0 otherwise): (99,0,1,0) for (2,3,4,5).\n"
        "Step 4: With 5 pirates, #1 needs two extra votes; cheapest are pirates #3 and #5 (both get 0 if #1 dies). Offer them 1 each.\n"
        "Answer: optimal proposal (pirates 1..5) is (98,0,1,0,1)."
    ),
    ("50 Advanced Quant Interview Questions", "Question 48"): (
        "Step 1: Send 1 and 2 across (2 min), return 1 (1 min).\n"
        "Step 2: Send 5 and 10 across (10 min), return 2 (2 min).\n"
        "Step 3: Send 1 and 2 across again (2 min).\n"
        "Step 4: Total = 2 + 1 + 10 + 2 + 2 = 17.\n"
        "Answer: optimal crossing time is 17 minutes."
    ),
    ("50 Advanced Quant Interview Questions", "Question 49"): (
        "Step 1: Use induction on number n of blue-eyed people.\n"
        "Step 2: If n=1, they leave the first night after announcement.\n"
        "Step 3: Assume true for n-1. With n people, each sees n-1 blue eyes and reasons: if I am not blue, those n-1 would leave on night n-1.\n"
        "Step 4: When nobody leaves on night n-1, each deduces they are blue and all leave on night n.\n"
        "Answer: with 100 blue-eyed logicians, all leave together on the 100th night."
    ),
    ("50 Advanced Quant Interview Questions", "Question 50"): (
        "Step 1: Door d is toggled once for each divisor of d.\n"
        "Step 2: Most numbers have divisors in pairs (a,d/a), so even number of toggles -> closed.\n"
        "Step 3: Perfect squares have one unpaired divisor (sqrt(d)), so odd number of toggles -> open.\n"
        "Step 4: Squares <=100 are 1,4,9,16,25,36,49,64,81,100.\n"
        "Answer: exactly the perfect-square-numbered doors remain open."
    ),
    ("A Collection of Dice Problems", "Problem 31"): (
        "Step 1: Sum of highest 3 dice is 18 iff at least three dice show 6.\n"
        "Step 2: Let X be number of sixes in n fair dice. X~Binomial(n,1/6).\n"
        "Step 3: Required probability is P(X>=3).\n"
        "Step 4: Use complement: 1 - [P(X=0)+P(X=1)+P(X=2)].\n"
        "Answer: P = 1 - sum_{k=0}^2 binom(n,k)(1/6)^k(5/6)^(n-k)."
    ),
    ("A Collection of Dice Problems", "Problem 45"): (
        "Step 1: Track attainable subset sums, not just the running total.\n"
        "Step 2: Represent each state by a bitmask over sums 1..x (bit i=1 means sum i is attainable).\n"
        "Step 3: For roll r in {1,...,6}, transition is next(s,r)=s OR (s<<r) OR bit(r), truncated to 1..x.\n"
        "Step 4: Let E(s) be expected rolls to absorption. For full mask, E=0; otherwise E(s)=1+(1/6)sum_{r=1}^6 E(next(s,r)).\n"
        "Answer: solve this finite linear system (absorbing Markov chain) to get the exact expectation for any fixed x."
    ),
    ("A Collection of Dice Problems", "Problem 46"): (
        "Step 1: Let E(s) be expected additional rolls from running sum s.\n"
        "Step 2: Boundary condition: if s is a perfect square, E(s)=0.\n"
        "Step 3: For non-square s, recursion is E(s)=1+(1/6)sum_{i=1}^6 E(s+i).\n"
        "Step 4: Solve numerically with truncation/tail control or dynamic programming.\n"
        "Answer: the expected number of rolls is approximately 2.37."
    ),
    ("A Collection of Dice Problems", "Problem 47"): (
        "Step 1: Use the same stopping-time recursion E(s)=1+(1/6)sum_{i=1}^6 E(s+i).\n"
        "Step 2: For 'until prime', set E(t)=0 on prime t and solve.\n"
        "Step 3: For 'until composite', set E(t)=0 on composite t (note 1 is neither prime nor composite) and solve.\n"
        "Step 4: Numerical DP gives small values in both cases.\n"
        "Answer: until prime is under 2 rolls on average; until composite is about 2.1 rolls."
    ),
    ("questions.rtf Set", "Item 2"): (
        "Step 1: For a uniform random point on the unit sphere, symmetry gives E[Z]=0.\n"
        "Step 2: Also X^2+Y^2+Z^2=1 and by symmetry E[X^2]=E[Y^2]=E[Z^2].\n"
        "Step 3: So 3E[Z^2]=1 -> E[Z^2]=1/3.\n"
        "Step 4: Var(Z)=E[Z^2]-E[Z]^2=1/3.\n"
        "Answer: variance is 1/3."
    ),
    ("questions.rtf Set", "Item 5"): (
        "Step 1: Let contribution of one die be Y = X*1_{X even}.\n"
        "Step 2: E[Y] = (2+4+6)/6 = 12/6 = 2.\n"
        "Step 3: By linearity, expected remaining-sum for 100 independent dice is 100*E[Y].\n"
        "Step 4: 100*2=200.\n"
        "Answer: expected sum is 200."
    ),
    ("questions.rtf Set", "Item 8"): (
        "Step 1: On the unit circle, chord length for central angle theta is L=2 sin(theta/2), theta in [0,pi].\n"
        "Step 2: For two independent uniform points, theta is uniform on [0,pi].\n"
        "Step 3: E[L]=(1/pi)*int_0^pi 2 sin(theta/2) dtheta.\n"
        "Step 4: Integral equals 4, so E[L]=4/pi.\n"
        "Answer: expected chord length is 4/pi."
    ),
    ("questions.rtf Set", "Item 9"): (
        "Step 1: Let N_t = min{n: U1+...+Un > t} with U_i~Unif(0,1).\n"
        "Step 2: For 0<=t<=1, E[N_t]=e^t (classic result from renewal equation).\n"
        "Step 3: Therefore E[N_1]=e and E[N_{ln 2}] = e^{ln 2}=2.\n"
        "Step 4: In general, E[N_t] = sum_{k>=0} P(S_k<=t), with S_k=U1+...+Uk (Irwin-Hall CDF form for each term).\n"
        "Answer: exceed 1 -> e, exceed ln(2) -> 2, general threshold t uses the exact renewal sum above."
    ),
    ("questions.rtf Set", "Item 10"): (
        "Step 1: Let R be number of runs. Write R = 1 + sum_{i=1}^{99} I_i where I_i=1 if colors at positions i and i+1 differ.\n"
        "Step 2: By symmetry of random permutation of 50 red and 50 blue, P(I_i=1)=P(adjacent colors differ).\n"
        "Step 3: Compute with sampling without replacement: P(diff)=2*(50/100)*(50/99)=50/99.\n"
        "Step 4: E[R]=1+99*(50/99)=51.\n"
        "Answer: expected number of runs is 51."
    ),
    ("questions.rtf Set", "Item 11"): (
        "Step 1: Randomly pairing 200 loose ends of 100 noodles forms disjoint cycles.\n"
        "Step 2: Standard pairing-process result: expected number of cycles after pairing 2n ends is sum_{k=1}^n 1/(2k-1).\n"
        "Step 3: Here n=100.\n"
        "Step 4: Numerical value is sum_{k=1}^{100} 1/(2k-1) ~ 3.2843.\n"
        "Answer: expected circles = sum_{k=1}^{100} 1/(2k-1) ~ 3.2843."
    ),
    ("questions.rtf Set", "Item 13"): (
        "Step 1: In a random permutation, an interior position i (2..13) is a local maximum if value at i is largest among (i-1,i,i+1).\n"
        "Step 2: Among 3 distinct values, each index is equally likely to be largest, so P(local max at interior i)=1/3.\n"
        "Step 3: There are 12 interior positions for n=14.\n"
        "Step 4: E[number of interior local maxima]=12*(1/3)=4.\n"
        "Answer: expected interior local maxima is 4. (If endpoints are counted too, add 1 in expectation.)"
    ),
    ("questions.rtf Set", "Item 14"): (
        "Step 1: Sample size k=6, sample maximum m=120.\n"
        "Step 2: MLE for N is m=120.\n"
        "Step 3: Common frequentist unbiased estimator for discrete-uniform serials is N_hat=((k+1)/k)*m - 1.\n"
        "Step 4: N_hat=(7/6)*120 - 1 = 139.\n"
        "Answer: best frequentist point estimate is about 139 (MLE is 120)."
    ),
    ("questions.rtf Set", "Item 20"): (
        "Step 1: Track longest suffix matching pattern 3-4-5 with states 0,1,2 and include roll-parity (even/odd).\n"
        "Step 2: Let e_i be P(final roll-count odd | state i, even parity now), and o_i similarly from odd parity.\n"
        "Step 3: One-step recurrences are:\n"
        "e0=(o1+5o0)/6, e1=(o2+5o0)/6, e2=(1+5o0)/6,\n"
        "o0=(e1+5e0)/6, o1=(e2+5e0)/6, o2=(5e0)/6.\n"
        "Step 4: Solving gives e0=216/431.\n"
        "Answer: P(n is odd) = 216/431 ~ 0.50116."
    ),
    ("questions.rtf Set", "Item 22"): (
        "Step 1: We need sequences of 4 rights (R) and 6 ups (U) with no run length 3.\n"
        "Step 2: Use DP on state (r,u,last_direction,current_run_length<=2).\n"
        "Step 3: Transition by adding R or U if it does not create a run of 3.\n"
        "Step 4: Evaluating DP from (0,0) to (4,6) gives 43 valid paths.\n"
        "Answer: number of allowed paths is 43."
    ),
    ("questions.rtf Set", "Item 24"): (
        "Step 1: Let I_i indicate whether adjacent positions i and i+1 have same hair color, i=1..11.\n"
        "Step 2: E[sum I_i]=sum E[I_i], and each adjacency has same probability by symmetry.\n"
        "Step 3: P(same) = P(RR)+P(BB) = (4/12)*(3/11) + (8/12)*(7/11) = 17/33.\n"
        "Step 4: Multiply by 11 adjacencies: E = 11*(17/33)=187/33.\n"
        "Answer: expected same-color adjacent pairs = 187/33 ~ 5.67."
    ),
    ("questions.rtf Set", "Item 25"): (
        "Step 1: In unit square, event |X-Y| in [3/5,4/5] is region between two diagonal bands.\n"
        "Step 2: For t in [0,1], P(|X-Y|>t)=(1-t)^2 (two corner triangles).\n"
        "Step 3: So P(3/5 <= |X-Y| <= 4/5) = P(|X-Y|>3/5)-P(|X-Y|>4/5).\n"
        "Step 4: = (2/5)^2 - (1/5)^2 = 3/25.\n"
        "Answer: probability is 3/25 = 0.12."
    ),
    ("questions.rtf Set", "Item 27"): (
        "Step 1: Let p=1/3 be your head probability, q=1/2 opponent's.\n"
        "Step 2: You win immediately with probability p.\n"
        "Step 3: If both fail first round (prob (1-p)(1-q)), process resets to original state.\n"
        "Step 4: W = p + (1-p)(1-q)W, so W = p/(1-(1-p)(1-q)) = (1/3)/(2/3)=1/2.\n"
        "Answer: probability you get heads first is 1/2."
    ),
    ("questions.rtf Set", "Item 28"): (
        "Step 1: Let a_n be number of ways to reach step n using jumps of 1 or 2.\n"
        "Step 2: Last jump is either 1-step (from n-1) or 2-step (from n-2), so a_n=a_{n-1}+a_{n-2}.\n"
        "Step 3: Base values: a_0=1, a_1=1.\n"
        "Step 4: Therefore a_n is Fibonacci: a_n=F_{n+1} (with F_1=1,F_2=1).\n"
        "Answer: number of ways is F_{n+1}."
    ),
    ("questions.rtf Set", "Item 29"): (
        "Step 1: Let R_n be number of regions after n random chords (with no triple intersections almost surely).\n"
        "Step 2: Adding chord i increases regions by 1 + (# intersections with previous chords).\n"
        "Step 3: A pair of independent random chords intersects with probability 1/3.\n"
        "Step 4: E[R_n]=1 + sum_{i=1}^n (1 + (i-1)/3) = 1 + n + n(n-1)/6.\n"
        "Answer: expected regions after n cuts is 1 + n + n(n-1)/6."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 1"): (
        "Step 1: Interpreting this as the standard 5-pirate/100-coin voting puzzle.\n"
        "Step 2: Solve by backward induction from fewer pirates.\n"
        "Step 3: In the 4-pirate continuation, pirates 3 and 5 receive 0.\n"
        "Step 4: Captain buys exactly those two votes with 1 coin each.\n"
        "Answer: final split (pirates 1..5) is 98,0,1,0,1 under standard puzzle rules."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 3"): (
        "Step 1: Trailing zeros in 100! come from factors 10=2*5.\n"
        "Step 2: Count factor 5s (factor 2s are abundant).\n"
        "Step 3: floor(100/5)=20, floor(100/25)=4, floor(100/125)=0.\n"
        "Step 4: Total 5s = 20+4=24.\n"
        "Answer: 100! has 24 trailing zeros."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 4"): (
        "Step 1: Interpret expression as infinite power tower x^(x^(x^...)) = 2.\n"
        "Step 2: Let the tower value be y. Then y=x^y and y=2.\n"
        "Step 3: So x^2=2.\n"
        "Step 4: With positive real x, x=sqrt(2).\n"
        "Answer: x = sqrt(2)."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 5"): (
        "Step 1: Box volume is 6*6*6=216; each 1x1x4 brick has volume 4.\n"
        "Step 2: 53 bricks use volume 212, leaving exactly 4 unit cubes empty.\n"
        "Step 3: This does not violate any parity/color invariant (a 1x1x4 brick always covers 2 black and 2 white in checkerboard coloring).\n"
        "Step 4: A constructive packing exists by tiling most of the box with axis-aligned 1x1x4 bars and leaving a 4-cube defect.\n"
        "Answer: yes, 53 such bricks can be packed into a 6x6x6 box."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 6"): (
        "Step 1: Interpret limits as lim_{x->infinity} e^x/x^2 and lim_{x->0+} x^2 ln x.\n"
        "Step 2: Exponential dominates any polynomial, so e^x/x^2 -> infinity.\n"
        "Step 3: For x^2 ln x at 0+, set x=e^{-t} (t->infinity): x^2 ln x = e^{-2t}*(-t)->0.\n"
        "Step 4: Sign near 0+ is negative, but magnitude goes to 0.\n"
        "Answer: first limit is infinity; second limit is 0."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 8"): (
        "Step 1: Plane is 2x+3y+4z-12=0.\n"
        "Step 2: Distance from origin to ax+by+cz+d=0 is |d|/sqrt(a^2+b^2+c^2) when origin is (0,0,0).\n"
        "Step 3: Here a,b,c,d = 2,3,4,-12.\n"
        "Step 4: Distance = | -12 |/sqrt(2^2+3^2+4^2)=12/sqrt(29).\n"
        "Answer: distance is 12/sqrt(29)."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 9"): (
        "Step 1: Solve characteristic equation r^2 + r + 1 = 0.\n"
        "Step 2: Roots are r = (-1 +/- i*sqrt(3))/2.\n"
        "Step 3: Convert complex roots to real-form solution.\n"
        "Step 4: y(x)=e^{-x/2}(C1 cos((sqrt(3)/2)x) + C2 sin((sqrt(3)/2)x)).\n"
        "Answer: general solution is y(x)=e^{-x/2}[C1 cos(sqrt(3)x/2)+C2 sin(sqrt(3)x/2)]."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 12"): (
        "Step 1: Monty Hall: your initial pick is correct with probability 1/3, wrong with probability 2/3.\n"
        "Step 2: Host always opens a goat door among unchosen doors.\n"
        "Step 3: If initial pick was wrong (prob 2/3), switching wins.\n"
        "Step 4: If initial pick was right (prob 1/3), switching loses.\n"
        "Answer: switching wins with probability 2/3."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 13"): (
        "Step 1: Deal 52 cards uniformly to 4 players of 13 each.\n"
        "Step 2: Favorable deals: distribute 4 aces one per player (4! ways), then distribute 48 non-aces as 12 each.\n"
        "Step 3: P = [4! * C(48,12)C(36,12)C(24,12)C(12,12)] / [C(52,13)C(39,13)C(26,13)C(13,13)].\n"
        "Step 4: Simplifies to 2197/20825.\n"
        "Answer: probability each player gets exactly one ace is 2197/20825 ~ 0.1055."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 14"): (
        "Step 1: When two ants collide and reverse direction instantly, that is equivalent to them passing through each other with identities swapped.\n"
        "Step 2: So collision dynamics can be replaced by independent straight walks at same speeds.\n"
        "Step 3: This equivalence preserves occupied positions at every time.\n"
        "Step 4: Therefore many ant-collision puzzles reduce to simple first-exit-time calculations.\n"
        "Answer: head-on reversal is mathematically equivalent to ants passing through each other."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 16"): (
        "Step 1: Bull call spread value is C(K1)-C(K2) with K1<K2 (same expiry).\n"
        "Step 2: Terminal payoff is min(max(S_T-K1,0), K2-K1), so payoff is always between 0 and K2-K1.\n"
        "Step 3: By no-arbitrage, today's price must satisfy 0 <= C(K1)-C(K2) <= e^{-rT}(K2-K1) (or discounted under appropriate carry model).\n"
        "Step 4: Lower bound from nonnegative payoff; upper bound from capped payoff.\n"
        "Answer: price boundaries are 0 and discounted strike-gap cap."
    ),
    ("A Practical Guide To Quantitative Finance Interviews", "Curated Extract 17"): (
        "Step 1: Arithmetic swap (beware overflow in fixed-width ints): i=i+j; j=i-j; i=i-j.\n"
        "Step 2: XOR swap alternative (for integer bit types): i=i^j; j=i^j; i=i^j.\n"
        "Step 3: Both avoid an explicit temporary variable.\n"
        "Step 4: In production code, temp-variable swap is usually clearer and safer.\n"
        "Answer: can swap with arithmetic or XOR sequence without extra storage."
    ),
    ("Added Hard Quant Set", "Added 6"): (
        "Step 1: In Polya urn with initial (1 red,1 blue), the predictive probability of red at draw t+1 is R_t/(t+2).\n"
        "Step 2: Sequence probability for any specific string with k reds and n-k blues equals\n"
        "[(1)(2)...(k)]*[(1)(2)...(n-k)] / [(2)(3)...(n+1)] = k!(n-k)!/(n+1)!.\n"
        "Step 3: Number of such strings is C(n,k).\n"
        "Step 4: P(K_n=k)=C(n,k)*k!(n-k)!/(n+1)! = 1/(n+1), for k=0,...,n.\n"
        "Answer: number of red draws after n draws is Uniform{0,1,...,n}."
    ),
    ("Added Hard Quant Set", "Added 7"): (
        "Step 1: Let T be time to see all 6 faces; condition on event E that face 6 is the last new face.\n"
        "Step 2: By label symmetry, each face is equally likely to be last, so P(last face=j | T=t)=1/6 for every t.\n"
        "Step 3: Hence identity of the last face is independent of T.\n"
        "Step 4: Therefore E[T|E]=E[T]=6H6.\n"
        "Answer: conditioned expectation is unchanged: 6H6 = 147/10 = 14.7."
    ),
    ("Added Hard Quant Set", "Combinatorics & Geometry Added 1"): (
        "Step 1: Any 4 distinct points on a circle are vertices of exactly one convex quadrilateral.\n"
        "Step 2: So number of convex quadrilaterals is deterministic once n points are chosen: C(n,4).\n"
        "Step 3: Randomness in point locations does not change this count (assuming distinct points, which holds a.s.).\n"
        "Step 4: Therefore expectation equals that deterministic value.\n"
        "Answer: E[# convex quadrilaterals] = C(n,4)."
    ),
    ("Added Hard Quant Set", "Combinatorics & Geometry Added 3"): (
        "Step 1: Encode each monotone path as a word of length 2n with n R's and n U's.\n"
        "Step 2: Constraint: no run of three identical letters.\n"
        "Step 3: Use DP state (r,u,last,run) with run in {1,2}; transitions add R or U if run<2 or letter changes.\n"
        "Step 4: The exact count is dp[n][n][*][*] from this recurrence (evaluated in O(n^2) states with O(1) transitions each).\n"
        "Answer: solved exactly by this DP recurrence; it is the standard closed computational form for general n."
    ),
    ("Added Hard Quant Set", "Combinatorics & Geometry Added 4"): (
        "Step 1: Let X be total number of intersections among m chords in a uniform random perfect matching of 2m boundary points.\n"
        "Step 2: Write X=sum_{a<b} I_{ab} over chord pairs. For any fixed pair, P(intersection)=1/3.\n"
        "Step 3: There are C(m,2) pairs, so E[X]=C(m,2)/3 = m(m-1)/6.\n"
        "Step 4: Using indicator covariance classification for overlapping/disjoint pair-of-pairs gives Var(X)=m(m-1)(m+3)/45.\n"
        "Answer: E[X]=m(m-1)/6 and Var(X)=m(m-1)(m+3)/45."
    ),
    ("Added Hard Quant Set", "Combinatorics & Geometry Added 5"): (
        "Step 1: With circles in general position, each new great circle intersects each previous one in 2 points.\n"
        "Step 2: So the nth circle is cut into 2(n-1) arcs.\n"
        "Step 3: Each arc splits one existing cell, so region count recursion is R_n = R_{n-1} + 2(n-1), with R_1=2.\n"
        "Step 4: Summing gives R_n = 2 + sum_{k=1}^{n-1} 2k = n^2 - n + 2.\n"
        "Answer: expected (and deterministic) number of cells is n^2 - n + 2."
    ),
    ("Added Hard Quant Set", "Combinatorics & Geometry Added 6"): (
        "Step 1: A good estimate is around 0.5 because inscribed random triangles are often moderately sized relative to unit disk scale.\n"
        "Step 2: Exact computation for three i.i.d. uniform angles on unit circle gives E[Area] = 3/(2*pi).\n"
        "Step 3: Numerically, 3/(2*pi) ~ 0.4775.\n"
        "Step 4: This matches simulation and lies near the rough estimate.\n"
        "Answer: expected area is 3/(2*pi) (~0.4775)."
    ),
    ("Added Hard Quant Set", "Estimation & Market Making Added 21"): (
        "Step 1: Mug volume ~350 mL = 350 cm^3.\n"
        "Step 2: A paper clip (with void space in random packing) uses about 1.0-1.5 cm^3 effective packed volume.\n"
        "Step 3: Count ~ 350/(1.0 to 1.5) = 230 to 350.\n"
        "Step 4: Midpoint estimate around 280 with range for packing uncertainty.\n"
        "Answer: roughly 250-350 paper clips (central estimate ~280)."
    ),
    ("Added Hard Quant Set", "Non-Standard Dice Added 1"): (
        "Step 1: Let p_i=P(X=i), i=1..6, and let c_s=P(X1+X2=s), s=2..12. Then c_s = sum_i p_i p_{s-i}.\n"
        "Step 2: Form polynomial P(z)=sum_{i=1}^6 p_i z^i. Observed sum law gives Q(z)=sum_{s=2}^{12} c_s z^s = P(z)^2.\n"
        "Step 3: Recover P by polynomial square root with constraints p_i>=0 and sum p_i=1. Recursive coefficient recovery (when p1>0):\n"
        "p1=sqrt(c2), p2=c3/(2p1), p3=(c4-p2^2)/(2p1), ... .\n"
        "Step 4: Uniqueness holds generically under nonnegativity/normalization; non-uniqueness can occur only in degenerate boundary cases with zero leading support that remove recursive identifiability.\n"
        "Answer: identify p via constrained square-root/deconvolution of Q(z)=P(z)^2; unique except degenerate zero-support cases."
    ),
    ("Added Hard Quant Set", "Non-Standard Dice Added 2"): (
        "Step 1: Impose symmetry with a natural parameterization p=q=(a,b,c,c,b,a), a,b,c>=0, a+b+c=1/2.\n"
        "Step 2: Mean is automatically 3.5. Variance condition Var(X)+Var(Y)=35/6 with X=Y gives Var(X)=35/12, equivalent to 3a+b=2/3 and c=2a-1/6.\n"
        "Step 3: This yields a one-parameter family p(a)=[a, 2/3-3a, 2a-1/6, 2a-1/6, 2/3-3a, a].\n"
        "Step 4: Requiring nonnegativity and unimodality of the induced sum distribution restricts to a in [1/7, 4/21]. Any a in this interval except 1/6 gives non-uniform dice.\n"
        "Answer: under the symmetric-pair model, all solutions are the family above with a in [1/7,4/21]; fair dice is the special case a=1/6."
    ),
}


def manual_solution_override(item: Dict[str, str]) -> str:
    key = (item.get("source", ""), item.get("source_ref", ""))
    return MANUAL_SOLUTION_OVERRIDES.get(key, "")


def attach_solution_fields(rows: List[Dict[str, str]]) -> List[Dict[str, str]]:
    out: List[Dict[str, str]] = []
    for row in rows:
        item = dict(row)
        manual = manual_solution_override(item)
        sol = light_cleanup(manual) if manual else light_cleanup(item.get("solution_latex", ""))
        if not sol:
            sol = worked_solution_by_pattern(item.get("theme", "Probability"), item.get("question_latex", ""))
        else:
            # Normalize source-provided solutions and ensure they read as worked steps.
            if not re.search(r"\bStep\s*1\b", sol, re.IGNORECASE):
                sol = (
                    "Step 1: Translate the prompt into variables and constraints.\n"
                    "Step 2: Apply the source method shown below.\n"
                    f"Step 3: Compute and simplify.\n"
                    f"Worked result: {sol}"
                )
        item["solution_latex"] = sol
        out.append(item)
    return out


def with_ids(rows: List[Dict[str, str]]) -> List[Dict[str, str]]:
    out = []
    for idx, row in enumerate(rows, start=1):
        item = dict(row)
        item["id"] = f"Q{idx:04d}"
        out.append(item)
    return out


def write_data_file(rows: List[Dict[str, str]], out_path: Path) -> None:
    data = with_ids(rows)
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    out_text = "const QUESTION_BANK = " + payload + ";\n"
    out_text += "const QUESTION_BANK_META = { total: QUESTION_BANK.length };\n"
    out_text += "window.QUESTION_BANK = QUESTION_BANK;\n"
    out_text += "window.QUESTION_BANK_META = QUESTION_BANK_META;\n"
    out_path.write_text(out_text)


def main() -> None:
    rows: List[Dict[str, str]] = []
    rows.extend(parse_final_round(SOURCE_FILES["final_round"]))
    rows.extend(parse_quant_50(SOURCE_FILES["quant_50"]))
    rows.extend(parse_optiver_prob(SOURCE_FILES["optiver_prob"]))
    rows.extend(parse_dice_collection(SOURCE_FILES["dice_collection"]))
    rows.extend(parse_games(SOURCE_FILES["games"]))
    rows.extend(parse_rtf_questions(SOURCE_FILES["rtf_set"]))
    rows.extend(parse_green_book(SOURCE_FILES["green_book"]))
    rows.extend(added_hard_questions())
    rows.extend(added_theme_expansion_questions())
    rows = normalize_theme_taxonomy(rows)
    rows = attach_solution_fields(rows)

    output = ROOT / "questions-data.js"
    write_data_file(rows, output)

    # Print quick summary for verification.
    by_source: Dict[str, int] = {}
    by_theme: Dict[str, int] = {}
    for row in rows:
        by_source[row["source"]] = by_source.get(row["source"], 0) + 1
        by_theme[row["theme"]] = by_theme.get(row["theme"], 0) + 1

    print(f"Wrote {len(rows)} questions to {output.name}")
    for source, count in sorted(by_source.items(), key=lambda x: (-x[1], x[0])):
        print(f"  {source}: {count}")
    print("Theme counts:")
    for theme, count in sorted(by_theme.items(), key=lambda x: x[0]):
        print(f"  {theme}: {count}")


if __name__ == "__main__":
    main()
