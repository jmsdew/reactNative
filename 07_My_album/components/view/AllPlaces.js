import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { fetchPlaces } from "../../util/query";
import PlacesList from "../places/PlacesList";


const Allplaces = () => {

  const [loadedPlaces, setLoadedPlaces] = useState([]);

  // 화면에 포커스 되는 경우 boolean 타입의 값을 받는 훅스이다.
  const isFocused = useIsFocused();

  useEffect(()=>{
    const setUpPlaces = async () => {
      const place = await fetchPlaces();
      setLoadedPlaces(place);
    };

    if(isFocused){
      setUpPlaces();
    }
  },[isFocused]);

  return (
    <PlacesList places = {loadedPlaces}/>
  )


}

export default Allplaces;