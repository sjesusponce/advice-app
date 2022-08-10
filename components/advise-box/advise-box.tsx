import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faCircleDot } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const AdviceBox = (props:any)=>{
    const [count, setCount] = useState(1)

    const increaseAdvice = async(e:any)=>{
        await props.onRandom()
        setCount(prevCount=> ++prevCount)
    }

    return(
        <section className='panel pt-6 px-8 pb-2 desktop:w-[22rem] mobile:w-[12.8rem]'>
            <div className='text-adv-neon-green desktop:text-[0.5rem] mobile:text-[0.4rem] text-center pb-2 tracking-[0.2rem]'>ADVICE #{count}</div>
            <article className='flex flex-col items-center'>
                <h1 className='desktop:text-[1.25rem] mobile:text-[1rem] text-center pb-4'>"{props.advice}"</h1>
                <div className='flex justify-between w-full pb-6'>
                    <span className='basis-2 relative before:border-b-2 before:border-adv-blue-gray desktop:before:w-[8.25rem] mobile:before:w-[3.75rem] before:block before:absolute before:top-[50%] before:translate-y-2/4'></span>
                    <FontAwesomeIcon className='w-[0.5rem]' icon={faPause}/>
                    <span className='basis-2 relative before:border-b-2 before:border-adv-blue-gray desktop:before:w-[8.25rem] mobile:before:w-[3.75rem] before:block before:absolute before:top-[50%] before:right-0 before:translate-y-2/4'></span>
                </div>
            </article>
            <div className='relative w-full text-[0.05rem]'>
                &nbsp;
                <button className='bg-adv-neon-green p-2 rounded-full absolute top-[-600%] left-[calc(50%-28px)] hover:bg-adv-dark-blue'
                onClick={increaseAdvice}>
                    <FontAwesomeIcon className='w-[1rem] text-adv-dark-gray' icon={faCircleDot} />
                </button>
            </div>
        </section>
    )
}

export default AdviceBox