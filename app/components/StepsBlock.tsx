'use client';
import styles from './page.module.scss'
import { projects } from '../data';
import Card from './Card';
import Image from 'next/image';

export default function StepsBlock() {

  return (
    <div>
        {projects.map((project, i) => (
            <Card key={`p_${i}`} i={i}>
                <div className='flex flex-col md:flex-row h-full gap-6 justify-between'>
                    <div className='flex flex-col md:w-3/6 w-full justify-between gap-8'>
                        <div dangerouslySetInnerHTML={{__html: project.title}}></div>
                        <div dangerouslySetInnerHTML={{
                            __html: project.description
                        }}></div>
                    </div>
                    <div className='flex justify-center items-center md:w-3/6'>
                        <Image src={project.src} alt={"image"} width={300} height={300} style={{
                            width: '100%',
                            maxHeight: "100%"
                        }}/>
                    </div>
                </div>
            </Card>
        ))}
    </div>

  )

}