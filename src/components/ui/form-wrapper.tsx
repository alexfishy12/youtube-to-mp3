'use client';

import { useState } from 'react';
import Spinner from '@/components/ui/spinner';
import { ArrowRight } from '@/components/ui/icons';

export default function FormWrapper() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (url == '') {
        const errorMsg = 'URL cannot be blank.';
        setError(errorMsg);
        console.error(errorMsg);
        return;
    }

    if (!url || !/^https?:\/\/(www\.)?youtube\.com\/watch\?v=/.test(url)) {
        const errorMsg = 'Invalid YouTube link.';
        setError(errorMsg);
        console.error(errorMsg);
        return;
    }

    setIsSubmitting(true);

    const download = async () => {
        const res = await fetch('/convert?url=' + encodeURIComponent(url));
      
        if (!res.ok) {
            const errorText = await res.text(); // error message
            console.error("Server error: " + errorText);
            setError("Server Error: " + errorText);
            setMessage(null);
            setIsSubmitting(false);
            return;
        }
      
        const blob = await res.blob();
        const disposition = res.headers.get('Content-Disposition');
      
        console.log(res);
        let filename = 'audio.mp3'; // fallback
        const match = disposition?.match(/filename="(.+?)"/);
        if (match && match[1]) {
          filename = match[1];
        }
      
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        setMessage("Conversion complete! Your MP3 file has been downloaded.");
        setIsSubmitting(false);
      };
    
    download();
      

    // do something with res if needed
  };

  return (
    <form id="1" onSubmit={handleClientSubmit} className="flex flex-col w-full gap-3">
        <input
            type="text"
            name="youtube-link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube URL here"
            className="flex-1 bg-white px-5 py-2 rounded-lg border text-center"
            required={true}
        />
        {error && (
            <div className="text-red-700 font-bold text-center text-lg px-5 py-1 border border-red-700 rounded">{error}</div>
        )}
        <button 
            type="submit" 
            form="1"
            disabled={isSubmitting}
            className="bg-black text-white px-5 py-2 h-full font-bold text-center rounded cursor-pointer"
        >
            {isSubmitting ? 
                <div className="flex gap-3 items-center justify-center">
                <Spinner className="text-white w-[20px] h-[20px]"></Spinner>
                <div>Converting...</div>
            </div>: 
                <div className="flex gap-5 items-center justify-center"><div>Convert to MP3</div><ArrowRight></ArrowRight></div>}
        </button>
        {message && (
            <div className="text-blue-600 font-bold text-center text-lg px-5 py-1 border border-blue-600 rounded">{message}</div>
        )}
    </form>
  );
}
