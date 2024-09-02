import{StoreModule} from "@ngrx/store";
import { loadingReducer} from "./loading.reducers";

export const AppStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature("loading", loadingReducer),

]
