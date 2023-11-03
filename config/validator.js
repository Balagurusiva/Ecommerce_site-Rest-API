const validateBody = {
    users: {
        register: {
            first_name: 'required|string|minLength:4|maxLength:15',
            last_name: 'required|string|minLength:4|maxLength:15',
            email: 'required|email|minLength:10',
            password: 'required|string|minLength:6|maxLength:15'
        },
        login: {
            email: 'required|email|minLength:10',
            password: 'required|string|minLength:6|maxLength:15'
        },
        emailCheck: {
            email: 'required|email|minLength:10'
        }
    },
    products: {
        create: {
            
        }
    }
}

export default validateBody;
