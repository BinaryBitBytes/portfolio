import React from "react"

export default function Resume() {
    const { resume } = React.useState("")

    function encode(data) {
        return Object.keys(data)
        .map(
            (key) => encodedURIComponenet(key) + '=' encodedURIComponenet(data[key])
        )
        .join('&')
    }

    function handlePopulate(e) {
        e.preventDefault()
        fetch('/', {
            method: 'POST',
            hesders: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'image-name': 'path'})
        })
        .then(() => alert('Here is my resume.'))
        .catch((error) => alert(error))
    }

    return(
        <section id='resume' className='relative'>
            <div className= 'container px-5 py-10 mx-auto flex sm:flexnowrap flex-wrap'>
                <div className='lg:w-2/3 md:w-1/2 bg-gray 900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                    <iframe
                    width='100%'
                    height='100%'
                    title='resume'
                    className='absolute inset-0'
                    style= {{ filter: 'opacity(0.6)'}}
                    src='https://drive.google.com/file/d/1IqdEd_bC2zs6DUSxRr5nKvv26PlcIF0Y/view?usp=sharing'
                    />
                </div>
            </div>
        </section>
    )

}