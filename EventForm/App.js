import { useState } from "react";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";

function App() {
  const [datas, setDatas] = useState([]);

  // datas 배열에 데이터를 추가하는 목적을 가지는 함수입니다.

  // formdata = data로 들어가는거야
  const addData = (data) => {
    // 지금 제출한 내용
    console.log(data);
    setDatas([...datas, data]);
  };

  // 제출한 내용이 누적돼는 거고
  console.log(datas);

  return (
    <div>
      {/* 객체가 누적될 배열 */}
      <ItemGenerator datas={datas} />
      {/* 추가될 객체 */}
      <EventForm addData={addData} />
    </div>
  );
}
export default App;
