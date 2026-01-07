import svgPaths from "./svg-iy0pjirxu3";
import clsx from "clsx";
import imgApp from "figma:asset/c4ac8df5dc9eb39c9cf970338d5b4368e72c693c.png";
import imgApp1 from "figma:asset/5dd0d1305418c61b2bef7726e8d50a1ec7080e0a.png";
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      {children}
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <p style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(252, 206, 232) 100%)" }} className="absolute bg-clip-text font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-nowrap text-white top-[-3.29px]">
      {children}
    </p>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0.1)] relative rounded-[24px] shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(152, 16, 250) 100%)" }} className="relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[26px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#e5e7eb] text-[16px] text-nowrap top-[-1.71px]">{children}</p>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return <BackgroundImage3 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage3>;
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[59.143px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16.571px] pr-[0.571px] py-[0.571px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0 size-[20px]">
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}
type IconBackgroundImage2Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage2Props>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0 w-full", additionalClassNames)}>
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2 additionalClassNames="h-[26px]">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#e5e7eb] text-[16px] text-nowrap top-[-1.71px]">{children}</p>
    </BackgroundImage2>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ additionalClassNames = "" }: IconBackgroundImageProps) {
  return (
    <BackgroundImage1 additionalClassNames={clsx("absolute size-[20px] top-[2px]", additionalClassNames)}>
      <g clipPath="url(#clip0_20_413)" id="Icon">
        <path d={svgPaths.p34ea8c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66667" />
        <path d="M16.6667 1.66667V5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66667" />
        <path d="M18.3333 3.33333H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66667" />
        <path d={svgPaths.p2661f400} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_20_413">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </BackgroundImage1>
  );
}
type Icon10VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon10VectorBackgroundImage({ additionalClassNames = "" }: Icon10VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Icon5BackgroundImage() {
  return (
    <div className="absolute inset-[-100%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <path d={svgPaths.p2d636f80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return <BackgroundImage4>{text}</BackgroundImage4>;
}
type AppBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function AppBackgroundImageAndText1({ text, additionalClassNames = "" }: AppBackgroundImageAndText1Props) {
  return <BackgroundImage additionalClassNames={additionalClassNames}>{text}</BackgroundImage>;
}
type AppBackgroundImageAndTextProps = {
  text: string;
};

function AppBackgroundImageAndText({ text }: AppBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#e5e7eb] text-[14px] text-nowrap top-[-1.43px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText({ text, additionalClassNames = "" }: HeadingBackgroundImageAndTextProps) {
  return (
    <BackgroundImage3 additionalClassNames={clsx("h-[36px] relative shrink-0", additionalClassNames)}>
      <BackgroundImage5>{text}</BackgroundImage5>
    </BackgroundImage3>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <BackgroundImage2 additionalClassNames="h-[24px] w-[50.402px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.7)] top-[-1.86px] w-[51px]">{text}</p>
    </BackgroundImage2>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage3 additionalClassNames={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-[-1.86px]">{text}</p>
    </BackgroundImage3>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white">{text}</p>
    </div>
  );
}

export default function EnhanceFrameVisualAppeal() {
  return (
    <div className="bg-white relative size-full" data-name="Enhance Frame Visual Appeal">
      <div className="absolute h-[811.429px] left-0 overflow-clip top-0 w-[1241.143px]" data-name="AnimatedBackground">
        <div className="absolute h-[811.429px] left-0 top-0 w-[1241.143px]" data-name="Container" style={{ backgroundImage: "linear-gradient(146.824deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 50%, rgb(240, 147, 251) 100%)" }} />
        <div className="absolute blur-3xl filter left-[88.12px] opacity-30 rounded-[1.9174e+07px] size-[437.731px] top-[83.1px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 437.73 437.73\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -30.952 -30.952 0 218.87 218.87)\\\'><stop stop-color=\\\'rgba(240,147,251,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(180,110,188,0.75)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(120,74,126,0.5)\\\' offset=\\\'0.35\\\'/><stop stop-color=\\\'rgba(60,37,63,0.25)\\\' offset=\\\'0.525\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute blur-3xl filter left-[655.51px] opacity-30 rounded-[1.9174e+07px] size-[506.761px] top-[223.54px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 506.76 506.76\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -35.833 -35.833 0 253.38 253.38)\\\'><stop stop-color=\\\'rgba(102,126,234,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(77,95,176,0.75)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(51,63,117,0.5)\\\' offset=\\\'0.35\\\'/><stop stop-color=\\\'rgba(26,32,59,0.25)\\\' offset=\\\'0.525\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute bg-white left-[88.04px] opacity-[0.101] rounded-[1.9174e+07px] size-[0.809px] top-[534.65px]" data-name="Container" />
        <div className="absolute bg-white left-[1025.44px] opacity-[0.778] rounded-[1.9174e+07px] size-[7.772px] top-[713.9px]" data-name="Container" />
        <div className="absolute bg-white left-[806.72px] opacity-[0.03] rounded-[1.9174e+07px] size-[0.432px] top-[427.69px]" data-name="Container" />
        <div className="absolute bg-white left-[1133.07px] opacity-[0.962] rounded-[1.9174e+07px] size-[7.057px] top-[513.24px]" data-name="Container" />
        <div className="absolute bg-white left-[770.04px] opacity-[0.926] rounded-[1.9174e+07px] size-[7.227px] top-[777.62px]" data-name="Container" />
        <div className="absolute bg-white left-[1129.79px] opacity-[0.234] rounded-[1.9174e+07px] size-[1.828px] top-[807.43px]" data-name="Container" />
        <div className="absolute bg-white h-[6.355px] left-[743.08px] opacity-[0.498] rounded-[1.9174e+07px] top-[265.55px] w-[6.354px]" data-name="Container" />
        <div className="absolute bg-white left-[153.17px] opacity-[0.018] rounded-[1.9174e+07px] size-[0.267px] top-[685.64px]" data-name="Container" />
        <div className="absolute bg-white left-[339.16px] opacity-[0.536] rounded-[1.9174e+07px] size-[6.809px] top-[716px]" data-name="Container" />
        <div className="absolute bg-white left-[1136.68px] opacity-[0.281] rounded-[1.9174e+07px] size-[3.699px] top-[159.35px]" data-name="Container" />
        <div className="absolute bg-white left-[1071.39px] opacity-[0.079] rounded-[1.9174e+07px] size-[1.11px] top-[339.88px]" data-name="Container" />
        <div className="absolute bg-white left-[1078.92px] opacity-[0.005] rounded-[1.9174e+07px] size-[0.075px] top-[104.93px]" data-name="Container" />
        <div className="absolute bg-white left-[1202.89px] opacity-[0.455] rounded-[1.9174e+07px] size-[5.827px] top-[256.65px]" data-name="Container" />
        <div className="absolute bg-white left-[825.29px] opacity-[0.845] rounded-[1.9174e+07px] size-[7.554px] top-[640.79px]" data-name="Container" />
        <div className="absolute bg-white left-[454.16px] opacity-[0.068] rounded-[1.9174e+07px] size-[0.542px] top-[155.76px]" data-name="Container" />
        <div className="absolute bg-white left-[778.72px] opacity-[0.77] rounded-[1.9174e+07px] size-[5.57px] top-[548.58px]" data-name="Container" />
        <div className="absolute bg-white left-[533.7px] opacity-[0.611] rounded-[1.9174e+07px] size-[7.74px] top-[121.19px]" data-name="Container" />
        <div className="absolute bg-white left-[726.78px] opacity-[0.019] rounded-[1.9174e+07px] size-[0.164px] top-[195.27px]" data-name="Container" />
        <div className="absolute bg-white left-[388.29px] opacity-[0.557] rounded-[1.9174e+07px] size-[7.073px] top-[288.21px]" data-name="Container" />
        <div className="absolute bg-white left-[278.88px] opacity-[0.003] rounded-[1.9174e+07px] size-[0.044px] top-[661.26px]" data-name="Container" />
      </div>
      <div className="absolute h-[4029.714px] left-0 overflow-clip top-[3px] w-[1241.143px]" data-name="App">
        <div className="absolute content-stretch flex flex-col gap-[48px] h-[3030.572px] items-start left-[44.57px] px-[32px] py-0 top-[811.43px] w-[1152px]" data-name="Container">
          <div className="h-[129.143px] relative rounded-[24px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(173.231deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)" }}>
            <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pb-[0.571px] pt-[32.571px] px-[32.571px] relative size-full">
                <div className="h-[64px] relative shrink-0 w-full" data-name="App">
                  <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-0 top-0 w-[324.946px]" data-name="Container">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[162.54px] text-[#fda5d5] text-[16px] text-center text-nowrap top-[-1.86px] tracking-[0.8px] translate-x-[-50%] uppercase">Real Name</p>
                    </div>
                    <ContainerBackgroundImageAndText text="한리온" />
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[348.95px] top-0 w-[324.955px]" data-name="Container">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[162.46px] text-[#dab2ff] text-[16px] text-center text-nowrap top-[-1.86px] tracking-[0.8px] translate-x-[-50%] uppercase">Agency</p>
                    </div>
                    <ContainerBackgroundImageAndText text="LUMINA 엔터테인먼트" />
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[697.9px] top-0 w-[324.955px]" data-name="Container">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[162.7px] text-[#8ec5ff] text-[16px] text-center text-nowrap top-[-1.86px] tracking-[0.8px] translate-x-[-50%] uppercase">Group</p>
                    </div>
                    <ContainerBackgroundImageAndText text="SOLEN(5인조)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[398.286px] relative rounded-[24px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(159.894deg, rgba(246, 51, 154, 0.2) 0%, rgba(173, 70, 255, 0.2) 50%, rgba(43, 127, 255, 0.2) 100%)" }}>
            <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start pb-[0.571px] pt-[40.571px] px-[40.571px] relative size-full">
                <div className="h-[40px] relative shrink-0 w-full" data-name="App">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[12px] items-center justify-center relative size-full">
                      <IconBackgroundImage1>
                        <path d={svgPaths.p4b95c00} id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage1>
                      <BackgroundImage2 additionalClassNames="h-[40px] w-[192.661px]">
                        <p className="absolute bg-clip-text font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[40px] left-0 text-[36px] text-nowrap text-white top-[-3px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(252, 206, 232) 50%, rgb(233, 212, 255) 100%)" }}>
                          아이돌 스탯
                        </p>
                      </BackgroundImage2>
                      <IconBackgroundImage1>
                        <path d={svgPaths.p2f4e0780} id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage1>
                    </div>
                  </div>
                </div>
                <div className="h-[172px] relative shrink-0 w-full" data-name="App">
                  <div className="absolute content-stretch flex flex-col gap-[20px] h-[172px] items-start left-0 top-0 w-[487.429px]" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start relative shrink-0 w-full" data-name="StatBar">
                      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                        <TextBackgroundImageAndText text="보컬" additionalClassNames="w-[32px]" />
                        <TextBackgroundImageAndText1 text="92/100" />
                      </div>
                      <div className="bg-[rgba(255,255,255,0.1)] h-[12px] relative rounded-[1.9174e+07px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pl-0 pr-[39px] py-0 relative size-full">
                            <div className="bg-gradient-to-r from-[#f6339a] h-[12px] rounded-[1.9174e+07px] shrink-0 to-[#fda5d5] w-full" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start relative shrink-0 w-full" data-name="StatBar">
                      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                        <TextBackgroundImageAndText text="댄스" additionalClassNames="w-[32px]" />
                        <TextBackgroundImageAndText1 text="78/100" />
                      </div>
                      <div className="bg-[rgba(255,255,255,0.1)] h-[12px] relative rounded-[1.9174e+07px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pl-0 pr-[107.241px] py-0 relative size-full">
                            <div className="bg-gradient-to-r from-[#ad46ff] h-[12px] rounded-[1.9174e+07px] shrink-0 to-[#dab2ff] w-full" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start relative shrink-0 w-full" data-name="StatBar">
                      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                        <TextBackgroundImageAndText text="퍼포먼스" additionalClassNames="w-[64px]" />
                        <TextBackgroundImageAndText1 text="95/100" />
                      </div>
                      <div className="bg-[rgba(255,255,255,0.1)] h-[12px] relative rounded-[1.9174e+07px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pl-0 pr-[24.375px] py-0 relative size-full">
                            <div className="bg-gradient-to-r from-[#2b7fff] h-[12px] rounded-[1.9174e+07px] shrink-0 to-[#8ec5ff] w-full" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[20px] h-[172px] items-start left-[519.43px] top-0 w-[487.429px]" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start relative shrink-0 w-full" data-name="StatBar">
                      <ContainerBackgroundImage>
                        <TextBackgroundImageAndText text="카리스마" additionalClassNames="w-[64px]" />
                        <TextBackgroundImageAndText1 text="88/100" />
                      </ContainerBackgroundImage>
                      <div className="bg-[rgba(255,255,255,0.1)] h-[12px] relative rounded-[1.9174e+07px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pl-0 pr-[58.5px] py-0 relative size-full">
                            <div className="bg-gradient-to-r from-[#00b8db] h-[12px] rounded-[1.9174e+07px] shrink-0 to-[#53eafd] w-full" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start relative shrink-0 w-full" data-name="StatBar">
                      <ContainerBackgroundImage>
                        <TextBackgroundImageAndText text="작곡" additionalClassNames="w-[32px]" />
                        <TextBackgroundImageAndText1 text="85/100" />
                      </ContainerBackgroundImage>
                      <div className="bg-[rgba(255,255,255,0.1)] h-[12px] relative rounded-[1.9174e+07px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pl-0 pr-[73.116px] py-0 relative size-full">
                            <div className="bg-gradient-to-r from-[#f0b100] h-[12px] rounded-[1.9174e+07px] shrink-0 to-[#ffdf20] w-full" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start relative shrink-0 w-full" data-name="StatBar">
                      <ContainerBackgroundImage>
                        <TextBackgroundImageAndText text="팬 소통" additionalClassNames="w-[53.625px]" />
                        <TextBackgroundImageAndText1 text="90/100" />
                      </ContainerBackgroundImage>
                      <div className="bg-[rgba(255,255,255,0.1)] h-[12px] relative rounded-[1.9174e+07px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pl-0 pr-[48.75px] py-0 relative size-full">
                            <div className="bg-gradient-to-r from-[#00c950] h-[12px] rounded-[1.9174e+07px] shrink-0 to-[#7bf1a8] w-full" data-name="Container" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[41.143px] relative shrink-0 w-full" data-name="App">
                  <div className="absolute bg-[rgba(246,51,154,0.3)] border-[0.571px] border-[rgba(253,165,213,0.5)] border-solid h-[41.143px] left-[234.71px] rounded-[1.9174e+07px] top-0 w-[150.768px]" data-name="Container">
                    <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#fce7f3] text-[16px] text-nowrap top-[6.14px]">감성 보컬리스트</p>
                  </div>
                  <div className="absolute bg-[rgba(173,70,255,0.3)] border-[0.571px] border-[rgba(218,178,255,0.5)] border-solid h-[41.143px] left-[397.47px] rounded-[1.9174e+07px] top-0 w-[118.768px]" data-name="Container">
                    <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#f3e8ff] text-[16px] text-nowrap top-[6.14px]">무대 장악력</p>
                  </div>
                  <div className="absolute bg-[rgba(43,127,255,0.3)] border-[0.571px] border-[rgba(142,197,255,0.5)] border-solid h-[41.143px] left-[528.24px] rounded-[1.9174e+07px] top-0 w-[113.143px]" data-name="Container">
                    <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#dbeafe] text-[16px] text-nowrap top-[6.14px]">완벽주의자</p>
                  </div>
                  <div className="absolute bg-[rgba(0,184,219,0.3)] border-[0.571px] border-[rgba(83,234,253,0.5)] border-solid h-[41.143px] left-[653.38px] rounded-[1.9174e+07px] top-0 w-[118.768px]" data-name="Container">
                    <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#cefafe] text-[16px] text-nowrap top-[6.14px]">섬세한 감성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContainerBackgroundImage3 additionalClassNames="h-[290.286px]">
            <div className="absolute h-[289.143px] left-[0.57px] opacity-0 top-[0.57px] w-[1086.857px]" data-name="Container" style={{ backgroundImage: "linear-gradient(165.102deg, rgba(251, 100, 182, 0.2) 0%, rgba(194, 122, 255, 0.2) 50%, rgba(81, 162, 255, 0.2) 100%)" }} />
            <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[32.57px] top-[32.57px] w-[1022.857px]" data-name="SectionCard">
              <ContainerBackgroundImage2>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[8.32%]" data-name="Vector">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0048 22.0048">
                        <path d={svgPaths.p259cb680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3/4 left-[83.33%] right-[16.67%] top-[8.33%]" data-name="Vector">
                    <div className="absolute inset-[-25%_-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
                        <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[83.33%] left-3/4 right-[8.33%] top-[16.67%]" data-name="Vector">
                    <div className="absolute inset-[-1px_-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
                        <path d="M5 1H1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-3/4" data-name="Vector">
                    <div className="absolute inset-[-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                        <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <HeadingBackgroundImageAndText text="배경" additionalClassNames="w-[60px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[153.143px] items-start left-[32.57px] top-[104.57px] w-[1022.857px]" data-name="App">
              <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
                <div className="absolute content-stretch flex h-[24px] items-start left-0 top-[1.71px] w-[182.018px]" data-name="Text">
                  <p className="basis-0 font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#fda5d5] text-[18px]">2022년 3월 18일 데뷔</p>
                </div>
                <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-[182.02px] text-[#e5e7eb] text-[16px] text-nowrap top-0">· 부드러운 얼굴 뒤에 예상 못 한 카리스마를 숨긴</p>
                <div className="absolute content-stretch flex h-[21.143px] items-start left-[545.77px] top-[4px] w-[110.643px]" data-name="Text">
                  <p className="basis-0 font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#dab2ff] text-[16px]">{`'트렌디 아이콘'`}</p>
                </div>
              </div>
              <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#e5e7eb] text-[16px] text-nowrap top-[-1.71px]">평소엔 차분하지만,</p>
                <div className="absolute content-stretch flex h-[21.143px] items-start left-[142.75px] top-[2.29px] w-[230.5px]" data-name="Text">
                  <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#ffdf20] text-[16px]">무대 위에서는 완전히 다른 사람</p>
                </div>
                <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-[373.25px] text-[#e5e7eb] text-[16px] text-nowrap top-[-1.71px]">{`. 팬들은 이 간극을 "리온의 진짜 매력"이라 부른다.`}</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] h-[67.143px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start pb-[0.571px] pt-[20.572px] px-[20.571px] relative size-full">
                    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Arimo:Italic','Noto_Sans_KR:Regular',sans-serif] font-normal italic leading-[26px] left-0 text-[#fccee8] text-[16px] text-nowrap top-[-1.71px]">감성 음악을 넘어 스토리 기반 퍼포먼스, 새로운 사운드 실험까지 —</p>
                      <div className="absolute content-stretch flex h-[21.143px] items-start left-[486.54px] top-[2.29px] w-[198.5px]" data-name="Text">
                        <p className="basis-0 font-['Arimo:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold grow italic leading-[26px] min-h-px min-w-px relative shrink-0 text-[#ffdf20] text-[16px]">미래가 가장 궁금한 아이돌</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContainerBackgroundImage3>
          <ContainerBackgroundImage3 additionalClassNames="h-[282.286px]">
            <div className="absolute h-[281.143px] left-[0.57px] opacity-0 top-[0.57px] w-[1086.857px]" data-name="Container" style={{ backgroundImage: "linear-gradient(165.497deg, rgba(251, 100, 182, 0.2) 0%, rgba(194, 122, 255, 0.2) 50%, rgba(81, 162, 255, 0.2) 100%)" }} />
            <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[32.57px] top-[32.57px] w-[1022.857px]" data-name="SectionCard">
              <ContainerBackgroundImage2>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
                    <div className="absolute inset-[-5.88%_-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0001 19.0158">
                        <path d={svgPaths.p3eb21b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <HeadingBackgroundImageAndText text="성격" additionalClassNames="w-[60px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[145.143px] items-start left-[32.57px] top-[104.57px] w-[1022.857px]" data-name="App">
              <div className="h-[103.143px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute content-stretch flex flex-col gap-[8px] h-[103.143px] items-start left-0 pb-[0.571px] pt-[24.571px] px-[24.571px] rounded-[16px] top-0 w-[503.429px]" data-name="Container" style={{ backgroundImage: "linear-gradient(168.421deg, rgba(246, 51, 154, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="h-[26px] relative shrink-0 w-full" data-name="App">
                    <p className="absolute font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[26px] left-0 text-[#fda5d5] text-[16px] text-nowrap top-[-1.71px]">일상에서</p>
                  </div>
                  <AppBackgroundImageAndText text="조용하고 차분한 관찰자. 감정과 소리에 민감한 섬세한 성격" />
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] h-[103.143px] items-start left-[519.43px] pb-[0.571px] pt-[24.571px] px-[24.571px] rounded-[16px] top-0 w-[503.429px]" data-name="Container" style={{ backgroundImage: "linear-gradient(168.421deg, rgba(173, 70, 255, 0.2) 0%, rgba(43, 127, 255, 0.2) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="h-[26px] relative shrink-0 w-full" data-name="App">
                    <p className="absolute font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[26px] left-0 text-[#dab2ff] text-[16px] text-nowrap top-[-1.71px]">무대에서</p>
                  </div>
                  <AppBackgroundImageAndText text="집중력과 활발함 폭발. 표정과 에너지가 완전히 바뀌는 무대체질" />
                </div>
              </div>
              <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[26px] left-[511.43px] text-[#fccee8] text-[16px] text-center text-nowrap top-[-1.71px] translate-x-[-50%]">{`"두 가지 매력" — 섬세한 사람 & 몰입력 있는 퍼포머`}</p>
              </div>
            </div>
          </ContainerBackgroundImage3>
          <ContainerBackgroundImage3 additionalClassNames="h-[298.286px]">
            <div className="absolute h-[297.143px] left-[0.57px] opacity-0 top-[0.57px] w-[1086.857px]" data-name="Container" style={{ backgroundImage: "linear-gradient(164.709deg, rgba(251, 100, 182, 0.2) 0%, rgba(194, 122, 255, 0.2) 50%, rgba(81, 162, 255, 0.2) 100%)" }} />
            <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[32.57px] top-[32.57px] w-[1022.857px]" data-name="SectionCard">
              <ContainerBackgroundImage2>
                <IconBackgroundImage2 additionalClassNames="h-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0018 21.0721">
                    <path d={svgPaths.p18eb980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </IconBackgroundImage2>
              </ContainerBackgroundImage2>
              <HeadingBackgroundImageAndText text="본질" additionalClassNames="w-[60px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[161.143px] items-start left-[32.57px] top-[104.57px] w-[1022.857px]" data-name="App">
              <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
                <div className="absolute content-stretch flex h-[24px] items-start left-[253.3px] top-[1.71px] w-[192.661px]" data-name="Text">
                  <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#fda5d5] text-[18px] text-center">따뜻하고 배려심 깊지만</p>
                </div>
                <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[28px] left-[541.96px] text-[#e5e7eb] text-[18px] text-center text-nowrap top-[-1.29px] translate-x-[-50%]">, 좋아하는 것 앞에서는</p>
                <div className="absolute content-stretch flex h-[24px] items-start left-[637.21px] top-[1.71px] w-[132.33px]" data-name="Text">
                  <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#dab2ff] text-[18px] text-center">적극적인 에너지</p>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] h-[117.143px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start pb-[0.571px] pt-[24.572px] px-[24.571px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[12px] h-[68px] items-start relative shrink-0 w-full" data-name="List">
                      <div className="content-stretch flex gap-[12px] h-[28px] items-start relative shrink-0 w-full" data-name="List Item">
                        <BackgroundImage2 additionalClassNames="h-[28px] w-[27.464px]">
                          <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#fb64b6] text-[20px] text-nowrap top-[-2.43px]">🎵</p>
                        </BackgroundImage2>
                        <AppBackgroundImageAndText1 text="음악 이야기할 때 말이 빨라지고 손짓이 커짐" additionalClassNames="w-[321.75px]" />
                      </div>
                      <div className="content-stretch flex gap-[12px] h-[28px] items-start relative shrink-0 w-full" data-name="List Item">
                        <BackgroundImage2 additionalClassNames="h-[28px] w-[27.464px]">
                          <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#c27aff] text-[20px] text-nowrap top-[-2.43px]">💜</p>
                        </BackgroundImage2>
                        <AppBackgroundImageAndText1 text="팬과 스태프에게 에너지를 아끼지 않는 스타일" additionalClassNames="w-[332.125px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContainerBackgroundImage3>
          <ContainerBackgroundImage3 additionalClassNames="h-[427.429px]">
            <div className="absolute h-[426.286px] left-[0.57px] opacity-0 top-[0.57px] w-[1086.857px]" data-name="Container" style={{ backgroundImage: "linear-gradient(158.584deg, rgba(251, 100, 182, 0.2) 0%, rgba(194, 122, 255, 0.2) 50%, rgba(81, 162, 255, 0.2) 100%)" }} />
            <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[32.57px] top-[32.57px] w-[1022.857px]" data-name="SectionCard">
              <ContainerBackgroundImage2>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[8.33%]" data-name="Vector">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                        <path d={svgPaths.p31d4d40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[70.83%] left-[54.17%] right-[41.67%] top-1/4" data-name="Vector">
                    <Icon5BackgroundImage />
                  </div>
                  <div className="absolute bottom-[54.17%] left-[70.83%] right-1/4 top-[41.67%]" data-name="Vector">
                    <Icon5BackgroundImage />
                  </div>
                  <div className="absolute bottom-[45.83%] left-1/4 right-[70.83%] top-1/2" data-name="Vector">
                    <Icon5BackgroundImage />
                  </div>
                  <div className="absolute inset-[29.17%_62.5%_66.67%_33.33%]" data-name="Vector">
                    <Icon5BackgroundImage />
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <HeadingBackgroundImageAndText text="관심사" additionalClassNames="w-[90px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[290.286px] items-start left-[32.57px] top-[104.57px] w-[1022.857px]" data-name="App">
              <BackgroundImageAndText text="리온은 사람들의 감정뿐 아니라, 무대·퍼포먼스·콘셉트 작업 자체에도 큰 흥미를 가진다." />
              <div className="h-[206.286px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute content-stretch flex flex-col gap-[8px] h-[95.143px] items-start left-0 pb-[0.571px] pt-[20.571px] px-[20.571px] rounded-[16px] top-0 w-[503.429px]" data-name="Container" style={{ backgroundImage: "linear-gradient(169.298deg, rgba(246, 51, 154, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="App">
                    <IconBackgroundImage3>
                      <path d={svgPaths.p1fbc1c00} id="Vector" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage3>
                    <BackgroundImage2 additionalClassNames="h-[26px] w-[85.625px]">
                      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#fda5d5] text-[16px] text-nowrap top-[-1.71px]">팬과의 소통</p>
                    </BackgroundImage2>
                  </div>
                  <AppBackgroundImageAndText text="팬들의 하루 이야기를 들으며 음악 아이디어 찾기" />
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] h-[95.143px] items-start left-[519.43px] pb-[0.571px] pt-[20.571px] px-[20.571px] rounded-[16px] top-0 w-[503.429px]" data-name="Container" style={{ backgroundImage: "linear-gradient(169.298deg, rgba(173, 70, 255, 0.2) 0%, rgba(43, 127, 255, 0.2) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="App">
                    <BackgroundImage1 additionalClassNames="relative shrink-0 size-[20px]">
                      <g clipPath="url(#clip0_20_437)" id="Icon">
                        <path d={svgPaths.p34ea8c80} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M16.6667 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M18.3333 3.33333H15" id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2661f400} id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_437">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage1>
                    <BackgroundImage2 additionalClassNames="h-[26px] w-[69.625px]">
                      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#dab2ff] text-[16px] text-nowrap top-[-1.71px]">공연 기획</p>
                    </BackgroundImage2>
                  </div>
                  <AppBackgroundImageAndText text="공연 구성 아이디어 짜기(조명, 동선, 분위기 컬러 등)" />
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] h-[95.143px] items-start left-0 pb-[0.571px] pt-[20.571px] px-[20.571px] rounded-[16px] top-[111.14px] w-[503.429px]" data-name="Container" style={{ backgroundImage: "linear-gradient(169.298deg, rgba(43, 127, 255, 0.2) 0%, rgba(0, 184, 219, 0.2) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="App">
                    <IconBackgroundImage3>
                      <path d={svgPaths.p3376b800} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage3>
                    <BackgroundImage2 additionalClassNames="h-[26px] w-[69.625px]">
                      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#8ec5ff] text-[16px] text-nowrap top-[-1.71px]">무대 연구</p>
                    </BackgroundImage2>
                  </div>
                  <AppBackgroundImageAndText text="다른 아티스트들의 무대 분석하는 걸 좋아함" />
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] h-[95.143px] items-start left-[519.43px] pb-[0.571px] pt-[20.571px] px-[20.571px] rounded-[16px] top-[111.14px] w-[503.429px]" data-name="Container" style={{ backgroundImage: "linear-gradient(169.298deg, rgba(0, 184, 219, 0.2) 0%, rgba(0, 187, 167, 0.2) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full" data-name="App">
                    <BackgroundImage1 additionalClassNames="relative shrink-0 size-[20px]">
                      <g clipPath="url(#clip0_20_425)" id="Icon">
                        <path d={svgPaths.p3bcc1200} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p14899500} fill="var(--fill-0, #00D3F2)" id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.pa15a670} fill="var(--fill-0, #00D3F2)" id="Vector_3" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p295c7f00} fill="var(--fill-0, #00D3F2)" id="Vector_4" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3ad59a00} fill="var(--fill-0, #00D3F2)" id="Vector_5" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_425">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage1>
                    <BackgroundImage2 additionalClassNames="h-[26px] w-[85.625px]">
                      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#53eafd] text-[16px] text-nowrap top-[-1.71px]">디테일 작업</p>
                    </BackgroundImage2>
                  </div>
                  <AppBackgroundImageAndText text="의상·안무 디테일에도 나름 의견을 적극적으로 냄" />
                </div>
              </div>
              <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Italic','Noto_Sans_KR:Regular',sans-serif] font-normal italic leading-[26px] left-[511.62px] text-[#e9d4ff] text-[16px] text-center text-nowrap top-[-1.71px] translate-x-[-50%]">조용한 감성파지만 아티스트로서 할 말, 하고 싶은 표현이 많은 타입이다.</p>
              </div>
            </div>
          </ContainerBackgroundImage3>
          <ContainerBackgroundImage3 additionalClassNames="h-[493.714px]">
            <div className="absolute h-[492.571px] left-[0.57px] opacity-0 top-[0.57px] w-[1086.857px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.62deg, rgba(251, 100, 182, 0.2) 0%, rgba(194, 122, 255, 0.2) 50%, rgba(81, 162, 255, 0.2) 100%)" }} />
            <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[32.57px] top-[32.57px] w-[1022.857px]" data-name="SectionCard">
              <ContainerBackgroundImage2>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute bottom-1/4 left-[37.5%] right-[12.5%] top-[12.5%]" data-name="Vector">
                    <div className="absolute inset-[-6.67%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                        <path d="M1 16V3.00001L13 1.00001V14" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <Icon10VectorBackgroundImage additionalClassNames="inset-[62.5%_62.5%_12.5%_12.5%]" />
                  <Icon10VectorBackgroundImage additionalClassNames="inset-[54.17%_12.5%_20.83%_62.5%]" />
                </div>
              </ContainerBackgroundImage2>
              <HeadingBackgroundImageAndText text="취미" additionalClassNames="w-[60px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[356.571px] items-start left-[32.57px] top-[104.57px] w-[1022.857px]" data-name="App">
              <BackgroundImage4>{`취미 또한 "내향적 안정 + 아이돌다운 활동성"이 적절히 섞여 있다.`}</BackgroundImage4>
              <div className="content-stretch flex flex-col gap-[12px] h-[272.571px] items-start relative shrink-0 w-full" data-name="Container">
                <ContainerBackgroundImage1>
                  <div className="bg-[#fb64b6] rounded-[1.9174e+07px] shrink-0 size-[8px]" data-name="App" />
                  <BackgroundImage additionalClassNames="w-[233.214px]">{`밤 산책 & 도시 분위기 기록하기`}</BackgroundImage>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1>
                  <div className="bg-[#c27aff] rounded-[1.9174e+07px] shrink-0 size-[8px]" data-name="App" />
                  <BackgroundImage additionalClassNames="w-[382.804px]">{`공연 영상 분석하며 '내 스타일에 맞는 퍼포먼스' 연구`}</BackgroundImage>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1>
                  <div className="bg-[#51a2ff] rounded-[1.9174e+07px] shrink-0 size-[8px]" data-name="App" />
                  <AppBackgroundImageAndText1 text="연습실에서 혼자 즉흥 안무 만들어보기" additionalClassNames="w-[278.5px]" />
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage1>
                  <div className="bg-[#00d3f3] rounded-[1.9174e+07px] shrink-0 size-[8px]" data-name="App" />
                  <AppBackgroundImageAndText1 text="팬들이 준 편지나 메시지 읽으며 감정 포인트 메모" additionalClassNames="w-[359.375px]" />
                </ContainerBackgroundImage1>
              </div>
              <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Italic','Noto_Sans_KR:Regular',sans-serif] font-normal italic leading-[26px] left-[512.3px] text-[#bedbff] text-[16px] text-center text-nowrap top-[-1.71px] translate-x-[-50%]">조용한 취미를 가지면서도, 무대에서는 센스 있고 몸으로 표현하는 걸 즐기는 사람이다.</p>
              </div>
            </div>
          </ContainerBackgroundImage3>
          <ContainerBackgroundImage3 additionalClassNames="h-[375.143px]">
            <div className="absolute h-[374px] left-[0.57px] opacity-0 top-[0.57px] w-[1086.857px]" data-name="Container" style={{ backgroundImage: "linear-gradient(161.011deg, rgba(251, 100, 182, 0.2) 0%, rgba(194, 122, 255, 0.2) 50%, rgba(81, 162, 255, 0.2) 100%)" }} />
            <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[32.57px] top-[32.57px] w-[1022.857px]" data-name="SectionCard">
              <ContainerBackgroundImage2>
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[31.67%_37.12%_24.17%_20.05%]" data-name="Vector">
                    <div className="absolute inset-[-9.44%_-9.73%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2772 12.5986">
                        <path d={svgPaths.p2bdb7d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[72.92%_31.25%_8.18%_20.26%]" data-name="Vector">
                    <div className="absolute inset-[-22.04%_-8.59%_-22.03%_-8.58%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.637 6.53618">
                        <path d={svgPaths.pb08400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/2 left-[45.83%] right-[12.5%] top-[8.33%]" data-name="Vector">
                    <div className="absolute inset-[-10%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <BackgroundImage2 additionalClassNames="h-[36px] w-[166.804px]">
                <BackgroundImage5>{`음악 & 스킬`}</BackgroundImage5>
              </BackgroundImage2>
            </div>
            <div className="absolute bg-gradient-to-r border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid from-[rgba(246,51,154,0.2)] h-[238px] left-[32.57px] rounded-[16px] to-[rgba(43,127,255,0.2)] top-[104.57px] via-50% via-[rgba(173,70,255,0.2)] w-[1022.857px]" data-name="App">
              <div className="absolute content-stretch flex h-[32px] items-start left-[366.13px] top-[24px] w-[289.446px]" data-name="Paragraph">
                <p className="basis-0 bg-clip-text font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-[rgba(0,0,0,0)] text-center" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(253, 165, 213) 0%, rgb(218, 178, 255) 50%, rgb(142, 197, 255) 100%)" }}>{`도시 감성 pop / soft R&B`}</p>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[24px] top-[72.86px] w-[973.714px]" data-name="Container">
                <BackgroundImage4>{`리온의 음악은 도시 감성 pop / soft R&B를 기반으로 한다.`}</BackgroundImage4>
                <BackgroundImageAndText text="담백한 보컬과 세심한 가사로 감정의 결을 부드럽게 표현한다." />
                <BackgroundImageAndText text="사람들의 작은 말 한마디에서 착안해 음악적 이미지를 만드는 능력이 뛰어나며," />
                <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#dab2ff] text-[16px] text-nowrap top-[-1.71px]">완성도에 대한 집착이 있어 데모를 여러 번 수정하는 완벽주의자 면도 있다.</p>
                </div>
              </div>
            </div>
          </ContainerBackgroundImage3>
        </div>
        <div className="absolute h-[24px] left-[573.22px] top-[3919.54px] w-[94.696px]" data-name="Container">
          <IconBackgroundImage additionalClassNames="left-0" />
          <div className="absolute h-[24px] left-[28px] top-0 w-[38.696px]" data-name="App">
            <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[19.5px] text-[16px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[-1.86px] translate-x-[-50%]">RION</p>
          </div>
          <IconBackgroundImage additionalClassNames="left-[74.7px]" />
        </div>
        <div className="absolute h-[811.429px] left-0 top-0 w-[1241.143px]" data-name="Container">
          <div className="absolute content-stretch flex flex-col gap-[16px] h-[208px] items-start left-[285.18px] top-[567.71px] w-[670.786px]" data-name="Container">
            <div className="h-[72px] relative shrink-0 w-full" data-name="Heading 1">
              <p className="absolute bg-clip-text font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[72px] left-[335px] text-[72px] text-[rgba(0,0,0,0)] text-center text-nowrap top-[-7px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(252, 206, 232) 50%, rgb(233, 212, 255) 100%)" }}>
                버추얼 아이돌 · 리온
              </p>
            </div>
            <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[60px] left-0 top-0 w-[670.786px]" data-name="App">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[60px] left-[335.81px] text-[60px] text-[rgba(255,255,255,0.9)] text-center text-nowrap top-[-5.71px] translate-x-[-50%]">About</p>
              </div>
              <div className="absolute h-[60px] left-0 top-[60px] w-[670.786px]" data-name="App">
                <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[60px] left-[335.71px] text-[60px] text-[rgba(255,255,255,0.9)] text-center text-nowrap top-[-5.71px] translate-x-[-50%]">Rion</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[500px] left-[420.57px] top-[35.71px] w-[400px]" data-name="Container">
            <div className="absolute bg-[rgba(255,255,255,0)] border-4 border-[rgba(255,255,255,0.3)] border-solid h-[500px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[400px]" data-name="Container">
              <div className="absolute h-[492px] left-0 top-0 w-[392px]" data-name="App">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgApp} />
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(89,22,139,0.5)] h-[492px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[392px]" data-name="App" />
              <BackgroundImage6 additionalClassNames="left-[357.52px] size-[58.412px] top-[-71.11px]">
                <div className="flex-none rotate-[276.264deg]">
                  <div className="content-stretch flex flex-col items-start relative size-[52.951px]" data-name="Container">
                    <div className="h-[52.951px] overflow-clip relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[8.32%]" data-name="Vector">
                        <div className="absolute inset-[-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5486 48.5486">
                            <path d={svgPaths.p173b3900} id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.41255" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[83.33%] right-[16.67%] top-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-25%_-2.21px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.41255 13.2377">
                            <path d="M2.20628 2.20628V11.0314" id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.41255" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[83.33%] left-3/4 right-[8.33%] top-[16.67%]" data-name="Vector">
                        <div className="absolute inset-[-2.21px_-25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2377 4.41255">
                            <path d="M11.0314 2.20628H2.20628" id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.41255" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-3/4" data-name="Vector">
                        <div className="absolute inset-[-25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2377 13.2377">
                            <path d={svgPaths.p1975eec0} id="Vector" stroke="var(--stroke-0, #FFDF20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.41255" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundImage6>
              <BackgroundImage6 additionalClassNames="left-[-89.4px] size-[67.431px] top-[442.87px]">
                <div className="flex-none rotate-[111.648deg]">
                  <div className="content-stretch flex flex-col items-start relative size-[51.935px]" data-name="Container">
                    <IconBackgroundImage2 additionalClassNames="h-[51.935px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.6109 45.5989">
                        <path d={svgPaths.pc325080} id="Vector" stroke="var(--stroke-0, #FDA5D5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.3279" />
                      </svg>
                    </IconBackgroundImage2>
                  </div>
                </div>
              </BackgroundImage6>
            </div>
            <BackgroundImage6 additionalClassNames="left-[222.09px] size-[191.071px] top-[-250.79px]">
              <div className="flex-none rotate-[221.011deg]">
                <div className="opacity-50 relative size-[135.436px]" data-name="App">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgApp1} />
                </div>
              </div>
            </BackgroundImage6>
          </div>
          <div className="absolute content-stretch flex h-[40px] items-start justify-center left-[608.57px] pb-[1.714px] pt-[15.631px] px-[1.714px] rounded-[1.9174e+07px] top-[736.36px] w-[24px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[1.714px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[1.9174e+07px]" />
            <div className="bg-white h-[12px] rounded-[1.9174e+07px] shrink-0 w-[6px]" data-name="Container" />
          </div>
        </div>
      </div>
    </div>
  );
}