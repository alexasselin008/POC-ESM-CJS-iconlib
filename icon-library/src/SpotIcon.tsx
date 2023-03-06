import { SvgImage, SvgImageProps, slot } from "@sharegate/orbit-ui";
import { forwardRef } from "react";

export type SpotIconSize = "sm" |"md" | "lg";
type OverlappingProps = "height" | "width";

export interface SpotIconProps extends Omit<SvgImageProps, OverlappingProps> {
    size?: SpotIconSize;
}

const Sizes: Record<SpotIconSize, Pick<SvgImageProps, "width" | "height">> = {
    "sm": {
        height: "32px",
        width: "32px"
    },
    "md": {
        height: "48px",
        width: "48px"
    },
    "lg": {
        height: "72px",
        width: "72px"
    }
};

export const SpotIcon = slot("image", forwardRef<SVGSVGElement, SpotIconProps>(({ size = "md", ...rest }, ref) => {
    const { width, height } = Sizes[size];

    return (
        <SvgImage
            ref={ref}
            height={height}
            width={width}
            {...rest}
        />
    );
}));

export function createSpotIcon(src: SpotIconProps["src"]) {
    return slot("image", forwardRef<SVGSVGElement, Omit<SpotIconProps, "src">>((props, ref) =>
        <SpotIcon
            ref={ref}
            src={src}
            {...props}
        />
    ));
}
