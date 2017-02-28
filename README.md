# CryptComm
Author: Haerunnisa Dewindita

CryptComm is a LAN based encrypted messaging system created during HackFSU. 
Front-end done in HTML/CSS with Bootstrap and Jinja. Back-end done with Python and SQL with a Django Framework.

Repository currently only holds website with encrypted user login.
User authentication system features PBKDF2 algorithm for password encryption and password reset token via email.

Refer to <a href="https://github.com/yashBhosale/CryptComm" target="new">this repo</a> for the back-end messaging encryption portion made by my other teammates.

## How to use

First, install Django using the command line:

```
$ pip install django
```
Then, clone this repository to run the project on local host. Run this command in the project directory containing manage.py:

```
$ python manage.py runserver
```

