import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ScaledSlide, useIsMobile } from './ScaledSlide';
import { PlayIcon } from './ProjectSVGs';
import { CrossLinks } from './CrossLinks';

const researchOrigins = [
  { label: 'Selection Logic', path: '/lab/selection-logic' },
  { label: 'Dense Field', path: '/lab/dense-field' },
  { label: 'Modular Fill', path: '/lab/modular-fill' },
];

function ShaperLogicContent() {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);
  const maxScroll = -2940;

  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScrollY(prev => Math.max(maxScroll, Math.min(0, prev - e.deltaY)));
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  const showImage2 = Math.abs(scrollY) >= 980;
  const showImage3 = Math.abs(scrollY) >= 1960;

  if (isMobile) {
    return (
      <div className="px-5 pt-6 pb-10">
        <h1 className="font-['JetBrains_Mono'] text-[#141414] font-bold text-[36px] leading-[1.05] tracking-[-0.02em] mb-3">
          SHAPER
        </h1>

        <nav className="flex gap-6 mb-8 border-b border-[#141414]/10 pb-3">
          <Link to="/projects/shaper/configure" className="font-['JetBrains_Mono'] text-[14px] font-bold no-underline text-[#141414] opacity-35 hover:opacity-60 transition-opacity">
            configure
          </Link>
          <Link to="/projects/shaper/logic" className="font-['JetBrains_Mono'] text-[14px] font-bold no-underline text-[#141414] flex items-center gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-[#FF4D00] shrink-0" />
            logic
          </Link>
        </nav>

        <div className="flex flex-col gap-6 mb-8">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map(i => (
              <div key={i} className="aspect-square bg-[#e8e8ed] flex items-center justify-center rounded-lg">
                <div className="w-[60%] h-[60%] bg-[#141414] opacity-10" />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <div className="bg-black/90 text-white px-4 py-2 rounded text-[12px] font-bold font-['JetBrains_Mono']">SITE</div>
            <div className="bg-black/90 text-white px-4 py-2 rounded text-[12px] font-bold font-['JetBrains_Mono']">GOAL DESIGN</div>
          </div>
          <div className="w-full aspect-[4/5] bg-[#e8e8ed] flex items-center justify-center rounded-lg">
            <div className="w-[60%] h-[60%] bg-[#141414] opacity-10" />
          </div>
          <div className="w-full aspect-[16/11] bg-[#e8e8ed] flex items-center justify-center rounded-lg">
            <div className="w-[60%] h-[60%] bg-[#141414] opacity-10" />
          </div>
        </div>

        <CrossLinks label="Research Origins" links={researchOrigins} />
      </div>
    );
  }

  // Desktop — Studio layout (horizontal tabs, wider content)
  const menuItems = [
    { label: 'configure', path: '/projects/shaper/configure', active: false },
    { label: 'logic', path: '/projects/shaper/logic', active: true },
  ];

  return (
    <>
      {/* Title — top left, large */}
      <h1
        className="absolute font-['JetBrains_Mono'] text-[#141414] font-bold leading-[1]"
        style={{ left: 58, top: 95, fontSize: 72, letterSpacing: '-0.03em' }}
      >
        SHAPER
      </h1>

      {/* Horizontal tab menu — below title */}
      <div className="absolute flex items-center gap-10" style={{ left: 58, top: 190 }}>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`font-['JetBrains_Mono'] text-[18px] font-bold no-underline transition-all duration-300 hover:opacity-60 flex items-center gap-2.5 ${
              item.active ? 'text-[#141414]' : 'text-[#141414] opacity-25'
            }`}
          >
            {item.active && <span className="w-[6px] h-[6px] rounded-full bg-[#FF4D00] shrink-0" />}
            {item.label}
          </Link>
        ))}
      </div>

      {/* Thin divider */}
      <div className="absolute bg-[#141414] opacity-8" style={{ left: 58, top: 230, width: 300, height: 1 }} />

      {/* Research Origins — bottom-left */}
      <div className="absolute" style={{ left: 58, bottom: 55 }}>
        <CrossLinks label="Research Origins" links={researchOrigins} />
      </div>

      {/* Scrollable content area — right of title, below tabs */}
      <div className="absolute overflow-hidden" style={{ width: 1560, height: 780, top: 260, left: 320 }}>
        <div
          className="relative transition-transform duration-300"
          style={{ width: 1560, height: 3920, transform: `translateY(${scrollY}px)` }}
        >
          {/* Thumbnails row */}
          <div className="absolute flex gap-6" style={{ top: 40, left: 80 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-[#e8e8ed] flex items-center justify-center"
                style={{ width: 300, height: 300 }}
              >
                <div className="w-[60%] h-[60%] bg-[#141414] opacity-10" />
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="absolute bg-black/90 rounded flex items-center justify-center" style={{ width: 100, height: 44, left: 380, top: 390 }}>
            <span className="text-white text-[13px] font-bold font-['JetBrains_Mono']">SITE</span>
          </div>
          <div className="absolute bg-black/90 rounded flex items-center justify-center" style={{ width: 140, height: 44, left: 700, top: 390 }}>
            <span className="text-white text-[13px] font-bold font-['JetBrains_Mono']">GOAL DESIGN</span>
          </div>

          {/* Image 2 */}
          <div
            className={`absolute bg-[#e8e8ed] transition-opacity duration-500 ${showImage2 ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: 460, height: 530, top: 1100, left: 200 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[60%] h-[60%] bg-[#141414] opacity-10" />
            </div>
          </div>

          {/* Image 3 */}
          <div
            className={`absolute bg-[#e8e8ed] transition-opacity duration-500 ${showImage3 ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: 1200, height: 850, top: 1900, left: 100 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[60%] h-[60%] bg-[#141414] opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ShaperLogicPage() {
  return (
    <ScaledSlide>
      <ShaperLogicContent />
    </ScaledSlide>
  );
}
