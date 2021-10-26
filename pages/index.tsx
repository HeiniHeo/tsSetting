import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("JavaScript");

  setTimeout(() => {
    setText("TypeScript");
  }, 1000);

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </div>
  );
}