import { CodeBlock } from "@/components/ui/code-block";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

export default function page() {
  const POST = `fetch('http://localhost:3000/api/endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'YOUR_NAME' }),
  })
    .then(response => {
        if (!response.ok) { // Check the response.ok field
            console.error("response not ok")
        }
        return response.text();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`;

  const GET = `fetch('http://localhost:3000/api/endpoint')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;

  const postResp = `{
    message: 'Name stored successfully!'
}`;

  const getResp = `{
    message: 'Your Name is: ', name: 'YOUR_NAME'
    }`;

  return (
    <div className="relative flex flex-col h-screen w-screen items-center justify-center overflow-hidden bg-black p-20">
      <BackgroundBeams />
      <p className="text-white text-3xl pb-4 font-family-sans">
        Press F12, copy the JSON of the request you want to hit, paste it into
        the console and voila!✨
      </p>
      <div className="flex flex-row content-div">
        <CodeBlock
          language="javascript"
          filename="POST"
          highlightLines={[]}
          code={POST}
        />
        <div className="ml-4"></div>
        <CodeBlock
          language="json"
          filename="Expected Response"
          highlightLines={[]}
          code={postResp}
        />
      </div>
      <div className="flex flex-row content-div pt-4">
        <CodeBlock
          language="javascript"
          filename="GET"
          highlightLines={[]}
          code={GET}
        />
        <div className="ml-4"></div>
        <CodeBlock
          language="json"
          filename="Expected Response"
          highlightLines={[]}
          code={getResp}
        />
      </div>
      <Link href="/last">
        <RainbowButton className="mt-6">Next</RainbowButton>
      </Link>
    </div>
  );
}
