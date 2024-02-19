import { insertPlace } from "../../util/query";
import PlaceForm from "../places/PlaceForm";

const AddPlaces = ({navigation}) => {

  const createPlaceHandler = async (place) => {
    await insertPlace(place);
    navigation.navigate("Allplaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler}/>
}

export default AddPlaces;