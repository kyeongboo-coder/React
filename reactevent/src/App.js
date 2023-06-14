import { useState } from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import Modal from "./Modal";

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1>
      안녕, {name} {i}호
    </h1>
  ));

  return <div>{numComponentsArray}</div>;
}

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };

  // useState(false)인 이유는 사용자가 로그인 하지 않았음을 의미함 
  const [login, setLogin] = useState(false);

  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }

  console.log(login);
  return (
    <>
      <Hello name="licat" />
      login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />
      {/* // 둘다 true면 뒤에꺼를 반환  && 연산자는 첫번째 falsy 값 마지막 truthy값을 반환 둘다 falsy면 앞에가 falsy 값을 다 비교해본 다음에 다 양옆에 살펴보다가 둘 중에 하나 false값 나오면 바로 걔를 반환함
      falsy한 값이 있으면 - 첫번째 falsy 값을 반환
없으면 - truthy중에 마지막 truthy 값을 반환 
|| 첫번째부터 truthy가 나왔으면 첫번쨰 true 값을 반환하고 끝남 다 false다 그러면 가장 마지막 falsy인 값을 반환합니다. 
      */}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            illum laborum, quo facilis eaque quam optio aliquam nam provident.
            Laboriosam delectus, atque doloremque nam harum molestias ab
            quisquam! Quis, pariatur.
          </p>
          <a href="#none">더 보기</a>
        </Modal>
      )}
    </>
  );
}

export default App;
