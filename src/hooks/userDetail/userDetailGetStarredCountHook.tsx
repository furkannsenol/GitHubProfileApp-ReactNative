import { useEffect, useState } from 'react';
import { ApiServices } from '../../services/ApiServices';

export function userDetailGetStarredCount(userName: string) {
    const [starred, setStarred] = useState<number>(0);
    const [starredIsLoading, setStarredIsLoading] = useState(false);
    const [starredError, setStarredError] = useState<any>(null);

    const getData = async () => {
        setStarredIsLoading(true);
        try {
            const starredCount: number = await ApiServices.getUserStarredCountService(userName);
            setStarred(starredCount);
        } catch (err) {
            setStarredError(err);
        } finally {
            setStarredIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [userName]);

    return { starred, starredIsLoading, starredError };
}
