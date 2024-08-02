import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Card2Type = {
  className?: string;
  group42?: string;
  uIUXDesign?: string;


  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Card2: FunctionComponent<Card2Type> = ({
  className = "",
  propHeight,
  group42,
  uIUXDesign,
  propWidth,
  propDisplay,
  propAlignSelf,
}) => {
  const card041Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const uIUXDesign1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propDisplay, propAlignSelf]);

  return (
    <div
      className={`w-[296px] rounded-xl bg-white border-lavender-100 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[42px] px-[53px] text-left text-lg text-gray1-200 font-franie mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={card041Style}
    >
      <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0 gap-4">
        <img
          className="w-16 h-16 relative"
          loading="lazy"
          alt=""
          src={group42}
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-2">
          <div
            className="w-[126px] relative tracking-[-0.02em] leading-[24px] inline-block"
            style={uIUXDesign1Style}
          >
            {uIUXDesign}
          </div>
          <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[20px] font-body text-dimgray-200 text-center">{`Leverage our expertise in web development to create stunning and functional websites tailored to your business needs. `}</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
