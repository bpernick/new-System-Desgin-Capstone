
I inherited a legacy codebase with a mysql database and refactored it to run with Postgres. 

# Goal 1
Scale the database (previously with 100 primary entries) to gracefully handle 10 million.

Challenges:
  - When trying to seed 10 million entries recieved error that javascript heap size was exceeded.
  - When attempting to query the database with 10 million items, queries were either very slow or abandoned.
  
Solutions:
  - Created a data generation and seeding algorithm that seeded a batch of 10 thousand entries every half second
  - Created unique index on the primary key that appers in the query
  - Created index on the foreign key that appers in the query


# Goal 2

Optimize the backend to handle as many incoming requests per second as possible. Artillery was used to generate fake users, with a baseline reading of 250 RPS before optimization.
  
Solutions:
 - Pool database connections with max pool size of 100. This doubled RPS served to 500.
 - Load balance read requests on the backend between 2 servers, using nginx as the load balancer and a read-only synchronous streaming replica as the second database. This increased RPS to about 750.

 Challenges: 
 - Finding the optimal max pool size required both experimentation and research as well as investigating the default postgres config to see what constraints were limiting max connections and whether it was a good idea to change them (after some experimentation it seemed the default config settings were good for my use case)
 - Deciding what strategy to use to duplicate the database was also a small research project. Since my use case only needs read operations, I decided a synchronous streaming replica or "hot copy" was a good way to go.
 - Configuring the master database to support replicas and implementing the hot copy required a fairly detailed dive into the postgres documentation.
 - Load balancing for high availability with nginx is relatively straightforward but requires finding and changing default settings that explicitly limit RPS (likely for DDoS protection)

# Goal 3

Deploy the load-balanced app to AWS free tier.

Solutions: 
- Deployed and seeded a postgres database with RDS and created two synchronous streaming replicas.
- Deployed three servers to raw EC2 instances running t2 micro. Deployed one more EC2 with an nginx load balancer to balance requests between the 3 servers.

Future steps:
- I am curious whether the response time bottleneck is in fact my server, my database queries, or both. If the database is in fact the database, having a single node server that load balances read requests between three diferent databases would be a far more cost-effective (and probably faster) architecture.
The first challenge was to scale the database architecture, which was designed for 100 primary entries, to handle 10 million entries. I decided to index the primary keys and the foreign keys used in join queries.








The main challenge was to maximize possible rps completed by my app. One easy way to do this may have been to collapse the database architecture into one big table and forgo the joins; while this certainly would have sped up query times I was more interested in performing optomizations that would not sacrifice memory (and would also push the boundaries of what I knew how to do).

I used artillery to synthesize virtual users, and got an initial reading saying that my system served 250 virtual requests per second. I got RPS up to 500 by simply pooling connections with a max pool size of 100.

To optimize further I decided to create a load balancer using read only synchronous streaming replicas of my database. 




Refactor to run postgres

Seed 10 million fake data points
  - Fails postman test without indexing;
  - Index only the primary and foreign keys used in the query



# Preliminary data:
500 RPS:
All virtual users finished
Summary report @ 15:02:24(-0500) 2020-03-15
  Scenarios launched:  15000
  Scenarios completed: 15000
  Requests completed:  15000
  RPS sent: 490.68
  Request latency:
    min: 0.6
    max: 104.9
    median: 1
    p95: 2
    p99: 3.6
  Scenario counts:
    0: 15000 (100%)
  Codes:
    200: 15000

700 rps:
All virtual users finished
Summary report @ 15:10:32(-0500) 2020-03-15
  Scenarios launched:  21008
  Scenarios completed: 21008
  Requests completed:  21008
  RPS sent: 395.04
  Request latency:
    min: 0.6
    max: 23118.7
    median: 1.3
    p95: 22905.5
    p99: 22991.4
  Scenario counts:
    0: 21008 (100%)
  Codes:
    200: 21008

Using console.time on query ONLY
query: 0.533ms
query: 0.242ms
query: 0.132ms
query: 0.140ms
query: 0.119ms
query: 0.111ms
query: 0.105ms
query: 0.099ms
query: 0.102ms
query: 0.142ms
query: 0.119ms

Using console.time on entire route
route: 4.870ms
route: 0.956ms
route: 0.933ms
route: 0.869ms
route: 0.787ms
route: 0.858ms
route: 0.769ms
route: 0.803ms
route: 0.766ms


Default pool size:

30 second mark: 700 rps

All virtual users finished
Summary report @ 18:22:34(-0500) 2020-03-15
  Scenarios launched:  21008
  Scenarios completed: 21008
  Requests completed:  21008
  RPS sent: 387.32
  Request latency:
    min: 0.7
    max: 24038.9
    median: 1.4
    p95: 23245.5
    p99: 23348.5
  Scenario counts:
    0: 21008 (100%)
  Codes:
    200: 21008


Pool max 20 

30 second mark: 700 rps

All virtual users finished
Summary report @ 18:38:06(-0500) 2020-03-15
  Scenarios launched:  21008
  Scenarios completed: 20864
  Requests completed:  20864
  RPS sent: 307.9
  Request latency:
    min: 0.7
    max: 40842.7
    median: 1.4
    p95: 40735.4
    p99: 40793.6
  Scenario counts:
    0: 21008 (100%)
  Codes:
    200: 20864
  Errors:
    ECONNRESET: 144

Default pool size:
30 second mark 927 rps



Pool size 1000 -- some requests failed w too may clients
All virtual users finished
Summary report @ 18:59:41(-0500) 2020-03-15
  Scenarios launched:  30000
  Scenarios completed: 26141
  Requests completed:  26141
  RPS sent: 503.19
  Request latency:
    min: 0.8
    max: 40486.3
    median: 2.8
    p95: 22789.8
    p99: 40405.3
  Scenario counts:
    0: 30000 (100%)
  Codes:
    200: 26075
    500: 66
  Errors:
    ETIMEDOUT: 3859

TOO MANY CLIENTS ERROR OCCURS between 100 and 200 RPS with max clients set to 10000

# Other
Query with aggregate function runs in abt 2.5 ms while simple join runs in about 1.5

Baseline: RPS sent: 522.19

All virtual users finished
Summary report @ 20:46:01(-0500) 2020-05-20
  Scenarios launched:  6000
  Scenarios completed: 5840
  Requests completed:  5840
  RPS sent: 120.92
  Request latency:
    min: 132.4
    max: 22933.7
    median: 6288
    p95: 10513.2
    p99: 16784.1
  Scenario counts:
    0: 6000 (100%)
  Codes:
    200: 5840
  Errors:
    ECONNRESET: 96
    ESOCKETTIMEDOUT: 64



All virtual users finished
Summary report @ 20:50:57(-0500) 2020-05-20
  Scenarios launched:  6000
  Scenarios completed: 6000
  Requests completed:  6000
  RPS sent: 196.59
  Request latency:
    min: 128.3
    max: 1238.3
    median: 188.3
    p95: 255.5
    p99: 294.6
  Scenario counts:
    0: 6000 (100%)
  Codes:
    200: 6000

