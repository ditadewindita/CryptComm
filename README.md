# CryptComm
Author: Haerunnisa Dewindita

LAN based encrypted messaging system created during HackFSU. 
Front-end done in HTML/CSS with Bootstrap and Jinja. Back-end done with Python and SQL with a Django Framework.

Repository currently only holds website with encrypted user login.
User authentication system features PBKDF2 algorithm for password encryption and password reset token via email.

## How to use

First, install Django using the command line:

```
$ pip install django
```
Then, clone this repository to run the project on local host. Run this command in the project directory containing manage.py:

```
$ python manage.py runserver
```

