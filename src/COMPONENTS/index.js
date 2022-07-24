import React, { useEffect, useState } from 'react'
import { FcBusinessman } from 'react-icons/fc';

function Quotegenerator() {


    const [quotes, setQuotes] = useState("");

    const getQuotes = async () => {
        await fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                let randomNumber = Math.floor(Math.random() * data.length)
                setQuotes(data[randomNumber]);
            })
    }

    useEffect(() => {
        getQuotes()
    }, [])




    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='border border-green-600 border-[5px] w-[500px] p-6 text-center rounded-lg'>
                <p className='text-white border border-fuchsia-700 p-2 mb-4 rounded-lg'> {quotes.text} </p>
                <div className='text-white mb-4 border border-cyan-700 px-6 py-2 rounded-lg w-fit flex items-center justify-around m-auto'>
                    <FcBusinessman size={25} className='text-white w-fit inline' />
                    <span>{quotes.author} </span>
                </div>
                <div className='space-x-5 mt-7'>
                    <button onClick={getQuotes} className='text-white border border-green-500 px-8 py-3 rounded-lg'>Quote new generate</button>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
                        target="_blank"
                        rel='noreferrer'
                        className='text-white border border-green-500 px-8 py-3 rounded-lg'>
                        Tweet
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Quotegenerator