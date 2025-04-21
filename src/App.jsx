import LevelOne from "./components/list_render/level1_Basic_List_Rendering";
import LevelTwo from "./components/list_render/level2_Interactive_List_Item";
import LevelTwoPointTwo from "./components/list_render/level2_2Interactive_List_Item";
import BtnClickEvent from "./components/function_event/btn_click_event";
import ToggleVisibility from "./components/function_event/ToggleVisibility";
import ItemListManager from "./components/function_event/ItemListManager";
import CounterComponent from "./components/function_event/CounterComponent";
import TodoList from "./components/function_event/TodoList";

import DataFetcher from "./components/fetch_api/DataFetcher";
import EnhanceError from "./components/fetch_api/EnhanceError";
import RefetchingOnDemand from "./components/fetch_api/ReloadTrigger";
// import Pagenition from "./components/fetch_api/Pagenition";
import FilterPagenition from "./components/fetch_api/FilterPagenition";
export default function App() {
  return (
    <div className="p-4">
      <h1 className="underline text-3xl font-bold text-sky-500 mb-4">
        Learning 
      </h1>

      {/* list_render */}
      {/* <LevelOne />
      <LevelTwo />
      <LevelTwoPointTwo/> */}

      {/* function_event */}
      {/* <BtnClickEvent/>
      <ToggleVisibility/>
      <ItemListManager/>
      <CounterComponent/>
      <TodoList/> */}
      
      {/*  */}
      {/* <DataFetcher/> */}
      {/* <EnhanceError/> */}
      {/* <RefetchingOnDemand/> */}
      {/* <Pagenition/> */}
      <FilterPagenition/>
    </div>
  );
}
