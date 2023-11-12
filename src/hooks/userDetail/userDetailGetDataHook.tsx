import { useEffect, useState } from 'react';
import { ApiServices } from '../../services/ApiServices';
import IUser from '../../models/UserModel';
import { Alert } from 'react-native'; 



export function userDetailGetData(userName: string) {
    const [data, setData] = useState<IUser>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const getData = async () => {
        setIsLoading(true);
        try {
            const userDetail: IUser = await ApiServices.getUserDetailService(userName);
            setData(userDetail);
        } catch (err:any) {
            setError(err);

            if (err?.message) {
                Alert.alert('Hata', err.message, [{ text: 'Tamam' }], { cancelable: false });
            } else {
                // Diğer hatalar için genel bir mesaj göster
                Alert.alert('Hata', 'Bir hata oluştu. Lütfen tekrar deneyin.', [{ text: 'Tamam' }], { cancelable: false });
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [userName]);

    return { data, isLoading, error };
}
