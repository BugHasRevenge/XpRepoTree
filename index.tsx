export default function IPhone() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2d1b3d] to-[#1a0f2e]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] animate-pulse">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 437 437">
            <g filter="url(#filter0_f_4_30)">
              <circle cx="218.2" cy="218.2" fill="#9A41CD" fillOpacity="0.5" r="129" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="436.4" id="filter0_f_4_30" width="436.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_4_30" stdDeviation="44.6" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-[200px] h-[200px] bg-[#9a41cd] opacity-25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-0 bottom-0 w-[250px] h-[250px] bg-[#b84ef0] opacity-20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md gap-8">
        {/* Title */}
        <div className="flex-shrink-0 mt-8 flex flex-col items-center gap-3">
          <h1 
            className="font-['Instrument_Sans:Bold',sans-serif] font-bold text-[90px] text-center text-transparent bg-clip-text bg-gradient-to-br from-[#c877ff] via-[#9a41cd] to-[#dd0dff] leading-[1.1] mb-8 animate-fade-in drop-shadow-[0_0_40px_rgba(154,65,205,0.7)] hover:drop-shadow-[0_0_60px_rgba(154,65,205,0.9)] transition-all duration-300" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            XP App Repo
          </h1>
        </div>

        {/* Buttons container */}
        <div className="flex flex-col gap-4 w-full px-4 flex-shrink-0">
          {/* SideStore Button */}
          <a 
            className="relative group block cursor-pointer rounded-[20px] shadow-[7px_7px_20px_0px_rgba(221,13,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[7px_7px_30px_0px_rgba(221,13,255,0.6)] active:scale-95"
            href="sidestore://source?url=https://raw.githubusercontent.com/BugHasRevenge/XprimeAppRepo/main/app-repo.json"
          >
            <div className="bg-gradient-to-r from-[#3140ff] via-[#dd0dff] via-50% to-[#08defd] rounded-[20px] p-[3px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3140ff] via-[#dd0dff] via-50% to-[#08defd] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-gradient-to-r from-[#3140ff] via-[#dd0dff] via-50% to-[#08defd] rounded-[18px] px-6 py-4">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-center text-white leading-[normal]">
                  Add to SideStore
                </p>
              </div>
            </div>
          </a>

          {/* AltStore Button */}
          <a 
            className="relative group block cursor-pointer rounded-[20px] shadow-[7px_7px_20px_0px_rgba(18,148,153,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[7px_7px_30px_0px_rgba(18,148,153,0.6)] active:scale-95"
            href="altstore://source?url=https://raw.githubusercontent.com/BugHasRevenge/XprimeAppRepo/main/app-repo.json"
          >
            <div className="bg-gradient-to-r from-[#129499] to-[#046679] rounded-[20px] p-[3px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#129499] to-[#046679] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-gradient-to-r from-[#129499] to-[#046679] rounded-[18px] px-6 py-4">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-center text-white leading-[normal]">
                  Add to AltStore
                </p>
              </div>
            </div>
          </a>

          {/* Feather Button */}
          <a 
            className="relative group block cursor-pointer rounded-[20px] shadow-[7px_7px_20px_0px_rgba(134,145,250,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[7px_7px_30px_0px_rgba(134,145,250,0.6)] active:scale-95"
            href="feather://source?url=https://raw.githubusercontent.com/BugHasRevenge/XprimeAppRepo/main/app-repo.json"
          >
            <div className="bg-gradient-to-r from-[#8691fa] to-[#5a66d8] rounded-[20px] p-[3px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8691fa] to-[#5a66d8] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-gradient-to-r from-[#8691fa] to-[#5a66d8] rounded-[18px] px-6 py-4">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-center text-white leading-[normal]">
                  Add to Feather
                </p>
              </div>
            </div>
          </a>

          {/* LiveContainer Button */}
          <a 
            className="relative group block cursor-pointer rounded-[20px] shadow-[7px_7px_20px_0px_rgba(0,131,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[7px_7px_30px_0px_rgba(0,131,255,0.6)] active:scale-95"
            href="livecontainer://source?url=https://raw.githubusercontent.com/BugHasRevenge/XprimeAppRepo/main/app-repo.json"
          >
            <div className="bg-gradient-to-r from-[#0083ff] to-[#0050ff] rounded-[20px] p-[3px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0083ff] to-[#0050ff] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-gradient-to-r from-[#0083ff] to-[#0050ff] rounded-[18px] px-6 py-4">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-center text-white leading-[normal]">
                  Add to LiveContainer
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Note */}
        <p 
          className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-center text-white/80 max-w-[230px] mt-4 leading-[1.3] flex-shrink-0" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Note: You must have your chosen sideloader already installed for the redirector to work.
        </p>
        
        {/* Credits */}
        <div className="flex flex-col items-center gap-1 mt-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-['Inter:Regular',sans-serif] text-[12px] text-white/60">
              Created by
            </span>
            <a 
              href="https://github.com/BugHasRevenge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#c877ff] to-[#9a41cd] hover:from-[#dd0dff] hover:to-[#b84ef0] transition-all duration-300"
            >
              BugHasRevenge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
