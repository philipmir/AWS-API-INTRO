

var dogs = [
    {
        breed: "Golden Retriever",
        age: 3,
        color: "Golden",
        weight_kg: 30
    },
    {
        breed: "Siberian Husky",
        age: 4,
        color: "Black and White",
        weight_kg: 25
    },
    {
        breed: "Labrador Retriever",
        age: 2,
        color: "Black",
        weight_kg: 28
    }
];










exports.handler = async (event, context) => {

    const {method, path} = event.requestContext.http;

    
    if (method === 'GET' && path === '/dog') {
        return {
            statusCode: 200,
            headers: {
                "Content-Type":"application/json",
                },
                body : JSON.stringify({dogs})
            };
    }
    else if (method === 'POST' && path === '/dog') {
        const body = JSON.parse(event.body);

        dogs.push(body);

        return {
            statusCode: 200,
            headers: {
                "Content-Type":"application/json",
          },
         body : JSON.stringify({ sucess: true })
        };

    }





  
    return 'Hej';
}