import {
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  TouchableOpacityProps,
} from "react-native";
import React, { FC } from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";

interface ICircleButton extends TouchableOpacityProps {
  handlePress: () => void;
  imgUrl: ImageSourcePropType;
  styles: {
    right?: number;
    top?: number;
    left?: number;
  }
}

interface IRectButton extends TouchableOpacityProps {
  handlePress: () => void;
  minWidth: number;
  fontSize: number;
}

export const CircleButton: FC<ICircleButton> = (
 props: ICircleButton
) => {
  const { handlePress, imgUrl, styles }: ICircleButton = props;
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...styles,
      }}
      {...props}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton: FC<IRectButton> = ({minWidth, fontSize, handlePress}: IRectButton, ...props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
      }}
      onPress={handlePress}
    >
     <Text style={{
       fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center",
     }}>Place a bid</Text>
    </TouchableOpacity>
  );
};
