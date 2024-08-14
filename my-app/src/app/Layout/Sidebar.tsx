import Image from "next/image";
import React from "react";
import icon from "../../../public/Frame 1321318155.png";
import dashboard from "../../../public/DashboardActive.png";
import book from "../../../public/book_4.svg";
import file from "../../../public/file_copy.svg";
import quiz from "../../../public/quiz.svg";
import lastIcon from "../../../public/lastIcon.svg";

export default function Sidebar() {
  return (
    <div className="w-[54px] justify-between flex flex-col mx-2 h-full rounded-2xl bg-[#F8FAFC]">
      <div className="align-middle justify-center flex  py-3">
        <div className="flex flex-col">
          <div>
            <Image className="bg-cover " src={icon} alt="image" />
          </div>
          <div className="justify-center align-middle flex mt-10">
            <div className="flex-col">
              <div className="cursor-pointer">
                <Image src={dashboard} alt="dashboard" />
              </div>
              <div className="mt-5 justify-center flex cursor-pointer">
                <Image src={book} alt="book" color="red" />
              </div>{" "}
              <div className="mt-5 justify-center flex cursor-pointer">
                <Image src={file} alt="file" color="red" />
              </div>{" "}
              <div className="mt-5 justify-center flex cursor-pointer">
                <Image src={quiz} alt="quiz" color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center flex items-end align-bottom mb-3">
        <Image width={38} height={38} src={lastIcon} alt="last img" />
      </div>
    </div>
  );
}
