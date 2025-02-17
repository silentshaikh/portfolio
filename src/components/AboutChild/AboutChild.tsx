
import Image from 'next/image'
function AboutChild() {
  return (
    <section className='flex justify-start items-center pt-5 flex-col pb-5 pl-[300px] max-[1070px]:pl-0'>
      <div className="flex justify-center items-center flex-wrap">
      <div className="flex justify-center items-start flex-col max-[671px]:pt-16">
      <h1 className='text-teal-300 text-3xl font-bold pb-4 '>Assalam-O-Alikum,</h1>
        <p className='max-w-lg '>I am <strong className='text-teal-300'>Shaikh Abdul Moiz</strong>,a fresh front-end developer. I can
build cool websites using Next.js and also using React.js and
integrate typescript into these tools. It’s my passion to not
only develop websites for clients but also create a good user
experience for clients. It’s my mission to not compromise in
User Interface and User Experience. I have developed some
websites like E-commerce using Next.js which you can check
in my Portfolio.</p>
      </div>
        <div className="flex ">
          <Image className='w-72 rounded-full shadow-inshad p-3 max-[799px]:mt-3' 
          src='/images/a.m.png'
           alt="about"
           width={288}
           height={0}
           />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col pt-14">
        <h1 className='text-4xl font-bold shadow-inshad py-3 px-8 text-teal-300'>EDUCATION</h1>
        <div className="flex justify-center items-center flex-wrap pt-9">
          <div className="flex justify-center items-start flex-col shadow p-3 max-[799px]:mb-3">
            <h1 className='font-bold text-xl pb-2'>MATRICULATION</h1>
            <p><strong className='text-teal-300'>School: </strong>CMS Govt Higher Secondary Campus School</p>
            <p><strong className='text-teal-300'>Passing Year: </strong>2021</p>
          </div>
          <div className="flex justify-center items-start flex-col shadow p-3 ml-3 max-[799px]:mb-3">
            <h1 className='font-bold text-xl pb-2'>INTERMEDIATE</h1>
            <p><strong className='text-teal-300'>College: </strong>Sindh Muslim Govt Science College</p>
            <p><strong className='text-teal-300'>Passing Year: </strong>2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutChild;