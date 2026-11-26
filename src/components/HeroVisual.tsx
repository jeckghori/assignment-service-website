export function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.22),transparent_58%)]"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-[1.8rem] bg-navy-900 shadow-[0_30px_70px_-36px_rgba(20,33,61,0.9)] ring-1 ring-white/10">
        <svg
          viewBox="0 0 720 540"
          className="h-auto w-full"
          role="img"
          aria-label="Student at a laptop with notes, a document, and an assignment checklist"
        >
          <defs>
            <pattern id="desk-dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.08)" />
            </pattern>
          </defs>
          <rect width="720" height="540" fill="url(#desk-dots)" />
          <ellipse cx="360" cy="300" rx="250" ry="180" fill="#1b2d52" />

          <g transform="translate(48,168) rotate(-7)">
            <rect width="118" height="148" rx="12" fill="#dbe4f5" />
            <rect x="10" y="12" width="118" height="148" rx="12" fill="#fff" />
            <rect x="28" y="34" width="72" height="8" rx="4" fill="#14213d" />
            <rect x="28" y="54" width="82" height="5" rx="2.5" fill="#e4ddd2" />
            <rect x="28" y="68" width="74" height="5" rx="2.5" fill="#e4ddd2" />
            <rect x="28" y="82" width="78" height="5" rx="2.5" fill="#e4ddd2" />
            <rect x="28" y="104" width="54" height="16" rx="8" fill="#dbe7ff" />
            <text x="36" y="116" fill="#1d4ed8" fontSize="10" fontFamily="Figtree, sans-serif" fontWeight="700">
              Brief
            </text>
          </g>

          <g>
            <path d="M214 292c10-58 42-86 86-86s76 28 86 86v118H214V292z" fill="#2563eb" />
            <rect x="286" y="248" width="32" height="28" rx="10" fill="#efc3a4" />
            <circle cx="302" cy="214" r="40" fill="#f3c7aa" />
            <path d="M264 208c6-48 78-54 90-6-22-30-70-34-90 6z" fill="#1a2233" />
            <path d="M286 214c8 10 24 10 32 0" fill="none" stroke="#e2b08e" strokeWidth="3" strokeLinecap="round" />
          </g>

          <rect x="248" y="318" width="250" height="16" rx="6" fill="#0e1830" />
          <rect x="262" y="248" width="222" height="150" rx="14" fill="#10192e" stroke="#d5deee" strokeWidth="3" />
          <rect x="274" y="260" width="198" height="124" rx="8" fill="#f7f4ee" />
          <text x="290" y="286" fill="#14213d" fontSize="13" fontFamily="Figtree, sans-serif" fontWeight="700">
            Assignment outline
          </text>
          <text x="290" y="310" fill="#5c6575" fontSize="12" fontFamily="Figtree, sans-serif">
            1  Read the requirements
          </text>
          <text x="290" y="330" fill="#5c6575" fontSize="12" fontFamily="Figtree, sans-serif">
            2  Build the structure
          </text>
          <text x="290" y="350" fill="#2563eb" fontSize="12" fontFamily="Figtree, sans-serif" fontWeight="700">
            3  Explain the work
          </text>
          <path d="M236 384h292l20 22H216z" fill="#c9d4e6" />

          <rect x="78" y="430" width="560" height="22" rx="8" fill="#e4d2ae" />
          <rect x="118" y="452" width="16" height="46" rx="4" fill="#c9b48a" />
          <rect x="582" y="452" width="16" height="46" rx="4" fill="#c9b48a" />

          <g transform="translate(500,46)">
            <rect width="176" height="168" rx="20" fill="#fff" />
            <text x="18" y="34" fill="#14213d" fontSize="14" fontFamily="Figtree, sans-serif" fontWeight="700">
              Checklist
            </text>
            <g fill="none" stroke="#14213d" strokeWidth="1.7" strokeLinecap="round">
              <circle cx="28" cy="62" r="9" fill="#25d366" stroke="none" />
              <path d="M23.5 62.2 26.4 65.2 32.6 58.6" stroke="#102016" />
              <text x="46" y="66" fill="#172033" stroke="none" fontSize="12" fontFamily="Figtree, sans-serif">
                Subject noted
              </text>
              <circle cx="28" cy="96" r="9" fill="#25d366" stroke="none" />
              <path d="M23.5 96.2 26.4 99.2 32.6 92.6" stroke="#102016" />
              <text x="46" y="100" fill="#172033" stroke="none" fontSize="12" fontFamily="Figtree, sans-serif">
                Deadline added
              </text>
              <circle cx="28" cy="130" r="9" fill="#fff" />
              <text x="46" y="134" fill="#172033" stroke="none" fontSize="12" fontFamily="Figtree, sans-serif">
                Files to share
              </text>
            </g>
          </g>

          <g transform="translate(548,300)">
            <rect x="26" y="78" width="28" height="32" rx="7" fill="#d7b48a" />
            <ellipse cx="40" cy="70" rx="24" ry="16" fill="#1f8a4c" />
            <ellipse cx="22" cy="56" rx="16" ry="13" fill="#2eaf68" />
            <ellipse cx="56" cy="54" rx="16" ry="13" fill="#147a45" />
            <rect x="38" y="62" width="4" height="22" fill="#1c6b3c" />
          </g>

          <g transform="translate(70,292) rotate(-8)">
            <rect width="86" height="18" rx="4" fill="#1d4ed8" />
            <rect y="16" width="86" height="18" rx="4" fill="#f4efe6" />
            <rect y="32" width="86" height="18" rx="4" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </div>
  )
}
