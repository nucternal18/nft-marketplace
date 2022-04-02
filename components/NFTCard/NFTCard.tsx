import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import { CircleButton } from "../../components";
import { SubInfo, EthPrice, NFTTitle } from "../../components/SubInfo";
import { FC } from "react";
import { RectButton } from "../Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { DataProps } from "../../types";



interface INFTCard {
  data: DataProps;
}

export type RootStackParamList = {
  Details: { data: DataProps };
};
const NFTCard: FC<INFTCard> = ({ data }: INFTCard) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handlePress = () => {};
  const style = {
    right: 10,
    top: 10,
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
            paddingTop: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          handlePress={handlePress}
          styles={style}
        />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font}}>
          <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
          <View style={{
              marginTop: SIZES.font,
              flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
          }}>
              <EthPrice price={data.price}/>
              <RectButton minWidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", {data})} />
          </View>
      </View>
    </View>
  );
};

export default NFTCard;
