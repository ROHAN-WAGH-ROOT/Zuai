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

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-w-3/6 w-[52%]">
        <div>
          <div className="font-extrabold text-[32px] montserrat">
            Hey IB Folks ! Unsure about the quality of your answers?{" "}
            <span className="text-[#6947BF]">We get you.</span>
          </div>
        </div>
        <div>
          <Card className="bg-[#FCFBFD] border-2 rounded-3xl">
            <CardHeader></CardHeader>
            <CardContent className="justify-center flex align-middle w-full m-auto">
              <Card className="borde-4 border-dashed w-full">
                <Image src={Upload_File} alt="upload" />
              </Card>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
