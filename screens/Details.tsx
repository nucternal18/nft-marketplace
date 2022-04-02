import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  ImageSourcePropType,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeModules } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { COLORS, NFTData, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
} from "../components";
import { DataProps } from "../types";


export type RootStackParamList = {
  Details: { data: DataProps };
};

type Props = StackScreenProps<RootStackParamList, "Details">;
type StackNavProps = StackNavigationProp<RootStackParamList, "Details">;
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const DetailsHeader = ({ data, navigation }: {data: DataProps, navigation: StackNavProps}) => (
    <View style={{ width: "100%", height: 373 }}>
        <Image source={data.image} resizeMode="cover" style={{ width: '100%', height: '100%'}} />
        <CircleButton imgUrl={assets.left} handlePress={() => navigation.goBack()} styles={{left: 15, top: STATUSBAR_HEIGHT + 10}} />
        <CircleButton imgUrl={assets.heart} handlePress={() => navigation.goBack()} styles={{right: 15, top: STATUSBAR_HEIGHT + 10}} />
    </View>
)


const Details = ({ route, navigation }: Props) => {
  const { data } = route.params;
    const insets = useSafeAreaInsets();
  const handlePress = () => {};
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(225,225,225,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          handlePress={handlePress}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        }
      />
    </View>
  );
};

export default Details;
