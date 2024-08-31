"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Upload_File from "../../public/upload_file.svg";
import Evaluate from "../../public/EvaluateButton.svg";
import Report from "../../public/Evaluate.png";
import astronuat from "../../public/astronuat.svg";
import PhysicsHL from "../../public/PhysicsHL.svg";
import EigthMIN from "../../public/18MIN.svg";
import TWOTHREE from "../../public/2388Words.svg";
import star from "../../public/star.svg";
import English from "../../public/English.svg";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "../components/extension/file-uploader";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Delete, Paperclip, Trash } from "lucide-react";
export default function Home() {
  type avatarType = {
    label: StaticImageData | String | undefined;
    text: String;
  };
  const [files, setFiles] = useState<File[] | null>(null);
  const [clicked, setClicked] = useState<String>("All");

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 25,
    multiple: false,
  };
  const [avatar, setAvatar] = useState<avatarType[]>([
    {
      label: PhysicsHL,
      text: "Physics HL",
    },
    {
      label: EigthMIN,
      text: "18 min read",
    },
    {
      label: TWOTHREE,
      text: "2388 words",
    },
    {
      label: star,
      text: "7/7",
    },
    {
      label: English,
      text: "English",
    },
  ]);

  const handleOvelayOfWords = (text: String, type: String) => {
    if (type === "Title") {
      let result = text.slice(0, 35) + "...";
      return result;
    } else {
      let result = text.slice(0, 87) + "...";
      return result;
    }
  };
  const isStaticImageData = (value: any): value is StaticImageData => {
    return value && typeof value === "object" && "src" in value;
  };

  return (
    <main className="w-3/4 m-auto flex flex-col align-middle justify-center">
      <div className="w-full">
        <div className="w-[90%] justify-center font-extrabold text-[32px] montserrat xl:text-[30px] 2xl:text-[32px] md:text-[26px] lg:text-[28px] sm:text-[24px]">
          Hey IB Folks ! Unsure about the quality of your answers?
          <span className="text-[#6947BF]"> We get you.</span>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/4 ">
          <Card className="bg-[#FCFBFD] border-2 rounded-3xl py-2 mt-6">
            <CardHeader></CardHeader>
            <CardContent className="justify-center flex align-middle w-full m-auto">
              <FileUploader
                value={files}
                onValueChange={setFiles}
                dropzoneOptions={dropZoneConfig}
                className="w-full h-full"
              >
                <div>
                  <FileInput className="">
                    <Card className="outline-dashed outline-2 outline-[#CEC4EB] outline-offset-0 w-full">
                      <CardContent className="flex justify-center align-middle py-5">
                        <div className="">
                          <Image
                            color="#98A1BB"
                            src={Upload_File}
                            alt="upload"
                          />
                        </div>
                      </CardContent>
                      <div className="flex justify-center montserrat text-base leading-5 text-[#7A8196] font-bold">
                        Drag and drop a PDF
                      </div>
                      <div className="flex justify-center mt-1 montserrat font-semibold  text-xs leading-4 text-[#7A8196]">
                        *Limit 25 MB per file.
                      </div>
                      <CardFooter className="flex justify-center pt-5 pb-2 ">
                        <div
                          className="flex justify-center align-middle
                       text-violet-600 shadow-[0_2px_12px_0px_#6947BF1F] bg-white h-9 
                       montserrat font-extrabold text-sm rounded-full border border-[#CEC4EB] 
                      p-[8px 12px] items-center flex-col m-auto w-[170px]"
                        >
                          Upload your file
                        </div>
                      </CardFooter>
                      <CardFooter className="m-0 p-0 pb-1 h-6">
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <div className="flex justify-center m-auto" key={i}>
                              <Paperclip className="h-4 w-4 stroke-current justify-center m-auto mx-2" />
                              <span>
                                {file.name.length > 35
                                  ? handleOvelayOfWords(file.name, "Title")
                                  : file.name}
                              </span>
                              <Trash
                                onClick={() => setFiles([])}
                                className="cursor-pointer text-red-500 align-middle w-5 h-5 mx-5 justify-end m-auto"
                              />
                            </div>
                          ))}
                      </CardFooter>
                    </Card>
                  </FileInput>
                </div>
              </FileUploader>
            </CardContent>
            <CardContent>
              <div className="montserrat font-semibold text-sm text-[#7A8196]">
                Select your course & subjects*
              </div>
              <div className="flex gap-3 my-2">
                <div className="outline-none no-underline focus:outline-none focus:no-underline">
                  <Select>
                    <SelectTrigger className="bg-white w-[180px] rounded-full outline-none no-underline hover:ring-offset-0">
                      <SelectValue
                        className="outline-none no-underline focus:outline-none focus:no-underline"
                        placeholder="Coursework Type"
                      />
                    </SelectTrigger>
                    <SelectContent className="outline-none no-underline focus:outline-none focus:no-underline">
                      <SelectItem value="essays">essays</SelectItem>
                      <SelectItem value="term papers">term papers</SelectItem>
                      <SelectItem value="theses">theses</SelectItem>
                      <SelectItem value="dissertations">
                        dissertations
                      </SelectItem>
                      <SelectItem value="report project">
                        report project
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="bg-white w-[120px] rounded-full outline-none no-underline focus:outline-none focus:no-underline">
                      <SelectValue
                        className="outline-none no-underline focus:outline-none focus:no-underline"
                        placeholder="Subject"
                      />
                    </SelectTrigger>
                    <SelectContent className="outline-none no-underline focus:outline-none focus:no-underline">
                      <SelectItem value="light">Physics</SelectItem>
                      <SelectItem value="dark">English</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="montserrat font-semibold text-sm text-[#7A8196]">
                Enter your essay title*(Required)
              </div>
              <Input
                placeholder="how nation works..."
                className="w-1/2 mt-2 rounded-full bg-white outline-none "
              />
            </CardContent>
            <CardContent>
              <Button className="bg-[#ADB8C9] px-1 rounded-full w-fit gap-2">
                <Image
                  className="mx-1 w-[24px] h-[24px]"
                  src={Evaluate}
                  alt="Evaluate"
                />

                <div className="font-bold text-lg pr-5">
                  Evaluate your Score
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/4 h-full py-2 rounded-full">
          <div className="w-[310px] ml-2 border rounded-full items-stretch">
            <div className="flex justify-center">
              <Image src={astronuat} alt="austronaut" draggable={false} />
            </div>
            <div className="justify-center flex items-center align-middle p-0 h-full">
              <Card className="rounded-3xl">
                {/* <CardTitle className="px-6 py-2 text-[#6947BF] align-middle text-3xl font-extrabold justify-center flex w-full">
                  Evaluate your Coursework with a single click
                </CardTitle> */}
                <CardContent className="p-0 w-full bg-white rounded-3xl">
                  <Image
                    className="w-full object-cover p-0 mix-blend-multiply"
                    src={Report}
                    alt="report"
                    draggable={false}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="text-xl text-[#5B6170] font-bold mb-5">
          My coursework
        </div>
        <div className="flex w-[70vw] gap-4">
          <Card className="w-fit max-w-[550px] bg-gradient-to-r from-[#ffffff] from-0% to-[#E9D8F452] via-32%">
            <div className="flex">
              <div className="min-w-32 p-0 justify-center flex m-auto ml-2 mx-0 bg-white">
                <Image
                  className="m-1 bg-white border p-2"
                  width={120}
                  height={120}
                  src={Report}
                  alt="file"
                />
              </div>
              <div className="mx-2 my-3">
                <CardTitle className="w-[100%] font-bold text-lg text-[#3D404B]">
                  {handleOvelayOfWords(
                    "How does the Temperature of a Coop",
                    "Title"
                  )}
                </CardTitle>
                <CardDescription className="w-[100%] font-medium text-base text-[#3D404B]">
                  {handleOvelayOfWords(
                    "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
                    "Description"
                  )}
                </CardDescription>
                <CardFooter className="grid grid-flow-col grid-rows-2 p-0">
                  {avatar.map((ele, i) => {
                    return (
                      <div className="flex w-fit h-8 justify-center border mx-0 rounded-full px-0 my-1 bg-white">
                        <Avatar key={i} className="px-1 h-6 m-auto">
                          <AvatarImage
                            className="w-6 h-6"
                            src={
                              isStaticImageData(ele.label)
                                ? ele.label.src
                                : (ele.label as string)
                            }
                            alt={`${ele?.text}`}
                          />
                          {/* Optional Fallback */}
                          <AvatarFallback>
                            {ele.text.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="justify-center m-auto mx-0 pr-3 flex font-bold text-xs">
                          {ele.text}
                        </div>
                      </div>
                    );
                  })}
                </CardFooter>
              </div>
            </div>
          </Card>
          <Card className="w-fit max-w-[550px] bg-gradient-to-r from-[#ffffff] from-0% to-[#E9D8F452] via-32%">
            <div className="flex">
              <div className="min-w-32 p-0 justify-center flex m-auto ml-2 mx-0 bg-white">
                <Image
                  className="m-1 bg-white border p-2"
                  width={120}
                  height={120}
                  src={Report}
                  alt="file"
                />
              </div>
              <div className="mx-2 my-3">
                <CardTitle className="w-[100%] font-bold text-lg text-[#3D404B]">
                  {handleOvelayOfWords(
                    "How does the Temperature of a Coop",
                    "Title"
                  )}
                </CardTitle>
                <CardDescription className="w-[100%] font-medium text-base text-[#3D404B]">
                  {handleOvelayOfWords(
                    "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
                    "Description"
                  )}
                </CardDescription>
                <CardFooter className="grid grid-flow-col grid-rows-2 p-0">
                  {avatar.map((ele, i) => {
                    return (
                      <div className="flex w-fit h-8 justify-center border mx-0 rounded-full px-0 my-1 bg-white">
                        <Avatar key={i} className="px-1 h-6 m-auto">
                          <AvatarImage
                            className="w-6 h-6"
                            src={
                              isStaticImageData(ele.label)
                                ? ele.label.src
                                : (ele.label as string)
                            }
                            alt={`${ele?.text}`}
                          />
                          {/* Optional Fallback */}
                          <AvatarFallback>
                            {ele.text.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="justify-center m-auto mx-0 pr-3 flex font-bold text-xs">
                          {ele.text}
                        </div>
                      </div>
                    );
                  })}
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
        <div className="text-[#98A1BB] font-bold text-base text-end my-4 cursor-pointer hover:text-black">
          View all
        </div>
      </div>
      <div>
        <div className="text-xl text-[#5B6170] font-bold mb-5">
          Explore coursework
        </div>
        <div className="flex mb-2">
          <Button
            onClick={() => {
              setClicked("All");
            }}
            className={`${
              clicked === "All" ? "bg-white" : "bg-transparent"
            } text-[#6947BF] hover:bg-white active:bg-white font-extrabold text-base`}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setClicked("IA Example");
            }}
            className={`${
              clicked === "IA Example" ? "bg-white" : "bg-transparent"
            } text-[#6947BF] hover:bg-white active:bg-white font-extrabold text-base`}
          >
            IA Example
          </Button>
          <Button
            onClick={() => {
              setClicked("EE Example");
            }}
            className={`${
              clicked === "EE Example" ? "bg-white" : "bg-transparent"
            } text-[#6947BF] hover:bg-white active:bg-white font-extrabold text-base`}
          >
            EE Example
          </Button>
          <Button
            onClick={() => {
              setClicked("IO Example");
            }}
            className={`${
              clicked === "IO Example" ? "bg-white" : "bg-transparent"
            } text-[#6947BF] hover:bg-white active:bg-white font-extrabold text-base`}
          >
            IO Example
          </Button>
          <Button
            onClick={() => {
              setClicked("TOK Example");
            }}
            className={`${
              clicked === "TOK Example" ? "bg-white" : "bg-transparent"
            } text-[#6947BF] hover:bg-white active:bg-white font-extrabold text-base`}
          >
            TOK Example
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-2 w-[70vw] gap-4">
            <Card className="w-fit max-w-[550px] bg-gradient-to-r from-[#ffffff] from-0% to-[#E9D8F452] via-32%">
              <div className="flex">
                <div className="min-w-32 p-0 justify-center flex m-auto ml-2 mx-0 bg-white">
                  <Image
                    className="m-1 bg-white border p-2"
                    width={120}
                    height={120}
                    src={Report}
                    alt="file"
                  />
                </div>
                <div className="mx-2 my-3">
                  <CardTitle className="w-[100%] font-bold text-lg text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the Temperature of a Coop",
                      "Title"
                    )}
                  </CardTitle>
                  <CardDescription className="w-[100%] font-medium text-base text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
                      "Description"
                    )}
                  </CardDescription>
                  <CardFooter className="grid grid-flow-col grid-rows-2 p-0">
                    {avatar.map((ele, i) => {
                      return (
                        <div className="flex w-fit h-8 justify-center border mx-0 rounded-full px-0 my-1 bg-white">
                          <Avatar key={i} className="px-1 h-6 m-auto">
                            <AvatarImage
                              className="w-6 h-6"
                              src={
                                isStaticImageData(ele.label)
                                  ? ele.label.src
                                  : (ele.label as string)
                              }
                              alt={`${ele?.text}`}
                            />
                            {/* Optional Fallback */}
                            <AvatarFallback>
                              {ele.text.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="justify-center m-auto mx-0 pr-3 flex font-bold text-xs">
                            {ele.text}
                          </div>
                        </div>
                      );
                    })}
                  </CardFooter>
                </div>
              </div>
            </Card>
            <Card className="w-fit max-w-[550px] bg-gradient-to-r from-[#ffffff] from-0% to-[#E9D8F452] via-32%">
              <div className="flex">
                <div className="min-w-32 p-0 justify-center flex m-auto ml-2 mx-0 bg-white">
                  <Image
                    className="m-1 bg-white border p-2"
                    width={120}
                    height={120}
                    src={Report}
                    alt="file"
                  />
                </div>
                <div className="mx-2 my-3">
                  <CardTitle className="w-[100%] font-bold text-lg text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the Temperature of a Coop",
                      "Title"
                    )}
                  </CardTitle>
                  <CardDescription className="w-[100%] font-medium text-base text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
                      "Description"
                    )}
                  </CardDescription>
                  <CardFooter className="grid grid-flow-col grid-rows-2 p-0">
                    {avatar.map((ele, i) => {
                      return (
                        <div className="flex w-fit h-8 justify-center border mx-0 rounded-full px-0 my-1 bg-white">
                          <Avatar key={i} className="px-1 h-6 m-auto">
                            <AvatarImage
                              className="w-6 h-6"
                              src={
                                isStaticImageData(ele.label)
                                  ? ele.label.src
                                  : (ele.label as string)
                              }
                              alt={`${ele?.text}`}
                            />
                            {/* Optional Fallback */}
                            <AvatarFallback>
                              {ele.text.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="justify-center m-auto mx-0 pr-3 flex font-bold text-xs">
                            {ele.text}
                          </div>
                        </div>
                      );
                    })}
                  </CardFooter>
                </div>
              </div>
            </Card>
            <Card className="w-fit max-w-[550px] bg-gradient-to-r from-[#ffffff] from-0% to-[#E9D8F452] via-32%">
              <div className="flex">
                <div className="min-w-32 p-0 justify-center flex m-auto ml-2 mx-0 bg-white">
                  <Image
                    className="m-1 bg-white border p-2"
                    width={120}
                    height={120}
                    src={Report}
                    alt="file"
                  />
                </div>
                <div className="mx-2 my-3">
                  <CardTitle className="w-[100%] font-bold text-lg text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the Temperature of a Coop",
                      "Title"
                    )}
                  </CardTitle>
                  <CardDescription className="w-[100%] font-medium text-base text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
                      "Description"
                    )}
                  </CardDescription>
                  <CardFooter className="grid grid-flow-col grid-rows-2 p-0">
                    {avatar.map((ele, i) => {
                      return (
                        <div className="flex w-fit h-8 justify-center border mx-0 rounded-full px-0 my-1 bg-white">
                          <Avatar key={i} className="px-1 h-6 m-auto">
                            <AvatarImage
                              className="w-6 h-6"
                              src={
                                isStaticImageData(ele.label)
                                  ? ele.label.src
                                  : (ele.label as string)
                              }
                              alt={`${ele?.text}`}
                            />
                            {/* Optional Fallback */}
                            <AvatarFallback>
                              {ele.text.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="justify-center m-auto mx-0 pr-3 flex font-bold text-xs">
                            {ele.text}
                          </div>
                        </div>
                      );
                    })}
                  </CardFooter>
                </div>
              </div>
            </Card>
            <Card className="w-fit max-w-[550px] bg-gradient-to-r from-[#ffffff] from-0% to-[#E9D8F452] via-32%">
              <div className="flex">
                <div className="min-w-32 p-0 justify-center flex m-auto ml-2 mx-0 bg-white">
                  <Image
                    className="m-1 bg-white border p-2"
                    width={120}
                    height={120}
                    src={Report}
                    alt="file"
                  />
                </div>
                <div className="mx-2 my-3">
                  <CardTitle className="w-[100%] font-bold text-lg text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the Temperature of a Coop",
                      "Title"
                    )}
                  </CardTitle>
                  <CardDescription className="w-[100%] font-medium text-base text-[#3D404B]">
                    {handleOvelayOfWords(
                      "How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought",
                      "Description"
                    )}
                  </CardDescription>
                  <CardFooter className="grid grid-flow-col grid-rows-2 p-0">
                    {avatar.map((ele, i) => {
                      return (
                        <div className="flex w-fit h-8 justify-center border mx-0 rounded-full px-0 my-1 bg-white">
                          <Avatar key={i} className="px-1 h-6 m-auto">
                            <AvatarImage
                              className="w-6 h-6"
                              src={
                                isStaticImageData(ele.label)
                                  ? ele.label.src
                                  : (ele.label as string)
                              }
                              alt={`${ele?.text}`}
                            />
                            {/* Optional Fallback */}
                            <AvatarFallback>
                              {ele.text.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="justify-center m-auto mx-0 pr-3 flex font-bold text-xs">
                            {ele.text}
                          </div>
                        </div>
                      );
                    })}
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
          <div className="my-5">
            <Pagination>
              <PaginationContent>
                {/* <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem> */}
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>1</PaginationItem>
                {/* <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem> */}
                {/* <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem> */}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </main>
  );
}
