import { useEffect, useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");
import Image from 'next/image'


const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


const chatInput = [];
const chatOutput = [];
async function getResponse(input) {
    console.log(input);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(response.data.choices[0].text);
    chatOutput.push(response.data.choices[0].text)
}
export default function ChatBot() {
    const [input, setInput] = useState("")
    useEffect(() => { }, [chatOutput])

    return (
        <>
            <div className='p-28 pb-0 pt-12 star-field '>
                <div className="bold layer text-xl p-10 text-white"></div>
                <div className='text-center mb-8 font-bold text-3xl text-white'>Aj's ChatGpt with Nextjs and OpenAi </div>
                <div className='overflow-y-scroll h-64'>
                    {chatInput.length >= 1 &&
                        chatInput.map((mess, i) => (
                            <div>
                                <div className='text-justify mt-4 ml-20 mr-30'>
                                    <div className='grid grid-cols-4'>
                                        <div className=' col-span-3  rounded-3xl rounded-bl-sm ml-4 p-4 py-2 bg-violet-200'>{mess}</div>
                                    </div>
                                </div>
                                <div className='text-justify mt-4 mr-20 ml-30 '>
                                    <div className='grid grid-cols-4'>
                                        <div className='col-span-1'></div>
                                        <div className=' col-span-3  rounded-3xl rounded-br-sm ml-4 p-4 py-2 bg-violet-200 '>{chatOutput[i]}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mx-auto  flex justify-center items-center mt-12 px-20'>
                    <input type="text" value={input} className='text-black w-full border-slate-300 rounded-md h-10 border-2' onChange={(e) => setInput(e.target.value)} />
                    <button className=' rounded-3xl rounded-bl-sm ml-4 p-4 py-2 bg-violet-400 ' onClick={() => { getResponse(input); chatInput.push(input); setInput(''); }}>
                        <Image src={`/send.svg`} alt="SendIcon" height={40} width={40} ></Image>
                    </button>
                </div>
            </div>
        </>
    )
}
