import { GET_ALL_BEEF_COW_SPERMS_LIST } from '@/redux/features/publicSlice';
import { unwrapResult } from '@reduxjs/toolkit';

async function getAllBeefCowSpermsList(dispatch, enqueueSnackbar, setState) {
    try {
        const result = await dispatch(GET_ALL_BEEF_COW_SPERMS_LIST());
        const response = unwrapResult(result);

        setState(response.data);
    } catch (err) {
        const errorMessage = err.message;

        enqueueSnackbar(errorMessage || 'متاسفانه مشکلی پیش آمده است.', {
            variant: 'error',
        });
    }
}

export default getAllBeefCowSpermsList;
