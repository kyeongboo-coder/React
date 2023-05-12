import React from "react";
import "./EventForm.css";
import { useState } from "react";
// addData함수가 App.js에
// const addData = (data) => {
//   setDatas([...datas, data]);
// };
//
export default function EventForm({ addData }) {
  //  <button type="reset" onClick={resetForm}>
  // {resetForm} 함수가 만들어 진것이고
  // 초기화 버튼을 누르면
  //   setTitle("");
  //   setDate("");
  //   setFood("짜장면");
  function resetForm() {
    setTitle("");
    setDate("");
    setFood("짜장면");
  }

  //  <form className="event-form" onSubmit={handleSubmit}>을
  // {handleSubmit}이 만들어진 것이고
  // 제출하기 버튼을 누르면
  function handleSubmit(event) {
    // 새로고침이 방지돼고
    event.preventDefault();
    // formDate가 출력이 돼는데
    //
    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      food: food,
    };

    addData(formData);
    resetForm();
  }

  // 아래 코드는 위에
  // function resetForm() 아래 함수 내용 변경을 해야하니까요
  // setTitle("");
  // setDate("");
  // setFood("짜장면");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [food, setFood] = useState("짜장면");

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <strong>Event Title : </strong>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <strong>Event date : </strong>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label>
        <select
          value={food}
          onChange={(event) => {
            setFood(event.target.value);
          }}
        >
          <option value="짜장면">짜장면</option>
          <option value="유산슬">유산슬</option>
          <option value="탕수육">탕수육</option>
        </select>
      </label>

      <button type="submit">제출하기</button>
      <button type="reset" onClick={resetForm}>
        초기화
      </button>
    </form>
  );
}
