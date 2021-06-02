import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true 
    },
    {
        name: 'John Doe',
        email: 'johndoe@admin.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mary Jane',
        email: 'maryjane@admin.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users