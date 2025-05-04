import FormWrapper from '@/components/ui/form-wrapper';
import { YouTube} from '@/components/ui/icons';
import { MoveRight, FileVolume } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-black min-h-screen">
      <div className="flex flex-col gap-[25px] items-center md:w-[800px] bg-white rounded-3xl border border-gray-200 p-10">
        <div className="flex gap-5 items-center justify-center text-red-500">
          <YouTube className="h-[50px] w-[50px]"></YouTube>
          <MoveRight className="h-[50px] w-[50px] text-black"></MoveRight>
          <FileVolume className="h-[50px] w-[50px]"></FileVolume>
        </div>
        <div className="font-bold text-4xl text-center">
          Youtube to MP3
        </div>
        <div className="font-bold text-gray-500">Convert YouTube videos to MP3 audio files</div>
        <FormWrapper></FormWrapper>
      </div>
    </div>
  );
}
