import MyResume from "@/components/MyResume";

const resume = () => {
    return (
        <div className=''>
            <MyResume />
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
            div{
                flex-grow: 1
            }
         `}
        </style>   
        </div>
    );
};

export default resume;