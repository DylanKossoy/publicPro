






export async function getProjects() {



    const options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }


    const response = await fetch('./data/projects.json', options)

    if(response.status === 200) {
        const data = await response.json()

        return data
    } else {
        console.log(response.status)
    }
}