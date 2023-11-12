import { Alert } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";

export const openInAppBrowser = async (url: string | undefined) => {

    if (typeof url !== 'string') {
        Alert.alert('Invalid URL', 'Please provide a valid URL.');
        return;
    }

    try {
        await InAppBrowser.open(url, {
            // iOS Properties
            dismissButtonStyle: 'cancel',
            preferredBarTintColor: '#0D1117',
            preferredControlTintColor: 'white',
            readerMode: false,
            animated: true,
            modalPresentationStyle: 'fullScreen',
            modalTransitionStyle: 'coverVertical',
            modalEnabled: true,
            enableBarCollapsing: false,
            // Android Properties
            showTitle: true,
            toolbarColor: '#0D1117',
            secondaryToolbarColor: 'black',
            navigationBarColor: 'black',
            navigationBarDividerColor: 'white',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: false,
            // Specify full animation resource identifier(package:anim/name)
            // or only resource name(in case of animation bundled with app).
            animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right'
            },
            headers: {
                'my-custom-header': 'my custom header value'
            }
        });
    } catch (error: any) {
        Alert.alert(error.message)
    }
}