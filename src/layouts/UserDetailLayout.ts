import { ICustomViewStyle } from "react-native-skeleton-content-nonexpo/lib/Constants";
import { statusBarHeight } from "../utils/constants";

export const userDetailLayout: ICustomViewStyle[] = [

    {
        flex: 1,
        children: [
            {
                flex: .8,
                children: [
                    {
                        key: 'headerContent',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                        marginTop: statusBarHeight + 65,
                        marginHorizontal: '5%',
                        children: [

                            {
                                key: 'headerImage',
                                width: 150,
                                height: 150,
                                borderRadius: 75,
                                marginRight: '5%',
                            },
                            {
                                key: 'headerTextContent',
                                flexDirection: 'column',
                                flex: 1,
                                children: [
                                    {
                                        key: 'headerTextName',
                                        width: '100%',
                                        height: 24,
                                        marginBottom: 10,
                                    },
                                    {
                                        key: 'headerTextLogin',
                                        width: '100%',
                                        height: 14,
                                        marginBottom: 10,
                                    },
                                    {
                                        key: 'headerTextLocation',
                                        width: '100%',
                                        height: 14,
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        key: 'headerBioText',
                        marginTop: 20,
                        width: '90%',
                        height: 20,
                        marginLeft: '5%',
                        justifyContent: 'center'
                    },
                    {
                        key: 'headerSummaryContainer',
                        marginTop: 20,
                        height: 55,
                        width: '90%',
                        marginHorizontal: '5%'
                    },
                ]
            },
            {
                flex: .3,
                children: [
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginHorizontal: '5%',
                        marginTop: 20,
                        children: [
                            {
                                key: 'followers',
                                width: 120,
                                height: 15
                            },
                            {
                                key: 'viewAll',
                                width: 60,
                                height: 15
                            }
                        ]
                    },
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginHorizontal: '5%',
                        marginTop: 10,
                        children: [
                            {
                                flexDirection:'column',
                                alignItems:'center',
                                children:[
                                    {
                                        borderRadius: 75,
                                        width: 75,
                                        height: 75,
                                    },
                                    {
                                        marginTop:10,
                                        width:'100%',
                                        height:10
                                    }
                                ]
                            },
                            {
                                flexDirection:'column',
                                alignItems:'center',
                                children:[
                                    {
                                        borderRadius: 75,
                                        width: 75,
                                        height: 75,
                                    },
                                    {
                                        marginTop:10,
                                        width:'100%',
                                        height:10
                                    }
                                ]
                            },
                            {
                                flexDirection:'column',
                                alignItems:'center',
                                children:[
                                    {
                                        borderRadius: 75,
                                        width: 75,
                                        height: 75,
                                    },
                                    {
                                        marginTop:10,
                                        width:'100%',
                                        height:10
                                    }
                                ]
                            },
                            {
                                flexDirection:'column',
                                alignItems:'center',
                                children:[
                                    {
                                        borderRadius: 75,
                                        width: 75,
                                        height: 75,
                                    },
                                    {
                                        marginTop:10,
                                        width:'100%',
                                        height:10
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ],
    }

    // {
    //     position: 'absolute',
    //     bottom: 0,
    //     width: '100%',
    //     children: [
    //         {
    //             key: 'bodyContainer',
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             width: '90%',
    //             marginHorizontal: '5%',
    //             bottom: 0,
    //             paddingBottom: 135,
    //             children: [
    //                 {
    //                     key: 'followers',
    //                     width: 120,
    //                     height: 15
    //                 },
    //                 {
    //                     key: 'viewAll',
    //                     width: 60,
    //                     height: 15
    //                 }
    //             ]
    //         }
    //     ],
    // },
    // {
    //     position: 'absolute',
    //     bottom: 0,
    //     width: '100%',
    //     children: [
    //         {
    //             key: 'bodyContainer',
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             width: '90%',
    //             marginHorizontal: '5%',
    //             bottom: 0,
    //             paddingBottom: 55,
    //             children: [
    //                 {
    //                     key: 'followers',
    //                     width: 120,
    //                     height: 15
    //                 },
    //                 {
    //                     key: 'viewAll',
    //                     width: 60,
    //                     height: 15
    //                 }
    //             ]
    //         }
    //     ],
    // }
]