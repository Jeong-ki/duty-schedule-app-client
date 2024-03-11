import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import {tokenApi} from '../axios.instance';
import {MyInfo} from './types';
import {AxiosError} from 'axios';
import {authKeyFactory} from './key-factory';

export const getMyInfo = async () => {
  return (await tokenApi.get<MyInfo>('/auth/myInfo')).data;
};

export const useGetMyInfo = (
  options?: UseQueryOptions<MyInfo, AxiosError, MyInfo, readonly [string]>,
) => {
  return useQuery({
    queryKey: [...authKeyFactory.myInfo],
    queryFn: getMyInfo,
    ...options,
  });
};
