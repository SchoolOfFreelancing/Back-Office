--- 
customlog: 
  - 
    format: combined
    target: /etc/apache2/logs/domlogs/schooloffreelancing.com
  - 
    format: "\"%{%s}t %I .\\n%{%s}t %O .\""
    target: /etc/apache2/logs/domlogs/schooloffreelancing.com-bytes_log
directoryhomeschool: 
  allowoverride: All
documentroot: /home/school/public_html
group: school
hascgi: 0
homedir: /home/school
include: 
  - 
    include: "\"/etc/apache2/conf.d/userdata/*.conf\""
ip: 178.63.69.247
owner: biswasit
phpopenbasedirprotect: 1
phpversion: ea-php70
port: 8080
scriptalias: 
  - 
    path: /home/school/public_html/cgi-bin
    url: /cgi-bin/
serveradmin: webmaster@schooloffreelancing.com
serveralias: mail.schooloffreelancing.com www.schooloffreelancing.com
servername: schooloffreelancing.com
ssl: 1
usecanonicalname: 'Off'
user: school
userdirprotect: ''
