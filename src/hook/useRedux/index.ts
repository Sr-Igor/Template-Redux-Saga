import {
    useSelector as useS, 
    useDispatch as useD,
    TypedUseSelectorHook,
} from 'react-redux';
import {RootState, AppDispatch} from '../../store';

export const useSelector: TypedUseSelectorHook<RootState> = useS;
export const useDispatch = () => useD<AppDispatch>();