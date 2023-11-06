import { Text, View } from 'react-native'
import React from 'react'
import SkeletonContent from 'react-native-skeleton-content-nonexpo'


const SearchScreen = () => {
  return (
    <SkeletonContent
      containerStyle={{ flex: 1 }} // Yüklenirken görünen bileşenin stilini ayarlayın
      isLoading={true} // loading true olduğunda skeleton loader görünür, false olduğunda gerçek içerik görünür
      layout={[


        {
          flexDirection: "row",
          justifyContent: "space-between",
          children: [
            {
              width: 90,
              height: 90,
              marginBottom: 6,
              borderRadius: 45,
            },
            {
              width: 170,
              height: 40,
              marginBottom: 6,
              right: 10,
              top: 20,
            },
          ],
        },
        { width: "70%", height: 50, marginVertical: 20 },
        { width: "70%", height: 25, marginVertical: 5 },
        { width: "70%", height: 25, marginVertical: 5 },
        {
          flexDirection: "row",
          marginTop: 20,
          children: [
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              marginHorizontal: 5,
            },
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              marginHorizontal: 5,
            },
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              marginHorizontal: 5,
            },
          ],
        },
      ]} // İçerik yerleşimi ve boyutlarını ayarlayın
    >
      <Text>Deneme</Text>
      {/* Gerçek içeriğiniz buraya gelecek */}
    </SkeletonContent >
  )
}

export default SearchScreen

