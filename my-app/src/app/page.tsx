import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Upload_File from "../../public/upload_file.svg";
import Evaluate from "../../public/EvaluateButton.svg";
import Report from "../../public/report  2.png";
import astronuat from "../../public/astronuat.svg";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-2/3 justify-center items-center">
        <div className="min-w-3/6 h-3/4 w-4/6">
          <div>
            <div className="font-extrabold text-[32px] montserrat">
              Hey IB Folks ! Unsure about the quality of your answers?{" "}
              <span className="text-[#6947BF]">We get you.</span>
            </div>
          </div>
          <div>
            <Card className="bg-[#FCFBFD] border-2 rounded-3xl py-2 mt-6">
              <CardHeader></CardHeader>
              <CardContent className="justify-center flex align-middle w-full m-auto">
                <Card className=" outline-dashed outline-2  outline-[#CEC4EB] outline-offset-0  w-full">
                  <CardContent className="flex justify-center align-middle py-5">
                    <div className="">
                      <Image color="#98A1BB" src={Upload_File} alt="upload" />
                    </div>
                  </CardContent>
                  <div className="flex justify-center montserrat text-base leading-5 text-[#7A8196] font-bold">
                    Drag and drop a PDF
                  </div>
                  <div className="flex justify-center mt-1 montserrat font-semibold  text-xs leading-4 text-[#7A8196]">
                    *Limit 25 MB per file.
                  </div>
                  <CardFooter className="flex justify-center pt-5 pb-8 ">
                    <Button
                      variant={"secondary"}
                      className="text-violet-600 shadow-[0_2px_12px_0px_#6947BF1F] bg-white  w-44 h-9 montserrat font-extrabold text-sm rounded-full border border-[#CEC4EB] p-[8px 12px]"
                    >
                      Upload your file
                    </Button>
                  </CardFooter>
                </Card>
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
                        <SelectItem value="light">IA</SelectItem>
                        <SelectItem value="dark">EE</SelectItem>
                        <SelectItem value="system">IO</SelectItem>
                        <SelectItem value="system">TOK</SelectItem>
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
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
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
        </div>
        <div className="w-[310px] ml-2 border items-stretch">
          <div className="flex justify-center">
            <Image src={astronuat} alt="austronaut" />
          </div>
          <div className="justify-center flex items-center align-middle w-full p-0 h-full">
            <Card className="py-4">
              <CardTitle className="px-6 text-[#6947BF] align-middle text-3xl font-extrabold justify-center flex w-full">
                Evaluate your Coursework with a single click
              </CardTitle>
              <CardContent className="w-full py-3 h-full">
                <Image
                  className="w-full object-cover p-0"
                  src={Report}
                  alt="report"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
