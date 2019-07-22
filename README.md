## PING BASED MONITORING SYSTEM

### **How To Install**
Using Docker

1. Setting **docker-compose.yml** as needed.
2. Run *docker-compose up*

Using Docker

1. Clone project repository to local
2. entered into the Project
3. Run *npm install*
4. Create DB and import scheme table from **db/mst_pbm.sql**
5. Run *npm Start*


### **How To Use**
1. Ping Monitoring will run every 5 Second or each device recorded in  **ip_config.json**.
2. Run `[GET] {url}/device-availability` to show monitoring result. 