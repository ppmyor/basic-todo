import React from "react";

function TodoHeader() {
  let now = new Date();
  let currentDate = `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일`;
  let getDay = "";
  switch (now.getDay()) {
    case 0: {
      getDay = "일요일";
      break;
    }
    case 1: {
      getDay = "월요일";
      break;
    }
    case 2: {
      getDay = "화요일";
      break;
    }
    case 3: {
      getDay = "수요일";
      break;
    }
    case 4: {
      getDay = "목요일";
      break;
    }
    case 5: {
      getDay = "금요일";
      break;
    }
    case 6: {
      getDay = "토요일";
      break;
    }
    default:
      break;
  }

  return (
    <header>
      <h1 className="fs-large">{currentDate}</h1>
      <h3 className="fs-medium">{getDay}</h3>
      <span>할 일 n개 남음</span>
    </header>
  );
}

export default TodoHeader;
