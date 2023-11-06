import { View, Text } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

const FavoriteScreen = () => {
  const sports = [
    { label: 'Football', value: 'football', description: '11 kişilik futbol maçı' },
    { label: 'Basketball', value: 'basketball', description: '10 kişilik basketbol maçı' },
    { label: 'Hockey', value: 'hockey', description: '6 kişilik hokey maçı' },
  ];

  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => {
          const selectedSport = sports.find((sport) => sport.value === value);
          console.log(selectedSport?.description);
        }}
        placeholder={
          {
            label: 'deneme',
            value: 'Football',
            color: 'red',
            inputLabel:'Sort by'
          }
        }
        style={{
          //viewContainer: { backgroundColor: 'lightgray' }, // Özel stil burada tanımlanır
          //iconContainer: { top: 10, right: 12 }, // İkonun konumu ve stilini ayarlayabilirsiniz
          //modalViewMiddle: { backgroundColor: 'lightgray' }, // Seçenekler açıldığında ortadaki kısımın stilini ayarlayabilirsiniz
        }}
        useNativeAndroidPickerStyle={false} // Bu, Android'de özelleştirilmiş seçenekleri etkinleştirir
        //Icon={'asd'}
        items={sports.map((sport) => ({
          label: sport.label,
          value: sport.value,
        }))}
      />
    </View>
  )
}

export default FavoriteScreen