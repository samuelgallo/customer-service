# Customer Service Requests Register

Proposal to develop a summarized Customer Service Requests Register system where the origin of the call can be registered (phone, chat, email), state, reason for the call and subject.

If you have any questions just send an email to samuel@samuelgallo.com

#### Local rinning

You need install [Node.js](http://nodejs.org/), [NPM](https://www.npmjs.com/get-npm) and [MySQL](https://dev.mysql.com/downloads/mysql/).

```sh
$ git clone git@github.com:samuelgallo/customer-service.git
$ cd customer-service
$ npm install
$ node index.js
```

The application should now be running on [localhost:3000](http://localhost:3000/).

#### Node.js
The choice of Node.js was due to the versatility of being able to deliver the backend and frontend at the same time, the ease of maintenance and development, the possibility of using a framework aimed only at the frontend, scalability.

#### Gulp
Gulp was used in this test to minify css and js as an example, because in a complex project we could use all the advantages of Gulp as the browser-sync to update the brower with each change made, imagemin to compress all images of the project , gulp-concat to concatenate files and gulp-uglify to compress js and check for possible errors.


#### Mysql
Mysql was chosen because it is one of the most used databases.

Changing the database connection
/config/dbConnection.js
```
host : 'localhost',
		user : 'Your User',
		password : 'Your Password',
		database : 'Your Database'
```

Creating the database
```
$ create database sac;
```

Creating the table
```
create table request(
    id_request int not null primary key auto_increment,
    origin varchar(50),
    subject varchar(50),
    state varchar(50),
    client varchar(100),
    receptionist varchar(100),    
    message text,
    data_criacao timestamp default current_timestamp
);
```

Populating Mysql
```
insert into request (id_request, origin, subject, state, client, receptionist, message, data_criacao) values  (default, 'Chat', 'Dúvida', 'RJ', 'João Silva', 'Sandra', 'Bacon ipsum dolor amet meatloaf prosciutto sirloin, strip steak beef tenderloin burgdoggen doner porchetta tongue boudin. Ham hock bresaola venison pancetta sausage turkey ribeye filet mignon picanha fatback jowl pork chop bacon corned beef.', now());
```

```
insert into request (id_request, origin, subject, state, client, receptionist, message, data_criacao) values  (default, 'Telefone', 'Crítica', 'SP', 'Maria Silva', 'Sandra', 'Bacon ipsum dolor amet meatloaf prosciutto sirloin, strip steak beef tenderloin burgdoggen doner porchetta tongue boudin. Ham hock bresaola venison pancetta sausage turkey ribeye filet mignon picanha fatback jowl pork chop bacon corned beef.', now());
```


##### Items that would improve this project
TDD - mocha ([Exemplo](https://semaphoreci.com/community/tutorials/,a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb))
NoSQL - MongoDB,
[Material Design Lite](https://getmdl.io/) - Alternative to Bootstrap,
[SOCKET.IO](https://socket.io/) - If there were multiple users on the platform
