import { ScrollView } from "react-native"


const ScrollViewComponent = ({children}) => {
  

  // scrollview 는 렌더링할 때 자식 전체 다 렌더링  -- 성능이슈 전체 렌더링 할 때 까지 화면을 띄워주지 않음
  return (
    <ScrollView>
      {children}
    </ScrollView>
  )
}
export default ScrollViewComponent;