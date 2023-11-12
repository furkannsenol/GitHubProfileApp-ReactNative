import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/constants";

const styles = StyleSheet.create({

    blurContainer: {
        flex: 1,
    },
    imageContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: (windowWidth / 4) * 3,
        height: (windowWidth / 4) * 3,
        borderRadius: (windowWidth / 4) * 3,
    },
});

export default styles