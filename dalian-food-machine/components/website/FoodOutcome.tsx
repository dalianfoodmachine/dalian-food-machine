// Decorative application sketches. The adjacent text describes what the equipment does.
export default function FoodOutcome({ slug }: { slug: string }) {
  return (
    <div className="food-outcome" aria-hidden="true">
      <svg
        viewBox="0 0 320 260"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse
          className="food-sketch-wash"
          cx="163"
          cy="139"
          rx="115"
          ry="93"
          stroke="none"
        />
        {slug === "dumpling" && (
          <g>
            <path
              d="M52 164Q65 110 107 100Q146 88 182 119Q192 131 199 151Q146 191 94 185Q66 182 52 164Z"
              fill="var(--sketch-paper)"
            />
            <path d="M52 164Q75 148 78 132Q81 116 96 119Q103 94 116 109Q128 88 140 108Q159 93 164 118Q182 109 184 133L199 151" />
            <path d="m78 133 16 27m3-41 15 40m5-49 13 46m11-47 9 43m15-32 3 23" />
            <path d="M129 82Q167 58 207 79Q249 100 271 147Q224 176 192 169" />
            <path d="M137 79q14-9 21 6q9-22 23-5q12-20 25 1q22-10 24 15q19-2 20 24l21 27" />
            <path d="m161 86 9 22m13-26 8 29m16-29 6 36m17-20 1 29" />
            <path
              className="food-sketch-accent"
              d="M92 72q-7-12 2-23m29 17q-7-12 2-23"
            />
            <path className="food-sketch-ground" d="M45 207q110 22 230-3" />
          </g>
        )}
        {slug === "wonton" && (
          <g>
            <path
              d="m54 124 52-59 57 62-15 64-36-21-41 15Z"
              fill="var(--sketch-paper)"
            />
            <path d="M54 124q41-24 59 46q-6-59 50-43M83 106q25 8 48-5M76 178l19-24" />
            <path
              d="m160 133 54-64 59 62-12 61-38-20-42 14Z"
              fill="var(--sketch-paper)"
            />
            <path d="M160 133q47-28 63 39q-3-56 50-41m-80-17q21-16 42-6" />
            <path
              className="food-sketch-accent"
              d="M161 73q-7-12 2-23m19 17q-7-12 2-23"
            />
            <path className="food-sketch-ground" d="M46 208q117 23 232-1" />
          </g>
        )}
        {slug === "potsticker" && (
          <g>
            <ellipse
              className="food-sketch-ground"
              cx="160"
              cy="165"
              rx="135"
              ry="57"
            />
            {[
              [-16, -11],
              [20, 29],
              [56, 68],
            ].map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y}) rotate(-16 110 105)`}>
                <path
                  d="M62 93Q77 76 103 77l62 2q20 2 22 25l-9 17q-61 7-118-2q-12-12 2-26Z"
                  fill="var(--sketch-paper)"
                />
                <path d="M63 96q60-16 113-6l5 20q-61-6-119 4m20-21 6 14m14-16 6 14m15-16 6 16m15-14 6 13m14-11 5 10" />
              </g>
            ))}
          </g>
        )}
        {slug === "filling" && (
          <g>
            <path
              d="M29 122q4 66 69 66q59-2 65-66"
              fill="var(--sketch-paper)"
            />
            <ellipse cx="96" cy="121" rx="67" ry="25" />
            <path
              d="M45 123q-3-22 20-23q8-22 30-5q22-14 35 9q20 1 19 18q-49 21-104 1Z"
              fill="var(--sketch-paper)"
            />
            <path
              className="food-sketch-accent"
              d="m64 111 7 4m17-9 6 5m16-5 8-3m5 20 7-5m-39 7 6-4M176 136h24m-7-6 7 6-7 6"
            />
            {[
              [-9, -27],
              [21, 24],
              [-40, 53],
            ].map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y})`}>
                <ellipse
                  cx="249"
                  cy="119"
                  rx="34"
                  ry="19"
                  fill="var(--sketch-paper)"
                />
                <path
                  d="M231 121q-4-16 8-15q8-13 16 0q14-3 13 14q-18 11-37 1Z"
                  fill="var(--sketch-paper)"
                />
                <path className="food-sketch-accent" d="m242 113 5 3m8-5 4 4" />
              </g>
            ))}
          </g>
        )}
        {slug === "egg" && (
          <g>
            <path
              d="M62 92q24-48 50-3q41 64 1 94q-43 28-66-17q-12-26 15-74Z"
              fill="var(--sketch-paper)"
            />
            <path
              d="M157 67q22-34 44 6q31 51 2 80q-35 23-57-8q-18-26 11-78Z"
              fill="var(--sketch-paper)"
            />
            <ellipse
              cx="204"
              cy="163"
              rx="64"
              ry="44"
              transform="rotate(-24 204 163)"
              fill="var(--sketch-paper)"
            />
            <ellipse
              className="food-sketch-accent"
              cx="205"
              cy="164"
              rx="30"
              ry="27"
            />
            <path d="m61 114 11-8m88-19 7-9" />
            <path className="food-sketch-ground" d="M44 219q123 20 235-9" />
          </g>
        )}
        {slug === "cutter" && (
          <g>
            <path
              d="M54 154q-35-44 2-73q13-30 43-12q37 1 42 42q2 42-47 65Z"
              fill="var(--sketch-paper)"
            />
            <path d="M63 166q16-59 51-81m-38 41-21-20m26 8 26 10m-38 19 25 4" />
            <path
              d="m112 164 83-76q15-11 24 4l-3 13-94 70Z"
              fill="var(--sketch-paper)"
            />
            <path d="m131 151 7 4m9-20 8 5m9-19 8 5" />
            <path className="food-sketch-accent" d="M144 190h29m-8-7 8 7-8 7" />
            {[
              [213, 148],
              [245, 155],
              [197, 181],
              [229, 191],
              [260, 184],
            ].map(([x, y], i) => (
              <path
                key={i}
                d={`M${x} ${y}l19-4 6 17-20 6Z`}
                fill="var(--sketch-paper)"
              />
            ))}
            <path className="food-sketch-ground" d="M39 220q136 18 245-1" />
          </g>
        )}
      </svg>
    </div>
  );
}
