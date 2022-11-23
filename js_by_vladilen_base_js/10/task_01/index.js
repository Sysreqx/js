const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

let onlineUsers = users.filter(u => u.status === "online");

console.log(`Сейчас в онлайн следующие пользователи: ${onlineUsers.map(u => u.username).join(", ")}`);
