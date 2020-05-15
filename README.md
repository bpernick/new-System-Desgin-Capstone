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

pg_ctl --pgdata=./data/db1 --log=./log/db1 --options="--port=5433" start

Baseline: RPS sent: 522.19