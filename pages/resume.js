
const resume = () => {
    return (
        <main className=''>
            <h1>Resume page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio vero, dicta aut deserunt error omnis iste maiores neque magni culpa laboriosam ut reprehenderit delectus dignissimos illum exercitationem aliquam similique.</p>
         <style global jsx>{`
            body{
                background-color: #FCF5EC;
                height: 100vh; 
                display: flex;
                flex-direction: column;
            }
            #__next {
                height: 100vh; 
                display: flex;
                flex-direction: column;
            }
            main{
                flex-grow: 1
            }
         `}
        </style>   
        </main>
    )
}

export default resume;