import HouseCard from "./HouseCard"
import {useEffect} from "react";

function AllHouses() {
    
    const dispatch = useDispatch()
    const allHouses = useSelector(state => state.houses.currentHouse)
    useEffect(() => {
        dispatch(findHouse(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <HouseCard></HouseCard>
        </div>
    )
}
export default AllHouses;
